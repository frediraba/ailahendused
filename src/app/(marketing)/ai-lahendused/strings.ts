export type LocaleString = string;

export type HeroCopy = {
  headline: LocaleString;
  subheading: LocaleString;
  primaryCta: LocaleString;
  secondaryCta: LocaleString;
};

export type HeroMetric = {
  value: LocaleString;
  label: LocaleString;
};

export type TrustedLogo = {
  name: LocaleString;
  logo: string;
  alt: LocaleString;
};

export type ServiceCategory = {
  slug: string;
  title: LocaleString;
  benefit: LocaleString;
  exampleUseCase: LocaleString;
  timeline: LocaleString;
  kpi: LocaleString;
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

export type FaqItem = {
  question: LocaleString;
  answer: LocaleString;
};

export type SectionAnchors = {
  hero: string;
  services: string;
  testimonial: string;
  faq: string;
  consultation: string;
};

export const anchors: SectionAnchors = {
  hero: "ai-hero",
  services: "ai-services",
  testimonial: "ai-testimonial",
  faq: "ai-faq",
  consultation: "ai-konsultatsioon",
};

export const heroCopy: HeroCopy = {
  headline: "AI agendid Eesti väikeettevõtetele",
  subheading:
    "Automatiseerime rutiini, parandame kliendikogemust ja toome mõõdetava võidu – vestlusrobotid, nutikad töövood ja turundusabi.",
  primaryCta: "Küsi tasuta konsultatsiooni",
  secondaryCta: "Broneeri demo",
};

export const heroMetrics: HeroMetric[] = [
  { value: "95%", label: "automatiseeritud korduvpäringuid" },
  { value: "<30 sek", label: "keskmine vastusaeg" },
  { value: "6 nädalat", label: "piloodi lansseerimiseni" },
];

export const trustedLogos: TrustedLogo[] = [
  {
    name: "Põhjala Rendi",
    logo: "/branding/logos/pohjala-rendi.svg",
    alt: "Põhjala Rendi logo",
  },
  {
    name: "Nordic Klinik",
    logo: "/branding/logos/nordic-klinik.svg",
    alt: "Nordic Klinik logo",
  },
  {
    name: "Baltic Gear",
    logo: "/branding/logos/baltic-gear.svg",
    alt: "Baltic Gear logo",
  },
  {
    name: "Siiditee Kohvik",
    logo: "/branding/logos/siiditee-kohvik.svg",
    alt: "Siiditee Kohvik logo",
  },
  {
    name: "Tartu Hambaravi",
    logo: "/branding/logos/tartu-hambaravi.svg",
    alt: "Tartu Hambaravi logo",
  },
  {
    name: "Kiviaia Ehitus",
    logo: "/branding/logos/kiviaia-ehitus.svg",
    alt: "Kiviaia Ehitus logo",
  },
];

export const servicesCopy: ServiceCategory[] = [
  {
    slug: "conversational-agents",
    title: "Vestlusrobotid",
    benefit: "24/7 klienditugi eesti ja inglise keeles",
    exampleUseCase:
      "Veebivestlus ja WhatsApp vastavad korduvatele päringutele ning annavad keerulisemad teemad õigele spetsialistile.",
    timeline: "Piloot 2–3 nädalaga, täismahus lansseerimine 6 nädala jooksul.",
    kpi: "Eesmärk: vähemalt 80% korduvate päringute automatiseerimine ja <30 sek vastusaeg.",
    icon: "/branding/conversational-agents.svg",
  },
  {
    slug: "automation",
    title: "Protsesside automatiseerimine",
    benefit: "Eemaldab käsitöö korduvatest back-office ülesannetest",
    exampleUseCase:
      "AI agent sünkroniseerib tellimused, CRM-i ning raamatupidamise ja annab tiimile hoiatused kõrvalekalletest.",
    timeline: "Töövoog kaardistatud 1 nädalaga, MVP automaatika 4–6 nädalaga.",
    kpi: "Eesmärk: 40–60% vähem käsitöötunde ühes protsessis ja 0 vahelejäänud teavitust.",
    icon: "/branding/automation.svg",
  },
  {
    slug: "marketing",
    title: "Turundusabi agent",
    benefit: "Koostab kampaaniaplaanid ja tekstid sinu brändi häälega",
    exampleUseCase:
      "Valmistab iganädalase uudiskirja ja sotsiaalmeedia postitused eestikeelsena ning tõlgib need inglise keelde.",
    timeline: "Sisuautomaatika valmib 1–2 nädalaga koos tooni-treeninguga.",
    kpi: "Eesmärk: 3× kiiremini avaldatud sisu ja püsiv e-maili avamismäär vähemalt 35%.",
    icon: "/branding/marketing.svg",
  },
  {
    slug: "custom-solutions",
    title: "Kohandatud AI lahendused",
    benefit: "Seob sisemised süsteemid nutikate töövoogudega",
    exampleUseCase:
      "Ehitasime broneeringuassistendi, mis koordineerib kalendreid ja saadab kliendile personaalse kinnituse.",
    timeline: "Ühine discovery sprint 2 nädalat, lahendus tootmises 6–8 nädalaga.",
    kpi: "Eesmärk: selge ROI 3 kuu jooksul ja vähemalt 90% kasutajarahulolu piloodis.",
    icon: "/branding/custom-solutions.svg",
  },
];

export const testimonialCopy: TestimonialCopy = {
  quote:
    "AI agent võttis üle korduvad päringud ja vabastas meie klienditoe spetsialistide aega kõrgema väärtusega tööks.",
  client: "Laura, tegevjuht – Põhjala Rendi",
  outcome: "Vähendasime reageerimisaega 63% ja suurendasime müügivihjete arvu 2x",
  ctaLabel: "Loe case-studyt",
  ctaHref: "/case-studies",
  image: "/testimonials/sample-client.jpg",
  fallbackMessage:
    "Soovid näha täpseid tulemusi oma sektoris? Küsi meilt värskeid case-studysid.",
};

export const faqCopy: FaqItem[] = [
  {
    question: "Kui kiiresti saan AI agendi tööle?",
    answer:
      "Esimese nädalaga kaardistame eesmärgid ja andmeallikad, 2–3 nädalaga on piloot klientide ees. Täielik lansseerimine võtab enamasti 6 nädalat.",
  },
  {
    question: "Kas pean ise tehnilise toe eest hoolitsema?",
    answer:
      "Ei pea. Meie tiim haldab mudelite uuendusi, järelevalvet ja logimist ning õpetame sinu meeskonna tulemusi analüüsima.",
  },
  {
    question: "Kuidas mõõdate automatiseerimise mõju?",
    answer:
      "Seame KPI-d (nt vastuskiirus, käsitöö tundide kokkuhoid) enne pilooti ja raporteerime tulemused iga kuu koos soovitustega järgmiste sammude jaoks.",
  },
];
