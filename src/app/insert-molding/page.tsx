import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { InsertMoldingPageClient } from "./InsertMoldingPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/insert-molding");
  return {
    title: meta.title,
    description: meta.description,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: "/insert-molding",
    },
  };
}

export default async function InsertMoldingPage() {
  const { content, version } = await getPageContent("/insert-molding");

  return <InsertMoldingPageClient initialContent={content} initialVersion={version} />;
}
