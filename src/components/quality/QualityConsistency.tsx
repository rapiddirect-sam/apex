"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, GraduationCap, TrendingUp, Users } from "lucide-react";

const consistencyItems = [
  {
    icon: GraduationCap,
    title: "Operator Quality Training",
    subtitle: "Ensuring skilled and empowered personnel",
    image: "/quality/qc-training.png",
    items: [
      { text: "All operators must pass pre-job quality training and assessment before assignment", highlight: "pre-job quality training and assessment" },
      { text: "Key process operators undergo periodic retraining to maintain competency", highlight: "periodic retraining" },
      { text: "Operators are authorized to immediately stop production upon detecting quality risks and initiate problem resolution protocols", highlight: "immediately stop production" },
      { text: "Regular quality awareness sessions and skill development workshops", highlight: "" },
    ],
    footer: "Empowered operators are the first line of defense in quality assurance",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    subtitle: "Systematic approach to quality enhancement",
    image: "/quality/qc-improvement.png",
    items: [
      { text: "Non-conformances are addressed through the PDCA (Plan-Do-Check-Act) cycle", highlight: "PDCA (Plan-Do-Check-Act) cycle" },
      { text: "Each quality deviation triggers documentation, root cause analysis, and corrective actions", highlight: "documentation, root cause analysis, and corrective actions" },
      { text: "Monthly review of key quality indicators (KQIs) for process optimization and stability enhancement", highlight: "Monthly review" },
      { text: "Implementation of preventive actions based on trend analysis and risk assessment", highlight: "" },
    ],
    footer: "Every deviation is an opportunity for systematic improvement",
  },
  {
    icon: Users,
    title: "Customer Quality Collaboration",
    subtitle: "Partnership-driven quality assurance",
    image: "/quality/qc-team.png",
    items: [
      { text: "Dedicated quality engineers assigned to key accounts for personalized support", highlight: "Dedicated quality engineers" },
      { text: "Customer-specific quality requirements documented and tracked in our system", highlight: "Customer-specific quality requirements" },
      { text: "Regular quality review meetings and performance reporting", highlight: "Regular quality review meetings" },
      { text: "Rapid response protocols for any quality concerns or inquiries", highlight: "Rapid response protocols" },
    ],
    footer: "Your quality standards become our quality standards",
  },
];

export function QualityConsistency() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "80px 0",
        background: `
          radial-gradient(
            70% 50% at 50% 100%,
            rgba(249,235,188,0.06),
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
          <h2
            style={{
              fontSize: "46px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
            }}
          >
            How We Ensure <span style={{ color: "#EEC569" }}>Consistent Quality</span>
          </h2>
          <p
            style={{
              color: "#C5C6C9",
              fontSize: "18px",
              lineHeight: 1.6,
              maxWidth: "720px",
              margin: "16px auto 0",
            }}
          >
            When orders scale up and production cycles extend, our quality system remains effective through trained people, robust mechanisms, and continuous improvement
          </p>
        </motion.div>

        {/* Quality Pillars */}
        <div className="grid lg:grid-cols-3 gap-8">
          {consistencyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#4A4A48",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid rgba(208,153,71,0.18)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A4A48] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 -mt-8 relative">
                  {/* Icon badge */}
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
                      marginBottom: "16px",
                    }}
                  >
                    <Icon style={{ width: "24px", height: "24px", color: "#D09947" }} />
                  </div>

                  <h3
                    style={{
                      fontSize: "19px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "#EEC569",
                      fontSize: "14px",
                      marginBottom: "20px",
                    }}
                  >
                    {item.subtitle}
                  </p>

                  {/* Items */}
                  <ul className="space-y-3 mb-5">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle style={{ width: "16px", height: "16px", color: "#D09947", flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ color: "#C5C6C9", fontSize: "14px", lineHeight: 1.5 }}>
                          {listItem.highlight ? (
                            <>
                              {listItem.text.split(listItem.highlight)[0]}
                              <span style={{ color: "#D09947", fontWeight: 500 }}>{listItem.highlight}</span>
                              {listItem.text.split(listItem.highlight)[1]}
                            </>
                          ) : (
                            listItem.text
                          )}
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
                    <p style={{ color: "#7A7A7C", fontSize: "13px", fontStyle: "italic" }}>{item.footer}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
