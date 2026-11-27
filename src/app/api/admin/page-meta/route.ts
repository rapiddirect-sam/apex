import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import { isUserAdmin } from "@/lib/admin";
import { verifyIdToken } from "@/lib/firebaseAdmin";
import { upsertPageMeta } from "@/lib/pageMeta";

export const runtime = "nodejs";

function isValidPageSlug(value: unknown): value is string {
  return typeof value === "string" && value.startsWith("/") && !value.includes("//");
}

async function isRequestFromAdmin(): Promise<boolean> {
  const sessionCookie = (await cookies()).get("auth-session");
  if (!sessionCookie?.value) return false;

  const token = await verifyIdToken(sessionCookie.value);
  return Boolean(token?.email && (await isUserAdmin(token.email)));
}

export async function PUT(request: NextRequest) {
  try {
    if (!(await isRequestFromAdmin())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { pageSlug, metaTitle, metaDescription } = await request.json();
    if (!isValidPageSlug(pageSlug) || typeof metaTitle !== "string" || typeof metaDescription !== "string") {
      return NextResponse.json({ error: "Invalid page metadata" }, { status: 400 });
    }

    await upsertPageMeta({ pageSlug, metaTitle, metaDescription });
    revalidateTag(`page-meta:${pageSlug}`, "default");
    revalidatePath(pageSlug);

    return NextResponse.json(
      { success: true, pageSlug },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Page metadata update failed:", error);
    return NextResponse.json(
      { error: "Failed to save page metadata" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
