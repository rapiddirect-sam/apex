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
  const marqueeLogos = [...DEFAULTS.logos, ...DEFAULTS.logos];

  return (
    <section className="py-5 bg-[#151515] border-y border-white/5">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {marqueeLogos.map((logo, index) => {
              const editableIndex = index % DEFAULTS.logos.length;
              return (
                <div
                  key={`${logo.alt}-${index}`}
                  className="shrink-0 flex items-center justify-center"
                  style={{
                    width: "20%",
                    minWidth: "180px",
                    paddingInline: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "48px",
                      position: "relative",
                      opacity: 0.92,
                    }}
                  >
                    <EditableImage
                      path={`trustedLogos.items.${editableIndex}.src`}
                      defaultSrc={logo.src}
                      alt={logo.alt}
                      fill
                      sizes="200px"
                      quality={90}
                      unoptimized
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
