"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { InsHero } from "@/components/insert-molding/InsHero";
import { InsCapabilities } from "@/components/insert-molding/InsCapabilities";
import { InsParts } from "@/components/insert-molding/InsParts";
import { InsMaterialCompatibility } from "@/components/insert-molding/InsMaterialCompatibility";
import { InsDesignGuidelines } from "@/components/insert-molding/InsDesignGuidelines";
import { InsProcess } from "@/components/insert-molding/InsProcess";
import { InsWhyUs } from "@/components/insert-molding/InsWhyUs";
import { InsFAQ } from "@/components/insert-molding/InsFAQ";
import { InsCTA } from "@/components/insert-molding/InsCTA";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface InsertMoldingPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function InsertMoldingPageClient({ initialContent, initialVersion }: InsertMoldingPageClientProps) {
  return (
    <CMSProvider pageSlug="/insert-molding" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main>
        <InsHero />
        <InsCapabilities />
        <InsParts />
        <InsMaterialCompatibility />
        <InsDesignGuidelines />
        <InsProcess />
        <InsWhyUs />
        <InsFAQ />
        <InsCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
