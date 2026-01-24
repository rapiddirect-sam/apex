"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section
      className="relative pt-20"
      style={{
        minHeight: "380px",
        background: "#000000",
      }}
    >
      {/* Background image - stock chart/data visualization - VERY VISIBLE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80')",
          filter: "brightness(0.95) saturate(1.2)",
        }}
      />

      {/* Very light overlay - background clearly visible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: "900px" }}
        >
          {/* Pill Label - SOLID GOLD BACKGROUND, WHITE TEXT */}
          <div className="mb-6">
            <span
              style={{
                display: "inline-block",
                background: "#D09947",
                color: "#FFFFFF",
                fontSize: "11px",
                fontWeight: 600,
                padding: "10px 20px",
                borderRadius: "4px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "none",
              }}
            >
              Get In Touch
            </span>
          </div>

          {/* Eyebrow - GOLD COLOR */}
          <p
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#D09947",
              marginBottom: "16px",
            }}
          >
            ApexBatch is the answer to your challenge
          </p>

          {/* Main Heading - LARGER, ApexBatch ITALIC */}
          <h1
            style={{
              fontSize: "clamp(46px, 5vw, 68px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              marginBottom: "24px",
            }}
          >
            Get in Touch with{" "}
            <span style={{ color: "#EEC569" }}>
              ApexBatch
            </span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "21px",
              lineHeight: 1.6,
              color: "#888888",
              maxWidth: "900px",
            }}
          >
            Let&apos;s Bring Your Project To Life. Whether you&apos;re moving from
            prototype to batch production or need a high-precision manufacturing
            partner, our engineering team is ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
