"use client";

import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const RECORD_GROUPS = [
  {
    title: "Engineering",
    description: "Customer part number and approved drawing revision.",
  },
  {
    title: "Material and Production",
    description: "Production order, traveler, material lot, production date, work center, applicable process parameters and surface finishing batch.",
  },
  {
    title: "Inspection",
    description: "Inspection results and operator or inspector identification.",
  },
  {
    title: "Delivery",
    description: "Packaging, labeling and shipment identification.",
  },
];

export function QualityTraceability() {
  return (
    <section className="bg-[#34312F] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)] lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold leading-tight tracking-[-0.015em] text-white">
              <EditableText path="traceability.title" defaultValue="Full Traceability for " />
              <span className="text-[#EEC569]"><EditableText path="traceability.titleHighlight" defaultValue="Controlled Production Programs" /></span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[#E0E0E2] sm:text-lg">
              <EditableText
                path="traceability.intro"
                defaultValue="Our quality management system supports 100% traceability across the material, production, inspection and shipment records defined for each controlled production program."
                multiline
              />
            </p>
            <p className="mt-5 border-l border-[#EEC569]/50 pl-4 text-xs leading-relaxed text-[#A9A19A]">
              <EditableText path="traceability.scopeNote" defaultValue="The exact traceability scope is defined in the agreed quality plan." multiline />
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-[#EEC569]">
              <EditableText path="traceability.recordsLabel" defaultValue="Traceable records can include" />
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {RECORD_GROUPS.map((group, index) => (
                <article key={group.title} className="border border-white/10 bg-[#171717] p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white">
                    <EditableText path={`traceability.groups.${index}.title`} defaultValue={group.title} />
                  </h3>
                  <p className="mt-3 text-[15px] leading-6 text-[#D0D0D2]">
                    <EditableText path={`traceability.groups.${index}.description`} defaultValue={group.description} multiline />
                  </p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
