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
            <span className="font-medium text-foreground">Praktiline n\u00E4ide: </span>
            {service.exampleUseCase}
          </p>
        </article>
      ))}
    </div>
  );
}

