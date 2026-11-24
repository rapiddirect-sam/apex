"use client";

import Link from "next/link";
import { EditableText } from "@/components/cms";
import { StaticImage } from "@/components/ui/StaticImage";
import { motion } from "@/components/ui/StaticMotion";

type Finish = {
  name: string;
  image: string;
  imageAlt: string;
  bestFor: string;
  available: string;
  confirm: string;
};

const DEFAULTS = {
  heading: "Surface Finishing for ",
  headingHighlight: "Formed Sheet Metal Parts",
  description:
    "Finishing can protect against corrosion, support a required appearance, improve cleanability, add identification, or prepare a part for its operating environment. Choose the finish before production when corrosion protection, visible appearance, thread fit, contact areas, or assembly clearance matter. These six post-bending options help define the finished part before manufacturing begins.",
  finishes: [
    {
      name: "Powder Coating",
      image:
        "/images/surface-finishing/protective-coatings/surface-finishing-powder-coating.webp",
      imageAlt: "Powder-coated formed sheet metal parts",
      bestFor:
        "Steel and aluminum parts that need durable color, corrosion protection, and a consistent decorative appearance.",
      available:
        "Electrostatic powder coating in RAL and Pantone color systems, with selectable gloss and texture.",
      confirm:
        "Color code, gloss, texture, visible surfaces, masking areas, threaded features, mating faces, and coating clearance.",
    },
    {
      name: "Anodizing",
      image:
        "/images/surface-finishing/aluminum-protection/surface-finishing-type-ii-anodizing.webp",
      imageAlt: "Anodized aluminum formed sheet metal component",
      bestFor:
        "Aluminum parts that need improved corrosion resistance while retaining a metallic appearance.",
      available:
        "Clear, black, and selected anodized color options for suitable aluminum components.",
      confirm:
        "Alloy, color, visible faces, masking areas, contact surfaces, and dimensions affected by the finished coating.",
    },
    {
      name: "Brushing",
      image:
        "/images/surface-finishing/base-preparation/surface-finishing-brushing.webp",
      imageAlt: "Brushed metal surface finish for formed sheet metal",
      bestFor:
        "Stainless steel and aluminum parts where a controlled grain or refined matte appearance matters.",
      available:
        "Straight-grain and non-directional brushing for suitable formed parts.",
      confirm:
        "Grain direction, visible surfaces, approved sample requirements, handling-mark expectations, and protective packaging.",
    },
    {
      name: "Polishing",
      image:
        "/images/surface-finishing/base-preparation/surface-finishing-mirror-polishing.webp",
      imageAlt: "Polished metal surface finish for formed sheet metal",
      bestFor:
        "Stainless steel and aluminum parts that require a smoother satin finish or a reflective decorative surface.",
      available:
        "Satin and mirror-polishing options for suitable components.",
      confirm:
        "Required polish level, visible faces, allowable handling marks, part geometry, and surfaces that must remain untreated for assembly.",
    },
    {
      name: "Electroplating",
      image:
        "/images/surface-finishing/plating-treatments/electroplating-surface-finishing-service.webp",
      imageAlt: "Electroplated formed metal component",
      bestFor:
        "Steel and copper parts that need corrosion protection, a metallic appearance, or functional electrical contact.",
      available:
        "Zinc, nickel, chrome, and related plating options for suitable parts.",
      confirm:
        "Plating type, corrosion target, threads, mating surfaces, and cosmetic expectations.",
    },
    {
      name: "Painting",
      image:
        "/images/surface-finishing/protective-coatings/surface-finishing-spray-painting.webp",
      imageAlt: "Painted formed sheet metal component",
      bestFor:
        "Formed parts that need a single-color or graphic finish, including projects with specific visual requirements.",
      available:
        "Spray-painting options with selectable color, gloss, texture, and decorative effects.",
      confirm:
        "Color reference, gloss level, visible surfaces, artwork or marking requirements, masking areas, and handling expectations.",
    },
  ] satisfies Finish[],
  linkPrefix:
    "For more surface-finish options and detailed performance requirements, visit our ",
  linkText: "surface finishing services",
};

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#EEC569]">{label}</p>
      <div className="mt-2 text-sm leading-[1.6] text-[#C5C6C9]">{children}</div>
    </div>
  );
}

export function BendingFinishes() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-intro-copy--left"
        >
          <h2 className="service-section-title text-white">
            <EditableText path="bendingFinishes.heading" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent">
              <EditableText
                path="bendingFinishes.headingHighlight"
                defaultValue={DEFAULTS.headingHighlight}
              />
            </span>
          </h2>
          <p className="service-section-copy mt-6">
            <EditableText
              path="bendingFinishes.description"
              defaultValue={DEFAULTS.description}
              multiline
            />
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DEFAULTS.finishes.map((finish, index) => (
            <motion.div
              key={finish.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#D09947]/35 bg-[#1A1A1A] transition-all duration-300 hover:-translate-y-1 hover:border-[#D09947] hover:shadow-[0_0_32px_rgba(208,153,71,0.22)]"
            >
              <div className="p-6 pb-0">
                <h3 className="text-xl font-extrabold text-white">
                  <EditableText
                    path={`bendingFinishes.items.${index}.name`}
                    defaultValue={finish.name}
                  />
                </h3>
                <div className="relative mt-4 h-44 overflow-hidden rounded-lg">
                  <StaticImage
                    path={`bendingFinishes.items.${index}.image`}
                    defaultSrc={finish.image}
                    alt={finish.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 368px, (min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6">
                <Detail label="Best for">
                  <EditableText
                    path={`bendingFinishes.items.${index}.bestFor`}
                    defaultValue={finish.bestFor}
                    multiline
                  />
                </Detail>
                <Detail label="Available through ApexBatch">
                  <EditableText
                    path={`bendingFinishes.items.${index}.available`}
                    defaultValue={finish.available}
                    multiline
                  />
                </Detail>
                <Detail label="Confirm for your part">
                  <EditableText
                    path={`bendingFinishes.items.${index}.confirm`}
                    defaultValue={finish.confirm}
                    multiline
                  />
                  {finish.name === "Powder Coating" && (
                    <>
                      {" "}Learn more from our{" "}
                      <Link
                        href="/blog/can-you-powder-coat-aluminum"
                        className="body-text-link body-text-link--dark"
                      >
                        powder-coated aluminum design guide
                      </Link>
                      .
                    </>
                  )}
                </Detail>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-left lg:text-center">
          <p className="section-tail-copy">
            <EditableText
              path="bendingFinishes.linkPrefix"
              defaultValue={DEFAULTS.linkPrefix}
              multiline
            />
            <Link
              href="/surface-finishing"
              className="body-text-link body-text-link--dark"
            >
              <EditableText path="bendingFinishes.linkText" defaultValue={DEFAULTS.linkText} />
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
