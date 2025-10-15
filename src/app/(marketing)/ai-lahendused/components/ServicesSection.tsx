import Image from "next/image";
import { servicesCopy } from "@/app/(marketing)/ai-lahendused/strings";

export function ServicesSection() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
      {servicesCopy.map((service) => (
        <article
          key={service.slug}
          className="flex h-full flex-col rounded-2xl border border-foreground/10 bg-foreground/5 p-6 shadow-sm transition hover:border-foreground/25 hover:bg-foreground/10"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-background/60">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-contain p-2"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {service.title}
            </h3>
          </div>
          <p className="mt-4 text-sm text-foreground/70">{service.benefit}</p>
          <p className="mt-3 text-sm text-foreground/80">
            <span className="font-medium text-foreground">Praktiline näide: </span>
            {service.exampleUseCase}
          </p>
          <dl className="mt-4 grid gap-3 rounded-xl border border-foreground/10 bg-background/40 p-4 text-sm text-foreground/75">
            <div className="space-y-1">
              <dt className="font-semibold text-foreground">Tüüpiline ajaraam</dt>
              <dd>{service.timeline}</dd>
            </div>
            <div className="space-y-1 border-t border-foreground/10 pt-3">
              <dt className="font-semibold text-foreground">Mõõdetav tulemus</dt>
              <dd>{service.kpi}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
