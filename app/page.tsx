import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { BillingSignals } from "@/components/billing-signals";
import { HowItWorks } from "@/components/how-it-works";
import { AuditForm } from "@/components/audit-form";
import { BillDiagram } from "@/components/bill-diagram";
import { AboutService } from "@/components/about-service";
import { WhatWeCheck } from "@/components/what-we-check";
import { SolarCallout } from "@/components/solar-callout";
import { SocialProof } from "@/components/social-proof";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br",
    languages: { "pt-BR": "https://auditoria.coesasolar.com.br" },
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <BillingSignals />
      <HowItWorks />
      <AuditForm />
      <BillDiagram />
      <AboutService />
      <WhatWeCheck />
      <SolarCallout />
      <SocialProof />
      <FAQ />
      <Footer />
    </main>
  );
}
