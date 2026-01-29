"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const parts = [
  {
    title: "UAV structural components",
    description:
      "5-axis machining of 7075 aluminum alloy, lightweight design, high strength-to-weight ratio",
    tags: [
      { label: "Material: 7075 Aluminum", highlight: false },
      { label: "Tolerance: ±0.05mm", highlight: false },
      { label: "Process: 5-axis machining", highlight: false },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    title: "Medical Device Housing",
    description:
      "316 stainless steel with precision tolerance for surgical equipment, passivated for corrosion resistance",
    tags: [
      { label: "Material: 316 Stainless", highlight: true },
      { label: "Tolerance: ±0.015mm", highlight: true },
      { label: "Finish: Passivation", highlight: false },
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    title: "Automotive Sensor Mount",
    description:
      "6061 aluminum turned part with threaded features, anodized black for aesthetics and protection",
    tags: [
      { label: "Material: 6061 Aluminum", highlight: true },
      { label: "Tolerance: ±0.03mm", highlight: true },
      { label: "Finish: Black Anodize", highlight: false },
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
  },
];

export function CNCParts() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `
          radial-gradient(
            60% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "64px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            CNC Parts <span style={{ color: "#EEC569" }}>Made By Us</span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              marginTop: "18px",
            }}
          >
            Precision components manufactured for various industries
          </p>
        </motion.div>

        {/* Parts Grid - 3 cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "32px" }}
        >
          {parts.map((part, index) => (
            <motion.div
              key={part.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: `
                  radial-gradient(
                    60% 50% at 50% 0%,
                    rgba(249,235,188,0.08),
                    rgba(0,0,0,0) 65%
                  ),
                  #0D0D0D
                `,
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
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "190px" }}>
                <Image
                  src={part.image}
                  alt={part.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Bottom fade overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginBottom: "10px",
                  }}
                >
                  {part.title}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "#C5C6C9",
                    marginBottom: "16px",
                  }}
                >
                  {part.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {part.tags.map((tag) => (
                    <span
                      key={tag.label}
                      style={{
                        fontSize: "12px",
                        padding: "5px 10px",
                        borderRadius: "999px",
                        background: tag.highlight
                          ? "rgba(208,153,71,0.15)"
                          : "transparent",
                        border: tag.highlight
                          ? "1px solid rgba(238,197,105,0.5)"
                          : "1px solid rgba(255,255,255,0.2)",
                        color: tag.highlight ? "#F5D89A" : "#C5C6C9",
                      }}
                    >
                      {tag.label}
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
