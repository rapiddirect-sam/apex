"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage: "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1773380863212-1773380863212-qy3uzfbf.webp",
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
    <section className="relative overflow-hidden" style={{ padding: "120px 0" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <EditableImage
          path="cta.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Extrusion Manufacturing"
          fill
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="service-section-title mb-[18px]">
            <EditableText path="cta.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent">
              <EditableText path="cta.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="cta.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>
          <div className="service-section-copy mb-9 space-y-2">
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

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://app.apexbatch.com/"
              rel="nofollow"
              className="inline-flex items-center gap-2 bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider group"
            >
              <EditableText path="cta.primaryCta" defaultValue={DEFAULTS.primaryCta} />
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#4A4A48] hover:border-[#D09947] text-white hover:text-[#D09947] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider"
            >
              <EditableText path="cta.secondaryCta" defaultValue={DEFAULTS.secondaryCta} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
