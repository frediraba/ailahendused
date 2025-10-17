export type LocaleString = string;

export type HeroCopy = {
  headline: LocaleString;
  subheading: LocaleString;
  primaryCta: LocaleString;
  secondaryCta: LocaleString;
  tertiaryCta: LocaleString;
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
  value: string;
  services: string;
  approach: string;
  testimonial: string;
  industries: string;
  resources: string;
  faq: string;
  consultation: string;
};

export type ValuePoint = {
  slug: string;
  title: LocaleString;
  description: LocaleString;
  proof: LocaleString;
  icon: string;
};

export type ApproachStep = {
  index: number;
  title: LocaleString;
  description: LocaleString;
  deliverable: LocaleString;
};

export type IndustryHighlight = {
  name: LocaleString;
  pains: LocaleString;
  outcome: LocaleString;
};

export type ResourceHighlight = {
  title: LocaleString;
  description: LocaleString;
  href: string;
  label: LocaleString;
};

export type SeoNarrative = {
  heading: LocaleString;
  lead: LocaleString;
  bullets: LocaleString[];
  closing: LocaleString;
};

export const anchors: SectionAnchors = {
  hero: "ai-hero",
  value: "ai-vaartus",
  services: "ai-services",
  approach: "ai-protsess",
  testimonial: "ai-testimonial",
  industries: "ai-sektorid",
  resources: "ai-ressursid",
  faq: "ai-faq",
  consultation: "ai-konsultatsioon",
};

export const heroCopy: HeroCopy = {
  headline: "AI Lahendused — Tehisaru, mis töötab sinu heaks",
  subheading:
    "Aitame Eesti väikeettevõtetel tuua tehisaru päriselt tööle. Alustame väiksest, toome kiire võidu ja mõõdame tulemuse.",
  primaryCta: "Küsi pakkumist",
  secondaryCta: "Vaata teenuseid",
  tertiaryCta: "Võta ühendust",
};

export const heroMetrics: HeroMetric[] = [
  { value: "7–14 päeva", label: "esimese MVP ja nähtava võiduni" },
  { value: "60%", label: "keskmine käsitöö vähenemine automatiseeritud protsessides" },
  { value: "24/7", label: "kättesaadav klienditugi vestlusroboti kaudu" },
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
    benefit:
      "Automaatne klienditugi veebis ja sotsiaalides. Vähem korduvküsimusi, kiirem vastus, parem rahulolu.",
    exampleUseCase:
      "Messengeris ja WhatsAppis tegutsev agent tervitab külastajaid, vastab hinnapäringutele ning eskaleerib keerulised juhtumid otse meeskonnale.",
    timeline: "Esimene versioon 10 päevaga, kanalite laiendus vastavalt vajadusele.",
    kpi: "Mõõdame vastamise kiirust, automatiseerimise katvust ja CSAT-i.",
    icon: "/branding/conversational-agents.svg",
  },
  {
    slug: "automation",
    title: "Protsesside automatiseerimine",
    benefit:
      "Broneerimised, aruandlus, tellimused ja CRM-sünkron – vähenda käsitööd ja vigasid.",
    exampleUseCase:
      "Automaatika paneb kalendrid tööle, koostab aruanded ja sünkroniseerib tellimused ERP-i ning CRM-i vahel.",
    timeline: "Töövoog kaardistame nädalaga, MVP automatiseerimine valmib 2–4 nädalaga.",
    kpi: "Sihime 20–60% ajavõitu ning veavabamat protsessi.",
    icon: "/branding/automation.svg",
  },
  {
    slug: "marketing",
    title: "Turundus- ja sisuabi",
    benefit:
      "E-kirjad, kampaaniaplaanid, generatiivne sisu ja SEO-toetus kohaliku turu jaoks.",
    exampleUseCase:
      "AI kirjutab igakuised uudiskirjad, koostab kampaaniaplaani ja optimeerib blogitekstid valitud märksõnadele.",
    timeline: "Sisuagent töötab täismahus kahe nädalaga.",
    kpi: "Fookuses on avamismäärad, orgaaniline liiklus ja päringute kasv.",
    icon: "/branding/marketing.svg",
  },
  {
    slug: "custom-solutions",
    title: "Kohandatud AI-lahendused",
    benefit:
      "Spetsiifilised agendid ja integratsioonid sinu töövoogude järgi.",
    exampleUseCase:
      "Disainime agent-mustreid, mis integreeruvad sisemiste andmeallikate ja partnerite API-dega ning töötavad turvaliselt.",
    timeline: "Discovery 2 nädalat, tootmisvalmis lahendus 6–8 nädalaga.",
    kpi: "Koostame ROI mudeli ja jälgime kasutaja rahulolu ning protsessi läbilaskevõimet.",
    icon: "/branding/custom-solutions.svg",
  },
];

