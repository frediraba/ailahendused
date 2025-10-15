import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.ailahendused.ee";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Lahendused | Tehisintellekti partner Eesti ettevõtetele",
    template: "%s | AI Lahendused",
  },
  description:
    "AI agendid ja automatiseerimine Eesti väikestele ettevõtetele: vestlusrobotid, protsessiautomaatika ja turundusabi, mis toovad mõõdetava ärikasvu.",
  keywords: [
    "AI",
    "tehisintellekt",
    "vestlusrobot",
    "automatiseerimine",
    "turundus",
    "Eesti ettevõtted",
  ],
  openGraph: {
    title: "AI Lahendused | Tehisintellekti partner Eesti ettevõtetele",
    description:
      "Vestlusrobotid, protsesside automatiseerimine ja turundusabi, et vähendada käsitööd ja tõsta kliendikogemust.",
    url: siteUrl,
    siteName: "AI Lahendused",
    locale: "et_EE",
    type: "website",
    images: [
      {
        url: `${siteUrl}/branding/conversational-agents.svg`,
        width: 512,
        height: 512,
        alt: "AI Lahendused visuaal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lahendused | Tehisintellekti partner Eesti ettevõtetele",
    description:
      "AI agendid, mis automatiseerivad korduvad protsessid ja parandavad kliendikogemust.",
    images: [`${siteUrl}/branding/conversational-agents.svg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: "#0f172a",
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Lahendused",
  url: siteUrl,
  logo: `${siteUrl}/branding/conversational-agents.svg`,
  sameAs: [
    "https://www.linkedin.com/company/ai-lahendused",
    "https://www.facebook.com/ailahendused",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+372 5555 5555",
      contactType: "sales",
      areaServed: "EE",
      availableLanguage: ["et", "en"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        {children}
        <Script id="organization-ld-json" type="application/ld+json">
          {JSON.stringify(organizationJsonLd)}
        </Script>
      </body>
    </html>
  );
}
