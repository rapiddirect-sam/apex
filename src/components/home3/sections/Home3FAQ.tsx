"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home3Button } from "../ui/Home3Button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "What manufacturing tolerances can ApexBatch achieve for precision components?",
    answer: "We achieve tolerances as tight as ±0.01mm for CNC machining and ±0.05mm for standard parts. Our Zeiss CMM equipment verifies critical dimensions to ensure your specifications are met consistently across production runs.",
  },
  {
    question: "How does ApexBatch ensure quality consistency across production batches?",
    answer: "We implement rigorous IPQC (In-Process Quality Control) every 2 hours during production. Combined with first article inspection, final inspection, and full documentation including COC and material certificates, we maintain 99.8% quality rates across all orders.",
  },
  {
    question: "What is your typical lead time for prototype vs. batch production?",
    answer: "Standard lead times range from 5-10 business days for prototypes and 2-4 weeks for production runs depending on complexity and quantity. We offer expedited services for urgent projects.",
  },
  {
    question: "How does ApexBatch handle material selection and certification for regulated industries?",
    answer: "Yes, we provide full material traceability and certification for all orders. This includes mill certificates, material test reports, and certificates of conformance. We source materials from approved suppliers with documented quality standards.",
  },
  {
    question: "What after-sales solutions does ApexBatch provide?",
    answer: "We provide comprehensive after-sales support including technical consultation, design optimization for future orders, quality issue resolution, and ongoing engineering support. Our dedicated project managers are available to assist with any concerns.",
  },
];

export function Home3FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Have Any <span className="text-[#D4A03A]" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>Questions?</span>
          </h2>
          <p className="text-[#777777] text-sm max-w-lg mx-auto">
            Find answers to common questions about our precision manufacturing services, quality assurance, and production capabilities.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12"
        >
          <Home3Button variant="outline" size="sm">
            View FAQ
          </Home3Button>
          <Home3Button variant="primary" size="sm">
            Get Instant Quote
          </Home3Button>
        </motion.div>

        {/* FAQ Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h3 className="text-xl font-semibold text-white">
            Frequently Asked <span className="text-[#D4A03A]">Questions</span>
          </h3>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3 mb-12">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "bg-[#141414] border rounded-lg overflow-hidden transition-colors",
                openIndex === index
                  ? "border-[#D4A03A]"
                  : "border-[#2A2A2A]"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className={cn(
                  "pr-4 text-sm font-medium transition-colors",
                  openIndex === index ? "text-white" : "text-[#AAAAAA]"
                )}>
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 flex-shrink-0 transition-transform duration-300",
                    openIndex === index ? "text-[#D4A03A] rotate-180" : "text-[#666666]"
                  )}
                />
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
                    <div className="px-4 pb-4 text-[#777777] text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-8 text-center"
        >
          {/* Gold circle icon */}
          <div className="w-12 h-12 bg-[#D4A03A] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-[#0A0A0A] text-xl font-bold">?</span>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">
            Still Have Questions?
          </h3>
          <p className="text-[#777777] text-sm mb-6 max-w-sm mx-auto">
            Our engineering team is ready to help with your manufacturing needs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Home3Button variant="outline" size="sm">
              Contact Sales
            </Home3Button>
            <Home3Button variant="primary" size="sm" className="group">
              Request Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Home3Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
