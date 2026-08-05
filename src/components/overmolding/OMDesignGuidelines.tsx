"use client";

import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const GOLD_HIGHLIGHT = "#EEC569";
const GOLD_ACCENT = "#D09947";

const DEFAULTS = {
  heading: "Design for ",
  headingHighlight: "Reliable Bonding and Stable Molding",
  subheading:
    "Good overmolding design requires secure retention, controlled material thickness, and a clearly defined molding boundary. ApexBatch reviews these areas during DFM before mold construction.",
  guidelines: [
    {
      title: "Bonding and Retention",
      description:
        "Confirm material compatibility and add holes, grooves, undercuts, or wraparound edges where chemical adhesion alone may be insufficient. These features help the overmold resist peeling, twisting, and separation during use.",
    },
    {
      title: "Thickness and Transition",
      description:
        "Keep the overmold layer reasonably uniform and transition gradually between thick and thin regions. ApexBatch typically reviews designs within a 1.0-3.0 mm overmold thickness range, depending on the material, flow length, hardness, geometry, and required feel. Design objective: improve filling, cooling, appearance, and edge durability.",
    },
    {
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
          className="w-full overflow-x-auto"
        >
          <table className="w-full" style={{ borderCollapse: "collapse" }}>
            <tbody>
              {DEFAULTS.guidelines.map((item, index) => (
                <tr key={item.title}>
                  <th
                    scope="row"
                    style={{
                      width: "28%",
                      padding: "32px 32px 32px 0",
                      textAlign: "left",
                      verticalAlign: "bottom",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: GOLD_ACCENT,
                      lineHeight: 1.4,
                      borderBottom:
                        index < DEFAULTS.guidelines.length - 1 ? "1px solid rgba(208,153,71,0.25)" : "none",
                    }}
                  >
                    <EditableText path={`designGuidelines.items.${index}.title`} defaultValue={item.title} />
                  </th>
                  <td
                    style={{
                      padding: "32px 0",
                      textAlign: "left",
                      verticalAlign: "bottom",
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "#C5C6C9",
                      borderBottom:
                        index < DEFAULTS.guidelines.length - 1 ? "1px solid rgba(208,153,71,0.25)" : "none",
                    }}
                  >
                    <EditableText
                      path={`designGuidelines.items.${index}.description`}
                      defaultValue={item.description}
                      multiline
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
