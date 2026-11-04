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
    { value: "Reduced Tooling Risk", label: "Free DFM review before release" },
    { value: "One Integrated Partner", label: "Plastic, tooling, overmolding & inserts" },
    { value: "Validated Before Scale", label: "Initial-part approval for key requirements" },
    { value: "98% On-Time Delivery", label: "Planned support for repeat batches" },
  ],
};

export function IMHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
