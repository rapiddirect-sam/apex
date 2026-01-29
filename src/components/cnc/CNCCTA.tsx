"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CNCCTA() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "120px 0" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=80"
          alt="CNC Manufacturing"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2
            className="text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
              marginBottom: "18px",
            }}
          >
            Start your precision manufacturing project
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#C5C6C9",
              marginBottom: "36px",
            }}
          >
            Upload your design files and get a detailed quote and free DFM
            analysis within 24 hours
          </p>

          <div className="flex flex-wrap gap-4">
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
              }}
            >
              Upload files for an instant quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 transition-all duration-300 hover:border-[#D09947] hover:text-[#D09947]"
              style={{
                background: "transparent",
                border: "1px solid #333333",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "16px",
                padding: "18px 40px",
                borderRadius: "12px",
              }}
            >
              Contact our engineers
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
