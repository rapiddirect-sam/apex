import type { ReactNode } from "react";
import { getImageProps } from "next/image";
import {
  CNC_TURNING_HERO_DEFAULT_SRC,
  CNC_HERO_IMAGE_QUALITY,
  CNC_HERO_IMAGE_SIZES,
  CNC_TURNING_HERO_RETIRED_SOURCES,
} from "@/lib/heroImageDefaults";
import { getPageContent } from "@/lib/pageContent";
import { resolveHeroImageSource } from "@/lib/heroImageSource";

export default async function CNCTurningLayout({ children }: { children: ReactNode }) {
  const { content } = await getPageContent("/cnc-turning");
  const heroImage = resolveHeroImageSource(
    content,
    "hero.image",
    CNC_TURNING_HERO_DEFAULT_SRC,
    CNC_TURNING_HERO_RETIRED_SOURCES
  );
  const {
    props: { src, srcSet, sizes },
  } = getImageProps({
    alt: "CNC Turning Services",
    src: heroImage,
    fill: true,
    sizes: CNC_HERO_IMAGE_SIZES,
    quality: CNC_HERO_IMAGE_QUALITY,
    priority: true,
    fetchPriority: "high",
  });

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={src}
        {...(srcSet ? { imageSrcSet: srcSet, imageSizes: sizes ?? "" } : {})}
        fetchPriority="high"
      />
      {children}
    </>
  );
}
