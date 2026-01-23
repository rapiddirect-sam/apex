import { Home2Header } from "@/components/home2/layout/Home2Header";
import { Home2Footer } from "@/components/home2/layout/Home2Footer";
import { Home2Hero } from "@/components/home2/sections/Home2Hero";
import { Home2TrustedLogos } from "@/components/home2/sections/Home2TrustedLogos";
import { Home2Facilities } from "@/components/home2/sections/Home2Facilities";
import { Home2Services } from "@/components/home2/sections/Home2Services";
import { Home2Process } from "@/components/home2/sections/Home2Process";
import { Home2WhyChoose } from "@/components/home2/sections/Home2WhyChoose";
import { Home2Industries } from "@/components/home2/sections/Home2Industries";
import { Home2Portfolio } from "@/components/home2/sections/Home2Portfolio";
import { Home2Certifications } from "@/components/home2/sections/Home2Certifications";
import { Home2FAQ } from "@/components/home2/sections/Home2FAQ";

export default function Home2Page() {
  return (
    <>
      <Home2Header />
      <main>
        <Home2Hero />
        <Home2TrustedLogos />
        <Home2Facilities />
        <Home2Services />
        <Home2Process />
        <Home2WhyChoose />
        <Home2Industries />
        <Home2Portfolio />
        <Home2Certifications />
        <Home2FAQ />
      </main>
      <Home2Footer />
    </>
  );
}
