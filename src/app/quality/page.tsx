import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { QualityPageClient } from "./QualityPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/quality");
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function QualityPage() {
  return <QualityPageClient />;
}
