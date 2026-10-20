"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EditableImage, EditableText } from "@/components/cms";
import { QUALITY_CERTIFICATE_IMAGES } from "@/lib/qualityCertificates";

const DEFAULTS = {
  headingPrefix: "Manufacturing Resources for ",
  headingHighlight: "Scalable Production",
  description:
    "Customers can access CNC machining, sheet metal fabrication, injection molding and supporting processes across our self-owned facilities and qualified manufacturing network. Resources are selected according to process fit, production capacity, inspection requirements and delivery priorities.",
  statsHeading: "Manufacturing at a Glance",
  stats: [
    { value: "50,000 m²", label: "Total Manufacturing Footprint" },
    { value: "8", label: "Specialized Production Workshops" },
    {
      value: "650+",
      label: "Manufacturing, Inspection and Supporting Equipment",
    },
    { value: "98%", label: "On-Time Delivery" },
  ],
  certifications: {
    heading: "Certified Management Systems",
    description:
      "Defined quality and environmental management systems support consistent production and continuous improvement.",
    standards: "ISO 9001:2015 · ISO 13485:2016 · ISO 14001:2015",
    linkLabel: "Explore Quality Assurance",
  },
  workshopsHeading: "Inside Our Manufacturing Network",
  workshops: [
    {
      title: "CNC Milling Workshop",
      description:
        "Precision machining for complex metal and plastic components, supported by more than 350 CNC machines and machining equipment across the manufacturing network.",
      image: "/about/apexbatch-cnc-milling-workshop.avif",
    },
    {
      title: "Large-Format Gantry Machining Workshop",
      description:
        "Machining resources for applicable large and complex components.",
      image: "/about/apexbatch-large-format-gantry-machining-workshop.avif",
    },
    {
      title: "CNC Turning Workshop",
      description:
        "Turning and related machining for cylindrical and rotational parts.",
      image: "/about/apexbatch-cnc-turning-workshop.avif",
    },
    {
      title: "Sheet Metal & Bending Workshop",
      description:
        "Laser cutting, forming and bending for sheet metal components.",
      image: "/about/apexbatch-sheet-metal-bending-workshop.avif",
    },
    {
      title: "Laser Welding Workshop",
      description:
        "Controlled welding for applicable sheet metal parts and assemblies.",
      image: "/about/apexbatch-laser-welding-workshop.avif",
    },
    {
      title: "Injection Molding Workshop",
      description:
        "Plastic-part production using project-specific molds and materials.",
      image: "/about/apexbatch-injection-molding-workshop.avif",
    },
    {
      title: "Additive Manufacturing Workshop",
      description:
        "3D printing for design validation, engineering samples and applicable production parts.",
      image: "/about/apexbatch-3d-printing-workshop.avif",
    },
    {
      title: "Vacuum Casting Workshop",
      description:
        "Silicone tooling and cast parts for applicable validation and low-volume requirements.",
      image: "/about/apexbatch-vacuum-casting-workshop.avif",
    },
  ],
  automation:
    "Our automation focus is applied within the manufacturing process. Where appropriate, dedicated fixtures, inspection aids and process-specific automation are used to improve repeatability, efficiency and production control.",
};

const CERTIFICATES = [
  { name: "ISO 9001", image: QUALITY_CERTIFICATE_IMAGES.iso9001 },
  { name: "ISO 13485", image: QUALITY_CERTIFICATE_IMAGES.iso13485 },
  { name: "ISO 14001", image: QUALITY_CERTIFICATE_IMAGES.iso14001 },
];

function Metric({ index }: { index: number }) {
  const metric = DEFAULTS.stats[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="relative min-w-0 rounded-lg bg-[#0D0D0D] px-3 py-5 text-center sm:px-4"
    >
      <span className="absolute left-0 top-0 h-3.5 w-3.5 border-l-2 border-t-2 border-[#D09947]" />
      <span className="absolute bottom-0 right-0 h-3.5 w-3.5 border-b-2 border-r-2 border-[#D09947]" />
      <div className="whitespace-nowrap text-[clamp(22px,4vw,30px)] font-bold leading-none tracking-[-0.035em] text-[#EEC569]">
        <EditableText
          path={`manufacturingResources.stats.${index}.value`}
          defaultValue={metric.value}
        />
      </div>
      <div className="mt-2 text-[11px] leading-4 text-[#EEC569] sm:text-xs">
        <EditableText
          path={`manufacturingResources.stats.${index}.label`}
          defaultValue={metric.label}
          multiline
        />
      </div>
    </motion.div>
  );
}

