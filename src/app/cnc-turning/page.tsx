import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { CNCTurningPageClient } from "./CNCTurningPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/cnc-turning");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/cnc-turning",
    },
  };
}

export default async function CNCTurningPage() {
  const { content, version } = await getPageContent("/cnc-turning");

  return (
    <CNCTurningPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
