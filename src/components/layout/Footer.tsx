import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
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

export function Footer() {
  return (
    <footer className="bg-apex-black border-t border-apex-border/10">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gold-primary rounded-lg flex items-center justify-center">
                  <span className="font-display text-xl text-apex-black">
                    AB
                  </span>
                </div>
                <span className="font-display text-2xl text-apex-white tracking-wide">
                  APEXBATCH
                </span>
              </Link>
              <p className="text-apex-text-secondary mb-6">
                Your trusted partner for precision manufacturing. Delivering
                quality parts from design to production with ISO-certified
                processes.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-apex-gray flex items-center justify-center text-apex-text-secondary hover:bg-gold-primary hover:text-apex-black transition-colors"
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
              <h4 className="font-display text-lg text-apex-white mb-6">
                QUICK LINKS
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-apex-text-secondary hover:text-gold-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-display text-lg text-apex-white mb-6">
                ABOUT
              </h4>
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-apex-text-secondary hover:text-gold-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-display text-lg text-apex-white mb-6">
                CONTACT US
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-primary mt-0.5 flex-shrink-0" />
                  <span className="text-apex-text-secondary">
                    123 Industrial Drive
                    <br />
                    Tech City, TC 12345
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-primary flex-shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="text-apex-text-secondary hover:text-gold-primary transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-primary flex-shrink-0" />
                  <a
                    href="mailto:info@apexbatch.com"
                    className="text-apex-text-secondary hover:text-gold-primary transition-colors"
                  >
                    info@apexbatch.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-apex-border/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-apex-text-secondary text-sm">
              &copy; 2026 Apexbatch. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-apex-text-secondary hover:text-gold-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-apex-text-secondary hover:text-gold-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-apex-text-secondary hover:text-gold-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
