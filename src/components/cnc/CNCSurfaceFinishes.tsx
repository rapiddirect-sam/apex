"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const finishes = [
  {
    name: "Anodizing",
    description: "Colored protective coating for aluminum with excellent corrosion and wear resistance",
    ra: "0.8 - 1.6 μm",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    name: "Hard Coat Anodizing",
    description: "Type III anodizing for maximum hardness and wear resistance on aluminum parts",
    ra: "0.8 - 1.6 μm",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80",
  },
  {
    name: "Bead Blasting",
    description: "Uniform matte texture that effectively hides machining marks and surface imperfections",
    ra: "1.6 - 6.3 μm",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80",
  },
  {
    name: "Passivation",
    description: "Chemical treatment for stainless steel that enhances natural corrosion resistance",
    ra: "Unchanged",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  },
  {
    name: "Nickel/Chrome Plating",
    description: "Electroplated coating for decorative finish and enhanced surface protection",
    ra: "0.4 - 1.6 μm",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&q=80",
  },
  {
    name: "Powder Coating",
    description: "Durable decorative finish available in various colors for excellent protection",
    ra: "1.6 - 3.2 μm",
    image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=400&q=80",
  },
];

export function CNCSurfaceFinishes() {
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
            CNC Machining{" "}
            <span style={{ color: "#EEC569" }}>Surface Finishes</span>
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
            Enhance appearance, corrosion resistance, and hardness with
            professional surface treatments
          </p>
        </motion.div>

        {/* Finishes Grid - 3x2 */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: "32px",
            marginTop: "72px",
          }}
        >
          {finishes.map((finish, index) => (
            <motion.div
              key={finish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
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
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={finish.image}
                  alt={finish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "20px 24px" }}>
                <div className="flex items-center justify-between mb-3">
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    }}
                  >
                    {finish.name}
                  </h3>
                  <span
                    style={{
                      border: "1px solid rgba(238,197,105,0.5)",
                      color: "#F5D89A",
                      background: "transparent",
                      fontSize: "11px",
                      padding: "4px 8px",
                      borderRadius: "999px",
                    }}
                  >
                    Ra: {finish.ra}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "#C5C6C9",
                  }}
                >
                  {finish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
