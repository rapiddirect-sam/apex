"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EditableImage, EditableText } from "@/components/cms";

const DEFAULTS = {
  backgroundImage: "/about/apexbatch-cnc-machining-production-floor-with-operator.avif",
  heading: "Build Your Next Production Program with ",
  headingHighlight: "ApexBatch",
  description:
    "Upload your drawing to receive pricing where available or start an engineering review for your project.",
  primaryCta: "Get a Free Online Quote",
  secondaryCta: "Contact Our Team",
};

export function AboutCTA() {
  return (
    <section className="relative flex min-h-[440px] items-center overflow-hidden py-16 sm:min-h-[480px] sm:py-[72px] lg:min-h-[520px] lg:py-[88px]">
      <EditableImage
        path="aboutFinalCta.backgroundImage"
        defaultSrc={DEFAULTS.backgroundImage}
        alt="ApexBatch CNC machining production floor"
        fill
        sizes="100vw"
        unoptimized
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/[0.90] via-black/[0.80] to-black/[0.64]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[920px] text-center"
        >
          <h2 className="text-[clamp(2.125rem,4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.015em] text-white">
            <EditableText path="aboutFinalCta.heading" defaultValue={DEFAULTS.heading} />
            <span className="text-[#EEC569]">
              <EditableText
                path="aboutFinalCta.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[820px] text-base leading-[1.65] text-[#E2E2E3] sm:text-lg">
            <EditableText
              path="aboutFinalCta.description"
              defaultValue={DEFAULTS.description}
              multiline
            />
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://app.apexbatch.com/"
              rel="nofollow"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded bg-[#D09947] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-[#EEC569]"
            >
              <EditableText path="aboutFinalCta.primaryCta" defaultValue={DEFAULTS.primaryCta} />
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center rounded border border-white/30 bg-black/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#D09947] hover:text-[#EEC569]"
            >
              <EditableText path="aboutFinalCta.secondaryCta" defaultValue={DEFAULTS.secondaryCta} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}