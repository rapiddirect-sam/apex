import { Metadata } from "next";
import { getPageContent } from "@/lib/pageContent";
import { getPageMeta, getPageMetaWithDefaults } from "@/lib/pageMeta";
import { SurfaceFinishPageClient } from "./SurfaceFinishPageClient";

// The public route was renamed, while existing CMS content remains stored
// under this established internal key. Keeping the key avoids a database
// migration and preserves the editable content already in use.
const CMS_PAGE_SLUG = "/surface-finish";
const FEATURE_IMAGE = "/images/surface-finishing/surface-finishing-service-hero.webp";
const FEATURE_IMAGE_ALT = "Precision components with brushed, coated, polished and anodized surface finishes";

export async function generateMetadata(): Promise<Metadata> {
  const cmsMeta = await getPageMeta(CMS_PAGE_SLUG);
  const defaults = await getPageMetaWithDefaults("/surface-finishing");
  const title = cmsMeta?.metaTitle || defaults.title;
  const description =
    cmsMeta?.metaDescription || defaults.description;

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
  const { content, version } = await getPageContent(CMS_PAGE_SLUG);

  return (
    <SurfaceFinishPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