function WorkshopCard({
  index,
  isActive,
}: {
  index: number;
  isActive: boolean;
}) {
  const workshop = DEFAULTS.workshops[index];

  return (
    <article
      className="h-full overflow-hidden rounded-2xl bg-[#111111]"
      style={{
        border: isActive
          ? "2px solid #D09947"
          : "1px solid rgba(255,255,255,0.18)",
        boxShadow: isActive
          ? "0 0 0 1px rgba(208,153,71,0.25), 0 24px 60px rgba(0,0,0,0.42)"
          : "0 20px 50px rgba(0,0,0,0.35)",
      }}
    >
      <div className="relative h-[260px] overflow-hidden sm:h-[300px]">
        <EditableImage
          path={`manufacturingResources.workshops.${index}.image`}
          defaultSrc={workshop.image}
          alt={workshop.title}
          fill
          sizes="(max-width: 767px) 84vw, 52vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="min-h-[178px] p-5 sm:p-6">
        <h4 className="section-card-title section-card-title--accent">
          <EditableText
            path={`manufacturingResources.workshops.${index}.title`}
            defaultValue={workshop.title}
          />
        </h4>
        <p className="body-copy mt-3">
          <EditableText
            path={`manufacturingResources.workshops.${index}.description`}
            defaultValue={workshop.description}
            multiline
          />
        </p>
      </div>
    </article>
  );
}

function getNormalizedDiff(index: number, activeIndex: number, length: number) {
  let diff = index - activeIndex;
  while (diff > length / 2) diff -= length;
  while (diff < -length / 2) diff += length;
  return diff;
}

