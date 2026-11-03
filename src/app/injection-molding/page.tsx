import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { IMPageClient } from "./IMPageClient";

const FEATURE_IMAGE = "/injection-molding/injection-molding-services-custom-plastic-parts-housings-transparent-components.avif";
const FEATURE_IMAGE_ALT = "Custom injection-molded plastic parts and housings";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/injection-molding");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/injection-molding",
    },
    openGraph: {
      type: "website",
      url: "/injection-molding",
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

export default async function InjectionMoldingPage() {
  const { content, version } = await getPageContent("/injection-molding");

  return (
    <IMPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
