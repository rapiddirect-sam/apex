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
  // Reuse the verified brand artwork from the Aluminum Extrusion hero instead
  // of falling back to the shared component's text-only placeholder cards.
  logos: [
    {
      alt: "Stryker",
      src: "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1776219261633-1776219261633-q0yjdzr3.png",
    },
    {
      alt: "Rockwell Automation",
      src: "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1776219235511-1776219235511-sen0uylz.png",
    },
    {
      alt: "Honeywell",
      src: "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1776219240090-1776219240090-3d78az05.png",
    },
    {
      alt: "DJI",
      src: "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1776219243286-1776219243286-xgqd11gg.png",
    },
    {
      alt: "Tesla",
      src: "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1776219248073-1776219248073-ts8jcocs.png",
    },
    {
      alt: "Festo",
      src: "https://apex-batch-images.s3.us-east-1.amazonaws.com/cms/1776219254041-1776219254041-dj0y695q.png",
    },
  ],
  // The shared Hero still supplies the ISO trust bar and brand marquee below the CTAs.
  metrics: [],
};

export function SFHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
