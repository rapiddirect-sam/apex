"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Submit Design",
    description: "Upload CAD files (STEP, IGES, STL) and specifications. Our system provides instant feedback on manufacturability.",
    highlight: "30-60 min response",
  },
  {
    number: "02",
    title: "Review & Quote",
    description: "Our engineers analyze your design, optimize for manufacturing, and provide detailed pricing with DFM recommendations.",
    highlight: "24hr turnaround",
  },
  {
    number: "03",
    title: "Production",
    description: "Once approved, production begins with real-time progress updates. In-process quality control every 2 hours.",
    highlight: "Live tracking",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Parts ship with full documentation including CMM reports, material certs, and certificates of conformance.",
    highlight: "Global shipping",
  },
];

export function Process() {
  return (
    <section className="py-32 bg-apex-deep relative overflow-hidden" id="process">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_50%,rgba(212,160,58,0.04),transparent_50%)]" />

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <p className="text-technical text-gold-primary mb-4">
            How It Works
          </p>
          <h2 className="text-display text-display-xl text-white mb-6">
            A Clear Path
            <br />
            <span className="text-gray-500">from Design to Delivery</span>
          </h2>
          <p className="text-gray-400 text-lg">
            No unnecessary complexity. Just a streamlined process that gets your parts made right, on time.
          </p>
        </motion.div>

        {/* Process Steps - Horizontal timeline on desktop */}
        <div className="relative">
          {/* Connection line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-px">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-apex-iron/30" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-gradient-to-r from-gold-primary via-gold-primary to-gold-dark origin-left"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Step indicator */}
                <div className="relative z-10 mb-8">
                  <div className="w-[120px] h-[120px] relative">
                    {/* Outer ring */}
                    <div className="absolute inset-0 border border-apex-iron/30 rotate-45" />
                    {/* Inner content */}
                    <div className="absolute inset-2 bg-apex-deep flex items-center justify-center rotate-45">
                      <span className="text-display text-3xl text-gold-primary -rotate-45">
                        {step.number}
                      </span>
                    </div>
                    {/* Highlight dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-signal rounded-full" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:pr-8">
                  <h3 className="text-display text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  {/* Highlight badge */}
                  <span className="inline-block px-3 py-1 text-xs text-gold-primary border border-gold-dark/30 bg-gold-dark/10">
                    {step.highlight}
                  </span>
                </div>

                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-[60px] top-[120px] bottom-0 w-px bg-gradient-to-b from-gold-primary/50 to-transparent h-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
