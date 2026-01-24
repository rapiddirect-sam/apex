import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const aboutLinks = [
  { href: "/about", label: "About Us" },
  { href: "/certifications", label: "Certifications" },
  { href: "/careers", label: "Careers" },
  { href: "/news", label: "News" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-apex-void border-t border-apex-iron/20">
      <Container>
        {/* Main Footer */}
        <div className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/apexbatch-logo2.png"
                  alt="Apex Batch"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
                Your trusted partner for precision manufacturing. Delivering
                quality parts from design to production with ISO-certified processes.
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
                      className="w-10 h-10 border border-apex-iron/30 flex items-center justify-center text-gray-500 hover:border-gold-primary/50 hover:text-gold-primary transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-technical text-gray-400 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className="lg:col-span-2">
              <h4 className="text-technical text-gray-400 mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h4 className="text-technical text-gray-400 mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-500 text-sm">
                    Shenzhen Advanced Manufacturing District
                    <br />
                    Guangdong, China
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold-primary flex-shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="text-gray-500 hover:text-white transition-colors text-sm"
                  >
                    +86 (755) 8888-8888
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-primary flex-shrink-0" />
                  <a
                    href="mailto:info@apexbatch.com"
                    className="text-gray-500 hover:text-white transition-colors text-sm"
                  >
                    info@apexbatch.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-apex-iron/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} Apex Batch. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-gray-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-gray-400 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-gray-600 hover:text-gray-400 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
