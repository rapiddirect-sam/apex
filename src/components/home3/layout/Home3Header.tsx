"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn, getImageUrl } from "@/lib/utils";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { Q4AnnouncementBar } from "./Q4AnnouncementBar";

interface NavLink {
  href: string;
  label: string;
}

interface NavColumn {
  heading: string;
  href?: string;
  links: NavLink[];
}

interface NavItem {
  label: string;
  href?: string;
  columns?: NavColumn[];
  items?: NavLink[];
}

const navItems: NavItem[] = [
  {
    label: "Services",
    columns: [
      {
        heading: "CNC Machining",
        href: "/cnc-machining",
        links: [
          { href: "/cnc-milling", label: "CNC Milling" },
          { href: "/cnc-turning", label: "CNC Turning" },
        ],
      },
      {
        heading: "Sheet Metal",
        href: "/sheet-metal-fabrication",
        links: [{ href: "/laser-cutting", label: "Laser Cutting" }],
      },
      {
        heading: "Molding Services",
        links: [
          { href: "/injection-molding", label: "Plastic Injection Molding" },
          { href: "/overmolding", label: "Overmolding" },
          { href: "/insert-molding", label: "Insert Molding" },
        ],
      },
      {
        heading: "Other Capabilities",
        links: [
          { href: "/aluminum-extrusion", label: "Aluminum Extrusion" },
          { href: "/die-casting", label: "Die Casting" },
          { href: "/surface-finishing", label: "Surface Finishing" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    items: [
      { href: "/materials", label: "Material Library" },
      { href: "/blog", label: "Blog" },
      { href: "/reviews", label: "Customer Reviews" },
    ],
  },
  {
    label: "Company",
    items: [
      { href: "/about", label: "About ApexBatch" },
      { href: "/quality", label: "Quality Assurance" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];
function DropdownMenu({
  item,
  isOpen,
  onOpen,
  onClose,
  onToggle,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const isMegaMenu = Boolean(item.columns);

  return (
    <div
      className={isMegaMenu ? "static" : "relative"}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="relative flex items-center gap-1 py-1 text-[15px] font-medium text-[#000000]/80 transition-all after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#7F4D0F] after:transition-all hover:text-[#000000] hover:after:w-full"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full -translate-x-1/2 transition-opacity duration-150",
          isMegaMenu ? "pt-0" : "pt-3",
          isOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        )}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        style={{
          width: isMegaMenu ? "min(1040px, calc(100vw - 48px))" : "240px",
        }}
      >
        <div
          className="overflow-hidden rounded-xl shadow-2xl"
          style={{
            background: "#1A1A1A",
            borderTop: "3px solid #D09947",
          }}
        >
          {item.columns ? (
            <div className="grid grid-cols-4 gap-8 px-8 py-7">
              {item.columns.map((column) => (
                <div key={column.heading} className="flex min-w-0 flex-col">
                  {column.href ? (
                    <Link
                      href={column.href}
                      className="group mb-4 flex items-center gap-2 transition-opacity hover:opacity-90"
                    >
                      <span className="h-4 w-[3px] flex-shrink-0 rounded-sm bg-[#D09947]" />
                      <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#D09947]">
                        {column.heading}
                      </span>

                    </Link>
                  ) : (
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-4 w-[3px] flex-shrink-0 rounded-sm bg-[#D09947]" />
                      <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#D09947]">
                        {column.heading}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-1 pl-3">
                    {column.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="py-1.5 text-sm text-white/70 transition-all hover:translate-x-0.5 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col py-2">
              {item.items?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-5 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/5 hover:text-[#EEC569]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export function Home3Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const dropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelDropdownClose = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
  };

  const openDesktopDropdown = (label: string) => {
    cancelDropdownClose();
    setOpenDropdown(label);
  };

  const scheduleDropdownClose = () => {
    cancelDropdownClose();
    dropdownCloseTimer.current = setTimeout(() => {
      setOpenDropdown(null);
      dropdownCloseTimer.current = null;
    }, 180);
  };

  const toggleDesktopDropdown = (label: string) => {
    cancelDropdownClose();
    setOpenDropdown((current) => (current === label ? null : label));
  };

  useEffect(() => cancelDropdownClose, []);

  return (
    <>
      <Q4AnnouncementBar />
      <header
      className="home3-site-header fixed left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-[#F9EBBC] via-[#EEC569] to-[#D09947] contain-[layout]"
      style={{ top: "var(--q4-announcement-height)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src={getImageUrl("apexbatch-logo2.png")}
              alt="Apex Batch"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-[#000000]/80 hover:text-[#000000] transition-all text-[15px] font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7F4D0F] after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              ) : (
                <DropdownMenu
                  key={item.label}
                  item={item}
                  isOpen={openDropdown === item.label}
                  onOpen={() => openDesktopDropdown(item.label)}
                  onClose={scheduleDropdownClose}
                  onToggle={() => toggleDesktopDropdown(item.label)}
                />
              )
            )}
          </nav>

          {/* CTA Button */}
          <Link
            href="https://app.apexbatch.com/"
            rel="nofollow"
            className="hidden lg:inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#000000] text-white hover:text-[#D09947] active:text-[#D09947] font-semibold px-5 py-2.5 rounded-full transition-all text-sm"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#000000] hover:bg-black/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu opens directly below the header so it remains anchored to the trigger. */}
      <div
        id="mobile-navigation"
        className={cn(
          "lg:hidden absolute left-0 right-0 top-full z-40 origin-top transition-[max-height,opacity,visibility] duration-300",
          isMobileMenuOpen ? "visible max-h-[calc(100dvh-4rem)] opacity-100" : "invisible max-h-0 opacity-0 pointer-events-none"
        )}
        style={{ maxHeight: isMobileMenuOpen ? "calc(100dvh - 4rem - var(--q4-announcement-height))" : 0 }}
      >
        <div className="overflow-y-auto border-t border-black/20 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] shadow-2xl" style={{ maxHeight: "inherit" }}>
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {navItems.map((item, index) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between text-white hover:text-[#EEC569] transition-colors text-lg font-medium py-4 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                  <ChevronRight className="w-5 h-5 opacity-50" />
                </Link>
              ) : (
                <div key={item.label} className="border-b border-white/10">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-white hover:text-[#EEC569] transition-colors text-lg font-medium py-4"
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === item.label ? null : item.label
                      )
                    }
                    aria-expanded={openMobileDropdown === item.label}
                    aria-controls={`mobile-submenu-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 opacity-50 transition-transform",
                        openMobileDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    id={`mobile-submenu-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className={cn(
                      "flex flex-col gap-1 overflow-hidden pl-4 transition-[max-height,opacity,padding]",
                      openMobileDropdown === item.label ? "max-h-[1400px] pb-3 opacity-100" : "max-h-0 pb-0 opacity-0"
                    )}
                    aria-hidden={openMobileDropdown !== item.label}
                  >
                    {item.columns
                      ? item.columns.map((column) => (
                          <div key={column.heading} className="mb-3 last:mb-0">
                            {column.href ? (
                              <Link
                                href={column.href}
                                className="block py-2 text-sm font-bold uppercase tracking-[0.06em] text-[#EEC569]"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {column.heading}
                              </Link>
                            ) : (
                              <p className="py-2 text-sm font-bold uppercase tracking-[0.06em] text-[#EEC569]">
                                {column.heading}
                              </p>
                            )}
                            <div className="flex flex-col pl-3">
                              {column.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="py-2 text-base text-white/70 transition-colors hover:text-white"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))
                      : (item.items || []).map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="py-2 text-base text-white/70 transition-colors hover:text-[#EEC569]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                    </div>
                </div>
              )
            )}

            <Link
              href="https://app.apexbatch.com/"
              rel="nofollow"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#D09947] to-[#EEC569] hover:from-[#EEC569] hover:to-[#D09947] text-black font-semibold px-6 py-3.5 rounded-xl transition-all text-base mt-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </Link>

            {/* Contact Info */}
            <div className="pt-6 border-t border-white/10 mt-6">
              <p className="text-white/60 text-sm mb-2">Need help?</p>
              <a
                href="mailto:info@apexbatch.com"
                className="text-[#EEC569] text-base font-medium"
              >
                info@apexbatch.com
              </a>
            </div>
          </nav>
        </div>
      </div>
      </header>
    </>
  );
}
