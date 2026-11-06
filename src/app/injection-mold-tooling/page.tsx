import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { InjectionMoldToolingPageClient } from "./InjectionMoldToolingPageClient";

const FEATURE_IMAGE = "/injection-molding/precision-steel-injection-mold-cavity-core-guide-pillars-cooling-fittings.webp";
const FEATURE_IMAGE_ALT = "Precision steel injection mold cavity, core, guide pillars, and cooling fittings";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/injection-mold-tooling");
  return { title: meta.title, description: meta.description, alternates: { canonical: "/injection-mold-tooling" }, openGraph: { type: "website", url: "/injection-mold-tooling", title: meta.title, description: meta.description, images: [{ url: FEATURE_IMAGE, alt: FEATURE_IMAGE_ALT }] }, twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [FEATURE_IMAGE] } };
}

export default async function InjectionMoldToolingPage() {
  const { content, version } = await getPageContent("/injection-mold-tooling");
  return <InjectionMoldToolingPageClient initialContent={content} initialVersion={version} />;
}
