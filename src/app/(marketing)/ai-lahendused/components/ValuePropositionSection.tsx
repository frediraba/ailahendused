import Image from "next/image";
import { valuePoints } from "@/app/(marketing)/ai-lahendused/strings";

export function ValuePropositionSection() {
  return (
    <div className="app-container grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
      {valuePoints.map((point) => (
        <article
          key={point.slug}
          className="card gradient-border card-hover flex h-full flex-col gap-4 p-6"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full glass">
              <Image
                src={point.icon}
                alt=""
                fill
                sizes="48px"
                className="object-contain p-2"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {point.title}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-foreground/75">
            {point.description}
          </p>
          <p className="mt-auto text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
            {point.proof}
          </p>
        </article>
      ))}
    </div>
  );
}
