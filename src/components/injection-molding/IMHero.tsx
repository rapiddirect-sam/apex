"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Injection Molding Services for Custom Parts",
  description:
    "ApexBatch provides custom injection molding services for teams selecting a molding route that fits their part, material, functional requirements, and production goals. We support plastic injection molding, mold tooling, overmolding, and insert molding from design review through approved repeat production.",
  heroImage:
    "/injection-molding/injection-molding-services-custom-plastic-parts-housings-transparent-components.avif",
  heroImageIsEditable: false,
  ctaSecondaryHref: "/contact",
  ctaPrimary: "Request an Injection Molding Quote",
  ctaSecondary: "Get a Free DFM Review",
  metrics: [
    { value: "Free DFM Review", label: "Before tooling" },
    { value: "±0.05 mm Tolerance", label: "Critical features" },
    { value: "Prototype to Production", label: "Validated batches" },
    { value: "98% On-Time Delivery", label: "Planned delivery" },
  ],
};

export function IMHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
