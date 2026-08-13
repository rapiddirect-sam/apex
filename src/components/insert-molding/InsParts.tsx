"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "",
  headingHighlight: "Insert-Molded Parts",
  headingSuffix: " Across Key Industries",
  subheading:
    "From automation and aerospace to medical and automotive applications, ApexBatch supports insert-molded housings, connectors, terminal bodies, and other engineered components built around real assembly and functional requirements.",
  parts: [
    {
      title: "Automation Control Housings",
      description:
        "Molded-in threaded inserts, bushings, and locating features provide durable mounting and repeatable assembly for control housings, robotic equipment, and other industrial automation components.",
      tags: ["Threaded Inserts", "Precise Positioning", "Repeat Assembly"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-custom-injection-molding-solutions.webp",
    },
    {
      title: "UAV & Avionics Housings",
      description:
        "Lightweight plastic housings with integrated threaded or structural inserts provide secure mounting and reliable assembly for UAV electronics, avionics modules, and related aerospace equipment.",
      tags: ["Lightweight Design", "Secure Mounting", "Structural Inserts"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-rapid-injection-molding-prototyping.webp",
    },
    {
      title: "Medical Device Housings",
      description:
        "Insert-molded housings integrate stainless steel or brass inserts for reliable fastening, controlled positioning, and repeated assembly in diagnostic, handheld, and other medical equipment.",
      tags: ["Metal Inserts", "Repeat Assembly", "Controlled Positioning"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/3-high-volume-injection-molding-production.webp",
    },
    {
      title: "Automotive Connector Housings",
      description:
        "Connector and sensor housings with molded-in terminals, contacts, or metal inserts combine electrical connection and mechanical retention while reducing secondary assembly.",
      tags: ["Molded-In Terminals", "Electrical Contact", "Assembly Reduction"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/2-injection-molding-factory-workshop-1.webp",
    },
    {
      title: "Electrical Terminal Bodies",
      description:
        "Molded-in pins, contacts, and conductive inserts maintain controlled terminal positioning and insulation within connector bodies, terminal blocks, and other electrical components.",
      tags: ["Conductive Inserts", "Terminal Positioning", "Electrical Insulation"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/2-plastic-injection-molding-production-line-2.webp",
    },
    {
      title: "Precision Device Housings",
      description:
        "Integrate magnets, threaded inserts, or stamped metal components into compact device housings for secure assembly, positioning, magnetic functions, and application-specific feature integration.",
      tags: ["Molded-In Magnets", "Threaded Inserts", "Functional Integration"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/2-custom-injection-molding-manufacturing-facility-3.webp",
    },
  ],
};

export function InsParts() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "112px 0 120px", background: "#000000" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left"
          style={{ marginBottom: "64px" }}
        >
          <h2 className="text-white" style={{ fontSize: "46px", fontWeight: 700, letterSpacing: "-0.015em" }}>
            <EditableText path="parts.heading" defaultValue={DEFAULTS.heading} />
            <span style={{ color: "#EEC569" }}>
              <EditableText path="parts.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="parts.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>
          <p className="w-[80%]" style={{ fontSize: "18px", lineHeight: 1.6, color: "#7A7A7C", marginTop: "18px" }}>
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
              <div className="relative aspect-[4/3] overflow-hidden">
                <EditableImage
                  path={`parts.items.${index}.image`}
                  defaultSrc={part.image}
                  alt={part.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))" }}
                />
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
