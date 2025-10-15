import type { Metadata } from "next";
import { Suspense } from "react";
import { ConsultationForm } from "@/app/(marketing)/ai-lahendused/components/ConsultationForm";
import { HeroSection } from "@/app/(marketing)/ai-lahendused/components/HeroSection";
import { SectionNav } from "@/app/(marketing)/ai-lahendused/components/SectionNav";
import { ServicesSection } from "@/app/(marketing)/ai-lahendused/components/ServicesSection";
import { TestimonialSection } from "@/app/(marketing)/ai-lahendused/components/TestimonialSection";
import { anchors, faqCopy } from "@/app/(marketing)/ai-lahendused/strings";

export const SECTION_IDS = anchors;

export const metadata: Metadata = {
  title: "AI Lahendused - Tehisintellekti nõustamine",
  description:
    "Professionaalne AI partner Eesti väikestele ettevõtetele - vestlusrobotid, automatiseerimine ja turundusabi.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCopy.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function AilahendusedPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section
        id={SECTION_IDS.hero}
        className="border-b border-foreground/10 px-6 py-16 sm:py-24"
      >
        <HeroSection />
      </section>

      <div className="relative flex flex-col gap-10 px-6 py-16 sm:py-24 lg:flex-row lg:items-start lg:gap-12">
        <div className="order-1 flex-1 space-y-20">
          <section
            id={SECTION_IDS.services}
            className="scroll-mt-24 space-y-8 border-b border-foreground/10 pb-16"
          >
            <header className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Teenused
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                AI agendid, mis kasvavad sinu äri vajadustega
              </h2>
              <p className="text-base text-foreground/70">
                Valime koos fookuse: alusta ühe kasutusjuhtumiga ja laienda järgmistele tiimidele,
                kui tulemused on tõestatud.
              </p>
            </header>
            <ServicesSection />
          </section>

          <section
            id={SECTION_IDS.testimonial}
            className="scroll-mt-24 space-y-8 border-b border-foreground/10 pb-16"
          >
            <header className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Tulemused
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Usaldus põhineb mõõdetavatel tulemustel
              </h2>
              <p className="text-base text-foreground/70">
                Iga projekt algab selgete KPI-dega ja lõpeb rapordiga, mis näitab automatiseerimise katvust.
              </p>
            </header>
            <TestimonialSection />
          </section>

          <section
            id={SECTION_IDS.faq}
            className="scroll-mt-24 space-y-8 border-b border-foreground/10 pb-16"
          >
            <header className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Korduma kippuvad küsimused
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Mis juhtub, kui AI projekt käivitub?
              </h2>
              <p className="text-base text-foreground/70">
                Vastused levinud küsimustele piloodiajast, tehnilisest toest ja tulemuste mõõtmisest.
              </p>
            </header>
            <dl className="space-y-6">
              {faqCopy.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-foreground/10 bg-background/40 p-6 shadow-sm"
                >
                  <dt className="text-lg font-semibold text-foreground">{item.question}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-foreground/75">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section id={SECTION_IDS.consultation} className="scroll-mt-24 space-y-6">
            <header className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Vali endale sobiv aeg
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Räägime, milline agent annab kiireima võidu
              </h2>
              <p className="text-base text-foreground/70">
                Vorm jõuab otse meie AI konsultantideni, kes vastavad ühe tööpäeva jooksul.
              </p>
            </header>
            <Suspense>
              <ConsultationForm />
            </Suspense>
          </section>
        </div>
        <aside className="order-2 lg:order-3 lg:w-64 lg:sticky lg:top-24 self-start">
          <SectionNav />
        </aside>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
