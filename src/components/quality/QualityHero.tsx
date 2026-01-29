"use client";

import { motion } from "framer-motion";

export function QualityHero() {
  return (
    <section
      className="relative pt-24 pb-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(
            70% 50% at 50% 0%,
            rgba(249,235,188,0.10),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
      }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/quality/servicebg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(208, 153, 71, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 153, 71, 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            <span className="text-white">Precision </span>
            <span style={{ color: "#EEC569" }}>Quality Assurance</span>
            <span className="text-white"> System</span>
          </h1>

          <p
            style={{
              color: "#C5C6C9",
              fontSize: "18px",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            At ApexBatch, quality is not just a department—it&apos;s embedded in every stage of our manufacturing
            process. Our comprehensive three-phase quality assurance system ensures every component meets
            the highest standards of precision, reliability, and consistency.
          </p>

          {/* Stats */}
          <div className="flex flex-nowrap gap-4">
            {[
              { value: "±0.01-0.05mm", label: "Tolerance Control" },
              { value: "100%", label: "Traceability" },
              { value: "ISO Certified", label: "Quality Management" },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  background: "linear-gradient(to right, rgba(208,153,71,0.4) 0%, #EEC569 100%)",
                  borderRadius: "16px",
                  padding: "24px 32px",
                  minWidth: "180px",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
