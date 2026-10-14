"use client";

import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const CONTROLS = [
  {
    number: "01",
    title: "Drawing & Requirement Review",
    description: "Review drawings, 3D files, GD&T, critical dimensions, visible surfaces, materials and assembly requirements before the production route is approved.",
  },
  {
    number: "02",
    title: "Material & Process Verification",
    description: "Confirm the specified material, manufacturing route, secondary operations and surface finish. Any proposed material substitution requires customer approval.",
  },
  {
    number: "03",
    title: "Inspection Planning",
    description: "Define critical features, inspection methods, first-piece or FAI requirements, frequency, sampling, documentation, packaging and identification checks.",
  },
  {
    number: "04",
    title: "Production Readiness Approval",
    description: "Confirm the approved drawing, manufacturing route, material status, inspection plan, packaging requirements and first-article requirements before batch production is released.",
  },
];

export function QualityProcess() {
  return (
    <section className="overflow-hidden bg-[#34312F] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl">
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold leading-tight tracking-[-0.015em] text-white">
            <EditableText path="preproductionOverview.title" defaultValue="Quality Starts " />
            <span className="text-[#EEC569]"><EditableText path="preproductionOverview.titleHighlight" defaultValue="Before Production" /></span>
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#E2E2E2] sm:text-lg">
            <EditableText path="preproductionOverview.description" defaultValue="Before production begins, we review the requirements that affect part quality, inspection and repeatability." multiline />
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTROLS.map((control, index) => (
            <motion.article
              key={control.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-[#171717] px-6 pb-7 pt-6 transition duration-300 hover:-translate-y-1 hover:border-[#D09947]/60"
            >
              <div className="absolute left-6 top-0 h-[3px] w-12 bg-[#D09947] transition-all duration-300 group-hover:w-16 group-hover:bg-[#EEC569]" />
              <span className="text-xs font-bold tracking-[0.16em] text-[#EEC569]">
                <EditableText path={`preproductionOverview.controls.${index}.number`} defaultValue={control.number} />
              </span>
              <h3 className="mt-4 text-xl font-bold leading-snug text-white">
                <EditableText path={`preproductionOverview.controls.${index}.title`} defaultValue={control.title} />
              </h3>
              <p className="mt-4 text-[15px] leading-6 text-[#CDCDD0]">
                <EditableText path={`preproductionOverview.controls.${index}.description`} defaultValue={control.description} multiline />
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
