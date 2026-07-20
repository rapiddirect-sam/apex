import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { CMMillingPageClient } from "./CMMillingPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/cnc-milling");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/cnc-milling",
    },
  };
}

export default async function CNCMillingPage() {
  const { content, version } = await getPageContent("/cnc-milling");

  return (
    <CMMillingPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
