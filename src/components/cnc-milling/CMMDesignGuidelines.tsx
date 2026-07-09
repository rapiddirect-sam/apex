"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Design",
  headingHighlight: " Guidelines",
  headingSuffix: " for CNC Milling",
  subheading:
    "Small design details such as internal radii, threaded holes, wall thickness, engraving, and hole depth can affect CNC milling cost, tolerance stability, and production risk. ApexBatch, as a CNC machining manufacturer, reviews CAD files and drawings before production to identify manufacturability issues early.",
  guidelinesData: [
    {
      element: "Internal Corner Radius",
      recommended: "≥ 0.5 mm",
    },
    {
      element: "Threaded Holes (\u00D81.5\u20135 mm)",
      recommended: "M1.6\u2013M5, depth \u2264 2 \u00D7 diameter",
    },
    {
      element: "Threaded Holes (≥ \u00D8 5 mm)",
      recommended: "M6 or larger; blind or through holes available",
    },
    {
      element: "Text / Engraving",
      recommended: "Text height ≥ 1 mm, depth ≤ 0.5 mm",
    },
    {
      element: "Hole Design",
      recommended: "Hole diameter ≥ wall thickness; stepped holes recommended for deep holes",
    },
    {
      element: "Wall Thickness",
      recommended: "Metals ≥ 0.5 mm; plastics ≥ 1 mm",
    },
  ],
};

export function CMMDesignGuidelines() {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "48px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              marginBottom: "18px",
            }}
          >
            <EditableText path="designGuidelines.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="designGuidelines.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="designGuidelines.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>
          <p
            className="mx-auto w-[80%]"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              marginTop: "18px",
            }}
          >
            <EditableText path="designGuidelines.subheading" defaultValue={DEFAULTS.subheading} multiline />
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
              overflow: "hidden",
              width: "100%",
            }}
          >
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["Design Element", "Recommended Value"].map((label) => (
                    <th
                      key={label}
                      style={{
                        background: "rgba(208,153,71,0.15)",
                        borderBottom: "1px solid rgba(208,153,71,0.3)",
                        padding: "20px 28px",
                        textAlign: "center",
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
                {DEFAULTS.guidelinesData.map((row, index) => (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <td
                      style={{
                        borderBottom:
                          index < DEFAULTS.guidelinesData.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        padding: "18px 28px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      <EditableText path={`designGuidelines.data.${index}.element`} defaultValue={row.element} />
                    </td>
                    <td
                      style={{
                        borderBottom:
                          index < DEFAULTS.guidelinesData.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        padding: "18px 28px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      <EditableText path={`designGuidelines.data.${index}.recommended`} defaultValue={row.recommended} />
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
          className="flex justify-center"
          style={{ marginTop: "48px" }}
        >
          <Link
            href="https://app.apexbatch.com/"
            rel="nofollow"
            className="inline-flex items-center gap-2 bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
