"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Sheet Metal Tolerance ",
  headingHighlight: "Guidelines",
  subheading:
    "Critical design parameters and tolerances for optimal sheet metal fabrication results. Follow these guidelines to ensure manufacturability and quality.",
  toleranceData: [
    {
      element: "Material Thickness",
      recommended: "0.5 - 6.0 mm",
      limit: "0.3 - 10.0 mm",
      notes: "Depends on material type and forming requirements",
    },
    {
      element: "Bend Radius",
      recommended: "\u2265 1\u00D7 Material Thickness",
      limit: "0.5\u00D7 thickness (risk of cracking)",
      notes: "Minimum radius varies by material and grain direction",
    },
    {
      element: "Hole Diameter",
      recommended: "\u2265 1\u00D7 Material Thickness",
      limit: "0.5\u00D7 thickness (laser cut)",
      notes: "Distance from edge should be \u2265 2\u00D7 thickness",
    },
    {
      element: "Bend-to-Edge Distance",
      recommended: "\u2265 4\u00D7 Material Thickness",
      limit: "2\u00D7 thickness",
      notes: "Prevents edge deformation during bending",
    },
    {
      element: "Dimensional Tolerance",
      recommended: "\u00B10.1 mm (general)",
      limit: "\u00B10.05 mm (precision)",
      notes: "Tighter tolerances achievable with secondary operations",
    },
  ],
};

export function SMTolerance() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #000000`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "48px" }}>
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: "18px" }}>
            <EditableText path="tolerance.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}><EditableText path="tolerance.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", maxWidth: "700px" }}>
            <EditableText path="tolerance.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-x-auto">
          <div style={{ borderRadius: "16px", border: "2px solid #7F4D0F", boxShadow: "inset 0 0 0 1px rgba(208,153,71,0.15), 0 24px 48px rgba(0,0,0,0.6)", overflow: "hidden", width: "100%" }}>
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["Design Element", "Recommended Value", "Limit Value", "Notes"].map((header) => (
                    <th key={header} style={{ background: "rgba(208,153,71,0.15)", borderBottom: "1px solid rgba(208,153,71,0.3)", padding: "20px 28px", textAlign: "center", color: "#EEC569", fontWeight: 700, fontSize: "20px" }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEFAULTS.toleranceData.map((row, index) => (
                  <tr key={index} style={{ background: index % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)" }}>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", textAlign: "center", color: "#FFFFFF", fontWeight: 700, fontSize: "16px" }}>
                      <EditableText path={`tolerance.data.${index}.element`} defaultValue={row.element} />
                    </td>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", textAlign: "center", color: "#FFFFFF", fontWeight: 700, fontSize: "16px" }}>
                      <EditableText path={`tolerance.data.${index}.recommended`} defaultValue={row.recommended} />
                    </td>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", textAlign: "center", color: "#FFFFFF", fontWeight: 700, fontSize: "16px" }}>
                      <EditableText path={`tolerance.data.${index}.limit`} defaultValue={row.limit} />
                    </td>
                    <td style={{ borderBottom: index < DEFAULTS.toleranceData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "18px 28px", textAlign: "center", color: "#FFFFFF", fontWeight: 700, fontSize: "16px" }}>
                      <EditableText path={`tolerance.data.${index}.notes`} defaultValue={row.notes} multiline />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center" style={{ marginTop: "48px" }}>
          <Link href="https://app.apexbatch.com/" rel="nofollow" className="inline-flex items-center gap-2 bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider group">
            Get Instant Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
