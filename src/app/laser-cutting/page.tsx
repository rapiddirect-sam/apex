import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { LaserCuttingPageClient } from "./LaserCuttingPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/laser-cutting");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/laser-cutting",
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default async function LaserCuttingPage() {
  const { content, version } = await getPageContent("/laser-cutting");

  return (
    <LaserCuttingPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
