"use client";

import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Aluminum Extrusion Manufacturing: ",
  headingHighlight: "From Drawing to Finished Components",
  steps: [
    {
      number: "01",
      title: "Send Your Drawing",
      description:
        "Upload a drawing, 3D file, cross-section sketch or sample photo. If some details are still being defined, our engineering team can review them with you.",
    },
    {
      number: "02",
      title: "DFM and Tooling Review",
      description:
        "We review profile geometry, wall thickness, cavities, tolerances, machining and surface finish requirements. You receive a manufacturability and tooling recommendation before production.",
    },
    {
      number: "03",
      title: "Tooling and Sample Approval",
      description:
        "For custom cross-sections, we develop the extrusion die and confirm the production approach through sample review where required.",
    },
    {
      number: "04",
      title: "Extrusion and Fabrication",
      description:
        "Aluminum billet is formed through the custom die, then cooled, straightened and cut to length. CNC machining, drilling, tapping and end-face processing are completed as specified.",
    },
    {
      number: "05",
      title: "Finishing and Inspection",
      description:
        "Apply anodizing, powder coating, brushing, polishing or sandblasting as required. Critical dimensions, hole locations, straightness and visible surfaces are inspected before packing.",
    },
    {
      number: "06",
      title: "Packaging and Delivery",
      description:
        "Finished extrusion parts are protected with project-specific packaging and prepared for delivery to your assembly line or production site.",
    },
  ],
};

export function EXProcess() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: "#34312F",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="service-section-title max-w-[1040px]">
            <EditableText
              path="extrusionManufacturing.heading"
              defaultValue={DEFAULTS.heading}
            />
            <span className="service-title-accent">
              <EditableText
                path="extrusionManufacturing.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>
        </motion.div>

        <ol className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DEFAULTS.steps.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative h-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#171717] px-7 pb-8 pt-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D09947]/55"
            >
              <div className="absolute left-7 top-0 h-[3px] w-16 bg-[#D09947] transition-all duration-300 group-hover:w-24 group-hover:bg-[#EEC569]" />

              <div className="flex items-start gap-4">
                <span className="shrink-0 pt-1 text-sm font-bold tracking-[0.12em] text-[#EEC569]">
                  {step.number}
                </span>
                <h3 className="text-[20px] font-bold leading-[1.3] text-white">
                  <EditableText
                    path={`extrusionManufacturing.steps.${index}.title`}
                    defaultValue={step.title}
                  />
                </h3>
              </div>

              <p className="service-section-copy mt-5">
                <EditableText
                  path={`extrusionManufacturing.steps.${index}.description`}
                  defaultValue={step.description}
                  multiline
                />
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
