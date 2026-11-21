"use client";

import { supabase, isSupabaseConfigured } from "./supabase";
import type { BlogPostInput } from "@/types/blog";

const TABLE_NAME = "blog_posts";

/**
 * Browser-side blog mutations intentionally mirror the proven Nov. 11
 * publishing boundary: persist the article first, then ask the dedicated
 * server route to invalidate public pages.
 */
export async function createBlogPostFromClient(
  input: BlogPostInput,
  authorId: string,
  authorEmail: string
): Promise<void> {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase is not configured");
  }

  const now = new Date().toISOString();
  const { error } = await supabase.from(TABLE_NAME).insert({
    title: input.title,
    slug: input.slug,
    content: input.content,
    excerpt: input.excerpt,
    featured_image: input.featuredImage,
    status: input.status,
    category_id: input.categoryId || null,
    author_ref: input.authorRef || null,
    created_at: now,
    updated_at: now,
    published_at: input.status === "published" ? input.publishedAt || now : null,
    author_id: authorId,
    author_email: authorEmail,
    meta_title: input.metaTitle || null,
    meta_description: input.metaDescription || null,
  });

  if (error) throw error;
}

export async function updateBlogPostFromClient(
  id: string,
  input: Partial<BlogPostInput>
): Promise<void> {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase is not configured");
  }

  const updateData: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  };

  if (input.title !== undefined) updateData.title = input.title;
  if (input.slug !== undefined) updateData.slug = input.slug;
  if (input.content !== undefined) updateData.content = input.content;
  if (input.excerpt !== undefined) updateData.excerpt = input.excerpt;
  if (input.featuredImage !== undefined) updateData.featured_image = input.featuredImage;
  if (input.status !== undefined) updateData.status = input.status;
  if (input.categoryId !== undefined) updateData.category_id = input.categoryId || null;
  if (input.authorRef !== undefined) updateData.author_ref = input.authorRef || null;
  if (input.metaTitle !== undefined) updateData.meta_title = input.metaTitle || null;
  if (input.metaDescription !== undefined) updateData.meta_description = input.metaDescription || null;

  if (input.publishedAt !== undefined) {
    updateData.published_at = input.publishedAt || new Date().toISOString();
  }

  if (input.status === "published" && input.publishedAt === undefined) {
    const { data: existing, error: existingError } = await supabase
      .from(TABLE_NAME)
      .select("published_at")
      .eq("id", id)
      .single();

    if (existingError) throw existingError;
    if (!existing?.published_at) {
      updateData.published_at = new Date().toISOString();
    }
  }

  const { error } = await supabase.from(TABLE_NAME).update(updateData).eq("id", id);
  if (error) throw error;
}
