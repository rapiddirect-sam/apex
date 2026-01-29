"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          <Link
            href="/contact"
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider inline-flex items-center gap-2 group"
          >
            Request A Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
