import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { AboutPageClient } from "./AboutPageClient";

const FEATURE_IMAGE = "/about/apexbatch-cnc-machining-production-floor-with-operator.avif";
const FEATURE_IMAGE_ALT = "ApexBatch CNC machining production floor with an operator";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/about");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/about",
    },
    openGraph: {
      type: "website",
      url: "/about",
      title: meta.title,
      description: meta.description,
      images: [{ url: FEATURE_IMAGE, alt: FEATURE_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [FEATURE_IMAGE],
    },
  };
}

export default async function AboutPage() {
  // Fetch page content server-side
  const { content, version } = await getPageContent("/about");

  return (
    <AboutPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
