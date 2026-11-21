import { supabase, isSupabaseConfigured } from "./supabase";
import { BlogPost } from "@/types/blog";

const TABLE_NAME = "blog_posts";

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
  const rows = await fetchPublishedPostRows();
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
