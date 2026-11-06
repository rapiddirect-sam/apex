"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";
import { IMTHero } from "@/components/injection-mold-tooling/IMTHero";
import { IMTContent } from "@/components/injection-mold-tooling/IMTContent";
import { IMTSectionNav } from "@/components/injection-mold-tooling/IMTSectionNav";
import { IMTFAQ } from "@/components/injection-mold-tooling/IMTFAQ";
import { IMCTA } from "@/components/injection-molding/IMCTA";

interface Props { initialContent: Record<string, unknown> | null; initialVersion: number; }

const TOOLING_CTA = {
  heading: "Get Your Tooling Plan Right",
  description: "Get a clear, DFM-led recommendation before committing to mold manufacturing.",
  primaryCta: "Request an Injection Mold Tooling Quote",
  secondaryCta: "Discuss Your Tooling Project",
};

export function InjectionMoldToolingPageClient({ initialContent, initialVersion }: Props) {
  return <CMSProvider pageSlug="/injection-mold-tooling" initialContent={initialContent} initialVersion={initialVersion}><Home3Header /><main className="injection-molding-page"><IMTHero /><IMTSectionNav /><IMTContent /><IMTFAQ /><IMCTA content={TOOLING_CTA} /></main><Home3Footer /><CMSToolbar /></CMSProvider>;
}
