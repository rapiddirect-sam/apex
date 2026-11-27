import { Metadata } from "next";
import { getImageProps } from "next/image";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { getPublishedPosts } from "@/lib/blog";
import {
  HOME_HERO_DEFAULT_SRC,
  HOME_HERO_IMAGE_QUALITY,
  HOME_HERO_IMAGE_SIZES,
  HOME_HERO_RETIRED_SOURCES,
} from "@/lib/heroImageDefaults";
import { resolveHeroImageSource } from "@/lib/heroImageSource";
import { VideoStructuredData } from "@/components/seo/VideoStructuredData";
import { HomePageClient } from "./HomePageClient";

// Refresh the homepage resource cards regularly as new published articles become available.
export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/");
  const shareImage = "/quality/apexbatch-cnc-machining-workshop-with-operators.webp";

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: "/",
      title: meta.title,
      description: meta.description,
      siteName: "ApexBatch",
      images: [
        {
          url: shareImage,
          alt: "ApexBatch CNC machining workshop with operators",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [shareImage],
    },
  };
}

export default async function Home() {
  const [{ content, version }, latestPosts] = await Promise.all([
    getPageContent("/"),
    getPublishedPosts(),
  ]);
  const latestResources = latestPosts.slice(0, 3).map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    featuredImage: post.featuredImage,
    publishedAt: post.publishedAt?.toISOString() ?? null,
  }));

  const heroImage = resolveHeroImageSource(
    content,
    "hero.backgroundImage",
    HOME_HERO_DEFAULT_SRC,
    HOME_HERO_RETIRED_SOURCES
  );

  // Preload the same optimized URL `next/image` will request (raw S3 preload would duplicate work and hurt LCP).
  const {
    props: { src, srcSet, sizes },
  } = getImageProps({
    alt: "Manufacturing background",
    src: heroImage,
    fill: true,
    sizes: HOME_HERO_IMAGE_SIZES,
    quality: HOME_HERO_IMAGE_QUALITY,
    priority: true,
    fetchPriority: "high",
  });

  return (
    <>
      <VideoStructuredData
        pagePath="/"
        videoId="0b34E5Uz3EI"
        name="Multiple Manufacturing Processes. One Partner: ApexBatch"
        description="Explore ApexBatch facilities, manufacturing services, and the custom parts we deliver."
        thumbnailUrl="https://apexbatch.com/images/home/apexbatch-cnc-milling-in-process-machining.webp"
        uploadDate="2026-11-07"
      />
      <link
        rel="preload"
        as="image"
        href={src}
        // Responsive preload — matches Next/Image output (mobile LCP).
        {...(srcSet ? { imageSrcSet: srcSet, imageSizes: sizes ?? "" } : {})}
        fetchPriority="high"
      />
      <HomePageClient
        initialContent={content}
        initialVersion={version}
        latestResources={latestResources}
      />
    </>
  );
}
