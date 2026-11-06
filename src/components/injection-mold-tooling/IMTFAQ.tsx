"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  ["What is injection mold tooling?", "Injection mold tooling is the mold system used to produce plastic injection molded parts. It includes the core, cavity, runner and gate system, cooling, venting, ejection, and any moving or specialty components needed to form the part."],
  ["Is aluminum or steel tooling better for my project?", "Aluminum and steel tooling serve different purposes. Aluminum can be suitable for selected prototypes and lower-volume programs. Steel is often considered when tool life, abrasive materials, surface finish, repeatability, or planned production demand require a more durable solution. We review the part, resin, quantity, and production plan before recommending either route."],
  ["How much does injection mold tooling cost?", "Injection mold tooling cost is set by part size, geometry, cavity count, core and cavity steel, runner system, surface requirements, slides or lifters, inspection scope, sampling plan, and expected mold life. We quote the tooling route against the approved part revision and planned production program rather than using a generic price range."],
  ["How long does injection mold tooling take?", "Tooling lead time includes design review, mold design, material preparation, machining, fitting, assembly, T1 sampling, approved modifications, and sample approval. The final schedule is confirmed after we review the part complexity, tooling route, resin, purchased components, inspection scope, and required approval steps."],
  ["What happens during T1 sample approval?", "T1 samples are reviewed against the agreed material, dimensions, interfaces, appearance requirements, and inspection scope. Required tooling changes are defined and closed before production release."],
  ["Who owns, stores, maintains, and can transfer the mold?", "Ownership, storage period, preventive maintenance, repair responsibility, and transfer conditions are defined in the quotation and project agreement before tooling begins."],
];

export function IMTFAQ() {
  const [open, setOpen] = useState(0);
  return <section className="bg-black py-20 sm:py-24 lg:py-28"><div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(280px,34fr)_minmax(0,66fr)] lg:gap-16"><h2 className="service-section-title text-white">Frequently Asked <span className="service-title-accent">Questions</span></h2><div className="space-y-3">{ITEMS.map(([question, answer], index) => <article key={question} className={cn("overflow-hidden rounded-xl", open === index ? "bg-[#D09947]/30" : "bg-[#2A2A2A]")}><h3><button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="flex min-h-[72px] w-full items-center gap-4 px-5 py-5 text-left sm:px-6" aria-expanded={open === index}><span className="flex-1 text-[15px] font-medium text-white sm:text-base">{question}</span><ChevronDown className={cn("h-5 w-5 shrink-0 text-[#D09947] transition-transform", open === index && "rotate-180")} /></button></h3><div className={cn("grid transition-[grid-template-rows,opacity] duration-300", open === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}><div className="overflow-hidden"><p className="px-5 pb-7 text-[15px] leading-[1.7] text-white sm:px-6 sm:pr-16">{answer}</p></div></div></article>)}</div></div></section>;
}
