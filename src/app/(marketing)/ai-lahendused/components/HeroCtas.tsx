"use client";

import Link from "next/link";
import { anchors, heroCopy } from "@/app/(marketing)/ai-lahendused/strings";

const consultHref = `#${anchors.consultation}`;
const caseStudiesHref = "/case-studies";
const demoHref =
  "mailto:info@ailahendused.ee?subject=Soovin%20AI%20demo&body=Tere%20AI%20Lahendused%2C%0A%0ASoovin%20broneerida%20demo.%20Palun%20võtke%20minuga%20ühendust.%0A%0AT%C3%A4nades%2C";

export function HeroCtas() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleConsult = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollTo(anchors.consultation);
    const firstField = document.querySelector<HTMLInputElement>(
      "form[action='/api/contact-request'] input[name='fullName'], form input[name='fullName']",
    );
    if (firstField) {
      window.requestAnimationFrame(() => firstField.focus());
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
      <a href={consultHref} onClick={handleConsult} className="btn-primary">
        {heroCopy.primaryCta}
      </a>
      <Link href={caseStudiesHref} className="btn-outline">
        {heroCopy.secondaryCta}
      </Link>
      <a href={demoHref} className="btn-outline">
        {heroCopy.tertiaryCta}
      </a>
    </div>
  );
}
