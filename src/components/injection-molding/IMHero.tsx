"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function IMHero() {
  return (
    <section className="relative bg-[#000000] pt-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left - Image */}
          <div className="relative h-[300px] lg:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
              alt="Injection Molded Parts"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center bg-[#1A1A1A] p-8 lg:p-16"
          >
            <h1
              className="text-white font-bold uppercase tracking-tight"
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Plastic Injection Molding Services
            </h1>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#C5C6C9",
                marginBottom: "32px",
              }}
            >
              Your end-to-end injection molding partner. We deliver
              precision plastic parts with 100+ material options, fast
              turnaround, and competitive pricing.
            </p>

            <Link
              href="https://app.apexbatch.com/"
              rel="nofollow"
              className="inline-flex items-center justify-center gap-2 self-start transition-all duration-300 hover:brightness-110 group"
              style={{
                background: "#D09947",
                color: "#000000",
                fontWeight: 600,
                fontSize: "14px",
                padding: "14px 32px",
                borderRadius: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                boxShadow: "0 4px 15px rgba(208,153,71,0.3)",
              }}
            >
              Get Instant Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
