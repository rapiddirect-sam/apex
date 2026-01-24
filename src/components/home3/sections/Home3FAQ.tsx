"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Settings } from "lucide-react";
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
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(
            ellipse 80% 50% at 50% 0%,
            rgba(208,153,71,0.15),
            transparent 50%
          ),
          #1A1A1A
        `
      }}
    >
      {/* Constrained width container - 960px max */}
      <div className="max-w-[960px] mx-auto px-6 lg:px-8">
        {/* Section Label Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2A2A2A] border border-[#3A3A3A] rounded-full">
            <Sparkles className="w-4 h-4 text-[#D09947]" />
            <span className="text-[#D09947] text-xs font-medium tracking-[0.1em] uppercase">
              Expert Solutions
            </span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-white mb-4 tracking-[-0.02em]" style={{ fontSize: "68px", fontWeight: 800 }}>
            Have Any <span className="text-[#EEC569]">Questions?</span>
          </h2>
          <p className="max-w-xl mx-auto leading-relaxed" style={{ color: "#888888", fontSize: "21px" }}>
            Find answers to common questions about our precision manufacturing services, quality standards, and production capabilities
          </p>
        </motion.div>

        {/* FAQ Section Title with underline - 48px margin bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 mt-16"
        >
          <h3 className="text-white tracking-[-0.01em] mb-3" style={{ fontSize: "41px", fontWeight: 800 }}>
            Frequently Asked <span className="text-[#EEC569]">Questions</span>
          </h3>
          {/* Gold underline */}
          <div className="w-12 h-1 bg-[#D09947] mx-auto rounded-full" />
        </motion.div>

        {/* FAQ Accordion - Card Style with proper spacing */}
        <div className="space-y-3 mb-12">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#2A2A2A] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center gap-4 min-h-[72px] py-5 px-6 text-left group"
              >
                {/* Number Badge */}
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "68px",
                    height: "68px",
                    background: "#EEC569",
                  }}
                >
                  <span className="font-bold" style={{ color: "#000000", fontSize: "28px" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Question Text - max 85% width, larger font */}
                <span className="flex-1 font-semibold max-w-[85%] leading-snug" style={{ fontSize: "21px", color: "#FFFFFF" }}>
                  {item.question}
                </span>

                {/* Chevron with animation - larger size */}
                <div className="pl-4 flex-shrink-0">
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-all duration-[250ms] ease-out text-[#D09947]",
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
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    {/* Answer with proper spacing - mt-3, pb-7 */}
                    <div className="px-6 pb-7 pl-[76px]">
                      <p className="text-[#888888] text-[15px] leading-[1.7] mt-1">
                        {item.answer}
                      </p>
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
          className="bg-[#2A2A2A] rounded-2xl p-10 text-center border border-[#3A3A3A]"
        >
          {/* Icon */}
          <div className="w-12 h-12 bg-[#3A3A3A] rounded-xl flex items-center justify-center mx-auto mb-5">
            <Sparkles className="w-6 h-6 text-[#D09947]" />
          </div>

          <h3 style={{ fontSize: "30px", fontWeight: 800, color: "#FFFFFF", marginBottom: "12px" }}>
            Still Have Questions?
          </h3>
          <p style={{ fontSize: "21px", color: "#F9EBBC", maxWidth: "480px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.5, marginBottom: "32px" }}>
            Our engineering team is ready to discuss your specific manufacturing requirements and provide tailored solutions for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary CTA */}
            <button
              className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #D09947 0%, #EEC569 100%)",
                color: "#000000",
                fontWeight: 700,
                fontSize: "16px",
                padding: "14px 24px",
                borderRadius: "8px",
                boxShadow: "0 0 50px rgba(208,153,71,0.7)",
                border: "2px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 60px rgba(238,197,105,0.8)";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.border = "2px solid #F9EBBC";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 50px rgba(208,153,71,0.7)";
                e.currentTarget.style.color = "#000000";
                e.currentTarget.style.border = "2px solid transparent";
              }}
            >
              Contact Sales Team
              <Sparkles className="w-4 h-4" />
            </button>
            {/* Secondary CTA */}
            <button
              className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #D09947 0%, #EEC569 100%)",
                color: "#000000",
                fontWeight: 700,
                fontSize: "16px",
                padding: "14px 24px",
                borderRadius: "8px",
                boxShadow: "0 0 50px rgba(208,153,71,0.7)",
                border: "2px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 60px rgba(238,197,105,0.8)";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.border = "2px solid #F9EBBC";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 50px rgba(208,153,71,0.7)";
                e.currentTarget.style.color = "#000000";
                e.currentTarget.style.border = "2px solid transparent";
              }}
            >
              Request a Quote
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
