"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section
      style={{
        background: `
          radial-gradient(
            ellipse 80% 50% at 50% 0%,
            rgba(208,153,71,0.15),
            transparent 50%
          ),
          #000000
        `,
        padding: "60px 40px",
        paddingTop: "140px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Section Label Pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          marginBottom: "28px",
        }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2A2A2A] border border-[#3A3A3A] rounded-full">
          <span className="text-[#D09947] text-xs font-medium tracking-[0.1em] uppercase">
            About Us
          </span>
        </div>
      </motion.div>

      {/* Main card container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: "relative",
          maxWidth: "1100px",
          margin: "0 auto",
          background: "rgba(13,13,13,0.4)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(208,153,71,0.15)",
          borderRadius: "18px",
          padding: "50px 50px 40px 50px",
        }}
      >
        {/* Main heading */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "clamp(48px, 6vw, 72px)",
            fontWeight: 700,
            margin: "0 0 24px 0",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          <span style={{ color: "#FFFFFF" }}>Welcome to </span>
          <span style={{ color: "#EEC569", fontWeight: 800 }}>Apexbatch</span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            textAlign: "center",
            fontSize: "28px",
            lineHeight: 1.5,
            margin: "0 auto 40px auto",
            maxWidth: "850px",
            fontWeight: 500,
          }}
        >
          <span style={{ color: "#EEC569" }}>
            Inherited Expertise. Focused on Your Scale.{" "}
          </span>
          <span style={{ color: "#FFFFFF" }}>
            From the world&apos;s pioneer in digital manufacturing comes a dedicated
            team focused on high-precision, medium-to-large batch production.
          </span>
        </p>

        {/* Three images */}
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          {/* Image 1 */}
          <div
            style={{
              flex: 1,
              height: "200px",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(208,153,71,0.2)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80"
              alt="CNC machining"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Image 2 */}
          <div
            style={{
              flex: 1,
              height: "200px",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(208,153,71,0.2)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
              alt="Manufacturing"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Image 3 */}
          <div
            style={{
              flex: 1,
              height: "200px",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(208,153,71,0.2)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80"
              alt="Precision parts"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
