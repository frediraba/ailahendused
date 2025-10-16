import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-[--color-border] bg-[--color-muted]">
      <div className="app-container grid gap-10 py-12 sm:grid-cols-3">
        <div className="space-y-3">
          <h2 className="text-base font-semibold">AI Lahendused</h2>
          <p className="text-sm text-foreground/70">
            Aitame Eesti väikeettevõtetel tuua AI agendid igapäevasesse tööse: vestlusrobotid,
            protsesside automatiseerimine ja turundusabi.
          </p>
        </div>

        <nav aria-label="Kiirlingid" className="space-y-3">
          <h2 className="text-base font-semibold">Lingid</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#ai-vaartus" className="hover:underline">Miks AI Lahendused</Link></li>
            <li><Link href="/#ai-services" className="hover:underline">Teenused</Link></li>
            <li><Link href="/#ai-protsess" className="hover:underline">Metoodika</Link></li>
            <li><Link href="/#ai-sektorid" className="hover:underline">Sektorid</Link></li>
            <li><Link href="/case-studies" className="hover:underline">Case-studyd</Link></li>
            <li><Link href="/#ai-ressursid" className="hover:underline">Ressursid</Link></li>
            <li><Link href="/#ai-faq" className="hover:underline">KKK</Link></li>
            <li><Link href="/#ai-konsultatsioon" className="hover:underline">Küsi tasuta konsultatsiooni</Link></li>
          </ul>
        </nav>

        <div className="space-y-3">
          <h2 className="text-base font-semibold">Kontakt</h2>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><a href="mailto:info@ailahendused.ee" className="hover:underline">info@ailahendused.ee</a></li>
            <li><a href="tel:+37255555555" className="hover:underline">+372 5555 5555</a></li>
            <li className="flex gap-4 pt-1">
              <a href="https://www.linkedin.com/company/ai-lahendused" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <a href="https://www.facebook.com/ailahendused" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[--color-border] bg-background">
        <div className="app-container flex items-center justify-between py-4 text-xs text-foreground/60">
          <p>© {year} AI Lahendused. Kõik õigused kaitstud.</p>
          <p className="hidden sm:block">Ehitame praktilisi AI agente, mis toovad mõõdetava väärtuse.</p>
        </div>
      </div>
    </footer>
  );
}
