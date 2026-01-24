"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Plus, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "What tolerances can you achieve?",
    answer: "We achieve tolerances as tight as ±0.01mm for CNC machining and ±0.05mm for standard parts. Our Zeiss CMM equipment verifies critical dimensions to ensure your specifications are met consistently across production runs.",
  },
  {
    question: "How do you ensure quality consistency across batches?",
    answer: "We implement rigorous IPQC (In-Process Quality Control) every 2 hours during production. Combined with first article inspection, final inspection, and full documentation including COC and material certificates, we maintain 99.8% quality rates across all orders.",
  },
  {
    question: "What are your typical lead times?",
    answer: "Standard lead times range from 5-10 business days for prototypes and 2-4 weeks for production runs depending on complexity and quantity. We offer expedited services for urgent projects. You'll receive a specific timeline with your quote.",
  },
  {
    question: "Do you provide material certification?",
    answer: "Yes, we provide full material traceability and certification for all orders. This includes mill certificates, material test reports, and certificates of conformance. We source materials from approved suppliers with documented quality standards.",
  },
  {
    question: "What after-sales support do you offer?",
    answer: "We provide comprehensive after-sales support including technical consultation, design optimization for future orders, quality issue resolution, and ongoing engineering support. Our dedicated project managers are available to assist with any concerns.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-apex-void relative overflow-hidden" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(212,160,58,0.05),transparent_50%)]" />

      <Container size="narrow" className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-technical text-gold-primary mb-4">
            Frequently Asked
          </p>
          <h2 className="text-display text-display-xl text-white">
            Questions?
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-2 mb-20">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "border transition-colors",
                openIndex === index
                  ? "border-gold-primary/30 bg-apex-slate"
                  : "border-apex-iron/20 hover:border-apex-iron/40"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={cn(
                  "pr-8 transition-colors",
                  openIndex === index ? "text-white" : "text-gray-400"
                )}>
                  {item.question}
                </span>
                <div className={cn(
                  "w-8 h-8 border flex items-center justify-center flex-shrink-0 transition-all",
                  openIndex === index
                    ? "border-gold-primary bg-gold-primary/10 rotate-45"
                    : "border-apex-iron/30"
                )}>
                  <Plus className={cn(
                    "w-4 h-4 transition-colors",
                    openIndex === index ? "text-gold-primary -rotate-45" : "text-gray-500"
                  )} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-apex-deep border border-apex-iron/20 p-10 lg:p-16 text-center"
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gold-primary/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gold-primary/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gold-primary/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gold-primary/30" />

          <h3 className="text-display text-3xl text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Our engineering team is ready to help with your manufacturing needs.
            Get in touch today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline">
              Contact Sales
            </Button>
            <Button variant="signal">
              Request a Quote
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
