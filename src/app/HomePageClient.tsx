"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { Home3Hero } from "@/components/home3/sections/Home3Hero";
import { Home3Q4ProjectSupport } from "@/components/home3/sections/Home3Q4ProjectSupport";
import { CMSProvider } from "@/contexts/CMSContext";
import { scheduleIdleTask } from "@/lib/scheduleIdleTask";
import type { LatestResourcePost } from "@/components/home3/sections/Home3LatestResources";

const CMSToolbar = dynamic(
  () => import("@/components/cms").then((m) => ({ default: m.CMSToolbar })),
  { ssr: false }
);

/** Below-the-fold sections are code-split; render immediately (no delayed mount — avoids CLS / Speed Index regressions). */
const Home3Facilities = dynamic(() =>
  import("@/components/home3/sections/Home3Facilities").then((m) => ({
    default: m.Home3Facilities,
  }))
);
const Home3Services = dynamic(() =>
  import("@/components/home3/sections/Home3Services").then((m) => ({
    default: m.Home3Services,
  }))
);
const Home3QuoteWorkflow = dynamic(() =>
  import("@/components/about/AboutQuoteWorkflow").then((m) => ({
    default: m.AboutQuoteWorkflow,
  }))
);
const Home3WhyChoose = dynamic(() =>
  import("@/components/home3/sections/Home3WhyChoose").then((m) => ({
    default: m.Home3WhyChoose,
  }))
);
const Home3Industries = dynamic(() =>
  import("@/components/home3/sections/Home3Industries").then((m) => ({
    default: m.Home3Industries,
  }))
);
const Home3Portfolio = dynamic(() =>
  import("@/components/home3/sections/Home3Portfolio").then((m) => ({
    default: m.Home3Portfolio,
  }))
);
const Home3Certifications = dynamic(() =>
  import("@/components/home3/sections/Home3Certifications").then((m) => ({
    default: m.Home3Certifications,
  }))
);
const Home3Testimonials = dynamic(() =>
  import("@/components/home3/sections/Home3Testimonials").then((m) => ({
    default: m.Home3Testimonials,
  }))
);
const Home3FAQ = dynamic(() =>
  import("@/components/home3/sections/Home3FAQ").then((m) => ({
    default: m.Home3FAQ,
  }))
);
const Home3LatestResources = dynamic(() =>
  import("@/components/home3/sections/Home3LatestResources").then((m) => ({
    default: m.Home3LatestResources,
  }))
);

interface HomePageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
  latestResources: LatestResourcePost[];
}

export function HomePageClient({ initialContent, initialVersion, latestResources }: HomePageClientProps) {
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
    const cancelSecond = scheduleIdleTask(() => setPhase(2), 2600);
    return () => {
      cancelFirst();
      cancelSecond();
    };
  }, []);

  return (
    <CMSProvider pageSlug="/" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main>
        <Home3Hero />
        <Home3Q4ProjectSupport />
        {!isMobile || phase >= 1 ? (
          <>
            <Home3Services />
            <Home3Facilities />
          </>
        ) : null}
        {!isMobile || phase >= 2 ? (
          <>
            <Home3WhyChoose />
            <Home3Testimonials />
            <Home3Certifications />
            <Home3QuoteWorkflow />
            <Home3Industries />
            <Home3Portfolio />
            <Home3LatestResources posts={latestResources} />
            <Home3FAQ />
          </>
        ) : null}
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
