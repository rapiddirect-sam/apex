"use client";

import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const TABLE_COLUMNS = [
  { key: "moldingMaterial", label: "Molding Material", align: "right" as const },
  { key: "insertMaterial", label: "Common Insert Material / Type", align: "right" as const },
  { key: "compatibilityFocus", label: "Compatibility Focus", align: "right" as const },
];

const DEFAULTS = {
  heading: "Materials & ",
  headingHighlight: "Insert Compatibility",
  headingSuffix: "",
  subheading:
    "ApexBatch works with engineering thermoplastics, silicone, and common metal inserts for custom insert molding. Material combinations are reviewed based on processing behavior, thermal expansion, shrinkage, and application requirements.",
  ctaText:
    "Material compatibility is evaluated according to the specific resin grade, insert material, part geometry, molding conditions, and final service environment. Other engineering plastics, silicone grades, and custom insert combinations can also be reviewed during DFM.",
  compatibilityData: [
    {
      moldingMaterial: "PA66",
      insertMaterial: "Stainless steel inserts",
      compatibilityFocus: "Thermal expansion and shrinkage stress",
    },
    {
      moldingMaterial: "PBT-GF",
      insertMaterial: "Brass threaded inserts",
      compatibilityFocus: "Molding temperature and resin flow around the insert",
    },
    {
      moldingMaterial: "PC",
      insertMaterial: "Copper-alloy terminals",
      compatibilityFocus: "Uniform surrounding walls and stress control",
    },
    {
      moldingMaterial: "PPS",
      insertMaterial: "Stainless steel / brass inserts",
      compatibilityFocus: "High-temperature molding and thermal expansion",
    },
    {
      moldingMaterial: "ABS",
      insertMaterial: "Brass threaded inserts",
      compatibilityFocus: "Lower-temperature molding with less demanding insert preheating",
    },
    {
      moldingMaterial: "LSR / Solid Silicone",
      insertMaterial: "Compatible metal or functional inserts",
      compatibilityFocus: "Evaluated according to insert and application requirements",
    },
  ],
};

export function InsMaterialCompatibility() {
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
          <h2
            className="text-white"
            style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: "18px" }}
          >
            <EditableText path="compatibility.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="compatibility.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="compatibility.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>

          <p className="ml-auto w-[80%]" style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C" }}>
            <EditableText path="compatibility.subheading" defaultValue={DEFAULTS.subheading} multiline />
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
            <table className="w-full" style={{ borderCollapse: "collapse", minWidth: "720px" }}>
              <thead>
                <tr>
                  {TABLE_COLUMNS.map(({ label, align }) => (
                    <th
                      key={label}
                      style={{
                        background: "rgba(208,153,71,0.15)",
                        borderBottom: "1px solid rgba(208,153,71,0.3)",
                        padding: "20px 28px",
                        textAlign: align,
                        color: "#EEC569",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEFAULTS.compatibilityData.map((row, index) => (
                  <tr
                    key={index}
                    style={{ background: index % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)" }}
                  >
                    {TABLE_COLUMNS.map(({ key, align }) => (
                      <td
                        key={key}
                        style={{
                          borderBottom:
                            index < DEFAULTS.compatibilityData.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                          padding: "18px 28px",
                          textAlign: align,
                          color: "#FFFFFF",
                          fontWeight: 700,
                          fontSize: "15px",
                          whiteSpace: "pre-line",
                        }}
                      >
                        <EditableText
                          path={`compatibility.data.${index}.${key}`}
                          defaultValue={row[key as keyof typeof row]}
                          multiline
                        />
                      </td>
                    ))}
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
          className="mt-8 text-right"
        >
          <p className="ml-auto w-[80%]" style={{ color: "#F3F3F3", fontSize: "16px", lineHeight: 1.6 }}>
            <EditableText path="compatibility.ctaText" defaultValue={DEFAULTS.ctaText} multiline />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
