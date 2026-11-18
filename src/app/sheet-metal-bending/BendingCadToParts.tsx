"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { EditableText } from "@/components/cms";
import { motion } from "@/components/ui/StaticMotion";

const REQUIREMENTS = [
  "3D CAD model and current drawing revision",
  "Material, thickness, and target quantity",
  "Critical formed dimensions and assembly interfaces",
  "Visible surfaces, finish, color, or grain requirements",
  "Hardware, welding, inspection, packaging, or delivery needs",
];

export function BendingCadToParts() {
  return (
    <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:items-center lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="service-section-title text-white">
              <EditableText path="bendingCad.headingPrefix" defaultValue="From CAD File to " />
              <span className="service-title-accent">
                <EditableText path="bendingCad.headingHighlight" defaultValue="Finished Bent Parts" />
              </span>
            </h2>
            <p className="service-section-copy section-intro-copy--left mt-6"><EditableText path="bendingCad.intro" defaultValue="Send the files you have, and we will help confirm the production route. A 3D CAD model and drawing provide the clearest basis for a sheet metal bending service quote, while any open details can be clarified before production." multiline /></p>
            <p className="mt-7 text-sm font-bold uppercase tracking-[0.1em] text-[#EEC569]"><EditableText path="bendingCad.listHeading" defaultValue="To speed up your review, include" /></p>
            <ul className="mt-4 space-y-3">
              {REQUIREMENTS.map((item, index) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#E5E5E7]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#D09947]" aria-hidden="true" /><EditableText path={`bendingCad.requirements.${index}`} defaultValue={item} multiline /></li>)}
            </ul>
            <p className="section-note mt-8"><EditableText path="bendingCad.dxfNote" defaultValue="A DXF file can help define the flat geometry for laser-cut and bent parts. The final flat pattern, bend allowance, and forming sequence are confirmed against the approved manufacturing route." multiline /></p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#D09947]/35 bg-[#22201E] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-[#EEC569]">Typical production timing</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="border border-white/10 bg-black/30 p-5"><p className="text-3xl font-bold text-[#EEC569]">3–5</p><p className="mt-1 text-sm font-semibold text-white">Business days</p><p className="mt-2 text-sm leading-relaxed text-[#C5C1BD]">Simple prototype parts after requirements are confirmed.</p></div>
              <div className="border border-white/10 bg-black/30 p-5"><p className="text-3xl font-bold text-[#EEC569]">7–10</p><p className="mt-1 text-sm font-semibold text-white">Business days</p><p className="mt-2 text-sm leading-relaxed text-[#C5C1BD]">Low-volume work, subject to project scope.</p></div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#C5C1BD]"><EditableText path="bendingCad.timingNote" defaultValue="Repeat or higher-volume production is scheduled around quantity, material availability, secondary operations, inspection scope, and shipping." multiline /></p>
            <Link href="https://app.apexbatch.com/" rel="nofollow" className="cta-primary group mt-8 w-full justify-center"><EditableText path="bendingCad.cta" defaultValue="Request a Bending Quote" /><ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
          </motion.div>
        </div>
        <p className="section-tail-copy mx-auto mt-10 max-w-3xl text-left lg:text-center">Need to validate a fabricated design before the next build? Read our <Link href="/blog/sheet-metal-prototyping" className="body-text-link body-text-link--dark">sheet metal prototyping guide</Link>. For inspection records and documentation options, see our <Link href="/quality" className="body-text-link body-text-link--dark">quality assurance process</Link>.</p>
      </div>
    </section>
  );
}
