"use client";

import Link from "next/link";
import { motion } from "@/components/ui/StaticMotion";
import { EditableImage, EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Quality and ",
  headingHighlight: "Documentation",
  introduction:
    "Quality requirements are reviewed against the drawing, specification, intended use, and order scope.",
  qualityPlanning:
    "From our Shenzhen manufacturing facility, ApexBatch supports defined production programs with incoming inspection, in-process controls, first-article inspection, SPC where required, ZEISS CMM measurement, and material or batch traceability.",
  documentation:
    "Inspection reports, material certificates, and lot-related documentation can be included where agreed for the project.",
  qualityLink: "Quality Assurance",
  images: [
    {
      src: "/injection-molding/apexbatch-injection-molding-factory-workshop.avif",
      alt: "ApexBatch injection molding factory workshop",
    },
    {
      src: "/injection-molding/apexbatch-quality-inspector-operating-zeiss-contura-cmm.webp",
      alt: "Quality inspector operating a ZEISS CONTURA CMM",
    },
    {
      src: "/injection-molding/apexbatch-quality-inspector-operating-tesa-height-gauge.webp",
      alt: "Quality inspector operating a TESA height gauge",
    },
  ],
  stats: [
    { value: "98%", label: "On-time Delivery" },
    { value: "50,000 m²", label: "Manufacturing Facility" },
    { value: "8", label: "Specialized Workshops" },
    { value: "650+", label: "Manufacturing & Inspection Equipment" },
  ],
};

export function IMSupplier() {
  return (
    <section className="bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] md:gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="service-section-title text-white">
              <EditableText path="qualityDocumentation.headingPrefix" defaultValue={DEFAULTS.heading} />
              <span className="service-title-accent"><EditableText path="qualityDocumentation.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
            </h2>
            <div className="mt-6 space-y-5">
              <p className="service-section-copy">
                <EditableText path="qualityDocumentation.introduction" defaultValue={DEFAULTS.introduction} multiline />
              </p>
              <p className="service-section-copy">
                <EditableText path="qualityDocumentation.qualityPlanning" defaultValue={DEFAULTS.qualityPlanning} multiline />
              </p>
            </div>
            <div className="section-note mt-6">
              <p><EditableText path="qualityDocumentation.documentation" defaultValue={DEFAULTS.documentation} multiline /></p>
            </div>
            <p className="service-section-copy mt-6">
              For our quality-management approach, inspection resources, and certification information, visit {" "}
              <Link href="/quality" className="body-text-link body-text-link--dark">
                <EditableText path="qualityDocumentation.qualityLink" defaultValue={DEFAULTS.qualityLink} />
              </Link>.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid gap-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-[#171717]">
              <EditableImage path="qualityDocumentation.images.0.src" defaultSrc={DEFAULTS.images[0].src} alt={DEFAULTS.images[0].alt} fill sizes="(max-width: 767px) 100vw, 55vw" className="object-cover" />
              <span className="absolute bottom-3 left-3 bg-black/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">Manufacturing floor</span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {DEFAULTS.images.slice(1).map((image, index) => (
                <div key={image.src} className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-[#171717] sm:aspect-[4/3]">
                  <EditableImage path={`qualityDocumentation.images.${index + 1}.src`} defaultSrc={image.src} alt={image.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 28vw" className="object-cover" />
                  <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                    {index === 0 ? "CMM measurement" : "Height-gauge inspection"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {DEFAULTS.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="text-center transition-transform duration-300 hover:-translate-y-1"
              style={{
                padding: "20px 16px",
                background: "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                border: "1px solid rgba(208,153,71,0.3)",
                borderRadius: "12px",
              }}
            >
              <p className="text-[28px] font-bold leading-[1.1] text-[#D09947]">
                <EditableText path={`qualityDocumentation.stats.${index}.value`} defaultValue={stat.value} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.05em] text-[#A9A19A]">
                <EditableText path={`qualityDocumentation.stats.${index}.label`} defaultValue={stat.label} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
