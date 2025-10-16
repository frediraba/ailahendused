"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/#ai-vaartus", label: "Miks meie" },
  { href: "/#ai-services", label: "Teenused" },
  { href: "/#ai-protsess", label: "Metoodika" },
  { href: "/#ai-sektorid", label: "Sektorid" },
  { href: "/case-studies", label: "Case-studyd" },
  { href: "/#ai-faq", label: "KKK" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[--color-border] bg-[color-mix(in_oklab,var(--background),#000_4%)]/90 backdrop-blur">
      <div className="app-container flex items-center justify-between gap-4 py-3">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="relative block h-8 w-8 overflow-hidden rounded-md ring-1 ring-[--color-border]">
            <Image
              src="/branding/conversational-agents.svg"
              alt="AI Lahendused logo"
              fill
              sizes="32px"
              className="object-contain p-1.5"
              priority
            />
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground group-hover:opacity-90">
            AI Lahendused
          </span>
        </Link>

        <nav aria-label="Põhinavigatsioon" className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#ai-konsultatsioon" className="btn-primary">
            Küsi tasuta konsultatsiooni
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Ava menüü"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-[--color-border] text-foreground/80 hover:text-foreground"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {open ? (
        <div className="sm:hidden border-t border-[--color-border] bg-background/95">
          <nav aria-label="Mobiilimenüü" className="app-container flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground/90 hover:bg-[--color-muted]"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#ai-konsultatsioon" onClick={() => setOpen(false)} className="btn-primary">
              Küsi tasuta konsultatsiooni
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
