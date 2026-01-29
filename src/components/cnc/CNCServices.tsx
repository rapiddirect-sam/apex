"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "CNC Milling (3/4/5-Axis)",
    description:
      "Ideal for complex geometries. Our 5-axis capabilities allow for multi-sided machining in a single setup, ensuring superior positional accuracy.",
    specs: ["Max Envelope: 1500mm", "Tolerance: ±0.01mm"],
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
  },
  {
    title: "CNC Turning / Mill-Turn",
    description:
      "High-efficiency solutions for cylindrical parts. Swiss-style machining available for small, intricate components in high volumes.",
    specs: ["Roundness: 0.005mm", "Surface Finish: Ra 0.4"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
];

export function CNCServices() {
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
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            Our CNC <span style={{ color: "#EEC569" }}>Machining</span> Services
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              maxWidth: "760px",
              marginTop: "18px",
            }}
          >
            Comprehensive precision machining solutions for demanding applications
          </p>
        </motion.div>

        {/* Services Grid - 2 cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: "32px",
            marginTop: "72px",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <Image
                  src={service.image}
                  alt={service.title}
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
                    fontSize: "21px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginBottom: "12px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "#C5C6C9",
                    marginBottom: "20px",
                  }}
                >
                  {service.description}
                </p>

                {/* Specs as pills */}
                <div className="flex flex-wrap gap-2">
                  {service.specs.map((spec) => (
                    <span
                      key={spec}
                      style={{
                        border: "1px solid rgba(238,197,105,0.5)",
                        color: "#F5D89A",
                        background: "transparent",
                        fontSize: "13px",
                        padding: "6px 10px",
                        borderRadius: "999px",
                      }}
                    >
                      {spec}
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
