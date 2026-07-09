"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "CNC Milling",
  headingHighlight: " Tolerance & Size",
  headingSuffix: " Capabilities",
  subheading: "Across 3-axis, 4-axis, and 5-axis CNC milling, ApexBatch reviews drawings, materials, geometry, critical dimensions, and inspection requirements before confirming tolerances. Standard tolerances can follow ISO 2768-m for metals and ISO 2768-c for plastics, while selected tight tolerances may be reviewed down to ±0.01 mm for demanding applications.",
  ctaText:
    "Need to confirm whether your tolerance or part size is achievable? Upload your CAD files and drawings for engineering review before production.",
  ctaButton: "Upload CAD Files",
  toleranceData: [
    {
      item: "Standard Tolerance",
      threeAxis: "\u00B10.05 mm",
      fourAxis: "\u00B10.05 mm",
      fiveAxis: "\u00B10.05 mm",
    },
    {
      item: "Tight Tolerances",
      threeAxis: "\u00B10.01 mm",
      fourAxis: "\u00B10.01 mm",
      fiveAxis: "\u00B10.01 mm",
    },
    {
      item: "Maximum Part Size",
      threeAxis: "6000 \u00D7 3000 \u00D7 400 mm",
      fourAxis: "600 \u00D7 600 \u00D7 400 mm",
      fiveAxis: "500 \u00D7 500 \u00D7 400 mm",
    },
    {
      item: "Minimum Part Size",
      threeAxis: "1 \u00D7 1 \u00D7 1 mm",
      fourAxis: "1 \u00D7 1 \u00D7 1 mm",
      fiveAxis: "1 \u00D7 1 \u00D7 1 mm",
    },
  ],
};

export function CMMTolerance() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "52px 0 120px",
        background: "#34312F",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-right"
        >
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: "18px" }}>
            <EditableText path="tolerance.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="tolerance.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="tolerance.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>

          <p
            className="ml-auto w-[80%]"
            style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C" }}
          >
            <EditableText path="tolerance.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div
            style={{
              borderRadius: "16px",
              border: "2px solid #7F4D0F",
              boxShadow: "inset 0 0 0 1px rgba(208,153,71,0.15), 0 24px 48px rgba(0,0,0,0.6)",
              background: "#000000",
              overflow: "hidden",
              maxWidth: "100%",
              width: "100%",
            }}
          >
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {[
                    { label: "Axis Type", align: "left" as const },
                    { label: "3-Axis", align: "right" as const },
                    { label: "4-Axis", align: "right" as const },
                    { label: "5-Axis", align: "right" as const },
                  ].map(({ label, align }) => (
                    <th
                      key={label}
                      style={{
                        background: "rgba(208,153,71,0.15)",
                        borderBottom: "1px solid rgba(208,153,71,0.3)",
                        padding: "20px 28px",
                        textAlign: align,
                        color: "#EEC569",
                        fontWeight: 700,
                        fontSize: "20px",
                      }}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEFAULTS.toleranceData.map((row, index) => (
                  <tr key={index} style={{ background: index % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)" }}>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", textAlign: "left", color: "#FFFFFF", fontWeight: 700, fontSize: "16px" }}>
                      <EditableText path={`tolerance.data.${index}.item`} defaultValue={row.item} />
                    </td>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", textAlign: "right", color: "#FFFFFF", fontWeight: 700, fontSize: "16px", whiteSpace: "pre-line" }}>
                      <EditableText path={`tolerance.data.${index}.threeAxis`} defaultValue={row.threeAxis} multiline />
                    </td>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", textAlign: "right", color: "#FFFFFF", fontWeight: 700, fontSize: "16px", whiteSpace: "pre-line" }}>
                      <EditableText path={`tolerance.data.${index}.fourAxis`} defaultValue={row.fourAxis} multiline />
                    </td>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", textAlign: "right", color: "#FFFFFF", fontWeight: 700, fontSize: "16px", whiteSpace: "pre-line" }}>
                      <EditableText path={`tolerance.data.${index}.fiveAxis`} defaultValue={row.fiveAxis} multiline />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 flex max-w-[920px] flex-col items-center gap-5 text-center"
        >
          <p style={{ color: "#F3F3F3", fontSize: "16px", lineHeight: 1.6 }}>
            <EditableText path="tolerance.ctaText" defaultValue={DEFAULTS.ctaText} multiline />
          </p>
          <Link
            href="https://app.apexbatch.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#D09947] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#000000] transition-all hover:bg-[#EEC569]"
            style={{ borderRadius: "4px" }}
          >
            <EditableText path="tolerance.ctaButton" defaultValue={DEFAULTS.ctaButton} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
