import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teenused – AI Lahendused",
  description:
    "Vestlusrobotid, automatiseerimine, turundus- ja sisuabi, kohandatud tehisaru lahendused. Alusta tasuta konsultatsiooniga.",
};

const services = [
  {
    title: "Vestlusrobotid ja chat-agendid",
    lead:
      "Automaatne klienditugi veebis ja sotsiaalides. Vähem korduvküsimusi, kiirem vastus, parem rahulolu.",
    body:
      "Disainime ja koolitame eestikeelsed ning ingliskeelsed agendid, kes oskavad vastata korduvatele küsimustele, teha pakkumisi ja broneerida kohtumisi. Seome lahenduse sinu CRM-i, e-posti ja sõnumikanalitega ning mõõdame katvust, vastuse kiirust ning CSAT-i.",
    href: "/services/chatbots",
    cta: "Küsi demot",
  },
  {
    title: "Protsesside automatiseerimine",
    lead:
      "Broneerimised, aruandlus, tellimused ja CRM-sünkron – vähenda käsitööd ja vigasid.",
    body:
      "Kaardistame korduvad sammud, loome töövood ja ühendame süsteemid nii, et kriitiline info liigub automaatselt. Tulemus on vähem käsitööd, selged logid ja tiim, kes saab keskenduda suurema väärtusega tööle.",
    href: "/services/automation",
    cta: "Soovin hinnapakkumist",
  },
  {
    title: "Turundus- ja sisuabi",
    lead:
      "E-kirjad, kampaaniaplaanid, generatiivne sisu ja SEO-toetus kohaliku turu jaoks.",
    body:
      "AI agent töötab koos sinu turundustiimiga: hoiab kampaaniate kalendrit, valmistab uudiskirjad ja artiklid brändi tooniga ning pakub A/B testitavaid variatsioone. Kõik tekstid läbivad kinnitusringi ja mõõdame tulemusi avamiste, klikimäära ning päringute kasvu järgi.",
    href: "/services/marketing",
    cta: "Küsi pakkumist",
  },
  {
    title: "Kohandatud AI-lahendused",
    lead: "Spetsiifilised agendid ja integratsioonid sinu töövoogude järgi.",
    body:
      "Kui standardlahendusest ei piisa, disainime agentuuri stiilis sprintides täpselt sinu äriloogikale vastava süsteemi. Ühendame andmeallikad, loome turvapoliitikad ja anname sulle kontrolli auditeerimise ning ROI üle.",
    href: "/services/custom",
    cta: "Võta ühendust",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-foreground/10 bg-foreground/5">
        <div className="app-container mx-auto flex max-w-4xl flex-col gap-6 px-6 py-20 text-center sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/70">
            Teenused
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            AI teenuspakett, mis kasvab koos sinu ettevõttega
          </h1>
          <p className="text-base text-foreground/75 sm:text-lg">
            Iga koostöö algab kiirest sisseelamisest ja lõpeb selge ROI-ga. Vali konkreetne teenus või
            kombineeri neid, et tuua tehisaru korraga mitmesse töövoogu.
          </p>
          <div>
            <Link href="/contact" className="btn-primary">
              Küsi pakkumist
            </Link>
          </div>
        </div>
      </section>

      <section className="app-container grid gap-8 px-6 py-16 sm:grid-cols-2 sm:py-24">
        {services.map((service) => (
          <article
            key={service.title}
            className="card gradient-border flex h-full flex-col gap-4 p-6 text-left"
          >
            <h2 className="text-2xl font-semibold text-foreground">{service.title}</h2>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/65">
              {service.lead}
            </p>
            <p className="text-sm leading-relaxed text-foreground/75">{service.body}</p>
            <div className="mt-auto pt-4">
              <Link
                href={service.href}
                className="text-sm font-semibold text-foreground underline-offset-4 hover:underline"
              >
                {service.cta}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
