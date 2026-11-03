import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { PIMPageClient } from "./PIMPageClient";

const FEATURE_IMAGE = "/injection-molding/complex-injection-molded-plastic-parts-with-inserts.avif";
const FEATURE_IMAGE_ALT = "Complex injection-molded plastic parts with inserts";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/plastic-injection-molding");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/plastic-injection-molding",
    },
    openGraph: {
      type: "website",
      url: "/plastic-injection-molding",
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

export default async function PlasticInjectionMoldingPage() {
  const { content, version } = await getPageContent("/plastic-injection-molding");

  return <PIMPageClient initialContent={content} initialVersion={version} />;
}
