"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management" },
  { name: "ISO 13485", description: "Medical Devices" },
  { name: "ISO 14001", description: "Environmental" },
];

const qualityMetrics = [
  {
    value: "±0.001",
    label: "Zeiss CMM Verification",
    description: "Every critical dimension verified by world-class metrology equipment.",
  },
  {
    value: "2-Hr",
    label: "Dynamic IPQC",
    description: "In-process quality control every 2 hours for batch consistency.",
  },
  {
    value: "100%",
    label: "Full Documentation",
    description: "Digital COC, material certs, and DFM reports included with every order.",
  },
  {
    value: "0.2%",
    label: "Defect Rate",
    description: "Industry-leading quality backed by ISO certified processes.",
  },
];

export function Certifications() {
  return (
    <section className="py-32 bg-apex-slate relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(212,160,58,1) 1px, rgba(212,160,58,1) 2px)`,
        backgroundSize: '8px 8px'
      }} />

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-technical text-gold-primary mb-4">
            Quality Assurance
          </p>
          <h2 className="text-display text-display-xl text-white mb-6">
            Your Trust,
            <br />
            <span className="text-gold-gradient">Verified by Data</span>
          </h2>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-apex-deep border border-apex-iron/30 p-6 hover:border-gold-primary/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                {/* Badge icon */}
                <div className="w-12 h-12 border border-gold-primary/30 flex items-center justify-center rotate-45 group-hover:border-gold-primary transition-colors">
                  <div className="w-6 h-6 bg-gold-primary/20 -rotate-45" />
                </div>
                <div>
                  <p className="text-display text-lg text-white">{cert.name}</p>
                  <p className="text-sm text-gray-500">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quality Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-apex-iron/20">
          {qualityMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-apex-slate p-8 group hover:bg-apex-deep transition-colors"
            >
              <div className="text-display text-4xl text-gold-primary mb-4 group-hover:text-gold-hot transition-colors">
                {metric.value}
              </div>
              <h3 className="text-white font-medium mb-2">{metric.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
