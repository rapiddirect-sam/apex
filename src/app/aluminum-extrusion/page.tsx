import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { EXPageClient } from "./EXPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/aluminum-extrusion");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/aluminum-extrusion",
    },
  };
}

export default async function AluminumExtrusionPage() {
  const { content, version } = await getPageContent("/extrusion-services");

  return (
    <EXPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}
