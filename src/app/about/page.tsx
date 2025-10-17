import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meist – AI Lahendused",
  description:
    "Kohalik tiim, kes toob AI praktikasse: kiire juurutus, selged mõõdikud, usaldusväärne tugi.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="app-container mx-auto flex max-w-3xl flex-col gap-6 px-6 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/65">
          Meist
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Meist</h1>
        <div className="space-y-5 text-base leading-relaxed text-foreground/80">
          <p>
            AI Lahendused on Eesti tiim, kes aitab väikeettevõtetel tuua tehisaru päriselt tööle.
          </p>
          <p>
            Töötame kiirelt ja läbipaistvalt: väike MVP, konkreetne mõõtmine, iteratiivne parendus.
          </p>
          <p>Meie fookus on praktilisus, usaldusväärsus ja kohalik tugi.</p>
        </div>
      </section>
    </main>
  );
}

