"use client";

import { useEffect, useState } from "react";
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

  return (
    <nav aria-label="On this page" className="sticky top-[calc(var(--q4-announcement-height)+4rem)] z-40 border-y border-white/10 bg-[#171615]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] gap-1 overflow-x-auto px-6 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <span className="hidden shrink-0 py-1.5 pr-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#AAA7A3] lg:inline">On this page</span>
        {ITEMS.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setActiveId(id)} className={cn("shrink-0 border-b-2 px-3 py-1.5 text-xs font-medium transition-colors", activeId === id ? "border-[#EEC569] text-[#EEC569]" : "border-transparent text-[#CFCFD2] hover:text-white")}>{label}</a>)}
      </div>
    </nav>
  );
}
