"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ReviewsCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "80px 0 100px",
        background: "#000000",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 600,
            color: "#FFFFFF",
            marginBottom: "32px",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              borderBottom: "3px solid #EEC569",
              paddingBottom: "4px",
            }}
          >
            Join
          </span>{" "}
          Industry Leaders Who Build with Precision
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            color: "#C5C6C9",
            fontSize: "18px",
            lineHeight: 1.7,
            maxWidth: "700px",
            margin: "0 auto 48px",
          }}
        >
          Apexbatch delivers manufacturing solutions for engineering teams that demand quality, reliability, and technical partnership.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="transition-all duration-300 hover:-translate-y-0.5"
            style={{
              padding: "18px 40px",
              background: "#D09947",
              color: "#000000",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Request a Quote
          </Link>
          <Link
            href="/contact"
            className="transition-all duration-300 hover:-translate-y-0.5"
            style={{
              padding: "18px 40px",
              background: "transparent",
              color: "#D09947",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "2px solid #D09947",
              borderRadius: "4px",
            }}
          >
            Contact Engineering Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
