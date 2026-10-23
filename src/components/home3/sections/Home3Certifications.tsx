"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  titleWhiteLine1: "Your Trust,",
  titleHighlightLine2: "Verified by Data",
  description:
    "Quality controls, inspection planning and documented records are aligned to the requirements that matter to each program.",
  qualityLinkLabel: "Explore Quality Assurance",
  metrics: [
    {
      label: "Zeiss CMM Verification",
      description: "Critical dimensions verified against drawing requirements.",
    },
    {
      value: "2-Hr",
      label: "2-Hour Dynamic IPQC",
      description: "In-process checks scheduled every two hours, where applicable.",
    },
    {
      label: "FAI & Production Records",
      description: "FAI and records defined to match project requirements.",
    },
    {
      label: "ISO Certified",
      description: "Certified to ISO 9001:2015, 13485:2016 and 14001:2015.",
    },
  ],
};

const metricIcons = [Target, TrendingUp, CheckCircle, Award];

export function Home3Certifications() {
  return (
    <section className="overflow-hidden bg-[#2B2826] py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="section-title">
            <EditableText
              path="certifications.titleWhiteLine1"
              defaultValue={DEFAULTS.titleWhiteLine1}
            />{" "}
            <span className="service-title-accent">
              <EditableText
                path="certifications.titleHighlightLine2"
                defaultValue={DEFAULTS.titleHighlightLine2}
              />
            </span>
          </h2>
          <p className="body-copy mx-auto mt-5 max-w-2xl">
            <EditableText
              path="certifications.description"
              defaultValue={DEFAULTS.description}
              multiline
            />
          </p>
          <Link
            href="/quality"
            className="body-text-link body-text-link--dark mt-5 inline-flex items-center gap-2 text-sm"
          >
            <EditableText
              path="homeCertifications.qualityLinkLabel"
              defaultValue={DEFAULTS.qualityLinkLabel}
            />
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

        {/* Bottom - Metrics Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DEFAULTS.metrics.map((metric, index) => {
            const Icon = metricIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-[#D09947]/25 bg-[#0D0D0D] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D09947]/60"
                style={{
                  background: `
                    radial-gradient(
                      60% 50% at 50% 0%,
                      rgba(249,235,188,0.08),
                      rgba(0,0,0,0) 65%
                    ),
                    #0D0D0D
                  `,
                }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3A3A3A]">
                  <Icon className="h-5 w-5 text-[#D09947]" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold leading-snug text-[#EEC569]">
                  <EditableText
                    path={`certifications.metrics.${index}.label`}
                    defaultValue={metric.label}
                  />
                </h3>
                <p className="body-copy mt-3 text-sm">
                  <EditableText
                    path={`certifications.metrics.${index}.description`}
                    defaultValue={metric.description}
                    multiline
                  />
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
