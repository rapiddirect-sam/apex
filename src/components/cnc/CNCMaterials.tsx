"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const materials = [
  {
    name: "Aluminum",
    types: ["6061-T6", "7075-T6", "2024", "5052", "6063"],
    description:
      "Lightweight, corrosion-resistant, and excellent machinability. Ideal for aerospace, automotive, and consumer electronics applications.",
    properties: [
      "Excellent strength-to-weight ratio",
      "Good corrosion resistance",
      "Easy to anodize",
      "High thermal conductivity",
    ],
    image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-aluminum-cnc-machining-materials.webp",
  },
  {
    name: "Stainless Steel",
    types: ["304", "316", "303", "17-4 PH", "420"],
    description:
      "Superior corrosion resistance and strength. Perfect for medical devices, food processing, and marine applications.",
    properties: [
      "Excellent corrosion resistance",
      "High strength and hardness",
      "Good temperature resistance",
      "Hygienic and easy to clean",
    ],
    image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-stainless-steel-cnc-machining.webp",
  },
  {
    name: "Steel Alloys",
    types: ["1018", "1045", "4140", "4340", "A36"],
    description:
      "High strength and durability for demanding structural applications. Can be heat treated for enhanced properties.",
    properties: [
      "High tensile strength",
      "Good wear resistance",
      "Heat treatable",
      "Cost-effective",
    ],
    image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-steel-alloy-cnc-machining-materials.webp",
  },
  {
    name: "Tool Steel",
    types: ["D2", "A2", "O1", "S7", "H13"],
    description:
      "Extremely hard and wear-resistant steels designed for cutting tools, dies, and molds. Excellent dimensional stability under heat.",
    properties: [
      "Superior hardness and wear resistance",
      "Excellent dimensional stability",
      "High heat resistance",
      "Long tool life",
    ],
    image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-tool-steel-cnc-machining.webp",
  },
  {
    name: "Copper & Brass",
    types: ["C110", "C360", "C260", "Bronze"],
    description:
      "Excellent electrical and thermal conductivity. Used in electrical components, heat exchangers, and decorative parts.",
    properties: [
      "Superior conductivity",
      "Good corrosion resistance",
      "Natural antimicrobial",
      "Easy to machine",
    ],
    image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-copper-brass-cnc-machining-materials.webp",
  },
  {
    name: "Engineering Plastics",
    types: ["Delrin/POM", "Nylon/PA", "PC", "PBT"],
    description:
      "High-performance thermoplastics with enhanced mechanical properties. Ideal for precision parts requiring strength, stiffness, and dimensional stability.",
    properties: [
      "High strength and stiffness",
      "Good dimensional stability",
      "Chemical resistance",
      "Low friction options",
    ],
    image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-engineering-plastics-cnc-machining.webp",
  },
  {
    name: "General Plastics",
    types: ["ABS", "PP", "HDPE", "GPPS", "Acrylic"],
    description:
      "Cost-effective plastics for prototyping, enclosures, and non-structural components with good machinability.",
    properties: [
      "Lightweight",
      "Cost-effective",
      "Easy to machine",
      "Good electrical insulation",
    ],
    image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-general-plastics-cnc-machining.webp",
  },
  {
    name: "High Performance",
    types: ["PEEK", "PEI/Ultem", "PTFE", "PPS"],
    description:
      "Advanced polymers for extreme environments. Outstanding thermal, chemical, and mechanical performance for demanding applications.",
    properties: [
      "Extreme temperature resistance",
      "Superior chemical resistance",
      "Excellent mechanical properties",
      "Biocompatible options",
    ],
    image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
  },
];

export function CNCMaterials() {
  const [activeTab, setActiveTab] = useState(0);

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
            CNC Machining <span style={{ color: "#EEC569" }}>Material</span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
            }}
          >
            We machine a wide range of metals and plastics to meet your specifications
          </p>
        </motion.div>

        {/* Tabs and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-3">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {materials.map((material, index) => (
                <button
                  key={material.name}
                  onClick={() => setActiveTab(index)}
                  className="whitespace-nowrap text-left transition-all duration-300"
                  style={{
                    padding: "14px 18px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontWeight: activeTab === index ? 600 : 500,
                    background:
                      activeTab === index
                        ? "rgba(208,153,71,0.15)"
                        : "transparent",
                    border:
                      activeTab === index
                        ? "1px solid rgba(208,153,71,0.5)"
                        : "1px solid rgba(255,255,255,0.1)",
                    color: activeTab === index ? "#D09947" : "#7A7A7C",
                  }}
                >
                  {material.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Panel */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-9"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
              borderRadius: "16px",
              padding: "36px",
              border: "1px solid rgba(208,153,71,0.2)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Content */}
              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginBottom: "14px",
                  }}
                >
                  {materials[activeTab].name}
                </h3>

                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "#C5C6C9",
                    marginBottom: "28px",
                  }}
                >
                  {materials[activeTab].description}
                </p>

                {/* Material Types */}
                <div className="mb-6">
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#D09947",
                      marginBottom: "14px",
                    }}
                  >
                    Available Grades
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {materials[activeTab].types.map((type) => (
                      <span
                        key={type}
                        style={{
                          border: "1px solid rgba(238,197,105,0.5)",
                          color: "#F5D89A",
                          background: "transparent",
                          fontSize: "13px",
                          padding: "6px 12px",
                          borderRadius: "999px",
                        }}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Properties */}
                <div>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#D09947",
                      marginBottom: "14px",
                    }}
                  >
                    Key Properties
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {materials[activeTab].properties.map((property) => (
                      <li
                        key={property}
                        className="flex items-center gap-3"
                        style={{ fontSize: "14px", color: "#C5C6C9" }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#D09947",
                            flexShrink: 0,
                          }}
                        />
                        {property}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative" style={{ minHeight: "280px", borderRadius: "12px", overflow: "hidden" }}>
                <Image
                  src={materials[activeTab].image}
                  alt={materials[activeTab].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
