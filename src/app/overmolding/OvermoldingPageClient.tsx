"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { OMHero } from "@/components/overmolding/OMHero";
import { OMServices } from "@/components/overmolding/OMServices";
import { OMMaterialCompatibility } from "@/components/overmolding/OMMaterialCompatibility";
import { OMDesignGuidelines } from "@/components/overmolding/OMDesignGuidelines";
import { OMToolingProduction } from "@/components/overmolding/OMToolingProduction";
import { OMParts } from "@/components/overmolding/OMParts";
import { OMProcess } from "@/components/overmolding/OMProcess";
import { OMWhyChoose } from "@/components/overmolding/OMWhyChoose";
import { OMFAQ } from "@/components/overmolding/OMFAQ";
import { OMCTA } from "@/components/overmolding/OMCTA";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface OvermoldingPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function OvermoldingPageClient({ initialContent, initialVersion }: OvermoldingPageClientProps) {
  return (
    <CMSProvider pageSlug="/overmolding" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main>
        <OMHero />
        <OMServices />
        <OMMaterialCompatibility />
        <OMDesignGuidelines />
        <OMToolingProduction />
        <OMParts />
        <OMProcess />
        <OMWhyChoose />
        <OMFAQ />
        <OMCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
