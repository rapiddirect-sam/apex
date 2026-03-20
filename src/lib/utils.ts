import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// S3 bucket URL for images
export const S3_URL = "https://apex-batch-images.s3.us-east-1.amazonaws.com";

// Helper to get S3 image URL from local path (or pass through absolute URLs)
export function getImageUrl(path: string): string {
  const trimmed = path.trim();
  // Full URL — do not prepend S3 (avoids broken URLs when pasting /_next/image?... or S3 links)
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  const cleanPath = trimmed.startsWith("/") ? trimmed.slice(1) : trimmed;
  return `${S3_URL}/${cleanPath}`;
}
