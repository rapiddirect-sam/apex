"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EditableText, EditableImage } from "@/components/cms";
import { useCMS } from "@/contexts/CMSContext";

const DEFAULTS = {
  backgroundImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1773380863212-1773380863212-qy3uzfbf.webp",
  heading: "Ready to Start Your Laser Cutting Project?",
  description:
    "Upload your CAD files and drawings. ApexBatch will review your material, thickness, edge quality, secondary operations, and production requirements before providing a detailed quote.",
  primaryCta: "Upload CAD Files",
  secondaryCta: "Get Laser Cutting Quote",
};

export function LCCTA() {
  const { isEditMode } = useCMS();

  return (
    <section className="relative overflow-hidden" style={{ padding: "120px 0" }}>
      <div className={`absolute inset-0${isEditMode ? " z-[1]" : ""}`}>
        <EditableImage
          path="cta.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Laser Cutting Manufacturing"
          fill
          sizes="100vw"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      <div
        className={`relative max-w-[1200px] mx-auto px-6${
          isEditMode
            ? " z-[2] pointer-events-none [&_a]:pointer-events-auto [&_[data-editable-text]]:pointer-events-auto [&_.cms-editable-image]:pointer-events-auto"
            : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto w-[80%] text-center"
        >
          <h2
            className="text-white text-center"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
              marginBottom: "18px",
            }}
          >
            <EditableText path="cta.heading" defaultValue={DEFAULTS.heading} />
          </h2>
          <p
            className="text-center"
            style={{ fontSize: "18px", lineHeight: 1.6, color: "#C5C6C9", marginBottom: "36px" }}
          >
            <EditableText path="cta.description" defaultValue={DEFAULTS.description} multiline />
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://app.apexbatch.com/"
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
