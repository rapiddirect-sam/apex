import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import { isUserAdmin } from "@/lib/admin";
import { verifyIdToken } from "@/lib/firebaseAdmin";

export const runtime = "nodejs";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isValidSlug(value: unknown): value is string {
  return typeof value === "string" && SLUG_PATTERN.test(value);
}

function getBearerToken(request: NextRequest): string | null {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) return null;

  const token = authorization.slice("Bearer ".length).trim();
  return token || null;
}

async function getAdminEmail(request: NextRequest): Promise<string | null> {
  const bearerToken = getBearerToken(request);
  const sessionCookie = bearerToken ? null : (await cookies()).get("auth-session");
  const tokenValue = bearerToken || sessionCookie?.value;
  if (!tokenValue) return null;

  const token = await verifyIdToken(tokenValue);
  if (!token?.email || !(await isUserAdmin(token.email))) return null;

  return token.email;
}

/**
 * Keeps public-route invalidation separate from the database write. This is
 * intentionally invoked by the admin client only after a successful save.
 */
export async function POST(request: NextRequest) {
  try {
    if (!(await getAdminEmail(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug, previousSlug } = await request.json();
    if (!isValidSlug(slug) || (previousSlug !== undefined && !isValidSlug(previousSlug))) {
      return NextResponse.json({ error: "Invalid blog slug" }, { status: 400 });
    }

    // List-derived routes intentionally share one tagged data dependency.
    // Detail pages read their post record directly, then rebuild through their
    // explicitly invalidated static paths below.
    revalidateTag("blog-posts", "default");
    revalidatePath("/");
    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");
    revalidatePath("/blog/author/[slug]", "page");
    revalidatePath("/blog/[slug]", "page");
    revalidatePath(`/blog/${slug}`);
    if (previousSlug && previousSlug !== slug) {
      revalidatePath(`/blog/${previousSlug}`);
    }

    return NextResponse.json(
      { revalidated: true, slug },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Blog cache revalidation failed:", error);
    return NextResponse.json(
      { error: "Failed to revalidate blog pages" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
