"use client";

import { motion } from "framer-motion";

export function AboutCTA() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "340px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "3px solid #4A9B9B",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(15, 12, 8, 0.75)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          width: "100%",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <h2
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#EEC569",
              margin: "0 0 18px 0",
              letterSpacing: "-0.015em",
            }}
          >
            Ready to Scale Your Production?
          </h2>

          {/* Subheading */}
          <p
            style={{
              fontSize: "28px",
              color: "#FFFFFF",
              margin: "0 0 44px 0",
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            Join 500+ global innovators who rely on ApexBatch for high-precision manufacturing solutions.
          </p>

          {/* CTA Button */}
          <button
            className="transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #D09947 0%, #EEC569 100%)",
              color: "#000000",
              fontSize: "16px",
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: "8px",
              border: "2px solid transparent",
              cursor: "pointer",
              boxShadow: "0 0 50px rgba(208,153,71,0.7)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 60px rgba(238,197,105,0.8)";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.border = "2px solid #F9EBBC";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 50px rgba(208,153,71,0.7)";
              e.currentTarget.style.color = "#000000";
              e.currentTarget.style.border = "2px solid transparent";
            }}
          >
            Request A Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
