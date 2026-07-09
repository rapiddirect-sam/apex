"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { CMMHero } from "@/components/cnc-milling/CMMHero";
import { CMSProvider } from "@/contexts/CMSContext";
import { scheduleIdleTask } from "@/lib/scheduleIdleTask";

const CMSToolbar = dynamic(
  () => import("@/components/cms").then((m) => ({ default: m.CMSToolbar })),
  { ssr: false }
);
const CMMServices = dynamic(() =>
  import("@/components/cnc-milling/CMMServices").then((m) => ({ default: m.CMMServices }))
);
const CMMSolutions = dynamic(() =>
  import("@/components/cnc-milling/CMMSolutions").then((m) => ({ default: m.CMMSolutions }))
);
const CMMParts = dynamic(() =>
  import("@/components/cnc-milling/CMMParts").then((m) => ({ default: m.CMMParts }))
);
const CMMTolerance = dynamic(() =>
  import("@/components/cnc-milling/CMMTolerance").then((m) => ({ default: m.CMMTolerance }))
);
const CMMWhyChoose = dynamic(() =>
  import("@/components/cnc-milling/CMMWhyChoose").then((m) => ({ default: m.CMMWhyChoose }))
);
const CMMFacilities = dynamic(() =>
  import("@/components/cnc-milling/CMMFacilities").then((m) => ({ default: m.CMMFacilities }))
);
const CMMProcess = dynamic(() =>
  import("@/components/cnc-milling/CMMProcess").then((m) => ({ default: m.CMMProcess }))
);
const CMMFAQ = dynamic(() =>
  import("@/components/cnc-milling/CMMFAQ").then((m) => ({ default: m.CMMFAQ }))
);
const CMMMaterials = dynamic(() =>
  import("@/components/cnc-milling/CMMMaterials").then((m) => ({ default: m.CMMMaterials }))
);
const CMMSurfaceFinishes = dynamic(() =>
  import("@/components/cnc-milling/CMMSurfaceFinishes").then((m) => ({ default: m.CMMSurfaceFinishes }))
);
const CMMDesignGuidelines = dynamic(() =>
  import("@/components/cnc-milling/CMMDesignGuidelines").then((m) => ({ default: m.CMMDesignGuidelines }))
);
const CMMCTA = dynamic(() =>
  import("@/components/cnc-milling/CMMCTA").then((m) => ({ default: m.CMMCTA }))
);

interface CMMillingPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function CMMillingPageClient({ initialContent, initialVersion }: CMMillingPageClientProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [phase, setPhase] = useState<0 | 1 | 2>(2);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 1023px)").matches;
    setIsMobile(mobile);
    if (!mobile) {
      setPhase(2);
      return;
    }
    setPhase(0);
    const cancelFirst = scheduleIdleTask(() => setPhase(1), 1200);
    const cancelSecond = scheduleIdleTask(() => setPhase(2), 2800);
    return () => {
      cancelFirst();
      cancelSecond();
    };
  }, []);

  return (
    <CMSProvider
      pageSlug="/cnc-milling"
      initialContent={initialContent}
      initialVersion={initialVersion}
    >
      <Home3Header />
      <main>
        <CMMHero />
        {!isMobile || phase >= 1 ? (
          <>
            <CMMServices />
            <CMMSolutions />
            <CMMTolerance />
            <CMMMaterials />
            <CMMSurfaceFinishes />
            <CMMDesignGuidelines />
            <CMMParts />
          </>
        ) : null}
        {!isMobile || phase >= 2 ? (
          <>
            <CMMWhyChoose />
            <CMMFacilities />
            <CMMProcess />
            <CMMFAQ />
            <CMMCTA />
          </>
        ) : null}
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
