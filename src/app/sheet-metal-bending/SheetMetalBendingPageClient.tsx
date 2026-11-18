"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { CMSProvider } from "@/contexts/CMSContext";
import { BendingApplications } from "./BendingApplications";
import { BendingCapacity } from "./BendingCapacity";
import { BendingCadToParts } from "./BendingCadToParts";
import { BendingFAQ } from "./BendingFAQ";
import { BendingFinalCTA } from "./BendingFinalCTA";
import { BendingDesignChecks } from "./BendingDesignChecks";
import { BendingFinishes } from "./BendingFinishes";
import { BendingHero } from "./BendingHero";
import { BendingIntro } from "./BendingIntro";
import { BendingMaterials } from "./BendingMaterials";
import { BendingPrecision } from "./BendingPrecision";
import { BendingWhyChoose } from "./BendingWhyChoose";

interface SheetMetalBendingPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function SheetMetalBendingPageClient({
  initialContent,
  initialVersion,
}: SheetMetalBendingPageClientProps) {
  return (
    <CMSProvider
      pageSlug="/sheet-metal-bending"
      initialContent={initialContent}
      initialVersion={initialVersion}
    >
      <Home3Header />
      <main>
        <BendingHero />
        <BendingIntro />
        <BendingCapacity />
        <BendingMaterials />
        <BendingDesignChecks />
        <BendingPrecision />
        <BendingFinishes />
        <BendingApplications />
        <BendingWhyChoose />
        <BendingCadToParts />
        <BendingFAQ />
        <BendingFinalCTA />
      </main>
      <Home3Footer />
    </CMSProvider>
  );
}
