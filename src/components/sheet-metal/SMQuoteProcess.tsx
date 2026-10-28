"use client";

import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "How to Get a Sheet Metal Fabrication ",
  headingHighlight: "Quote",
  steps: [
    {
      title: "Upload Your Files",
      description:
        "Send DXF or DWG files for flat profiles. For bent, welded, finished, or assembly-ready parts, include STEP files and a PDF drawing with critical requirements.",
    },
    {
      title: "Receive DFM Feedback",
      description:
        "Our engineers review material, thickness, cut features, bend feasibility, hole locations, hardware, weld access, finishing, inspection, and production quantity.",
    },
    {
      title: "Confirm the Production Plan",
      description:
        "Confirm the manufacturing route, price, lead time, quality requirements, available documentation, packaging, and shipping arrangement.",
    },
    {
      title: "Manufacture, Inspect, and Deliver",
      description:
        "Parts are manufactured to the approved route. Agreed critical requirements are checked before packaging and shipment.",
    },
  ],
};

export function SMQuoteProcess() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{
        background: "radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #000000",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="service-section-title text-white">
            <EditableText path="quote.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent">
              <EditableText path="quote.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DEFAULTS.steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative border border-[#D09947]/20 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="block text-5xl font-bold leading-none text-[#D09947]/35">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#D09947]">
                <EditableText path={`quote.steps.${index}.title`} defaultValue={step.title} />
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#C5C1BD]">
                <EditableText path={`quote.steps.${index}.description`} defaultValue={step.description} multiline />
              </p>
              {index < DEFAULTS.steps.length - 1 && (
                <span className="absolute top-1/2 -right-3 z-10 hidden h-0.5 w-6 bg-gradient-to-r from-[#D09947] to-transparent lg:block" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
