import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustedLogos } from "@/components/sections/TrustedLogos";
import { Facilities } from "@/components/sections/Facilities";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Industries } from "@/components/sections/Industries";
import { Portfolio } from "@/components/sections/Portfolio";
import { Certifications } from "@/components/sections/Certifications";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedLogos />
        <Facilities />
        <Services />
        <Process />
        <WhyChooseUs />
        <Industries />
        <Portfolio />
        <Certifications />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
