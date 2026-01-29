"use client";

import { motion } from "framer-motion";

const toleranceData = [
  {
    specification: "General Tolerance",
    capability: "Metals ISO 2768-f\nPlastics ISO 2768-m",
    standard: "Standard machining tolerance",
  },
  {
    specification: "Precision Tolerance",
    capability: "±0.001 inches\n(±0.025mm)",
    standard: "Tighter tolerances per drawing specifications",
  },
  {
    specification: "Minimum Wall Thickness",
    capability: "0.5mm",
    standard: "For metals and plastics",
  },
  {
    specification: "Minimum End Mill Size",
    capability: "0.5mm",
    standard: "Smallest cutting tool diameter",
  },
  {
    specification: "Minimum Drill Size",
    capability: "0.2mm",
    standard: "Smallest drill diameter",
  },
  {
    specification: "Maximum Part Size",
    capability: "Milling 6000×2000×600mm\nTurning 800×2000mm",
    standard: "XYZ machining envelope\nDiameter × length",
  },
  {
    specification: "Production Volume",
    capability: "1 - 10,000+ pcs",
    standard: "From prototyping to volume production",
  },
  {
    specification: "Lead Time",
    capability: "1 - 5 business days",
    standard: "Most projects delivered within 5 days",
  },
];

export function CNCTolerance() {
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
            Precision <span style={{ color: "#EEC569" }}>Machining Tolerance</span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              maxWidth: "700px",
            }}
          >
            Our CNC machining services ensure consistent accuracy for all machined parts,
            allowing each component to integrate perfectly. We adhere to strict industry
            standards with capabilities for both standard and precision tolerances.
          </p>
        </motion.div>

        {/* Tolerance Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto flex justify-center"
        >
          <div
            style={{
              borderRadius: "16px",
              border: "2px solid #7F4D0F",
              boxShadow: "inset 0 0 0 1px rgba(208,153,71,0.15), 0 24px 48px rgba(0,0,0,0.6)",
              overflow: "hidden",
              maxWidth: "900px",
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
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "17px",
                  }}
                >
                  Specification
                </th>
                <th
                  style={{
                    background: "rgba(208,153,71,0.15)",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                    padding: "20px 28px",
                    textAlign: "center",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "17px",
                  }}
                >
                  Capability
                </th>
                <th
                  style={{
                    background: "rgba(208,153,71,0.15)",
                    borderBottom: "1px solid rgba(208,153,71,0.3)",
                    padding: "20px 28px",
                    textAlign: "center",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "17px",
                  }}
                >
                  Standard
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {toleranceData.map((row, index) => (
                <tr
                  key={index}
                  style={{
                    background: index % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
                  }}
                >
                  <td
                    style={{
                      borderBottom: index < toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                      padding: "18px 28px",
                      textAlign: "center",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: "16px",
                    }}
                  >
                    {row.specification}
                  </td>
                  <td
                    style={{
                      borderBottom: index < toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                      padding: "18px 28px",
                      textAlign: "center",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: "16px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {row.capability}
                  </td>
                  <td
                    style={{
                      borderBottom: index < toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                      padding: "18px 28px",
                      textAlign: "center",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: "16px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {row.standard}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
