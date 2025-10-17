import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Protsesside automatiseerimine – AI Lahendused",
  description:
    "Broneerimised, aruandlus, tellimused, CRM-sünkron. Vähenda käsitööd ja vigasid, võida aega ning kasumlikkust.",
};

const useCases = [
  "Kalendri- ja ruumibroneeringud",
  "Aruandlus ja e-kirjad",
  "Tellimuste sünkroniseerimine",
];

const outcomes = [
  "Ajakulu vähenemine 20–60%",
  "Vigade arvu langus",
  "Läbipaistvam pipeline",
];

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="app-container mx-auto flex max-w-4xl flex-col gap-12 px-6 py-20 sm:py-28">
        <header className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/65">
            Teenused · Automatiseerimine
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Protsesside automatiseerimine
          </h1>
          <p className="text-lg leading-relaxed text-foreground/75">
            Automatiseeri rutiin: broneerimised, aruandlus, tellimused, sünkroonsed andmevood. Vähenda
            vigu ja vabasta meeskonna aeg.
          </p>
        </header>

        <section className="grid gap-10 sm:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Tüüpilised kasutuslood</h2>
            <ul className="space-y-3 text-sm text-foreground/75">
              {useCases.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-[--color-brand]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Tulemused</h2>
            <ul className="space-y-3 text-sm text-foreground/75">
              {outcomes.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-[--color-brand]" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Kuidas projekt kulgeb</h2>
          <p className="text-sm leading-relaxed text-foreground/75">
            Sisseelamisel kaardistame käsitsi tehtavad sammud ja määrame, millised andmevood vajavad
            automatiseerimist. MVP jookseb tihti juba mõne nädala jooksul, mille järel lisame järk-järgult
            erijuhud, logimise ning juhtpaneelid. Iga sprindi lõpus jagame ROI kokkuvõtet ja järgmise
            laienduse soovitust.
          </p>
          <div>
            <Link href="/#ai-konsultatsioon" className="btn-primary">
              Soovin hinnapakkumist
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}

