"use client";

import { motion } from "framer-motion";

export function Home2TrustedLogos() {
  return (
    <section className="py-12 bg-[#2E2C2B] border-y border-[#4A4A48]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <p
          className="text-[#7A7A7C] text-xs uppercase tracking-[0.3em] text-center mb-8"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Trusted by Industry Leaders
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-8 md:gap-12"
        >
          {/* Microsoft */}
          <div className="flex items-center gap-2 text-[#7A7A7C] hover:text-[#D09947] transition-colors">
            <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
              <div className="bg-current" />
              <div className="bg-current" />
              <div className="bg-current" />
              <div className="bg-current" />
            </div>
            <span
              className="text-lg font-semibold tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Microsoft
            </span>
          </div>

          {/* Emerson */}
          <div className="text-[#7A7A7C] hover:text-[#D09947] transition-colors">
            <span
              className="text-xl font-bold tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Emerson
            </span>
          </div>

          {/* Nikon */}
          <div className="text-[#7A7A7C] hover:text-[#D09947] transition-colors">
            <span
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Nikon
            </span>
          </div>

          {/* Toyota */}
          <div className="flex items-center gap-2 text-[#7A7A7C] hover:text-[#D09947] transition-colors">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <ellipse cx="12" cy="12" rx="10" ry="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="10" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span
              className="text-lg font-bold tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Toyota
            </span>
          </div>

          {/* Festo */}
          <div className="text-[#7A7A7C] hover:text-[#D09947] transition-colors">
            <span
              className="text-xl font-bold tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Festo
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
