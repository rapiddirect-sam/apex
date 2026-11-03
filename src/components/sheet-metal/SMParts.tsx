"use client";

import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "From Sheet Metal Prototyping to Repeat ",
  headingHighlight: "Production",
  description:
    "Sheet metal prototyping helps validate fit, bend geometry, hardware installation, finish appearance, assembly, and critical dimensions before larger quantities are released. For eligible projects, our free prototype and sample support can help confirm these requirements before larger quantities are committed. Prototype sheet metal parts also support functional testing, design updates, supplier qualification, and a controlled move into low-volume or repeat production.",
  stages: [
    {
      stage: "Prototype",
      objective: "Verify fit and function",
      focus: "Material, bend geometry, hole placement, finish, hardware, assembly",
    },
    {
      stage: "Low-volume production",
      objective: "Confirm repeatability",
      focus: "Revision control, inspection scope, packaging, process refinement",
    },
    {
      stage: "Repeat production",
      objective: "Deliver stable batches",
      focus: "Material planning, agreed process route, quality records, delivery schedule",
    },
  ],
};

export function SMParts() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl text-left lg:mx-auto lg:text-center"
        >
          <h2 className="service-section-title text-white">
            <EditableText path="parts.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent">
              <EditableText path="parts.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p className="service-section-copy mt-6 max-w-4xl lg:mx-auto">
            <EditableText path="parts.description" defaultValue={DEFAULTS.description} multiline />
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {DEFAULTS.stages.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 border-t-[#EEC569]/50 bg-[#1A1918] p-6 sm:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#EEC569]">
                Project stage
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                <EditableText path={`parts.stages.${index}.stage`} defaultValue={stage.stage} />
              </h3>
              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#AAA7A3]">Main objective</p>
                <p className="mt-2 text-base font-medium text-[#F4F1EC]">
                  <EditableText path={`parts.stages.${index}.objective`} defaultValue={stage.objective} />
                </p>
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#AAA7A3]">Engineering focus</p>
                <p className="mt-2 text-sm leading-relaxed text-[#C5C1BD]">
                  <EditableText path={`parts.stages.${index}.focus`} defaultValue={stage.focus} multiline />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
