import "server-only";
import { createHash } from "node:crypto";

/**
 * A deterministic signature of the article body. It lets the admin confirm
 * that the public HTML contains the exact body just saved, not merely a new
 * `updated_at` timestamp produced by an older editor payload.
 */
export function getBlogContentRevision(content: string): string {
  return createHash("sha256").update(content, "utf8").digest("hex");
}
