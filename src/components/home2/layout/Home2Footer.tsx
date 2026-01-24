"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/home2", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#industries", label: "Industries" },
  { href: "#quality", label: "Quality Assurance" },
];

const aboutLinks = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/certifications", label: "Certifications" },
  { href: "/careers", label: "Careers" },
  { href: "/news", label: "News & Updates" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Home2Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#4A4A48]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              {/* Logo */}
              <Link href="/home2" className="flex items-center mb-6">
                <Image
                  src="/apexbatch-logo2.png"
                  alt="Apex Batch"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <p
                className="text-[#7A7A7C] text-sm leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Leading precision manufacturing services with advanced technology and industrial expertise.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#4A4A48]/50 hover:bg-[#D09947] rounded flex items-center justify-center text-[#7A7A7C] hover:text-[#000000] transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-white font-bold text-base mb-6 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#7A7A7C] hover:text-[#D09947] transition-colors text-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4
                className="text-white font-bold text-base mb-6 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                About
              </h4>
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#7A7A7C] hover:text-[#D09947] transition-colors text-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4
                className="text-white font-bold text-base mb-6 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D09947] mt-0.5 flex-shrink-0" />
                  <span
                    className="text-[#7A7A7C] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    123 Industrial Drive
                    <br />
                    Manufacturing District
                    <br />
                    Tech City, TC 12345
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D09947] flex-shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="text-[#7A7A7C] hover:text-[#D09947] transition-colors text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D09947] flex-shrink-0" />
                  <a
                    href="mailto:info@apexbatch.com"
                    className="text-[#7A7A7C] hover:text-[#D09947] transition-colors text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    info@apexbatch.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#4A4A48]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-[#7A7A7C] text-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              &copy; 2026 ApexBatch. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <Link
                href="/privacy"
                className="text-[#7A7A7C] hover:text-[#D09947] transition-colors"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#7A7A7C] hover:text-[#D09947] transition-colors"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-[#7A7A7C] hover:text-[#D09947] transition-colors"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
