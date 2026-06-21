"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";

function createLogoPlaceholder(label: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="56" viewBox="0 0 220 56">
    <rect width="220" height="56" rx="8" fill="#1b1b1b"/>
    <text x="110" y="34" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#f1f1f1">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

type ServiceHeroMetric = {
  value: string;
  label: string;
};

type ServiceHeroDefaults = {
  title: string;
  description: string;
  heroImage: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  certifications?: string[];
  logos?: { alt: string; src: string }[];
  metrics?: ServiceHeroMetric[];
};

const SHARED_DEFAULTS = {
  ctaPrimary: "Start Free Quote",
  ctaSecondary: "Upload Your Design",
  certifications: ["ISO 9001:2015", "ISO 13485:2016", "ISO 4001:2015"],
  logos: [
    { alt: "Stryker", src: createLogoPlaceholder("stryker") },
    { alt: "Rockwell Automation", src: createLogoPlaceholder("Rockwell") },
    { alt: "Honeywell", src: createLogoPlaceholder("Honeywell") },
    { alt: "DJI", src: createLogoPlaceholder("DJI") },
    { alt: "Tesla", src: createLogoPlaceholder("TESLA") },
    { alt: "Festo", src: createLogoPlaceholder("FESTO") },
  ],
  metrics: [
    { value: "Free DFM Feedback", label: "Optimize your design before production" },
    { value: "\u00B10.005 mm Precision", label: "Consistent tight tolerances" },
    { value: "100+ Materials Available", label: "Metals & plastics supported" },
    { value: "99.8% On-Time Delivery", label: "Reliable global fulfillment" },
  ],
};

export function ServiceHero({ defaults }: { defaults: ServiceHeroDefaults }) {
  const merged = {
    ...SHARED_DEFAULTS,
    ...defaults,
  };
  const marqueeLogos = [...merged.logos, ...merged.logos];
  const [firstWord, ...restWords] = merged.title.trim().split(/\s+/);
  const restTitle = restWords.join(" ");

  return (
    <section className="relative bg-[#060606] pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <EditableImage
          path="hero.image"
          defaultSrc={merged.heroImage}
          alt={merged.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(92deg, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.58) 42%, rgba(8,8,8,0.35) 70%, rgba(8,8,8,0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle at 68% 28%, rgba(238,197,105,0.1), rgba(0,0,0,0) 38%)",
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8 min-h-[620px] flex items-center">
        <div className="w-full pt-14 pb-5 lg:pt-16 lg:pb-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[920px]"
          >
            <h1
              className="font-extrabold tracking-tight leading-[1.08]"
              style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                marginBottom: "18px",
                maxWidth: "920px",
              }}
            >
              <span className="text-[#F5F5F5]">
                <EditableText path="hero.titlePrefix" defaultValue={firstWord} />
              </span>
              {restTitle ? (
                <span className="text-[#E7C56F]">
                  {" "}
                  <EditableText path="hero.titleHighlight" defaultValue={restTitle} />
                </span>
              ) : null}
            </h1>

            <p
              className="text-[#DDD5C6]"
              style={{
                fontSize: "18px",
                lineHeight: 1.55,
                marginBottom: "22px",
                maxWidth: "860px",
              }}
            >
              <EditableText path="hero.description" defaultValue={merged.description} multiline />
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-7 text-[13px] text-[#ECECEC]">
              {merged.certifications.map((cert, index) => (
                <div key={cert} className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center" style={{ width: "18px", height: "18px" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 3.2 5.4 6.1v5.2c0 4.2 2.9 8 6.6 9.1 3.7-1.1 6.6-4.9 6.6-9.1V6.1L12 3.2Z"
                        stroke="#EEC569"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="m9.1 12.2 1.9 1.9 3.8-3.8"
                        stroke="#EEC569"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="tracking-[0.06em] uppercase">
                    <EditableText path={`hero.certifications.${index}`} defaultValue={cert} />
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="https://app.apexbatch.com/"
                rel="nofollow"
                className="text-[#1A1A1A] font-bold py-3.5 px-7 rounded-md text-xs transition-all uppercase tracking-[0.11em] flex items-center gap-2 group shadow-[0_8px_22px_rgba(238,197,105,0.4)]"
                style={{ background: "linear-gradient(90deg, #D8AC4E 0%, #F1DB9A 100%)" }}
              >
                <EditableText path="hero.ctaPrimary" defaultValue={merged.ctaPrimary} />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={merged.ctaSecondaryHref ?? "https://app.apexbatch.com/"}
                rel="nofollow"
                className="border border-[#D6B56E]/40 hover:border-[#D6B56E] bg-[#1A1A1A]/72 text-white font-bold py-3.5 px-7 rounded-md text-xs transition-all uppercase tracking-[0.11em] shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
              >
                <EditableText path="hero.ctaSecondary" defaultValue={merged.ctaSecondary} />
              </Link>
            </div>

            <div className="mt-6 overflow-hidden max-w-[760px] pt-2">
              <motion.div
                className="flex items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              >
                {marqueeLogos.map((logo, index) => {
                  const editableIndex = index % merged.logos.length;
                  return (
                    <div
                      key={`${logo.alt}-${index}`}
                      className="shrink-0 flex items-center justify-center"
                      style={{ width: "16.6667%", minWidth: "140px", paddingInline: "10px" }}
                    >
                      <div className="relative w-full h-7 opacity-90">
                        <EditableImage
                          path={`hero.logos.${editableIndex}.src`}
                          defaultSrc={logo.src}
                          alt={logo.alt}
                          fill
                          sizes="140px"
                          quality={90}
                          unoptimized
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative -mt-6 z-10">
        <div
          className="relative border-t border-white/10"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,5,5,0.97) 0%, rgba(14,14,14,0.96) 50%, rgba(42,36,16,0.84) 78%, rgba(52,44,18,0.76) 100%)",
          }}
        >
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5 py-5">
              {merged.metrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-[#D7AE5A] text-[16px] md:text-[18px] font-semibold leading-snug">
                    <EditableText path={`hero.metrics.${index}.value`} defaultValue={item.value} />
                  </div>
                  <div className="text-[#D8D8D8] text-[11px] mt-1 leading-relaxed">
                    <EditableText path={`hero.metrics.${index}.label`} defaultValue={item.label} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
