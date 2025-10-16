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
  headline: "AI lahendused, mis töötavad Eesti väikeettevõtetele",
  subheading:
    "Disainime ja lansseerime AI agente, mis automatiseerivad müügi, klienditoe ja back-office'i töövood – eestikeelsed vestlusrobotid, protsesside automatiseerimine ja turundusabi, mis toob mõõdetava ärikasvu.",
  primaryCta: "Küsi tasuta konsultatsiooni",
  secondaryCta: "Loe case-studyt",
  tertiaryCta: "Broneeri demo",
};

export const heroMetrics: HeroMetric[] = [
  { value: "95%", label: "automatiseeritud korduvpäringuid piloodi järel" },
  { value: "6 nädalat", label: "keskmine aeg ideest tootmiskeskkonda" },
  { value: "3×", label: "kiirem sisuloome ja kampaaniate lansseerimine" },
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
  outcome: "Vähendasime reageerimisaega 63% ja kasvatasime müügivihjete arvu 2x",
  ctaLabel: "Vaata lähemalt",
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
  {
    question: "Millistesse süsteemidesse AI agent integreerub?",
    answer:
      "Ehitasime pistikud populaarsetele Eesti tarkvaradele nagu Erply, Scoro, Pipedrive ja Merit Palk. Vajadusel loome uue integratsiooni REST API, webhookide või RPA abil.",
  },
  {
    question: "Mis infot peab ette valmistama enne koostööd?",
    answer:
      "Vajame näidisdialooge, protsessikirjeldusi ja ligipääsu süsteemidele, kuhu AI agent andmeid kirjutab või kust loeb. Discovery-sprint aitab need allikad turvaliselt kaardistada.",
  },
  {
    question: "Kuidas hinnastamine toimub?",
    answer:
      "Discovery-sprint (2 nädalat) on fikseeritud tasuga. Pärast pilooti lepime kokku igakuise haldustasu ja kasutuspõhise mudeli, mis sõltub AI agentide mahust ja kasutajate arvust.",
  },
];

export const valuePoints: ValuePoint[] = [
  {
    slug: "strategy",
    title: "Strateegia, mis lähtub ärieesmärkidest",
    description:
      "Kaardistame kriitilised kasutusjuhtumid discovery-sprindi jooksul ja tõlgime need AI agentideks, mis toovad mõõdetava väärtuse.",
    proof: "Valmis prioriseeritud teekaart 3 tööpäevaga koos KPI defineerimisega.",
    icon: "/window.svg",
  },
  {
    slug: "local-language",
    title: "Eesti keel ja kohalikud süsteemid",
    description:
      "Koolitame mudelid sinu brändi tooniga ning integreerime Eesti platvormidega nagu Erply, Merit Palk, SimplBooks ja Pipedrive.",
    proof: "Eestikeelne intentsioonide mudel ja integratsioonikataloog kohe kasutamiseks.",
    icon: "/globe.svg",
  },
  {
    slug: "roi",
    title: "ROI, mida saad juhatusele näidata",
    description:
      "Mõõdame automatiseerimise katvust, vastuskiirust ja kliendirahulolu ning raporteerime need iga kuu koos järgmiste sammude soovitustega.",
    proof: "Keskmiselt 40–60% vähem käsitööd ühe protsessi kohta pärast 6 nädalat.",
    icon: "/branding/automation.svg",
  },
  {
    slug: "compliance",
    title: "Turvalisus ja vastavus nõuetele",
    description:
      "GDPR, logimine ja ligipääsude haldus on protsessi sisse ehitatud. Auditijälg tagab, et tead täpselt, mida agent kliendile lubas.",
    proof: "GDPR-i kontrollnimekiri ja ligipääsude audit raporteeritakse igal sprindil.",
    icon: "/file.svg",
  },
];

export const approachSteps: ApproachStep[] = [
  {
    index: 1,
    title: "Discovery + äriprotsessid",
    description:
      "Intervjuud võtmeosapooltega, andmeallikate kaardistus ja KPI-de kokkuleppimine. Loome esimesed vestlusskriptid ja töövoodiagrammid.",
    deliverable: "Valmis protsessikaart, riskianalüüs ja automatiseerimise teekaart.",
  },
  {
    index: 2,
    title: "Prototüüp ja testimine",
    description:
      "Koolitame AI agendi sinu andmetega, laseme tal vastata päris klientide küsimustele ja kogume meeskonnalt tagasisidet.",
    deliverable: "Tõendatud MVP, mille tulemeid võrreldakse inimagendi tööga.",
  },
  {
    index: 3,
    title: "Integratsioon ja lansseerimine",
    description:
      "Ühendame CRM-i, broneeringusüsteemid ja makselahendused. Koostame eskalatsioonireeglid ning koolitame tiimi uut agenti kasutama.",
    deliverable: "Tootmises olev AI agent koos meeskonna koolituse ja teadmistebaasiga.",
  },
  {
    index: 4,
    title: "Jätkuarendus ja mõõtmine",
    description:
      "Monitoorime kvaliteeti, optimeerime dialooge ja lisame uusi kasutusjuhtumeid. Raporteerime KPI-d ja ROI juhtkonnale.",
    deliverable: "Igakuine tulemusraport koos soovitustega järgmisteks sprintideks.",
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
  heading: "Tehisintellekti lahendused, mis räägivad sinu brändi keeles",
  lead:
    "AI Lahendused ühendab strateegia, disaini ja tehnoloogia, et tuua tehisintellekt Eesti väikese ja keskmise ettevõtte igapäevatöösse. Loome agendid, kes mõistavad sinu kliendi sõnavara ja teevad koostööd olemasolevate süsteemidega.",
  bullets: [
    "AI agendid, mis töötavad eesti ja inglise keeles, kasutades sinu ettevõtte tooniga kohandatud keelemudeleid.",
    "Integratsioonid Scoro, Pipedrive, Erply, SimplBooks, HubSpot ja teiste populaarsete tööriistadega.",
    "Tehisintellektil põhinev automatiseerimine, mis katab nii müügivihjete kvalifitseerimise, klienditoe kui ka back-office'i töövood.",
    "Fookus mõõdetavale ROI-le – iga sprint lõpeb KPI raportiga ja järgmiste sammude soovitusega.",
  ],
  closing:
    "Meie meeskond on juurutanud AI agente Eesti jaekaubanduse, tervishoiu, logistika ja teeninduse ettevõtetes. Aitame ka sinu tiimil teha esimese sammu ning kasvatada automatiseerimise katvust turvaliselt ja tõendatult.",
};
