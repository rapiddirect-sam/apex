import type { ReactNode } from "react";
import { getImageProps } from "next/image";
import {
  CNC_TURNING_HERO_DEFAULT_SRC,
  CNC_HERO_IMAGE_QUALITY,
  CNC_HERO_IMAGE_SIZES,
} from "@/lib/heroImageDefaults";

export default function CNCTurningLayout({ children }: { children: ReactNode }) {
  const {
    props: { src, srcSet, sizes },
  } = getImageProps({
    alt: "CNC Turning Services",
    src: CNC_TURNING_HERO_DEFAULT_SRC,
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
