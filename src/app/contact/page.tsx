import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { ContactPageClient } from "./ContactPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/contact");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/contact",
    },
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}
