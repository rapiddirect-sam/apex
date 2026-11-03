"use client";

import { motion } from "@/components/ui/StaticMotion";
import { ArrowRight } from "lucide-react";
import { EditableText } from "@/components/cms";
import { StaticImage } from "@/components/ui/StaticImage";

const DEFAULTS = {
  heading: "Choose Our ",
  headingHighlight: "Injection Molding Services",
  headingSuffix: "",
  subheading:
    "These injection molding services cover standard custom plastic parts, dedicated tooling, overmolding, and insert molding. Choose the route around the part material, geometry, functional requirements, assembly needs, and production plan.",
  services: [
    {
      title: "Plastic Injection Molding",
      description:
        "Produce custom thermoplastic parts with repeatable geometry, defined material performance, and controlled cosmetic or functional requirements.",
      detail: "Suitable for housings, enclosures, covers, clips, brackets, connectors, handles, and other custom plastic parts.",
      image: "/injection-molding/custom-plastic-injection-molded-housings-covers-connectors-handles.webp",
    },
    {
      title: "Injection Mold Tooling",
      description:
        "Build a dedicated mold for prototype validation, pilot production, or repeat manufacturing. Before tooling begins, review part geometry, material, expected quantity, critical features, appearance requirements, and the validation plan.",
      detail: "",
      image: "/injection-molding/precision-steel-injection-mold-cavity-core-guide-pillars-cooling-fittings.webp",
    },
    {
      title: "Overmolding",
      description:
        "Add a soft, flexible, sealing, protective, or grip-enhancing material to a rigid plastic or metal substrate.",
      detail: "",
      image: "/injection-molding/two-material-overmolded-industrial-grip-soft-touch-tpe.webp",
    },
    {
      title: "Insert Molding",
      description:
        "Integrate threaded inserts, bushings, terminals, pins, magnets, stamped components, or other functional features directly into a molded part.",
      detail: "",
      image: "/injection-molding/insert-molded-plastic-parts-brass-threaded-inserts-terminals.webp",
    },
  ],
};

export function IMServices() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "104px 0 112px",
        background: "#34312F",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left lg:text-center"
          style={{ marginBottom: "64px" }}
        >
          <h2
            className="service-section-title text-white"
            style={{
              fontSize: "46px",
              fontWeight: 700,
              letterSpacing: "-0.015em",
            }}
          >
            <EditableText path="services.headingPrefix" defaultValue={DEFAULTS.heading} />
            <span className="service-title-accent">
              <EditableText path="services.headingHighlight" defaultValue={DEFAULTS.headingHighlight} />
            </span>
            <EditableText path="services.headingSuffix" defaultValue={DEFAULTS.headingSuffix} />
          </h2>
          <p className="service-section-copy mt-[18px] max-w-[760px] lg:mx-auto">
            <EditableText path="services.subheading" defaultValue={DEFAULTS.subheading} multiline />
          </p>
        </motion.div>

        <div className="max-w-[1000px] mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "32px" }}
          >
            {DEFAULTS.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card flex flex-col"
              >
                {/* Image */}
                <div className="service-card-media">
                  <StaticImage
                    path={`services.items.${index}.image`}
                    defaultSrc={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="service-card-content flex flex-1 flex-col">
                  <h3 className="service-card-title">
                    <EditableText path={`services.items.${index}.title`} defaultValue={service.title} />
                  </h3>

                  <p className="service-card-copy">
                    <EditableText path={`services.items.${index}.description`} defaultValue={service.description} multiline />
                  </p>

                  {service.detail ? (
                    <p className="service-card-copy">
                      <EditableText path={`services.items.${index}.detail`} defaultValue={service.detail} multiline />
                    </p>
                  ) : null}
                  <a href="https://app.apexbatch.com/" target="_blank" rel="noopener noreferrer" className="cta-primary group mt-auto self-start">
                    Get a Quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
