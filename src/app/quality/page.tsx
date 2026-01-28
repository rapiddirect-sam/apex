"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { QualityHero } from "@/components/quality/QualityHero";
import { QualityProcess } from "@/components/quality/QualityProcess";
import { QualityConsistency } from "@/components/quality/QualityConsistency";
import { QualityEquipment } from "@/components/quality/QualityEquipment";
import { QualityCertifications } from "@/components/quality/QualityCertifications";
import { QualityCTA } from "@/components/quality/QualityCTA";

export default function QualityPage() {
  return (
    <>
      <Home3Header />
      <main className="bg-[#000000] min-h-screen">
        <QualityHero />
        <QualityProcess />
        <QualityConsistency />
        <QualityEquipment />
        <QualityCertifications />
        <QualityCTA />
      </main>
      <Home3Footer />
    </>
  );
}
