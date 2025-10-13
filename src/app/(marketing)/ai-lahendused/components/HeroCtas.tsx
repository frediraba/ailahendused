"use client";

import { anchors } from "@/app/(marketing)/ai-lahendused/strings";

const targetHref = `#${anchors.consultation}`;

export function HeroCtas() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.getElementById(anchors.consultation);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const firstField = document.querySelector<HTMLInputElement>(
      "form[action='/api/contact-request'] input[name='fullName'], form input[name='fullName']",
    );
    if (firstField) {
      window.requestAnimationFrame(() => {
        firstField.focus();
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <a
        href={targetHref}
        onClick={handleClick}
        className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-sm transition hover:bg-foreground/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      >
        K\u00FCsi tasuta konsultatsiooni
      </a>
      <a
        href={targetHref}
        onClick={handleClick}
        className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      >
        Broneeri demo
      </a>
    </div>
  );
}
