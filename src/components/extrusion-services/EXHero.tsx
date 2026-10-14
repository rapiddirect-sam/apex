"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Custom Aluminum Extrusion Services",
  description:
    "ApexBatch provides custom aluminum extrusions with CNC machining, drilling, tapping and surface finishing—ready for your assembly process. Send a drawing, 3D model, cross-section sketch or sample photo. We will review profile feasibility, material, machining, finishing and tolerance requirements.",
  heroImage:
    "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1773805332557-1773805332557-yr8pyd5f.webp",
  ctaSecondaryHref: "/contact",
  ctaPrimary: "Get an Instant Quote",
  ctaSecondary: "Talk to an Extrusion Specialist",
  metrics: [
    { value: "Custom Profiles", label: "Solid, hollow & multi-cavity" },
    { value: "300 × 200 mm", label: "Maximum profile size" },
    { value: "Up to 7 m", label: "Maximum extrusion length" },
    { value: "0.8 mm", label: "Minimum wall thickness" },
  ],
};

export function EXHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
