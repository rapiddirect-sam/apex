"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TiptapEditor } from "./TiptapEditor";
import { ImageUpload } from "./ImageUpload";
import { BlogPost, BlogPostInput } from "@/types/blog";
import { createPost, updatePost, generateSlug } from "@/lib/blog";
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
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [featuredImage, setFeaturedImage] = useState(post?.featuredImage || "");
  const [status, setStatus] = useState<"draft" | "published">(post?.status || "draft");
  const [saving, setSaving] = useState(false);
  const [autoSlug, setAutoSlug] = useState(!isEditing);

  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (autoSlug && title) {
      setSlug(generateSlug(title));
    }
  }, [title, autoSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    setSaving(true);

    try {
      const input: BlogPostInput = {
        title,
        slug,
        content,
        excerpt,
        featuredImage,
        status,
      };

      if (isEditing && post) {
        await updatePost(post.id, input);
      } else {
        await createPost(input, user.uid, user.email || "");
      }

      router.push("/admin/blog");
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Failed to save post. Please try again.");
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
          {isEditing && post?.status === "published" && (
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
              content={content}
              onChange={setContent}
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
            <label style={labelStyle}>Status</label>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                type="button"
                onClick={() => setStatus("draft")}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: status === "draft" ? "#D09947" : "#1a1a1a",
                  color: status === "draft" ? "#000" : "#C5C6C9",
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
                onClick={() => setStatus("published")}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: status === "published" ? "#22c55e" : "#1a1a1a",
                  color: status === "published" ? "#000" : "#C5C6C9",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Published
              </button>
            </div>
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
            <ImageUpload value={featuredImage} onChange={setFeaturedImage} />
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
