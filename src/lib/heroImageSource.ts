import { getNestedValue } from "@/lib/contentPath";

/**
 * Use a CMS replacement when one exists, otherwise retain the page's bundled
 * fallback. Keeping this shared between the rendered image and its preload
 * prevents two competing hero-image downloads.
 */
export function resolveHeroImageSource(
  content: Record<string, unknown> | null,
  path: string,
  fallback: string,
  retiredSources: readonly string[] = []
): string {
  const value = getNestedValue(content, path);
  if (typeof value !== "string" || !value.trim()) return fallback;

  const source = value.trim();
  return retiredSources.includes(source) ? fallback : source;
}
