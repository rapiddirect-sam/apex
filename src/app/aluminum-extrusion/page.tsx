import { Metadata } from "next";
import { getPageMeta, getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { EXPageClient } from "./EXPageClient";

const FEATURE_IMAGE = "/images/services/aluminum-extrusion/custom-aluminum-extrusion-profiles-production.avif";
const FEATURE_IMAGE_ALT = "Custom aluminum extrusion profiles during production";
// The public route was renamed, while existing CMS content remains stored
// under this established internal key. Keeping the key avoids a database
// migration and preserves the editable content already in use.
const CMS_PAGE_SLUG = "/extrusion-services";

export async function generateMetadata(): Promise<Metadata> {
  const cmsMeta = await getPageMeta(CMS_PAGE_SLUG);
  const defaults = await getPageMetaWithDefaults("/aluminum-extrusion");
  const meta = {
    title: cmsMeta?.metaTitle || defaults.title,
    description: cmsMeta?.metaDescription || defaults.description,
  };
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
  const { content, version } = await getPageContent(CMS_PAGE_SLUG);

  return (
    <EXPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
