import { Metadata } from "next";
import { getPageMetaWithDefaults } from "@/lib/pageMeta";
import { getPageContent } from "@/lib/pageContent";
import { normalizeLegalContent } from "@/lib/legalContent";
import { PrivacyPolicyClient } from "./PrivacyPolicyClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMetaWithDefaults("/privacy-policy");
  return {
    title: meta.title ?? "Privacy Policy | ApexBatch",
    description:
      meta.description ??
      "Privacy policy for ApexBatch - learn how we collect, store, use, and share your information.",
    alternates: {
      canonical: "/privacy-policy",
    },
  };
}

export default async function PrivacyPolicyPage() {
  const { content, version } = await getPageContent("/privacy-policy");

  return (
    <PrivacyPolicyClient
      initialContent={normalizeLegalContent(content)}
      initialVersion={version}
    />
  );
}
