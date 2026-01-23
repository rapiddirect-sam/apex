"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "50,000", unit: "m²", label: "Total Factory Area" },
  { value: "8", unit: "", label: "Specialized Production Shops" },
  { value: "300+", unit: "", label: "Advanced Equipment" },
  { value: "98%", unit: "", label: "On-Time Delivery" },
];

export function Facilities() {
  return (
    <section className="py-24 bg-apex-charcoal" id="capabilities">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-gold-primary text-sm uppercase tracking-widest mb-3">
            STATE-OF-THE-ART MANUFACTURING ENVIRONMENT
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-apex-white">
            OUR FACILITIES
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Description & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display text-2xl text-gold-primary mb-6">
              ADVANCED MANUFACTURING HUB
            </h3>
            <p className="text-apex-text-secondary text-lg leading-relaxed mb-10">
              Located in Shenzhen&apos;s advanced manufacturing district, our
              50,000 m² vertically integrated facility operates 8 specialized
              production shops and is equipped with 300+ advanced machines. We
              support end-to-end manufacturing in one location, including CNC
              machining, precision injection molding, sheet metal fabrication,
              3D printing, as well as in-house surface treatment and quality
              inspection lines.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-apex-gray/50 rounded-xl p-6 border border-apex-border/10"
                >
                  <div className="font-display text-3xl md:text-4xl text-gold-primary">
                    {stat.value}
                    <span className="text-xl">{stat.unit}</span>
                  </div>
                  <div className="text-apex-text-secondary text-sm mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
                alt="Manufacturing facility floor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-apex-black/50 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold-primary/30 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
