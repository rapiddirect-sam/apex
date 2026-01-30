"use client";

import { motion } from "framer-motion";
import { CheckCircle, Building2, Globe } from "lucide-react";

export function ReviewsHero() {
  return (
    <section
      className="relative pt-32 pb-16 overflow-hidden"
      style={{
        backgroundImage: "url('/reviews/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl w-full"
        >
          {/* Dark card */}
          <div
            style={{
              background: "#303030",
              padding: "clamp(24px, 5vw, 48px)",
              borderRadius: "0",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(22px, 3.5vw, 36px)",
                fontWeight: 700,
                color: "#F9EBBC",
                letterSpacing: "-0.015em",
                lineHeight: 1.2,
                marginBottom: "8px",
              }}
            >
              Trusted by Global Manufacturing Clients
            </h1>

            <h2
              style={{
                fontSize: "clamp(18px, 2.5vw, 22px)",
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: "20px",
              }}
            >
              Real Reviews from Real Engineers
            </h2>

            <p
              style={{
                color: "#C5C6C9",
                fontSize: "16px",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}
            >
              From precision CNC machining to high-volume injection molding,
              Apexbatch delivers consistent quality for aerospace, automotive,
              and medical industries worldwide.
            </p>

            {/* Stats row - in separate rectangular container */}
            <div
              className="flex flex-col sm:flex-row flex-wrap"
              style={{
                background: "#252525",
                padding: "clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)",
                alignItems: "flex-start",
                gap: "clamp(12px, 2vw, 24px)",
              }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle
                  style={{ width: "16px", height: "16px", color: "#EEC569" }}
                />
                <span style={{ color: "#FFFFFF", fontSize: "12px" }}>
                  Verified Client Reviews
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building2
                  style={{ width: "16px", height: "16px", color: "#EEC569" }}
                />
                <span style={{ color: "#FFFFFF", fontSize: "12px" }}>
                  250+ Industrial Projects Delivered
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe
                  style={{ width: "16px", height: "16px", color: "#EEC569" }}
                />
                <span style={{ color: "#FFFFFF", fontSize: "12px" }}>
                  Serving North America, Europe & Asia
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
