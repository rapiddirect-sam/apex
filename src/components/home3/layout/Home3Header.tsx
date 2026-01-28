"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/quality", label: "Quality" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Home3Header() {
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
          ? "bg-gradient-to-r from-[#F9EBBC] via-[#EEC569] to-[#D09947]"
          : "bg-gradient-to-r from-[#F9EBBC] via-[#EEC569] to-[#D09947]"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/apexbatch-logo2.png"
              alt="Apex Batch"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-[#000000]/80 hover:text-[#000000] transition-all text-sm font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7F4D0F] after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#000000] text-white font-semibold px-5 py-2.5 rounded-full transition-all text-sm"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#000000]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-[#7F4D0F]/20 bg-gradient-to-r from-[#F9EBBC] via-[#EEC569] to-[#D09947]">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#000000] hover:text-[#7F4D0F] transition-colors text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#1A1A1A] hover:bg-[#000000] text-white font-semibold px-5 py-2.5 rounded-full transition-all text-base mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
