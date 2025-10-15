import Image from "next/image";
import { HeroCtas } from "@/app/(marketing)/ai-lahendused/components/HeroCtas";
import {
  heroCopy,
  heroMetrics,
  trustedLogos,
} from "@/app/(marketing)/ai-lahendused/strings";

export function HeroSection() {
  const marqueeLogos = [...trustedLogos, ...trustedLogos];
  const uniqueLogoCount = trustedLogos.length;

  return (
    <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[3fr_2fr]">
      <div className="space-y-8 text-left">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-foreground/70">
          Tehisintellekti agendid Eesti ettevõtetele
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {heroCopy.headline}
        </h1>
        <p className="text-lg leading-7 text-foreground/80">
          {heroCopy.subheading}
        </p>
        <HeroCtas />
        <dl className="grid gap-4 rounded-2xl border border-foreground/10 bg-foreground/5 p-6 text-sm sm:grid-cols-3">
          {heroMetrics.map((metric) => (
            <div key={metric.value} className="space-y-1">
              <dt className="text-2xl font-semibold text-foreground">{metric.value}</dt>
              <dd className="text-foreground/70">{metric.label}</dd>
            </div>
          ))}
        </dl>
        <section
          className="space-y-4"
          aria-labelledby="trusted-companies-heading"
          aria-label="Meid usaldavad Eesti ettevõtted"
        >
          <h2
            id="trusted-companies-heading"
            className="text-sm font-semibold text-foreground/70"
          >
            Meid usaldavad Eesti ettevõtted
          </h2>
          <div className="group/trusted mx-auto w-full overflow-hidden rounded-2xl bg-background/80 p-4 ring-1 ring-inset ring-foreground/10 md:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] md:[mask-size:100%_100%] md:[mask-repeat:no-repeat]">
            <ul
              className="flex w-max min-w-full flex-nowrap items-stretch gap-4 animate-trusted-marquee motion-reduce:animate-none group-hover/trusted:[animation-play-state:paused] group-focus-within/trusted:[animation-play-state:paused]"
              style={{ ["--marquee-duration" as const]: "28s" }}
            >
              {marqueeLogos.map((logo, index) => {
                const isDuplicate = index >= uniqueLogoCount;

                return (
                  <li
                    key={`${logo.name}-${index}`}
                    className="group relative flex w-[180px] flex-col items-center justify-center gap-2 rounded-xl bg-background px-4 py-3 text-center shadow-sm ring-1 ring-inset ring-foreground/10 transition duration-300 ease-out focus-visible:outline-none motion-safe:hover:scale-[1.02] motion-safe:focus-visible:scale-[1.02] hover:shadow-md hover:ring-foreground/20 focus-visible:ring-foreground/30 focus-visible:shadow-md"
                    title={logo.name}
                    tabIndex={isDuplicate ? -1 : 0}
                    aria-label={isDuplicate ? undefined : logo.name}
                    aria-hidden={isDuplicate ? true : undefined}
                  >
                    <Image
                      src={logo.logo}
                      alt={logo.alt}
                      width={128}
                      height={44}
                      className="h-auto max-h-10 w-full max-w-[128px] object-contain"
                    />
                    <span className="w-full truncate text-sm font-medium text-foreground/80">
                      {logo.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <div className="relative aspect-square w-full max-w-[320px] shrink-0 overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5 p-8 shadow-lg">
          <Image
            src="/branding/conversational-agents.svg"
            alt="Illustratsioon AI vestlusrobotist"
            fill
            priority
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 220px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

