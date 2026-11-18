"use client";

import { useState } from "react";
import { EditableText } from "@/components/cms";
import { motion } from "@/components/ui/StaticMotion";
import { StaticImage } from "@/components/ui/StaticImage";

const DEFAULTS = {
  headingPrefix: "Materials for ",
  headingHighlight: "Custom Bent Sheet Metal Parts",
  description:
    "Material selection affects formability, springback, crack risk, surface protection, corrosion resistance, weight, conductivity, and finishing options. The most suitable material is the one that meets the finished part’s functional and cosmetic requirements—not simply the lowest-cost sheet.",
  materials: [
    {
      name: "Steel",
      title: "Steel Bending and Custom Steel Bending",
      paragraphs: [
        "Low-carbon steel, including Q235 and SPCC, is a practical choice for brackets, chassis, machine covers, and general structural parts. It bends well, has manageable springback, and works with powder coating, plating, painting, and welded assemblies.",
        "For custom steel bending, use an inside bend radius of at least 0.8 × material thickness as an initial design reference. Final geometry should account for the selected grade, sheet thickness, bend direction, and finish.",
      ],
      highlights: [["Q235", "SPCC"], ["0.8 × material thickness"]],
      designReferences: [[], ["0.8 × material thickness"]],
      image: "/images/materials/cnc-metals/Steel%201.webp",
      imageAlt: "Steel sheet material for custom bending",
    },
    {
      name: "Stainless Steel",
      title: "Stainless Steel Metal Bending",
      paragraphs: [
        "Choose 304 or 316 stainless steel when corrosion resistance, strength, cleanability, or an exposed metal finish is important. It is often used for equipment housings, food-service components, medical-adjacent hardware, and durable visible panels.",
        "Stainless steel springs back more than mild steel after forming, so bend-angle control matters. Start with an inside bend radius of 1.0 × material thickness or more. If the part will be brushed, polished, passivated, or electropolished, identify visible faces before production so the surface can be protected through forming and finishing.",
      ],
      highlights: [["304", "316"], ["1.0 × material thickness"]],
      designReferences: [[], ["1.0 × material thickness"]],
      image: "/images/materials/cnc-metals/Stainless%20Steel%20Series%201.webp",
      imageAlt: "Stainless steel sheet material for bending",
    },
    {
      name: "Aluminum",
      title: "Aluminum Bending Services",
      paragraphs: [
        "Aluminum is well suited to lightweight enclosures, electronics housings, covers, panels, brackets, and transport-related parts. 5052-H32, 5052-O, and 5754 are strong starting choices when bendability is a priority.",
        "6061 offers higher strength, but its temper and bend geometry need more care because tight bends can crack. For suitable 5052 parts, begin with an inside bend radius of at least 0.5 × material thickness.",
      ],
      highlights: [["5052-H32", "5052-O", "5754"], ["6061", "5052", "0.5 × material thickness"]],
      designReferences: [[], ["0.5 × material thickness"]],
      image: "/images/materials/cnc-metals/Aluminum%20Alloy%201.webp",
      imageAlt: "Aluminum alloy sheet material for bending",
    },
    {
      name: "Copper & Brass",
      title: "Copper and Brass Bending",
      paragraphs: [
        "C11000 copper is a good fit for conductive parts, busbars, and electrical components. Its soft surface can mark during handling, so visible or contact surfaces benefit from defined protection and packaging.",
        "C2600 brass is used for decorative and electrical parts. It has low springback, yet hard tempers and tight radii raise crack risk. For either copper or brass, start with an inside bend radius of 0.5 × material thickness, then confirm the final geometry against the material condition.",
      ],
      highlights: [["C11000"], ["C2600", "0.5 × material thickness"]],
      designReferences: [[], ["0.5 × material thickness"]],
      image: "/images/materials/cnc-metals/Copper%20Alloys%201.webp",
      imageAlt: "Copper and brass sheet material for bending",
    },
    {
      name: "Galvanized Steel",
      title: "Galvanized Sheet Metal Bending",
      paragraphs: [
        "SGCC galvanized steel suits fabricated parts that need basic corrosion protection, including covers, brackets, panels, and outdoor-adjacent equipment components. The zinc-coated surface can scratch during forming, so identify cosmetic faces early and specify protective handling where appearance matters.",
      ],
      highlights: [["SGCC"]],
      designReferences: [[]],
      image: "/sheet-metal/cnc-turret-punching-galvanized-sheet-metal.avif",
      imageAlt: "CNC turret punching galvanized sheet metal",
    },
  ],
};

function renderHighlightedText(
  text: string,
  highlights: string[],
  designReferences: string[],
) {
  if (!highlights.length) return text;

  const escaped = highlights.map((highlight) =>
    highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const matcher = new RegExp(`(${escaped.join("|")})`, "g");

  return text.split(matcher).map((part, index) =>
    highlights.includes(part) ? (
      <strong
        key={index}
        className={`font-semibold ${
          designReferences.includes(part) ? "text-[#EEC569]" : "text-white"
        }`}
      >
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export function BendingMaterials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#34312F] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-left lg:text-center"
        >
          <h2 className="service-section-title text-white">
            <EditableText
              path="bendingMaterials.headingPrefix"
              defaultValue={DEFAULTS.headingPrefix}
            />
            <span className="service-title-accent">
              <EditableText
                path="bendingMaterials.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>
          <p className="service-section-copy section-reading-copy mt-6 text-left lg:text-center">
            <EditableText
              path="bendingMaterials.description"
              defaultValue={DEFAULTS.description}
              multiline
            />
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-start gap-3 lg:justify-center">
          {DEFAULTS.materials.map((material, index) => (
            <motion.button
              key={material.name}
              type="button"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setActiveIndex(index)}
              aria-pressed={activeIndex === index}
              className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 ${
                activeIndex === index
                  ? "border-[#D09947] bg-[#D09947]/15 text-[#EEC569]"
                  : "border-[#D09947]/30 text-[#C5C6C9] hover:border-[#D09947]/60 hover:text-white"
              }`}
            >
              <EditableText
                path={`bendingMaterials.materials.${index}.name`}
                defaultValue={material.name}
              />
            </motion.button>
          ))}
        </div>

        {DEFAULTS.materials.map((material, materialIndex) => (
          <motion.div
            key={material.name}
            hidden={activeIndex !== materialIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: activeIndex === materialIndex ? 1 : 0, y: activeIndex === materialIndex ? 0 : 16 }}
            transition={{ duration: 0.25 }}
            className="mt-10 overflow-hidden rounded-2xl border border-[#D09947]/15 bg-[#1A1A1A]"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-7 sm:p-10">
                <h3 className="text-[22px] font-bold leading-snug text-white">
                  <EditableText
                    path={`bendingMaterials.materials.${materialIndex}.title`}
                    defaultValue={material.title}
                  />
                </h3>
                <div className="mt-6 space-y-5">
                  {material.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="service-section-copy">
                      {renderHighlightedText(
                        paragraph,
                        material.highlights[paragraphIndex] ?? [],
                        material.designReferences[paragraphIndex] ?? [],
                      )}
                    </p>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[300px] md:min-h-full">
                <StaticImage
                  path={`bendingMaterials.materials.${materialIndex}.image`}
                  defaultSrc={material.image}
                  alt={material.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
