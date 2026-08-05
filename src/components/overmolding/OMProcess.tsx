"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "A Controlled Overmolding Process",
  headingHighlight: " from CAD to Production",
  subheading:
    "Each project follows a defined engineering, tooling, validation, and production process to reduce material, mold, and quality risks before volume manufacturing.",
  ctaText: "Upload Your Design",
  steps: [
    {
      number: "01",
      title: "Design and Requirement Review",
      description:
        "Upload your 3D CAD, 2D drawings, expected quantity, substrate material, overmold material, target hardness, operating environment, and functional requirements. We identify critical interfaces, cosmetic surfaces, assembly needs, and validation priorities.",
    },
    {
      number: "02",
      title: "Material Pairing and DFM",
      description:
        "Our engineers review overmolding materials, chemical compatibility, mechanical retention, wall thickness, draft, overmold boundaries, shutoff, gates, venting, and substrate support. A suitable transfer, two-shot, or rotary molding route is then recommended.",
    },
    {
      number: "03",
      title: "Tooling and T1 Validation",
      description:
        "The selected mold is manufactured and prepared for T1 sampling. Samples are reviewed for dimensions, appearance, flash, short shots, boundary position, hardness, bonding, and required functional performance. Typical T1 timing is four to six weeks after design freeze.",
    },
    {
      number: "04",
      title: "Production and Quality Control",
      description:
        "Once the sample and process are approved, production parameters are controlled through repeat manufacturing. Inspection can include dimensions, appearance, flash, missing material, misalignment, delamination, hardness, pull-off, peel, leak, and assembly testing.",
    },
  ],
};

export function OMProcess() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "112px 0 120px", background: "#000000" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "64px" }}
        >
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em" }}>
            <EditableText path="process.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="process.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p className="mx-auto w-[80%]" style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", marginTop: "18px" }}>
            <EditableText path="process.subheading" defaultValue={DEFAULTS.subheading} />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "24px" }}>
          {DEFAULTS.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#000000",
                borderRadius: "16px",
                padding: "28px",
                border: "1px solid rgba(208,153,71,0.2)",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "rgba(208,153,71,0.35)",
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                <EditableText path={`process.steps.${index}.number`} defaultValue={step.number} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#D09947", marginBottom: "12px" }}>
                <EditableText path={`process.steps.${index}.title`} defaultValue={step.title} />
              </h3>
              <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#C5C6C9" }}>
                <EditableText path={`process.steps.${index}.description`} defaultValue={step.description} multiline />
              </p>
              {index < DEFAULTS.steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px]"
                  style={{ background: "linear-gradient(to right, #D09947, transparent)" }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
          style={{ marginTop: "48px" }}
        >
          <Link
            href="https://app.apexbatch.com/"
            className="inline-flex items-center gap-2 bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider group"
          >
            <EditableText path="process.ctaText" defaultValue={DEFAULTS.ctaText} />
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
