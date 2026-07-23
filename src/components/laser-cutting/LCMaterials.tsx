"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Materials for ",
  headingHighlight: "Laser Cut Parts",
  subheading:
    "Select from commonly used sheet metals for custom laser cut parts. Our engineers review grade, thickness, flatness, bend requirements, finish, and production quantity before confirming the material and process route.",
  ctaText:
    "Not sure which material fits your application? Upload your CAD files for material and production advice before quoting.",
  ctaButton: "Get Material Advice",
  materials: [
    {
      name: "Steel",
      grades: [
        { name: "SPCC", primary: true },
        { name: "Q235", primary: true },
        { name: "SGCC / SECC", primary: false },
      ],
      maxPartSize: "Up to 3000 \u00D7 1500 mm; thickness up to 10 mm",
      description:
        "Cost-effective steel sheet for structural panels, machine guards, mounting plates, cabinets, and welded assemblies. Surface condition and corrosion-protection requirements determine whether powder coating, plating, or another finish is appropriate.",
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-steel-alloy-cnc-machining-materials.webp",
    },
    {
      name: "Aluminum",
      grades: [
        { name: "5052-H32", primary: true },
        { name: "5083-H111 / H116", primary: true },
        { name: "6061-T6", primary: false },
      ],
      maxPartSize: "Up to 3000 \u00D7 1500 mm; thickness up to 6 mm",
      description:
        "Lightweight and corrosion resistant. 5052, 5754, 1060, and 1050 are suitable choices when downstream bending is required. 6061 offers higher structural strength but has more limited bendability and should be reviewed for formed parts.",
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-aluminum-cnc-machining-materials.webp",
    },
    {
      name: "Copper",
      grades: [
        { name: "T2", primary: true },
        { name: "C11000", primary: true },
        { name: "C10200", primary: true },
      ],
      maxPartSize: "Up to 3000 \u00D7 1500 mm; thickness up to 3 mm",
      description:
        "Suitable for conductive components, shields, busbars, decorative details, and selected precision profiles. Reflectivity, heat input, thickness, and edge quality are reviewed before quotation.",
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-copper-brass-cnc-machining-materials.webp",
    },
    {
      name: "Stainless Steel",
      grades: [
        { name: "304", primary: true },
        { name: "304L", primary: true },
        { name: "316", primary: false },
        { name: "316L", primary: true },
        { name: "430", primary: true },
      ],
      maxPartSize: "Up to 3000 \u00D7 1500 mm; thickness up to 10 mm",
      description:
        "Provides corrosion resistance, strength, and a clean appearance for equipment panels, covers, brackets, and precision assemblies. Grade, grain direction, finish protection, and bend conditions should be defined on the drawing.",
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-stainless-steel-cnc-machining.webp",
    },
  ],
};

export function LCMaterials() {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "48px" }}
        >
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em" }}>
            <EditableText path="materials.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="materials.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p
            className="mx-auto w-[80%]"
            style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", marginTop: "18px" }}
          >
            <EditableText path="materials.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: "40px" }}>
          {DEFAULTS.materials.map((material, index) => (
            <motion.button
              key={material.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveTab(index)}
              className="transition-all duration-300"
              style={{
                padding: "10px 24px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                border: activeTab === index ? "1px solid #D09947" : "1px solid rgba(208,153,71,0.3)",
                background: activeTab === index ? "rgba(208,153,71,0.15)" : "transparent",
                color: activeTab === index ? "#EEC569" : "#7A7A7C",
              }}
            >
              {material.name}
            </motion.button>
          ))}
        </div>

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
            <div style={{ padding: "40px" }}>
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "24px" }}>
                <EditableText
                  path={`materials.items.${activeTab}.name`}
                  defaultValue={DEFAULTS.materials[activeTab].name}
                />
              </h3>

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
                      {grade.name}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#EEC569", marginBottom: "12px" }}>
                  Maximum Part Size
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#C5C6C9" }}>
                  <EditableText
                    path={`materials.items.${activeTab}.maxPartSize`}
                    defaultValue={DEFAULTS.materials[activeTab].maxPartSize}
                  />
                </p>
              </div>

              <div>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#C5C6C9" }}>
                  <EditableText
                    path={`materials.items.${activeTab}.description`}
                    defaultValue={DEFAULTS.materials[activeTab].description}
                    multiline
                  />
                </p>
              </div>
            </div>

            <div className="relative" style={{ minHeight: "300px", overflow: "hidden" }}>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 flex max-w-[920px] flex-col items-center gap-5 text-center"
          style={{
            padding: "40px 32px",
            background: "#000000",
            borderRadius: "12px",
            border: "1px solid rgba(208,153,71,0.15)",
          }}
        >
          <p style={{ color: "#F3F3F3", fontSize: "16px", lineHeight: 1.6 }}>
            <EditableText path="materials.ctaText" defaultValue={DEFAULTS.ctaText} multiline />
          </p>
          <Link
            href="https://app.apexbatch.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#D09947] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#000000] transition-all hover:bg-[#EEC569]"
            style={{ borderRadius: "4px" }}
          >
            <EditableText path="materials.ctaButton" defaultValue={DEFAULTS.ctaButton} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
