"use client";

import { Box, Layers3, PanelsTopLeft } from "lucide-react";
import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Advantages of Sheet Metal ",
  headingHighlight: "Fabrication",
  introduction:
    "Sheet metal fabrication is well suited to parts made from flat stock that require formed geometry, repeatable features and efficient use of material.",
  advantages: [
    {
      title: "Efficient for Formed Geometry",
      description:
        "Laser cutting, punching and bending can create brackets, panels, enclosures, covers, chassis and guards without machining the entire part from solid stock.",
      icon: PanelsTopLeft,
    },
    {
      title: "Material-Efficient for Suitable Parts",
      description:
        "Parts are produced from sheet stock, allowing the flat pattern, nesting strategy and forming sequence to be considered before production.",
      icon: Layers3,
    },
    {
      title: "Suitable for Functional Enclosures and Assemblies",
      description:
        "Sheet metal can accommodate ventilation patterns, mounting features, bends, fasteners, welded joints and protective finishes within a single part or fabricated assembly.",
      icon: Box,
    },
  ],
  note:
    "Note: Sheet metal fabrication is not the best route for every design. Deep 3D geometry, very thick sections, tight multi-axis features or certain functional requirements may be better suited to CNC machining, die casting or another process.",
};

export function SMAdvantages() {
  return (
    <section className="relative overflow-hidden bg-[#292624] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pt-2"
          >
            <h2 className="service-section-title text-white">
              <EditableText path="advantages.heading" defaultValue={DEFAULTS.heading} />
              <span className="service-title-accent">
                <EditableText path="advantages.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
              </span>
            </h2>
            <p className="service-section-copy mt-6 max-w-[500px]">
              <EditableText path="advantages.introduction" defaultValue={DEFAULTS.introduction} multiline />
            </p>
          </motion.div>

          <div className="border-t border-white/10">
            {DEFAULTS.advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.article
                  key={advantage.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-white/10 py-7 sm:grid-cols-[52px_auto_1fr] sm:gap-x-6"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#EEC569]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="hidden h-6 w-6 text-[#EEC569] sm:block" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      <EditableText path={`advantages.items.${index}.title`} defaultValue={advantage.title} />
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#C5C1BD]">
                      <EditableText path={`advantages.items.${index}.description`} defaultValue={advantage.description} multiline />
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-note mt-10"
        >
          <p>
            <EditableText path="advantages.note" defaultValue={DEFAULTS.note} multiline />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
