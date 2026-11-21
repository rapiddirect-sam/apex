"use server";

import {
  deletePost,
  getAllPosts,
  getPostById,
} from "@/lib/blog";
import { isUserAdmin } from "@/lib/admin";
import { verifyIdToken } from "@/lib/firebaseAdmin";
import type { BlogPost } from "@/types/blog";

export type AdminBlogPostsResult =
  | { ok: true; posts: BlogPost[] }
  | {
      ok: false;
      code: "UNAUTHORIZED" | "STORAGE_UNAVAILABLE" | "QUERY_FAILED";
      message: string;
    };

async function requireAdmin(idToken: string): Promise<{ email: string; uid: string }> {
  const user = await verifyIdToken(idToken);
  if (!user?.email || !(await isUserAdmin(user.email))) {
    throw new Error("Unauthorized");
  }

  return user;
}

/**
 * A list read must not throw an opaque production Server Action error into
 * the admin UI. Return a deliberately safe category instead: it is enough to
 * recover or diagnose the page without disclosing database details.
 */
export async function getAdminBlogPostsAction(idToken: string): Promise<AdminBlogPostsResult> {
  try {
    await requireAdmin(idToken);
  } catch {
    return {
      ok: false,
      code: "UNAUTHORIZED",
      message: "Your administrator session could not be verified. Sign in again, then retry.",
    };
  }

  try {
    return { ok: true, posts: await getAllPosts() };
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message === "Blog storage is not configured") {
      return {
        ok: false,
        code: "STORAGE_UNAVAILABLE",
        message: "Blog storage is not available in this deployment. No articles have been removed.",
      };
    }

    return {
      ok: false,
      code: "QUERY_FAILED",
      message: "The blog database could not be read. No articles have been removed. Please retry.",
    };
  }
}

export async function getAdminBlogPostAction(id: string, idToken: string): Promise<BlogPost | null> {
  await requireAdmin(idToken);
  return getPostById(id);
}

export async function deleteBlogPostAction(id: string, idToken: string): Promise<{ slug: string }> {
  await requireAdmin(idToken);
  const post = await getPostById(id);
  if (!post) throw new Error("Post not found");

  await deletePost(id);
  return { slug: post.slug };
}
