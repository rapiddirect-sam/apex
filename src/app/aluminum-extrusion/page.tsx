import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { EXPageClient } from "./EXPageClient";

const FEATURE_IMAGE = "/images/services/aluminum-extrusion/custom-aluminum-extrusion-profiles-production.avif";
const FEATURE_IMAGE_ALT = "Custom aluminum extrusion profiles during production";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/aluminum-extrusion");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/aluminum-extrusion",
    },
    openGraph: {
      type: "website",
      url: "/aluminum-extrusion",
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

export default async function AluminumExtrusionPage() {
  const { content, version } = await getPageContent("/extrusion-services");

  return (
    <EXPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}