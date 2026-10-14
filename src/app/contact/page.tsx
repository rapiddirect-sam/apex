import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { ContactPageClient } from "./ContactPageClient";

const FEATURE_IMAGE = "/contact/apexbatch-contact-brand-office-feature-image.jpg";
const FEATURE_IMAGE_ALT = "ApexBatch office brand wall";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/contact");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      type: "website",
      url: "/contact",
      title: meta.title,
      description: meta.description,
      images: [{ url: FEATURE_IMAGE, alt: FEATURE_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [FEATURE_IMAGE],
    },
  };
}

export default async function ContactPage() {
  const { content, version } = await getPageContent("/contact");

  return (
    <ContactPageClient
      initialContent={content}
      initialVersion={version}
    />
  );
}