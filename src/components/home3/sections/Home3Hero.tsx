"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const features = [
  { highlight: "30-60", text: "Minute quote response" },
  { highlight: "±0.01-0.05mm", text: "Precision control" },
  { highlight: "ISO-certified", text: "Quality system" },
  { highlight: "Free", text: "Technical Support" },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50K+", label: "Projects Done" },
  { value: "99.8%", label: "Accuracy Rate" },
];

export function Home3Hero() {
  return (
    <section
      className="relative min-h-[90vh] pt-16"
      style={{ background: "#000000" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80')",
          filter: "brightness(0.85)",
        }}
      />

      {/* Multi-layer cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.65), rgba(0,0,0,0.85))",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-6 min-h-[calc(90vh-64px)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 w-full py-16 lg:py-20">
          {/* Left Column - Headlines and Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Headline - Two tiers */}
            <h1
              className="text-white"
              style={{
                fontSize: "clamp(48px, 6vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Precision
            </h1>
            <h1
              className="text-white"
              style={{
                fontSize: "clamp(48px, 6vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Manufacturing,
            </h1>
            <h1
              style={{
                fontSize: "clamp(48px, 6vw, 72px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "#EEC569",
                marginBottom: "24px",
              }}
            >
              Intelligent Living
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "#7A7A7C",
                marginBottom: "40px",
              }}
            >
              Your Partner for High-Precision Batch Manufacturing
            </p>

            {/* Social Proof Boxes */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Box 1 - Dark with avatars */}
              <div
                className="flex items-center gap-3"
                style={{
                  background: "rgba(26,26,26,0.8)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="rounded-full"
                      style={{
                        width: "32px",
                        height: "32px",
                        background: `linear-gradient(135deg, #D4A03A, #8B6914)`,
                        border: "2px solid #1A1A1A",
                      }}
                    />
                  ))}
                </div>
                <div>
                  <p style={{ color: "#FFFFFF", fontSize: "12px" }}>
                    <span style={{ fontWeight: 700 }}>20M+</span> Ads Created For{" "}
                    <span style={{ fontWeight: 700 }}>23,560+</span> Happy Customers
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="fill-[#D09947] text-[#D09947]"
                        style={{ width: "12px", height: "12px" }}
                      />
                    ))}
                    <span style={{ color: "#FFFFFF", fontSize: "12px", marginLeft: "4px" }}>5.0</span>
                  </div>
                </div>
              </div>

              {/* Box 2 - Transparent text only */}
              <div style={{ padding: "12px 16px", opacity: 0.9 }}>
                <p style={{ color: "#C5C6C9", fontSize: "12px" }}>
                  <span style={{ fontWeight: 700 }}>20M+</span> Ads Created
                </p>
                <p style={{ color: "#C5C6C9", fontSize: "12px" }}>
                  For <span style={{ fontWeight: 700 }}>23,560+</span> Happy Customers
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="fill-[#D09947] text-[#D09947]"
                      style={{ width: "12px", height: "12px" }}
                    />
                  ))}
                  <span style={{ color: "#C5C6C9", fontSize: "12px", marginLeft: "4px" }}>5.0</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center lg:justify-end"
          >
            <div
              style={{
                background: "rgba(46,44,43,0.25)",
                backdropFilter: "blur(8px)",
                borderRadius: "20px",
                border: "1px solid rgba(197,198,201,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                padding: "28px 32px",
                width: "100%",
                maxWidth: "420px",
              }}
            >
              {/* Feature List - Verified checklist style */}
              <ul style={{ marginBottom: "24px" }}>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                    style={{
                      padding: "14px 0",
                      borderBottom: index < features.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}
                  >
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "rgba(208,153,71,0.2)",
                        boxShadow: "0 0 6px rgba(208,153,71,0.4)",
                      }}
                    >
                      <Check style={{ width: "14px", height: "14px", color: "#D09947" }} />
                    </div>
                    <span style={{ color: "#FFFFFF", fontSize: "15px" }}>
                      <span style={{ color: "#D09947", fontWeight: 600 }}>{feature.highlight}</span>{" "}
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button - Premium pressable with gradient */}
              <button
                className="w-full transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #D09947 0%, #EEC569 100%)",
                  color: "#000000",
                  fontWeight: 700,
                  fontSize: "20px",
                  padding: "14px 24px",
                  borderRadius: "8px",
                  boxShadow: "0 0 50px rgba(208,153,71,0.7)",
                  marginBottom: "24px",
                  border: "2px solid transparent",
                  position: "relative",
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
                Get Instant Quote
              </button>

              {/* Trust Metrics Row */}
              <div
                className="grid grid-cols-3"
                style={{
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  gap: "16px",
                }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      style={{
                        color: "#D09947",
                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: 1.2,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        color: "#7A7A7C",
                        fontSize: "11px",
                        marginTop: "4px",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
