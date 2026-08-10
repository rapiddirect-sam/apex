import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { OvermoldingPageClient } from "./OvermoldingPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/overmolding");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/overmolding",
    },
  };
}

export default async function OvermoldingPage() {
  const { content, version } = await getPageContent("/overmolding");

  return <OvermoldingPageClient initialContent={content} initialVersion={version} />;
}
