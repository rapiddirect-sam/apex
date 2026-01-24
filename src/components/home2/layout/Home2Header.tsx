"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Home2Header() {
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
          ? "bg-[#2E2C2B]/95 backdrop-blur-md border-b border-[#D09947]/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/home2" className="flex items-center">
            <Image
              src="/apexbatch-logo2.png"
              alt="Apex Batch"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-[#D09947] transition-colors text-sm font-medium uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <button
              className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-2.5 px-6 rounded text-sm transition-all uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-[#D09947]/20 bg-[#2E2C2B]/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-[#D09947] transition-colors text-base font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                className="bg-[#D09947] hover:bg-[#EEC569] text-[#000000] font-semibold py-3 px-6 rounded text-sm transition-all uppercase tracking-wider mt-4"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
