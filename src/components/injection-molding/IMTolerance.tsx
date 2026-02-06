"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const toleranceData = [
  {
    element: "Wall Thickness",
    recommended: "1.5 - 3.0 mm",
    limit: "0.5 mm (for LCP, etc.)",
    notes: "Uniform wall thickness to avoid sink marks",
  },
  {
    element: "Draft Angle",
    recommended: "1° - 3°",
    limit: "0.5° (textured parts require larger)",
    notes: "Smooth surfaces take smaller values, textured surfaces require larger values",
  },
  {
    element: "Rib Thickness",
    recommended: "50% - 60% of main wall",
    limit: "30% (deeper ribs need to be thinner)",
    notes: "Prevents sink marks on opposite side",
  },
  {
    element: "Mold Tolerance",
    recommended: "±0.03 mm / 25mm",
    limit: "±0.01 mm",
    notes: "Depends on steel material and machining accuracy",
  },
  {
    element: "Part Tolerance",
    recommended: "±0.1 mm (general)",
    limit: "±0.05 mm (precision)",
    notes: "Significantly affected by material shrinkage rate",
  },
];

export function IMTolerance() {
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
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              marginBottom: "18px",
            }}
          >
            Design for Manufacturing{" "}
            <span style={{ color: "#EEC569" }}>Guidelines</span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              maxWidth: "700px",
            }}
          >
            Critical design parameters and tolerances for optimal injection molding results. Follow
            these guidelines to ensure manufacturability and quality.
          </p>
        </motion.div>

        {/* Tolerance Table */}
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
            <table
              className="w-full"
              style={{
                borderCollapse: "collapse",
              }}
            >
              {/* Header */}
              <thead>
                <tr>
                  <th
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
                    Design Element
                  </th>
                  <th
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
                    Recommended Value
                  </th>
                  <th
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
                    Limit Value
                  </th>
                  <th
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
                    Notes
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {toleranceData.map((row, index) => (
                  <tr
                    key={index}
                    style={{
                      background:
                        index % 2 === 0
                          ? "rgba(255,255,255,0.02)"
                          : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <td
                      style={{
                        borderBottom:
                          index < toleranceData.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        padding: "18px 28px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      {row.element}
                    </td>
                    <td
                      style={{
                        borderBottom:
                          index < toleranceData.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        padding: "18px 28px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      {row.recommended}
                    </td>
                    <td
                      style={{
                        borderBottom:
                          index < toleranceData.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        padding: "18px 28px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      {row.limit}
                    </td>
                    <td
                      style={{
                        borderBottom:
                          index < toleranceData.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        padding: "18px 28px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

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
            className="inline-flex items-center gap-2 transition-all duration-300 hover:brightness-110 group"
            style={{
              background: "#D09947",
              color: "#000000",
              fontWeight: 600,
              fontSize: "16px",
              padding: "18px 40px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(208,153,71,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Get Instant Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
