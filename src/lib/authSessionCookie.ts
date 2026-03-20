/**
 * Client-only: mirror Firebase ID token into a first-party cookie so Route Handlers
 * (e.g. /api/upload) can verify the admin with firebase-admin.
 */
export function setAuthSessionCookie(token: string | null): void {
  if (typeof document === "undefined") return;
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:";
  if (token) {
    document.cookie = `auth-session=${token}; path=/; max-age=3600; SameSite=Lax${secure ? "; Secure" : ""}`;
  } else {
    document.cookie = `auth-session=; path=/; max-age=0; SameSite=Lax${secure ? "; Secure" : ""}`;
  }
}
