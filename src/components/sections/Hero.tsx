"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

const features = [
  "30-60 Minute quote response",
  "±0.01 -0.05mm Precision control",
  "ISO-certified Quality system",
  "Free Technical Support",
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50K+", label: "Projects Done" },
  { value: "99.8%", label: "Accuracy Rate" },
];

const socialProof = [
  { count: "25M+", text: "Parts Created For 22,500+ Happy Customers" },
  { count: "20M+", text: "Ads Created For 21,500+ Happy Customers" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-apex-black overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80"
          alt="CNC Machine at work"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-apex-black via-apex-black/90 to-apex-black/70" />
      </div>

      <Container className="relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-apex-white leading-none tracking-wide mb-4">
              PRECISION MANUFACTURING,
              <br />
              <span className="text-gold-gradient">INTELLIGENT LIVING</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-apex-text-secondary mb-8">
              Your Partner for High-Precision Batch Manufacturing
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg">
                Get Instant Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Social Proof */}
            <div className="space-y-3 mb-8">
              {socialProof.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold-primary text-gold-primary"
                      />
                    ))}
                  </div>
                  <span className="text-apex-white font-semibold">
                    {item.count}
                  </span>
                  <span className="text-apex-text-secondary">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-apex-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-apex-border/20"
          >
            <h3 className="font-display text-2xl text-apex-white mb-6">
              WHY CHOOSE US
            </h3>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-primary/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-gold-primary" />
                  </div>
                  <span className="text-apex-white text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-apex-charcoal/90 backdrop-blur-sm border-t border-apex-border/20"
      >
        <Container>
          <div className="grid grid-cols-3 divide-x divide-apex-border/20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-6">
                <div className="font-display text-3xl md:text-4xl text-gold-primary">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-apex-text-secondary mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
