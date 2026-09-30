import { EditableText } from "@/components/cms";

const PROJECT_SUPPORT_METRICS = [
  { value: "2–12 h", label: "Fast Quote Response" },
  { value: "3–5 Days", label: "Production Lead Time Starting From" },
  { value: "Free", label: "DFM Review & Agreed Inspection Documentation" },
];

export function Home3Q4ProjectSupport() {
  return (
    <section
      id="q4-project-support"
      aria-labelledby="q4-project-support-title"
      className="bg-[linear-gradient(180deg,#0A0A0A_0%,#100D08_100%)] px-4 py-12 min-[320px]:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{ scrollMarginTop: "calc(4rem + var(--q4-announcement-height))" }}
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="relative isolate overflow-hidden rounded-2xl border border-[#EEC569]/60 bg-[linear-gradient(135deg,#251D11_0%,#18130D_48%,#11100E_100%)] p-4 shadow-[0_22px_60px_rgba(0,0,0,0.42)] min-[320px]:p-6 sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-[#EEC569]/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[10%] h-px w-2/3 bg-gradient-to-r from-transparent via-[#EEC569]/60 to-transparent"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <p className="inline-flex rounded-full border border-[#EEC569]/55 bg-[#0A0A0A]/45 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F1DB9A]">
                <EditableText path="q4ProjectSupport.eyebrow" defaultValue="Q4 PROJECT SUPPORT · OCT–DEC 2026" />
              </p>
              <h2
                id="q4-project-support-title"
                className="mt-4 max-w-xl text-[clamp(28px,9vw,34px)] font-bold leading-[1.06] tracking-tight text-white sm:text-[42px] lg:text-[48px]"
              >
                <EditableText
                  path="q4ProjectSupport.title"
                  defaultValue="Put Our Quality and Speed to the Test"
                />
              </h2>
              <div className="mt-5 border-l-2 border-[#EEC569] pl-3 min-[320px]:pl-4">
                <div className="flex items-end gap-3 max-[319px]:flex-col max-[319px]:items-start max-[319px]:gap-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D1B36E]">
                    <EditableText path="q4ProjectSupport.supportPrefix" defaultValue="Up to" />
                  </p>
                  <p className="text-[42px] font-bold leading-none tracking-tight text-[#F1DB9A] max-[319px]:text-[36px] sm:text-[52px]">
                    <EditableText path="q4ProjectSupport.supportValue" defaultValue="US$500" />
                  </p>
                </div>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D1B36E]">
                  <EditableText path="q4ProjectSupport.supportLabel" defaultValue="sample manufacturing support" />
                </p>
              </div>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#D1D1D1] sm:text-base">
                <EditableText
                  path="q4ProjectSupport.body"
                  defaultValue="New and returning customers can submit an upcoming project for review. Eligibility is confirmed after review."
                />
              </p>
              <a
                href="https://app.apexbatch.com/"
                rel="nofollow"
                className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-[linear-gradient(90deg,#D8AC4E_0%,#F1DB9A_100%)] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.11em] text-[#1A1A1A] shadow-[0_10px_24px_rgba(238,197,105,0.28)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(238,197,105,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEC569] motion-reduce:transform-none sm:w-auto"
              >
                <EditableText path="q4ProjectSupport.cta" defaultValue="Submit Your Project" />
              </a>
            </div>

            <div className="grid gap-3">
              {PROJECT_SUPPORT_METRICS.map((metric, index) => (
                <div key={metric.value} className="rounded-xl border border-[#EEC569]/25 bg-[#090909]/55 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-6">
                  <p className="text-[28px] font-bold leading-none tracking-tight text-[#EEC569] sm:text-[32px]">
                    <EditableText path={`q4ProjectSupport.metrics.${index}.value`} defaultValue={metric.value} />
                  </p>
                  <p className="mt-2 text-[13px] leading-snug text-[#D1D1D1] sm:text-sm">
                    <EditableText path={`q4ProjectSupport.metrics.${index}.label`} defaultValue={metric.label} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="relative mt-8 border-t border-[#EEC569]/20 pt-5 text-xs leading-relaxed text-[#A9A19A]">
            <EditableText
              path="q4ProjectSupport.disclaimer"
              defaultValue="Eligibility and support value are confirmed after project review. Lead time depends on part complexity, material, finishing and inspection requirements. Terms apply."
              multiline
            />
          </p>
        </div>
      </div>
    </section>
  );
}
