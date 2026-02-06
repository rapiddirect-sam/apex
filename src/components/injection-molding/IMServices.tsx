"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    name: "Rapid Prototyping",
    description:
      "Quick-turn injection molding for design validation and functional testing before mass production.",
    specs: [
      "3-7 day turnaround",
      "Aluminum tooling for speed",
      "Low minimum order quantity",
      "Design for manufacturability feedback",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    name: "High-Volume Production",
    description:
      "Mass production with steel molds for maximum efficiency and lowest per-part cost.",
    specs: [
      "Steel tooling for durability",
      "Automated production lines",
      "Quality control at every stage",
      "Just-in-time delivery options",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
  {
    name: "Custom Solutions",
    description:
      "Specialized injection molding services including insert molding, overmolding, and multi-material.",
    specs: [
      "Insert and overmolding",
      "Two-shot/multi-material molding",
      "Liquid silicone rubber (LSR)",
      "Micro-injection molding",
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
  },
];

export function IMServices() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "104px 0 112px",
        background: "#34312F",
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
            Our <span style={{ color: "#EEC569" }}>Injection Molding</span> Services
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              maxWidth: "700px",
              marginTop: "18px",
            }}
          >
            We provide comprehensive plastic injection molding solutions tailored to your project requirements, from
            prototyping to full-scale production.
          </p>
        </motion.div>

        {/* Services Grid - 3 columns */}
        <div className="max-w-[1000px] mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "24px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden"
                style={{
                  background: "#1A1A1A",
                }}
              >
                {/* Image */}
                <div className="relative" style={{ height: "200px" }}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "24px" }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "12px",
                    }}
                  >
                    {service.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "#C5C6C9",
                      marginBottom: "20px",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Specs as bullet points */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {service.specs.map((spec) => (
                      <li
                        key={spec}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          color: "#C5C6C9",
                          fontSize: "14px",
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
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
