export type LocaleString = string;

export type HeroCopy = {
  headline: LocaleString;
  subheading: LocaleString;
  primaryCta: LocaleString;
  secondaryCta: LocaleString;
};

export type ServiceCategory = {
  slug: string;
  title: LocaleString;
  benefit: LocaleString;
  exampleUseCase: LocaleString;
  icon: string;
};

export type TestimonialCopy = {
  quote: LocaleString;
  client: LocaleString;
  outcome: LocaleString;
  ctaLabel?: LocaleString;
  ctaHref?: string;
  image?: string;
  fallbackMessage: LocaleString;
};

export type SectionAnchors = {
  hero: string;
  services: string;
  testimonial: string;
  consultation: string;
};

export const anchors: SectionAnchors = {
  hero: "ai-hero",
  services: "ai-services",
  testimonial: "ai-testimonial",
  consultation: "ai-konsultatsioon",
};

export const heroCopy: HeroCopy = {
  headline: "AI Lahendused, mis vabastavad sinu tiimi",
  subheading:
    "Loome vestlusroboteid ja automatiseeritud t\u00F6\u00F6vooge, et v\u00E4hendada k\u00E4sit\u00F6\u00F6d ning hoida kliendid rahul alates esimesest kontaktist kuni j\u00E4relteeninduseni.",
  primaryCta: "K\u00FCsi tasuta konsultatsiooni",
  secondaryCta: "Broneeri demo",
};

export const servicesCopy: ServiceCategory[] = [
  {
    slug: "conversational-agents",
    title: "Vestlusrobotid",
    benefit: "24/7 klienditugi eesti ja inglise keeles",
    exampleUseCase:
      "Veebivestlus ja WhatsApp vastavad korduvatele p\u00E4ringutele ja suunavad keerulisemad teemad \u00F5igesse tiimi.",
    icon: "/branding/conversational-agents.svg",
  },
  {
    slug: "automation",
    title: "Protsesside automatiseerimine",
    benefit: "Eemaldab k\u00E4sit\u00F6\u00F6 korduvatest back-office \u00FClesannetest",
    exampleUseCase:
      "AI agent s\u00FCnkroniseerib tellimused, CRM-i ning raamatupidamise ja annab tiimile hoiatused k\u00F5rvalekalletest.",
    icon: "/branding/automation.svg",
  },
  {
    slug: "marketing",
    title: "Turundusabi agent",
    benefit: "Koostab kampaaniaplaanid ja tekstid sinu br\u00E4ndi h\u00E4\u00E4lega",
    exampleUseCase:
      "Valmistab igan\u00E4dalase uudiskirja ja sotsiaalmeedia postitused eestikeelsena ning t\u00F5lgib need inglise keelde.",
    icon: "/branding/marketing.svg",
  },
  {
    slug: "custom-solutions",
    title: "Kohandatud AI lahendused",
    benefit: "Seob sisemised s\u00FCsteemid nutikate t\u00F6\u00F6voogudega",
    exampleUseCase:
      "Ehitasime broneeringuassistendi, mis koordineerib kalendreid ja saadab kliendile personaalse kinnituse.",
    icon: "/branding/custom-solutions.svg",
  },
];

export const testimonialCopy: TestimonialCopy = {
  quote:
    "AI agent v\u00F5ttis \u00FCle korduvad p\u00E4ringud ja vabastas meie klienditoe spetsialistide aega k\u00F5rgema v\u00E4\u00E4rtusega t\u00F6\u00F6ks.",
  client: "Laura, tegevjuht \u2013 P\u00F5hjala Rendi",
  outcome: "V\u00E4hendasime reageerimisaega 63% ja suurendasime m\u00FC\u00FCgivihjete arvu 2x",
  ctaLabel: "Loe case-studyt",
  ctaHref: undefined,
  image: "/testimonials/sample-client.jpg",
  fallbackMessage:
    "Soovid n\u00E4ha t\u00E4pseid tulemusi oma sektoris? K\u00FCsi meilt v\u00E4rskeid case-studysid.",
};

