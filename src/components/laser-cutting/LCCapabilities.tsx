"use client";

import { motion } from "framer-motion";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  heading: "Our ",
  headingHighlight: "Laser Cutting",
  headingSuffix: " Capabilities",
  subheading:
    "Match the manufacturing plan to your material, geometry, thickness, edge requirements, and production volume. ApexBatch supports precision sheet cutting, flexible batch production, and coordinated secondary fabrication from early validation through repeat orders.",
  items: [
    {
      title: "Precision Sheet Metal Cutting",
      description:
        "Produce custom sheet metal parts with complex contours, holes, slots, cutouts, and repeatable feature locations. Cutting tolerances and edge requirements are confirmed based on material grade, sheet thickness, part size, and geometry.",
      specs: ["Complex profiles and precision features", "Controlled dimensions and edge quality"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-production-workshop-2.webp",
      ctaText: "Start Your Project",
    },
    {
      title: "Flexible Batch Production",
      description:
        "Move from design validation to high-mix, low-volume orders and repeat production. Material planning, part nesting, process control, and inspection are coordinated to support multiple part numbers and consistent output across batches.",
      specs: ["Prototype validation to repeat batches", "High-mix, low-volume production"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/3-cnc-milling-machining-service.webp",
      ctaText: "Start Your Project",
    },
    {
      title: "Integrated Sheet Metal Fabrication",
      description:
        "Extend laser cutting into finished sheet metal parts with deburring, bending, welding, hardware insertion, surface finishing, and assembly. A coordinated manufacturing workflow reduces supplier handoffs and helps maintain fit across downstream operations.",
      specs: ["Cutting and secondary operations", "Finished or assembly-ready parts"],
      image:
        "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/2-cnc-machining-factory-3.webp",
      ctaText: "Start Your Project",
    },
  ],
  technicalTable: {
    headers: ["Technical Capability", "ApexBatch Capability"],
    rows: [
      {
        technicalCapability: "Maximum Part Size",
        apexCapability:
          "Up to 3000 \u00D7 1500 mm. Thick, long, narrow, or flatness-critical parts require DFM review.",
      },
      {
        technicalCapability: "Dimensional Tolerance",
        apexCapability:
          "Typically \u00B10.10 mm for sheet thicknesses from 0.2 to 2.0 mm. Tighter requirements may use etching, Wire EDM, or CNC machining.",
      },
      {
        technicalCapability: "Minimum Hole Diameter",
        apexCapability:
          "At least 1\u00D7 material thickness, with an absolute minimum of 0.60 mm. Smaller holes may require etching or CNC machining.",
      },
      {
        technicalCapability: "Minimum Slot Width",
        apexCapability:
          "At least 1\u00D7 material thickness, with an absolute minimum of 0.20 mm. Recommended slot length-to-width ratio: \u226425:1.",
      },
      {
        technicalCapability: "Minimum Feature / Web Width",
        apexCapability:
          "At least 1\u00D7 material thickness, with an absolute minimum of 0.20 mm. Minimum hole-to-hole and hole-to-edge spacing: 0.80 mm.",
      },
      {
        technicalCapability: "Typical Kerf Width",
        apexCapability:
          "Approximately 0.10\u20130.25 mm, depending on material, thickness, assist gas, and cutting parameters.",
      },
      {
        technicalCapability: "Edge Condition",
        apexCapability:
          "Minor taper, heat tint, oxidation, burrs, or bottom dross may occur. Grinding, sandblasting, deburring, and passivation are available.",
      },
    ],
  },
};

export function LCCapabilities() {
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
          className="text-center"
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
            className="mx-auto w-[80%]"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              marginTop: "18px",
            }}
          >
            <EditableText path="capabilities.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px", marginTop: "72px" }}>
          {DEFAULTS.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full flex flex-col"
              style={{ background: "#1A1A1A", overflow: "hidden" }}
            >
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <EditableImage
                  path={`capabilities.items.${index}.image`}
                  defaultSrc={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
                  <EditableText path={`capabilities.items.${index}.title`} defaultValue={item.title} />
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#C5C6C9", marginBottom: "24px", flex: 1 }}>
                  <EditableText
                    path={`capabilities.items.${index}.description`}
                    defaultValue={item.description}
                    multiline
                  />
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {item.specs.map((spec, specIndex) => (
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
                      <EditableText
                        path={`capabilities.items.${index}.specs.${specIndex}`}
                        defaultValue={spec}
                      />
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
                  <EditableText path={`capabilities.items.${index}.ctaText`} defaultValue={item.ctaText} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
          style={{ marginTop: "72px" }}
        >
          <div
            style={{
              borderRadius: "12px",
              border: "1px solid rgba(208,153,71,0.25)",
              overflow: "hidden",
              width: "100%",
              background: "#000000",
            }}
          >
            <table className="w-full" style={{ borderCollapse: "collapse", background: "#000000" }}>
              <thead>
                <tr style={{ background: "rgba(120,100,50,0.35)" }}>
                  {DEFAULTS.technicalTable.headers.map((header, headerIndex) => (
                    <th
                      key={header}
                      style={{
                        background: "rgba(120,100,50,0.35)",
                        borderBottom: "1px solid rgba(208,153,71,0.3)",
                        padding: "20px 28px",
                        textAlign: "left",
                        color: "#EEC569",
                        fontWeight: 700,
                        fontSize: "16px",
                        width: headerIndex === 0 ? "28%" : undefined,
                      }}
                    >
                      <EditableText
                        path={`capabilities.technicalTable.headers.${headerIndex}`}
                        defaultValue={header}
                      />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ background: "#000000" }}>
                {DEFAULTS.technicalTable.rows.map((row, index) => {
                  const rowBackground = index % 2 === 0 ? "#000000" : "#141414";

                  return (
                  <tr
                    key={index}
                    style={{
                      background: rowBackground,
                    }}
                  >
                    <td
                      style={{
                        borderBottom:
                          index < DEFAULTS.technicalTable.rows.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        padding: "20px 28px",
                        textAlign: "left",
                        color: "#C5C6C9",
                        fontWeight: 400,
                        fontSize: "15px",
                        verticalAlign: "top",
                        background: rowBackground,
                      }}
                    >
                      <EditableText
                        path={`capabilities.technicalTable.rows.${index}.technicalCapability`}
                        defaultValue={row.technicalCapability}
                      />
                    </td>
                    <td
                      style={{
                        borderBottom:
                          index < DEFAULTS.technicalTable.rows.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                        padding: "20px 28px",
                        textAlign: "left",
                        color: "#C5C6C9",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: 1.65,
                        verticalAlign: "top",
                        background: rowBackground,
                      }}
                    >
                      <EditableText
                        path={`capabilities.technicalTable.rows.${index}.apexCapability`}
                        defaultValue={row.apexCapability}
                        multiline
                      />
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
