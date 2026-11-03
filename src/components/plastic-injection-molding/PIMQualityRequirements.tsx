"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "@/components/ui/StaticMotion";
import { EditableText } from "@/components/cms";
import { StaticImage } from "@/components/ui/StaticImage";

const DEFAULTS = {
  headingPrefix: "Quality Requirements for Custom Plastic ",
  headingHighlight: "Parts",
  listIntro: "Based on the approved drawing and agreed project scope, our custom injection molding services can include:",
  items: [
    "Material records and agreed resin requirements",
    "Critical-dimension and appearance inspection",
    "First-article inspection",
    "Incoming, in-process, and final inspection planning",
    "ZEISS CMM inspection",
    "Batch identification and project-specific documentation",
    "Material and batch traceability",
  ],
  certifications:
    "Quality-system information includes ISO 9001:2015, ISO 13485:2016, and ISO 14001:2015.",
  linkPrefix: "For quality-system details, inspection resources, and certification information, visit ",
  link: "Quality Assurance",
  images: [
    { src: "/injection-molding/apexbatch-plastic-injection-molding-production-line.avif", alt: "ApexBatch plastic injection molding production line" },
    { src: "/injection-molding/apexbatch-custom-injection-molding-manufacturing-facilities.avif", alt: "ApexBatch custom injection molding manufacturing facilities" },
    { src: "/injection-molding/apexbatch-injection-molded-part-height-gauge-inspection.webp", alt: "Height-gauge inspection of an injection molded part" },
  ],
  stats: [
    { value: "98%", label: "On-time Delivery" },
    { value: "50,000 m²", label: "Manufacturing Facility" },
    { value: "8", label: "Specialized Workshops" },
    { value: "650+", label: "Manufacturing & Inspection Equipment" },
  ],
};

export function PIMQualityRequirements() {
  return (
    <section className="bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] md:items-center md:gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="service-section-title text-white">
              <EditableText path="qualityRequirements.headingPrefix" defaultValue={DEFAULTS.headingPrefix} />
              <span className="service-title-accent"><EditableText path="qualityRequirements.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
            </h2>
            <p className="service-section-copy mt-6"><EditableText path="qualityRequirements.listIntro" defaultValue={DEFAULTS.listIntro} multiline /></p>
            <ul className="mt-5 grid gap-3">
              {DEFAULTS.items.map((item, index) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-[#F0F0F1]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#EEC569]" aria-hidden="true" />
                  <EditableText path={`qualityRequirements.items.${index}`} defaultValue={item} multiline />
                </li>
              ))}
            </ul>
            <p className="service-section-copy mt-6">
              <EditableText path="qualityRequirements.certifications" defaultValue={DEFAULTS.certifications} /> {" "}
              <EditableText path="qualityRequirements.linkPrefix" defaultValue={DEFAULTS.linkPrefix} />
              <Link href="/quality" className="body-text-link body-text-link--dark"><EditableText path="qualityRequirements.link" defaultValue={DEFAULTS.link} /></Link>.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
              <StaticImage path="qualityRequirements.images.0" defaultSrc={DEFAULTS.images[0].src} alt={DEFAULTS.images[0].alt} fill sizes="(max-width: 767px) 100vw, 48vw" className="object-cover" />
              <span className="absolute bottom-3 left-3 bg-black/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">Production line</span>
            </div>
            {DEFAULTS.images.slice(1).map((image, index) => (
              <div key={image.src} className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 sm:aspect-[4/3]">
                <StaticImage path={`qualityRequirements.images.${index + 1}`} defaultSrc={image.src} alt={image.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 24vw" className="object-cover" />
                <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">{index === 0 ? "Manufacturing facilities" : "Dimensional inspection"}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {DEFAULTS.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="text-center"
              style={{
                padding: "20px 16px",
                background: "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                border: "1px solid rgba(208,153,71,0.3)",
                borderRadius: "12px",
              }}
            >
              <p className="text-[28px] font-bold leading-[1.1] text-[#D09947]"><EditableText path={`qualityRequirements.stats.${index}.value`} defaultValue={stat.value} /></p>
              <p className="mt-2 text-xs uppercase tracking-[0.05em] text-[#A9A19A]"><EditableText path={`qualityRequirements.stats.${index}.label`} defaultValue={stat.label} /></p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
