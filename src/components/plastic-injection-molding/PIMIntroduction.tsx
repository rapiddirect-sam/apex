"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  headingPrefix: "What Is Plastic ",
  headingHighlight: "Injection Molding?",
  descriptionPrimary:
    "Plastic injection molding makes custom plastic parts from a dedicated metal mold. Molten resin fills the mold cavity, cools, and is released as a finished part with defined geometry, material, surface appearance, and functional features.",
  descriptionSecondary:
    "Unlike CNC machining or 3D printing, the final part geometry is built into the tool. This makes injection molding suitable for stable designs that need repeatable housings, covers, clips, connectors, brackets, mechanical features, or other production plastic parts.",
  descriptionTertiary:
    "Tooling is an upfront decision. The process is most valuable when the design is sufficiently defined for tooling and the project needs molded prototypes, pilot batches, planned low-volume production, or repeat orders. Material selection, wall thickness, shrinkage, visible surfaces, critical dimensions, and inspection requirements should be resolved before tooling is released.",
  explorationPrefix:
    "Not sure whether your part needs standard plastic molding services, overmolding, or insert molding? Explore ",
  explorationLink: "Injection Molding Services for Custom Parts",
  detailsLabel: "Read more about tooling and production planning",
};

export function PIMIntroduction() {
  return (
    <section className="relative overflow-hidden bg-[#34312F] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <h2 className="service-section-title max-w-[980px] text-left lg:order-2">
            <EditableText path="plasticInjectionIntroduction.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
            <span className="service-title-accent">
              <EditableText path="plasticInjectionIntroduction.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>

          <div className="service-section-copy mt-5 max-w-[980px] space-y-4 text-left lg:order-1 lg:mt-0">
            <p>
              <EditableText path="plasticInjectionIntroduction.descriptionPrimary" defaultValue={DEFAULTS.descriptionPrimary} multiline />
            </p>
            <details className="group border-t border-white/15 pt-4">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-[#EEC569] marker:hidden [&::-webkit-details-marker]:hidden">
                <EditableText path="plasticInjectionIntroduction.detailsLabel" defaultValue={DEFAULTS.detailsLabel} />
                <span className="transition-transform duration-200 group-open:rotate-180" aria-hidden="true">↓</span>
              </summary>
              <div className="mt-4 space-y-4">
                <p>
                  <EditableText path="plasticInjectionIntroduction.descriptionSecondary" defaultValue={DEFAULTS.descriptionSecondary} multiline />
                </p>
                <p>
                  <EditableText path="plasticInjectionIntroduction.descriptionTertiary" defaultValue={DEFAULTS.descriptionTertiary} multiline />
                </p>
                <p>
                  <EditableText path="plasticInjectionIntroduction.explorationPrefix" defaultValue={DEFAULTS.explorationPrefix} />
                  <Link href="/injection-molding" className="body-text-link body-text-link--dark">
                    <EditableText path="plasticInjectionIntroduction.explorationLink" defaultValue={DEFAULTS.explorationLink} />
                  </Link>.
                </p>
              </div>
            </details>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
