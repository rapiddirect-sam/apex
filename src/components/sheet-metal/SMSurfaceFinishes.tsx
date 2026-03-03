"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Sheet Metal ",
  headingHighlight: "Surface Finishes",
  subheading:
    "Professional surface finishing options to meet aesthetic and functional requirements for your sheet metal parts.",
  finishes: [
    {
      name: "Powder Coating",
      compatibleMaterials: "steel, aluminum",
      spiGrade: "RAL colors available",
      roughness: "Smooth to textured",
      description:
        "Durable, even coating with excellent corrosion resistance. Available in a wide range of colors and textures.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIA(High-Gloss).webp",
    },
    {
      name: "Anodizing",
      compatibleMaterials: "aluminum alloys",
      spiGrade: "Type II, Type III",
      roughness: "5 - 25 \u03BCm coating",
      description:
        "Electrochemical process that creates a durable oxide layer, improving corrosion and wear resistance.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIB(Semi-Gloss).webp",
    },
    {
      name: "Zinc Plating",
      compatibleMaterials: "carbon steel, stainless steel",
      spiGrade: "Clear, Yellow, Black",
      roughness: "5 - 15 \u03BCm coating",
      description:
        "Sacrificial coating that provides excellent corrosion protection for steel components.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPIC(Fine Matte).webp",
    },
    {
      name: "Brushing / Polishing",
      compatibleMaterials: "stainless steel, aluminum, copper",
      spiGrade: "#4 Satin, Mirror",
      roughness: "Ra 0.2 - 1.6 \u03BCm",
      description:
        "Mechanical finishing for decorative or functional surfaces. Options range from satin brush to mirror polish.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/6-SPID(Coarse-Matte-Sandblast).webp",
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
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: "18px" }}>
            <EditableText path="finishes.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}><EditableText path="finishes.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", maxWidth: "700px", marginBottom: "72px" }}>
            <EditableText path="finishes.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "32px" }}>
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
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF", marginBottom: "8px" }}>
                  <EditableText path={`finishes.items.${index}.name`} defaultValue={finish.name} />
                </h3>
                <p style={{ fontSize: "14px", color: "#7A7A7C", marginBottom: "20px" }}>
                  Compatible Materials : <EditableText path={`finishes.items.${index}.compatibleMaterials`} defaultValue={finish.compatibleMaterials} />
                </p>
                <div className="relative" style={{ width: "100%", height: "180px", marginBottom: "24px", borderRadius: "8px", overflow: "hidden" }}>
                  <EditableImage path={`finishes.items.${index}.image`} defaultSrc={finish.image} alt={finish.name} fill className="object-cover" />
                </div>
                <div className="flex justify-between" style={{ marginBottom: "20px" }}>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "#EEC569", marginBottom: "4px" }}>Finish Type</p>
                    <p style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF" }}>
                      <EditableText path={`finishes.items.${index}.spiGrade`} defaultValue={finish.spiGrade} />
                    </p>
                  </div>
                  <div className="text-right">
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "#EEC569", marginBottom: "4px" }}>Thickness / Roughness</p>
                    <p style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF" }}>
                      <EditableText path={`finishes.items.${index}.roughness`} defaultValue={finish.roughness} />
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ padding: "16px 24px 24px 24px" }}>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#C5C6C9" }}>
                  <EditableText path={`finishes.items.${index}.description`} defaultValue={finish.description} multiline />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
