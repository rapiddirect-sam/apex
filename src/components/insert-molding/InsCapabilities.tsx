"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "",
  headingHighlight: "Insert Molding Capabilities",
  headingSuffix: " for Functional Parts",
  subheading:
    "ApexBatch integrates threaded, mechanical, electrical, and custom functional inserts into thermoplastic and silicone parts to improve fastening, positioning, conductivity, wear resistance, and assembly efficiency.",
  services: [
    {
      title: "Threaded & Mechanical Inserts",
      description:
        "Integrate threaded inserts, studs, bushings, sleeves, and pins to improve fastening strength, positioning accuracy, wear resistance, and reliability in repeated assembly.",
      specs: ["Brass & stainless inserts", "Pull-out & rotation resistance"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-custom-injection-molding-solutions.webp",
      ctaText: "Discuss Your Application",
    },
    {
      title: "Electrical Contacts & Terminals",
      description:
        "Mold terminals, contacts, pins, and conductive features directly into the part for stable positioning, reliable electrical interfaces, and fewer secondary assembly steps.",
      specs: ["Terminals & conductive inserts", "Stable positioning"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
      ctaText: "Discuss Your Application",
    },
    {
      title: "Custom & Functional Inserts",
      description:
        "Integrate magnets, stamped metal parts, and application-specific inserts into molded components to add structural, magnetic, or other functional features with fewer separate assembly steps.",
      specs: ["Magnets & stamped parts", "Custom inserts supported"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-high-volume-injection-molding-production.webp",
      ctaText: "Discuss Your Application",
    },
  ],
};

export function InsCapabilities() {
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
            <EditableText path="capabilities.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="capabilities.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="capabilities.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
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
            <EditableText path="capabilities.subheading" defaultValue={DEFAULTS.subheading} />
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
              <div className="relative aspect-[4/3] overflow-hidden">
                <EditableImage
                  path={`capabilities.items.${index}.image`}
                  defaultSrc={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
                  <EditableText path={`capabilities.items.${index}.title`} defaultValue={service.title} />
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#C5C6C9", marginBottom: "24px", flex: 1 }}>
                  <EditableText path={`capabilities.items.${index}.description`} defaultValue={service.description} multiline />
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
                      <EditableText path={`capabilities.items.${index}.specs.${specIndex}`} defaultValue={spec} />
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
                  <EditableText path={`capabilities.items.${index}.ctaText`} defaultValue={service.ctaText} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
