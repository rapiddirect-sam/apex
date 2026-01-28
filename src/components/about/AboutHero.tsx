"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1a1512 0%, #2d1f15 25%, #3d2a1a 50%, #4a3520 75%, #1a1512 100%)",
        padding: "60px 40px",
        paddingTop: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated GIF background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about/AboutApexBatch.gif"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.4,
          }}
          loading="eager"
        />
      </div>

      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Main card container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          background: "rgba(13,13,13,0.25)",
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
