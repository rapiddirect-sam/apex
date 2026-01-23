"use client";

import { Container } from "@/components/ui/Container";

const logos = [
  { name: "Microsoft", width: 120 },
  { name: "Emerson", width: 100 },
  { name: "Nikon", width: 80 },
  { name: "Toyota", width: 100 },
  { name: "Festo", width: 80 },
];

export function TrustedLogos() {
  return (
    <section className="py-12 bg-apex-charcoal border-y border-apex-border/10">
      <Container>
        <p className="text-center text-apex-text-secondary text-sm uppercase tracking-widest mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-apex-charcoal to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-apex-charcoal to-transparent z-10" />

          {/* Scrolling logos */}
          <div className="flex animate-[logo-scroll_30s_linear_infinite]">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-12 flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <span
                  className="font-display text-2xl text-apex-white tracking-wider"
                  style={{ minWidth: logo.width }}
                >
                  {logo.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
