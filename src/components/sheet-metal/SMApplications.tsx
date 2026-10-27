"use client";

import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Sheet Metal ",
  headingHighlight: "Applications",
  description:
    "Sheet metal fabrication supports products and equipment that require durable, repeatable, and assembly-ready metal components.",
  applications: [
    {
      industry: "Electronics and Automation",
      components: "Enclosures, control panels, cabinets, and mounting brackets.",
    },
    {
      industry: "Industrial Equipment",
      components: "Guards, covers, frames, housings, and access panels.",
    },
    {
      industry: "Energy and Electrical Systems",
      components: "Cabinets, conductive parts, and protective structures.",
    },
    {
      industry: "Medical and Laboratory Equipment",
      components: "Stainless-steel panels, housings, brackets, and cleanable components.",
    },
    {
      industry: "Transportation and Mobility",
      components: "Covers, brackets, protective panels, and formed structural parts.",
    },
  ],
};

export function SMApplications() {
  return (
    <section className="relative overflow-hidden bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pt-2"
          >
            <h2 className="service-section-title text-white">
              <EditableText path="applications.heading" defaultValue={DEFAULTS.heading} />
              <span className="service-title-accent">
                <EditableText path="applications.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
              </span>
            </h2>
            <p className="service-section-copy mt-6 max-w-[500px]">
              <EditableText path="applications.description" defaultValue={DEFAULTS.description} multiline />
            </p>
          </motion.div>

          <div className="border-t border-white/10">
            {DEFAULTS.applications.map((application, index) => (
              <motion.article
                key={application.industry}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-white/10 py-6 sm:grid-cols-[52px_1fr] sm:gap-x-6"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-[#EEC569]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    <EditableText path={`applications.items.${index}.industry`} defaultValue={application.industry} />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#C5C1BD]">
                    <EditableText path={`applications.items.${index}.components`} defaultValue={application.components} multiline />
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
