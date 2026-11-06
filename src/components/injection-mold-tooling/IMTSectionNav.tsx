"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const ITEMS = [
  ["tooling-options", "Tooling options", 2],
  ["design-build", "Design & build", 4],
  ["cost-timing", "Cost & timing", 6],
  ["tool-life-transfer", "Tool life & transfer", 9],
  ["specialized-tooling", "Specialized tooling", 13],
  ["tooling-faq", "FAQ", 15],
] as const;

type SectionId = (typeof ITEMS)[number][0];

export function IMTSectionNav() {
  const [activeId, setActiveId] = useState<SectionId>(ITEMS[0][0]);
  const [canScrollForward, setCanScrollForward] = useState(false);
  const navScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("main.injection-molding-page h2"));
    ITEMS.forEach(([id, , headingIndex]) => {
      const target = headings[headingIndex];
      const section = target?.closest("section");
      if (section) {
        section.id = id;
        section.style.scrollMarginTop = "calc(var(--q4-announcement-height) + 7rem)";
      }
    });
    const sections = ITEMS.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.33;
      const activeSection = sections.reduce((current, section) => (
        section.getBoundingClientRect().top <= marker ? section : current
      ), sections[0]);
      if (activeSection) setActiveId(activeSection.id as SectionId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const nav = navScrollRef.current;
    if (!nav) return;

    const updateScrollAffordance = () => {
      setCanScrollForward(nav.scrollLeft + nav.clientWidth < nav.scrollWidth - 2);
    };

    updateScrollAffordance();
    nav.addEventListener("scroll", updateScrollAffordance, { passive: true });
    window.addEventListener("resize", updateScrollAffordance);
    return () => {
      nav.removeEventListener("scroll", updateScrollAffordance);
      window.removeEventListener("resize", updateScrollAffordance);
    };
  }, []);

  const scrollForward = () => {
    const nav = navScrollRef.current;
    if (!nav) return;
    nav.scrollBy({ left: Math.max(nav.clientWidth * 0.7, 180), behavior: "smooth" });
  };

  return (
    <nav aria-label="On this page" className="sticky top-[calc(var(--q4-announcement-height)+4rem)] z-40 border-y border-white/10 bg-[#171615]/95 backdrop-blur">
      <div ref={navScrollRef} className="mx-auto flex max-w-[1200px] gap-1 overflow-x-auto px-6 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <span className="hidden shrink-0 py-1.5 pr-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#AAA7A3] lg:inline">On this page</span>
        {ITEMS.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setActiveId(id)} className={cn("shrink-0 border-b-2 px-3 py-1.5 text-xs font-medium transition-colors", activeId === id ? "border-[#EEC569] text-[#EEC569]" : "border-transparent text-[#CFCFD2] hover:text-white")}>{label}</a>)}
      </div>
      {canScrollForward && <button type="button" onClick={scrollForward} aria-label="Show more page sections" className="absolute inset-y-0 right-0 flex items-center bg-gradient-to-l from-[#171615] via-[#171615]/90 to-transparent pl-6 pr-2 text-lg leading-none text-[#EEC569] sm:hidden">»</button>}
    </nav>
  );
}
