"use client";

import { motion } from "framer-motion";
import { CheckCircle, Package, Settings, ClipboardCheck } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Incoming Material Inspection",
    subtitle: "Verifying raw material quality",
    icon: Package,
    items: [
      { text: "Material certification verification", highlight: "certification verification" },
      { text: "Spectrometer analysis for alloy composition", highlight: "Spectrometer analysis" },
      { text: "Dimensional inspection of raw stock", highlight: "Dimensional inspection" },
      { text: "Visual inspection for surface defects", highlight: "Visual inspection" },
    ],
    footer: "Only verified materials enter production",
  },
  {
    number: "02",
    title: "In-Process Quality Control",
    subtitle: "Monitoring during manufacturing",
    icon: Settings,
    items: [
      { text: "First Article Inspection (FAI) before batch production", highlight: "First Article Inspection" },
      { text: "Statistical Process Control (SPC) monitoring", highlight: "Statistical Process Control" },
      { text: "Critical dimension checks at key process stages", highlight: "Critical dimension checks" },
      { text: "Real-time process parameter documentation", highlight: "Real-time process parameter" },
    ],
    footer: "Problems caught early, quality maintained throughout",
  },
  {
    number: "03",
    title: "Final Inspection & Delivery",
    subtitle: "Comprehensive outgoing verification",
    icon: ClipboardCheck,
    items: [
      { text: "100% dimensional verification against specifications", highlight: "100% dimensional verification" },
      { text: "Surface finish measurement and validation", highlight: "Surface finish measurement" },
      { text: "Complete inspection report with each shipment", highlight: "Complete inspection report" },
      { text: "Traceable packaging and identification", highlight: "Traceable packaging" },
    ],
    footer: "Every part shipped meets your exact requirements",
  },
];

export function QualityProcess() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "80px 0",
        background: `
          radial-gradient(
            70% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            style={{
              color: "#D09947",
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            Our Process
          </span>
          <h2
            style={{
              fontSize: "46px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
              marginTop: "12px",
            }}
          >
            Quality Control <span style={{ color: "#EEC569" }}>System</span>
          </h2>
          <p
            style={{
              color: "#C5C6C9",
              fontSize: "18px",
              lineHeight: 1.6,
              maxWidth: "640px",
              margin: "16px auto 0",
            }}
          >
            Three-phase inspection system ensuring quality at every stage of production
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D09947]/20 via-[#D09947] to-[#D09947]/20 -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#4A4A48",
                    borderRadius: "18px",
                    border: "1px solid rgba(208,153,71,0.18)",
                    padding: "32px 28px",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
                  }}
                >
                  {/* Stage number badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "28px",
                      background: "#D09947",
                      color: "#000000",
                      fontWeight: 700,
                      padding: "6px 16px",
                      borderRadius: "20px",
                      fontSize: "13px",
                    }}
                  >
                    Stage {stage.number}
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(208,153,71,0.12)",
                      border: "1px solid rgba(208,153,71,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      marginTop: "8px",
                    }}
                  >
                    <Icon style={{ width: "24px", height: "24px", color: "#D09947" }} />
                  </div>

                  {/* Content */}
                  <h3
                    style={{
                      fontSize: "19px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "8px",
                    }}
                  >
                    {stage.title}
                  </h3>
                  <p
                    style={{
                      color: "#EEC569",
                      fontSize: "14px",
                      marginBottom: "20px",
                    }}
                  >
                    {stage.subtitle}
                  </p>

                  {/* Items */}
                  <ul className="space-y-3 mb-6">
                    {stage.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle style={{ width: "18px", height: "18px", color: "#D09947", flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ color: "#C5C6C9", fontSize: "14px", lineHeight: 1.5 }}>
                          {item.text.split(item.highlight).map((part, i, arr) => (
                            <span key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <span style={{ color: "#D09947", fontWeight: 500 }}>{item.highlight}</span>
                              )}
                            </span>
                          ))}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div
                    style={{
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(208,153,71,0.2)",
                    }}
                  >
                    <p style={{ color: "#7A7A7C", fontSize: "13px", fontStyle: "italic" }}>{stage.footer}</p>
                  </div>

                  {/* Arrow connector for desktop */}
                  {index < stages.length - 1 && (
                    <div
                      className="hidden lg:flex"
                      style={{
                        position: "absolute",
                        right: "-16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        width: "32px",
                        height: "32px",
                        background: "#D09947",
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
