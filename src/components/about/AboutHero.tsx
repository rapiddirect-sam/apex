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
          maxWidth: "1400px",
          margin: "0 auto",
          background: "rgba(13,13,13,0.25)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(208,153,71,0.15)",
          borderRadius: "18px",
          padding: "60px 60px 50px 60px",
        }}
      >
        {/* Main heading */}
        <h1
          className="text-center text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-[0.95] tracking-tight uppercase mb-6"
        >
          <span className="text-white">Welcome to </span>
          <span className="text-[#D09947]">Apexbatch</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-center text-xl md:text-2xl mx-auto mb-10 leading-relaxed"
        >
          <span className="text-[#D09947] font-semibold block">
            Inherited Expertise. Focused on Your Scale.
          </span>
          <span className="text-[#7A7A7C]">
            From the world&apos;s pioneer in digital manufacturing comes a dedicated team focused on high-precision, medium-to-large batch production.
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
