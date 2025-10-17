export type CompanySeo = {
  name: string;
  slogan: string;
  phone: string;
  email: string;
  address: string;
  url: string;
  short: string;
  services: string[];
  why: string[];
};

export const COMPANY: CompanySeo = {
  name: "AI Lahendused",
  slogan: "Tehisaru, mis töötab sinu heaks",
  phone: "+372 0000 000",
  email: "info@ailahendused.ee",
  address: "Tallinn, Eesti",
  url: "https://www.ailahendused.ee",
  short: "AI Lahendused aitab Eesti väikeettevõtetel tuua tehisaru päriselt tööle.",
  services: [
    "Vestlusrobotid (24/7 klienditugi + Messenger/WhatsApp)",
    "Protsesside automatiseerimine (broneerimised, aruandlus, tellimused)",
    "Turundus- ja sisuabi (e-kirjad, kampaaniaideed, SEO-toetus)",
    "Kohandatud AI-lahendused",
  ],
  why: ["Kiire juurutus", "Selge ROI", "Kohalik tugi"],
};

