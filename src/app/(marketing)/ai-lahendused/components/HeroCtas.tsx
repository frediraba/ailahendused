"use client";

import { anchors, heroCopy } from "@/app/(marketing)/ai-lahendused/strings";

const consultHref = `#${anchors.consultation}`;
const servicesHref = `#${anchors.services}`;

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

  const handleServices = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollTo(anchors.services);
  };

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
      <a href={consultHref} onClick={handleConsult} className="btn-primary">
        {heroCopy.primaryCta}
      </a>
      <a href={consultHref} onClick={handleConsult} className="btn-outline">
        {heroCopy.secondaryCta}
      </a>
      <a href={servicesHref} onClick={handleServices} className="btn-outline">
        Vaata teenuseid
      </a>
    </div>
  );
}
