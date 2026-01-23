"use client";

import Link from "next/link";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/home3", label: "Home" },
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

export function Home3Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#C49432] to-[#D4A03A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              {/* Logo */}
              <Link href="/home3" className="flex items-center gap-2 mb-6">
                <div className="relative w-12 h-12">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <path
                      d="M5 35 L20 5 L35 35 L20 28 Z"
                      fill="#0A0A0A"
                      stroke="#0A0A0A"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[#0A0A0A] font-bold text-xl tracking-wide">APEX</span>
                  <span className="text-[#0A0A0A]/70 text-xs tracking-[0.2em]">BATCH</span>
                </div>
              </Link>
              <p className="text-[#0A0A0A]/70 text-sm leading-relaxed mb-6">
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
                      className="w-10 h-10 bg-[#0A0A0A]/20 hover:bg-[#0A0A0A]/30 rounded-full flex items-center justify-center text-[#0A0A0A] transition-colors"
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
              <h4 className="text-[#0A0A0A] font-bold text-base mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="text-[#0A0A0A] font-bold text-base mb-6">About</h4>
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-[#0A0A0A] font-bold text-base mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0A0A0A]/70 mt-0.5 flex-shrink-0" />
                  <span className="text-[#0A0A0A]/70 text-sm leading-relaxed">
                    123 Industrial Drive
                    <br />
                    Manufacturing District
                    <br />
                    Tech City, TC 12345
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0A0A0A]/70 flex-shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors text-sm"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0A0A0A]/70 flex-shrink-0" />
                  <a
                    href="mailto:info@apexbatch.com"
                    className="text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors text-sm"
                  >
                    info@apexbatch.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#0A0A0A]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#0A0A0A]/70 text-sm">
              &copy; 2026 ApexBatch . All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <Link
                href="/privacy"
                className="text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors"
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