export function AboutManufacturingHub() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemCount = DEFAULTS.workshops.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + itemCount) % itemCount);
    },
    [itemCount]
  );

  const getCardLayout = (diff: number) => {
    const cardWidth = "52%";

    if (diff === 0) {
      return {
        left: "24%",
        width: cardWidth,
        y: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
      };
    }
    if (diff === -1) {
      return {
        left: "-14%",
        width: cardWidth,
        y: 20,
        scale: 0.93,
        opacity: 0.78,
        zIndex: 10,
      };
    }
    if (diff === 1) {
      return {
        left: "62%",
        width: cardWidth,
        y: 20,
        scale: 0.93,
        opacity: 0.78,
        zIndex: 10,
      };
    }
    return {
      left: diff < 0 ? "-70%" : "118%",
      width: cardWidth,
      y: 28,
      scale: 0.88,
      opacity: 0,
      zIndex: 0,
    };
  };

  return (
    <section className="overflow-hidden bg-[#34312F] px-4 py-16 sm:px-6 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="section-title">
            <EditableText
              path="manufacturingResources.headingPrefix"
              defaultValue={DEFAULTS.headingPrefix}
            />
            <span className="text-[#EEC569]">
              <EditableText
                path="manufacturingResources.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>
          <p className="section-intro-copy body-copy mt-5">
            <EditableText
              path="manufacturingResources.description"
              defaultValue={DEFAULTS.description}
              multiline
            />
          </p>
        </motion.div>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-[#1A1A1A] p-5 sm:p-7"
          >
            <h3 className="text-2xl font-bold text-white">
              <EditableText
                path="manufacturingResources.statsHeading"
                defaultValue={DEFAULTS.statsHeading}
              />
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {DEFAULTS.stats.map((_, index) => (
                <Metric key={index} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col rounded-2xl bg-[#1A1A1A] p-5 sm:p-7"
          >
            <h3 className="text-2xl font-bold text-white">
              <EditableText
                path="manufacturingResources.certifications.heading"
                defaultValue={DEFAULTS.certifications.heading}
              />
            </h3>
            <p className="body-copy mt-3">
              <EditableText
                path="manufacturingResources.certifications.description"
                defaultValue={DEFAULTS.certifications.description}
                multiline
              />
            </p>

            <div className="mt-5 flex items-center justify-center gap-2 sm:gap-3">
              {CERTIFICATES.map((certificate) => (
                <div
                  key={certificate.name}
                  className="relative h-[112px] w-[84px] overflow-hidden rounded-md sm:h-[128px] sm:w-[96px]"
                >
                  <Image
                    src={certificate.image}
                    alt={`${certificate.name} certificate`}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-xs font-semibold leading-5 text-[#EEC569] sm:text-sm">
              <EditableText
                path="manufacturingResources.certifications.standards"
                defaultValue={DEFAULTS.certifications.standards}
              />
            </p>
            <div className="mt-auto pt-5 text-center">
              <Link
                href="/quality"
                className="body-text-link body-text-link--dark text-sm"
              >
                <EditableText
                  path="manufacturingResources.certifications.linkLabel"
                  defaultValue={DEFAULTS.certifications.linkLabel}
                />{" "}
                →
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-[26px] font-bold tracking-[-0.02em] text-white sm:text-[32px] lg:text-[36px]"
          >
            <EditableText
              path="manufacturingResources.workshopsHeading"
              defaultValue={DEFAULTS.workshopsHeading}
            />
          </motion.h3>

          <div className="mt-8 md:hidden">
            <WorkshopCard index={activeIndex} isActive />

            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous workshop"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D09947]/40 bg-black/60"
              >
                <ChevronLeft className="h-5 w-5 text-[#D09947]" />
              </button>

              <div className="flex items-center gap-2">
                {DEFAULTS.workshops.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to workshop ${index + 1}`}
                    className="h-1 rounded-full transition-all"
                    style={{
                      width: index === activeIndex ? "24px" : "12px",
                      background:
                        index === activeIndex ? "#D09947" : "#6B6561",
                    }}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next workshop"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D09947]/40 bg-black/60"
              >
                <ChevronRight className="h-5 w-5 text-[#D09947]" />
              </button>
            </div>
          </div>

          <div className="relative mt-10 hidden md:block">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous workshop"
              className="absolute left-0 top-[230px] z-40 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-lg border border-[#D09947]/40 bg-black/60 transition-colors hover:bg-[#D09947]/15 md:flex"
            >
              <ChevronLeft className="h-5 w-5 text-[#D09947]" />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next workshop"
              className="absolute right-0 top-[230px] z-40 hidden h-11 w-11 translate-x-1/2 items-center justify-center rounded-lg border border-[#D09947]/40 bg-black/60 transition-colors hover:bg-[#D09947]/15 md:flex"
            >
              <ChevronRight className="h-5 w-5 text-[#D09947]" />
            </button>

            <div className="relative h-[510px] overflow-hidden">
              {DEFAULTS.workshops.map((workshop, index) => {
                const diff = getNormalizedDiff(index, activeIndex, itemCount);
                const layout = getCardLayout(diff);
                const isActive = diff === 0;
                const isAdjacent = Math.abs(diff) === 1;

                return (
                  <motion.button
                    key={workshop.title}
                    type="button"
                    onClick={() => isAdjacent && goTo(index)}
                    aria-label={
                      isActive ? workshop.title : `View ${workshop.title}`
                    }
                    className="group absolute top-0 border-0 bg-transparent p-0 text-left"
                    initial={false}
                    animate={layout}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      cursor: isAdjacent ? "pointer" : "default",
                      pointerEvents:
                        isActive || isAdjacent ? "auto" : "none",
                    }}
                  >
                    <WorkshopCard index={index} isActive={isActive} />
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous workshop"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D09947]/40 bg-black/60 md:hidden"
              >
                <ChevronLeft className="h-5 w-5 text-[#D09947]" />
              </button>

              <div className="flex items-center gap-2">
                {DEFAULTS.workshops.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to workshop ${index + 1}`}
                    className="h-1 rounded-full transition-all"
                    style={{
                      width: index === activeIndex ? "24px" : "12px",
                      background:
                        index === activeIndex ? "#D09947" : "#6B6561",
                    }}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next workshop"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D09947]/40 bg-black/60 md:hidden"
              >
                <ChevronRight className="h-5 w-5 text-[#D09947]" />
              </button>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-note mx-auto mt-10 max-w-5xl"
          >
            <EditableText
              path="manufacturingResources.automation"
              defaultValue={DEFAULTS.automation}
              multiline
            />
          </motion.p>
        </div>
      </div>
    </section>
  );
}
