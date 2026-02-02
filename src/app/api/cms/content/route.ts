import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { upsertPageContent, getPageContent } from "@/lib/pageContent";
import { isUserAdmin } from "@/lib/admin";
import { auth, isFirebaseConfigured } from "@/lib/firebase";

/**
 * Get user email from Firebase auth token in cookie
 */
async function getUserEmailFromRequest(): Promise<string | null> {
  if (!isFirebaseConfigured || !auth) {
    return null;
  }

  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("auth-session");

    if (!sessionCookie?.value) {
      return null;
    }

    // The cookie contains the ID token
    // In a production app, you'd verify this server-side with Firebase Admin SDK
    // For now, we'll trust the token and extract the email from it
    // This is a simplified version - consider using Firebase Admin SDK for proper verification

    // Decode the JWT to get the email (without verification - this is a demo)
    const tokenParts = sessionCookie.value.split(".");
    if (tokenParts.length !== 3) {
      return null;
    }

    const payload = JSON.parse(atob(tokenParts[1]));
    return payload.email || null;
  } catch (error) {
    console.error("Error getting user from token:", error);
    return null;
  }
}

/**
 * GET - Fetch page content
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pageSlug = searchParams.get("pageSlug");

  if (!pageSlug) {
    return NextResponse.json({ error: "Missing pageSlug parameter" }, { status: 400 });
  }

  try {
    const { content, version } = await getPageContent(pageSlug);
    return NextResponse.json({ content, version });
  } catch (error) {
    console.error("Error fetching page content:", error);
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 });
  }
}

/**
 * PUT - Update page content
 */
export async function PUT(request: NextRequest) {
  try {
    // Get user email from auth
    const userEmail = await getUserEmailFromRequest();

    if (!userEmail) {
      return NextResponse.json({ error: "Unauthorized - please log in" }, { status: 401 });
    }

    // Check if user is admin
    const adminStatus = await isUserAdmin(userEmail);
    if (!adminStatus) {
      return NextResponse.json({ error: "Forbidden - admin access required" }, { status: 403 });
    }

    // Parse request body
    const body = await request.json();
    const { pageSlug, content, version } = body;

    if (!pageSlug) {
      return NextResponse.json({ error: "Missing pageSlug" }, { status: 400 });
    }

    if (!content || typeof content !== "object") {
      return NextResponse.json({ error: "Invalid content" }, { status: 400 });
    }

    // Save content
    const result = await upsertPageContent(pageSlug, content, userEmail);

    if (!result.success) {
      return NextResponse.json({ error: result.error || "Failed to save" }, { status: 500 });
    }

    return NextResponse.json({ success: true, newVersion: result.version });
  } catch (error) {
    console.error("CMS update error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update content" },
      { status: 500 }
    );
  }
}
