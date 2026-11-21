"use server";

import {
  deletePost,
  getAllPosts,
  getPostById,
} from "@/lib/blog";
import { isUserAdmin } from "@/lib/admin";
import { verifyIdToken } from "@/lib/firebaseAdmin";
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

export async function deleteBlogPostAction(id: string, idToken: string): Promise<{ slug: string }> {
  await requireAdmin(idToken);
  const post = await getPostById(id);
  if (!post) throw new Error("Post not found");

  await deletePost(id);
  return { slug: post.slug };
}
