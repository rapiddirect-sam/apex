"use client";

import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, FileCheck2, PackageCheck } from "lucide-react";
import Link from "next/link";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Material Sourcing and ",
  headingHighlight: "Control",
  description:
    "Materials can be sourced from established domestic and international producers according to project specifications and availability. For each project, material selection is reviewed against the specified grade, form, condition, certification, compliance requirements and production route.",
  qualityCta: "Learn about our quality and documentation approach",
  items: [
    {
      title: "Specified Grade and Form",
      description:
        "Material is sourced against the specified grade, temper, reinforcement, color, stock form and applicable standard.",
      icon: ClipboardCheck,
    },
    {
      title: "Documentation When Required",
      description:
        "Mill certificates, certificates of conformity and lot-related documentation can be reviewed when requested in the quotation scope.",
      icon: FileCheck2,
    },
    {
      title: "Project-Specific Availability",
      description:
        "Final sourcing depends on the specified material, quantity, lead time, geographic availability and approved project requirements.",
      icon: PackageCheck,
    },
  ],
};

export function MaterialsSourcingControl() {
  return (
    <section className="bg-[#34312F] py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(280px,40fr)_minmax(0,60fr)] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="service-section-title">
            <EditableText path="materialsSourcing.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent">
              <EditableText path="materialsSourcing.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
          </h2>
          <p className="service-section-copy mt-6 max-w-[480px]">
            <EditableText path="materialsSourcing.description" defaultValue={DEFAULTS.description} multiline />
          </p>
          <Link href="/quality" className="body-text-link body-text-link--dark mt-6 inline-flex items-center gap-2 text-sm">
            <EditableText path="materialsSourcing.qualityCta" defaultValue={DEFAULTS.qualityCta} />
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="space-y-3">
          {DEFAULTS.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-4 rounded-xl border border-white/10 bg-[#1A1A1A] p-5 sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D09947]/15 text-[#EEC569]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold text-white">
                    <EditableText path={`materialsSourcing.items.${index}.title`} defaultValue={item.title} />
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-[#D1D1D1]">
                    <EditableText path={`materialsSourcing.items.${index}.description`} defaultValue={item.description} multiline />
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
