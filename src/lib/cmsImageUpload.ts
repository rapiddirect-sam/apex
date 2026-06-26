/** Slugify user-provided image description for S3 object names (under cms/{postSlug}/). */
export function slugifyImageDescription(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return "image";

  const slug = trimmed
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);

  return slug || "image";
}

/** Validate folder slug path under cms/ (e.g. injection-molding-defects or authors/jane-doe). */
export function normalizeCmsUploadSlug(raw: string): string | null {
  const slug = raw
    .trim()
    .toLowerCase()
    .replace(/\\/g, "/")
    .replace(/^\/+|\/+$/g, "")
    .replace(/\/+/g, "/");

  if (!slug || slug.length > 120) return null;
  if (!/^[a-z0-9-]+(?:\/[a-z0-9-]+)*$/.test(slug)) return null;

  return slug;
}

export function fileExtensionForMime(mimeType: string): string {
  const subtype = mimeType.split("/")[1]?.toLowerCase() || "jpg";
  return subtype === "jpeg" ? "jpg" : subtype;
}

export function buildCmsImageObjectKey(
  postSlug: string,
  description: string,
  mimeType: string
): string {
  const name = slugifyImageDescription(description);
  const ext = fileExtensionForMime(mimeType);
  return `cms/${postSlug}/${name}.${ext}`;
}

/** Default filename stem from the original uploaded file name. */
export function defaultImageDescriptionFromFilename(filename: string): string {
  const basename = filename.split(/[/\\]/).pop() || "image";
  const stem = basename.replace(/\.[^.]+$/, "");
  return slugifyImageDescription(stem.replace(/[-_]+/g, " "));
}
