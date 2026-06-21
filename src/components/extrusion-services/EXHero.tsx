"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Custom Extrusion Services",
  description:
    "From prototype tooling to high-volume production, our extrusion services deliver cost-effective custom profiles with reliable dimensional accuracy.",
  heroImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/1-plastic-injection-molding-manufacturer-banner.webp",
  ctaSecondaryHref: "/contact",
};

export function EXHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
