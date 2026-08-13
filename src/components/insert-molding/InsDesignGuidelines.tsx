"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EditableText } from "@/components/cms";

const GOLD_HIGHLIGHT = "#EEC569";
const GOLD_ACCENT = "#D09947";

const DEFAULTS = {
  heading: "Insert Molding ",
  headingHighlight: "Design Guidelines",
  headingSuffix: "",
  subheading:
    "ApexBatch reviews insert retention, plastic coverage, mold positioning, flow behavior, dimensional stability, and critical functional requirements during DFM to identify potential manufacturing risks before tooling and production.",
  guidelines: [
    {
      title: "Insert Retention & Anti-Rotation",
      description:
        "Mechanical locking features such as knurls, grooves, holes, and undercuts can help secure the insert within the molded plastic and improve resistance to pull-out or rotation.",
    },
    {
      title: "Plastic Coverage & Structural Space",
      description:
        "Sufficient plastic coverage and structural space should be maintained around the insert. ApexBatch reviews surrounding wall thickness, distance to part edges, and spacing between multiple inserts during DFM.",
    },
    {
      title: "Insert Positioning & Mold Support",
      description:
        "Insert loading direction, locating surfaces, operator access, and mold support are reviewed to help achieve consistent placement. Poka-yoke and locating features can also reduce loading and orientation errors.",
    },
    {
      title: "Gate, Flow & Venting",
      description:
        "Gate location, melt-flow direction, filling balance, and venting are evaluated to limit direct flow impact on the insert and reduce the risk of displacement or incomplete filling.",
    },
    {
      title: "Shrinkage, Tolerance & Deformation",
      description:
        "Material shrinkage, insert position tolerances, residual stress, and local geometry are reviewed to understand their potential effect on insert location, dimensional stability, and part deformation after molding.",
    },
    {
      title: "Critical Surfaces & Functional Requirements",
      description:
        "DFM also considers sealing surfaces, flash-sensitive areas, protected functional surfaces, and required pull-out or torque performance so critical part functions are addressed before tooling.",
    },
  ],
  ctaText:
    "Share your 2D drawing or 3D model. Our engineers can review insert retention, positioning, plastic coverage, and other key DFM considerations before tooling.",
  ctaButton: "Get A DFM Review",
};

export function InsDesignGuidelines() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "96px 0 112px",
        background: "#000000",
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
            <EditableText path="designGuidelines.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>
          <p
            className="w-[80%]"
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
                      verticalAlign: "middle",
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
                      verticalAlign: "middle",
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 flex max-w-[920px] flex-col items-center gap-6 text-center"
        >
          <p style={{ color: "#F3F3F3", fontSize: "16px", lineHeight: 1.6 }}>
            <EditableText path="designGuidelines.ctaText" defaultValue={DEFAULTS.ctaText} multiline />
          </p>
          <Link
            href="/contact"
            rel="nofollow"
            className="inline-flex items-center justify-center bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider"
          >
            <EditableText path="designGuidelines.ctaButton" defaultValue={DEFAULTS.ctaButton} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
