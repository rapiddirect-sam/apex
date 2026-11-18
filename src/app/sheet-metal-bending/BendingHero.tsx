"use client";

import { ServiceHero } from "@/components/services/ServiceHero";

const DEFAULTS = {
  title: "Custom Sheet Metal Bending Services",
  description:
    "ApexBatch provides custom metal bending services for sheet and plate components, including brackets, enclosures, panels, chassis, covers, and formed assemblies.\n\nOur services support prototype parts, low-volume orders, and repeat production in steel, stainless steel, aluminum, copper, and brass.",
  heroImage: "/sheet-metal/cnc-press-brake-operator-control-sheet-metal-bending.webp",
  heroImageIsEditable: false,
  heroOverlay:
    "linear-gradient(92deg, rgba(8,8,8,0.84) 0%, rgba(8,8,8,0.7) 42%, rgba(8,8,8,0.58) 70%, rgba(8,8,8,0.68) 100%)",
  ctaPrimary: "Request a Sheet Metal Bending Quote",
  ctaSecondary: "Talk to an Engineer",
  ctaSecondaryHref: "/contact",
  metrics: [
    { value: "3000 mm", label: "Maximum Bend Length" },
    { value: "0.2–6.0 mm", label: "Material Thickness Range" },
    { value: "±0.15 mm", label: "Formed-Dimension Tolerance" },
    { value: "±0.5°", label: "Bend-Angle Tolerance" },
  ],
};

export function BendingHero() {
  return <ServiceHero defaults={DEFAULTS} />;
}
