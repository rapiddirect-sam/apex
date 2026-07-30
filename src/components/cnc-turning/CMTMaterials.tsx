"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { EditableText, EditableImage } from "@/components/cms";

type MaterialCategory = "metal" | "plastic";

const DEFAULTS = {
  heading: "CNC Turning",
  headingHighlight: " Materials",
  headingSuffix: " for Custom Parts",
  subheading: "Choose from commonly used metals, alloys, and engineering plastics for custom CNC turned parts. ApexBatch reviews your CAD files, application requirements, tolerance needs, surface finish, and production volume to recommend a suitable material before quoting.",
  metalsTabLabel: "Metals & Alloys",
  plasticsTabLabel: "Engineering Plastics",
  ctaText:
    "Not sure which material fits your application? Upload your CAD files for material and production advice before quoting.",
  ctaButton: "Get Material Advice",
  bestForLabel: "Best For",
  availableGradesLabel: "Available Grades",
  keyPropertiesLabel: "Key Properties",
  materials: [
    {
      category: "metal" as MaterialCategory,
      name: "Aluminum",
      types: ["2024", "5052", "6061-T6", "6063", "7075-T6"],
      bestFor: ["Spacers", "Sleeves", "Connectors"],
      description:
        "Lightweight, machinable, and corrosion-resistant. A common choice for CNC turned spacers, sleeves, connectors, housings, and lightweight mechanical parts.",
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
      bestFor: ["Shafts", "Fittings", "Sleeves"],
      description:
        "Corrosion-resistant and durable for turned parts used in precision equipment, fluid systems, medical devices, and industrial assemblies.",
      properties: [
        "Corrosion resistant",
        "Strong and durable",
        "Suitable for clean surfaces",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-stainless-steel-cnc-machining.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Steel",
      types: ["Structural steel", "Spring steel", "Tool steel", "Alloy steel", "Carbon steel"],
      bestFor: ["Shafts", "Rollers", "Fasteners"],
      description:
        "Strong and wear-resistant for CNC turned parts that require load capacity, durability, and stable mechanical performance.",
      properties: ["High strength", "Good wear resistance", "Cost-effective for mechanical parts"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-steel-alloy-cnc-machining-materials.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Titanium",
      types: ["TA1", "TA2", "TC4"],
      bestFor: ["Pins", "Sleeves", "Lightweight Parts"],
      description:
        "High strength-to-weight ratio and corrosion resistance for lightweight precision turned parts in aerospace equipment, medical devices, and high-end assemblies.",
      properties: [
        "Lightweight and strong",
        "Corrosion resistant",
        "Suitable for demanding applications",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-tool-steel-cnc-machining.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Copper",
      types: ["C11000", "C36000"],
      bestFor: ["Contacts", "Conductive Spacers", "Connectors"],
      description:
        "High electrical and thermal conductivity for CNC turned components used in electrical, conductive, and heat-transfer applications.",
      properties: ["High conductivity", "Good thermal transfer", "Soft and formable"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-copper-brass-cnc-machining-materials.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Brass",
      types: ["C28000", "C36000", "C37710", "C37100"],
      bestFor: ["Inserts", "Fittings", "Valve Parts"],
      description:
        "Excellent machinability and stable surface finish for threaded inserts, fittings, connectors, valve components, and decorative turned parts.",
      properties: ["Excellent machinability", "Good appearance", "Suitable for threaded parts"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-copper-brass-cnc-machining-materials.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Bronze",
      types: ["C95400", "C61400", "C63300"],
      bestFor: ["Bushings", "Sleeves", "Bearings"],
      description:
        "Wear-resistant and low-friction for turned bushings, sleeves, bearings, rollers, and sliding components.",
      properties: ["Wear resistant", "Low friction", "Good for sliding contact"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-copper-brass-cnc-machining-materials.webp",
    },
    {
      category: "metal" as MaterialCategory,
      name: "Magnesium",
      types: ["Magnesium alloy AZ31B", "Magnesium alloy AZ91D"],
      bestFor: ["Lightweight Parts", "Housings", "Equipment Components"],
      description:
        "Ultra-lightweight alloy for specialty turned parts where weight reduction is important. Machining feasibility is reviewed based on geometry and safety requirements.",
      properties: ["Extremely lightweight", "Good strength-to-weight ratio", "Reviewed case by case"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-copper-brass-cnc-machining-materials.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "POM",
      types: ["POM-C", "POM-H", "Black POM"],
      bestFor: ["Bushings", "Rollers", "Spacers"],
      description:
        "Dimensionally stable and wear-resistant plastic for CNC turned bushings, rollers, spacers, gears, and sliding components.",
      properties: [
        "Low friction",
        "Good dimensional stability",
        "Wear resistant",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-engineering-plastics-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PEEK",
      types: ["Natural PEEK", "Black PEEK", "Glass-Filled PEEK"],
      bestFor: ["Medical Equipment", "Aerospace Equipment", "High-Temp Parts"],
      description:
        "High-performance engineering plastic for precision turned parts that require strength, heat resistance, and chemical resistance.",
      properties: [
        "High temperature resistance",
        "High strength",
        "Excellent chemical resistance",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PTFE",
      types: ["Virgin PTFE", "Glass-Filled PTFE"],
      bestFor: ["Seals", "Insulators", "Low-Friction Sleeves"],
      description:
        "Low-friction and chemically resistant material for seals, sleeves, insulating parts, and components requiring smooth movement.",
      properties: ["Very low friction", "Chemical resistant", "Good electrical insulation"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PC",
      types: ["Clear PC", "Black PC", "Flame-Retardant PC"],
      bestFor: ["Protective Parts", "Covers", "Transparent Components"],
      description:
        "Tough and impact-resistant plastic for transparent or protective turned parts used in precision devices, covers, and equipment components.",
      properties: [
        "High impact strength",
        "Good toughness",
        "Transparent options available",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PMMA",
      types: ["Clear PMMA", "Black PMMA", "Colored PMMA"],
      bestFor: ["Light Guides", "Display Parts", "Cosmetic Components"],
      description:
        "Clear and lightweight plastic for optical, display, lighting, and cosmetic turned components that require visual clarity.",
      properties: [
        "High transparency",
        "Lightweight",
        "Good surface appearance",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-high-performance-materials-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "PA",
      types: ["PA6", "PA66", "PA12"],
      bestFor: ["Rollers", "Bushings", "Structural Parts"],
      description:
        "Tough and wear-resistant material for CNC turned structural parts, rollers, bushings, and mechanical components.",
      properties: ["Tough and durable", "Wear resistant", "Good for mechanical parts"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-general-plastics-cnc-machining.webp",
    },
    {
      category: "plastic" as MaterialCategory,
      name: "ABS",
      types: ["Black", "White", "Natural"],
      bestFor: ["Prototypes", "Covers", "Housings"],
      description:
        "Easy-to-machine plastic for prototype turned parts, housings, covers, and non-load-bearing custom components.",
      properties: ["Easy to machine", "Cost-effective", "Suitable for prototypes"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/5-general-plastics-cnc-machining.webp",
    },
  ],
};

const FIRST_METAL_INDEX = DEFAULTS.materials.findIndex((material) => material.category === "metal");
const FIRST_PLASTIC_INDEX = DEFAULTS.materials.findIndex((material) => material.category === "plastic");

export function CMTMaterials() {
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
        background: "#34312F",
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
                    background: isActive ? "#D09947" : "#000000",
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
                    background: activeTab === material.index ? "rgba(208,153,71,0.15)" : "#000000",
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
              background: "#000000",
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
                    <EditableText path="materials.bestForLabel" defaultValue={DEFAULTS.bestForLabel} />
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
                    <EditableText path="materials.availableGradesLabel" defaultValue={DEFAULTS.availableGradesLabel} />
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeMaterial.types.map((type, typeIndex) => (
                      <span
                        key={`${activeTab}-type-${typeIndex}`}
                        style={{
                          border: "1px solid rgba(238,197,105,0.5)",
                          color: "#F5D89A",
                          background: "transparent",
                          fontSize: "13px",
                          padding: "6px 12px",
                          borderRadius: "999px",
                        }}
                      >
                        <EditableText
                          path={`materials.items.${activeTab}.types.${typeIndex}`}
                          defaultValue={type}
                        />
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#D09947", marginBottom: "14px" }}>
                    <EditableText path="materials.keyPropertiesLabel" defaultValue={DEFAULTS.keyPropertiesLabel} />
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {activeMaterial.properties.map((property, propertyIndex) => (
                      <li key={`${activeTab}-property-${propertyIndex}`} className="flex items-center gap-3" style={{ fontSize: "14px", color: "#C5C6C9" }}>
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#D09947",
                            flexShrink: 0,
                          }}
                        />
                        <EditableText
                          path={`materials.items.${activeTab}.properties.${propertyIndex}`}
                          defaultValue={property}
                        />
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
