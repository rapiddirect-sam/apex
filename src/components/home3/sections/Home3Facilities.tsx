"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { EditableText, EditableImage } from "@/components/cms";

const DEFAULTS = {
  titleWhite: "Our ",
  titleHighlight: "Facilities",
  panelTitle: "Advanced Manufacturing Hub",
  panelDescription1:
    "Based in China, ApexBatch operates a 50,000 m\u00B2 production footprint across eight specialist workshops, supported by 650+ production, inspection and support equipment.",
  panelDescription2:
    "Machining, fabrication, molding, finishing, assembly and inspection are coordinated under one accountable production plan.",
  panelCta: "Explore the ApexBatch Manufacturing Network",
  stats: [
    { value: "50,000 m\u00B2", label: "Total Manufacturing Footprint" },
    { value: "8", label: "Specialized Production Shops" },
    { value: "650+", label: "Advanced Equipment" },
    { value: "98%", label: "On-Time Delivery" },
  ],
  workshops: [
    {
      title: "CNC Milling Workshop",
      image: "/about/apexbatch-cnc-milling-workshop.avif",
    },
    {
      title: "CNC Turning Workshop",
      image: "/about/apexbatch-cnc-turning-workshop.avif",
    },
    {
      title: "Sheet Metal & Bending Workshop",
      image: "/about/apexbatch-sheet-metal-bending-workshop.avif",
    },
    {
      title: "Laser Welding Workshop",
      image: "/about/apexbatch-laser-welding-workshop.avif",
    },
    {
      title: "Injection Molding Workshop",
      image: "/about/apexbatch-injection-molding-workshop.avif",
    },
    {
      title: "Additive Manufacturing Workshop",
      image: "/about/apexbatch-3d-printing-workshop.avif",
    },
    {
      title: "Vacuum Casting Workshop",
      image: "/about/apexbatch-vacuum-casting-workshop.avif",
    },
    {
      title: "Large-Format Gantry Machining Workshop",
      image: "/about/apexbatch-large-format-gantry-machining-workshop.avif",
    },
  ],
};

// Metric component with corner brackets (top-left and bottom-right only)
function Metric({ index, delay }: { index: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative min-w-0 text-center"
      style={{
        padding: "clamp(14px, 4vw, 18px) clamp(8px, 3vw, 14px)",
        background: `
          radial-gradient(
            60% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #0D0D0D
        `,
        borderRadius: "8px",
      }}
    >
      {/* Top-left corner bracket */}
      <div
        className="absolute"
        style={{
          top: 0,
          left: 0,
          width: "14px",
          height: "14px",
          borderTop: "2px solid #D09947",
          borderLeft: "2px solid #D09947",
        }}
      />
      {/* Bottom-right corner bracket */}
      <div
        className="absolute"
        style={{
          bottom: 0,
          right: 0,
          width: "14px",
          height: "14px",
          borderBottom: "2px solid #D09947",
          borderRight: "2px solid #D09947",
        }}
      />

      {/* Value */}
      <div
        style={{
          fontSize: "clamp(18px, 6vw, 24px)",
          fontWeight: 700,
          color: "#EEC569",
          lineHeight: 1.1,
          letterSpacing: "-0.035em",
          whiteSpace: "nowrap",
        }}
      >
        <EditableText
          path={`facilities.stats.${index}.value`}
          defaultValue={DEFAULTS.stats[index].value}
        />
      </div>
      {/* Label */}
      <div
        style={{
          fontSize: "clamp(10px, 3.5vw, 12px)",
          color: "#EEC569",
          marginTop: "4px",
        }}
      >
        <EditableText
          path={`facilities.stats.${index}.label`}
          defaultValue={DEFAULTS.stats[index].label}
        />
      </div>
    </motion.div>
  );
}

