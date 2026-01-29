"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Upload CAD file",
    description:
      "Submit your 3D CAD files (STEP, IGES, STL, etc.) through our secure online platform for instant analysis.",
  },
  {
    number: "02",
    title: "Instant quoting & DFM",
    description:
      "Receive automated pricing and comprehensive Design for Manufacturability feedback within minutes.",
  },
  {
    number: "03",
    title: "Precision manufacturing",
    description:
      "Your parts are machined using advanced CNC equipment with real-time quality monitoring.",
  },
  {
    number: "04",
    title: "Quality & delivery",
    description:
      "Each part undergoes rigorous inspection before secure packaging and global express shipping.",
  },
];

export function CNCProcess() {
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "64px" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            From CAD to <span style={{ color: "#EEC569" }}>Part</span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#7A7A7C",
              marginTop: "18px",
            }}
          >
            Our streamlined process delivers precision parts in as fast as 3 days
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "24px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                borderRadius: "16px",
                padding: "28px",
                border: "1px solid rgba(208,153,71,0.2)",
              }}
            >
              {/* Step Number */}
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "rgba(208,153,71,0.35)",
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#D09947",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "#C5C6C9",
                }}
              >
                {step.description}
              </p>

              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px]"
                  style={{
                    background: "linear-gradient(to right, #D09947, transparent)",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
          style={{ marginTop: "48px" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 transition-all duration-300 hover:brightness-110 group"
            style={{
              background: "#D09947",
              color: "#000000",
              fontWeight: 600,
              fontSize: "16px",
              padding: "18px 40px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(208,153,71,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Get Instant Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
