"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditableImage, EditableText } from "@/components/cms";
import { ServiceTable } from "@/components/ui/ServiceTable";

const DEFAULTS = {
  heading: "Aluminum Materials and ",
  headingHighlight: "Surface Finishes",
  alloyImage:
    "/images/services/aluminum-extrusion/custom-aluminum-extrusion-profile-design-example.avif",
  alloysHeading: "Aluminum Alloys",
  alloyColumns: ["Alloy", "Best suited for"],
  alloys: [
    {
      alloy: "6063-T5",
      lead: "6063 aluminum extrusions",
      tail: "for smooth cosmetic surfaces, anodizing, trim, enclosures and general industrial profiles.",
    },
    {
      alloy: "6061-T6",
      lead: "6061 aluminum extrusions",
      tail: "for higher-strength structural parts and machined components.",
    },
    {
      alloy: "6060",
      lead: "",
      tail: "Complex profiles requiring good formability and surface quality.",
    },
  ],
  materialNote:
    "Material and dimensional requirements for finished aluminum extrusion parts can be reviewed against applicable GB, ASTM B221, EN 755 and JIS specifications. Mill certificates are available per batch.",
  finishesHeading: "Extrusion Surface Finish",
  finishesIntroduction:
    "From corrosion protection to premium aesthetics — we offer 5 in-house finishing lines with full process control. Custom colors, gloss levels, and MIL-spec hard anodizing are available.",
  finishes: [
    {
      name: "Anodizing",
      description: "Colors: Clear, black, silver and custom colors",
      specLabel: "Film thickness",
      specValue: "5–25 μm",
      infoValue:
        "Anodized aluminum extrusions for corrosion resistance and decorative clear, black, silver or custom-color finishes.",
      image: "/images/surface-finishing/aluminum-protection/surface-finishing-type-ii-anodizing.webp",
    },
    {
      name: "Powder Coating",
      description: "Options: RAL colors, metallic, textured, matte and gloss",
      specLabel: "Film thickness",
      specValue: "60–120 μm (custom up to 180 μm)",
      infoValue:
        "Powder-coated aluminum profiles with impact-resistant, UV-stabilized protection and salt spray performance exceeding 1,000 hours.",
      image: "/images/surface-finishing/protective-coatings/surface-finishing-powder-coating.webp",
    },
    {
      name: "Brushing",
      description: "Patterns: Straight grain, random orbital and fine satin",
      specLabel: "Surface roughness",
      specValue: "Ra 0.3–0.8 μm achievable",
      infoValue:
        "Uniform decorative lines that help hide fingerprints on appearance-critical parts.",
      image: "/images/surface-finishing/base-preparation/surface-finishing-brushing.webp",
    },
    {
      name: "Polishing",
      description: "Finish levels: Satin, semi-gloss and mirror",
      specLabel: "Reflectivity",
      specValue: "Up to 85% after mechanical polishing",
      infoValue:
        "High-gloss decorative finish for strips, lighting reflectors and luxury goods.",
      image: "/images/surface-finishing/base-preparation/surface-finishing-mirror-polishing.webp",
    },
    {
      name: "Sandblasting",
      description: "Texture: Uniform matte with no directional scratches",
      specLabel: "Grit",
      specValue: "Fine (100–150 mesh) / Coarse (40–60 mesh)",
      infoValue:
        "Uniform matte texture that increases surface area for adhesive bonding and improves paint adhesion.",
      image: "/images/surface-finishing/base-preparation/surface-finishing-sand-blasting.webp",
    },
  ],
  workflow:
    "As an aluminum extrusion manufacturer, ApexBatch coordinates tooling, profile production, CNC machining and surface finishing through one project workflow. Specify your required color, texture or coating performance when requesting a quote.",
};

