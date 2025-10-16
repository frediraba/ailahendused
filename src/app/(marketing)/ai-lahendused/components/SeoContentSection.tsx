import { seoNarrative } from "@/app/(marketing)/ai-lahendused/strings";

export function SeoContentSection() {
  return (
    <div className="app-container grid gap-8 rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
          Tehisintellekt sinu äris
        </p>
        <h3 className="text-3xl font-semibold tracking-tight">
          {seoNarrative.heading}
        </h3>
        <p className="text-base leading-relaxed text-foreground/75">
          {seoNarrative.lead}
        </p>
      </header>
      <div className="space-y-4">
        <ul className="space-y-3 text-sm leading-relaxed text-foreground/80">
          {seoNarrative.bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-[--color-brand]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="rounded-xl bg-background/70 px-4 py-3 text-sm text-foreground/75">
          {seoNarrative.closing}
        </p>
      </div>
    </div>
  );
}
