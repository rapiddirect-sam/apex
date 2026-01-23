"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Upload, FileSearch, Settings, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Your Design",
    description: "Upload CAD files and basic requirements.",
    icon: Upload,
    tags: ["STEP", "IGES", "STL", "PDF", "3D Models"],
  },
  {
    number: "02",
    title: "Engineering Review & Quotation",
    description:
      "Within 24 hours, we provide manufacturability review and pricing.",
    icon: FileSearch,
    tags: ["Automated Pricing", "DFM Analysis", "Material Selection"],
  },
  {
    number: "03",
    title: "Production & Quality Control",
    description:
      "Once confirmed, we start production with controlled processes.",
    icon: Settings,
    tags: ["CNC Machining", "Quality Control", "Progress Updates"],
  },
  {
    number: "04",
    title: "Delivery & Ongoing Support",
    description: "Parts are shipped with tracking and inspection reports.",
    icon: Truck,
    tags: ["CMM Inspection", "Quality Certs", "Fast Shipping"],
  },
];

export function Process() {
  return (
    <section className="py-24 bg-apex-charcoal" id="process">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold-primary text-sm uppercase tracking-widest mb-3">
            HOW TO WORK WITH APEXBATCH
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-apex-white mb-4">
            A CLEAR, GUIDED PROCESS
          </h2>
          <p className="text-apex-text-secondary text-lg max-w-2xl mx-auto">
            That takes you from design to delivery - without unnecessary
            complexity.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-primary/20 via-gold-primary to-gold-primary/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-apex-gray border-2 border-gold-primary flex items-center justify-center">
                    <Icon className="w-7 h-7 text-gold-primary" />
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-gold-primary text-apex-black text-xs font-bold px-2 py-0.5 rounded">
                    STEP {step.number}
                  </div>

                  {/* Content Card */}
                  <div className="bg-apex-gray/50 rounded-xl p-6 border border-apex-border/10 text-center">
                    <h3 className="font-display text-xl text-apex-white mb-3">
                      {step.title.toUpperCase()}
                    </h3>
                    <p className="text-apex-text-secondary text-sm mb-4">
                      {step.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-apex-charcoal text-gold-primary/80 rounded border border-gold-dark/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
