"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "50,000 m²", label: "Total Factory Area" },
  { value: "8", label: "Specialized Production Shops" },
  { value: "300+", label: "Advanced Equipment" },
  { value: "98%", label: "On-time Delivery" },
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    alt: "Manufacturing Facility",
  },
  {
    src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    alt: "CNC Machining Center",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    alt: "Precision Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    alt: "Production Floor",
  },
];

export function CNCSupplier() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `
          radial-gradient(
            60% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-bold"
              style={{
                fontSize: "46px",
                fontWeight: 700,
                letterSpacing: "-0.015em",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              <span style={{ color: "#EEC569" }}>Precision CNC Machining Services</span>
              <br />
              <span style={{ color: "#FFFFFF" }}>Supplier</span>
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#C5C6C9",
                marginBottom: "32px",
              }}
            >
              Located in Shenzhen&apos;s advanced manufacturing district, our 50,000
              m² vertically integrated facility operates 8 specialized production
              shops and is equipped with 300+ advanced machines.
              <br /><br />
              We support end-to-end manufacturing in one location, including CNC
              machining, precision injection molding, sheet metal fabrication, 3D
              printing, as well as in-house surface treatment and quality inspection
              lines.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    padding: "20px 16px",
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                    border: "1px solid rgba(208,153,71,0.3)",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#D09947",
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#7A7A7C",
                      marginTop: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image with navigation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "16px",
                border: "2px solid #7F4D0F",
                boxShadow: "inset 0 0 0 1px rgba(208,153,71,0.15), 0 24px 48px rgba(0,0,0,0.6)",
              }}
            >
              {/* Corner brackets */}
              <div
                className="absolute top-3 left-3 z-10"
                style={{
                  width: "24px",
                  height: "24px",
                  borderTop: "2px solid #7F4D0F",
                  borderLeft: "2px solid #7F4D0F",
                }}
              />
              <div
                className="absolute top-3 right-3 z-10"
                style={{
                  width: "24px",
                  height: "24px",
                  borderTop: "2px solid #7F4D0F",
                  borderRight: "2px solid #7F4D0F",
                }}
              />
              <div
                className="absolute bottom-3 left-3 z-10"
                style={{
                  width: "24px",
                  height: "24px",
                  borderBottom: "2px solid #7F4D0F",
                  borderLeft: "2px solid #7F4D0F",
                }}
              />
              <div
                className="absolute bottom-3 right-3 z-10"
                style={{
                  width: "24px",
                  height: "24px",
                  borderBottom: "2px solid #7F4D0F",
                  borderRight: "2px solid #7F4D0F",
                }}
              />

              <div className="relative aspect-[4/3]">
                <Image
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                />

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(208,153,71,0.15)]"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "rgba(0,0,0,0.75)",
                    border: "1px solid rgba(208,153,71,0.4)",
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
                    background: "rgba(0,0,0,0.75)",
                    border: "1px solid rgba(208,153,71,0.4)",
                  }}
                >
                  <ChevronRight className="w-5 h-5" style={{ color: "#D09947" }} />
                </button>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {images.map((_, index) => (
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
