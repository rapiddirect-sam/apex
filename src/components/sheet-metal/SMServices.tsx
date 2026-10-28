"use client";

import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "What Is Sheet Metal ",
  headingHighlight: "Fabrication?",
  description:
    "Sheet metal fabrication transforms flat metal sheet into functional custom parts through a production route tailored to the part’s geometry, material, finish and production requirements.",
  applications:
    "ApexBatch manufactures enclosures, brackets, chassis, panels, guards, covers, equipment housings and assembly-ready sheet metal components. Where a project requires related custom metal parts, we can coordinate the appropriate manufacturing route as part of the same production program.",
  steps: [
    "Material Selection",
    "Laser Cutting or Punching",
    "CNC Bending or Forming",
    "Welding and Hardware Insertion",
    "Surface Finishing",
    "Inspection and Delivery",
  ],
};

export function SMServices() {
  return (
    <section className="relative overflow-hidden bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="service-section-title text-white">
              <EditableText path="services.heading" defaultValue={DEFAULTS.heading} />
              <span className="service-title-accent">
                <EditableText path="services.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
              </span>
            </h2>
            <p className="service-section-copy mt-6 max-w-[540px]">
              <EditableText path="services.description" defaultValue={DEFAULTS.description} multiline />
            </p>
            <p className="service-section-copy mt-5 max-w-[540px]">
              <EditableText path="services.applications" defaultValue={DEFAULTS.applications} multiline />
            </p>
          </motion.div>

          <motion.ol
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {DEFAULTS.steps.map((step, index) => (
              <li key={step} className="flex min-h-[88px] items-center gap-4 border border-white/10 bg-[#292624]/70 px-5 py-4">
                <span className="shrink-0 text-xs font-semibold tracking-[0.14em] text-[#EEC569]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-medium leading-snug text-[#F4F1EC]">
                  <EditableText path={`services.steps.${index}`} defaultValue={step} />
                </span>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