export const testimonialCopy: TestimonialCopy = {
  quote:
    "Vestlusrobot vähendas meil vastamise aega poole võrra. Automatiseeritud broneerimine lõpetas topeltkinnitused. Sisuabi andis kampaaniatele stabiilse tempo.",
  client: "Tagasiside meie klientidelt",
  outcome: "Kolm erinevat meeskonda jagasid oma kogemust AI Lahendustega",
  fallbackMessage:
    "Soovid kuulda täpseid numbreid? Kirjuta meile ja saadame sulle valiku värskeid edulugusid.",
};

export const faqCopy: FaqItem[] = [
  {
    question: "Kui kiiresti saan tulemuse?",
    answer: "Esimese väärtuse sihime 7–14 päeva jooksul (MVP).",
  },
  {
    question: "Kas meil on vaja tehnilist tiimi?",
    answer: "Ei pea. Teeme võtmetöö meie poolt, teie annate sisendi ja kinnitate.",
  },
  {
    question: "Kuidas ROI mõõdate?",
    answer: "Seame KPI-d (ajavõit, konversioon, vead) ja raporteerime regulaarselt.",
  },
  {
    question: "Mis keeles tugi on?",
    answer: "Eesti ja inglise; vajadusel kohapeal.",
  },
  {
    question: "Kas saab alustada väikese testiga?",
    answer: "Jah. Soovitame alustada piiratud ulatusega, kiire võiduga.",
  },
];

export const valuePoints: ValuePoint[] = [
  {
    slug: "fast-launch",
    title: "Kiire juurutus",
    description:
      "Käivitame minimaalse lahenduse päevade, mitte kuude jooksul. Kaardistame esmase töövoo ja toome automaatika kliendi ette kohe, kui väärtus on kinnitust leidnud.",
    proof: "Piloot on laiv 7–14 päeva jooksul, et saaksid tulemusi päris keskkonnas mõõta.",
    icon: "/branding/automation.svg",
  },
  {
    slug: "clear-roi",
    title: "Selge ROI",
    description:
      "Seame mõõdikud: säästetud aeg, konversioon, korduvtöö vähenemine. Iga sprindi lõpus võrdleme numbreid ja otsustame järgmised sammud koos.",
    proof: "Keskmiselt 60% vähem käsitööd ja parem kliendirahulolu juba esimese kuu jooksul.",
    icon: "/file.svg",
  },
  {
    slug: "local-support",
    title: "Kohalik tugi",
    description:
      "Eestikeelne suhtlus ja tugi kogu teekonna vältel. Vajadusel tuleme kohapeale, aitame tiimi koolitada ning hoiame süsteemi töös.",
    proof: "Püsiv kontaktisik ja tugi nii eesti kui ka inglise keeles.",
    icon: "/globe.svg",
  },
];

export const approachSteps: ApproachStep[] = [
  {
    index: 1,
    title: "Sisseelamine",
    description:
      "Eesmärgid, mõõdikud, andmeallikad. Räägime läbi, mis on kiireim võit ja millist mõju ootad tiimis ning kliendikogemuses.",
    deliverable: "Selge prioriteet ja mõõdetavad KPI-d.",
  },
  {
    index: 2,
    title: "Prototüüp",
    description:
      "7–14 päeva: MVP, esimene kasu. Ehitatakse töövoog või vestlusrobot, mis lahendab ühe selge probleemi.",
    deliverable: "Toimiv MVP päriselus testimiseks.",
  },
  {
    index: 3,
    title: "Integreerimine",
    description:
      "CRM, kalendrid, arved, e-kirjad, öövood. Võtame ette tehnilised ühendused ja automatiseerime eskalatsiooni reeglid.",
    deliverable: "Integratsioonid ja töövood, mis toimivad ilma käsitööta.",
  },
  {
    index: 4,
    title: "Mõõtmine & ROI",
    description:
      "KPI-d paika, raporteerime kasu. Arutame koos, kuhu laiendada ja millal tuua järgmine agent mängu.",
    deliverable: "Regulaarne ROI raport ja kasvuprogramm.",
  },
];

