import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://firme-challenge.com";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // Basic Metadata
  title: {
    default:
      "Firme Challenge | Ranking de Competencia Fitness - Leaderboard en Vivo",
    template: "%s | Firme Challenge",
  },
  description:
    "Ranking en vivo del Firme Challenge - Competencia de fitness con categorías. Sigue el progreso de equipos y MVPs en hombres, mujeres y mixto. ¡Entrena duro, compite más fuerte!",
  keywords: [
    "Firme Challenge",
    "competencia fitness",
    "leaderboard fitness",
    "ranking crossfit",
    "competencia de ejercicio",
    "desafío fitness",
    "torneo fitness Guatemala",
    "ranking atletas",
    "leaderboard en vivo",
    "MVP fitness",
    "competencia por equipos",
    "fitness competitivo",
  ],

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph - Facebook, LinkedIn
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Firme Challenge",
    title:
      "Firme Challenge | Ranking de Competencia Fitness - Leaderboard en Vivo",
    description:
      "Ranking en vivo del Firme Challenge - Competencia de fitness con categorías. Sigue el progreso de equipos y MVPs en hombres, mujeres y mixto.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Firme Challenge - Competencia de Fitness con Ranking en Vivo",
        type: "image/png",
      },
      {
        url: `${SITE_URL}/og-image-sm.png`,
        width: 600,
        height: 315,
        alt: "Firme Challenge - Competencia de Fitness",
        type: "image/png",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@firmechallenge",
    creator: "@firmechallenge",
    title: "Firme Challenge | Ranking de Competencia Fitness",
    description:
      "Ranking en vivo del Firme Challenge - Sigue el progreso de equipos y MVPs en todas las categorías.",
    images: [`${SITE_URL}/twitter-card.png`],
  },

  // Additional Meta Tags
  authors: [{ name: "Firme Challenge" }],
  creator: "Firme Challenge",
  publisher: "Firme Challenge",

  // Alternates & Canonical
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-MX": SITE_URL,
    },
  },

  // Verification (placeholder - replace with actual codes)
  verification: {
    google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
    // yahoo: "yahoo-site-verification-code",
  },

  // Category
  category: "Sports & Fitness",

  // Classification
  classification: "Fitness Competition Leaderboard",

  // Referrer Policy
  referrer: "origin-when-cross-origin",

  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // App Links (for mobile)
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Firme Challenge",
    "mobile-web-app-capable": "yes",
    "application-name": "Firme Challenge",
    "msapplication-TileColor": "#d8f200",
    "msapplication-config": "/browserconfig.xml",
  },
};

// JSON-LD Structured Data Generator
function generateStructuredData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://firme-challenge.com";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Firme Challenge",
    alternateName: "Firme Challenge Leaderboard",
    url: baseUrl,
    description:
      "Ranking en vivo del Firme Challenge - Competencia de fitness.",
    inLanguage: "es-MX",
    isAccessibleForFree: true,
    genre: ["Sports", "Fitness", "Competition"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: "Firme Challenge",
    alternateName: "Firme Fitness Challenge",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Competencia de fitness con categorías para hombres, mujeres y equipos mixtos",
    sport: "Fitness",
    sameAs: [
      "https://instagram.com/firmechallenge",
      "https://facebook.com/firmechallenge",
      "https://twitter.com/firmechallenge",
    ],
  };

  const sportsEventSchema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Firme Challenge 2026",
    description: "Competencia de fitness con múltiples categorías",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Firme Challenge Arena",
      address: {
        "@type": "PostalAddress",
        addressCountry: "MX",
      },
    },
    organizer: {
      "@type": "SportsOrganization",
      name: "Firme Challenge",
      url: baseUrl,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "MXN",
      description: "Acceso gratuito al leaderboard en vivo",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Leaderboard",
        item: `${baseUrl}/#leaderboard`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Firme Challenge Leaderboard",
    description: "Ranking de equipos y atletas en el Firme Challenge",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Categoría Hombres",
        item: `${baseUrl}/#men`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Categoría Mujeres",
        item: `${baseUrl}/#women`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Categoría Mixto",
        item: `${baseUrl}/#mixed`,
      },
    ],
  };

  return [
    websiteSchema,
    organizationSchema,
    sportsEventSchema,
    breadcrumbSchema,
    itemListSchema,
  ];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData();

  return (
    <html lang="es-MX" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured Data - JSON-LD */}
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-screen antialiased bg-background selection:bg-volt/20 selection:text-volt">
        {children}
      </body>
    </html>
  );
}
