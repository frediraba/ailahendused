import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt – AI Lahendused",
  description:
    "Räägime sinu ärist ja leiame kiireima tee AI-st väärtuseni. Kirjuta või broneeri tasuta konsultatsioon.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="app-container mx-auto flex max-w-3xl flex-col gap-6 px-6 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/65">
          Kontakt
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Kontakt</h1>
        <p className="text-base leading-relaxed text-foreground/80">
          Kirjelda lühidalt oma vajadust – vastame kiiresti ja pakume konkreetse järgmise sammu. Soovi
          korral broneeri tasuta 30-min konsultatsioon.
        </p>
        <div className="space-y-4 rounded-3xl border border-foreground/10 bg-foreground/5 p-8 text-sm text-foreground/80 shadow-sm">
          <p>
            E-post:{" "}
            <a href="mailto:info@ailahendused.ee" className="font-semibold text-foreground underline-offset-4 hover:underline">
              info@ailahendused.ee
            </a>
          </p>
          <p>
            Telefon:{" "}
            <a href="tel:+3720000000" className="font-semibold text-foreground underline-offset-4 hover:underline">
              +372 0000 000
            </a>
          </p>
          <p>Tallinn, Eesti · Tööpäeviti 09:00–17:00</p>
          <div>
            <Link href="/#ai-konsultatsioon" className="btn-primary">
              Võta ühendust
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
