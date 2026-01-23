"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-apex-black/95 backdrop-blur-sm border-b border-apex-border/20"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold-primary rounded-lg flex items-center justify-center">
              <span className="font-display text-xl text-apex-black">AB</span>
            </div>
            <span className="font-display text-2xl text-apex-white tracking-wide">
              APEXBATCH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-apex-white/80 hover:text-gold-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm">Get Instant Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-apex-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-apex-black/95 backdrop-blur-sm border-t border-apex-border/20 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-apex-white/80 hover:text-gold-primary transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button size="sm" className="w-full">
                  Get Instant Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
