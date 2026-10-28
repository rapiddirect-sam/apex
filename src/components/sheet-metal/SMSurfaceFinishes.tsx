"use client";

import { motion } from "@/components/ui/StaticMotion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Surface Finishing and Secondary ",
  headingHighlight: "Operations",
  subheading:
    "Finishing protects parts, supports appearance requirements, and prepares components for their final environment. It should be considered before production when a part includes tight fits, threads, contact areas, visible faces, or post-finish assembly.",
  scopeNote:
    "Finish specifications—including thickness, adhesion, surface condition, corrosion performance and appearance—are confirmed against the agreed material, process route, specification and inspection requirements.",
  finishes: [
    {
      name: "Powder Coating",
      materials: "Steel, aluminum and suitable sheet-metal parts",
      options: "RAL and Pantone color systems, with selectable gloss and texture.",
      performance: "Typically 60–100 μm coating thickness, Class 0 adhesion and salt-spray performance above 500 h where specified.",
      requirements: "Color, gloss, texture, masking and coating clearance.",
      image: "/images/surface-finishing/protective-coatings/surface-finishing-powder-coating.webp",
    },
    {
      name: "Anodizing",
      materials: "Aluminum",
      options: "Clear, black and selected anodized colors. RAL matching is generally better suited to powder coating.",
      performance: "Typically 5–25 μm film thickness; hard-anodized systems can exceed HV 300. Salt-spray performance is specification-dependent.",
      requirements: "Alloy, color, fit-critical features, masking and sample approval.",
      image: "/images/surface-finishing/aluminum-protection/surface-finishing-type-ii-anodizing.webp",
    },
    {
      name: "Brushing & Polishing",
      materials: "Stainless steel and aluminum",
      options: "Straight grain, non-directional brushing or mirror polish.",
      performance: "Typical surface roughness ranges from Ra 0.4–1.6 μm, depending on the requested texture and starting surface.",
      requirements: "Grain direction, visible surfaces, approved sample and packaging.",
      image: "/images/surface-finishing/base-preparation/surface-finishing-brushing.webp",
    },
    {
      name: "Electropolishing",
      materials: "Suitable stainless steel",
      options: "Bright or matte appearance, depending on the starting surface and process route.",
      performance: "Reduces microscopic surface peaks; the final corrosion result depends on material grade and starting surface condition.",
      requirements: "Material, starting surface condition and acceptance requirement.",
      image: "/images/surface-finishing/base-preparation/surface-finishing-electropolishing.webp",
    },
    {
      name: "E-Coating",
      materials: "Suitable steel and metal assemblies",
      options: "Black and gray are common options.",
      performance: "Typically 15–25 μm coating thickness and salt-spray performance above 240 h where specified.",
      requirements: "Pretreatment, coating system, test method and coating coverage requirements.",
      image: "/images/surface-finishing/plating-treatments/surface-finishing-electrophoresis.webp",
    },
    {
      name: "Plating",
      materials: "Suitable steel, copper alloys and project-specific metals",
      options: "White zinc, blue zinc, black zinc, color zinc and nickel finishes.",
      performance: "Typical salt-spray references exceed 72 h for white zinc and 96 h for blue zinc, where specified.",
      requirements: "Base material, coating type, thickness, corrosion target and post-treatment requirements.",
      image: "/images/surface-finishing/plating-treatments/electroplating-surface-finishing-service.webp",
    },
    {
      name: "Passivation",
      materials: "Suitable stainless steel",
      options: "Natural metal appearance.",
      performance: "Improves the density and corrosion performance of the stainless-steel passive layer.",
      requirements: "Stainless grade, surface condition, cleaning route, acceptance standard and documentation.",
      image: "/images/surface-finishing/aluminum-protection/surface-finishing-stainless-steel-passivation.webp",
    },
    {
      name: "Laser Marking",
      materials: "Suitable metals",
      options: "Natural contrast or black marking, depending on the base material and process.",
      performance: "Permanent marking with a typical depth range of 0.01–0.5 mm where applicable.",
      requirements: "Mark location, artwork, contrast, depth and appearance.",
      image: "/images/surface-finishing/decoration-marking/surface-finishing-engraving-marking.webp",
    },
  ],
};

export function SMSurfaceFinishes() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "104px 0 112px", background: "#34312F" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="service-section-title text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: "18px" }}>
            <EditableText path="finishes.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent"><EditableText path="finishes.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
          <p className="service-section-copy mb-[72px] max-w-[700px]">
            <EditableText path="finishes.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "32px" }}>
          {DEFAULTS.finishes.map((finish, index) => (
            <motion.div
              key={finish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: "#1A1A1A", borderRadius: "12px", border: "2px solid rgba(208,153,71,0.35)", boxShadow: "0 14px 36px rgba(0,0,0,0.45)" }}
              onMouseEnter={(e) => { e.currentTarget.style.border = "3px solid #D09947"; e.currentTarget.style.boxShadow = "0 0 50px rgba(208,153,71,0.7), 0 14px 36px rgba(0,0,0,0.45)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.border = "2px solid rgba(208,153,71,0.35)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.45)"; }}
            >
              <div style={{ padding: "24px 24px 0 24px" }}>
                {/* Finish Name */}
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF", marginBottom: "8px" }}>
                  <EditableText path={`finishes.items.${index}.name`} defaultValue={finish.name} />
                </h3>
                {/* Image */}
                <div className="relative" style={{ width: "100%", height: "180px", marginBottom: "24px", borderRadius: "8px", overflow: "hidden" }}>
                  <Image src={finish.image} alt={finish.name} fill className="object-cover" sizes="(min-width: 1024px) 350px, (min-width: 768px) 45vw, 100vw" />
                </div>

                <div className="border-t border-white/10 pt-4" style={{ marginBottom: "20px" }}>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "#EEC569", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Colors / finish options
                  </p>
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#C5C6C9" }}>
                    <EditableText path={`finishes.items.${index}.options`} defaultValue={finish.options} multiline />
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4" style={{ marginBottom: "20px" }}>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "#EEC569", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Typical performance reference
                  </p>
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#C5C6C9" }}>
                    <EditableText path={`finishes.items.${index}.performance`} defaultValue={finish.performance} multiline />
                  </p>
                </div>
              </div>

              <div style={{ padding: "0 24px 24px 24px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#EEC569", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Requirements to confirm
                </p>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#C5C6C9" }}>
                  <EditableText path={`finishes.items.${index}.requirements`} defaultValue={finish.requirements} multiline />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="section-note mt-8">
          <p><EditableText path="finishes.scopeNote" defaultValue={DEFAULTS.scopeNote} multiline /></p>
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/surface-finish" className="body-text-link body-text-link--dark inline-flex items-center gap-2 text-sm">
            Explore Surface Finishing Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
