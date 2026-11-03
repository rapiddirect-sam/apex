"use client";

import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";
import { StaticImage } from "@/components/ui/StaticImage";

const DEFAULTS = {
  heading: "Project Examples by Molding ",
  headingHighlight: "Route",
  description: "These examples show how the production route changes with the part requirement.",
  parts: [
    {
      title: "Textured Plastic Panels and Housings",
      description:
        "Plastic molding can support equipment panels, housings, covers, and exterior components that need defined texture, visible-surface control, mounting features, or repeatable assembly interfaces.",
      reviewFocus: "Material selection, cosmetic surfaces, texture, parting-line location, clips, bosses, and assembly fit.",
      image: "/injection-molding/textured-plastic-injection-molded-panels-housings.avif",
    },
    {
      title: "Soft-Touch Handles and Protective Interfaces",
      description:
        "Overmolding can add grip, cushioning, sealing, or a softer user-contact surface to a rigid substrate.",
      reviewFocus: "Substrate material, overmold material, interface geometry, hardness, bonding, wear, and intended use.",
      image: "/injection-molding/soft-touch-overmolded-handles-protective-interfaces.avif",
    },
    {
      title: "Functional Connector and Insert Housings",
      description:
        "Insert molding can integrate terminals, threaded inserts, bushings, pins, magnets, or stamped components directly into a plastic part.",
      reviewFocus: "Insert positioning, plastic coverage, retention, critical dimensions, insulation, and downstream assembly.",
      image: "/injection-molding/insert-molded-functional-connector-housings.avif",
    },
  ],
};

export function IMParts() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: "#000000",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left lg:text-center"
          style={{ marginBottom: "64px" }}
        >
          <h2
            className="service-section-title text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="parts.headingPrefix" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent"><EditableText path="parts.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
          <p className="service-section-copy mt-6 max-w-[720px] lg:mx-auto">
            <EditableText path="parts.description" defaultValue={DEFAULTS.description} multiline />
          </p>
        </motion.div>

        {/* Parts Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "28px" }}
        >
          {DEFAULTS.parts.map((part, index) => (
            <motion.div
              key={part.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#D09947]/15 transition-all duration-300 hover:-translate-y-1"
              style={{
                borderRadius: "12px",
                background: "#1A1A1A",
                border: "1px solid rgba(208,153,71,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid rgba(208,153,71,0.4)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid rgba(208,153,71,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="service-card-media">
                <StaticImage
                  path={`parts.items.${index}.image`}
                  defaultSrc={part.image}
                  alt={part.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <h3
                    className="section-card-title mb-2"
                >
                  <EditableText path={`parts.items.${index}.title`} defaultValue={part.title} />
                </h3>

                <p
                    className="section-card-copy mb-4"
                >
                  <EditableText path={`parts.items.${index}.description`} defaultValue={part.description} multiline />
                </p>

                <p className="section-support-copy">
                  <span className="font-semibold uppercase tracking-[0.1em] text-[#EEC569]">Review focus: </span>
                  <EditableText path={`parts.items.${index}.reviewFocus`} defaultValue={part.reviewFocus} multiline />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
