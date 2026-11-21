import { supabase, isSupabaseConfigured } from "./supabase";
import { unstable_cache } from "next/cache";
import { BlogPost, BlogPostInput } from "@/types/blog";

const TABLE_NAME = "blog_posts";
export const BLOG_POSTS_CACHE_TAG = "blog-posts";

export function getBlogPostCacheTag(slug: string): string {
  return `blog-post:${slug}`;
}

function rowToPost(row: Record<string, unknown>): BlogPost {
  return {
    id: row.id as string,
    title: row.title as string,
    slug: row.slug as string,
    content: row.content as string,
    excerpt: row.excerpt as string,
    featuredImage: row.featured_image as string,
    status: row.status as "draft" | "published",
    categoryId: (row.category_id as string) || null,
    createdAt: new Date(row.created_at as string),
    updatedAt: new Date(row.updated_at as string),
    publishedAt: row.published_at ? new Date(row.published_at as string) : null,
    authorId: row.author_id as string,
    authorEmail: row.author_email as string,
    authorRef: (row.author_ref as string) || null,
    metaTitle: (row.meta_title as string) || null,
    metaDescription: (row.meta_description as string) || null,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!isSupabaseConfigured || !supabase) {
    console.warn("Supabase is not configured");
    return [];
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }

  return (data || []).map(rowToPost);
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const rows = await getCachedPublishedPostRows();
  return rows.map(rowToPost);
}

async function fetchPublishedPostRows(): Promise<Record<string, unknown>[]> {
  if (!isSupabaseConfigured || !supabase) {
    console.warn("Supabase is not configured");
    return [];
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching published posts:", error);
    return [];
  }

  return (data || []) as Record<string, unknown>[];
}

// These are the explicit data dependencies of the static blog archive,
// author pages, sitemap, and article pages. Admin saves invalidate these
// tags before their routes regenerate, so a fresh static page cannot rebuild
// from an older Supabase response.
const getCachedPublishedPostRows = unstable_cache(
  fetchPublishedPostRows,
  ["blog-published-posts"],
  { tags: [BLOG_POSTS_CACHE_TAG], revalidate: 3600 }
);

/** A scheduled post is stored as published with a future publication timestamp. */
export function isPostPubliclyAvailable(post: BlogPost, now = new Date()): boolean {
  return post.status === "published" && !!post.publishedAt && post.publishedAt <= now;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  if (!isSupabaseConfigured || !supabase) {
    console.warn("Supabase is not configured");
    return null;
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // No rows returned
      return null;
    }
    console.error("Error fetching post by id:", error);
    return null;
  }

  return data ? rowToPost(data) : null;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Keep the individual article lookup compatible with ISR route rendering.
  // The route itself is invalidated after an admin save; caching the archive
  // separately still gives list, sitemap, and related-post queries a tagged
  // dependency without wrapping the public detail render a second time.
  const row = await fetchPostBySlugRow(slug);
  return row ? rowToPost(row) : null;
}

async function fetchPostBySlugRow(slug: string): Promise<Record<string, unknown> | null> {
  if (!isSupabaseConfigured || !supabase) {
    console.warn("Supabase is not configured");
    return null;
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // No rows returned
      return null;
    }
    console.error("Error fetching post by slug:", error);
    return null;
  }

  return data ? (data as Record<string, unknown>) : null;
}

export interface SavedBlogPost {
  id: string;
  updatedAt: string;
  content: string;
}

export async function createPost(
  input: BlogPostInput,
  authorId: string,
  authorEmail: string
): Promise<SavedBlogPost> {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase is not configured");
  }

  const now = new Date().toISOString();
  const insertData = {
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
    published_at:
      input.status === "published"
        ? input.publishedAt || now
        : null,
    author_id: authorId,
    author_email: authorEmail,
    meta_title: input.metaTitle || null,
    meta_description: input.metaDescription || null,
  };

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert(insertData)
    .select("id, updated_at, content")
    .single();

  if (error) {
    console.error("Error creating post:", error);
    throw error;
  }

  return {
    id: data.id as string,
    updatedAt: new Date(data.updated_at as string).toISOString(),
    content: data.content as string,
  };
}

export async function updatePost(id: string, input: Partial<BlogPostInput>): Promise<SavedBlogPost> {
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
    // `null` is an explicit "publish now" instruction from the admin form.
    updateData.published_at = input.publishedAt || new Date().toISOString();
  }

  // If publishing for the first time without a selected schedule.
  if (input.status === "published") {
    const { data: existing } = await supabase
      .from(TABLE_NAME)
      .select("published_at")
      .eq("id", id)
      .single();

    if (existing && !existing.published_at && input.publishedAt === undefined) {
      updateData.published_at = new Date().toISOString();
    }
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(updateData)
    .eq("id", id)
    .select("id, updated_at, content")
    .single();

  if (error) {
    console.error("Error updating post:", error);
    throw error;
  }

  // Return the row that the database actually stored. This prevents the
  // editor from treating a client-side draft as saved until Supabase confirms
  // the exact persisted body.
  return {
    id: data.id as string,
    updatedAt: new Date(data.updated_at as string).toISOString(),
    content: data.content as string,
  };
}

export async function deletePost(id: string): Promise<void> {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase is not configured");
  }

  const { error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
