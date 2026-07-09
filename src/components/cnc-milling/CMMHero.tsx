"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableText, EditableImage } from "@/components/cms";
import { useCMS } from "@/contexts/CMSContext";
import {
  CNC_HERO_DEFAULT_SRC,
  CNC_HERO_IMAGE_QUALITY,
  CNC_HERO_IMAGE_SIZES,
} from "@/lib/heroImageDefaults";

function createLogoPlaceholder(label: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="56" viewBox="0 0 220 56">
    <rect width="220" height="56" rx="8" fill="#1b1b1b"/>
    <text x="110" y="34" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#f1f1f1">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const DEFAULTS = {
  eyebrow: "CNC Milling for Low-to-Mid Volume Production",
  titlePrefix: "",
  titleHighlight: "CNC Milling Services",
  titleSuffix: " for Custom Metal and Plastic Parts",
  description:
    "Upload your CAD files and drawings online for free DFM feedback, tolerance review, and a detailed CNC milling quote within 24 hours. ApexBatch supports 3-axis, 4-axis, and 5-axis CNC milling for custom CNC milled parts, with standard tolerances to ±0.05 mm and selected tight tolerances reviewed down to ±0.01 mm.",
  heroImage: CNC_HERO_DEFAULT_SRC,
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Get Production Quote",
  certifications: ["ISO 9001:2015", "ISO 13485:2016", "ISO 14001:2015"],
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

export function CMMHero() {
  const { isEditMode } = useCMS();
  const marqueeLogos = [...DEFAULTS.logos, ...DEFAULTS.logos];

  return (
    <section className="relative bg-[#060606] pt-16 overflow-hidden">
      <div className={`absolute inset-0${isEditMode ? " z-[1]" : ""}`}>
        <EditableImage
          path="hero.image"
          defaultSrc={DEFAULTS.heroImage}
          alt="Custom CNC Milling Services"
          fill
          priority
          fetchPriority="high"
          sizes={CNC_HERO_IMAGE_SIZES}
          quality={CNC_HERO_IMAGE_QUALITY}
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

      <div
        className={`relative max-w-[1240px] mx-auto px-6 lg:px-8 min-h-[620px] flex items-center${
          isEditMode
            ? " z-[2] pointer-events-none [&_a]:pointer-events-auto [&_[data-editable-text]]:pointer-events-auto [&_.cms-editable-image]:pointer-events-auto"
            : ""
        }`}
      >
        <div className="w-full pt-14 pb-5 lg:pt-16 lg:pb-4">
          <div className="max-w-[920px]">
            <div className="inline-flex items-center px-3 py-1.5 border border-[#D09947]/35 rounded-md mb-5 bg-black/35">
              <span className="text-[#D09947] text-[10px] font-semibold tracking-[0.2em]">
                <EditableText path="hero.eyebrow" defaultValue={DEFAULTS.eyebrow} />
              </span>
            </div>

            <h1
              className="text-[#F5F5F5] font-extrabold tracking-tight leading-[1.08]"
              style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                marginBottom: "18px",
                maxWidth: "920px",
              }}
            >
              <EditableText path="hero.titlePrefix" defaultValue={DEFAULTS.titlePrefix} />
              <span className="text-[#E7C56F]">
                <EditableText
                  path="hero.titleHighlight"
                  defaultValue={DEFAULTS.titleHighlight}
                />
              </span>
              <EditableText path="hero.titleSuffix" defaultValue={DEFAULTS.titleSuffix} />
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
              <EditableText
                path="hero.description"
                defaultValue={DEFAULTS.description}
                multiline
              />
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-7 text-[13px] text-[#ECECEC]">
              {DEFAULTS.certifications.map((cert, index) => (
                <div key={cert} className="inline-flex items-center gap-2">
                  <span
                    className="inline-flex items-center justify-center"
                    style={{ width: "18px", height: "18px" }}
                  >
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
                <EditableText path="hero.ctaPrimary" defaultValue={DEFAULTS.ctaPrimary} />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                rel="nofollow"
                className="border border-[#D6B56E]/40 hover:border-[#D6B56E] bg-[#1A1A1A]/72 text-white font-bold py-3.5 px-7 rounded-md text-xs transition-all uppercase tracking-[0.11em] shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
              >
                <EditableText path="hero.ctaSecondary" defaultValue={DEFAULTS.ctaSecondary} />
              </Link>
            </div>

            <div
              className={`mt-6 w-full max-w-[920px] pt-2${
                isEditMode
                  ? " pointer-events-auto rounded-lg border border-dashed border-[#D09947]/40 bg-black/50 p-4"
                  : " overflow-hidden"
              }`}
            >
              {isEditMode ? (
                <>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[#D09947]">
                    Client logos — click a logo or its Upload button to replace
                  </p>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {DEFAULTS.logos.map((logo, index) => (
                      <div key={logo.alt} className="flex flex-col items-center gap-2">
                        <span className="text-[10px] text-[#999]">{logo.alt}</span>
                        <div className="relative mx-auto h-10 w-full max-w-[140px]">
                          <EditableImage
                            path={`hero.logos.${index}.src`}
                            defaultSrc={logo.src}
                            alt={logo.alt}
                            fill
                            sizes="140px"
                            quality={85}
                            unoptimized
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="h3-hero-logo-marquee flex items-center">
                  {marqueeLogos.map((logo, index) => {
                    const editableIndex = index % DEFAULTS.logos.length;

                    return (
                      <div
                        key={`${logo.alt}-${index}`}
                        className="flex shrink-0 items-center justify-center"
                        style={{ width: "16.6667%", minWidth: "132px", paddingInline: "10px" }}
                      >
                        <div className="relative mx-auto h-7 w-full max-w-[112px] opacity-90">
                          <EditableImage
                            path={`hero.logos.${editableIndex}.src`}
                            defaultSrc={logo.src}
                            alt={logo.alt}
                            fill
                            sizes="112px"
                            quality={85}
                            unoptimized
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
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
              {DEFAULTS.metrics.map((item, index) => (
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
