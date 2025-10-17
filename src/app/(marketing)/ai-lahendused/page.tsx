import type { Metadata } from "next";
import { Suspense } from "react";
import { ConsultationForm } from "@/app/(marketing)/ai-lahendused/components/ConsultationForm";
import { ApproachSection } from "@/app/(marketing)/ai-lahendused/components/ApproachSection";
import { HeroSection } from "@/app/(marketing)/ai-lahendused/components/HeroSection";
import { SectionNav } from "@/app/(marketing)/ai-lahendused/components/SectionNav";
import { SeoContentSection } from "@/app/(marketing)/ai-lahendused/components/SeoContentSection";
import { ServicesSection } from "@/app/(marketing)/ai-lahendused/components/ServicesSection";
import { IndustriesSection } from "@/app/(marketing)/ai-lahendused/components/IndustriesSection";
import { ResourcesSection } from "@/app/(marketing)/ai-lahendused/components/ResourcesSection";
import { TestimonialSection } from "@/app/(marketing)/ai-lahendused/components/TestimonialSection";
import { ValuePropositionSection } from "@/app/(marketing)/ai-lahendused/components/ValuePropositionSection";
import { FAQ } from "@/app/components/FAQ";
import {
  anchors,
  approachSteps,
  faqCopy,
  servicesCopy,
} from "@/app/(marketing)/ai-lahendused/strings";

export const SECTION_IDS = anchors;

export const metadata: Metadata = {
  title: "AI Lahendused – Tehisaru, mis töötab sinu heaks",
  description:
    "Aitame Eesti väikeettevõtetel tuua tehisaru päriselt tööle: vestlusrobotid, protsesside automatiseerimine, turundus- ja sisuabi ning kohandatud AI-lahendused. Kiire juurutus, selge ROI, kohalik tugi.",
  keywords: [
    "AI lahendused Eesti",
    "AI agent",
    "vestlusrobotid",
    "äriprotsesside automatiseerimine",
    "tehisintellekti konsultatsioon",
    "väikeettevõtte automatiseerimine",
  ],
  openGraph: {
    title: "AI Lahendused – Tehisaru, mis töötab sinu heaks",
    description:
      "Aitame Eesti väikeettevõtetel tuua tehisaru päriselt tööle: vestlusrobotid, protsesside automatiseerimine, turundus- ja sisuabi ning kohandatud AI-lahendused. Kiire juurutus, selge ROI, kohalik tugi.",
  },
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

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kuidas lansseerida AI agent Eesti väikeettevõttes",
  description:
    "AI Lahendused viib ettevõtted discovery-sprintist tootmiskeskkonna automatiseerimiseni nelja etapiga.",
  totalTime: "P6W",
  step: approachSteps.map((step) => ({
    "@type": "HowToStep",
    position: step.index,
    name: step.title,
    text: step.description,
    itemListElement: [
      {
        "@type": "HowToDirection",
        text: step.deliverable,
      },
    ],
  })),
};

const serviceCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI agendid ja automatiseerimine Eesti väikeettevõtetele",
  serviceType: "AI konsultatsioon ja automatiseerimine",
  provider: {
    "@type": "Organization",
    name: "AI Lahendused",
    url: "https://www.ailahendused.ee",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Estonia",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceLocation: {
      "@type": "Place",
      name: "Veebipõhine konsultatsioon",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Lahendused teenused",
    itemListElement: servicesCopy.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: `${service.benefit} ${service.exampleUseCase}`,
        areaServed: "EE",
      },
      description: `${service.timeline} ${service.kpi}`,
    })),
  },
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
            id={SECTION_IDS.value}
            className="scroll-mt-24 space-y-8 border-b border-foreground/10 pb-16"
          >
            <header className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Miks meie
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Meie fookus on kiires juurutuses ja mõõdetavas väärtuses
              </h2>
              <p className="text-base text-foreground/70">
                Need kolm lubadust annavad sulle selge partneri: käivitame tehisaru kiiresti,
                toome ROI numbritesse ja toetame sind eestikeelselt igal sammul.
              </p>
            </header>
            <ValuePropositionSection />
          </section>

          <section
            id={SECTION_IDS.services}
            className="scroll-mt-24 space-y-8 border-b border-foreground/10 pb-16"
          >
            <header className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Teenused
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Tehisaru sinu müügi, toe ja turunduse teenistuses
              </h2>
              <p className="text-base text-foreground/70">
                Valime töövoo, mis annab kiire võidu: vestlusrobotid, protsesside automatiseerimine, sisuabi
                ja kohandatud lahendused ehitatakse sinu tiimi päris vajaduste järgi.
              </p>
            </header>
            <ServicesSection />
          </section>

          <section
            id={SECTION_IDS.approach}
            className="scroll-mt-24 space-y-8 border-b border-foreground/10 pb-16"
          >
            <header className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Kuidas töötame
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Struktureeritud protsess nelja sammuga tulemusteni
              </h2>
              <p className="text-base text-foreground/70">
                Sisseelamine, prototüüp, integreerimine ja mõõtmine – igas etapis valid järgmise sammu
                numbrite, mitte kõhutunde põhjal.
              </p>
            </header>
            <ApproachSection />
          </section>

          <section
            id={SECTION_IDS.testimonial}
            className="scroll-mt-24 space-y-8 border-b border-foreground/10 pb-16"
          >
            <header className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Tagasiside
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Kliendid kinnitavad, et tehisaru töötab nende kasuks
              </h2>
              <p className="text-base text-foreground/70">
                Vestlusrobotid, automatiseeritud broneerimised ja sisuabi on jätnud päris jälje meeskondade
                ajagraafikule ja kliendikogemusele.
              </p>
            </header>
            <TestimonialSection />
          </section>

          <section
            id={SECTION_IDS.industries}
            className="scroll-mt-24 space-y-8 border-b border-foreground/10 pb-16"
          >
            <header className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Sektorid
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Lokaliseeritud kogemus Eesti võtmeturgudele
              </h2>
              <p className="text-base text-foreground/70">
                Tunneme e-kaubanduse, tervishoiu, teeninduse ja B2B protsesse ning räägime sinu kliendi
                keelt.
              </p>
            </header>
            <IndustriesSection />
          </section>

          <section
            id={SECTION_IDS.resources}
            className="scroll-mt-24 space-y-8 border-b border-foreground/10 pb-16"
          >
            <header className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Ressursid ja teadmised
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Õpi, kuidas AI annab konkurentsieelise
              </h2>
              <p className="text-base text-foreground/70">
                Värsked case-studyd, kontrollnimekirjad ja demod aitavad sul hinnata valmisolekut ja
                veenda tiimi.
              </p>
            </header>
            <div className="space-y-10">
              <SeoContentSection />
              <ResourcesSection />
            </div>
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
                Mida pead teadma enne AI agendi lansseerimist?
              </h2>
              <p className="text-base text-foreground/70">
                Vastused piloodi kestusele, integratsioonidele, andmete ettevalmistusele ja hinnastamisele.
              </p>
            </header>
            <FAQ items={faqCopy} />
          </section>

          <section id={SECTION_IDS.consultation} className="scroll-mt-24 space-y-6">
            <header className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                Kontakt
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Võta ühendust
              </h2>
              <p className="text-base text-foreground/70">
                Kirjelda lühidalt oma vajadust – vastame kiiresti ja soovitame järgmise sammu.
              </p>
            </header>
            <Suspense>
              <ConsultationForm />
            </Suspense>
          </section>
        </div>
        <aside className="order-2 self-start lg:order-3 lg:sticky lg:top-24 lg:w-64">
          <SectionNav />
        </aside>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogJsonLd) }}
      />
    </main>
  );
}
