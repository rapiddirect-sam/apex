const PROJECT_SUPPORT_METRICS = [
  { value: "2–12h", label: "Fast Quote Response" },
  { value: "3–5 Days", label: "Production Lead Time Starting From" },
  { value: "Free", label: "DFM Review & Agreed Inspection Documentation" },
];

export function Home3Q4ProjectSupport() {
  return (
    <section
      id="q4-project-support"
      aria-labelledby="q4-project-support-title"
      className="bg-[#0A0A0A] px-6 py-14 sm:py-16 lg:px-8 lg:py-20"
      style={{ scrollMarginTop: "calc(4rem + var(--q4-announcement-height))" }}
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-xl border border-[#D09947]/35 bg-[#1A1A1A] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EEC569]">
                Q4 PROJECT SUPPORT · OCT–DEC 2026
              </p>
              <h2
                id="q4-project-support-title"
                className="mt-4 max-w-xl text-[34px] font-bold leading-[1.06] tracking-tight text-white sm:text-[42px] lg:text-[48px]"
              >
                Put Our Quality and Speed to the Test
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#D1D1D1] sm:text-base">
                New and returning customers can submit an upcoming project for review. Eligible projects may receive up to{" "}
                <span className="font-semibold text-[#EEC569]">US$500</span> in sample manufacturing support.
              </p>
              <a
                href="https://app.apexbatch.com/"
                rel="nofollow"
                className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-[#D09947] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.11em] text-[#1A1A1A] transition-colors hover:bg-[#EEC569] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEC569] sm:w-auto"
              >
                Submit Your Project
              </a>
            </div>

            <div className="grid gap-3">
              {PROJECT_SUPPORT_METRICS.map((metric) => (
                <div key={metric.value} className="rounded-xl border border-white/10 bg-[#111111] px-5 py-5 sm:px-6">
                  <p className="text-[28px] font-bold leading-none tracking-tight text-[#EEC569] sm:text-[32px]">{metric.value}</p>
                  <p className="mt-2 text-[13px] leading-snug text-[#D1D1D1] sm:text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-relaxed text-[#999999]">
            Eligibility and support value are confirmed after project review. Lead time depends on part complexity, material,
            finishing and inspection requirements. Terms apply.
          </p>
        </div>
      </div>
    </section>
  );
}
