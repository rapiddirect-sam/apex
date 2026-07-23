"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Representative ",
  headingHighlight: "Turned Parts",
  headingSuffix: " We Support",
  subheading: "Representative CNC turned parts for aerospace, medical equipment, automotive, and precision industrial applications—built with material selection, tolerance control, surface finishing, and inspection support.",
  parts: [
    {
      title: "Precision Shafts & Spindles",
      description: "CNC turned shafts with tight diameter control, concentricity requirements, keyways, threads, and surface finish specifications for motion and power transmission applications.",
      tags: ["Material: 4140 / 304 Stainless Steel", "Focus: Concentricity Control", "Process: 2-Axis Turning"],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/cnc-turning.webp",
    },
    {
      title: "Bushings & Sleeves",
      description: "Turned bushings and sleeves with controlled ID/OD tolerances, chamfers, and finish requirements for assembly fit and wear resistance.",
      tags: ["Material: Brass / Bronze / Steel", "Focus: Fit & Finish", "Process: 2-Axis / Live Tool"],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/4-Medical-Device Housing.webp",
    },
    {
      title: "Automotive & New Energy Components",
      description:
        "Custom turned bushings, shafts, threaded fittings, spacers, test fixture pins, and connector parts for automotive systems, EV equipment, and battery-related assemblies.",
      tags: [
        "Material: Aluminum / Steel / Stainless Steel / Brass",
        "Focus: Repeatable Dimensions",
        "Process: CNC Turning / Threading / Grooving",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/4-Automotive Sensor Mount.webp",
    },
    {
      title: "Medical & Precision Device Components",
      description:
        "CNC turned guide pins, sleeves, spacers, fittings, and precision equipment components for diagnostic devices, medical automation systems, and precision instruments.",
      tags: [
        "Material: 316L Stainless Steel / PEEK / PTFE",
        "Focus: Clean Geometry & Stable Fit",
        "Process: Precision CNC Turning / Polishing",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/4-Medical-Device Housing.webp",
    },
    {
      title: "Aerospace & UAV Equipment Components",
      description:
        "Lightweight CNC turned spacers, pins, sleeves, connector parts, and sensor-related components for UAV equipment, aerospace assemblies, and high-end mechanical systems.",
      tags: [
        "Material: 7075 / 6061 Aluminum / Titanium",
        "Focus: Lightweight Precision",
        "Process: CNC Turning / Turn-Milling",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/4-UAV-structural components.webp",
    },
    {
      title: "Semiconductor, Electronics & 3C Equipment Parts",
      description:
        "Small turned inserts, conductive spacers, insulating bushings, test fixture pins, standoffs, and compact connectors for electronics, semiconductor, and 3C automation equipment.",
      tags: [
        "Material: Brass / Copper / Aluminum / PTFE / PEEK",
        "Focus: Compact Precision Features",
        "Process: Small-Part CNC Turning / Drilling / Tapping",
      ],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/4-Automotive Sensor Mount.webp",
    },
  ],
};

export function CMTParts() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "112px 0 120px", background: "#34312F" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "64px" }}
        >
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em" }}>
            <EditableText path="parts.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="parts.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="parts.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>
          <p className="mx-auto w-[80%]" style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", marginTop: "18px" }}>
            <EditableText path="parts.subheading" defaultValue={DEFAULTS.subheading} />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px" }}>
          {DEFAULTS.parts.map((part, index) => (
            <motion.div
              key={part.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #0D0D0D`,
                borderRadius: "18px",
                border: "2px solid rgba(208,153,71,0.35)",
                boxShadow: "0 14px 36px rgba(0,0,0,0.45)",
                overflow: "hidden",
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
              <div className="relative overflow-hidden" style={{ height: "190px" }}>
                <EditableImage
                  path={`parts.items.${index}.image`}
                  defaultSrc={part.image}
                  alt={part.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))" }} />
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF", marginBottom: "10px" }}>
                  <EditableText path={`parts.items.${index}.title`} defaultValue={part.title} />
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#C5C6C9", marginBottom: "16px" }}>
                  <EditableText path={`parts.items.${index}.description`} defaultValue={part.description} multiline />
                </p>
                <div className="flex flex-wrap gap-2">
                  {part.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      style={{
                        border: "1px solid rgba(238,197,105,0.5)",
                        color: "#F5D89A",
                        background: "transparent",
                        fontSize: "13px",
                        padding: "6px 10px",
                        borderRadius: "999px",
                      }}
                    >
                      <EditableText path={`parts.items.${index}.tags.${tagIndex}`} defaultValue={tag} />
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
