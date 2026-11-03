"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { SMHero } from "@/components/sheet-metal/SMHero";
import { SMSupplier } from "@/components/sheet-metal/SMSupplier";
import { SMServices } from "@/components/sheet-metal/SMServices";
import { SMParts } from "@/components/sheet-metal/SMParts";
import { SMCustomParts } from "@/components/sheet-metal/SMCustomParts";
import { SMApplications } from "@/components/sheet-metal/SMApplications";
import { SMFacility } from "@/components/sheet-metal/SMFacility";
import { SMAdvantages } from "@/components/sheet-metal/SMAdvantages";
import { SMQuoteProcess } from "@/components/sheet-metal/SMQuoteProcess";
import { SMFAQ } from "@/components/sheet-metal/SMFAQ";
import { SMProcess } from "@/components/sheet-metal/SMProcess";
import { SMTolerance } from "@/components/sheet-metal/SMTolerance";
import { SMMaterials } from "@/components/sheet-metal/SMMaterials";
import { SMSurfaceFinishes } from "@/components/sheet-metal/SMSurfaceFinishes";
import { SMCTA } from "@/components/sheet-metal/SMCTA";
import { CMSProvider } from "@/contexts/CMSContext";

interface SMPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function SMPageClient({ initialContent, initialVersion }: SMPageClientProps) {
  return (
    <CMSProvider pageSlug="/sheet-metal-fabrication" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main>
        <SMHero />
        <SMServices />
        <SMTolerance />
        <SMSupplier />
        <SMFacility />
        <SMMaterials />
        <SMSurfaceFinishes />
        <SMCustomParts />
        <SMApplications />
        <SMProcess />
        <SMParts />
        <SMAdvantages />
        <SMQuoteProcess />
        <SMFAQ />
        <SMCTA />
      </main>
      <Home3Footer />
    </CMSProvider>
  );
}
