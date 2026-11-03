"use client";

import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  headingPrefix: "From Initial Samples to Production ",
  headingHighlight: "Release",
  stageLabels: ["Validate the part", "Approve the initial sample", "Prepare production"],
  paragraphs: [
    "Prototype plastic injection molding helps validate fit, function, material direction, and visible-surface expectations before you commit to pilot or planned production.",
    "We review initial samples against the agreed drawing, critical features, functional interfaces, and cosmetic requirements. Any approved dimensional, appearance, or tooling changes are documented and closed before production release.",
    "Before production begins, we also confirm any secondary operations, marking, finishing, assembly, packaging, and delivery requirements.",
  ],
};

export function PIMProductionRelease() {
  return (
    <section className="bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 md:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] md:gap-12 lg:gap-16">
        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:order-2">
          <h2 className="service-section-title text-white">
            <EditableText path="productionRelease.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
            <span className="service-title-accent"><EditableText path="productionRelease.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border-t border-white/10 md:order-1">
          {DEFAULTS.paragraphs.map((paragraph, index) => (
            <div key={paragraph} className="border-b border-white/10 py-5 sm:py-6">
              <p className="text-base font-semibold text-white">
                <EditableText path={`productionRelease.stageLabels.${index}`} defaultValue={DEFAULTS.stageLabels[index]} />
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-[#CFCFD2]">
                <EditableText path={`productionRelease.paragraphs.${index}`} defaultValue={paragraph} multiline />
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
