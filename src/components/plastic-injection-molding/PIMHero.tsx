"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Custom Plastic Injection Molding Services",
  description:
    "Custom plastic injection molding for parts that require repeatable geometry, selected resin performance, controlled appearance, and planned production.",
  heroImage:
    "/injection-molding/complex-injection-molded-plastic-parts-with-inserts.avif",
  heroImageIsEditable: false,
  ctaSecondaryHref: "/contact",
  ctaPrimary: "Request a Quote",
  ctaSecondary: "Submit CAD for DFM Review",
  metrics: [
    { value: "Free DFM Review", label: "Plastic part design" },
    { value: "±0.05 mm Tolerance", label: "Critical features" },
    { value: "SPI, VDI & Mold-Tech", label: "Surface options" },
    { value: "98% On-Time Delivery", label: "Planned delivery" },
  ],
};

export function PIMHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
