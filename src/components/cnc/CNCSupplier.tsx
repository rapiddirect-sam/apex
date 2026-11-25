"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { EditableImage, EditableText } from "@/components/cms";

const DEFAULTS = {
  headingHighlight: "Precision CNC Machining Services ",
  headingSuffix: "Supplier",
  description1:
    "Located in Shenzhen’s advanced manufacturing district, our 50,000 m² manufacturing footprint spans 8 specialized production workshops and includes 650+ advanced machines.",
  description2:
    "We support end-to-end manufacturing in one location, including CNC machining, precision injection molding, sheet metal fabrication, 3D printing, as well as in-house surface treatment and quality inspection lines.",
  stats: [
    { value: "50,000 m²", label: "Total Manufacturing Footprint" },
    { value: "8", label: "Specialized Production Shops" },
    { value: "650+", label: "Advanced Equipment" },
    { value: "98%", label: "On-time Delivery" },
  ],
  facilityImages: [
    {
      src: "/about/apexbatch-cnc-milling-workshop.avif",
      alt: "ApexBatch CNC milling workshop with machining centers",
      className: "col-span-2 row-span-2 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2",
    },
    {
      src: "/images/services/cnc-machining/apexbatch-cnc-operator-machine-setup-and-calibration.avif",
      alt: "ApexBatch CNC operator setting up and calibrating a machining center",
      className: "col-span-1",
    },
    {
      src: "/images/services/cnc-machining/apexbatch-zeiss-cmm-inspection-precision-cnc-part.webp",
      alt: "ApexBatch employee using a ZEISS CMM to inspect a precision CNC machined part",
      className: "col-span-1",
    },
    {
      src: "/quality/apexbatch-cnc-machining-workshop-with-operators.webp",
      alt: "CNC machining workshop with ApexBatch operators",
      className: "col-span-2 md:col-span-1 lg:col-span-2",
    },
  ],
};

export function CNCSupplier() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "112px 0 120px",
        background: `
          radial-gradient(
            60% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="service-section-title font-bold"
              style={{
                fontSize: "46px",
                fontWeight: 700,
                letterSpacing: "-0.015em",
                lineHeight: 1.1,
                marginTop: "10px",
                marginBottom: "34px",
              }}
            >
              <span className="service-title-accent">
                <EditableText path="supplier.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
              </span>
              <span style={{ color: "#FFFFFF" }}>
                <EditableText path="supplier.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
              </span>
            </h2>

            <div style={{ fontSize: "15px", lineHeight: 1.7, color: "#C5C6C9" }}>
              <p>
                <EditableText path="supplier.description1" defaultValue={DEFAULTS.description1} multiline />
              </p>
              <p className="mt-6">
                <EditableText path="supplier.description2" defaultValue={DEFAULTS.description2} multiline />
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {DEFAULTS.facilityImages.map((image, index) => (
              <div
                key={image.src}
                className={`relative min-h-[150px] overflow-hidden md:min-h-[220px] lg:min-h-[150px] ${image.className}`}
              >
                <EditableImage
                  path={`supplier.facilityImages.${index}.src`}
                  defaultSrc={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes={index === 0 || index === 3 ? "(max-width: 1024px) 100vw, 560px" : "(max-width: 1024px) 50vw, 280px"}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:mt-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)] lg:gap-8">
          <motion.a
            href="https://www.youtube.com/watch?v=9vJZ_bi4mts"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch CNC Machining: From Material to Finished Parts on YouTube"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative aspect-video overflow-hidden rounded-xl border border-[#D09947]/30 bg-[#111] shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
          >
            <img
              src="https://i.ytimg.com/vi/9vJZ_bi4mts/hqdefault.jpg"
              alt="Video preview: CNC machining from material to finished parts"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
            <span className="absolute left-4 top-3 rounded-full border border-white/30 bg-black/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#F6D277] backdrop-blur-sm sm:left-5 sm:top-5 sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-[0.12em]">
              CNC machining process
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#F6D277]/70 bg-[#D09947]/90 text-black shadow-lg transition-transform duration-200 group-hover:scale-110 sm:h-16 sm:w-16">
                <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" aria-hidden="true" />
              </span>
            </span>
            <span className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <span className="block text-lg font-bold leading-tight text-white sm:text-2xl">CNC Machining: From Material to Finished Parts</span>
              <span className="mt-1.5 block max-w-xl text-[13px] leading-5 text-white/85 sm:mt-2 sm:text-[15px] sm:leading-relaxed">
                From material preparation and machine setup to machining, inspection, and final delivery.
              </span>
            </span>
          </motion.a>

          <div className="grid grid-cols-2 gap-4">
            {DEFAULTS.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex min-h-[132px] flex-col items-center justify-center text-center"
                style={{
                  padding: "20px 16px",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(208,153,71,0.3)",
                  borderRadius: "12px",
                }}
              >
                <div style={{ fontSize: "28px", fontWeight: 700, color: "#D09947", lineHeight: 1.1 }}>
                  <EditableText path={`supplier.stats.${index}.value`} defaultValue={stat.value} />
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#7A7A7C",
                    marginTop: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  <EditableText path={`supplier.stats.${index}.label`} defaultValue={stat.label} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
