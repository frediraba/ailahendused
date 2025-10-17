import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kohandatud AI-lahendused – AI Lahendused",
  description:
    "Agent-mustrite ja süsteemiintegratsioonide disain sinu töövoogude jaoks. Täpselt vajaduse järgi.",
};

const process = [
  "Avastus: ärivajadus ja piirangud",
  "PoC/MVP: kiire tõestus",
  "Tootestamine: skaleeritus ja haldus",
];

const risk = ["Juurdepääsude kontroll", "Audit-logid", "Kvaliteeditestid"];

export default function CustomSolutionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="app-container mx-auto flex max-w-4xl flex-col gap-12 px-6 py-20 sm:py-28">
        <header className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/65">
            Teenused · Kohandatud lahendused
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Kohandatud AI-lahendused
          </h1>
          <p className="text-lg leading-relaxed text-foreground/75">
            Kui standardist ei piisa, disainime täpselt sinu töövoogude järgi – agent-mustritest
            andmesilla ja integratsioonideni.
          </p>
        </header>

        <section className="grid gap-10 sm:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Protsess</h2>
            <ul className="space-y-3 text-sm text-foreground/75">
              {process.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-[--color-brand]" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Riskijuhtimine</h2>
            <ul className="space-y-3 text-sm text-foreground/75">
              {risk.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-[--color-brand]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Miks kohandatud lähenemine</h2>
          <p className="text-sm leading-relaxed text-foreground/75">
            Ehitus algab avastusest, kus paneme paika arhitektuuri, turvanõuded ja edu mõõdikud. PoC annab
            sulle kiire kinnituse, et lahendus töötab päris andmetega. Tootestamise faasis loome
            monitooringu, hooldusprotsessi ja toe, et süsteem püsiks usaldusväärne ka koormuse kasvades.
          </p>
          <div>
            <Link href="/#ai-konsultatsioon" className="btn-primary">
              Võta ühendust
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
