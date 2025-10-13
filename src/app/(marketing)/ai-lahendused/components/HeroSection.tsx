import Image from "next/image";
import { HeroCtas } from "@/app/(marketing)/ai-lahendused/components/HeroCtas";
import { heroCopy } from "@/app/(marketing)/ai-lahendused/strings";

export function HeroSection() {
  return (
    <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[3fr_2fr]">
      <div className="space-y-6 text-left">
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
        <dl className="grid gap-4 text-sm text-foreground/70 sm:grid-cols-2">
          <div className="rounded-xl border border-foreground/10 bg-foreground/5 p-4">
            <dt className="font-semibold text-foreground">3 kuud</dt>
            <dd>Keskmine aeg ideest töötava agendini.</dd>
          </div>
          <div className="rounded-xl border border-foreground/10 bg-foreground/5 p-4">
            <dt className="font-semibold text-foreground">95%+</dt>
            <dd>Vestluste automatiseerimise määr meie klientidel.</dd>
          </div>
        </dl>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5 shadow-lg">
          <Image
            src="/branding/conversational-agents.svg"
            alt="Illustratsioon AI vestlusrobotist"
            fill
            className="object-contain p-8"
            priority
          />
        </div>
      </div>
    </div>
  );
}



