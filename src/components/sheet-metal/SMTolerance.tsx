"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableImage, EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Sheet Metal Manufacturing ",
  headingHighlight: "Capabilities",
  description:
    "Our custom sheet metal fabrication services combine cutting, forming, joining, finishing and inspection for flat, formed, welded and assembly-ready parts. The data below provides an initial capability reference; final feasibility depends on your part design and engineering review.",
  laser: {
    title: "Laser Cutting",
    description:
      "Laser cutting produces accurate flat profiles, holes, slots, cutouts and complex contours for parts that move on to bending, welding, finishing, hardware insertion or assembly.",
    image: "/sheet-metal/laser-cutting-custom-metal-sheet-parts.webp",
    imageAlt: "Laser cutting custom metal sheet parts in the ApexBatch workshop",
    note:
      "Stainless steel, aluminum, copper and other project-specific requirements are reviewed according to material grade, thickness, edge condition, tolerance and downstream processing needs.",
    cta: "Explore Laser Cutting Services",
    ctaHref: "/laser-cutting",
    reference: [
      { label: "Maximum sheet size", value: "3000 × 1500 mm" },
      { label: "Maximum thickness", value: "10.0 mm" },
    ],
  },
  bending: {
    title: "Sheet Metal Forming and CNC Bending",
    description:
      "CNC press-brake bending turns flat profiles into enclosures, channels, brackets, panels, covers, and formed structural components. Material grade, thickness, radius, flange length, bend sequence, tool access, and tolerance are reviewed before production.",
    image: "/sheet-metal/cnc-press-brake-forming-sheet-metal-part.avif",
    imageAlt: "CNC press brake forming a sheet metal part",
    note:
      "Material limits, bend-radius guidance, tolerances, and design rules are reviewed against the drawing, material condition, tooling access, and required formed features.",
    cta: "Discuss Your Bending Requirements",
    ctaHref: "/contact",
    headers: ["Capability", "Available range", "Notes"],
    rows: [
      ["Maximum bend length", "Up to 3000 mm", "Thickness capacity changes with bend length, material, tooling, and geometry"],
      ["Minimum sheet thickness", "From 0.2 mm", "Depends on material condition and feature requirements"],
      ["Bend angles", "30° to 180° where applicable", "Angle definition, feature clearance, and tolerance are reviewed from the drawing"],
      ["Bending methods", "CNC press-brake bending and applicable tooling", "Suitable tooling is selected for the part geometry"],
      ["Multi-bend parts", "Single or multi-step bending", "Return flanges, adjacent bends, and tool interference require review"],
    ],
  },
  secondaryCapabilities: [
    {
      title: "NCT Punching, Metal Punching and Forming",
      description:
        "Metal punching supports applicable hole patterns, repeated features, and formed details. Laser cutting and punching are selected according to feature type, quantity, material, thickness, and production requirements.",
      image: "/sheet-metal/cnc-turret-punching-galvanized-sheet-metal.avif",
      imageAlt: "CNC turret punching galvanized sheet metal",
      headers: ["Capability", "Available range", "Notes"],
      rows: [
        ["Maximum sheet size", "1220 × 2440 mm", "Confirm part geometry and required formed features"],
        ["Carbon steel and aluminum thickness", "Up to 2.0 mm", "Confirm hole type, feature design, and secondary operations"],
        ["Stainless steel thickness", "Up to 1.5 mm", "Confirm grade, hole pattern, and feature requirements"],
      ],
    },
    {
      title: "Sheet Metal Welding and Hardware Insertion",
      description:
        "Sheet metal welding and hardware insertion turn separate cut and formed components into functional assemblies. The final method depends on material, thickness, joint access, distortion control, appearance, insert type, and assembly sequence.",
      image: "/sheet-metal/custom-sheet-metal-enclosure-welds-hardware-insertion.avif",
      imageAlt: "Custom sheet metal enclosure with finished welds and hardware insertion",
      headers: ["Process", "Capability", "Review focus"],
      rows: [
        ["TIG welding", "Applicable steel, aluminum, and stainless-steel parts", "Joint design, weld access, thickness, appearance, distortion, inspection"],
        ["Handheld laser welding", "Applicable thin-sheet parts", "Material, joint geometry, thickness, strength, cosmetic requirement"],
        ["Hardware insertion", "Parts up to 1000 × 2000 mm", "Sheet material, thickness, insert type, access, assembly sequence"],
      ],
    },
  ],
};

type Capability = {
  title: string;
  description: string;
  headers?: string[];
  rows?: string[][];
  reference?: { label: string; value: string }[];
};

