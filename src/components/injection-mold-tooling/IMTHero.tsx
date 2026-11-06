"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Injection Mold Tooling for Custom Plastic Parts",
  description:
    "Plastic injection mold tooling built around the conditions that determine dependable fit, functional performance, and agreed cosmetic results.",
  heroImage:
    "/injection-molding/precision-steel-injection-mold-cavity-core-guide-pillars-cooling-fittings.webp",
  heroImageIsEditable: false,
  ctaSecondaryHref: "/contact",
  ctaPrimary: "Request an Injection Mold Tooling Quote",
  ctaSecondary: "Discuss Your Tooling Plan",
  metrics: [
    { value: "Free DFM Review", label: "Review before machining" },
    { value: "P20, 718H & S136", label: "Steel options for your part" },
    { value: "CNC & EDM Machining", label: "Precision mold components" },
    { value: "T1 Samples & FAI", label: "Validate before production" },
  ],
};

export function IMTHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
