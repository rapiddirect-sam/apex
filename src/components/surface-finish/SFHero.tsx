"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Surface Finishing Services for Custom Parts",
  description:
    "Custom surface finishing services for production components. Share your material, functional requirements, appearance target and drawing specifications for a process assessment.",
  heroImage: "/images/surface-finishing/surface-finishing-service-hero.webp",
  ctaPrimary: "Request a Surface Finishing Quote",
  ctaSecondary: "Discuss Your Finish Requirements",
  ctaSecondaryHref: "/contact",
  // The shared Hero still supplies the ISO trust bar and brand marquee below the CTAs.
  metrics: [],
};

export function SFHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
