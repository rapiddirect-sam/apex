"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Custom Sheet Metal Fabrication Services",
  description:
    "From prototype validation to repeat production, ApexBatch manufactures custom sheet metal parts and assemblies through laser cutting, CNC bending, punching, welding, finishing and hardware insertion.",
  heroImage:
    "/sheet-metal/custom-sheet-metal-fabrication-parts.avif",
  heroImageIsEditable: false,
  ctaPrimary: "Get a Sheet Metal Fabrication Quote",
  ctaSecondary: "Request Free DFM Feedback",
  ctaSecondaryHref: "/contact",
  metricsSingleLine: true,
  metrics: [
    { value: "1 PC+", label: "Prototype to Production" },
    { value: "DFM Review", label: "Before Production" },
    { value: "8 Workshops", label: "Integrated Manufacturing" },
    { value: "Global Shipping", label: "Planned Delivery" },
  ],
};

export function SMHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
