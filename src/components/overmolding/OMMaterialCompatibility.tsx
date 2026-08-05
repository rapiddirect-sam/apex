"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EditableText } from "@/components/cms";

const TABLE_COLUMNS = [
  { key: "substrate", label: "Rigid Plastic", align: "left" as const },
  { key: "overmold", label: "Overmold Material", align: "left" as const },
  { key: "hardness", label: "Typical Hardness", align: "left" as const },
  { key: "bonding", label: "Retention Method", align: "left" as const },
];

const DEFAULTS = {
  heading: "",
  headingHighlight: "Material Compatibility",
  headingSuffix: " for Reliable Overmolding",
  subheading:
    "Reliable bonding depends on the exact resin grades, molding conditions, part geometry, and operating environment—not simply the material family. ApexBatch evaluates chemical adhesion and mechanical retention before recommending materials for plastic overmolding.",
  ctaText:
    "Silicone overmolding and LSR projects are reviewed separately because tooling, curing behavior, substrate preparation, and process control differ from thermoplastic TPE or TPU overmolding.",
  ctaButton: "Review My Material Pair",
  compatibilityData: [
    {
      substrate: "PC+ABS",
      overmold: "TPE",
      hardness: "Shore A 65",
      bonding: "Chemical bonding",
    },
    {
      substrate: "Glass-Filled PA66",
      overmold: "TPE-A",
      hardness: "Shore A 75",
      bonding: "Mechanical retention",
    },
    {
      substrate: "ABS",
      overmold: "TPU",
      hardness: "Shore A 85",
      bonding: "Chemical + mechanical",
    },
    {
      substrate: "POM",
      overmold: "TPV",
      hardness: "Shore A 60",
      bonding: "Mechanical retention",
    },
  ],
};

export function OMMaterialCompatibility() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "52px 0 120px",
        background: "#000000",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
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
            <EditableText path="compatibility.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="compatibility.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="compatibility.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>

          <p className="w-[80%]" style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C" }}>
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
          className="mx-auto mt-8 flex max-w-[920px] flex-col items-center gap-5 text-center"
        >
          <p style={{ color: "#F3F3F3", fontSize: "16px", lineHeight: 1.6 }}>
            <EditableText path="compatibility.ctaText" defaultValue={DEFAULTS.ctaText} multiline />
          </p>
          <Link
            href="https://app.apexbatch.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#D09947] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#000000] transition-all hover:bg-[#EEC569]"
            style={{ borderRadius: "4px" }}
          >
            <EditableText path="compatibility.ctaButton" defaultValue={DEFAULTS.ctaButton} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
