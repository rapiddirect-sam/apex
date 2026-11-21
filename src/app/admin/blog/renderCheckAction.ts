"use server";

import { getPostBySlug, isPostPubliclyAvailable } from "@/lib/blog";
import { isUserAdmin } from "@/lib/admin";
import { verifyIdToken } from "@/lib/firebaseAdmin";
import { prepareBlogContentHtml } from "@/lib/blogContentEnhance";
import { sanitizeBlogHtml } from "@/lib/sanitizeBlogHtml";
import { getBlogContentRevision } from "@/lib/blogContentRevision";

async function requireAdmin(idToken: string): Promise<void> {
  const user = await verifyIdToken(idToken);
  if (!user?.email || !(await isUserAdmin(user.email))) {
    throw new Error("Unauthorized");
  }
}

/**
 * Isolated from ordinary admin list actions because server-side HTML
 * sanitization has a larger runtime dependency surface than a simple post
 * query. A diagnostic failure must never prevent the list from loading.
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
