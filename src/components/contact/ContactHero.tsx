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
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80')",
        }}
      />

      {/* Multi-layer cinematic overlay - matching home3 */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)",
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
          {/* Pill Label */}
          <div className="mb-6">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 24px",
                border: "1px solid #7F4D0F",
                backgroundColor: "transparent",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#D09947",
                }}
              />
              <span
                style={{
                  color: "#EEC569",
                  fontSize: "12px",
                  fontWeight: "500",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                GET IN TOUCH
              </span>
            </div>
          </div>

          {/* Eyebrow - GOLD COLOR */}
          <p
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#EEC569",
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
              whiteSpace: "nowrap",
            }}
          >
            Get in Touch with{" "}
            <span style={{ color: "#EEC569" }}>ApexBatch</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "21px",
              lineHeight: 1.6,
              color: "#C5C6C9",
              maxWidth: "100%",
            }}
          >
            Let&apos;s Bring Your Project To Life. Whether you&apos;re moving from prototype to batch production or need a high-precision manufacturing partner, our engineering team is ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
