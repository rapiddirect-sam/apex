"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";
import { HOME_HERO_IMAGE_QUALITY, HOME_HERO_IMAGE_SIZES } from "@/lib/heroImageDefaults";
import { EditableText, EditableImage } from "@/components/cms";

function createLogoPlaceholder(label: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="64" viewBox="0 0 240 64">
    <rect width="240" height="64" rx="10" fill="#131313"/>
    <text x="120" y="39" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#ececec">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const DEFAULTS = {
  badge: "Precision Engineering",
  headingLine1: "EVERY INDUSTRIAL CHALLENGE,",
  headingLine2: "AN APEX SOLUTION",
  description:
    "We're your full-service manufacturing partner. With in-house CNC machining, sheet metal fabrication and extensive multi-molding capabilities, from pre-production prototyping to full-scale manufacturing.",
  ctaPrimary: "Get Sample Quote",
  ctaSecondary: "Get Production Quote",
  backgroundImage: getImageUrl("home/1-homepage-banner.webp"),
  certifications: ["ISO 9001:2015", "ISO 13485:2016", "ISO 4001:2015"],
  features: [
    { highlight: "Fast Quotes:", text: "2-Hour Response Time" },
    { highlight: "±0.01-0.05mm", text: "Precision control" },
    { highlight: "ISO-certified", text: "Quality system" },
    { highlight: "End-to-End", text: "Turnkey Solutions" },
    { highlight: "Free Expert", text: "Technical Support for All Projects" },
  ],
  stats: [
    { value: "15+", label: "Years of Precision Manufacturing Experience" },
    { value: "50K", label: "SKU Projects Delivered for Global Clients" },
    { value: "99.8%", label: "First-time Accuracy Rate (Global Benchmark)" },
  ],
  logos: [
    { alt: "Stryker", src: createLogoPlaceholder("stryker") },
    { alt: "Rockwell Automation", src: createLogoPlaceholder("Rockwell") },
    { alt: "Honeywell", src: createLogoPlaceholder("Honeywell") },
    { alt: "DJI", src: createLogoPlaceholder("DJI") },
    { alt: "Tesla", src: createLogoPlaceholder("TESLA") },
    { alt: "Festo", src: createLogoPlaceholder("FESTO") },
  ],
};

export function Home3Hero() {
  const marqueeLogos = [...DEFAULTS.logos, ...DEFAULTS.logos];

  return (
    <section className="relative min-h-[84vh] bg-[#060606] pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <EditableImage
          path="hero.backgroundImage"
          defaultSrc={DEFAULTS.backgroundImage}
          alt="Manufacturing background"
          fill
          priority
          fetchPriority="high"
          sizes={HOME_HERO_IMAGE_SIZES}
          quality={HOME_HERO_IMAGE_QUALITY}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(92deg, rgba(6,6,6,0.92) 0%, rgba(6,6,6,0.82) 36%, rgba(6,6,6,0.56) 62%, rgba(6,6,6,0.7) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{ background: "radial-gradient(circle at 68% 14%, rgba(238,197,105,0.2), rgba(0,0,0,0) 34%)" }}
      />

      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8 min-h-[calc(84vh-80px)] flex items-center">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 w-full py-14 lg:py-16">
          <div className="col-span-12 lg:col-span-7">
            <div className="inline-flex items-center px-3 py-1.5 border border-[#D09947]/35 rounded-md mb-5 bg-black/35">
              <span className="text-[#D09947] text-[10px] font-semibold uppercase tracking-[0.2em]">
                <EditableText
                  path="hero.badge"
                  defaultValue={DEFAULTS.badge}
                />
              </span>
            </div>

            <h1 className="text-[36px] sm:text-[42px] md:text-[54px] lg:text-[56px] font-extrabold text-white leading-[0.98] tracking-tight uppercase mb-1">
              <EditableText
                path="hero.headingLine1"
                defaultValue={DEFAULTS.headingLine1}
              />
            </h1>
            <h1 className="text-[36px] sm:text-[42px] md:text-[54px] lg:text-[56px] font-extrabold text-[#E2B45A] leading-[0.98] tracking-tight uppercase mb-5">
              <EditableText
                path="hero.headingLine2"
                defaultValue={DEFAULTS.headingLine2}
              />
            </h1>

            <p className="text-[#D1D1D1] text-[15px] lg:text-base max-w-xl mb-7 leading-relaxed">
              <EditableText
                path="hero.description"
                defaultValue={DEFAULTS.description}
                multiline
              />
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-5 text-[11px] text-[#E4E4E4]">
              {DEFAULTS.certifications.map((cert, index) => (
                <div key={cert} className="inline-flex items-center gap-2">
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
                  <span className="uppercase tracking-[0.08em]">
                    <EditableText
                      path={`hero.certifications.${index}`}
                      defaultValue={cert}
                    />
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="https://app.apexbatch.com/"
                rel="nofollow"
                className="text-[#1A1A1A] font-bold py-3.5 px-6 rounded-md text-xs transition-all uppercase tracking-[0.11em] flex items-center gap-2 group shadow-[0_8px_22px_rgba(238,197,105,0.4)]"
                style={{
                  background: "linear-gradient(90deg, #D8AC4E 0%, #F1DB9A 100%)",
                }}
              >
                <EditableText
                  path="hero.ctaPrimary"
                  defaultValue={DEFAULTS.ctaPrimary}
                />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="border border-white/30 hover:border-[#D09947] bg-[#181818]/72 text-white font-bold py-3.5 px-6 rounded-md text-xs transition-all uppercase tracking-[0.11em] shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
              >
                <EditableText
                  path="hero.ctaSecondary"
                  defaultValue={DEFAULTS.ctaSecondary}
                />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 lg:col-start-8 items-center">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 w-full border border-white/24 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#D09947]/15 rounded-full blur-3xl" />
              <ul className="space-y-3.5 mb-6 relative">
                {DEFAULTS.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EEC569] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#191919]" strokeWidth={3} />
                    </div>
                    <span className="text-[#E5E5E5] text-[14px] leading-tight">
                      <span className="text-[#E2B45A] font-semibold">
                        <EditableText
                          path={`hero.features.${index}.highlight`}
                          defaultValue={feature.highlight}
                        />
                      </span>{" "}
                      <EditableText
                        path={`hero.features.${index}.text`}
                        defaultValue={feature.text}
                      />
                    </span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-white/15">
                {DEFAULTS.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-[#E2B45A] text-[32px] font-bold leading-none">
                      <EditableText
                        path={`hero.stats.${index}.value`}
                        defaultValue={stat.value}
                      />
                    </div>
                    <div className="text-[#B3B3B3] text-[10px] mt-1 leading-tight">
                      <EditableText
                        path={`hero.stats.${index}.label`}
                        defaultValue={stat.label}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative border-t border-white/10"
        style={{
          background:
            "linear-gradient(180deg, rgba(32,32,32,0.62) 0%, rgba(20,20,20,0.78) 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 overflow-hidden">
          <div className="h3-hero-logo-marquee flex items-center py-5">
            {marqueeLogos.map((logo, index) => {
              const editableIndex = index % DEFAULTS.logos.length;
              return (
                <div
                  key={`${logo.alt}-${index}`}
                  className="shrink-0 flex items-center justify-center"
                  style={{ width: "16.6667%", minWidth: "132px", paddingInline: "10px" }}
                >
                  <div className="relative mx-auto w-full max-w-[112px] h-7 opacity-95">
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
        </div>
      </div>
    </section>
  );
}
