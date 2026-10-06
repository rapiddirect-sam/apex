"use client";

import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import { Facebook, Linkedin, Instagram, Youtube, X, Mail, Phone, MapPin } from "lucide-react";

const capabilitiesLinks = [
  { href: "/cnc-machining", label: "CNC Machining" },
  { href: "/injection-molding", label: "Injection Molding" },
  { href: "/sheet-metal-fabrication", label: "Sheet Metal Fabrication" },
  { href: "/die-casting", label: "Die Casting" },
];

const resourceLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/materials", label: "Materials" },
  { href: "/surface-finishing", label: "Surface Finishing" },
];

const aboutLinks = [
  { href: "/quality", label: "Quality Assurance" },
  { href: "/about", label: "About ApexBatch" },
  { href: "/contact", label: "Contact Us" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587352472100", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/apexbatch/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@apexbatch_official", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/apexbatch/", label: "Instagram" },
  { icon: X, href: "https://x.com/ApexBatch", label: "X" },
];

const brandDescription =
  "Turning complex metal and plastic designs into reliable, repeatable production.";

function ContactDetails() {
  return (
    <ul className="space-y-3">
      <li className="flex items-start gap-2.5">
        <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#7F4D0F]" aria-hidden="true" />
        <span className="text-xs leading-relaxed text-[#000000]/70 lg:text-sm">
          2nd Floor, Building F, 52 Huangpu Road, Shangliao Community, Xinqiao Street, Baoan District, Shenzhen, China
        </span>
      </li>
      <li className="flex items-center gap-2.5">
        <Phone className="h-4 w-4 flex-shrink-0 text-[#7F4D0F]" aria-hidden="true" />
        <a
          href="tel:+8613302480516"
          className="text-xs text-[#000000]/70 transition-colors hover:text-[#000000] lg:text-sm"
        >
          +86 13302480516
        </a>
      </li>
      <li className="flex items-center gap-2.5">
        <Mail className="h-4 w-4 flex-shrink-0 text-[#7F4D0F]" aria-hidden="true" />
        <a
          href="mailto:info@apexbatch.com"
          className="text-xs text-[#000000]/70 transition-colors hover:text-[#000000] lg:text-sm"
        >
          info@apexbatch.com
        </a>
      </li>
    </ul>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7F4D0F]/20 text-[#7F4D0F] transition-colors hover:bg-[#7F4D0F]/30"
            aria-label={social.label}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold text-[#000000] lg:mb-6 lg:text-base">{title}</h4>
      <ul className="space-y-2 lg:space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-xs text-[#000000]/70 transition-colors hover:text-[#000000] lg:text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Home3Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#F9EBBC] via-[#EEC569] to-[#D09947]">
      {/* Noise texture overlay - monotone noise, size 0.5, density 100% */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" style={{ opacity: 0.4 }}>
        <filter id="footerNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#footerNoise)" style={{ mixBlendMode: "overlay" }} />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pt-10 pb-7 lg:pt-14 lg:pb-8">
          {/* Mobile and tablet brand and contact section */}
          <div className="mb-9 md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] md:items-start md:gap-12 lg:hidden">
            <div>
              <Link href="/" className="mb-4 flex items-center justify-center md:justify-start">
                <Image
                  src={getImageUrl("apexbatch-logo2.png")}
                  alt="Apex Batch"
                  width={180}
                  height={60}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="mx-auto mb-5 max-w-sm text-center text-[15px] font-medium leading-6 text-[#000000]/80 md:mx-0 md:mb-0 md:max-w-xs md:text-left">
                {brandDescription}
              </p>
            </div>
            <div className="mx-auto mb-5 max-w-sm md:mx-0 md:mb-0 md:max-w-none">
              <ContactDetails />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-[minmax(390px,0.95fr)_minmax(0,1.65fr)] lg:gap-20">
            {/* Desktop brand and contact section */}
            <div className="hidden lg:block">
              <Link href="/" className="mb-6 flex items-center">
                <Image
                  src={getImageUrl("apexbatch-logo2.png")}
                  alt="Apex Batch"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mb-5 text-base font-medium leading-6 text-[#000000]/80">
                {brandDescription}
              </p>
              <div className="mb-6">
                <ContactDetails />
              </div>
            </div>

            <div className="contents lg:flex lg:items-start lg:justify-between lg:gap-12">
              <FooterLinkColumn title="Capabilities" links={capabilitiesLinks} />
              <FooterLinkColumn title="Resources" links={resourceLinks} />
              <FooterLinkColumn title="About" links={aboutLinks} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#7F4D0F]/20 py-4 lg:py-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <SocialLinks />
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:justify-end lg:gap-x-8 lg:text-sm">
              <p className="text-[#000000]/70">
                &copy; 2026 ApexBatch. All rights reserved.
              </p>
              <Link
                href="/privacy-policy"
                className="text-[#000000]/70 transition-colors hover:text-[#000000]"
              >
                Privacy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-[#000000]/70 transition-colors hover:text-[#000000]"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
