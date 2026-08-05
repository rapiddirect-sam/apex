"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Custom Overmolding Services",
  description:
    "Build reliable multi-material parts with soft-touch, sealing, protective, or vibration-control features. ApexBatch supports plastic overmolding from material pairing and DFM through tooling, T1 validation, and repeat production using TPE, TPU, TPV, and project-specific silicone overmolding.",
  heroImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/1-plastic-injection-molding-manufacturer-banner.webp",
  ctaPrimary: "Upload Your Design",
  ctaSecondary: "Discuss Material Compatibility",
  ctaSecondaryHref: "/contact",
  metrics: [
    { value: "Free DFM Review", label: "Materials, bonding and moldability" },
    { value: "80–550T Presses", label: "Prototype to production" },
    { value: "Shore A 30–90", label: "TPE, TPU, TPV and LSR" },
    { value: "Full Traceability", label: "Materials, process and inspection" },
  ],
};

export function OMHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