export const industryHighlights: IndustryHighlight[] = [
  {
    name: "E-kaubandus ja jaekaubandus",
    pains: "Tooteküsimused, tagastused, tarneinfo ja kampaaniate tugi koormavad kliendituge.",
    outcome:
      "AI agent vastab klientidele 24/7, haldab tellimuste staatust ja suunab müügivihjed otse CRM-i.",
  },
  {
    name: "Teenindus ja broneeringud",
    pains: "Telefonile vastamine ja ajaplaneerimine võtavad meeskonnalt fookuse.",
    outcome:
      "Broneeringuassistent koordineerib kalendreid, saadab kinnitused ja pakub lisateenuseid automaatselt.",
  },
  {
    name: "Tervishoid ja heaolu",
    pains: "Korduvad küsimused ravi kohta ning delikaatsete andmete turvalisus.",
    outcome:
      "HIPAA ja GDPR nõuetele vastav digiregistratuur, mis triažeerib päringud ning logib lubadused.",
  },
  {
    name: "B2B teenused ja konsultatsioon",
    pains: "Pikk müügitsükkel, manuaalne pakkumiste koostamine ja järeltegevused.",
    outcome:
      "AI agent kvalifitseerib päringud, koostab esmased kalkulatsioonid ja broneerib kohtumisi müügile.",
  },
  {
    name: "Logistika ja kinnisvara",
    pains: "Tarnegraafikute koordineerimine, objektide info ja dokumentide haldus.",
    outcome:
      "Automatiseeritud staatuse uuendused, dokumentide genereerimine ja SLA-de järelevalve.",
  },
];

export const resourceHighlights: ResourceHighlight[] = [
  {
    title: "Case-study: Põhjala Rendi klienditeekond",
    description:
      "Kuidas vestlusrobot vähendas reageerimisaega 63% ja tõi 2x rohkem müügivihjeid Eesti rendiettevõttele.",
    href: "/case-studies",
    label: "Loe case-studyt",
  },
  {
    title: "AI valmisoleku kontrollnimekiri",
    description:
      "10 punkti, mille alusel hindame, kas su protsess ja andmed on automatiseerimiseks valmis – alates turbest kuni KPI-deni.",
    href: "/#ai-konsultatsioon",
    label: "Telli tasuta audit",
  },
  {
    title: "Demo: Eesti keelne AI agent",
    description:
      "Vaata, kuidas eestikeelne müügiassistent kvalifitseerib päringu ja broneerib kohtumise alla 2 minutiga.",
    href: "/#ai-vaartus",
    label: "Broneeri demo",
  },
];

export const seoNarrative: SeoNarrative = {
  heading: "AI Lahendused toob tehisaru päriselt tööle",
  lead:
    "Aitame Eesti väikeettevõtetel ehitada vestlusroboteid, automatiseerida protsesse ja hoida turundust järjepidevana. Meie fookus on kiirel juurutusel, selgel ROI-l ja kohaliku toe pakkumisel.",
  bullets: [
    "Vestlusrobotid, mis räägivad sinu brändi keeles ja töötavad nii veebis kui ka Messengeri või WhatsAppi kanalis.",
    "Automatiseeritud töövood, mis ühendavad CRM-i, raamatupidamise, kalendrid ja aruandluse ning vähendavad käsitööd.",
    "Turundus- ja sisuabi, mis hoiab kampaaniate tempo peal ning tõstab orgaanilist liiklust ja konversiooni.",
    "Kohandatud AI-lahendused koos riskijuhtimise, auditi ning koolitusega, et süsteem püsiks usaldusväärne.",
  ],
  closing:
    "Iga koostöö algab 7–14 päevase MVP-ga ja lõpeb mõõdetava kasuga. Kui vajad partnerit, kes räägib sinuga eesti keeles ja mõtleb äriväärtusest, siis AI Lahendused on sinu jaoks.",
};
