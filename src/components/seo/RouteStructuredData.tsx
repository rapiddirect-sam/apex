"use client";

import { usePathname } from "next/navigation";
import { JsonLd } from "./JsonLd";

const SITE_URL = "https://apexbatch.com";
const DESCRIPTION = "ApexBatch provides precision manufacturing services for custom metal and plastic parts, supporting prototype validation, pilot production, batch manufacturing, and repeat production";

const DESCRIPTIONS: Record<string, string> = {
  "/contact": "Contact ApexBatch for CNC machining, sheet metal, molding, die casting, extrusion and repeat production. Upload drawings and receive a response within 24 hours.",
  "/quality": "From material verification and first-article approval to in-process inspection, final release and traceability, ApexBatch plans quality control around your drawing.",
};

const IMAGES: Record<string, string> = {
  "/": "https://apex-batch-images.s3.us-east-1.amazonaws.com/home/1-homepage-banner.webp",
  "/cnc-machining": "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
  "/cnc-milling": "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
  "/cnc-turning": "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
  "/die-casting": "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/cnc-machining/1-custom-cnc-machining-services-banner.webp",
  "/injection-molding": "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/1-plastic-injection-molding-manufacturer-banner.webp",
  "/insert-molding": "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/1-plastic-injection-molding-manufacturer-banner.webp",
  "/molding-services": "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/1-plastic-injection-molding-manufacturer-banner.webp",
  "/overmolding": "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/1-plastic-injection-molding-manufacturer-banner.webp",
  "/sheet-metal-fabrication": "https://apex-batch-images.s3.us-east-1.amazonaws.com/services/injection-molding/1-plastic-injection-molding-manufacturer-banner.webp",
  "/aluminum-extrusion": `${SITE_URL}/images/services/aluminum-extrusion/custom-aluminum-extrusion-profiles-production.avif`,
  "/contact": `${SITE_URL}/contact/apexbatch-contact-brand-office-feature-image.jpg`,
  "/quality": `${SITE_URL}/quality/apexbatch-zeiss-cmm-quality-inspection-lab-with-two-operators.webp`,
};

const IMAGE_CAPTIONS: Record<string, string> = {
  "/contact": "ApexBatch office brand wall",
  "/aluminum-extrusion": "Custom aluminum extrusion profiles during production",
  "/quality": "ApexBatch ZEISS CMM quality inspection lab with two operators",
};

const LABELS: Record<string, string> = {
  "/": "Home",
  "/blog": "Blog",
  "/about": "About ApexBatch",
  "/contact": "Contact Us",
  "/quality": "Quality Assurance",
  "/reviews": "Customer Reviews",
  "/privacy-policy": "Privacy Policy",
  "/terms-and-conditions": "Terms and Conditions",
};

function label(path: string) {
  return LABELS[path] || path.split("/").filter(Boolean).map((part) => part.replace(/-/g, " ").replace(/\b\w/g, (character) => character.toUpperCase())).join(" ");
}

export function RouteStructuredData() {
  const pathname = usePathname();
  if (!pathname || pathname.startsWith("/admin") || pathname.startsWith("/api") || pathname === "/q4-announcement-preview") return null;

  const url = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const image = IMAGES[pathname];
  const description = DESCRIPTIONS[pathname] || DESCRIPTION;
  const graph: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": pathname === "/contact" ? "ContactPage" : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: label(pathname),
      description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      ...(image ? { primaryImageOfPage: { "@id": `${url}#primaryimage` } } : {}),
    },
  ];

  if (image) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": `${url}#primaryimage`,
      url: image,
      contentUrl: image,
      caption: IMAGE_CAPTIONS[pathname] || label(pathname),
      representativeOfPage: true,
    });
  }

  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 1 || (parts.length === 1 && !["about", "contact", "privacy-policy", "terms-and-conditions"].includes(parts[0]))) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        ...parts.map((part, index) => {
          const partPath = `/${parts.slice(0, index + 1).join("/")}`;
          return { "@type": "ListItem", position: index + 2, name: label(partPath), item: `${SITE_URL}${partPath}` };
        }),
      ],
    });
  }

  return <JsonLd data={graph} />;
}
