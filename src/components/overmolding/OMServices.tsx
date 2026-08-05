"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Overmolding Solutions for ",
  headingHighlight: "Functional Multi-Material Parts",
  headingSuffix: "",
  subheading:
    "ApexBatch provides custom overmolding services for parts that require improved grip, sealing, protection, insulation, impact resistance, or multi-material functionality. The molding route is selected according to the substrate, overmold material, part geometry, expected volume, and required performance.",
  services: [
    {
      title: "Soft-Touch Overmolding",
      description:
        "Add compatible elastomers to rigid plastic parts for secure grip, comfortable touch, and durable handling surfaces. We review adhesion, hardness, texture, and wear before tooling.",
      specs: [
        "Applications: Handles, grips, control surfaces",
        "Materials: TPE / TPU / TPV",
        "Focus: Adhesion, hardness, surface wear",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-custom-injection-molding-solutions.webp",
      ctaText: "Discuss Your Application",
    },
    {
      title: "Sealing & Protective Overmolding",
      description:
        "Mold flexible sealing edges and protective zones directly onto rigid plastic parts. We review compression, boundary control, flash, and environmental exposure for reliable protection.",
      specs: [
        "Applications: Seals, housing edges, bumpers",
        "Materials: TPE / TPV / LSR",
        "Focus: Compression, flash, boundary control",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
      ctaText: "Discuss Your Application",
    },
    {
      title: "Vibration & Assembly Overmolding",
      description:
        "Add flexible interfaces between assembled plastic parts to reduce vibration, prevent rattling, and protect contact surfaces. We review compression, retention, movement, and assembly fit.",
      specs: [
        "Applications: Supports, housings, contact interfaces",
        "Materials: TPE / TPU / TPV",
        "Focus: Damping, retention, assembly fit",
      ],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-high-volume-injection-molding-production.webp",
      ctaText: "Discuss Your Application",
    },
  ],
};

export function OMServices() {
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

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px", marginTop: "72px" }}>
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
                  <EditableText path={`services.items.${index}.ctaText`} defaultValue={service.ctaText} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
