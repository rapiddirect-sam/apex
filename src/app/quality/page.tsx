import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { QualityPageClient } from "./QualityPageClient";

const FEATURE_IMAGE = "/quality/apexbatch-zeiss-cmm-quality-inspection-lab-with-two-operators.webp";
const FEATURE_IMAGE_ALT = "ApexBatch ZEISS CMM quality inspection lab with two operators";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/quality");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/quality",
    },
    openGraph: {
      type: "website",
      url: "/quality",
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

export default async function QualityPage() {
  const { content, version } = await getPageContent("/quality");

  return (
    <QualityPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
