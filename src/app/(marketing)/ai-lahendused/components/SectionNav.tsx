"use client";

import { useEffect, useState } from "react";
import { anchors } from "@/app/(marketing)/ai-lahendused/strings";

const anchorList = [
  { id: anchors.hero, label: "Ülevaade" },
  { id: anchors.value, label: "Miks meie" },
  { id: anchors.services, label: "Teenused" },
  { id: anchors.approach, label: "Kuidas töötame" },
  { id: anchors.testimonial, label: "Tagasiside" },
  { id: anchors.industries, label: "Sektorid" },
  { id: anchors.resources, label: "Ressursid" },
  { id: anchors.faq, label: "KKK" },
  { id: anchors.consultation, label: "Võta ühendust" },
];

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function SectionNav() {
  const [active, setActive] = useState(anchors.hero);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries
          .filter((item) => item.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (entry?.target?.id) {
          setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    anchorList.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      anchorList.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <nav aria-label="Lehe jaotised" className="z-10">
      <ul className="card flex flex-col gap-2 p-4 backdrop-blur">
        {anchorList.map(({ id, label }) => {
          const isActive = id === active;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollToId(id)}
                className={`w-full rounded-full px-4 py-2 text-left text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                  isActive
                    ? "bg-foreground text-background shadow"
                    : "text-foreground/70 hover:bg-foreground/10"
                }`}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
