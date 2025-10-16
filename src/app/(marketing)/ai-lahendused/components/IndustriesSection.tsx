import { industryHighlights } from "@/app/(marketing)/ai-lahendused/strings";

export function IndustriesSection() {
  return (
    <div className="app-container grid gap-6 lg:grid-cols-2">
      {industryHighlights.map((industry) => (
        <article
          key={industry.name}
          className="card gradient-border card-hover flex h-full flex-col gap-4 p-6"
        >
          <header className="space-y-1">
            <h3 className="text-lg font-semibold text-foreground">
              {industry.name}
            </h3>
            <p className="text-sm text-foreground/70">{industry.pains}</p>
          </header>
          <p className="text-sm leading-relaxed text-foreground/80">
            {industry.outcome}
          </p>
        </article>
      ))}
    </div>
  );
}
