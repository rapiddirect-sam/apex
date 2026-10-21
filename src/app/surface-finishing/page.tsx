import { Metadata } from "next";
import { getPageContent } from "@/lib/pageContent";
import { SurfaceFinishPageClient } from "./SurfaceFinishPageClient";

const FEATURE_IMAGE = "/images/surface-finishing/surface-finishing-service-hero.webp";
const FEATURE_IMAGE_ALT = "Precision components with brushed, coated, polished and anodized surface finishes";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Surface Finishing Services for Custom Parts | ApexBatch";
  const description =
    "Custom surface finishing services for production parts. Compare surface treatments, processes and finishing options for corrosion, wear, appearance and function.";

  return {
    title,
    description,
    alternates: {
      canonical: "/surface-finishing",
    },
    openGraph: {
      type: "website",
      url: "/surface-finishing",
      title,
      description,
      images: [{ url: FEATURE_IMAGE, alt: FEATURE_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [FEATURE_IMAGE],
    },
  };
}

export default async function SurfaceFinishPage() {
  const { content, version } = await getPageContent("/surface-finish");

  return (
    <SurfaceFinishPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
