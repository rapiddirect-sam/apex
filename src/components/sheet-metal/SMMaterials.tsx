"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Sheet Metal ",
  headingHighlight: "Materials",
  materials: [
    {
      name: "Aluminum",
      grades: [
        { name: "AL5052 H32 / AL5052 O-state", primary: true },
        { name: "AL5754", primary: false },
        { name: "AL6061", primary: false },
        { name: "AL1060 / AL1050", primary: false },
      ],
      characteristics: [
        "AL5052: Best bending performance, no cracking",
        "AL5754: Suitable for bending applications",
        "AL6061: Not suitable for bending, good for machining",
        "AL1060/1050: Excellent bending performance, pure aluminum",
      ],
    },
    {
      name: "Stainless Steel",
      grades: [
        { name: "SUS304, SUS316", primary: true },
        { name: "SUS430", primary: false },
      ],
      characteristics: [
        "SUS304/316: High corrosion resistance, strength, good appearance",
        "SUS430: Magnetic, moderate corrosion resistance, lower cost",
      ],
    },
    {
      name: "Steel",
      grades: [
        { name: "SPCC (Cold Rolled)", primary: true },
        { name: "SGCC (Galvanized)", primary: false },
        { name: "Q235 (Hot Rolled)", primary: false },
      ],
      characteristics: [
        "SPCC: Smooth surface, good for painting and plating",
        "SGCC: Zinc-coated for enhanced corrosion resistance",
        "Q235: High strength, low cost, surface has oxide layer",
      ],
    },
  ],
};

export function SMMaterials() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #000000`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center" style={{ marginBottom: "48px" }}>
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em" }}>
            <EditableText path="materials.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}><EditableText path="materials.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: "40px" }}>
          {DEFAULTS.materials.map((material, index) => (
            <motion.button key={material.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} onClick={() => setActiveTab(index)} className="transition-all duration-300" style={{ padding: "10px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, border: activeTab === index ? "1px solid #D09947" : "1px solid rgba(208,153,71,0.3)", background: activeTab === index ? "rgba(208,153,71,0.15)" : "transparent", color: activeTab === index ? "#EEC569" : "#7A7A7C" }}>
              {material.name}
            </motion.button>
          ))}
        </div>

        <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{ background: "#1A1A1A", borderRadius: "16px", padding: "40px", border: "1px solid rgba(208,153,71,0.15)" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side: Material name + Grades */}
            <div>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF", marginBottom: "24px" }}>
                <EditableText path={`materials.items.${activeTab}.name`} defaultValue={DEFAULTS.materials[activeTab].name} />
              </h3>
              <div>
                {DEFAULTS.materials[activeTab].grades.map((grade, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: grade.primary ? "18px" : "16px",
                      fontWeight: grade.primary ? 700 : 400,
                      color: grade.primary ? "#FFFFFF" : "#C5C6C9",
                      marginBottom: "6px",
                    }}
                  >
                    {grade.name}
                  </p>
                ))}
              </div>
            </div>

            {/* Right side: Key Characteristics */}
            <div>
              <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
                Key Characteristics:
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {DEFAULTS.materials[activeTab].characteristics.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "#C5C6C9",
                      paddingLeft: "16px",
                      position: "relative",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#7A7A7C" }}>&bull;</span>
                    <EditableText
                      path={`materials.items.${activeTab}.characteristics.${i}`}
                      defaultValue={item}
                    />
                  </li>
                ))}
              </ul>
            </div>
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
