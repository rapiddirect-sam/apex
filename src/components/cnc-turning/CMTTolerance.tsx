"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EditableText } from "@/components/cms";

const GOLD_BORDER = "rgba(208, 153, 71, 0.55)";
const LIGHT_GOLD_BG = "rgba(249, 235, 188, 0.12)";

const DEFAULTS = {
  heading: "CNC Turning",
  headingHighlight: " Tolerance & Size",
  headingSuffix: " Capabilities",
  subheading:
    "Across 2-axis, live-tool, and Swiss-type CNC turning, ApexBatch reviews drawings, materials, geometry, critical dimensions, and inspection requirements before confirming tolerances. Standard tolerances can follow ISO 2768-m for metals and ISO 2768-c for plastics, while selected tight tolerances may be reviewed down to ±0.01 mm for demanding applications.",
  ctaText:
    "Need to confirm whether your tolerance or part size is achievable? Upload your CAD files and drawings for engineering review before production.",
  ctaButton: "Upload CAD Files",
  highlight: {
    titleLine1: "What",
    titleLine2: "We Control",
  },
  cards: [
    {
      subtitle: "Diameter Tolerance",
      text: "Standard ±0.05 mm; tight ±0.01 mm reviewed per drawing.",
    },
    {
      subtitle: "Length & L/D Ratio",
      text: "Up to 1500 mm length; L/D ratio reviewed before production.",
    },
    {
      subtitle: "Live Tool Features",
      text: "Cross holes, slots, flats, and secondary milled features.",
    },
    {
      subtitle: "Inspection Support",
      text: "CMM, gauges, and surface checks based on project needs.",
    },
  ],
  toleranceData: [
    { item: "Standard Tolerance", value: "\u00B10.05 mm" },
    { item: "Tight Tolerances", value: "\u00B10.01 mm" },
    { item: "Maximum Part Diameter", value: "800 mm" },
    { item: "Maximum Part Length", value: "1500 mm" },
    { item: "Minimum Part Diameter", value: "1 mm" },
  ],
};

const CARD1_HEIGHT = 80;
const SECTION_SUBTITLE_STYLE = { fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C" } as const;

function ToleranceVisualPanel() {
  return (
    <div className="flex h-full flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center rounded-[28px] px-5 md:px-6"
        style={{ height: CARD1_HEIGHT, background: LIGHT_GOLD_BG }}
      >
        <h3
          className="font-extrabold leading-[1.05] tracking-tight text-[#EEC569]"
          style={{ fontSize: "clamp(22px, 2.5vw, 28px)" }}
        >
          <EditableText path="tolerance.highlight.titleLine1" defaultValue={DEFAULTS.highlight.titleLine1} />
          {" "}
          <EditableText path="tolerance.highlight.titleLine2" defaultValue={DEFAULTS.highlight.titleLine2} />
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {DEFAULTS.cards.map((card, index) => (
          <div
            key={card.subtitle}
            className="flex flex-col justify-center rounded-2xl border px-4 py-4"
            style={{
              background: "transparent",
              borderColor: GOLD_BORDER,
              minHeight: "112px",
            }}
          >
            <p
              className="mb-2 font-bold text-[#EEC569]"
              style={{ fontSize: "18px", lineHeight: 1.4 }}
            >
              <EditableText path={`tolerance.cards.${index}.subtitle`} defaultValue={card.subtitle} />
            </p>
            <p style={SECTION_SUBTITLE_STYLE}>
              <EditableText path={`tolerance.cards.${index}.text`} defaultValue={card.text} multiline />
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function CMTTolerance() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "52px 0 112px",
        background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #000000`,
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-left"
        >
          <h2
            className="text-white"
            style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: "18px" }}
          >
            <EditableText path="tolerance.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="tolerance.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="tolerance.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>

          <p className="w-[80%]" style={SECTION_SUBTITLE_STYLE}>
            <EditableText path="tolerance.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <ToleranceVisualPanel />

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
                      { label: "Specification", align: "center" as const },
                      { label: "Value", align: "center" as const },
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
                    <tr
                      key={index}
                      style={{
                        background: index % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
                      }}
                    >
                      <td
                        style={{
                          borderBottom:
                            index < DEFAULTS.toleranceData.length - 1
                              ? "1px solid rgba(255,255,255,0.08)"
                              : "none",
                          padding: "18px 28px",
                          textAlign: "center",
                          color: "#FFFFFF",
                          fontWeight: 700,
                          fontSize: "16px",
                        }}
                      >
                        <EditableText path={`tolerance.data.${index}.item`} defaultValue={row.item} />
                      </td>
                      <td
                        style={{
                          borderBottom:
                            index < DEFAULTS.toleranceData.length - 1
                              ? "1px solid rgba(255,255,255,0.08)"
                              : "none",
                          padding: "18px 28px",
                          textAlign: "center",
                          color: "#FFFFFF",
                          fontWeight: 700,
                          fontSize: "16px",
                          whiteSpace: "pre-line",
                        }}
                      >
                        <EditableText path={`tolerance.data.${index}.value`} defaultValue={row.value} multiline />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

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
