import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { VideoStructuredData } from "@/components/seo/VideoStructuredData";
import { CNCPageClient } from "./CNCPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/cnc-machining");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/cnc-machining",
    },
  };
}

export default async function CNCMachiningPage() {
  const { content, version } = await getPageContent("/cnc-machining");

  return (
    <>
      <VideoStructuredData
        pagePath="/cnc-machining"
        videoId="9vJZ_bi4mts"
        name="From Raw Material to Finished Parts"
        description="From material preparation and machine setup to CNC machining, inspection, and final delivery."
        thumbnailUrl="https://i.ytimg.com/vi/9vJZ_bi4mts/hqdefault.jpg"
        uploadDate="2026-11-24"
      />
      <CNCPageClient
        initialContent={content}
        initialVersion={version}
      />
    </>
  );
}
