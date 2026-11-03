"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { IMHero } from "@/components/injection-molding/IMHero";
import { IMSupplier } from "@/components/injection-molding/IMSupplier";
import { IMServices } from "@/components/injection-molding/IMServices";
import { IMRouteComparison } from "@/components/injection-molding/IMRouteComparison";
import { IMFitAndToolingReview } from "@/components/injection-molding/IMFitAndToolingReview";
import { IMFAQ } from "@/components/injection-molding/IMFAQ";
import { IMQuoteReadiness } from "@/components/injection-molding/IMQuoteReadiness";
import { IMSpecializedRequirements } from "@/components/injection-molding/IMSpecializedRequirements";
import { IMParts } from "@/components/injection-molding/IMParts";
import { IMMaterialsOptionsLegacy } from "@/components/injection-molding/IMMaterialsOptionsLegacy";
import { IMCTA } from "@/components/injection-molding/IMCTA";
import { CMSProvider } from "@/contexts/CMSContext";
import { CMSToolbar } from "@/components/cms";

interface IMPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function IMPageClient({ initialContent, initialVersion }: IMPageClientProps) {
  return (
    <CMSProvider pageSlug="/injection-molding" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main className="injection-molding-page">
        <IMHero />
        <IMServices />
        <IMMaterialsOptionsLegacy />
        <IMSupplier />
        <IMFitAndToolingReview showLifecycle={false} />
        <IMRouteComparison />
        <IMParts />
        <IMFitAndToolingReview showFit={false} />
        <IMSpecializedRequirements />
        <IMQuoteReadiness />
        <IMFAQ />
        <IMCTA />
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
