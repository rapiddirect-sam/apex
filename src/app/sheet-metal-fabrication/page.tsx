import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { SMPageClient } from "./SMPageClient";

const FEATURE_IMAGE = "/sheet-metal/apexbatch-sheet-metal-secondary-operations-factory.avif";
const FEATURE_IMAGE_ALT = "ApexBatch sheet metal secondary operations factory";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/sheet-metal-fabrication");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/sheet-metal-fabrication",
    },
    openGraph: {
      type: "website",
      url: "/sheet-metal-fabrication",
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

export default async function SheetMetalFabricationPage() {
  const { content, version } = await getPageContent("/sheet-metal-fabrication");

  return (
    <SMPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
