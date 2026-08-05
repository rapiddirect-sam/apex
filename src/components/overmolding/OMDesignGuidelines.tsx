"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const GOLD_HIGHLIGHT = "#EEC569";
const GOLD_ACCENT = "#D09947";

const DEFAULTS = {
  heading: "Design for ",
  headingHighlight: "Reliable Bonding and Stable Molding",
  subheading:
    "Good overmolding design requires secure retention, controlled material thickness, and a clearly defined molding boundary. ApexBatch reviews these areas during DFM before mold construction.",
  mainImage: "/images/overmolding/design-guidelines.png",
  guidelines: [
    {
      number: "1",
      title: "Bonding and Retention",
      description:
        "Select compatible material grades and add through-holes, grooves, undercuts, wraparound edges, or textured interfaces where additional retention is required. Mechanical locking helps protect the joint from peeling, twisting, and repeated handling. Design objective: reduce delamination and overmold separation risk.",
    },
    {
      number: "2",
      title: "Thickness and Transition",
      description:
        "Keep the overmold layer reasonably uniform and transition gradually between thick and thin regions. ApexBatch typically reviews designs within a 1.0-3.0 mm overmold thickness range, depending on the material, flow length, hardness, geometry, and required feel. Design objective: improve filling, cooling, appearance, and edge durability.",
    },
    {
      number: "3",
      title: "Boundary and Substrate Support",
      description:
        "Provide clear shutoff surfaces, adequate venting, and sufficient support for the substrate during the second molding step. These details help control flash, trapped air, boundary mismatch, short shots, and substrate deformation. Design objective: maintain a clean boundary and stable part geometry.",
    },
  ],
};

export function OMDesignGuidelines() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "96px 0 112px",
        background: "#34312F",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-right"
          style={{ marginBottom: "48px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="designGuidelines.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: GOLD_HIGHLIGHT }}>
              <EditableText path="designGuidelines.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p
            className="ml-auto w-[80%]"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              marginTop: "18px",
            }}
          >
            <EditableText path="designGuidelines.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto"
          style={{ maxWidth: "960px", marginBottom: "56px" }}
        >
          <EditableImage
            path="designGuidelines.mainImage"
            defaultSrc={DEFAULTS.mainImage}
            alt="Overmolding design guidelines annotated part"
            width={960}
            height={540}
            className="w-full h-auto"
            style={{ display: "block" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "0" }}>
          {DEFAULTS.guidelines.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                padding: "32px 28px",
                borderRight: index < DEFAULTS.guidelines.length - 1 ? "1px solid rgba(208,153,71,0.2)" : "none",
              }}
            >
              <div className="flex items-center gap-3" style={{ marginBottom: "16px" }}>
                <span
                  className="inline-flex items-center justify-center shrink-0"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: GOLD_ACCENT,
                    color: "#1A1A1A",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  <EditableText path={`designGuidelines.items.${index}.number`} defaultValue={item.number} />
                </span>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: GOLD_ACCENT,
                    lineHeight: 1.3,
                  }}
                >
                  <EditableText path={`designGuidelines.items.${index}.title`} defaultValue={item.title} />
                </h3>
              </div>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#C5C6C9",
                }}
              >
                <EditableText path={`designGuidelines.items.${index}.description`} defaultValue={item.description} multiline />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
