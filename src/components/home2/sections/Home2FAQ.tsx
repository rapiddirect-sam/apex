"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home2Button } from "../ui/Home2Button";
import { ChevronDown, ArrowRight, HelpCircle, MessageSquare } from "lucide-react";
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

export function Home2FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="contact" className="py-24 bg-[#000000] relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(208, 153, 71, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(208, 153, 71, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#D09947]/30 rounded mb-6">
            <HelpCircle className="w-4 h-4 text-[#D09947]" />
            <span
              className="text-[#D09947] text-xs font-medium uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Support
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Have Any <span className="text-[#D09947]">Questions?</span>
          </h2>
          <p
            className="text-[#7A7A7C] text-base max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Find answers to common questions about our precision manufacturing services, quality assurance, and production capabilities.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          <Home2Button variant="outline" size="sm">
            View FAQ
          </Home2Button>
          <Home2Button variant="primary" size="sm">
            Get Instant Quote
          </Home2Button>
        </motion.div>

        {/* FAQ Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3
            className="text-xl font-bold text-white uppercase tracking-wide"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Frequently Asked <span className="text-[#D09947]">Questions</span>
          </h3>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "bg-[#4A4A48]/40 border rounded-lg overflow-hidden transition-colors",
                openIndex === index
                  ? "border-[#D09947]"
                  : "border-[#4A4A48]"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span
                  className={cn(
                    "pr-4 text-sm font-medium transition-colors",
                    openIndex === index ? "text-white" : "text-[#C5C6C9]"
                  )}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.question}
                </span>
                <div
                  className={cn(
                    "w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-colors",
                    openIndex === index
                      ? "bg-[#D09947] text-[#000000]"
                      : "bg-[#4A4A48] text-[#7A7A7C]"
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                  />
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
                    <div
                      className="px-5 pb-5 text-[#7A7A7C] text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
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
          className="bg-[#4A4A48]/40 border border-[#4A4A48] rounded-lg p-10 text-center"
        >
          {/* Gold circle icon */}
          <div className="w-14 h-14 bg-[#D09947] rounded flex items-center justify-center mx-auto mb-5">
            <MessageSquare className="w-6 h-6 text-[#000000]" />
          </div>

          <h3
            className="text-2xl font-bold text-white mb-3 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Still Have Questions?
          </h3>
          <p
            className="text-[#7A7A7C] text-sm mb-8 max-w-sm mx-auto"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Our engineering team is ready to help with your manufacturing needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Home2Button variant="outline" size="sm">
              Contact Sales
            </Home2Button>
            <Home2Button variant="primary" size="sm" className="group">
              Request Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Home2Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
