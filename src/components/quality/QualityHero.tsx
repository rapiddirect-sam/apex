"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";
import { getImageUrl } from "@/lib/utils";

const DEFAULTS = {
  backgroundImage: getImageUrl("quality/servicebg.png"),
  titlePart1: "Precision ",
  titleHighlight: "Quality Assurance",
  titlePart2: " for Repeatable Production",
  description:
    "From material verification and first-article approval to in-process control and final release, we plan inspection around your drawing, critical features and production requirements.",
  stats: [
    { value: "\u00B10.01\u20130.05 mm", label: "Tolerance Control" },
    { value: "100%", label: "Controlled Traceability" },
    { value: "ISO Certified", label: "Quality Management" },
  ],
  ctaPrimary: "Upload Your Drawing",
  ctaSecondary: "Discuss Your Quality Requirements",
};

export function QualityHero() {
  return (
    <section className="relative bg-[#000000] pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full" style={{ minHeight: "640px" }}>
        <EditableImage
          path="hero.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Quality background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        />

        {/* Content Overlay */}
        <div
          className="relative flex flex-col items-center justify-center px-6"
          style={{ minHeight: "640px" }}
        >
          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full max-w-7xl flex flex-col items-center"
            style={{
              background: "rgba(52, 49, 47, 0.5)",
              border: "1px solid rgba(238, 197, 105, 0.3)",
              borderRadius: "8px",
              padding: "48px 40px",
            }}
          >
            <h1
              className="text-white font-extrabold tracking-tight"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              <EditableText path="hero.titlePart1" defaultValue={DEFAULTS.titlePart1} />
              <span style={{ color: "#EEC569" }}>
                <EditableText path="hero.titleHighlight" defaultValue={DEFAULTS.titleHighlight} />
              </span>
              <EditableText path="hero.titlePart2" defaultValue={DEFAULTS.titlePart2} />
            </h1>

            <p
              className="text-white/90"
              style={{
                fontSize: "16px",
                lineHeight: 1.6,
                marginBottom: "36px",
                maxWidth: "700px",
              }}
            >
              <EditableText
                path="hero.description"
                defaultValue={DEFAULTS.description}
                multiline
              />
            </p>

            {/* Stats */}
            <div
              className="inline-flex flex-col sm:flex-row gap-4"
              style={{ borderTop: "1px solid #EEC569", paddingTop: "8px" }}
            >
              {DEFAULTS.stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1"
                  style={{
                    padding: "16px 24px",
                  }}
                >
                  <div
                    className="text-2xl lg:text-3xl font-bold"
                    style={{ color: "#EEC569" }}
                  >
                    <EditableText
                      path={`hero.stats.${index}.value`}
                      defaultValue={stat.value}
                    />
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "#FFFFFF", fontWeight: 500 }}
                  >
                    <EditableText
                      path={`hero.stats.${index}.label`}
                      defaultValue={stat.label}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Calls to action use the shared service-hero button treatment. */}
            <div className="flex flex-wrap justify-center gap-3 mt-5">
              <Link
                href="https://app.apexbatch.com/"
                rel="nofollow"
                className="text-[#1A1A1A] font-bold py-3.5 px-7 rounded-md text-xs transition-all uppercase tracking-[0.11em] flex items-center gap-2 group shadow-[0_8px_22px_rgba(238,197,105,0.4)]"
                style={{ background: "linear-gradient(90deg, #D8AC4E 0%, #F1DB9A 100%)" }}
              >
                <EditableText path="hero.ctaPrimary" defaultValue={DEFAULTS.ctaPrimary} />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border border-[#D6B56E]/40 hover:border-[#D6B56E] bg-[#1A1A1A]/72 text-white font-bold py-3.5 px-7 rounded-md text-xs transition-all uppercase tracking-[0.11em] shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
              >
                <EditableText path="hero.ctaSecondary" defaultValue={DEFAULTS.ctaSecondary} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
