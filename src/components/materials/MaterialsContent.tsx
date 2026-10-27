"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";

interface MaterialCard {
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

interface MaterialSection {
  id: string;
  title: string;
  introduction: string;
  learnMoreHref?: string;
  cards: MaterialCard[];
  note?: string;
}

const SECTIONS: MaterialSection[] = [
  {
    id: "cnc-metals",
    title: "CNC Metals",
    introduction:
      "Metals commonly selected for CNC machining where strength, corrosion resistance, conductivity, heat performance or weight reduction are required. Final suitability depends on the specified grade, stock form, geometry, tolerance and finishing requirements.",
    learnMoreHref: "/cnc-machining",
    cards: [
      {
        name: "Stainless Steel Series",
        subtitle: "Corrosion-Resistant Alloy Steel (304/316/420/2205/17-4PH)",
        description:
          "We machine stainless steel into precision CNC parts for aerospace, medical, and marine applications. It offers strong corrosion resistance and stable dimensional accuracy, making it suitable for structural and load-bearing components.",
        image: "/images/materials/cnc-metals/Stainless%20Steel%20Series%201.webp",
      },
      {
        name: "Magnesium Alloy",
        subtitle: "Ultra-Lightweight Structural Metal (ZE62/AZ31B/AZ91D)",
        description:
          "Magnesium is ideal for ultra-lightweight CNC components where weight reduction is critical. It delivers high stiffness with minimal mass.",
        image: "/images/materials/cnc-metals/Magnesium%20Alloy%201.webp",
      },
      {
        name: "Aluminum Alloys",
        subtitle: "Lightweight Non-Ferrous Metal (6061/7075/5052/2024)",
        description:
          "Aluminum CNC machining is widely used for lightweight, high-precision parts. Aluminum offers good strength, machinability, and heat dissipation.",
        image: "/images/materials/cnc-metals/Aluminum%20Alloy%201.webp",
      },
      {
        name: "Titanium Alloy",
        subtitle: "High-Performance Lightweight Metal (TA2/TC4)",
        description:
          "Titanium CNC parts provide an exceptional strength-to-weight ratio and long-term durability. Titanium performs reliably under high stress and extreme environments.",
        image: "/images/materials/cnc-metals/Titanium%20Alloy%201.webp",
      },
      {
        name: "Copper, Brass and Beryllium Copper",
        subtitle: "C110 Copper / H62 Brass / Beryllium Copper Grades Subject to Review",
        description:
          "Copper is selected for CNC machining when electrical conductivity and thermal transfer are critical. Ideal for connectors, heat sinks, and power components requiring precision tolerances.",
        image: "/images/materials/cnc-metals/Copper%20Alloys%201.webp",
      },
      {
        name: "Nickel Alloys",
        subtitle: "High-Temp/Corrosion-Resistant Alloys (Inconel/Hastelloy/Incoloy)",
        description:
          "Nickel alloy CNC components are engineered for high-temperature and corrosive environments. Widely used in aerospace, energy, and chemical processing systems.",
        image: "/images/materials/cnc-metals/Nickel%20Alloys%201.webp",
      },
      {
        name: "Steel",
        subtitle: "Iron-Carbon Alloy (Q235/45#/4140/D2/H13)",
        description:
          "Steel CNC machining is ideal for structural parts, tooling, and automotive components. It provides high strength and durability for demanding mechanical applications.",
        image: "/images/materials/cnc-metals/Steel%201.webp",
      },
      {
        name: "Zinc Alloys",
        subtitle: "Project-Reviewed Zinc-Alloy Grades",
        description:
          "Zinc-alloy parts are typically evaluated for die casting. CNC machining or post-machining can be reviewed where geometry, quantity and tolerance requirements are suitable.",
        image: "/images/materials/cnc-metals/Zinc%20Alloys%201.webp",
      },
      {
        name: "Tungsten Alloys",
        subtitle: "High-Density Alloys Subject to Supply and Machining Review",
        description:
          "Tungsten-alloy parts can be reviewed for applications requiring high density, balance mass or radiation-shielding performance, subject to grade, geometry and production feasibility.",
        image: "/images/materials/cnc-metals/Tungsten%20Alloys%201.webp",
      },
    ],
  },
  {
    id: "cnc-plastics",
    title: "CNC Plastics",
    introduction:
      "Plastics commonly machined for prototypes, low-volume production, precision components and applications requiring specific mechanical, thermal, electrical or chemical properties.",
    cards: [
      {
        name: "ABS Series Plastics",
        subtitle: "General Engineering Plastic (ABS/ABS+PC/Flame Retardant ABS)",
        description:
          "ABS CNC machining is ideal for cost-effective plastic housings and structural components. It offers stable dimensions and easy machinability, widely used in consumer electronics, automotive interiors, and industrial enclosures.",
        image: "/images/materials/cnc-plastics/ABS%20Series%20Plastics%201.webp",
      },
      {
        name: "PA (Nylon) Series",
        subtitle: "Engineering Plastic (PA6/PA66/Reinforced PA Grades)",
        description:
          "Nylon CNC parts provide high strength and wear resistance for mechanical applications. Reinforced grades improve rigidity and heat performance, making them suitable for gears, bearings, and load-bearing industrial components.",
        image: "/images/materials/cnc-plastics/PA%20%28Nylon%29%20Series%201.webp",
      },
      {
        name: "PBT (Polybutylene Terephthalate)",
        subtitle: "Crystalline Engineering Plastic (Black/Natural PBT)",
        description:
          "PBT CNC machining is commonly used for electrical and automotive components requiring heat resistance and dimensional stability. It balances performance and cost for precision industrial parts.",
        image: "/images/materials/cnc-plastics/PBT%20%28Polybutylene%20Terephthalate%29%201.webp",
      },
      {
        name: "PC (Polycarbonate) Series",
        subtitle: "Transparent/Non-Transparent Engineering Plastic (PC/PC+GF30)",
        description:
          "Polycarbonate CNC parts combine high impact strength with optical transparency. Suitable for protective covers, optical components, and structural parts requiring flame-retardant or food-grade materials.",
        image: "/images/materials/cnc-plastics/PC%20%28Polycarbonate%29%20Series%201.webp",
      },
      {
        name: "PEEK (Polyether Ether Ketone) Series",
        subtitle: "Top-Grade Special Engineering Plastic (PEEK+CF/PEEK+GF)",
        description:
          "PEEK CNC machining is designed for extreme temperature and chemical environments. It is widely used in aerospace, medical, semiconductor, and oil & gas applications requiring long-term mechanical stability.",
        image: "/images/materials/cnc-plastics/PEEK%20%28Polyether%20Ether%20Ketone%29%20Series%201.webp",
      },
      {
        name: "PEI (Polyetherimide)",
        subtitle: "High-Performance Heat-Resistant Amorphous Plastic (ULTEM 1000)",
        description:
          "PEI CNC parts perform reliably in high-temperature environments. Common in aerospace interiors, medical devices, and sterilization-compatible equipment where strength and dimensional stability are critical.",
        image: "/images/materials/cnc-plastics/PEI%20%28Polyetherimide%29%201.webp",
      },
      {
        name: "PET",
        subtitle: "Crystalline/Amorphous Thermoplastic (PET/PET+GF30/PET-G)",
        description:
          "PET CNC machining offers strong mechanical performance and good dimensional stability. It is used in packaging systems, electronics, automotive parts, and display structures.",
        image: "/images/materials/cnc-plastics/PET%201.webp",
      },
      {
        name: "PE (Polyethylene) Series",
        subtitle: "General Polyolefin Plastic (HDPE/LDPE/UHMWPE)",
        description:
          "Polyethylene CNC parts provide excellent chemical resistance and low friction. Suitable for wear components, guides, containers, and low-load structural applications.",
        image: "/images/materials/cnc-plastics/PE%20%28Polyethylene%29%20Series%201.avif",
      },
      {
        name: "PMMA (Acrylic)",
        subtitle: "Transparent/Colored Amorphous Plastic",
        description:
          "PMMA CNC machining delivers high optical clarity for transparent components. Widely used in signage, lighting covers, instrument panels, and display applications.",
        image: "/images/materials/cnc-plastics/PMMA%20%28Acrylic%29%201.webp",
      },
      {
        name: "POM (Polyoxymethylene)",
        subtitle: "Acetal Engineering Plastic (POM-H/POM-C; Delrin® Where Specified)",
        description:
          "POM CNC parts are ideal for precision mechanical components requiring low friction and wear resistance. Common applications include gears, bearings, bushings, and cams.",
        image: "/images/materials/cnc-plastics/POM%20%28Polyoxymethylene%29%201.webp",
      },
      {
        name: "PPS (Polyphenylene Sulfide)",
        subtitle: "High-Performance Heat-Resistant Plastic (PPS/PPS+GF30)",
        description:
          "PPS CNC machining supports high-temperature and chemically aggressive environments. It is widely used in automotive engine components, electronics equipment, and chemical processing systems.",
        image: "/images/materials/cnc-plastics/PPS%20%28Polyphenylene%20Sulfide%29%201.webp",
      },
      {
        name: "PP (Polypropylene)",
        subtitle: "General Polyolefin Plastic (PP/PP+GF30)",
        description:
          "Polypropylene CNC parts provide lightweight and cost-effective chemical resistance. Suitable for packaging systems, containers, and low-load structural components.",
        image: "/images/materials/cnc-plastics/PP%20%28Polypropylene%29%201.webp",
      },
      {
        name: "PVC (Polyvinyl Chloride)",
        subtitle: "General Non-Standard/Rigid Thermoplastic (UPVC/PVC)",
        description:
          "PVC CNC machining offers economical corrosion-resistant solutions for industrial and construction applications. Common uses include chemical equipment, structural profiles, and electrical enclosures.",
        image: "/images/materials/cnc-plastics/PVC%20%28Polyvinyl%20Chloride%29%201.webp",
      },
      {
        name: "Fluoropolymers",
        subtitle: "High-Performance Fluoropolymers (PTFE/PVDF/PCTFE)",
        description:
          "Fluoropolymer CNC parts such as PTFE and PCTFE provide extreme chemical resistance and low friction performance.",
        image: "/images/materials/cnc-plastics/Fluoropolymers%201.webp",
      },
      {
        name: "Thermoset Laminates",
        subtitle: "Fiber-Reinforced Thermoset Composites (Phenolic/FR-4/G10)",
        description:
          "Thermoset laminate CNC machining is ideal for electrical insulation and structural stability. Common in PCB substrates, fixtures, and industrial insulation components.",
        image: "/images/materials/cnc-plastics/Thermoset%20Laminates%201.webp",
      },
      {
        name: "PAI (Polyamide-Imide)",
        subtitle: "High-Performance Polymer Subject to Project Review",
        description:
          "PAI can be reviewed for applications requiring high strength, wear resistance and thermal performance beyond standard nylon grades.",
        image: "/images/materials/cnc-plastics/PAI%20%28Polyamide-Imide%29%201.webp",
      },
      {
        name: "PPSU (Polyphenylsulfone)",
        subtitle: "High-Temperature Polymer Subject to Project Review",
        description:
          "PPSU can be reviewed where heat resistance, toughness and chemical resistance are required for the intended application.",
        image: "/images/materials/cnc-plastics/PPSU%20%28Polyphenylsulfone%29%201.webp",
      },
      {
        name: "PPA (Polyphthalamide)",
        subtitle: "High-Performance Polyamide Subject to Project Review",
        description:
          "PPA can be reviewed for components requiring enhanced thermal, chemical and dimensional performance compared with standard polyolefin grades.",
        image: "/images/materials/cnc-plastics/PPA%20%28Polyphthalamide%29%201.webp",
      },
    ],
    note:
      "Selected additive-manufacturing materials, including PA12-based grades, can be reviewed separately for prototype and low-volume applications.",
  },
  {
    id: "injection-molding-plastics",
    title: "Injection Molding Plastics",
    introduction:
      "Thermoplastic materials commonly evaluated for repeat production. Grade selection depends on mechanical loading, cosmetic requirements, wall thickness, tooling strategy, regulatory requirements and expected production volume.",
    learnMoreHref: "/injection-molding",
    cards: [
      {
        name: "ABS Series Plastics",
        subtitle: "General Engineering Plastic (ABS/ABS+PC/Flame Retardant ABS)",
        description:
          "ABS injection molding is ideal for high-volume production of durable plastic housings and structural parts.",
        image: "/images/materials/cnc-plastics/ABS%20Series%20Plastics%201.webp",
      },
      {
        name: "PA (Nylon) Series",
        subtitle: "High-Performance Engineering Plastic (PA6/PA66/PA+GF)",
        description:
          "Nylon injection molding delivers strong, wear-resistant parts for mechanical applications. Common in automotive components, gears, and load-bearing structures requiring long-term durability.",
        image: "/images/materials/cnc-plastics/PA%20%28Nylon%29%20Series%201.webp",
      },
      {
        name: "PBT (Polybutylene Terephthalate)",
        subtitle: "Crystalline Engineering Plastic (Black/Natural PBT)",
        description:
          "PBT injection molding supports high-volume production of heat-resistant and electrically insulating components. Frequently used in automotive systems, electronic parts, and industrial equipment.",
        image: "/images/materials/cnc-plastics/PBT%20%28Polybutylene%20Terephthalate%29%201.webp",
      },
      {
        name: "PC (Polycarbonate) Series",
        subtitle: "Transparent/Non-Transparent Engineering Plastic (PC/PC+GF30)",
        description:
          "Polycarbonate injection molding produces impact-resistant parts with excellent transparency. Suitable for safety equipment, optical components and products where an appropriate grade and compliance requirement have been specified.",
        image: "/images/materials/cnc-plastics/PC%20%28Polycarbonate%29%20Series%201.webp",
      },
      {
        name: "PEEK (Polyether Ether Ketone) Series",
        subtitle: "Top-Grade Special Engineering Plastic (PEEK+CF/PEEK+GF)",
        description:
          "PEEK injection molding is designed for high-temperature and chemically aggressive environments.",
        image: "/images/materials/cnc-plastics/PEEK%20%28Polyether%20Ether%20Ketone%29%20Series%201.webp",
      },
      {
        name: "PP (Polypropylene)",
        subtitle: "General/Semi-Aromatic Polyolefin Plastic (PP/PP+GF30/PPA)",
        description:
          "Polypropylene injection molding offers cost-efficient production with good chemical resistance. Common in packaging, containers, automotive interiors, and consumer goods.",
        image: "/images/materials/cnc-plastics/PP%20%28Polypropylene%29%201.webp",
      },
      {
        name: "PPS (Polyphenylene Sulfide)",
        subtitle: "High-Performance Heat-Resistant Special Plastic (PPS/PPS+GF30)",
        description:
          "PPS injection molding supports high-temperature and chemically demanding applications. Frequently used in automotive engine components, electronics equipment, and industrial processing systems.",
        image: "/images/materials/cnc-plastics/PPS%20%28Polyphenylene%20Sulfide%29%201.webp",
      },
    ],
  },
  {
    id: "sheet-metals",
    title: "Sheet Metals",
    introduction:
      "Sheet and coil materials commonly selected for fabricated enclosures, brackets, panels and structural components. Available grades depend on required thickness, temper, formability, joining method and finishing route.",
    learnMoreHref: "/sheet-metal-fabrication",
    cards: [
      {
        name: "Stainless Steel Sheet",
        subtitle: "Corrosion-Resistant Alloy Steel (304/316/420)",
        description:
          "Stainless steel sheet metal is widely used for corrosion-resistant structural and enclosure parts. Common applications include kitchen equipment, medical devices, architectural panels, and marine components where durability is critical.",
        image: "/images/materials/cnc-metals/Stainless%20Steel%20Series%201.webp",
      },
      {
        name: "Aluminum Alloy Sheet",
        subtitle: "Lightweight Non-Ferrous Metal (6061/5052/2024)",
        description:
          "Aluminum sheet metal supports lightweight structural designs with strong formability. It is commonly used in aerospace panels, automotive body parts, electronics housings, and architectural structures.",
        image: "/images/materials/cnc-metals/Aluminum%20Alloy%201.webp",
      },
      {
        name: "Steel Sheet",
        subtitle: "Iron-Carbon Alloy Sheet (Q235/SPCC and Other Specified Sheet Grades)",
        description:
          "Steel sheet metal offers cost-effective strength for structural and industrial applications. Typical uses include automotive parts, frames, machinery components, and general fabrication projects.",
        image: "/images/materials/cnc-metals/Steel%201.webp",
      },
      {
        name: "Copper and Brass Sheet",
        subtitle: "Conductive/Heat-Conductive Sheet (C110 Copper/H62 Brass)",
        description:
          "Copper sheet metal is selected for applications requiring high electrical and thermal conductivity. It is widely used in electrical enclosures, heat dissipation systems, and industrial components.",
        image: "/images/materials/cnc-metals/Copper%20Alloys%201.webp",
      },
      {
        name: "Titanium Alloy Sheet",
        subtitle: "High-Performance Lightweight Metal (TA2/TC4)",
        description:
          "Titanium sheet metal combines high strength with low weight and corrosion resistance. It is commonly used in aerospace structures, medical devices, marine systems, and high-performance industrial components.",
        image: "/images/materials/cnc-metals/Titanium%20Alloy%201.webp",
      },
    ],
  },
];

export function MaterialsContent() {
  const [activeSection, setActiveSection] = useState("cnc-metals");

  useEffect(() => {
    const handleScroll = () => {
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        padding: "80px 0 120px",
        background: "#000000",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
          {/* Left Sidebar - Jump Menu */}
          <div className="hidden lg:block">
            <div className="sticky" style={{ top: "100px" }}>
              <nav className="flex flex-col gap-2">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-left transition-all duration-200"
                    style={{
                      padding: "10px 16px",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: activeSection === section.id ? 700 : 500,
                      color: activeSection === section.id ? "#EEC569" : "#7A7A7C",
                      background:
                        activeSection === section.id
                          ? "rgba(208,153,71,0.1)"
                          : "transparent",
                      borderLeft:
                        activeSection === section.id
                          ? "3px solid #D09947"
                          : "3px solid transparent",
                    }}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-20">
            {SECTIONS.map((section, sectionIndex) => (
              <div key={section.id} id={section.id}>
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between gap-4"
                  style={{
                    marginBottom: "16px",
                    borderBottom: "2px solid rgba(208,153,71,0.3)",
                    paddingBottom: "16px",
                  }}
                >
                  <h2
                    className="min-w-0"
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#EEC569",
                    }}
                  >
                    <EditableText
                      path={`sections.${sectionIndex}.title`}
                      defaultValue={section.title}
                    />
                  </h2>
                  {section.learnMoreHref ? (
                    <Link
                      href={section.learnMoreHref}
                      className="body-text-link inline-flex shrink-0 whitespace-nowrap items-center gap-1 text-[15px] font-bold"
                      style={{ color: "#FFFFFF" }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : null}
                </motion.div>

                <p className="mb-8 max-w-[880px] text-[15px] leading-[1.7] text-[#C5C6C9] sm:text-base">
                  <EditableText
                    path={`materialsLibrary.sections.${sectionIndex}.introduction`}
                    defaultValue={section.introduction}
                    multiline
                  />
                </p>

                {/* Cards Grid - 3 columns */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  style={{ gap: "24px" }}
                >
                  {section.cards.map((card, cardIndex) => (
                    <motion.div
                      key={card.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: cardIndex * 0.06 }}
                      className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "#1A1A1A",
                        borderRadius: "12px",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.border =
                          "2px solid #D09947";
                        e.currentTarget.style.boxShadow =
                          "0 0 30px rgba(208,153,71,0.4), 0 14px 36px rgba(0,0,0,0.45)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.border =
                          "1px solid rgba(255,255,255,0.08)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {/* Image */}
                      <div
                        className="relative"
                        style={{
                          width: "100%",
                          height: "180px",
                          overflow: "hidden",
                        }}
                      >
                        <EditableImage
                          path={
                            section.id === "cnc-metals"
                              ? `materialsCncMetals.cards.${cardIndex}.image`
                              : section.id === "cnc-plastics"
                                ? `materialsCncPlastics.cards.${cardIndex}.image`
                                : section.id === "injection-molding-plastics"
                                  ? `materialsInjectionMoldingPlastics.cards.${cardIndex}.image`
                                  : section.id === "sheet-metals"
                                    ? `materialsSheetMetals.cards.${cardIndex}.image`
                                    : `sections.${sectionIndex}.cards.${cardIndex}.image`
                          }
                          defaultSrc={card.image}
                          alt={card.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div style={{ padding: "20px" }}>
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "#EEC569",
                            marginBottom: "6px",
                          }}
                        >
                          <EditableText
                            path={`sections.${sectionIndex}.cards.${cardIndex}.name`}
                            defaultValue={card.name}
                          />
                        </h3>
                        <p
                          style={{
                            fontSize: "13px",
                            color: "#7A7A7C",
                            marginBottom: "16px",
                          }}
                        >
                          <EditableText
                            path={`sections.${sectionIndex}.cards.${cardIndex}.subtitle`}
                            defaultValue={card.subtitle}
                          />
                        </p>
                        <div
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            borderRadius: "8px",
                            padding: "14px",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "14px",
                              lineHeight: 1.6,
                              color: "#C5C6C9",
                            }}
                          >
                            <EditableText
                              path={`sections.${sectionIndex}.cards.${cardIndex}.description`}
                              defaultValue={card.description}
                              multiline
                            />
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {section.note ? (
                  <p className="mt-6 rounded-lg border border-[#D09947]/25 bg-[#1A1A1A] px-5 py-4 text-[14px] leading-[1.65] text-[#D9D9D9]">
                    <EditableText
                      path={`materialsLibrary.sections.${sectionIndex}.note`}
                      defaultValue={section.note}
                      multiline
                    />
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
