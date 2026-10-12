"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { EditableText, EditableImage } from "@/components/cms";
import { useCMS } from "@/contexts/CMSContext";

const DEFAULTS = {
  heading: "Applications of ",
  headingHighlight: "Custom Aluminum Extrusions",
  subtitle:
    "Custom extruded aluminum components for thermal management, equipment frames, transportation, architectural systems, solar mounting and display assemblies.",
  parts: [
    {
      title: "LED Heat Sinks",
      description:
        "0.9 mm multi-fin profile with black anodizing, optimized for efficient thermal dissipation.",
      image: "/images/services/aluminum-extrusion/applications/led-heat-sinks.avif",
    },
    {
      title: "EV Battery Frames",
      description:
        "6061-T6 aluminum frame extrusion, CNC-drilled and silver anodized, with \u00B10.15 mm flatness for structural assemblies.",
      image: "/images/services/aluminum-extrusion/applications/ev-battery-frames.avif",
    },
    {
      title: "Curtain Wall Mullions",
      description:
        "7 m 6063-T5 architectural aluminum extrusion with RAL 7016 powder coating, designed for thermal-break-ready curtain wall systems.",
      image: "/images/services/aluminum-extrusion/applications/curtain-wall-mullions.avif",
    },
    {
      title: "Robotic Rail Guides",
      description:
        "Complex-cavity extruded aluminum rail with 0.8 mm walls, hard anodizing and \u00B10.1 mm precision cutting.",
      image: "/images/services/aluminum-extrusion/applications/robotic-rail-guides.avif",
    },
    {
      title: "Solar Frame Profiles",
      description:
        "6063-T5 solar frame profile with 15 \u03BCm silver anodizing and pre-machined corner-bracket features.",
      image: "/images/services/aluminum-extrusion/applications/solar-frame-profiles.avif",
    },
    {
      title: "Display Bezels",
      description:
        "Brushed and anodized 0.8 mm profile with tightly controlled 45\u00B0 miter cuts for display bezels.",
      image: "/images/services/aluminum-extrusion/applications/display-bezels.avif",
    },
  ],
};

export function EXParts() {
  const { getContentValue } = useCMS();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: "#000000",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "64px" }}
        >
          <h2 className="service-section-title">
            <EditableText path="extrusionApplications.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent">
              <EditableText
                path="extrusionApplications.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>
          <p className="service-section-copy mt-[18px] max-w-[900px]">
            <EditableText path="extrusionApplications.subtitle" defaultValue={DEFAULTS.subtitle} />
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {DEFAULTS.parts.map((part, index) => (
              <motion.div
                key={part.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderRadius: "12px",
                  background: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "20px",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(208,153,71,0.3)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Image */}
                <button
                  type="button"
                  className="relative mx-auto block cursor-zoom-in overflow-hidden border-0 p-0"
                  style={{
                    width: "74px",
                    height: "74px",
                    borderRadius: "12px",
                    background: "#2A2A2A",
                    marginBottom: "16px",
                  }}
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Enlarge image: ${part.title}`}
                >
                  <EditableImage
                    path={`extrusionApplications.items.${index}.image`}
                    defaultSrc={part.image}
                    alt={part.title}
                    fill
                    sizes="74px"
                    className="object-cover"
                  />
                </button>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  <EditableText
                    path={`extrusionApplications.items.${index}.title`}
                    defaultValue={part.title}
                  />
                </h3>

                {/* Description */}
                <p className="service-support-copy">
                  <EditableText
                    path={`extrusionApplications.items.${index}.description`}
                    defaultValue={part.description}
                    multiline
                  />
                </p>
              </motion.div>
            ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
          style={{ marginTop: "48px" }}
        >
          <p className="mb-5 text-center text-[18px] font-medium text-white">
            Have a profile application in mind?
          </p>
          <Link
            href="https://app.apexbatch.com/"
            rel="nofollow"
            className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-4 px-8 rounded text-sm transition-all uppercase tracking-wider flex items-center justify-center gap-2 group"
          >
            Discuss Your Profile Application
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {lightboxIndex !== null && DEFAULTS.parts[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged part image"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-[101] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-black/80"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="max-h-[90vh] max-w-[95vw]" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={String(
                getContentValue(
                  `extrusionApplications.items.${lightboxIndex}.image`,
                  DEFAULTS.parts[lightboxIndex].image,
                ),
              )}
              alt={DEFAULTS.parts[lightboxIndex].title}
              className="max-h-[90vh] max-w-[95vw] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
