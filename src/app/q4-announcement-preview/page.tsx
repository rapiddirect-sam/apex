import type { Metadata } from "next";
import { Q4AnnouncementPreview } from "@/components/home3/layout/Q4AnnouncementPreview";

export const metadata: Metadata = {
  title: "Q4 Announcement Bar Preview | Apex Batch",
  robots: { index: false, follow: false },
};

export default function Q4AnnouncementPreviewPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] px-4 pt-24 text-white sm:px-6">
      <Q4AnnouncementPreview />
      <div className="mx-auto max-w-3xl pt-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EEC569]">Preview</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Q4 Announcement Bar</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70">
          This isolated preview forces the campaign bar to display without changing its live campaign schedule.
        </p>
      </div>
    </main>
  );
}
