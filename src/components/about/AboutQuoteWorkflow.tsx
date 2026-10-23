"use client";

import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, FileUp, LockKeyhole, Settings2, ShieldCheck } from "lucide-react";
import { EditableImage, EditableText } from "@/components/cms";

const DEFAULTS = {
  headingPrefix: "Upload Your CAD — ",
  headingHighlight: "Move Toward Production with Confidence",
  description:
    "Upload your CAD file, select materials, quantities and finishing requirements, and begin your quotation workflow online.",
  fileTypes: "STEP, IGES, STL, PDF Drawings",
  instantEstimate: "Instant estimates for eligible parts",
  engineeringReview: "Engineering review for complex production programs",
  platformImage: "/images/home/apexbatch-online-quote-platform-interface.webp",
  steps: [
    "Upload CAD & requirements",
    "Select material, quantity and finish",
    "Receive estimate or engineering review",
    "Confirm a production-ready quotation",
  ],
};

const stepIcons = [FileUp, Settings2, ClipboardCheck, ShieldCheck];

export function AboutQuoteWorkflow() {
  return (
    <section id="quoting-workflow" className="bg-[#171615] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <div>
            <h2 className="section-title max-w-3xl">
              <EditableText
                path="aboutQuoteWorkflow.headingPrefix"
                defaultValue={DEFAULTS.headingPrefix}
              />
              <span className="service-title-accent">
                <EditableText
                  path="aboutQuoteWorkflow.headingHighlight"
                  defaultValue={DEFAULTS.headingHighlight}
                />
              </span>
            </h2>
            <p className="body-copy mt-6 max-w-2xl text-[#D4D2D0]">
              <EditableText
                path="aboutQuoteWorkflow.description"
                defaultValue={DEFAULTS.description}
                multiline
              />
            </p>
            <ul className="mt-7 space-y-3">
              {[DEFAULTS.fileTypes, DEFAULTS.instantEstimate, DEFAULTS.engineeringReview].map(
                (item, index) => (
                  <li key={item} className="flex items-center text-sm font-medium leading-snug text-[#F4F1EC]">
                    <Check className="mr-3 h-4 w-4 shrink-0 text-[#EEC569]" aria-hidden="true" />
                    <EditableText path={`aboutQuoteWorkflow.proofPoints.${index}`} defaultValue={item} />
                  </li>
                )
              )}
            </ul>
            <div className="mt-8">
              <Link href="https://app.apexbatch.com/" rel="nofollow" className="cta-primary group">
                Upload Your Design
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs leading-relaxed text-[#AAA7A3]">
              <LockKeyhole className="h-3.5 w-3.5 shrink-0 text-[#EEC569]" aria-hidden="true" />
              Your design files are treated as confidential. NDA support is available on request.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#D09947]/35 bg-[#F7F7F6] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-3">
            <div className="relative aspect-[1.94/1] overflow-hidden rounded-xl">
              <EditableImage
                path="aboutQuoteWorkflow.platformImage"
                defaultSrc={DEFAULTS.platformImage}
                alt="ApexBatch online quotation platform"
                fill
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-contain"
              />
            </div>
            <div className="absolute left-5 top-5 rounded-full bg-[#171615]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#EEC569] sm:left-6 sm:top-6">
              Online quotation workspace
            </div>
          </div>
        </div>

        <ol id="quoting-steps" className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {DEFAULTS.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <li key={step} className="flex items-start gap-4 rounded-xl bg-white/[0.025] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D09947]/45 text-[#EEC569]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#EEC569]">0{index + 1}</span>
                  <p className="mt-1 text-sm font-semibold leading-snug text-white">
                    <EditableText path={`aboutQuoteWorkflow.steps.${index}`} defaultValue={step} />
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
