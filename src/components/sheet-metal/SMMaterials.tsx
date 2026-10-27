"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Materials for Custom Sheet Metal ",
  headingHighlight: "Parts",
  description:
    "Material choice affects weight, corrosion resistance, bendability, weldability, appearance, available finishes, lead time, and cost. The same geometry can require a different bend radius, tooling approach, or finish route when the material changes.",
  scopeNote:
    "A material that works well for a flat bracket may need a different production route when tight bends, welding, cosmetic requirements, or coating are involved.",
  materials: [
    {
      name: "Aluminum",
      grades: [
        "5052-H32", "5052-O", "5754", "6061", "1060", "1050",
      ],
      applications: "Lightweight enclosures, brackets, panels, covers",
      considerations: "Confirm temper, grain direction, bend radius, surface finish",
      image: "/images/materials/cnc-metals/Aluminum%20Alloy%201.webp",
    },
    {
      name: "Stainless Steel",
      grades: [
        "304", "316", "430",
      ],
      applications: "Corrosion-resistant panels, housings, visible parts",
      considerations: "Confirm grade, bend geometry, weld appearance, finish requirement",
      image: "/images/materials/cnc-metals/Stainless%20Steel%20Series%201.webp",
    },
    {
      name: "Steel",
      grades: [
        "SPCC", "SGCC", "SECC", "Q235",
      ],
      applications: "Cabinets, guards, brackets, structural panels",
      considerations: "Confirm material condition, flatness, corrosion protection, coating route",
      image: "/images/materials/cnc-metals/Steel%201.webp",
    },
    {
      name: "Copper & Brass",
      grades: [
        "C11000", "C2600", "Project-specific grades",
      ],
      applications: "Conductive parts, electrical components, decorative features",
      considerations: "Confirm scratch protection, bend geometry, joining method, final surface condition",
      image: "/images/materials/cnc-metals/Copper%20Alloys%201.webp",
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-left lg:text-center" style={{ marginBottom: "48px" }}>
          <h2 className="service-section-title text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em" }}>
            <EditableText path="materials.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent"><EditableText path="materials.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
          <p className="service-section-copy mt-6 max-w-4xl lg:mx-auto">
            <EditableText path="materials.description" defaultValue={DEFAULTS.description} multiline />
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-start gap-4 lg:justify-center" style={{ marginBottom: "40px" }}>
          {DEFAULTS.materials.map((material, index) => (
            <motion.button key={material.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} onClick={() => setActiveTab(index)} className="transition-all duration-300" style={{ padding: "10px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, border: activeTab === index ? "1px solid #D09947" : "1px solid rgba(208,153,71,0.3)", background: activeTab === index ? "rgba(208,153,71,0.15)" : "transparent", color: activeTab === index ? "#EEC569" : "#7A7A7C" }}>
              {material.name}
            </motion.button>
          ))}
        </div>

        {/* Content Panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "#1A1A1A",
            borderRadius: "16px",
            border: "1px solid rgba(208,153,71,0.15)",
            overflow: "hidden",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column - Content */}
            <div style={{ padding: "40px" }}>
              <div style={{ marginBottom: "24px" }}>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}
                >
                  <EditableText path={`materials.items.${activeTab}.name`} defaultValue={DEFAULTS.materials[activeTab].name} />
                </h3>
              </div>

              {/* Common Grades */}
              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#EEC569", marginBottom: "12px" }}>
                  Common Grades
                </p>
                <div className="flex flex-wrap gap-2">
                  {DEFAULTS.materials[activeTab].grades.map((grade, i) => (
                    <span
                      key={i}
                      style={{
                        display: "inline-block",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "6px",
                        padding: "6px 14px",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      <EditableText path={`materials.items.${activeTab}.grades.${i}`} defaultValue={grade} />
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#EEC569", marginBottom: "8px" }}>
                  Typical Applications
                </p>
                <p className="text-[15px] leading-relaxed text-[#C5C6C9]">
                  <EditableText path={`materials.items.${activeTab}.applications`} defaultValue={DEFAULTS.materials[activeTab].applications} multiline />
                </p>
              </div>

              <div>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#EEC569", marginBottom: "8px" }}>
                  Manufacturing Considerations
                </p>
                <p className="text-[15px] leading-relaxed text-[#C5C6C9]">
                  <EditableText path={`materials.items.${activeTab}.considerations`} defaultValue={DEFAULTS.materials[activeTab].considerations} multiline />
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div
              className="relative"
              style={{
                minHeight: "300px",
                borderRadius: "0 16px 16px 0",
                overflow: "hidden",
              }}
            >
              <EditableImage
                path={`materials.items.${activeTab}.image`}
                defaultSrc={DEFAULTS.materials[activeTab].image}
                alt={DEFAULTS.materials[activeTab].name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div className="section-note mx-auto mt-8 max-w-[1050px]">
          <p><EditableText path="materials.scopeNote" defaultValue={DEFAULTS.scopeNote} multiline /></p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 flex justify-start lg:justify-center">
          <Link href="/materials" className="body-text-link body-text-link--dark inline-flex items-center gap-2 text-sm">
            View Sheet Metal Materials
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
