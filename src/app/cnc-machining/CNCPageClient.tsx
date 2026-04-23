"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { CNCHero } from "@/components/cnc/CNCHero";
import { CMSProvider } from "@/contexts/CMSContext";
import { scheduleIdleTask } from "@/lib/scheduleIdleTask";

const CMSToolbar = dynamic(
  () => import("@/components/cms").then((m) => ({ default: m.CMSToolbar })),
  { ssr: false }
);
const CNCServices = dynamic(() =>
  import("@/components/cnc/CNCServices").then((m) => ({ default: m.CNCServices }))
);
const CNCParts = dynamic(() =>
  import("@/components/cnc/CNCParts").then((m) => ({ default: m.CNCParts }))
);
const CNCTolerance = dynamic(() =>
  import("@/components/cnc/CNCTolerance").then((m) => ({ default: m.CNCTolerance }))
);
const CNCSupplier = dynamic(() =>
  import("@/components/cnc/CNCSupplier").then((m) => ({ default: m.CNCSupplier }))
);
const CNCWhyChoose = dynamic(() =>
  import("@/components/cnc/CNCWhyChoose").then((m) => ({ default: m.CNCWhyChoose }))
);
const CNCProcess = dynamic(() =>
  import("@/components/cnc/CNCProcess").then((m) => ({ default: m.CNCProcess }))
);
const CNCMaterials = dynamic(() =>
  import("@/components/cnc/CNCMaterials").then((m) => ({ default: m.CNCMaterials }))
);
const CNCSurfaceFinishes = dynamic(() =>
  import("@/components/cnc/CNCSurfaceFinishes").then((m) => ({ default: m.CNCSurfaceFinishes }))
);
const CNCCTA = dynamic(() =>
  import("@/components/cnc/CNCCTA").then((m) => ({ default: m.CNCCTA }))
);

interface CNCPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function CNCPageClient({ initialContent, initialVersion }: CNCPageClientProps) {
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
      pageSlug="/cnc-machining"
      initialContent={initialContent}
      initialVersion={initialVersion}
    >
      <Home3Header />
      <main>
        <CNCHero />
        {!isMobile || phase >= 1 ? (
          <>
            <CNCServices />
            <CNCParts />
            <CNCTolerance />
          </>
        ) : null}
        {!isMobile || phase >= 2 ? (
          <>
            <CNCSupplier />
            <CNCWhyChoose />
            <CNCProcess />
            <CNCMaterials />
            <CNCSurfaceFinishes />
            <CNCCTA />
          </>
        ) : null}
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
