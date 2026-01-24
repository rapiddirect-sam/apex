"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Check, ArrowUpRight } from "lucide-react";

const features = [
  "Free DFM analysis & design optimization",
  "Process optimization and validation",
  "Quality inspection at every stage",
  "Reduce trial costs with engineering review",
  "Expert consultation available 24/7",
  "Dedicated project manager",
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-apex-void relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(212,160,58,0.04),transparent_50%)]" />

      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
                  alt="Engineer reviewing parts"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-apex-void/80 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-px h-32 bg-gradient-to-b from-gold-primary to-transparent" />
              <div className="absolute top-8 left-8 w-32 h-px bg-gradient-to-r from-gold-primary to-transparent" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="lg:pl-8">
              <p className="text-technical text-signal mb-4">
                Why Engineers Choose Us
              </p>

              <h2 className="text-display text-display-xl text-white mb-4">
                Comprehensive
              </h2>
              <h2 className="text-display text-display-xl text-gold-gradient mb-8">
                Free Services
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                We invest in your success with complimentary engineering support,
                design optimization, and quality assurance—reducing your time
                and cost to production.
              </p>

              {/* Feature List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-5 h-5 mt-0.5 border border-gold-primary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-primary/20 transition-colors">
                      <Check className="w-3 h-3 text-gold-primary" />
                    </div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Button variant="signal">
                  Upload Your Design
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
