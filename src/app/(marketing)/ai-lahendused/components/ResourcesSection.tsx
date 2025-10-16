import Link from "next/link";
import { resourceHighlights } from "@/app/(marketing)/ai-lahendused/strings";

export function ResourcesSection() {
  return (
    <div className="app-container grid gap-6 lg:grid-cols-3">
      {resourceHighlights.map((resource) => (
        <article
          key={resource.title}
          className="card gradient-border flex h-full flex-col justify-between gap-4 p-6"
        >
          <div className="space-y-3">
            <span className="inline-flex w-max rounded-full border border-[--color-border] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
              Ressurss
            </span>
            <h3 className="text-lg font-semibold text-foreground">
              {resource.title}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/70">
              {resource.description}
            </p>
          </div>
          <Link
            href={resource.href}
            className="text-sm font-semibold text-[--color-brand] underline-offset-4 hover:underline"
          >
            {resource.label}
          </Link>
        </article>
      ))}
    </div>
  );
}
