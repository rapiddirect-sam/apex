"use client";

import { motion } from "framer-motion";
import { Shield, Target, TrendingUp, CheckCircle, Award } from "lucide-react";

const metrics = [
  {
    icon: Target,
    value: "±0.001",
    label: "Zeiss CMM Verification",
    description: "Every critical dimension verified by world-class metrology.",
  },
  {
    icon: TrendingUp,
    value: "2-Hr",
    label: "Dynamic IPQC",
    description: "In-process quality control every 2 hours for consistency.",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Full Documentation",
    description: "Digital OQC, Material Certs, and DFM reports included.",
  },
  {
    icon: Award,
    value: "0.2%",
    label: "ISO Certified",
    description: "ISO 9001:2015 & ISO 13485 & ISO 14001 standards backed.",
  },
];

const certificates = [
  {
    name: "ISO 9001",
    subtitle: "Quality Management",
  },
  {
    name: "ISO 13485",
    subtitle: "Management System",
  },
  {
    name: "ISO 14001",
    subtitle: "Environmental Management",
  },
];

export function Home2Certifications() {
  return (
    <section className="py-24 bg-[#2E2C2B] relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(208, 153, 71, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 153, 71, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section - 12-col asymmetric */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          {/* Left - Header (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#D09947]/30 rounded mb-6">
              <Shield className="w-4 h-4 text-[#D09947]" />
              <span
                className="text-[#D09947] text-xs font-medium uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Quality Assurance
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-2"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Your Trust,
            </h2>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#D09947] uppercase tracking-tight mb-6"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Verified by Data.
            </h2>
            <p
              className="text-[#7A7A7C] text-base max-w-lg leading-relaxed"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              We exceed standards with rigorous testing and verification for real-world applications.
            </p>
          </motion.div>

          {/* Right - Certificate Images (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end items-center"
          >
            <div className="flex gap-5">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative w-36 h-48 bg-[#F9EBBC] rounded-lg overflow-hidden shadow-xl border border-[#D09947]/30"
                  style={{
                    transform: `rotate(${index === 0 ? -4 : index === 2 ? 4 : 0}deg)`,
                  }}
                >
                  {/* Certificate design */}
                  <div className="absolute inset-0 p-3">
                    <div className="w-full h-full border-2 border-[#D09947]/30 rounded flex flex-col items-center justify-center p-3">
                      <div
                        className="text-[8px] text-[#7F4D0F] uppercase tracking-wider mb-1 text-center"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {cert.subtitle}
                      </div>
                      <div
                        className="text-[7px] text-[#7F4D0F]/70 uppercase mb-3"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        System Certificate
                      </div>
                      <div
                        className="text-[#D09947] font-bold text-2xl rotate-90 my-4"
                        style={{ fontFamily: "var(--font-archivo)" }}
                      >
                        {cert.name.replace("ISO ", "")}
                      </div>
                      <div className="mt-auto">
                        <div className="w-12 h-12 rounded-full border-2 border-[#D09947] flex items-center justify-center">
                          <span
                            className="text-[6px] text-[#D09947] font-medium"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            CERTIFIED
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom - Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#4A4A48]/40 border border-[#4A4A48] hover:border-[#D09947]/50 rounded-lg p-6 transition-colors duration-300 group"
              >
                {/* Icon and Value Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#D09947]/10 border border-[#D09947]/30 group-hover:bg-[#D09947]/20 flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-[#D09947]" />
                  </div>
                  <span
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {metric.value}
                  </span>
                </div>

                {/* Label */}
                <h4
                  className="text-white font-bold text-base mb-2 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  {metric.label}
                </h4>

                {/* Description */}
                <p
                  className="text-[#7A7A7C] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative line with diamond */}
        <div className="flex items-center justify-center">
          <div className="flex-1 max-w-sm h-px bg-gradient-to-r from-transparent to-[#D09947]/30" />
          <div className="w-4 h-4 bg-[#D09947] rotate-45 mx-6" />
          <div className="flex-1 max-w-sm h-px bg-gradient-to-l from-transparent to-[#D09947]/30" />
        </div>
      </div>
    </section>
  );
}
