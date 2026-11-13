/**
 * Keep hero `sizes` / `quality` in sync between EditableImage and server-side LCP preload (`getImageProps`).
 * Tighter mobile `sizes` + lower quality improves mobile LCP (smaller downloaded bytes / decode cost).
 */

export const HOME_HERO_IMAGE_SIZES =
  "(max-width: 1280px) 100vw, 1240px";

export const HOME_HERO_IMAGE_QUALITY = 64;

export const HOME_HERO_DEFAULT_SRC = "/images/heroes/manufacturing-parts-homepage-hero.avif";
export const HOME_HERO_RETIRED_SOURCES = [
  "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1776220053124-1776220053124-7frd7yrk.png",
] as const;

export const CNC_HERO_IMAGE_SIZES = "(max-width: 1024px) 100vw, 1240px";

export const CNC_HERO_IMAGE_QUALITY = 62;

export const CNC_HERO_DEFAULT_SRC =
  "/images/heroes/apexbatch-cnc-machining-parts-hero.avif";
export const CNC_HERO_RETIRED_SOURCES = [
  "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1776923049364-1776923049364-5krdan9b.jpg",
] as const;

export const CNC_MILLING_HERO_DEFAULT_SRC =
  "/images/heroes/apexbatch-cnc-milling-parts-hero.avif";
export const CNC_MILLING_HERO_RETIRED_SOURCES = [
  "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/cnc-milling/cnc-milling-hero.jpg",
] as const;

export const CNC_TURNING_HERO_DEFAULT_SRC =
  "/images/heroes/apexbatch-cnc-turning-parts-hero.avif";
export const CNC_TURNING_HERO_RETIRED_SOURCES = [
  "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/cnc-turning/hero-3.jpg",
] as const;

export const LASER_CUTTING_HERO_DEFAULT_SRC =
  "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-production-workshop-2.webp";
