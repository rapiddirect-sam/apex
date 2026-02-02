import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { AboutPageClient } from "./AboutPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/about");
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function AboutPage() {
  return <AboutPageClient />;
}
