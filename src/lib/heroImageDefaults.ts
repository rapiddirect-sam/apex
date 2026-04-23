/**
 * Keep hero `sizes` / `quality` in sync between EditableImage and server-side LCP preload (`getImageProps`).
 * Tighter mobile `sizes` + lower quality improves mobile LCP (smaller downloaded bytes / decode cost).
 */

export const HOME_HERO_IMAGE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1240px";

export const HOME_HERO_IMAGE_QUALITY = 64;

export const CNC_HERO_IMAGE_SIZES = "(max-width: 640px) 100vw, 1240px";

export const CNC_HERO_IMAGE_QUALITY = 62;

export const CNC_HERO_DEFAULT_SRC =
  "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp";