export function Home3Facilities() {
  const workshopRailRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollWorkshops = (direction: "previous" | "next") => {
    const rail = workshopRailRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: (direction === "next" ? 1 : -1) * rail.clientWidth * 0.78,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "clamp(36px, 6vw, 52px) 0 clamp(72px, 16vw, 130px)",
        background: "#171615",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 min-[320px]:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: "clamp(40px, 10vw, 64px)" }}
        >
          {/* Title */}
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(32px, 11vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText
              path="facilities.titleWhite"
              defaultValue={DEFAULTS.titleWhite}
            />
            <span style={{ color: "#EEC569" }}>
              <EditableText
                path="facilities.titleHighlight"
                defaultValue={DEFAULTS.titleHighlight}
              />
            </span>
          </h2>
        </motion.div>

        {/* On tablets, keep the practical facility metrics next to the narrative.
            The project video then receives a full-width row below them. */}
        <div className="grid items-center gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
          {/* Left - Narrative Panel */}
          <div>
            {/* Description Panel - quiet, no heavy borders */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 min-[320px]:p-7 sm:px-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "16px",
                maxWidth: "520px",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(18px, 2vw, 20px)",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "#EEC569",
                  marginBottom: "16px",
                }}
              >
                <EditableText
                  path="homeFacilities.panelTitle"
                  defaultValue={DEFAULTS.panelTitle}
                />
              </p>
              <p
                style={{
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                  color: "#C5C6C9",
                  marginBottom: "12px",
                }}
              >
                <EditableText
                  path="homeFacilities.panelDescription1"
                  defaultValue={DEFAULTS.panelDescription1}
                  multiline
                />
              </p>
              <p
                style={{
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                  color: "#C5C6C9",
                }}
              >
                <EditableText
                  path="homeFacilities.panelDescription2"
                  defaultValue={DEFAULTS.panelDescription2}
                  multiline
                />
              </p>

              <Link
                href="/about"
                className="body-text-link body-text-link--dark mt-6 inline-flex items-center gap-2 text-sm"
              >
                <EditableText
                  path="homeFacilities.panelCta"
                  defaultValue={DEFAULTS.panelCta}
                />
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              {/* Decorative line with diamond */}
              <div className="flex items-center" style={{ marginTop: "24px" }}>
                <div
                  className="flex-1"
                  style={{
                    height: "1px",
                    background: "linear-gradient(to right, transparent, rgba(208,153,71,0.3), rgba(208,153,71,0.5))",
                  }}
                />
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#D09947",
                    transform: "rotate(45deg)",
                    marginLeft: "8px",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Tablet-only metric column. Desktop metrics sit below the two-column layout. */}
          <div className="hidden grid-cols-2 gap-3 md:grid lg:hidden">
            {DEFAULTS.stats.map((_, index) => (
              <Metric key={index} index={index} delay={index * 0.08} />
            ))}
          </div>

          {/* Right - Video only loads its YouTube player after the visitor chooses to play. */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video overflow-hidden rounded-xl border border-[#D09947]/30 bg-[#111] shadow-[0_18px_50px_rgba(0,0,0,0.2)] md:col-span-2 lg:col-span-1"
          >
            {isVideoPlaying ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/9vJZ_bi4mts?autoplay=1&rel=0"
                title="From Raw Material to Finished Parts"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsVideoPlaying(true)}
                aria-label="Play From Raw Material to Finished Parts video"
                className="group absolute inset-0 block h-full w-full overflow-hidden text-left"
              >
                {/* A direct image avoids a Next image-optimizer request for this
                    third-party thumbnail; the actual YouTube player is still lazy. */}
                <img
                  src="https://i.ytimg.com/vi/9vJZ_bi4mts/hqdefault.jpg"
                  alt="Video preview: From Raw Material to Finished Parts"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#F6D277] backdrop-blur-sm">
                  ApexBatch project journey
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#F6D277]/70 bg-[#D09947]/90 text-black shadow-lg transition-transform duration-200 group-hover:scale-110">
                    <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
                  </span>
                </span>
                <span className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <span className="block text-xl font-bold text-white sm:text-2xl">From Raw Material to Finished Parts</span>
                  <span className="mt-2 block max-w-xl text-sm leading-relaxed text-white/85 sm:text-[15px]">
                    From fast quotes and engineering support to machining, inspection, and final delivery.
                  </span>
                </span>
              </button>
            )}
          </motion.div>
        </div>

        {/* Manufacturing metrics */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:hidden lg:mt-10 lg:grid lg:grid-cols-4">
          {DEFAULTS.stats.map((_, index) => (
            <Metric key={index} index={index} delay={index * 0.08} />
          ))}
        </div>

        {/* Workshop rail: an at-a-glance view of the eight production shops. */}
        <div className="relative" style={{ marginTop: "clamp(32px, 5vw, 48px)" }}>
          <div className="mb-4 flex justify-end">
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollWorkshops("previous")}
                aria-label="Previous workshops"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-[#D09947]/35 bg-black/35 transition-colors hover:bg-[#D09947]/15"
              >
                <ChevronLeft className="h-5 w-5 text-[#EEC569]" />
              </button>
              <button
                type="button"
                onClick={() => scrollWorkshops("next")}
                aria-label="Next workshops"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-[#D09947]/35 bg-black/35 transition-colors hover:bg-[#D09947]/15"
              >
                <ChevronRight className="h-5 w-5 text-[#EEC569]" />
              </button>
            </div>
          </div>

          <div
            ref={workshopRailRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {DEFAULTS.workshops.map((workshop, index) => (
              <div
                key={workshop.title}
                className="group relative aspect-[4/3] w-[82vw] shrink-0 snap-start overflow-hidden rounded-xl outline outline-1 outline-[#D09947]/25 sm:w-[calc((100%_-_1rem)/2)] lg:w-[calc((100%_-_2rem)/3)]"
              >
                <EditableImage
                  path={`homeFacilities.workshops.${index}.image`}
                  defaultSrc={workshop.image}
                  alt={workshop.title}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent px-5 pb-5 pt-14">
                  <p className="home-facility-card-title text-white">
                    <EditableText
                      path={`homeFacilities.workshops.${index}.title`}
                      defaultValue={workshop.title}
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => scrollWorkshops("previous")}
              aria-label="Previous workshops"
              className="flex h-14 w-14 items-center justify-center rounded-lg border border-[#D09947]/50 bg-[#24211F] transition-colors active:bg-[#D09947]/15"
            >
              <ChevronLeft className="h-6 w-6 text-[#EEC569]" />
            </button>
            <button
              type="button"
              onClick={() => scrollWorkshops("next")}
              aria-label="Next workshops"
              className="flex h-14 w-14 items-center justify-center rounded-lg border border-[#D09947]/50 bg-[#24211F] transition-colors active:bg-[#D09947]/15"
            >
              <ChevronRight className="h-6 w-6 text-[#EEC569]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
