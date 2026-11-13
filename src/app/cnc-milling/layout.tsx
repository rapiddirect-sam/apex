import type { ReactNode } from "react";
import { getImageProps } from "next/image";
import {
  CNC_MILLING_HERO_DEFAULT_SRC,
  CNC_HERO_IMAGE_QUALITY,
  CNC_HERO_IMAGE_SIZES,
  CNC_MILLING_HERO_RETIRED_SOURCES,
} from "@/lib/heroImageDefaults";
import { getPageContent } from "@/lib/pageContent";
import { resolveHeroImageSource } from "@/lib/heroImageSource";

export default async function CNCMillingLayout({ children }: { children: ReactNode }) {
  const { content } = await getPageContent("/cnc-milling");
  const heroImage = resolveHeroImageSource(
    content,
    "hero.image",
    CNC_MILLING_HERO_DEFAULT_SRC,
    CNC_MILLING_HERO_RETIRED_SOURCES
  );
  const {
    props: { src, srcSet, sizes },
  } = getImageProps({
    alt: "CNC Milling Services",
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
