import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vestlusrobotid ja chat-agendid – AI Lahendused",
  description:
    "24/7 klienditugi veebis ja Messengeri/WhatsAppi integratsioon. Vähem korduvküsimusi, kiirem vastus, mõõdetav ROI.",
};

const reasons = [
  "Pidev kättesaadavus (24/7)",
  "Vähem käsitööd ja paremad SLA-d",
  "Toonuse korrashoid brändi keeles",
];

const process = [
  "Käivitamine: FAQ + päringuvormid",
  "Integratsioon: CRM/kirjad/kalender",
  "Mõõtmine: vastamise aeg, lahendusmäär, CSAT",
];

export default function ChatbotsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="app-container mx-auto flex max-w-4xl flex-col gap-12 px-6 py-20 sm:py-28">
        <header className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/65">
            Teenused · Vestlusrobotid
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Vestlusrobotid ja chat-agendid
          </h1>
          <p className="text-lg leading-relaxed text-foreground/75">
            Too 24/7 klienditugi sinna, kus su kliendid juba on – veeb, Messenger, WhatsApp. Vähenda
            korduvaid päringuid ja kiirenda vastamist.
          </p>
        </header>

        <section className="grid gap-10 sm:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Miks tasub</h2>
            <ul className="space-y-3 text-sm text-foreground/75">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-[--color-brand]" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Kuidas teeme</h2>
            <ul className="space-y-3 text-sm text-foreground/75">
              {process.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-[--color-brand]" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Mida saad</h2>
          <p className="text-sm leading-relaxed text-foreground/75">
            Loome dialoogid sinu brändi tooniga, määrame eskalatsioonireeglid ja jälgime, et agent annaks
            lubadusi, mida su meeskond suudab täita. Lepime KPI-d kokku enne esimest laivi, et mõõta
            automatiseerimise katvust ja klientide rahulolu võrreldes inimtoega.
          </p>
          <div>
            <Link href="/#ai-konsultatsioon" className="btn-primary">
              Küsi demot
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
