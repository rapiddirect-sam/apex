"use client";

import { motion } from "framer-motion";
import { Shield, Target, TrendingUp, CheckCircle, Award } from "lucide-react";
import Image from "next/image";

const metrics = [
  {
    icon: Target,
    value: "±0.001",
    label: "Zeiss CMM Verification",
    description: "Every critical dimension verified by world-class metrology.",
    featured: false,
  },
  {
    icon: TrendingUp,
    value: "2-Hr",
    label: "Dynamic IPQC",
    description: "In-process quality control every 2 hours for consistency.",
    featured: false,
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Full Documentation",
    description: "Digital OQC, Material Certs, and DFM reports included.",
    featured: false,
  },
  {
    icon: Award,
    value: "0.2%",
    label: "ISO Certified",
    description: "ISO 9001:2015 & ISO 13485 & ISO 14001 standards backed.",
    featured: true,
  },
];

const certificates = [
  {
    name: "ISO 9001",
    subtitle: "Quality Management",
    number: "9001",
  },
  {
    name: "ISO 13485",
    subtitle: "Management System",
    number: "13485",
  },
  {
    name: "ISO 14001",
    subtitle: "Environmental Management",
    number: "14001",
  },
];

export function Home3Certifications() {
  return (
    <section className="py-24 bg-[#1A1A1A]">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#D09947] rounded-full mb-8">
              <Shield className="w-4 h-4 text-[#D09947]" />
              <span className="text-[#D09947] text-xs font-medium tracking-[0.1em] uppercase">
                Quality Assurance
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-[-0.02em]">
              Your Trust,
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#D09947] mb-6 tracking-[-0.02em]">
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
            <div className="flex gap-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative w-40 h-52 bg-white rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    transform: `rotate(${index === 0 ? -3 : index === 2 ? 3 : 0}deg)`,
                  }}
                >
                  {/* Certificate design */}
                  <div className="absolute inset-0 p-3 flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-2">
                      <div className="text-[7px] text-gray-500 uppercase tracking-wider">
                        {index === 0 ? "Quality Management" : index === 1 ? "Management System" : "Environmental Management"}
                      </div>
                      <div className="text-[6px] text-gray-400 uppercase">
                        System Certificate
                      </div>
                    </div>

                    {/* Vertical ISO number */}
                    <div className="flex-1 flex items-center justify-center">
                      <div
                        className="text-4xl font-bold tracking-tight"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          transform: "rotate(180deg)",
                          color: index === 0 ? "#1e40af" : index === 1 ? "#dc2626" : "#16a34a"
                        }}
                      >
                        {cert.number}
                      </div>
                    </div>

                    {/* Bottom seal */}
                    <div className="flex justify-center mt-2">
                      <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center">
                        <div className="text-[5px] text-blue-600 font-bold text-center leading-tight">
                          IAF<br/>IAS
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-[#2A2A2A] rounded-2xl p-6 transition-all duration-300 ${
                  metric.featured
                    ? "border-2 border-[#D09947]"
                    : "border border-[#3A3A3A]"
                }`}
              >
                {/* Icon and Value Row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#3A3A3A] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#D09947]" />
                  </div>
                  <span className="text-2xl font-bold text-white">
                    {metric.value}
                  </span>
                </div>

                {/* Label */}
                <h4 className="text-white font-semibold text-sm mb-2">
                  {metric.label}
                </h4>

                {/* Description */}
                <p className="text-[#888888] text-xs leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
