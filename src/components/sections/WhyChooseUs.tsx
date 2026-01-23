"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckSquare, Upload } from "lucide-react";

const features = [
  "Full-spectrum support including DFM analysis",
  "Process optimization and design validation",
  "Quality inspection at every stage",
  "Reduce trial costs with free engineering verification",
  "Expert technical consultation available 24/7",
  "Dedicated project manager for your orders",
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-apex-black">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
                alt="Engineer in factory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-apex-black/60 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-gold-primary/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gold-primary text-sm uppercase tracking-widest mb-3">
              WHY ENGINEERS CHOOSE APEXBATCH
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-apex-white mb-8">
              <span className="text-gold-primary">01</span> COMPREHENSIVE
              <br />
              FREE SERVICES
            </h2>

            {/* Feature List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <CheckSquare className="w-5 h-5 text-gold-primary mt-0.5 flex-shrink-0" />
                  <span className="text-apex-white/90">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-apex-gray/50 rounded-xl p-6 border border-gold-primary/20">
              <p className="text-apex-text-secondary mb-4">
                Get free engineering review before production.
              </p>
              <Button>
                <Upload className="mr-2 w-5 h-5" />
                Upload Your Design
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
