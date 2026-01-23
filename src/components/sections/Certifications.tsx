"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Shield, Clock, FileText, Award } from "lucide-react";

const certifications = ["ISO 9001:2015", "ISO 13485", "ISO 14001"];

const qualityStats = [
  {
    icon: Shield,
    value: "±0.001",
    title: "Zeiss CMM Verification",
    description: "Every critical dimension verified by world-class metrology.",
  },
  {
    icon: Clock,
    value: "2-Hr",
    title: "Dynamic IPQC",
    description: "In-process quality control every 2 hours for consistency.",
  },
  {
    icon: FileText,
    value: "100%",
    title: "Full Documentation",
    description: "Digital COC, Material Certs, and DFM reports included.",
  },
  {
    icon: Award,
    value: "0.2%",
    title: "ISO Certified",
    description: "ISO 9001:2015 & ISO 13485 & ISO 14001 standards backed.",
  },
];

export function Certifications() {
  return (
    <section className="py-24 bg-apex-charcoal">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold-primary text-sm uppercase tracking-widest mb-3">
            QUALITY ASSURANCE
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-apex-white">
            YOUR TRUST, VERIFIED BY DATA
          </h2>
        </motion.div>

        {/* Certifications Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {certifications.map((cert) => (
            <div
              key={cert}
              className="bg-apex-gray/50 backdrop-blur-sm rounded-xl px-8 py-6 border border-gold-primary/20 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-gold-primary" />
              </div>
              <span className="font-display text-xl text-apex-white">
                {cert}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Quality Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-apex-gray rounded-2xl p-6 border border-apex-border/10 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gold-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold-primary" />
                </div>
                <div className="font-display text-3xl text-gold-primary mb-2">
                  {stat.value}
                </div>
                <h3 className="font-semibold text-apex-white mb-2">
                  {stat.title}
                </h3>
                <p className="text-apex-text-secondary text-sm">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
