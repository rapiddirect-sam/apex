"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { CMTHero } from "@/components/cnc-turning/CMTHero";
import { CMSProvider } from "@/contexts/CMSContext";
import { scheduleIdleTask } from "@/lib/scheduleIdleTask";

const CMSToolbar = dynamic(
  () => import("@/components/cms").then((m) => ({ default: m.CMSToolbar })),
  { ssr: false }
);
const CMTServices = dynamic(() =>
  import("@/components/cnc-turning/CMTServices").then((m) => ({ default: m.CMTServices }))
);
const CMTParts = dynamic(() =>
  import("@/components/cnc-turning/CMTParts").then((m) => ({ default: m.CMTParts }))
);
const CMTTolerance = dynamic(() =>
  import("@/components/cnc-turning/CMTTolerance").then((m) => ({ default: m.CMTTolerance }))
);
const CMTWhyChoose = dynamic(() =>
  import("@/components/cnc-turning/CMTWhyChoose").then((m) => ({ default: m.CMTWhyChoose }))
);
const CMTProcess = dynamic(() =>
  import("@/components/cnc-turning/CMTProcess").then((m) => ({ default: m.CMTProcess }))
);
const CMTFAQ = dynamic(() =>
  import("@/components/cnc-turning/CMTFAQ").then((m) => ({ default: m.CMTFAQ }))
);
const CMTMaterials = dynamic(() =>
  import("@/components/cnc-turning/CMTMaterials").then((m) => ({ default: m.CMTMaterials }))
);
const CMTQualityControl = dynamic(() =>
  import("@/components/cnc-turning/CMTQualityControl").then((m) => ({ default: m.CMTQualityControl }))
);
const CMTSurfaceFinishes = dynamic(() =>
  import("@/components/cnc-turning/CMTSurfaceFinishes").then((m) => ({ default: m.CMTSurfaceFinishes }))
);
const CMTCTA = dynamic(() =>
  import("@/components/cnc-turning/CMTCTA").then((m) => ({ default: m.CMTCTA }))
);

interface CNCTurningPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function CNCTurningPageClient({ initialContent, initialVersion }: CNCTurningPageClientProps) {
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
      pageSlug="/cnc-turning"
      initialContent={initialContent}
      initialVersion={initialVersion}
    >
      <Home3Header />
      <main>
        <CMTHero />
        {!isMobile || phase >= 1 ? (
          <>
            <CMTServices />
            <CMTTolerance />
            <CMTParts />
            <CMTMaterials />
            <CMTSurfaceFinishes />
            <CMTQualityControl />
            <CMTWhyChoose />
          </>
        ) : null}
        {!isMobile || phase >= 2 ? (
          <>
            <CMTProcess />
            <CMTFAQ />
            <CMTCTA />
          </>
        ) : null}
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
