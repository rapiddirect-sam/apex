"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { LCHero } from "@/components/laser-cutting/LCHero";
import { CMSProvider } from "@/contexts/CMSContext";
import { scheduleIdleTask } from "@/lib/scheduleIdleTask";

const CMSToolbar = dynamic(
  () => import("@/components/cms").then((m) => ({ default: m.CMSToolbar })),
  { ssr: false }
);
const LCCapabilities = dynamic(() =>
  import("@/components/laser-cutting/LCCapabilities").then((m) => ({ default: m.LCCapabilities }))
);
const LCMaterials = dynamic(() =>
  import("@/components/laser-cutting/LCMaterials").then((m) => ({ default: m.LCMaterials }))
);
const LCParts = dynamic(() =>
  import("@/components/laser-cutting/LCParts").then((m) => ({ default: m.LCParts }))
);
const LCWhyChoose = dynamic(() =>
  import("@/components/laser-cutting/LCWhyChoose").then((m) => ({ default: m.LCWhyChoose }))
);
const LCProcess = dynamic(() =>
  import("@/components/laser-cutting/LCProcess").then((m) => ({ default: m.LCProcess }))
);
const LCFAQ = dynamic(() =>
  import("@/components/laser-cutting/LCFAQ").then((m) => ({ default: m.LCFAQ }))
);
const LCCTA = dynamic(() =>
  import("@/components/laser-cutting/LCCTA").then((m) => ({ default: m.LCCTA }))
);

interface LaserCuttingPageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function LaserCuttingPageClient({ initialContent, initialVersion }: LaserCuttingPageClientProps) {
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
      pageSlug="/laser-cutting"
      initialContent={initialContent}
      initialVersion={initialVersion}
    >
      <Home3Header />
      <main>
        <LCHero />
        {!isMobile || phase >= 1 ? (
          <>
            <LCCapabilities />
            <LCMaterials />
            <LCParts />
            <LCWhyChoose />
          </>
        ) : null}
        {!isMobile || phase >= 2 ? (
          <>
            <LCProcess />
            <LCFAQ />
            <LCCTA />
          </>
        ) : null}
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
