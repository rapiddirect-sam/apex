"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage: "/quality/apexbatch-cnc-machining-workshop-with-operators.webp",
  headingPrefix: "Define the Right Finish ",
  headingHighlight: "Before Production",
  headingSuffix: "",
  description:
    "Send your drawing, material and any applicable specification. We will assess the finish requirement against critical features, visible surfaces, masking needs, process access and the agreed project scope before quotation.",
  primaryCta: "Send Your Drawing for Finish Review",
  secondaryCta: "Talk Through a Finish Requirement",
};

export function SFCTA() {
  return (
    <section className="relative flex min-h-[440px] items-center overflow-hidden py-16 sm:min-h-[480px] sm:py-[72px] lg:min-h-[520px] lg:py-[88px]">
      <div className="absolute inset-0">
        <EditableImage
          path="surfaceFinishCta.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="ApexBatch operators working in the CNC machining workshop"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/[0.90] via-black/[0.80] to-black/[0.64]" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[920px] text-center"
        >
          <h2 className="text-[clamp(2.125rem,4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.015em] text-white">
            <EditableText path="surfaceFinishCta.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
            <span className="text-[#EEC569]">
              <EditableText path="surfaceFinishCta.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="surfaceFinishCta.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>

          <p className="mx-auto mt-6 max-w-[820px] text-base leading-[1.65] text-[#E2E2E3] sm:text-lg">
            <EditableText path="surfaceFinishCta.description" defaultValue={DEFAULTS.description} multiline />
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://app.apexbatch.com/"
              className="cta-primary group"
            >
              <EditableText path="surfaceFinishCta.primaryCta" defaultValue={DEFAULTS.primaryCta} />
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              rel="nofollow"
              className="cta-secondary"
            >
              <EditableText path="surfaceFinishCta.secondaryCta" defaultValue={DEFAULTS.secondaryCta} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
