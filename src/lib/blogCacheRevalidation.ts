import type { User } from "firebase/auth";
import { setAuthSessionCookie } from "@/lib/authSessionCookie";

interface RevalidateBlogRoutesOptions {
  slug: string;
  previousSlug?: string;
  user: User;
}

/**
 * Refresh public blog routes immediately after a client-side admin save.
 * The Firebase ID token is refreshed here instead of relying on a cookie that
 * may have expired while the editor has been open.
 */
export async function revalidateBlogRoutes({
  slug,
  previousSlug,
  user,
}: RevalidateBlogRoutesOptions): Promise<void> {
  const idToken = await user.getIdToken(true);
  setAuthSessionCookie(idToken);

  let message = "Public blog cache refresh failed.";

  // A short retry covers a transient deployment or connection handoff without
  // allowing the editor to report a completed save before cache refresh occurs.
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const response = await fetch("/api/admin/blog/revalidate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({ slug, previousSlug }),
    });

    if (response.ok) return;

    try {
      const body = (await response.json()) as { error?: string };
      if (body.error) message = body.error;
    } catch {
      // Use the generic message when a proxy or platform error has no JSON body.
    }

    if (attempt === 0) {
      await new Promise((resolve) => window.setTimeout(resolve, 250));
    }
  }

  throw new Error(message);
}
