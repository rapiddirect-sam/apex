"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";
import { ServiceTable } from "@/components/ui/ServiceTable";

const DEFAULTS = {
  heading: "Aluminum Extrusion Capabilities & ",
  headingHighlight: "Tolerances",
  footnote:
    "Note: Tolerances may vary depending on alloy type, cross-section geometry, and post-machining requirements.",
  columns: ["Dimension", "General Standard", "ApexBatch Typical", "Reference"],
  toleranceData: [
    {
      dimension: "Cross-section linear tolerance",
      standard: "\u00B10.2 \u2013 0.3 mm",
      typical: "Confirmed by section size",
      reference: "ISO 2768",
    },
    {
      dimension: "Straightness",
      standard: "1 mm/m",
      typical: "0.8 mm/m",
      reference: "\u2014",
    },
    {
      dimension: "Cut length tolerance",
      standard: "\u00B11.0 mm / -0.5 mm",
      typical: "\u00B11.0 mm / -0.5 mm",
      reference: "\u2014",
    },
    {
      dimension: "Hole position (post-machining)",
      standard: "\u00B10.2 mm / -0.1 mm",
      typical: "\u00B10.2 mm / -0.1 mm",
      reference: "\u2014",
    },
  ],
};

export function EXTolerance() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `
          radial-gradient(
            60% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "48px" }}
        >
          <h2
            className="section-title"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              marginBottom: "18px",
            }}
          >
            <EditableText path="tolerance.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="tolerance.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
        </motion.div>

        {/* Tolerance Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <ServiceTable
            variant="standard"
            caption="Aluminum extrusion capabilities and tolerances"
            columns={DEFAULTS.columns.map((column, index) => ({
              header: column,
              tone: index === DEFAULTS.columns.length - 1 ? ("accent" as const) : undefined,
            }))}
            rows={DEFAULTS.toleranceData.map((row, index) => [
              <EditableText
                key="dimension"
                path={`tolerance.data.${index}.dimension`}
                defaultValue={row.dimension}
              />,
              <EditableText
                key="standard"
                path={`tolerance.data.${index}.standard`}
                defaultValue={row.standard}
              />,
              <EditableText
                key="typical"
                path={`tolerance.data.${index}.typical`}
                defaultValue={row.typical}
              />,
              <EditableText
                key="reference"
                path={`tolerance.data.${index}.reference`}
                defaultValue={row.reference}
              />,
            ])}
          />
        </motion.div>
        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: "14px",
            color: "#7A7A7C",
            marginTop: "24px",
            fontStyle: "italic",
          }}
        >
          <EditableText path="tolerance.footnote" defaultValue={DEFAULTS.footnote} />
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
          style={{ marginTop: "48px" }}
        >
          <Link
            href="https://app.apexbatch.com/"
            rel="nofollow"
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider flex items-center justify-center gap-2 group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