function CapabilityTable({ capability, path }: { capability: Capability; path: string }) {
  const { headers, rows } = capability;
  if (!headers || !rows) return null;

  return (
    <>
      <div className="w-full max-w-full overflow-x-auto border border-white/10 md:overflow-visible">
        <table className="min-w-[720px] w-full border-collapse text-left md:min-w-0">
          <thead className="bg-[#292624]">
            <tr>
              {headers.map((header, index) => (
                <th key={header} className="border-b border-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#EEC569]">
                  <EditableText path={`${path}.headers.${index}`} defaultValue={header} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={row[0]} className="border-b border-white/[0.07] last:border-0">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className={`px-4 py-3 text-sm leading-relaxed ${cellIndex === 1 ? "font-medium text-[#F4F1EC]" : "text-[#C5C1BD]"}`}>
                    <EditableText path={`${path}.rows.${rowIndex}.${cellIndex}`} defaultValue={cell} multiline />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function FeatureCapability({ capability, path, reverse, hideDetails = false, detailsBelowImage = false, hideCta = false }: { capability: Capability & { image: string; imageAlt: string; note?: string; cta?: string; ctaHref?: string }; path: string; reverse?: boolean; hideDetails?: boolean; detailsBelowImage?: boolean; hideCta?: boolean }) {
  return (
    <article className={`grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${reverse ? "" : ""}`}>
      <div className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
          <EditableText path={`${path}.title`} defaultValue={capability.title} />
        </h3>
        <div className="relative mt-5 h-[240px] w-full max-w-full overflow-hidden border border-white/10 sm:h-[320px] lg:hidden">
          <EditableImage path={`${path}.image`} defaultSrc={capability.image} alt={capability.imageAlt} fill sizes="100vw" className="object-cover" />
        </div>
        <p className="service-section-copy mt-4 max-w-[580px] break-words">
          <EditableText path={`${path}.description`} defaultValue={capability.description} multiline />
        </p>
        <div className="mt-6">
          {capability.reference ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {capability.reference.map((item, index) => (
                <div key={item.label} className="border border-white/10 bg-[#1A1918] px-5 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EEC569]">
                    <EditableText path={`${path}.reference.${index}.label`} defaultValue={item.label} />
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#F4F1EC]">
                    <EditableText path={`${path}.reference.${index}.value`} defaultValue={item.value} />
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <CapabilityTable capability={capability} path={path} />
          )}
        </div>
        {!hideDetails && !detailsBelowImage && capability.note ? (
          <>
            <div className="section-note mt-6">
              <p><EditableText path={`${path}.note`} defaultValue={capability.note} multiline /></p>
            </div>
            {!hideCta && capability.cta && capability.ctaHref ? (
              <Link href={capability.ctaHref} className="body-text-link body-text-link--dark mt-6 inline-flex items-center gap-2 text-sm">
                <EditableText path={`${path}.cta`} defaultValue={capability.cta} />
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}
          </>
        ) : null}
      </div>
      <div className={`hidden lg:block ${reverse ? "lg:order-1" : ""}`}>
        <div className="relative aspect-[4/3] min-h-[260px] overflow-hidden border border-white/10 sm:min-h-[360px]">
          <EditableImage path={`${path}.image`} defaultSrc={capability.image} alt={capability.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        {!hideDetails && detailsBelowImage && capability.note ? (
          <>
            <div className="section-note mt-5">
              <p><EditableText path={`${path}.note`} defaultValue={capability.note} multiline /></p>
            </div>
            {!hideCta && capability.cta && capability.ctaHref ? (
              <Link href={capability.ctaHref} className="body-text-link body-text-link--dark mt-5 inline-flex items-center gap-2 text-sm">
                <EditableText path={`${path}.cta`} defaultValue={capability.cta} />
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}
          </>
        ) : null}
      </div>
    </article>
  );
}

export function SMTolerance() {
  return (
    <section className="relative overflow-hidden bg-[#252220] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl">
          <h2 className="service-section-title text-white">
            <EditableText path="capabilities.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent"><EditableText path="capabilities.headingHighlight" defaultValue={DEFAULTS.headingHighlight} /></span>
          </h2>
          <p className="service-section-copy mt-6 max-w-4xl">
            <EditableText path="capabilities.description" defaultValue={DEFAULTS.description} multiline />
          </p>
        </motion.div>

        <div className="mt-14 space-y-20 lg:mt-16 lg:space-y-28">
          <FeatureCapability capability={DEFAULTS.laser} path="capabilities.laser" />
          <FeatureCapability capability={DEFAULTS.bending} path="capabilities.bending" reverse hideDetails />
        </div>

        <div className="mt-20 space-y-20 lg:mt-24 lg:space-y-28">
          {DEFAULTS.secondaryCapabilities.map((capability, index) => (
            <FeatureCapability
              key={capability.title}
              capability={capability}
              path={`capabilities.secondary.${index}`}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center lg:mt-16"
        >
          <Link href="https://app.apexbatch.com/" rel="nofollow" className="cta-primary group">
            <EditableText path="capabilities.cta" defaultValue="Get a Quote" />
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
