import { approachSteps } from "@/app/(marketing)/ai-lahendused/strings";

export function ApproachSection() {
  return (
    <div className="app-container">
      <ol className="relative grid gap-6 lg:grid-cols-4">
        {approachSteps.map((step, index) => (
          <li
            key={step.index}
            className="card gradient-border flex h-full flex-col gap-4 p-6"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--brand),#000_10%)] text-base font-semibold text-[--color-brand-foreground]">
                {index + 1}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-foreground/50">
                Etapp {index + 1}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="text-sm leading-relaxed text-foreground/75">
              {step.description}
            </p>
            <p className="mt-auto rounded-lg bg-[--color-muted] px-4 py-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
              {step.deliverable}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
