"use server";

import {
  deletePost,
  getAllPosts,
  getPostById,
  getPostBySlug,
  isPostPubliclyAvailable,
} from "@/lib/blog";
import { isUserAdmin } from "@/lib/admin";
import { verifyIdToken } from "@/lib/firebaseAdmin";
import { prepareBlogContentHtml } from "@/lib/blogContentEnhance";
import { sanitizeBlogHtml } from "@/lib/sanitizeBlogHtml";
import { getBlogContentRevision } from "@/lib/blogContentRevision";
import type { BlogPost } from "@/types/blog";

async function requireAdmin(idToken: string): Promise<{ email: string; uid: string }> {
  const user = await verifyIdToken(idToken);
  if (!user?.email || !(await isUserAdmin(user.email))) {
    throw new Error("Unauthorized");
  }

  return user;
}

export async function getAdminBlogPostsAction(idToken: string): Promise<BlogPost[]> {
  await requireAdmin(idToken);
  return getAllPosts();
}

export async function getAdminBlogPostAction(id: string, idToken: string): Promise<BlogPost | null> {
  await requireAdmin(idToken);
  return getPostById(id);
}

/**
 * Runs the same server-only content preparation used by the public article
 * page. This is a diagnostic guard: it neither writes data nor changes cache
 * state, but it prevents a failed ISR render from being mistaken for a save
 * or authentication failure.
 */
export async function checkBlogRenderAction(
  slug: string,
  idToken: string
): Promise<{ updatedAt: string; isPublic: boolean; renderedRevision: string }> {
  await requireAdmin(idToken);
  const post = await getPostBySlug(slug);
  if (!post) throw new Error("Saved post could not be read by the server renderer");

  const { html } = prepareBlogContentHtml(post.content);
  const renderedHtml = sanitizeBlogHtml(html);

  return {
    updatedAt: post.updatedAt.toISOString(),
    isPublic: isPostPubliclyAvailable(post),
    renderedRevision: getBlogContentRevision(renderedHtml),
  };
}

export async function deleteBlogPostAction(id: string, idToken: string): Promise<{ slug: string }> {
  await requireAdmin(idToken);
  const post = await getPostById(id);
  if (!post) throw new Error("Post not found");

  await deletePost(id);
  return { slug: post.slug };
}
