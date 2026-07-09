"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Our ",
  headingHighlight: "CNC Milling",
  headingSuffix: " Capabilities",
  subheading: "Choose the right CNC milling service based on part geometry, tolerance requirements, setup complexity, and production volume. ApexBatch supports custom CNC milling parts from simple plates and brackets to multi-sided and complex components.",
  services: [
    {
      title: "3-Axis CNC Milling",
      description:
        "Cost-effective milling for flat surfaces, pockets, slots, holes, and simple prismatic parts. Ideal for brackets, plates, housings, fixtures, and general precision components.",
      specs: ["Simple Geometries", "Repeatable Quality", "Cost-Effective Milling"],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/3-cnc-milling-machining-service.webp",
      ctaText: "Start Your Project",
    },
    {
      title: "4-Axis CNC Milling",
      description:
        "Multi-sided milling with fewer setups, better positional accuracy, and improved production efficiency. Suitable for parts with angled features, radial holes, or features on multiple faces.",
      specs: ["Fewer Setups", "Better Alignment", "Multi-Side Features"],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/cnc-turning.webp",
      ctaText: "Start Your Project",
    },
    {
      title: "5-Axis CNC Milling",
      description:
        "Advanced milling for complex geometries, tight positional requirements, and high-value precision parts. Suitable for aerospace brackets, medical device components, automation parts, and lightweight structures.",
      specs: ["Complex Contours", "Tight Positioning", "Fewer Setups"],
      image: "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-production-workshop-2.webp",
      ctaText: "Start Your Project",
    },
  ],
};

export function CMMServices() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "104px 0 56px",
        background: "#34312F",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-right"
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="services.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="services.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="services.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
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
            <EditableText path="services.subheading" defaultValue={DEFAULTS.subheading} />
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "24px", marginTop: "72px" }}
        >
          {DEFAULTS.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full flex flex-col"
              style={{ background: "#1A1A1A", overflow: "hidden" }}
            >
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <EditableImage
                  path={`services.items.${index}.image`}
                  defaultSrc={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
                  <EditableText path={`services.items.${index}.title`} defaultValue={service.title} />
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#C5C6C9", marginBottom: "24px", flex: 1 }}>
                  <EditableText path={`services.items.${index}.description`} defaultValue={service.description} multiline />
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {service.specs.map((spec, specIndex) => (
                    <li key={spec} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#C5C6C9", fontSize: "16px", marginBottom: "8px" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D09947", flexShrink: 0 }} />
                      <EditableText path={`services.items.${index}.specs.${specIndex}`} defaultValue={spec} />
                    </li>
                  ))}
                </ul>
                <a
                  href="https://app.apexbatch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 border transition-colors duration-200 hover:bg-[#E8C97A] hover:text-[#1A1A1A]"
                  style={{
                    padding: "12px 22px",
                    background: "transparent",
                    borderColor: "#E8C97A",
                    color: "#E8C97A",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <EditableText
                    path={`services.items.${index}.ctaText`}
                    defaultValue={service.ctaText}
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
