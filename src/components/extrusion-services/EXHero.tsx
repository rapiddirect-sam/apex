"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Custom Extrusion Services",
  description:
    "From prototype tooling to high-volume production, our extrusion services deliver cost-effective custom profiles with reliable dimensional accuracy.",
  heroImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1773805332557-1773805332557-yr8pyd5f.webp",
  ctaSecondaryHref: "/contact",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "Get Production Quote",
  metrics: [
    { value: "Custom Profiles", label: "Solid, hollow & multi-cavity" },
    { value: "300 × 200 mm", label: "Maximum profile size" },
    { value: "Up to 7 m", label: "Maximum extrusion length" },
    { value: "0.8 mm", label: "Minimum wall thickness*" },
  ],
};

export function EXHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
