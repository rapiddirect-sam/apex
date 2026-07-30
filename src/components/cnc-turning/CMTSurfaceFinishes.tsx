"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "",
  headingHighlight: "Surface Finishes",
  headingSuffix: " for CNC turned Parts",
  subheading: "Improve appearance, corrosion resistance, wear resistance, and part identification with surface finishing options matched to your material, tolerance requirements, and application. ApexBatch can recommend suitable finishes after reviewing your CAD files and drawings.",
  finishes: [
    {
      name: "As-Machined",
      finish: "Visible Machining Lines",
      roughness: "Fastest",
      compatibleMaterials: "Metals / Plastics",
      description:
        "Retains the natural machined surface with deburring and edge breaking. Suitable for functional CNC turned parts where coating or cosmetic finishing is not required.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/cnc-turning.webp",
    },
    {
      name: "Anodizing",
      finish: "Matte / Satin / Colored",
      roughness: "Low",
      compatibleMaterials: "Aluminum / Titanium",
      description:
        "Improves corrosion resistance and provides color options for aluminum CNC turned parts such as spacers, sleeves, connectors, and housings.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/6-finishing-services-anodizing.webp",
    },
    {
      name: "Hard Anodizing",
      finish: "Hard Matte / Dark Gray / Black",
      roughness: "Medium",
      compatibleMaterials: "Aluminum",
      description:
        "Creates a thicker, harder oxide layer for aluminum turned parts that require improved wear resistance, insulation, or surface durability.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/6-finishing-services-Hard-Coat-Anodizing.webp",
    },
    {
      name: "Sand Blasting / Bead Blasting",
      finish: "Uniform Matte Texture",
      roughness: "Low",
      compatibleMaterials: "Aluminum / Stainless Steel / Steel / Plastics",
      description:
        "Creates a clean, non-glare surface and helps reduce visible tool marks. Often used for appearance consistency or before anodizing.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/6-finishing-services-Bead-Blasting.webp",
    },
    {
      name: "Electropolishing / Passivation",
      finish: "Bright / Clean / Corrosion-Resistant",
      roughness: "Medium",
      compatibleMaterials: "Stainless Steel",
      description:
        "Improves surface cleanliness and corrosion resistance for stainless steel turned parts used in precision devices, fittings, sleeves, and clean equipment components.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/6-finishing-services-laser-passivation.webp",
    },
    {
      name: "Electroplating / Black Oxide",
      finish: "Metallic Coating / Black Finish",
      roughness: "Medium",
      compatibleMaterials: "Steel / Brass / Copper / Stainless Steel",
      description:
        "Adds corrosion protection, wear resistance, conductivity, or a dark functional appearance for shafts, threaded parts, fittings, and mechanical components.",
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/6-finishing-services-nickel-plating.webp",
    },
  ],
};

export function CMTSurfaceFinishes() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "104px 0 112px", background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #000000` }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em" }}>
            <EditableText path="finishes.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="finishes.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="finishes.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>
          <p className="mx-auto w-[80%]" style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", marginTop: "18px" }}>
            <EditableText path="finishes.subheading" defaultValue={DEFAULTS.subheading} />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "32px", marginTop: "72px" }}>
          {DEFAULTS.finishes.map((finish, index) => (
            <motion.div
              key={finish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#1A1A1A",
                borderRadius: "12px",
                border: "2px solid rgba(208,153,71,0.35)",
                boxShadow: "0 14px 36px rgba(0,0,0,0.45)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "3px solid #D09947";
                e.currentTarget.style.boxShadow = "0 0 50px rgba(208,153,71,0.7), 0 14px 36px rgba(0,0,0,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "2px solid rgba(208,153,71,0.35)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.45)";
              }}
            >
              <div style={{ padding: "24px 24px 0 24px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF", marginBottom: "20px" }}>
                  <EditableText path={`finishes.items.${index}.name`} defaultValue={finish.name} />
                </h3>
                <div className="relative" style={{ width: "100%", height: "180px", marginBottom: "24px", borderRadius: "8px", overflow: "hidden" }}>
                  <EditableImage
                    path={`finishes.items.${index}.image`}
                    defaultSrc={finish.image}
                    alt={finish.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-between" style={{ marginBottom: "20px" }}>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "#EEC569", marginBottom: "4px" }}>Finish</p>
                    <p style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF" }}>
                      <EditableText path={`finishes.items.${index}.finish`} defaultValue={finish.finish} />
                    </p>
                  </div>
                  <div className="text-right">
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "#EEC569", marginBottom: "4px" }}>Roughness</p>
                    <p style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF" }}>
                      <EditableText path={`finishes.items.${index}.roughness`} defaultValue={finish.roughness} />
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ padding: "16px 24px 24px 24px" }}>
                <p style={{ fontSize: "14px", color: "#C5C6C9", marginBottom: "8px" }}>
                  Compatible Materials: <EditableText path={`finishes.items.${index}.compatibleMaterials`} defaultValue={finish.compatibleMaterials} />
                </p>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#FFFFFF", textAlign: "left" }}>
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
