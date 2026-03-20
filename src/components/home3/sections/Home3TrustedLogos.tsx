"use client";

import { motion } from "framer-motion";
import { EditableImage } from "@/components/cms";

function createLogoPlaceholder(label: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="72" viewBox="0 0 260 72">
    <rect width="260" height="72" rx="10" fill="#1f1f1f"/>
    <text x="130" y="43" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#b9b9b9">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const DEFAULTS = {
  logos: [
    { alt: "Rockwell Automation", src: createLogoPlaceholder("ROCKWELL") },
    { alt: "Honeywell", src: createLogoPlaceholder("HONEYWELL") },
    { alt: "DJI", src: createLogoPlaceholder("DJI") },
    { alt: "TOYOTA", src: createLogoPlaceholder("TOYOTA") },
    { alt: "FESTO", src: createLogoPlaceholder("FESTO") },
  ],
};

export function Home3TrustedLogos() {
  return (
    <section className="py-10 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-5 items-center gap-4 md:gap-6"
        >
          {DEFAULTS.logos.map((logo, index) => (
            <div
              key={logo.alt}
              style={{
                width: "100%",
                height: "56px",
                position: "relative",
                opacity: 0.85,
              }}
            >
              <EditableImage
                path={`trustedLogos.items.${index}.src`}
                defaultSrc={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 768px) 42vw, 220px"
                quality={90}
                unoptimized
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
