"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Circle } from "lucide-react";

const stats = [
  { value: "±0.01", unit: "mm", label: "Precision" },
  { value: "50K", unit: "+", label: "Projects" },
  { value: "99.8", unit: "%", label: "Accuracy" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end bg-apex-void overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Main image */}
        <Image
          src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80"
          alt="CNC Machine precision manufacturing"
          fill
          priority
          className="object-cover opacity-40"
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-apex-void via-apex-void/60 to-apex-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-apex-void via-transparent to-apex-void/80" />
        {/* Mesh gradient accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(212,160,58,0.08),transparent_50%)]" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Grid lines overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(212,160,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,58,1) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 -right-20 w-[1px] h-[150%] bg-gradient-to-b from-transparent via-gold-primary/30 to-transparent origin-top rotate-[30deg]"
        />
      </div>

      <Container className="relative z-10 pb-12 pt-32 lg:pb-20 lg:pt-40">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Main content - Left side */}
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <Circle className="w-2 h-2 fill-signal text-signal animate-pulse" />
              <span className="text-technical text-gray-400">
                Precision Manufacturing Partner
              </span>
            </motion.div>

            {/* Main headline - Editorial style */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <span className="block text-display text-display-hero text-white mb-2">
                Precision
              </span>
              <span className="block text-display text-display-hero">
                <span className="text-gold-gradient">Manufacturing,</span>
              </span>
              <span className="block text-display text-display-hero text-white/60">
                Intelligent Living
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
            >
              High-precision batch manufacturing with CNC machining, sheet metal,
              and injection molding. ISO-certified quality from prototype to production.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button size="lg" variant="signal">
                Get Instant Quote
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Capabilities
              </Button>
            </motion.div>
          </div>

          {/* Stats - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="border-l border-apex-iron pl-8">
              <p className="text-technical text-gray-500 mb-6">Key Metrics</p>
              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-display text-4xl md:text-5xl text-white">
                        {stat.value}
                      </span>
                      <span className="text-display text-2xl text-gold-primary">
                        {stat.unit}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar - Trusted logos hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-apex-iron/50"
        >
          <div className="flex items-center justify-between">
            <p className="text-technical text-gray-600">
              Trusted by 22,500+ engineers worldwide
            </p>
            <div className="hidden md:flex items-center gap-2 text-gray-600">
              <span className="text-xs">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-4 h-6 border border-gray-600 rounded-full flex items-start justify-center p-1"
              >
                <div className="w-1 h-1.5 bg-gold-primary rounded-full" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
