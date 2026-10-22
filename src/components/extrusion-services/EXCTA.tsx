"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage: "/quality/apexbatch-cnc-machining-workshop-with-operators.webp",
  heading: "Ready to Review Your ",
  headingHighlight: "Extrusion Design?",
  headingSuffix: "",
  descriptionPrimary: "Have a drawing or profile sketch ready? Get an instant quote online.",
  descriptionSecondary:
    "Still defining material, tolerances or tooling? Talk to an extrusion specialist.",
  primaryCta: "Upload files for an instant quote",
  secondaryCta: "Contact our engineers",
};

export function EXCTA() {
  return (
    <section className="relative flex min-h-[440px] items-center overflow-hidden py-16 sm:min-h-[480px] sm:py-[72px] lg:min-h-[520px] lg:py-[88px]">
      <div className="absolute inset-0">
        <EditableImage
          path="cta.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Extrusion Manufacturing"
          fill
          sizes="100vw"
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
            <EditableText path="cta.heading" defaultValue={DEFAULTS.heading} />
            <span className="text-[#EEC569]">
              <EditableText path="cta.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="cta.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>
          <div className="mx-auto mt-6 max-w-[820px] space-y-2 text-base leading-[1.65] text-[#E2E2E3] sm:text-lg">
            <p>
              <EditableText
                path="cta.descriptionPrimary"
                defaultValue={DEFAULTS.descriptionPrimary}
                multiline
              />
            </p>
            <p>
              <EditableText
                path="cta.descriptionSecondary"
                defaultValue={DEFAULTS.descriptionSecondary}
                multiline
              />
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://app.apexbatch.com/"
              rel="nofollow"
              className="cta-primary group"
            >
              <EditableText path="cta.primaryCta" defaultValue={DEFAULTS.primaryCta} />
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              rel="nofollow"
              className="cta-secondary"
            >
              <EditableText path="cta.secondaryCta" defaultValue={DEFAULTS.secondaryCta} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
