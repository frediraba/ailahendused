import Image from "next/image";
import { testimonialCopy } from "@/app/(marketing)/ai-lahendused/strings";

export function TestimonialSection() {
  const hasCaseStudy = Boolean(testimonialCopy.ctaHref);

  return (
    <article className="app-container mx-auto flex max-w-3xl flex-col gap-6 rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm card gradient-border">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        {testimonialCopy.image ? (
          <div className="relative h-20 w-20 flex-none overflow-hidden rounded-full border border-foreground/10 bg-background/60">
            <Image
              src={testimonialCopy.image}
              alt={testimonialCopy.client}
              fill
              className="object-cover"
            />
          </div>
        ) : null}
        <div className="space-y-1">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-foreground/60">
            Kliendilugu
          </p>
          <h3 className="text-xl font-semibold text-foreground">
            {testimonialCopy.client}
          </h3>
          <p className="text-sm text-foreground/70">{testimonialCopy.outcome}</p>
        </div>
      </div>
      <blockquote className="border-l-2 border-foreground/40 pl-4 text-lg text-foreground/80">
        “{testimonialCopy.quote}”
      </blockquote>
      {hasCaseStudy ? (
        <a
          href={testimonialCopy.ctaHref}
          className="self-start text-sm font-semibold text-foreground underline-offset-4 hover:underline"
        >
          {testimonialCopy.ctaLabel ?? "Loe case-studyt"}
        </a>
      ) : (
        <p className="rounded-xl bg-background/60 px-4 py-3 text-sm text-foreground/70">
          {testimonialCopy.fallbackMessage}
        </p>
      )}
    </article>
  );
}
