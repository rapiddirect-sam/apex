import { Metadata } from "next";
import { getImageProps } from "next/image";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { getImageUrl } from "@/lib/utils";
import { HOME_HERO_IMAGE_QUALITY, HOME_HERO_IMAGE_SIZES } from "@/lib/heroImageDefaults";
import { HomePageClient } from "./HomePageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/",
    },
  };
}

export default async function Home() {
  const { content, version } = await getPageContent("/");

  // Preload the same optimized URL `next/image` will request (raw S3 preload would duplicate work and hurt LCP).
  const {
    props: { src, srcSet, sizes },
  } = getImageProps({
    alt: "Manufacturing background",
    src: getImageUrl("home/1-homepage-banner.webp"),
    fill: true,
    sizes: HOME_HERO_IMAGE_SIZES,
    quality: HOME_HERO_IMAGE_QUALITY,
    priority: true,
    fetchPriority: "high",
  });

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={src}
        // Responsive preload — matches Next/Image output (mobile LCP).
        {...(srcSet ? { imageSrcSet: srcSet, imageSizes: sizes ?? "" } : {})}
        fetchPriority="high"
      />
      <HomePageClient initialContent={content} initialVersion={version} />
    </>
  );
}
