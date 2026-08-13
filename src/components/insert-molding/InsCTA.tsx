"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  backgroundImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1773380863212-1773380863212-qy3uzfbf.webp",
  heading: "Start Your Custom Insert Molding Project",
  description:
    "Share your 2D drawing or 3D CAD model and target quantity. Our engineers will review your part, insert requirements, material and tooling considerations, then recommend the next step for production.",
  primaryCta: "Upload Your Design",
  secondaryCta: "Contact Our Engineer",
};

export function InsCTA() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "120px 0" }}>
      <div className="absolute inset-0">
        <EditableImage
          path="cta.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Insert Molding Manufacturing"
          fill
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto text-center"
        >
          <div className="mx-auto w-[80%]">
            <h2
              className="text-white"
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
            <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#C5C6C9", marginBottom: "36px" }}>
              <EditableText path="cta.description" defaultValue={DEFAULTS.description} multiline />
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
