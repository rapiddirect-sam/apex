import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import { isUserAdmin } from "@/lib/admin";
import { verifyIdToken } from "@/lib/firebaseAdmin";

function isValidSlug(value: unknown): value is string {
  return typeof value === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function getBearerToken(request: NextRequest): string | null {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) return null;

  const token = authorization.slice("Bearer ".length).trim();
  return token || null;
}

async function getAdminEmail(request: NextRequest): Promise<string | null> {
  // Admin saves provide a freshly refreshed ID token. Keep the cookie fallback
  // for existing clients and same-origin requests that do not send a header.
  const suppliedToken = getBearerToken(request);
  const sessionCookie = suppliedToken ? null : (await cookies()).get("auth-session");
  const tokenValue = suppliedToken || sessionCookie?.value;
  if (!tokenValue) return null;

  const token = await verifyIdToken(tokenValue);
  if (!token?.email || !(await isUserAdmin(token.email))) return null;

  return token.email;
}

/** Clears cached blog archive, article, and author routes after an admin saves a post. */
export async function POST(request: NextRequest) {
  try {
    if (!(await getAdminEmail(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug, previousSlug } = await request.json();
    if (!isValidSlug(slug) || (previousSlug !== undefined && !isValidSlug(previousSlug))) {
      return NextResponse.json({ error: "Invalid blog slug" }, { status: 400 });
    }

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

    return NextResponse.json({ revalidated: true });
  } catch (error) {
    console.error("Blog cache revalidation failed:", error);
    return NextResponse.json({ error: "Failed to revalidate blog pages" }, { status: 500 });
  }
}
