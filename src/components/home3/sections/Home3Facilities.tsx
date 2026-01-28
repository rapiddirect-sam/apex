"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stats = [
  { value: "50,000 m²", label: "Total Factory Area" },
  { value: "8", label: "Specialized Production Shops" },
  { value: "300+", label: "Advanced Equipment" },
  { value: "98%", label: "On-Time Delivery" },
];

const facilityImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
];

// Metric component with corner brackets (top-left and bottom-right only)
function Metric({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative text-center"
      style={{
        padding: "18px 14px",
        background: `
          radial-gradient(
            60% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #0D0D0D
        `,
        borderRadius: "8px",
      }}
    >
      {/* Top-left corner bracket */}
      <div
        className="absolute"
        style={{
          top: 0,
          left: 0,
          width: "14px",
          height: "14px",
          borderTop: "2px solid #D09947",
          borderLeft: "2px solid #D09947",
        }}
      />
      {/* Bottom-right corner bracket */}
      <div
        className="absolute"
        style={{
          bottom: 0,
          right: 0,
          width: "14px",
          height: "14px",
          borderBottom: "2px solid #D09947",
          borderRight: "2px solid #D09947",
        }}
      />

      {/* Value */}
      <div
        style={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#EEC569",
          lineHeight: 1.1,
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </div>
      {/* Label */}
      <div
        style={{
          fontSize: "13px",
          color: "#EEC569",
          marginTop: "4px",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export function Home3Facilities() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % facilityImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "120px 0 130px",
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
          style={{ marginBottom: "64px" }}
        >
          {/* Eyebrow label with decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              style={{
                width: "48px",
                height: "1px",
                background: "rgba(208,153,71,0.5)",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(208,153,71,0.65)",
              }}
            >
              State-of-the-Art Manufacturing Environment
            </span>
            <div
              style={{
                width: "48px",
                height: "1px",
                background: "rgba(208,153,71,0.5)",
              }}
            />
          </div>

          {/* Title */}
          <h2
            className="text-white"
            style={{
              fontSize: "48px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            Our <span style={{ color: "#EEC569" }}>Facilities</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div
          className="grid lg:grid-cols-2 items-center"
          style={{ gap: "64px" }}
        >
          {/* Left - Narrative Panel and Metrics */}
          <div>
            {/* Description Panel - quiet, no heavy borders */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "16px",
                padding: "28px 32px",
                maxWidth: "520px",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#EEC569",
                  marginBottom: "16px",
                }}
              >
                Advanced Manufacturing Hub
              </h3>
              <p
                style={{
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                  color: "#C5C6C9",
                  marginBottom: "12px",
                }}
              >
                Located in Shenzhen&apos;s advanced manufacturing district, our 50,000 m²
                vertically integrated facility operates 8 specialized production shops and is
                equipped with 300+ advanced machines.
              </p>
              <p
                style={{
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                  color: "#C5C6C9",
                }}
              >
                We support end-to-end manufacturing in one location, including CNC
                machining, precision injection molding, sheet metal fabrication, 3D printing,
                as well as in-house surface treatment and quality inspection lines.
              </p>

              {/* Decorative line with diamond */}
              <div className="flex items-center" style={{ marginTop: "24px" }}>
                <div
                  className="flex-1"
                  style={{
                    height: "1px",
                    background: "linear-gradient(to right, transparent, rgba(208,153,71,0.3), rgba(208,153,71,0.5))",
                  }}
                />
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#D09947",
                    transform: "rotate(45deg)",
                    marginLeft: "8px",
                  }}
                />
              </div>
            </motion.div>

            {/* Metrics Grid - 2x2 with corner brackets only */}
            <div
              className="grid grid-cols-2"
              style={{
                marginTop: "32px",
                gap: "24px 32px",
              }}
            >
              {stats.map((stat, index) => (
                <Metric
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Right - Image Carousel (window feel, not component) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div
              className="relative aspect-[4/3]"
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                outline: "1px solid rgba(208,153,71,0.25)",
              }}
            >
              <Image
                src={facilityImages[currentImage]}
                alt="Manufacturing facility"
                fill
                className="object-cover transition-opacity duration-500"
              />

              {/* Navigation Arrows - subtle industrial style */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)]"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "rgba(0,0,0,0.55)",
                  border: "1px solid rgba(208,153,71,0.35)",
                }}
              >
                <ChevronLeft className="w-5 h-5" style={{ color: "#D09947" }} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)]"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "rgba(0,0,0,0.55)",
                  border: "1px solid rgba(208,153,71,0.35)",
                }}
              >
                <ChevronRight className="w-5 h-5" style={{ color: "#D09947" }} />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2" style={{ marginTop: "20px" }}>
              {facilityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className="h-1 rounded-full transition-all"
                  style={{
                    width: index === currentImage ? "24px" : "12px",
                    background: index === currentImage ? "#D09947" : "#444444",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
