"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EditableImage, EditableText } from "@/components/cms";

const DEFAULTS = {
  headingPrefix: "Manufacturing Resources for ",
  headingHighlight: "Scalable Production",
  description:
    "Customers can access CNC machining, sheet metal fabrication, injection molding and supporting processes across our self-owned facilities and qualified manufacturing network. Resources are selected according to process fit, production capacity, inspection requirements and delivery priorities.",
  workshops: [
    {
      title: "CNC Milling Workshop",
      description:
        "Precision machining for complex metal and plastic components, supported by more than 350 CNC machines and machining equipment across the manufacturing network.",
      image: "/about/apexbatch-cnc-milling-workshop.avif",
      supportingImage: "/about/apexbatch-five-axis-cnc-machines-operated.avif",
      supportingImageAlt: "ApexBatch five-axis CNC machines in operation",
      additionalSupportingImage: "/about/apexbatch-black-five-axis-cnc-machine-workshop.avif",
      additionalSupportingImageAlt: "Black five-axis CNC machine in the ApexBatch workshop",
    },
    {
      title: "Large-Format Gantry Machining Workshop",
      description:
        "Machining resources for applicable large and complex components.",
      image: "/about/apexbatch-large-format-gantry-machining-workshop.avif",
      supportingImage: "/about/apexbatch-heavy-machining-tooling-assembly-workshop.avif",
      supportingImageAlt: "ApexBatch heavy machining tooling and assembly workshop",
      additionalSupportingImage: "/about/apexbatch-vision-wide-double-column-cnc-machining-center.avif",
      additionalSupportingImageAlt: "Vision Wide double-column CNC machining center for large-part machining",
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
      supportingImage: "/about/apexbatch-amada-cnc-press-brake-sheet-metal-bending.avif",
      supportingImageAlt: "ApexBatch AMADA CNC press brake for sheet metal bending",
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
      supportingImage: "/about/apexbatch-haitian-automated-injection-molding-machines.avif",
      supportingImageAlt: "ApexBatch Haitian automated injection molding machines",
    },
    {
      title: "Additive Manufacturing Workshop",
      description:
        "3D printing for design validation, engineering samples and applicable production parts.",
      image: "/about/apexbatch-3d-printing-workshop.avif",
      supportingImage: "/about/apexbatch-blt-a400-metal-3d-printing-machine.avif",
      supportingImageAlt: "ApexBatch BLT A400 metal 3D printing machine",
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

function WorkshopCard({
  index,
  isActive,
}: {
  index: number;
  isActive: boolean;
}) {
  const workshop = DEFAULTS.workshops[index];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const supportingImage =
    "supportingImage" in workshop ? workshop.supportingImage : undefined;
  const supportingImageAlt =
    "supportingImageAlt" in workshop ? workshop.supportingImageAlt : undefined;
  const additionalSupportingImage =
    "additionalSupportingImage" in workshop ? workshop.additionalSupportingImage : undefined;
  const additionalSupportingImageAlt =
    "additionalSupportingImageAlt" in workshop ? workshop.additionalSupportingImageAlt : undefined;
  const imageViews = [
    {
      src: workshop.image,
      alt: workshop.title,
      path: `manufacturingResources.workshops.${index}.image`,
      label: "Workshop",
    },
    ...(supportingImage
      ? [{
          src: supportingImage,
          alt: supportingImageAlt ?? `${workshop.title} supporting equipment`,
          path: `manufacturingResources.workshops.${index}.supportingImage`,
          label: "Equipment",
        }]
      : []),
    ...(additionalSupportingImage
      ? [{
          src: additionalSupportingImage,
          alt: additionalSupportingImageAlt ?? `${workshop.title} additional equipment`,
          path: `manufacturingResources.workshops.${index}.additionalSupportingImage`,
          label: "Equipment",
        }]
      : []),
  ];
  const displayedView = imageViews[activeImageIndex] ?? imageViews[0];

  return (
    <article
      className="group h-full overflow-hidden rounded-2xl bg-[#111111]"
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
          path={displayedView.path}
          defaultSrc={displayedView.src}
          alt={displayedView.alt}
          fill
          sizes="(max-width: 767px) 84vw, 52vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {imageViews.length > 1 ? (
          <div className="absolute bottom-3 left-3 z-10 flex items-end gap-2 rounded-lg bg-black/70 p-1.5 backdrop-blur-sm">
            {imageViews.map((view, imageIndex) => (
              <button
                key={view.path}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveImageIndex(imageIndex);
                }}
                aria-pressed={activeImageIndex === imageIndex}
                className={`overflow-hidden rounded border transition-colors ${
                  activeImageIndex === imageIndex
                    ? "border-[#EEC569]"
                    : "border-white/25 opacity-75 hover:opacity-100"
                }`}
              >
                <span className="relative block h-10 w-14">
                  <EditableImage
                    path={view.path}
                    defaultSrc={view.src}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </span>
                <span className="sr-only">Show {view.label.toLowerCase()} view</span>
              </button>
            ))}
            <span className="pb-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#EEC569]">
              {displayedView.label}
            </span>
          </div>
        ) : null}
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
  const swipeStartX = useRef<number | null>(null);
  const itemCount = DEFAULTS.workshops.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + itemCount) % itemCount);
    },
    [itemCount]
  );

  const handleTouchStart = (event: React.TouchEvent) => {
    swipeStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const startX = swipeStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    swipeStartX.current = null;

    if (startX === null || endX === undefined || Math.abs(endX - startX) < 48) {
      return;
    }

    goTo(activeIndex + (endX < startX ? 1 : -1));
  };

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

        <div className="mt-10 md:mt-14">
          <div
            className="md:hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
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

          <div className="relative mt-8 hidden md:block">
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

            <div
              className="relative h-[510px] overflow-hidden touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {DEFAULTS.workshops.map((workshop, index) => {
                const diff = getNormalizedDiff(index, activeIndex, itemCount);
                const layout = getCardLayout(diff);
                const isActive = diff === 0;
                const isAdjacent = Math.abs(diff) === 1;

                return (
                  <motion.div
                    key={workshop.title}
                    onClick={() => isAdjacent && goTo(index)}
                    role={isAdjacent ? "button" : undefined}
                    tabIndex={isAdjacent ? 0 : undefined}
                    onKeyDown={(event) => {
                      if (
                        isAdjacent &&
                        (event.key === "Enter" || event.key === " ")
                      ) {
                        event.preventDefault();
                        goTo(index);
                      }
                    }}
                    aria-label={isAdjacent ? `View ${workshop.title}` : undefined}
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
                  </motion.div>
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
