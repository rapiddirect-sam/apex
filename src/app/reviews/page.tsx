import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { ReviewsPageClient } from "./ReviewsPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/reviews");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/reviews",
    },
  };
}

export default function ReviewsPage() {
  return <ReviewsPageClient />;
}
