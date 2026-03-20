"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { Home3Hero } from "@/components/home3/sections/Home3Hero";
import { CMSProvider } from "@/contexts/CMSContext";
const CMSToolbar = dynamic(
  () => import("@/components/cms").then((m) => ({ default: m.CMSToolbar })),
  { ssr: false }
);

/** Below-the-fold sections code-split to reduce main-thread JS (TBT) on mobile. */
const Home3TrustedLogos = dynamic(() =>
  import("@/components/home3/sections/Home3TrustedLogos").then((m) => ({
    default: m.Home3TrustedLogos,
  }))
);
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
const Home3Process = dynamic(() =>
  import("@/components/home3/sections/Home3Process").then((m) => ({
    default: m.Home3Process,
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
const Home3FAQ = dynamic(() =>
  import("@/components/home3/sections/Home3FAQ").then((m) => ({
    default: m.Home3FAQ,
  }))
);

interface HomePageClientProps {
  initialContent: Record<string, unknown> | null;
  initialVersion: number;
}

export function HomePageClient({ initialContent, initialVersion }: HomePageClientProps) {
  const [showBelowFold, setShowBelowFold] = useState(false);

  useEffect(() => {
    // Defer below-the-fold rendering until after first paint.
    const id = window.setTimeout(() => setShowBelowFold(true), 250);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <CMSProvider pageSlug="/" initialContent={initialContent} initialVersion={initialVersion}>
      <Home3Header />
      <main>
        <Home3Hero />
        {showBelowFold ? (
          <>
            <Home3TrustedLogos />
            <Home3Facilities />
            <Home3Services />
            <Home3Process />
            <Home3WhyChoose />
            <Home3Industries />
            <Home3Portfolio />
            <Home3Certifications />
            <Home3FAQ />
          </>
        ) : null}
      </main>
      <Home3Footer />
      <CMSToolbar />
    </CMSProvider>
  );
}
