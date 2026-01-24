"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "50,000", unit: "m²", label: "Factory Area" },
  { value: "8", unit: "", label: "Production Shops" },
  { value: "300", unit: "+", label: "Machines" },
  { value: "98", unit: "%", label: "On-Time Delivery" },
];

export function Facilities() {
  return (
    <section className="py-32 bg-apex-slate relative overflow-hidden" id="capabilities">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 1px, rgba(212,160,58,1) 1px, rgba(212,160,58,1) 2px)`,
        backgroundSize: '8px 8px'
      }} />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Image with overlay */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              {/* Main image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
                  alt="Manufacturing facility floor"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-apex-void via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 lg:right-auto lg:-left-8 bg-apex-void border border-apex-iron/30 p-6 backdrop-blur-sm"
              >
                <p className="text-technical text-gray-500 mb-2">Location</p>
                <p className="text-display text-2xl text-white">Shenzhen, China</p>
                <p className="text-gray-500 text-sm mt-1">Advanced Manufacturing District</p>
              </motion.div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold-primary/30" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold-primary/30" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-technical text-signal mb-4">
              Our Capabilities
            </p>
            <h2 className="text-display text-display-xl text-white mb-8">
              Vertically Integrated
              <br />
              <span className="text-gold-gradient">Manufacturing Hub</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Our 50,000 m² facility in Shenzhen operates 8 specialized production
              shops with 300+ advanced machines. End-to-end manufacturing including
              CNC machining, injection molding, sheet metal, 3D printing, surface
              treatment, and quality inspection—all under one roof.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-display text-4xl lg:text-5xl text-white group-hover:text-gold-primary transition-colors">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-display text-xl text-gold-primary">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
