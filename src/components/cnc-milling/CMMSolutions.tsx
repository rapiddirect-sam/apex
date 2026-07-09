"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "CNC Milling ",
  headingHighlight: "Production Solutions",
  subheading: "From prototype validation to repeat batch delivery, ApexBatch supports custom CNC milling projects with DFM review, tolerance control, material coordination, surface finishing, inspection, and flexible production planning.",
  solutions: [
    {
      title: "Low-Mix Batch Production",
      description:
        "For projects with fewer part numbers and higher quantities, ApexBatch focuses on stable machining setups, controlled tolerances, batch consistency, and reliable repeat delivery.",
      specs: ["Stable Setups", "Batch Consistency", "Repeat Delivery"],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/4-UAV-structural components.webp",
    },
    {
      title: "High-Mix Low-Volume Production",
      description:
        "For projects with many part numbers and smaller quantities, we coordinate CNC milling, materials, surface finishes, inspection requirements, and delivery schedules under one flexible production plan.",
      specs: ["Many Part Numbers", "Flexible Scheduling", "One-Stop Support"],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/4-Medical-Device Housing.webp",
    },
  ],
};

export function CMMSolutions() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "52px 0 112px",
        background: `radial-gradient(60% 50% at 50% 0%, rgba(249,235,188,0.08), rgba(0,0,0,0) 65%), #000000`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="solutions.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="solutions.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
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
            <EditableText path="solutions.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "24px", marginTop: "72px" }}
        >
          {DEFAULTS.solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col"
              style={{ background: "#1A1A1A", overflow: "hidden" }}
            >
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
                  <EditableText path={`solutions.items.${index}.title`} defaultValue={solution.title} />
                </h3>
                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#C5C6C9", marginBottom: "24px" }}>
                  <EditableText path={`solutions.items.${index}.description`} defaultValue={solution.description} multiline />
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {solution.specs.map((spec, specIndex) => (
                    <li
                      key={spec}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        color: "#C5C6C9",
                        fontSize: "16px",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#D09947",
                          flexShrink: 0,
                        }}
                      />
                      <EditableText path={`solutions.items.${index}.specs.${specIndex}`} defaultValue={spec} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden mt-auto" style={{ height: "260px" }}>
                <EditableImage
                  path={`solutions.items.${index}.image`}
                  defaultSrc={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