export function EXAlloysFinishes() {
  return (
    <section className="relative overflow-hidden bg-[#34312F] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="service-section-title"
        >
          <EditableText path="alloysFinishes.heading" defaultValue={DEFAULTS.heading} />
          <span className="service-title-accent">
            <EditableText
              path="alloysFinishes.headingHighlight"
              defaultValue={DEFAULTS.headingHighlight}
            />
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-14"
        >
          <h3 className="service-subsection-title mb-6">
            <EditableText
              path="alloysFinishes.alloysHeading"
              defaultValue={DEFAULTS.alloysHeading}
            />
          </h3>
          <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-10">
            <div className="order-2 lg:order-1">
              <ServiceTable
                variant="compact"
                caption="Aluminum alloys and their recommended applications"
                columns={[
                  { header: DEFAULTS.alloyColumns[0], width: "22%" },
                  { header: DEFAULTS.alloyColumns[1] },
                ]}
                rows={DEFAULTS.alloys.map((alloy, index) => [
                  <EditableText
                    key="alloy"
                    path={`alloysFinishes.alloys.${index}.alloy`}
                    defaultValue={alloy.alloy}
                  />,
                  <span key="use">
                    {alloy.lead && (
                      <>
                        <EditableText
                          path={`alloysFinishes.alloys.${index}.lead`}
                          defaultValue={alloy.lead}
                        />{" "}
                      </>
                    )}
                    <EditableText
                      path={`alloysFinishes.alloys.${index}.tail`}
                      defaultValue={alloy.tail}
                      multiline
                    />
                  </span>,
                ])}
              />
            </div>
            <div className="relative order-1 min-h-[260px] overflow-hidden rounded-lg lg:order-2 lg:min-h-0">
              <EditableImage
                path="alloysFinishes.alloyImage"
                defaultSrc={DEFAULTS.alloyImage}
                alt="Custom aluminum extrusion profile design example"
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
          <p className="service-section-copy mt-6 max-w-[920px]">
            <EditableText
              path="alloysFinishes.materialNote"
              defaultValue={DEFAULTS.materialNote}
              multiline
            />
          </p>
        </motion.div>

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-[#D09947]/70 to-transparent lg:my-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="service-subsection-title">
            <EditableText
              path="alloysFinishes.finishesHeading"
              defaultValue={DEFAULTS.finishesHeading}
            />
          </h3>
          <p className="service-section-copy mb-12 mt-4 max-w-[760px]">
            <EditableText
              path="alloysFinishes.finishesIntroduction"
              defaultValue={DEFAULTS.finishesIntroduction}
              multiline
            />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DEFAULTS.finishes.map((finish, index) => (
            <motion.article
              key={finish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-xl border-2 border-[#D09947]/35 bg-[#1A1A1A] shadow-[0_14px_36px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D09947] hover:shadow-[0_0_50px_rgba(208,153,71,0.35),0_14px_36px_rgba(0,0,0,0.45)]"
            >
              <div className="px-6 pt-6">
                <h4 className="mb-2 text-[20px] font-extrabold text-white">
                  <EditableText
                    path={`alloysFinishes.finishes.${index}.name`}
                    defaultValue={finish.name}
                  />
                </h4>
                <p className="service-support-copy mb-5 min-h-[42px]">
                  <EditableText
                    path={`alloysFinishes.finishes.${index}.description`}
                    defaultValue={finish.description}
                    multiline
                  />
                </p>
                <div className="relative mb-6 h-[180px] overflow-hidden rounded-lg">
                  <EditableImage
                    path={`alloysFinishes.finishes.${index}.image`}
                    defaultSrc={finish.image}
                    alt={`${finish.name} for aluminum extrusions`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="mb-5">
                  <p className="mb-1 text-[14px] font-bold text-[#EEC569]">
                    <EditableText
                      path={`alloysFinishes.finishes.${index}.specLabel`}
                      defaultValue={finish.specLabel}
                    />
                  </p>
                  <p className="text-[16px] font-semibold text-white">
                    <EditableText
                      path={`alloysFinishes.finishes.${index}.specValue`}
                      defaultValue={finish.specValue}
                    />
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4">
                <p className="mb-1 text-[14px] font-bold text-[#EEC569]">
                  Function and Use
                </p>
                <p className="service-card-copy">
                  <EditableText
                    path={`alloysFinishes.finishes.${index}.infoValue`}
                    defaultValue={finish.infoValue}
                    multiline
                  />
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center text-center"
        >
          <p className="service-section-copy mx-auto max-w-[900px]">
            Explore more about our{" "}
            <Link href="/surface-finishing" className="body-text-link body-text-link--dark">
              surface finishing options
            </Link>
            .
          </p>
          <p className="service-section-copy mx-auto mt-4 max-w-[900px]">
            <EditableText
              path="alloysFinishes.workflow"
              defaultValue={DEFAULTS.workflow}
              multiline
            />
          </p>
          <Link
            href="https://app.apexbatch.com/"
            rel="nofollow"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded bg-[#D09947] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:bg-[#EEC569]"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
