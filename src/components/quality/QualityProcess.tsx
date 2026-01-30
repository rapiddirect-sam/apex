"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const stages = [
  {
    number: "01",
    title: "Incoming Material Inspection",
    subtitle: "Preventing non-conforming materials from entering production flow",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    keyProcedures: [
      "Supplier certification verification",
      "Material test reports review",
      "Incoming quality inspection",
      "Non-conforming material quarantine",
    ],
    coreParameters: [
      "Material composition analysis",
      "Hardness testing",
      "Dimensional verification",
      "Surface quality check",
    ],
  },
  {
    number: "02",
    title: "In-Process Quality Control",
    subtitle: "Monitoring during manufacturing to catch issues early",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    keyProcedures: [
      "First Article Inspection (FAI)",
      "Statistical Process Control (SPC)",
      "In-process dimension checks",
      "Process parameter monitoring",
    ],
    coreParameters: [
      "Critical dimensions tracking",
      "Surface roughness measurement",
      "Geometric tolerances (GD&T)",
      "Tool wear monitoring",
    ],
  },
  {
    number: "03",
    title: "Final Inspection & Delivery",
    subtitle: "Comprehensive outgoing verification before shipment",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    keyProcedures: [
      "100% final inspection",
      "Inspection report generation",
      "Certificate of Conformance",
      "Traceable packaging & labeling",
    ],
    coreParameters: [
      "Full dimensional verification",
      "Surface finish validation",
      "Functional testing",
      "Visual inspection standards",
    ],
  },
];

export function QualityProcess() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "80px 0",
        background: "#34312F",
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
<h2
            style={{
              fontSize: "46px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
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

        {/* Process Cards - Vertical Stack */}
        <div className="space-y-12">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
              style={{
                background: "#0D0D0D",
                border: "1px solid #EEC569",
                overflow: "hidden",
              }}
            >
              {/* Large Image at Top */}
              <div
                style={{
                  width: "100%",
                  height: "280px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url('${stage.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Dark overlay on image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)",
                  }}
                />
              </div>

              {/* Content Area */}
              <div style={{ padding: "32px 40px 40px 40px" }}>
                {/* Number Badge + Title Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginBottom: "12px",
                  }}
                >
                  {/* Circular Number Badge */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      backgroundColor: "#D09947",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        color: "#000000",
                        fontSize: "22px",
                        fontWeight: 700,
                      }}
                    >
                      {stage.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    {stage.title}
                  </h3>
                </div>

                {/* Subtitle */}
                <p
                  style={{
                    color: "#EEC569",
                    fontSize: "16px",
                    marginBottom: "32px",
                    marginLeft: "76px",
                  }}
                >
                  {stage.subtitle}
                </p>

                {/* Two Column Layout */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "40px",
                    background: "#34312F",
                    padding: "24px 40px 40px 40px",
                    margin: "0 -40px -40px -40px",
                  }}
                >
                  {/* Left Column - Key Procedures */}
                  <div>
                    <h4
                      style={{
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: 600,
                        marginBottom: "16px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Key Procedures
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {stage.keyProcedures.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              backgroundColor: "rgba(208,153,71,0.15)",
                              border: "1px solid #D09947",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Check
                              style={{
                                width: "12px",
                                height: "12px",
                                color: "#D09947",
                              }}
                            />
                          </div>
                          <span
                            style={{
                              color: "#C5C6C9",
                              fontSize: "15px",
                              lineHeight: 1.4,
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Core Inspection Parameters */}
                  <div>
                    <h4
                      style={{
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: 600,
                        marginBottom: "16px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Core Inspection Parameters
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {stage.coreParameters.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              backgroundColor: "rgba(208,153,71,0.15)",
                              border: "1px solid #D09947",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Check
                              style={{
                                width: "12px",
                                height: "12px",
                                color: "#D09947",
                              }}
                            />
                          </div>
                          <span
                            style={{
                              color: "#C5C6C9",
                              fontSize: "15px",
                              lineHeight: 1.4,
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginTop: "60px" }}
        >
          <Link
            href="/contact"
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
          >
            Request Quality Package
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
