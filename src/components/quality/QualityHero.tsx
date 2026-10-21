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
      <div className="absolute inset-0">
        <EditableImage
          path="hero.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Quality background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      />

      <div className="relative flex min-h-[620px] flex-col justify-center px-6 md:min-h-[640px] md:items-center">
        <div className="w-full py-14 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[920px] text-left md:flex md:max-w-none md:flex-col md:items-center md:text-center"
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
              className="mb-[22px] max-w-[860px] text-[18px] leading-[1.55] text-[#DDD5C6] md:mb-9 md:max-w-[700px] md:text-[16px] md:leading-[1.6] md:text-white/90"
            >
              <EditableText
                path="hero.description"
                defaultValue={DEFAULTS.description}
                multiline
              />
            </p>

            <div
              className="flex max-w-[760px] flex-col gap-1 border-t border-[#EEC569]/60 pt-3 sm:flex-row sm:gap-0 md:w-full md:max-w-[850px] md:gap-0 md:border-[#EEC569] md:pt-2"
            >
              {DEFAULTS.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-1 flex-col items-start gap-1 py-3 sm:py-2 sm:pr-5 md:items-center md:px-4 md:py-4 ${
                    index < DEFAULTS.stats.length - 1
                      ? "sm:border-r sm:border-[#EEC569]/30 md:border-r-0"
                      : ""
                  }`}
                >
                  <div
                    className="text-xl font-bold md:whitespace-nowrap md:text-2xl lg:text-3xl"
                    style={{ color: "#EEC569" }}
                  >
                    <EditableText
                      path={`hero.stats.${index}.value`}
                      defaultValue={stat.value}
                    />
                  </div>
                  <div
                    className="text-xs md:text-sm"
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

            <div className="mt-5 flex flex-wrap justify-start gap-3 md:justify-center">
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
