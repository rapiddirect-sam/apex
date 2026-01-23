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

export function Home3Certifications() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#141414]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section - Two columns */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#D4A03A]/50 rounded-full mb-8">
              <Shield className="w-5 h-5 text-[#D4A03A]" />
              <span className="text-[#D4A03A] text-sm font-medium tracking-wider uppercase">
                Quality Assurance
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Your Trust,
            </h2>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#D4A03A] mb-6"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              Verified by Data.
            </h2>
            <p className="text-[#888888] text-base max-w-lg leading-relaxed">
              We exceed standards with rigorous testing and verification for real-world applications.
            </p>
          </motion.div>

          {/* Right - Certificate Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end items-center"
          >
            <div className="flex gap-5">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative w-36 h-48 bg-white rounded-xl overflow-hidden shadow-xl"
                  style={{
                    transform: `rotate(${index === 0 ? -4 : index === 2 ? 4 : 0}deg)`,
                  }}
                >
                  {/* Certificate design */}
                  <div className="absolute inset-0 p-3">
                    <div className="w-full h-full border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center p-3">
                      <div className="text-[8px] text-gray-500 uppercase tracking-wider mb-1 text-center">
                        {cert.subtitle}
                      </div>
                      <div className="text-[7px] text-gray-400 uppercase mb-3">
                        System Certificate
                      </div>
                      <div className="text-green-600 font-bold text-2xl rotate-90 my-4">
                        {cert.name.replace("ISO ", "")}
                      </div>
                      <div className="mt-auto">
                        <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center">
                          <span className="text-[6px] text-blue-500 font-medium">CERTIFIED</span>
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#D4A03A] rounded-2xl p-6 transition-colors duration-300 group"
              >
                {/* Icon and Value Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2A2A2A] group-hover:bg-[#D4A03A]/10 flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-[#888888] group-hover:text-[#D4A03A] transition-colors" />
                  </div>
                  <span className="text-3xl font-bold text-white">
                    {metric.value}
                  </span>
                </div>

                {/* Label */}
                <h4 className="text-white font-semibold text-base mb-2">
                  {metric.label}
                </h4>

                {/* Description */}
                <p className="text-[#777777] text-sm leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative line with diamond */}
        <div className="flex items-center justify-center">
          <div className="flex-1 max-w-sm h-px bg-gradient-to-r from-transparent to-[#333333]" />
          <div className="w-4 h-4 bg-[#D4A03A] rotate-45 mx-6" />
          <div className="flex-1 max-w-sm h-px bg-gradient-to-l from-transparent to-[#333333]" />
        </div>
      </div>
    </section>
  );
}
