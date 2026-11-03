"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { PIMHero } from "@/components/plastic-injection-molding/PIMHero";
import { PIMIntroduction } from "@/components/plastic-injection-molding/PIMIntroduction";
import { PIMDesignMoldability } from "@/components/plastic-injection-molding/PIMDesignMoldability";
import { PIMSurfaceFinishes } from "@/components/plastic-injection-molding/PIMSurfaceFinishes";
import { PIMCustomPartsRoute } from "@/components/plastic-injection-molding/PIMCustomPartsRoute";
import { PIMProcess } from "@/components/plastic-injection-molding/PIMProcess";
import { PIMProductionRelease } from "@/components/plastic-injection-molding/PIMProductionRelease";
import { PIMQualityRequirements } from "@/components/plastic-injection-molding/PIMQualityRequirements";
import { PIMFAQ } from "@/components/plastic-injection-molding/PIMFAQ";
import { IMMaterialsOptions } from "@/components/injection-molding/IMMaterialsOptions";
import { IMCTA } from "@/components/injection-molding/IMCTA";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface PIMPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

const PIM_FINAL_CTA = {
  heading: "Ready to Move Your Plastic Part Toward Production?",
  description: "Send your available CAD, material target, quantity, critical features, surface requirements, and delivery needs.\n\nWe’ll review molding feasibility and identify what to confirm before tooling release.",
  primaryCta: "Request Your Plastic Molding Quote",
  secondaryCta: "Discuss Your Part With an Engineer",
};

export function PIMPageClient({ initialContent, initialVersion }: PIMPageClientProps) {
  return (
    <CMSProvider pageSlug="/plastic-injection-molding" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main className="injection-molding-page">
        <PIMHero />
        <PIMIntroduction />
        <PIMDesignMoldability />
        <IMMaterialsOptions />
        <PIMQualityRequirements />
        <PIMSurfaceFinishes />
        <PIMCustomPartsRoute />
        <PIMProcess />
        <PIMProductionRelease />
        <PIMFAQ />
        <IMCTA content={PIM_FINAL_CTA} />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
