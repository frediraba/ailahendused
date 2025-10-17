import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Turundus- ja sisuabi – AI Lahendused",
  description:
    "E-kirjad, kampaaniaideed, SEO-toetus, generatiivne sisu. Pidev turundustempo ja paremad orgaanilised tulemused.",
};

const packages = [
  "Kampaaniaideed + kalender",
  "Uudiskirjad ja automaatikad",
  "SEO märksõnad ja sisuplokid",
];

const metrics = ["Avamised/klipid", "Orgaaniline liiklus", "Päringute arv"];

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="app-container mx-auto flex max-w-4xl flex-col gap-12 px-6 py-20 sm:py-28">
        <header className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/65">
            Teenused · Turundus
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Turundus- ja sisuabi
          </h1>
          <p className="text-lg leading-relaxed text-foreground/75">
            Toome turundusse järjepidevuse: generatiivne sisu, e-kirjad, kampaaniaplaanid ja SEO-toetus
            kohaliku turu jaoks.
          </p>
        </header>

        <section className="grid gap-10 sm:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Pakett</h2>
            <ul className="space-y-3 text-sm text-foreground/75">
              {packages.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-[--color-brand]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Mõõdikud</h2>
            <ul className="space-y-3 text-sm text-foreground/75">
              {metrics.map((metric) => (
                <li key={metric} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-[--color-brand]" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Kuidas agent aitab</h2>
          <p className="text-sm leading-relaxed text-foreground/75">
            AI hoiab sinu turunduskalendrit täidetuna, pakub variatsioone kampaaniatele ja tagab, et igal
            nädalal jõuab klientideni värske sisu. Töötame koos sinu tiimiga, et kinnitada toon, seada
            heakskiiduring ning analüüsida tulemusi. Vajadusel seome valitud tööriistadega, et
            automatiseerida uudiskirjade saatmine või SEO raportid.
          </p>
          <div>
            <Link href="/#ai-konsultatsioon" className="btn-primary">
              Küsi pakkumist
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
