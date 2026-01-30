"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function QualityCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "80px 0",
        background: "#4A4A48",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative overflow-hidden"
          style={{
            background: `
              radial-gradient(
                60% 50% at 50% 0%,
                rgba(249,235,188,0.10),
                rgba(0,0,0,0) 65%
              ),
              #000000
            `,
            borderRadius: "18px",
            padding: "64px 40px",
            border: "1px solid rgba(208,153,71,0.18)",
          }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D09947]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D09947]/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.015em",
                marginBottom: "16px",
              }}
            >
              Ready to Experience Our <span style={{ color: "#EEC569" }}>Quality Standards</span>?
            </h2>
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "18px",
                lineHeight: 1.6,
                maxWidth: "640px",
                margin: "0 auto 32px",
              }}
            >
              Request our comprehensive quality package including certifications, inspection capabilities, and sample reports to see how we can meet your quality requirements.
            </p>

            <Link
              href="/contact"
              className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
            >
              Request Quality Package
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p style={{ color: "#7A7A7C", fontSize: "14px", marginTop: "24px" }}>
              Get certifications, process documentation, and sample inspection reports
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
