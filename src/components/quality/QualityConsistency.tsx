"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check, GraduationCap, TrendingUp, Users } from "lucide-react";
import { getImageUrl } from "@/lib/utils";

const consistencyItems = [
  {
    icon: GraduationCap,
    title: "Operator Quality Training",
    subtitle: "Ensuring skilled and empowered personnel",
    image: getImageUrl("quality/qc-training.png"),
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
    image: getImageUrl("quality/qc-improvement.png"),
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
    image: getImageUrl("quality/qc-team.png"),
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
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = consistencyItems[activeTab];
  const Icon = activeItem.icon;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "80px 0",
        background: "#000000",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
        </motion.div>

        {/* Tab Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0",
            marginBottom: "48px",
          }}
        >
          {consistencyItems.map((item, index) => (
            <div key={item.title} style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={() => setActiveTab(index)}
                style={{
                  padding: "12px 24px",
                  background: activeTab === index ? "#D09947" : "transparent",
                  border: activeTab === index ? "1px solid #D09947" : "1px solid #7F4D0F",
                  color: activeTab === index ? "#000000" : "#EEC569",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {item.title}
              </button>
              {/* Connector line between tabs */}
              {index < consistencyItems.length - 1 && (
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    backgroundColor: "#7F4D0F",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content Area - Two Column Layout */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          {/* Left - Image */}
          <div
            style={{
              position: "relative",
              height: "480px",
              overflow: "hidden",
              border: "1px solid #EEC569",
            }}
          >
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Content Panel */}
          <div
            style={{
              background: "#34312F",
              border: "1px solid #EEC569",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Icon + Title Row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                marginBottom: "8px",
              }}
            >
              {/* Icon badge */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: "rgba(208,153,71,0.15)",
                  border: "1px solid #D09947",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon style={{ width: "24px", height: "24px", color: "#D09947" }} />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  {activeItem.title}
                </h3>
                <p
                  style={{
                    color: "#C5C6C9",
                    fontSize: "15px",
                    margin: "4px 0 0 0",
                  }}
                >
                  {activeItem.subtitle}
                </p>
              </div>
            </div>

            {/* Checklist Items */}
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0", flex: 1 }}>
              {activeItem.items.map((listItem, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(208,153,71,0.15)",
                      border: "1px solid #D09947",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
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
                  <span style={{ color: "#C5C6C9", fontSize: "15px", lineHeight: 1.6 }}>
                    {listItem.highlight ? (
                      <>
                        {listItem.text.split(listItem.highlight)[0]}
                        <span style={{ color: "#FFFFFF", fontWeight: 600 }}>{listItem.highlight}</span>
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
                paddingTop: "20px",
                borderTop: "1px solid rgba(208,153,71,0.3)",
              }}
            >
              <p style={{ color: "#EEC569", fontSize: "14px", fontStyle: "italic", margin: 0 }}>
                {activeItem.footer}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
