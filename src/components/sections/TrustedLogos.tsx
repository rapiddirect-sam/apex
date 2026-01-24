"use client";

import { Container } from "@/components/ui/Container";

const logos = [
  { name: "Microsoft" },
  { name: "Emerson" },
  { name: "Nikon" },
  { name: "Toyota" },
  { name: "Festo" },
  { name: "Siemens" },
  { name: "Bosch" },
];

export function TrustedLogos() {
  return (
    <section className="py-16 bg-apex-deep border-y border-apex-iron/20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_100%,rgba(212,160,58,0.03),transparent_50%)]" />

      <Container className="relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Label */}
          <p className="text-technical text-gray-600 shrink-0">
            Trusted by Industry Leaders
          </p>

          {/* Logos scroll container */}
          <div className="relative flex-1 overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-apex-deep to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-apex-deep to-transparent z-10" />

            {/* Scrolling logos */}
            <div className="flex animate-[logo-scroll_40s_linear_infinite]">
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center h-8"
                >
                  <span className="text-display text-lg text-gray-600 hover:text-gold-primary transition-colors duration-300 cursor-default whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
