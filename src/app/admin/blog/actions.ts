"use server";

import {
  BLOG_POSTS_CACHE_TAG,
  createPost,
  deletePost,
  getAllPosts,
  getBlogPostCacheTag,
  getPostById,
  updatePost,
} from "@/lib/blog";
import { isUserAdmin } from "@/lib/admin";
import { verifyIdToken } from "@/lib/firebaseAdmin";
import { revalidatePath, updateTag } from "next/cache";
import type { BlogPost, BlogPostInput } from "@/types/blog";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

interface AdminIdentity {
  email: string;
  uid: string;
}

interface SaveBlogPostPayload {
  postId?: string;
  input: BlogPostInput;
  previousSlug?: string;
  idToken: string;
}

function isValidSlug(value: unknown): value is string {
  return typeof value === "string" && SLUG_PATTERN.test(value);
}

function isValidPostInput(value: unknown): value is BlogPostInput {
  if (!value || typeof value !== "object") return false;
  const input = value as Record<string, unknown>;

  return (
    typeof input.title === "string" &&
    input.title.trim().length > 0 &&
    isValidSlug(input.slug) &&
    typeof input.content === "string" &&
    typeof input.excerpt === "string" &&
    typeof input.featuredImage === "string" &&
    (input.status === "draft" || input.status === "published") &&
    (input.publishedAt === undefined || input.publishedAt === null || typeof input.publishedAt === "string") &&
    (input.categoryId === undefined || input.categoryId === null || typeof input.categoryId === "string") &&
    (input.authorRef === undefined || input.authorRef === null || typeof input.authorRef === "string") &&
    (input.metaTitle === undefined || typeof input.metaTitle === "string") &&
    (input.metaDescription === undefined || typeof input.metaDescription === "string")
  );
}

async function requireAdmin(idToken: string): Promise<AdminIdentity> {
  const user = await verifyIdToken(idToken);
  if (!user?.email || !(await isUserAdmin(user.email))) {
    throw new Error("Unauthorized");
  }

  return user;
}

export async function saveBlogPostAction(payload: SaveBlogPostPayload): Promise<{
  id: string;
}> {
  const { postId, input, previousSlug, idToken } = payload;
  const admin = await requireAdmin(idToken);

  if (!isValidPostInput(input) || (previousSlug !== undefined && !isValidSlug(previousSlug))) {
    throw new Error("Invalid blog post data");
  }

  let savedPost;
  if (!postId) {
    savedPost = await createPost(input, admin.uid, admin.email);
  } else {
    savedPost = await updatePost(postId, input);
  }

  invalidateBlogCache(input.slug, previousSlug);

  return {
    id: savedPost.id,
  };
}

export async function getAdminBlogPostsAction(idToken: string): Promise<BlogPost[]> {
  await requireAdmin(idToken);
  return getAllPosts();
}

export async function getAdminBlogPostAction(id: string, idToken: string): Promise<BlogPost | null> {
  await requireAdmin(idToken);
  return getPostById(id);
}

export async function deleteBlogPostAction(id: string, idToken: string): Promise<void> {
  await requireAdmin(idToken);
  const post = await getPostById(id);
  if (!post) throw new Error("Post not found");

  await deletePost(id);
  invalidateBlogCache(post.slug);
}

function invalidateBlogCache(slug: string, previousSlug?: string): void {
  // updateTag is intentionally used from this Server Action rather than a
  // client-triggered route handler: the next public request must wait for the
  // latest article record instead of receiving stale-while-revalidate content.
  updateTag(BLOG_POSTS_CACHE_TAG);
  updateTag(getBlogPostCacheTag(slug));
  if (previousSlug && previousSlug !== slug) {
    updateTag(getBlogPostCacheTag(previousSlug));
  }

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");
  revalidatePath("/blog/author/[slug]", "page");
  revalidatePath("/blog/[slug]", "page");
  revalidatePath(`/blog/${slug}`);
  if (previousSlug && previousSlug !== slug) {
    revalidatePath(`/blog/${previousSlug}`);
  }
}
