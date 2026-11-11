"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Get a More Useful ",
  headingHighlight: "Injection Molding Quote",
  introduction:
    "To scope injection molding services, tooling, and production accurately, send your available CAD and the information below.",
  listHeading: "What to send",
  items: [
    "3D CAD model, drawing revision, and critical dimensions",
    "Target material, intended use, and cosmetic requirements",
    "Quantity, repeat-production expectations, and requested delivery date",
    "Inserts, overmolding, inspection, documentation, packaging, or shipping requirements",
  ],
  reassurance:
    "You do not need every detail to start. If material, tooling, or inspection requirements are still open, send the available design information for a DFM review.",
  cta: "Request an Injection Molding Quote",
};

export function IMQuoteReadiness() {
  return (
    <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 md:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] md:gap-12 lg:gap-16">
        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="min-w-0 md:order-2">
          <h2 className="service-section-title break-words text-white">
            <EditableText path="quoteReadiness.headingPrefix" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent"><EditableText path="quoteReadiness.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
          <p className="service-section-copy mt-6 max-w-[510px]">
            <EditableText path="quoteReadiness.introduction" defaultValue={DEFAULTS.introduction} multiline />
          </p>
        </motion.div>

        <motion.article initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="min-w-0 rounded-xl border border-[#D09947]/30 bg-[#252220] p-6 sm:p-8 md:order-1">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-[#EEC569]">
            <EditableText path="quoteReadiness.listHeading" defaultValue={DEFAULTS.listHeading} />
          </p>
          <ul className="mt-5 space-y-4">
            {DEFAULTS.items.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-[#F0F0F1]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#EEC569]" aria-hidden="true" />
                <span className="min-w-0"><EditableText path={`quoteReadiness.items.${index}`} defaultValue={item} multiline /></span>
              </li>
            ))}
          </ul>

          <div className="mt-7 border-t border-white/10 pt-6">
            <p className="text-sm leading-6 text-[#CFCFD2]">
              <EditableText path="quoteReadiness.reassurance" defaultValue={DEFAULTS.reassurance} multiline />
            </p>
            <Link href="https://app.apexbatch.com/" rel="nofollow" className="cta-primary group mt-6 w-full whitespace-normal text-center sm:w-auto sm:whitespace-nowrap">
              <EditableText path="quoteReadiness.cta" defaultValue={DEFAULTS.cta} />
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
