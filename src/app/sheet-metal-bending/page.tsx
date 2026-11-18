import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { SheetMetalBendingPageClient } from "./SheetMetalBendingPageClient";

const FEATURE_IMAGE = "/sheet-metal/cnc-press-brake-operator-control-sheet-metal-bending.webp";
const FEATURE_IMAGE_ALT = "Operator controlling an AMADA CNC press brake";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/sheet-metal-bending");

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: "/sheet-metal-bending" },
    openGraph: {
      type: "website",
      url: "/sheet-metal-bending",
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

export default async function SheetMetalBendingPage() {
  const { content, version } = await getPageContent("/sheet-metal-bending");

  return (
    <SheetMetalBendingPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
