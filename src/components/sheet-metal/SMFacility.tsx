"use client";

import { motion } from "@/components/ui/StaticMotion";
import { EditableImage, EditableText } from "@/components/cms";

const DEFAULTS = {
  heading: "Our Sheet Metal Manufacturing Facility and ",
  headingHighlight: "Quality Support",
  description:
    "ApexBatch operates from Shenzhen with a 50,000 m² production footprint and eight specialized workshops. Sheet metal manufacturing, surface finishing, quality inspection, and delivery are managed through a defined production process.",
  support:
    "Available project support includes material certificates, first-article inspection, CMM reports, process records, and agreed inspection documentation.",
  images: [
    {
      src: "/about/apexbatch-sheet-metal-bending-workshop.avif",
      alt: "ApexBatch sheet metal bending workshop",
      className: "col-span-2 row-span-2",
    },
    {
      src: "/sheet-metal/sheet-metal-fabrication-inventory.avif",
      alt: "Sheet metal fabrication inventory",
      className: "col-span-1",
    },
    {
      src: "/sheet-metal/apexbatch-sheet-metal-secondary-operations-factory.avif",
      alt: "ApexBatch sheet metal secondary operations factory space",
      className: "col-span-1",
    },
    {
      src: "/sheet-metal/digital-caliper-inspection-custom-sheet-metal-part.avif",
      alt: "Digital caliper inspection of a custom sheet metal part",
      className: "col-span-2",
    },
  ],
};

export function SMFacility() {
  return (
    <section className="relative overflow-hidden bg-[#1A1918] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="service-section-title text-white">
              <EditableText path="facility.heading" defaultValue={DEFAULTS.heading} />
              <span className="service-title-accent">
                <EditableText path="facility.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
              </span>
            </h2>
            <p className="service-section-copy mt-6 max-w-[540px]">
              <EditableText path="facility.description" defaultValue={DEFAULTS.description} multiline />
            </p>

            <p className="service-section-copy mt-5 max-w-[540px]">
              <EditableText path="facility.support" defaultValue={DEFAULTS.support} multiline />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {DEFAULTS.images.map((image, index) => (
              <div key={image.src} className={`relative min-h-[150px] overflow-hidden ${image.className}`}>
                <EditableImage
                  path={`facility.images.${index}`}
                  defaultSrc={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
