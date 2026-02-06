"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const finishes = [
  {
    name: "Anodizing",
    compatibleMaterials: "Aluminum",
    finish: "Matte / Glossy",
    leadTime: "+1-2 days",
    description: "Colored protective coating with excellent corrosion and wear resistance",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    name: "Hard Coat Anodizing",
    compatibleMaterials: "Aluminum",
    finish: "Matte",
    leadTime: "+2-3 days",
    description: "Type III anodizing for maximum hardness and wear resistance on aluminum parts",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80",
  },
  {
    name: "Bead Blasting",
    compatibleMaterials: "Aluminum, Stainless Steel",
    finish: "Matte / Satin",
    leadTime: "+1-2 days",
    description: "Creates uniform matte appearance, removes tool marks, improves surface for painting",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80",
  },
  {
    name: "Passivation",
    compatibleMaterials: "Stainless Steel",
    finish: "Unchanged",
    leadTime: "+1 day",
    description: "Chemical treatment that enhances natural corrosion resistance",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  },
  {
    name: "Nickel/Chrome Plating",
    compatibleMaterials: "Steel, Aluminum, Brass",
    finish: "Glossy",
    leadTime: "+3-5 days",
    description: "Electroplated coating for decorative finish and enhanced surface protection",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&q=80",
  },
  {
    name: "Powder Coating",
    compatibleMaterials: "Aluminum, Steel",
    finish: "Matte / Glossy",
    leadTime: "+2-3 days",
    description: "Durable decorative finish available in various colors for excellent protection",
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
                background: "#1A1A1A",
                borderRadius: "12px",
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
              {/* Top Content */}
              <div style={{ padding: "24px 24px 0 24px" }}>
                {/* Title */}
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  {finish.name}
                </h3>

                {/* Compatible Materials */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#7A7A7C",
                    marginBottom: "20px",
                  }}
                >
                  Compatible Materials: {finish.compatibleMaterials}
                </p>

                {/* Image */}
                <div
                  className="relative"
                  style={{
                    width: "100%",
                    height: "180px",
                    marginBottom: "24px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={finish.image}
                    alt={finish.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Finish and Lead Time */}
                <div className="flex justify-between" style={{ marginBottom: "20px" }}>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#EEC569",
                        marginBottom: "4px",
                      }}
                    >
                      Finish
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      {finish.finish}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#EEC569",
                        marginBottom: "4px",
                      }}
                    >
                      Lead Time Impact
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      {finish.leadTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Description */}
              <div
                style={{
                  padding: "16px 24px 24px 24px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#C5C6C9",
                    textAlign: "center",
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
