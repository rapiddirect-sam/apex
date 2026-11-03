"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Start Your Injection Molding Project",
  description: "Upload your CAD model and drawings for an engineering review of the molding route, tooling approach, critical requirements, and production plan.",
  primaryCta: "Request an Injection Molding Quote",
  secondaryCta: "Discuss Your Part With an Engineer",
};

export function IMCTA({ content = DEFAULTS }: { content?: typeof DEFAULTS }) {
  return (
    <section className="relative flex min-h-[440px] items-center overflow-hidden py-16 sm:min-h-[480px] sm:py-[72px] lg:min-h-[520px] lg:py-[88px]">
      <Image
        src="/injection-molding/apexbatch-plastic-injection-molding-production-line.avif"
        alt="ApexBatch plastic injection molding production line"
        fill
        unoptimized
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/[0.90] via-black/[0.80] to-black/[0.64]" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[920px] text-center"
        >
          <h2 className="text-[clamp(2.125rem,4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.015em] text-white">
            <EditableText path="cta.heading" defaultValue={content.heading} />
          </h2>
          <p className="mx-auto mt-6 max-w-[820px] text-base leading-[1.65] text-[#E2E2E3] sm:text-lg">
            <EditableText path="cta.description" defaultValue={content.description} multiline />
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://app.apexbatch.com/"
              rel="nofollow"
              className="cta-primary group"
            >
              <EditableText path="cta.primaryCta" defaultValue={content.primaryCta} />
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              rel="nofollow"
              className="cta-secondary"
            >
              <EditableText path="cta.secondaryCta" defaultValue={content.secondaryCta} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
