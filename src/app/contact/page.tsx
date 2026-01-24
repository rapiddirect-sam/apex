"use client";

import { Home3Header } from "@/components/home3/layout/Home3Header";
import { Home3Footer } from "@/components/home3/layout/Home3Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactNextSteps } from "@/components/contact/ContactNextSteps";

export default function ContactPage() {
  return (
    <>
      <Home3Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactNextSteps />
      </main>
      <Home3Footer />
    </>
  );
}
