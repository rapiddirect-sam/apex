import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { isUserAdmin } from "@/lib/admin";
import { verifyIdToken } from "@/lib/firebaseAdmin";

function isValidSlug(value: unknown): value is string {
  return typeof value === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

async function getAdminEmail(): Promise<string | null> {
  const sessionCookie = (await cookies()).get("auth-session");
  if (!sessionCookie?.value) return null;

  const token = await verifyIdToken(sessionCookie.value);
  if (!token?.email || !(await isUserAdmin(token.email))) return null;

  return token.email;
}

/** Clears cached blog archive and detail routes after an admin saves a post. */
export async function POST(request: NextRequest) {
  try {
    if (!(await getAdminEmail())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug, previousSlug } = await request.json();
    if (!isValidSlug(slug) || (previousSlug !== undefined && !isValidSlug(previousSlug))) {
      return NextResponse.json({ error: "Invalid blog slug" }, { status: 400 });
    }

    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");
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
