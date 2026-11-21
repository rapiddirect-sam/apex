"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { TiptapEditor, type TiptapEditorHandle } from "./TiptapEditor";
import { ImageUpload } from "./ImageUpload";
import { BlogPost, BlogPostInput, Category, Author } from "@/types/blog";
import { generateSlug } from "@/lib/blog";
import { createBlogPostFromClient, updateBlogPostFromClient } from "@/lib/blogClient";
import { checkBlogRenderAction } from "@/app/admin/blog/actions";
import { setAuthSessionCookie } from "@/lib/authSessionCookie";
import { getAllCategories } from "@/lib/categories";
import { getAllAuthors } from "@/lib/authors";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, Save, Eye } from "lucide-react";
import Link from "next/link";

interface BlogPostFormProps {
  post?: BlogPost;
  isEditing?: boolean;
}

export function BlogPostForm({ post, isEditing = false }: BlogPostFormProps) {
  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [content, setContent] = useState(post?.content || "");
  // Tiptap changes can arrive in the same browser task as a Save click. Keep
  // the latest editor HTML outside React's asynchronous state queue so the
  // submitted article always contains the exact visible editor content.
  const latestContentRef = useRef(post?.content || "");
  const editorRef = useRef<TiptapEditorHandle>(null);
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [featuredImage, setFeaturedImage] = useState(post?.featuredImage || "");
  const isScheduledPost = Boolean(post?.publishedAt && post.publishedAt > new Date());
  const [publishMode, setPublishMode] = useState<"draft" | "now" | "schedule">(
    post?.status === "published" ? (isScheduledPost ? "schedule" : "now") : "draft"
  );
  const [scheduledAt, setScheduledAt] = useState(
    isScheduledPost && post?.publishedAt ? toDateTimeLocal(post.publishedAt) : ""
  );
  const [categoryId, setCategoryId] = useState(post?.categoryId || "");
  const [authorRef, setAuthorRef] = useState(post?.authorRef || "");
  const [categories, setCategories] = useState<Category[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [metaTitle, setMetaTitle] = useState(post?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(post?.metaDescription || "");
  const [saving, setSaving] = useState(false);
  const [hasUnsavedContent, setHasUnsavedContent] = useState(false);
  const [autoSlug, setAutoSlug] = useState(!isEditing);

  const { user } = useAuth();
  const router = useRouter();

  const handleContentChange = useCallback((nextContent: string) => {
    if (nextContent === latestContentRef.current) return;
    latestContentRef.current = nextContent;
    setContent(nextContent);
    setHasUnsavedContent(true);
  }, []);

  function toDateTimeLocal(value: Date): string {
    const offset = value.getTimezoneOffset();
    return new Date(value.getTime() - offset * 60_000).toISOString().slice(0, 16);
  }

  useEffect(() => {
    getAllCategories().then(setCategories);
    getAllAuthors().then(setAuthors);
  }, []);

  useEffect(() => {
    if (autoSlug && title) {
      setSlug(generateSlug(title));
    }
  }, [title, autoSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    if (publishMode === "schedule") {
      const scheduledDate = new Date(scheduledAt);
      if (!scheduledAt || Number.isNaN(scheduledDate.getTime()) || scheduledDate <= new Date()) {
        alert("Choose a future publication date and time.");
        return;
      }
    }

    setSaving(true);
    let persisted = false;
    try {
      // Read the editor itself at the point of submission. This guarantees
      // that text, heading, image, table, and HTML-mode changes are saved
      // even if React has not yet committed the latest onChange state.
      const currentContent = editorRef.current?.getCurrentHtml() ?? latestContentRef.current;
      latestContentRef.current = currentContent;
      setContent(currentContent);
      const publishImmediately =
        publishMode === "now" &&
        (!post || post.status !== "published" || isScheduledPost);
      const input: BlogPostInput = {
        title,
        slug,
        content: currentContent,
        excerpt,
        featuredImage,
        status: publishMode === "draft" ? "draft" : "published",
        publishedAt:
          publishMode === "schedule"
            ? new Date(scheduledAt).toISOString()
            : publishImmediately
              ? null
              : undefined,
        categoryId: categoryId || null,
        authorRef: authorRef || null,
        metaTitle: metaTitle || undefined,
        metaDescription: metaDescription || undefined,
      };

      const savedRevision = isEditing && post
        ? await updateBlogPostFromClient(post.id, input)
        : await createBlogPostFromClient(input, user.uid, user.email || "");
      persisted = true;

      if (savedRevision.content !== currentContent) {
        throw new Error("The saved content does not match the editor content.");
      }

      const idToken = await user.getIdToken(true);
      const renderCheck = await checkBlogRenderAction(slug, idToken);
      if (renderCheck.updatedAt !== savedRevision.updatedAt) {
        throw new Error("The server renderer did not read the saved article revision.");
      }
      if (publishMode === "now" && !renderCheck.isPublic) {
        throw new Error("The saved article is not publicly available to the server renderer.");
      }

      // Preserve the Nov. 11 public-refresh boundary: refresh the token in
      // the first-party cookie, then call the independent revalidation route
      // only after Supabase has confirmed the write and server rendering has
      // successfully processed that exact revision.
      setAuthSessionCookie(idToken);
      const refreshResponse = await fetch("/api/admin/blog/revalidate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, previousSlug: post?.slug }),
      });

      if (!refreshResponse.ok) {
        const result = (await refreshResponse.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || `Public refresh failed (${refreshResponse.status}).`);
      }

      setHasUnsavedContent(false);
      router.push("/admin/blog");
    } catch (error) {
      console.error("Error saving post:", error);
      const message = error instanceof Error ? error.message : "Unknown error";
      alert(
        persisted
          ? `Article saved, but verification or public refresh failed: ${message}`
          : `Failed to save post: ${message}`
      );
    } finally {
      setSaving(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    background: "#1a1a1a",
    border: "1px solid #444",
    borderRadius: "8px",
    color: "#FFFFFF",
    fontSize: "16px",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    color: "#C5C6C9",
    fontSize: "14px",
    marginBottom: "8px",
    fontWeight: 500 as const,
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/admin/blog"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              background: "#2a2a2a",
              borderRadius: "8px",
              color: "#C5C6C9",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF" }}>
            {isEditing ? "Edit Post" : "New Post"}
          </h1>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {isEditing && post?.status === "published" && post.publishedAt && post.publishedAt <= new Date() && (
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                background: "#2a2a2a",
                color: "#C5C6C9",
                border: "none",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              <Eye size={18} />
              View Post
            </Link>
          )}
          <button
            type="submit"
            disabled={saving}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 24px",
              background: saving ? "#666" : "#D09947",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              cursor: saving ? "not-allowed" : "pointer",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <Save size={18} />
            {saving ? "Saving..." : "Save Post"}
          </button>
        </div>
      </div>

      {hasUnsavedContent && (
        <p style={{ color: "#F2D28B", fontSize: "13px", margin: "-8px 0 16px" }}>
          You have unsaved content changes.
        </p>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "32px" }}>
        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Title */}
          <div>
            <label style={labelStyle}>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter post title"
              style={inputStyle}
            />
          </div>

          {/* Slug */}
          <div>
            <label style={labelStyle}>
              Slug
              {!isEditing && (
                <button
                  type="button"
                  onClick={() => setAutoSlug(!autoSlug)}
                  style={{
                    marginLeft: "8px",
                    padding: "2px 8px",
                    background: autoSlug ? "#D09947" : "#333",
                    color: autoSlug ? "#000" : "#C5C6C9",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "11px",
                    cursor: "pointer",
                  }}
                >
                  {autoSlug ? "Auto" : "Manual"}
                </button>
              )}
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => {
                setAutoSlug(false);
                setSlug(e.target.value);
              }}
              required
              placeholder="post-url-slug"
              style={inputStyle}
            />
          </div>

          {/* Excerpt */}
          <div>
            <label style={labelStyle}>Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief description of the post (shown in listings)"
              rows={3}
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />
          </div>

          {/* Content */}
          <div>
            <label style={labelStyle}>Content</label>
            <TiptapEditor
              ref={editorRef}
              content={content}
              onChange={handleContentChange}
              postSlug={slug}
              placeholder="Write your blog post content..."
            />
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Status */}
          <div
            style={{
              background: "#2a2a2a",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #333",
            }}
          >
            <label style={labelStyle}>Publication</label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => setPublishMode("draft")}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: publishMode === "draft" ? "#D09947" : "#1a1a1a",
                  color: publishMode === "draft" ? "#000" : "#C5C6C9",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Draft
              </button>
              <button
                type="button"
                onClick={() => setPublishMode("now")}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: publishMode === "now" ? "#22c55e" : "#1a1a1a",
                  color: publishMode === "now" ? "#000" : "#C5C6C9",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Publish now
              </button>
              <button
                type="button"
                onClick={() => setPublishMode("schedule")}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: publishMode === "schedule" ? "#5b83c4" : "#1a1a1a",
                  color: publishMode === "schedule" ? "#fff" : "#C5C6C9",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Schedule
              </button>
            </div>
            {publishMode === "schedule" && (
              <div style={{ marginTop: "14px" }}>
                <label style={{ ...labelStyle, fontSize: "13px" }}>Publish date and time</label>
                <input
                  type="datetime-local"
                  value={scheduledAt}
                  onChange={(e) => setScheduledAt(e.target.value)}
                  required
                  style={{ ...inputStyle, fontSize: "14px", padding: "10px 12px" }}
                />
                <p style={{ color: "#888", fontSize: "12px", lineHeight: 1.5, marginTop: "8px" }}>
                  Uses your browser&apos;s local time. The post remains private until this time.
                </p>
              </div>
            )}
          </div>

          {/* Category */}
          <div
            style={{
              background: "#2a2a2a",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #333",
            }}
          >
            <label style={labelStyle}>Category</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              style={{
                ...inputStyle,
                cursor: "pointer",
                appearance: "auto",
              }}
            >
              <option value="">Uncategorized</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Author */}
          <div
            style={{
              background: "#2a2a2a",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #333",
            }}
          >
            <label style={labelStyle}>Author</label>
            <select
              value={authorRef}
              onChange={(e) => setAuthorRef(e.target.value)}
              style={{
                ...inputStyle,
                cursor: "pointer",
                appearance: "auto",
              }}
            >
              <option value="">No Author</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
            {authors.length === 0 && (
              <p style={{ color: "#888", fontSize: "12px", marginTop: "8px" }}>
                No authors yet.{" "}
                <Link href="/admin/authors/new" style={{ color: "#D09947" }}>
                  Create one
                </Link>
              </p>
            )}
          </div>

          {/* Featured Image */}
          <div
            style={{
              background: "#2a2a2a",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #333",
            }}
          >
            <ImageUpload
              value={featuredImage}
              onChange={setFeaturedImage}
              postSlug={slug}
              defaultDescription="featured"
            />
          </div>

          {/* SEO Settings */}
          <div
            style={{
              background: "#2a2a2a",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #333",
            }}
          >
            <h3 style={{ color: "#fff", fontSize: "14px", fontWeight: 600, marginBottom: "16px" }}>
              SEO Settings
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ ...labelStyle, fontSize: "13px" }}>
                  Meta Title
                  <span style={{ color: "#666", fontWeight: 400, marginLeft: "6px" }}>
                    ({metaTitle.length}/60)
                  </span>
                </label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder={title || "Uses post title if empty"}
                  style={{ ...inputStyle, fontSize: "14px", padding: "10px 12px" }}
                />
              </div>
              <div>
                <label style={{ ...labelStyle, fontSize: "13px" }}>
                  Meta Description
                  <span style={{ color: "#666", fontWeight: 400, marginLeft: "6px" }}>
                    ({metaDescription.length}/160)
                  </span>
                </label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder={excerpt || "Uses excerpt if empty"}
                  rows={3}
                  style={{ ...inputStyle, fontSize: "14px", padding: "10px 12px", resize: "vertical" }}
                />
              </div>
            </div>
          </div>

          {/* Post Info (only when editing) */}
          {isEditing && post && (
            <div
              style={{
                background: "#2a2a2a",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #333",
              }}
            >
              <h3 style={{ color: "#fff", fontSize: "14px", fontWeight: 600, marginBottom: "12px" }}>
                Post Info
              </h3>
              <div style={{ fontSize: "13px", color: "#888" }}>
                <p style={{ marginBottom: "8px" }}>
                  <strong style={{ color: "#C5C6C9" }}>Created:</strong>{" "}
                  {post.createdAt.toLocaleDateString()}
                </p>
                <p style={{ marginBottom: "8px" }}>
                  <strong style={{ color: "#C5C6C9" }}>Updated:</strong>{" "}
                  {post.updatedAt.toLocaleDateString()}
                </p>
                {post.publishedAt && (
                  <p>
                    <strong style={{ color: "#C5C6C9" }}>Published:</strong>{" "}
                    {post.publishedAt.toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
