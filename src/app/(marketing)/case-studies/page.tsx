import Link from "next/link";

export const metadata = {
  title: "Case-studyd",
  description:
    "Praktilised näited mõõdetavatest tulemustest: vastuskiirus, automatiseerimise katvus ja ROI.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-foreground/10 py-14 sm:py-20">
        <div className="app-container max-w-4xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-foreground/70">
            Tulemused
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Case-studyd ja edulood
          </h1>
          <p className="max-w-2xl text-foreground/70">
            Valik näiteid sellest, kuidas AI agendid vähendavad käsitööd ja parandavad
            kliendikogemust. Küsi lisamaterjale oma sektori kohta.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="app-container grid gap-6 sm:grid-cols-2">
          <article className="card gradient-border flex h-full flex-col p-6">
            <header className="space-y-1">
              <h2 className="text-xl font-semibold text-foreground">
                Põhjala Rendi – klienditoe automatiseerimine
              </h2>
              <p className="text-sm text-foreground/70">
                63% kiirem reageerimine ja 2x rohkem müügivihjeid
              </p>
            </header>
            <p className="mt-4 text-sm text-foreground/80">
              Vestlusrobot vastab korduvatele päringutele eesti ja inglise keeles ning suunab keerukad teemad
              õigele spetsialistile. Piloot 3 nädalaga, täislahendus 6 nädalaga.
            </p>
            <dl className="mt-4 grid gap-3 rounded-xl border border-foreground/10 bg-background/40 p-4 text-sm text-foreground/75">
              <div className="space-y-1">
                <dt className="font-semibold text-foreground">Mõõdikud</dt>
                <dd>80–90% korduvate päringute automatiseerimine, &lt;30 sek keskmine vastusaeg.</dd>
              </div>
              <div className="space-y-1 border-t border-foreground/10 pt-3">
                <dt className="font-semibold text-foreground">Tehnika</dt>
                <dd>Veebivestlus + WhatsApp, CRM-integratsioon, kvaliteedilogi.</dd>
              </div>
            </dl>
            <div className="mt-auto flex items-center gap-3 pt-4">
              <Link href="/#ai-konsultatsioon" className="btn-primary">
                Küsi pakkumist
              </Link>
              <Link href="/" className="btn-outline">
                Tagasi avalehele
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
