import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import { createPost, updatePost } from "@/lib/blog";
import { isUserAdmin } from "@/lib/admin";
import { verifyIdToken } from "@/lib/firebaseAdmin";
import type { BlogPostInput } from "@/types/blog";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

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

function getBearerToken(request: NextRequest): string | null {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) return null;

  return authorization.slice("Bearer ".length).trim() || null;
}

async function getAdminUser(request: NextRequest): Promise<{ email: string; uid: string } | null> {
  const suppliedToken = getBearerToken(request);
  const sessionCookie = suppliedToken ? null : (await cookies()).get("auth-session");
  const tokenValue = suppliedToken || sessionCookie?.value;
  if (!tokenValue) return null;

  const user = await verifyIdToken(tokenValue);
  if (!user?.email || !(await isUserAdmin(user.email))) return null;

  return user;
}

function invalidateBlogRoutes(slug: string, previousSlug?: string) {
  // Expire the explicit Supabase query caches before route regeneration.
  // This prevents an invalidated static page from rebuilding with old data.
  revalidateTag("blog-posts", { expire: 0 });
  revalidateTag(`blog-post:${slug}`, { expire: 0 });
  if (previousSlug && previousSlug !== slug) {
    revalidateTag(`blog-post:${previousSlug}`, { expire: 0 });
  }

  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");
  revalidatePath("/blog/author/[slug]", "page");
  revalidatePath("/blog/[slug]", "page");
  revalidatePath(`/blog/${slug}`);
  if (previousSlug && previousSlug !== slug) {
    revalidatePath(`/blog/${previousSlug}`);
  }
}

/**
 * Saves an article and invalidates its public static routes in the same server
 * request. This keeps an editor save from succeeding while a separate cache
 * refresh request is lost or rejected.
 */
export async function POST(request: NextRequest) {
  try {
    const admin = await getAdminUser(request);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { postId, input, previousSlug } = await request.json();
    if (!isValidPostInput(input) || (previousSlug !== undefined && !isValidSlug(previousSlug))) {
      return NextResponse.json({ error: "Invalid blog post data" }, { status: 400 });
    }

    let id: string;
    if (postId === undefined || postId === null) {
      id = await createPost(input, admin.uid, admin.email);
    } else if (typeof postId === "string" && postId) {
      await updatePost(postId, input);
      id = postId;
    } else {
      return NextResponse.json({ error: "Invalid blog post id" }, { status: 400 });
    }

    invalidateBlogRoutes(input.slug, previousSlug);

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error("Blog post save failed:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to save blog post" },
      { status: 500 }
    );
  }
}
