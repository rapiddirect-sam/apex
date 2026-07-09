"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { EditableText, EditableImage } from "@/components/cms";

type MaterialCategory = "metal" | "plastic";

const DEFAULTS = {
  heading: "CNC Milling",
  headingHighlight: " Materials",
  headingSuffix: " for Custom Parts",
  subheading: "Choose from commonly used metals, alloys, and engineering plastics for custom CNC milled parts. ApexBatch reviews your CAD files, application requirements, tolerance needs, surface finish, and production volume to recommend a suitable material before quoting.",
  metalsTabLabel: "Metals & Alloys",
  plasticsTabLabel: "Engineering Plastics",
  ctaText:
    "Not sure which material fits your application? Upload your CAD files for material and production advice before quoting.",
  ctaButton: "Get Material Advice",
  materials: [
    {
      category: "metal" as MaterialCategory,
      name: "Aluminum",
      types: ["2024", "5052", "6061-T6", "6063", "7075-T6"],
      bestFor: ["Brackets", "Housings", "Heat Sinks"],
      description:
        "Lightweight, machinable, and corrosion-resistant. A common choice for CNC milled parts that require strength, lower weight, and finishing flexibility.",
      properties: [
        "Lightweight",
        "Good machinability",
        "Easy to anodize",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-aluminum-cnc-machining-materials.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Stainless Steel",
      types: ["304", "316", "303", "17-4 PH", "416"],
      bestFor: ["Medical Components", "Precision Assemblies", "Industrial Components"],
      description:
        "Suitable for CNC milled parts that require corrosion resistance, durability, and stable performance in demanding environments.",
      properties: [
        "Corrosion resistance",
        "High strength",
        "Durable performance",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-stainless-steel-cnc-machining.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Steel",
      types: ["Structural steel", "Spring steel", "Tool steel", "Alloy steel", "Carbon steel"],
      bestFor: ["Shafts", "Brackets", "Gears"],
      description:
        "Steel is best for strong, durable, and wear-resistant parts, offering high tensile strength, good toughness, and reliable performance in construction, automotive, and machinery applications.",
      properties: ["High strength", "Wear resistance", "Long-term durability"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-steel-alloy-cnc-machining-materials.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Titanium",
      types: ["TA1", "TA2", "TC4"],
      bestFor: ["Aerospace Components", "Medical Implants", "Lightweight Structures"],
      description:
        "Titanium is used for high-performance CNC milled parts where strength-to-weight ratio, corrosion resistance, and material performance are critical.",
      properties: [
        "High strength-to-weight ratio",
        "Corrosion resistance",
        "Lightweight",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-tool-steel-cnc-machining.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Copper",
      types: ["C11000", "C36000"],
      bestFor: ["Conductive Parts", "Fittings", "Heat-Transfer Components"],
      description:
        "Copper offers excellent conductivity, good corrosion resistance, and easy formability, which make it be the best for electrical and thermal applications.",
      properties: ["Electrical conductivity", "Thermal conductivity", "Good corrosion resistance"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-copper-brass-cnc-machining-materials.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Brass",
      types: ["C28000", "C36000", "C37710", "C37100"],
      bestFor: ["Connectorss", "Fittings", "Valves"],
      description:
        "Brass machines very well, holds tight tolerances, resists corrosion, and provides a clean metallic finish. Ideal for CNC machined fittings, connectors, bushings, valves, and decorative hardware.",
      properties: ["Excellent machinability", "Moderate strength", "Easy to polish"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-copper-brass-cnc-machining-materials.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Bronze",
      types: ["C95400", "C61400", "C63300"],
      bestFor: ["Bushings", "Bearings", "Gears"],
      description:
        "Bronze is best for wear-resistant and corrosion-resistant parts, offering good strength, low friction, and reliable performance in bearings, bushings, gears, and marine applications.",
      properties: ["Wear resistance", "Corrosion resistance", "Low friction"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-copper-brass-cnc-machining-materials.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Magnesium",
      types: ["Magnesium alloy AZ31B", "Magnesium alloy AZ91D"],
      bestFor: ["Drone Frames", "Camera Housings", "Lightweight Brackets"],
      description:
        "Magnesium is a lightweight metal with good machinability, heat dissipation, and a high strength-to-weight ratio, often used for weight-sensitive CNC machined parts.",
      properties: ["Lightweight", "Good machinability", "High strength-to-weight ratio"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-copper-brass-cnc-machining-materials.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "POM / Acetal",
      types: ["POM-C", "POM-H", "Black POM"],
      bestFor: ["Gears", "Bushings", "Sliding Components"],
      description:
        "POM is a stable, low-friction engineering plastic often used for precision CNC milled components that require smooth movement and dimensional stability.",
      properties: [
        "Low friction",
        "Dimensional stability",
        "Wear resistance",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-engineering-plastics-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PA / Nylon",
      types: ["PA6", "PA66", "PA12", "GPPS", "Acrylic"],
      bestFor: ["Guides", "Mechanical Parts", "Wear Components"],
      description:
        "Nylon is a tough engineering plastic suitable for functional CNC milled parts that need wear resistance and impact performance.",
      properties: ["Toughness", "Wear resistance", "Impact resistance"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-general-plastics-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PC",
      types: ["Clear PC", "Black PC", "Flame-Retardant PC"],
      bestFor: ["Protective Covers", "Transparent Parts", "Functional Housings"],
      description:
        "Polycarbonate is used for CNC milled parts that require impact resistance, toughness, or transparent appearance.",
      properties: [
        "Impact resistance",
        "Transparency options",
        "Good toughness",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "ABS",
      types: ["Natural ABS", "Black ABS", "Flame-Retardant ABS"],
      bestFor: ["Housings", "Fixtures", "Functional Plastic Parts"],
      description:
        "ABS is a practical and cost-effective plastic for CNC milled housings, fixtures, and general functional components.",
      properties: [
        "Cost-effective",
        "Easy to machine",
        "Good for housings",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PMMA / Acrylic",
      types: ["Clear PMMA", "Black PMMA", "Colored PMMA"],
      bestFor: ["Optical Windows", "Display Covers", "Light Guides"],
      description:
        "PMMA is a clear, lightweight plastic with excellent optical clarity, good UV resistance, and easy machinability, often used for transparent CNC machined parts and display components.",
      properties: [
        "Clear optical clarity",
        "Good UV resistance",
        "Easy machinability",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PE / Polyethylene",
      types: ["HDPE", "UHMWPE"],
      bestFor: ["Chemical Tank Parts", "Wear Pads", "Plastic Liners"],
      description:
        "PE is a lightweight plastic with good chemical resistance, impact resistance, and low moisture absorption, often used for machined parts in chemical, packaging, and general industrial applications.",
      properties: [
        "Chemical resistance",
        "Low moisture absorption",
        "Impact resistance",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PP / Polypropylene",
      types: ["Natural PP", "Black PP", "Glass-Filled PP"],
      bestFor: ["Chemical Containers", "Lab Equipment Parts", "Living Hinges"],
      description:
        "PP is a lightweight and chemical-resistant plastic with good fatigue resistance and low water absorption, commonly used for CNC machined parts exposed to chemicals or repeated bending.",
      properties: [
        "Chemical resistance",
        "Lightweight",
        "Fatigue resistance",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PTFE",
      types: ["Virgin PTFE", "Glass-Filled PTFE"],
      bestFor: ["Seals & Gaskets", "Bushings", "Chemical-Resistant Parts"],
      description:
        "PTFE is a low-friction engineering plastic with excellent chemical resistance, electrical insulation, and non-stick performance. It is often used for seals, gaskets, bushings, and precision machined components exposed to harsh environments.",
      properties: ["Low friction", "Chemical resistance", "Electrical insulation"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PEEK",
      types: ["Natural PEEK", "Black PEEK", "Glass-Filled PEEK"],
      bestFor: ["Medical Equipment Parts", "High-Temperature Parts", "Precision Components"],
      description:
        "PEEK is a high-performance engineering plastic for demanding applications that require heat resistance, chemical resistance, and strong mechanical properties",
      properties: [
        "Heat resistance",
        "Chemical resistance",
        "High-performance strength",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PEI",
      types: ["Natural PEI", "Black PEI", "Glass-Filled PEI"],
      bestFor: ["Automotive connectors", "Circuit breakers", "Medical device components"],
      description:
        "PEI is a high-performance engineering plastic with excellent heat resistance, dimensional stability, and flame resistance, often used for precision CNC machined parts in aerospace, electrical, and medical applications.",
      properties: [
        "Heat resistance", "Dimensional stability", "Flame resistance"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PI",
      types: ["Natural PI", "Black PI", "Graphite-Filled PI"],
      bestFor: ["High-Temperature Bushings", "Insulating Washers", "Semiconductor Fixtures"],
      description:
        "PI is an ultra-high-performance engineering plastic designed for extreme temperature, wear, and insulation requirements. It is commonly used for precision components in aerospace, semiconductor, and high-temperature applications.",
      properties: ["High heat resistance", "Wear resistance", "Dimensional stability"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
  ],
};

const FIRST_METAL_INDEX = DEFAULTS.materials.findIndex((material) => material.category === "metal");
const FIRST_PLASTIC_INDEX = DEFAULTS.materials.findIndex((material) => material.category === "plastic");

export function CMMMaterials() {
  const [activeCategory, setActiveCategory] = useState<MaterialCategory>("metal");
  const [activeTab, setActiveTab] = useState(FIRST_METAL_INDEX);

  const filteredMaterials = useMemo(
    () =>
      DEFAULTS.materials
        .map((material, index) => ({ ...material, index }))
        .filter((material) => material.category === activeCategory),
    [activeCategory]
  );

  const handleCategoryChange = (category: MaterialCategory) => {
    setActiveCategory(category);
    setActiveTab(category === "metal" ? FIRST_METAL_INDEX : FIRST_PLASTIC_INDEX);
  };

  const activeMaterial = DEFAULTS.materials[activeTab];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "52px 0 120px",
        background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #000000`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left"
          style={{ marginBottom: "48px" }}
        >
          <h2
            className="text-white"
            style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: "18px" }}
          >
            <EditableText path="materials.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="materials.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="materials.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>
          <p
            className="w-[80%]"
            style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", marginTop: "18px" }}
          >
            <EditableText path="materials.subheading" defaultValue={DEFAULTS.subheading} />
          </p>

          <div className="flex flex-wrap gap-3" style={{ marginTop: "24px" }}>
            {(
              [
                { id: "metal" as MaterialCategory, labelPath: "materials.metalsTabLabel", defaultLabel: DEFAULTS.metalsTabLabel },
                { id: "plastic" as MaterialCategory, labelPath: "materials.plasticsTabLabel", defaultLabel: DEFAULTS.plasticsTabLabel },
              ] as const
            ).map(({ id, labelPath, defaultLabel }) => {
              const isActive = activeCategory === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleCategoryChange(id)}
                  className="transition-all duration-300"
                  style={{
                    padding: "12px 28px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    background: isActive ? "#D09947" : "transparent",
                    border: isActive ? "1px solid #D09947" : "1px solid rgba(255,255,255,0.2)",
                    color: isActive ? "#000000" : "#C5C6C9",
                  }}
                >
                  <EditableText path={labelPath} defaultValue={defaultLabel} />
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {filteredMaterials.map((material) => (
                <button
                  key={material.index}
                  type="button"
                  onClick={() => setActiveTab(material.index)}
                  className="whitespace-nowrap text-left transition-all duration-300"
                  style={{
                    padding: "14px 18px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontWeight: activeTab === material.index ? 600 : 500,
                    background: activeTab === material.index ? "rgba(208,153,71,0.15)" : "transparent",
                    border:
                      activeTab === material.index
                        ? "1px solid rgba(208,153,71,0.5)"
                        : "1px solid rgba(255,255,255,0.1)",
                    color: activeTab === material.index ? "#D09947" : "#7A7A7C",
                  }}
                >
                  <EditableText
                    path={`materials.items.${material.index}.name`}
                    defaultValue={material.name}
                  />
                </button>
              ))}
            </div>
          </div>

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
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: 600, color: "#FFFFFF", marginBottom: "14px" }}>
                  <EditableText path={`materials.items.${activeTab}.name`} defaultValue={activeMaterial.name} />
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#C5C6C9", marginBottom: "28px" }}>
                  <EditableText
                    path={`materials.items.${activeTab}.description`}
                    defaultValue={activeMaterial.description}
                    multiline
                  />
                </p>
                <div className="mb-6">
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#D09947", marginBottom: "14px" }}>
                    Best For
                  </h4>
                  <div className="flex flex-wrap items-center gap-y-2" style={{ fontSize: "14px", lineHeight: 1.5 }}>
                    {activeMaterial.bestFor.map((useCase, bestForIndex) => (
                      <span key={`${activeTab}-${bestForIndex}`} className="inline-flex items-center">
                        {bestForIndex > 0 && (
                          <span
                            aria-hidden="true"
                            className="mx-3"
                            style={{ color: "rgba(208,153,71,0.55)", fontWeight: 500 }}
                          >
                            |
                          </span>
                        )}
                        <span style={{ color: "#C5C6C9", fontWeight: 500 }}>
                          <EditableText
                            path={`materials.items.${activeTab}.bestFor.${bestForIndex}`}
                            defaultValue={useCase}
                          />
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#D09947", marginBottom: "14px" }}>
                    Available Grades
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeMaterial.types.map((type) => (
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
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#D09947", marginBottom: "14px" }}>
                    Key Properties
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {activeMaterial.properties.map((property) => (
                      <li key={property} className="flex items-center gap-3" style={{ fontSize: "14px", color: "#C5C6C9" }}>
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
              <div className="relative" style={{ minHeight: "280px", borderRadius: "12px", overflow: "hidden" }}>
                <EditableImage
                  path={`materials.items.${activeTab}.image`}
                  defaultSrc={activeMaterial.image}
                  alt={activeMaterial.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 flex max-w-[920px] flex-col items-center gap-5 text-center"
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
