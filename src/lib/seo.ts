/**
 * SEO Utility Functions for Firme Challenge
 */

export const SITE_CONFIG = {
  name: "Firme Challenge",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://firme-challenge.com",
  locale: "es_MX",
  themeColor: "#d8f200",
  backgroundColor: "#0a0a0a",
};

/**
 * Generate canonical URL for a path
 */
export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}

/**
 * Generate absolute URL for images
 */
export function getImageUrl(filename: string): string {
  return `${SITE_CONFIG.url}/${filename}`;
}

/**
 * Truncate text to a maximum length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3).trim() + "...";
}

/**
 * Generate meta description from content
 */
export function generateMetaDescription(
  content: string,
  maxLength: number = 160
): string {
  // Remove any HTML tags
  const strippedContent = content.replace(/<[^>]*>/g, "");
  return truncateText(strippedContent, maxLength);
}

/**
 * Generate page title with proper formatting
 */
export function generatePageTitle(
  pageTitle?: string,
  siteName: string = SITE_CONFIG.name
): string {
  if (!pageTitle) return siteName;
  return `${pageTitle} | ${siteName}`;
}

/**
 * Generate Open Graph image object
 */
export function generateOgImage(
  filename: string,
  width: number = 1200,
  height: number = 630,
  alt: string = "Firme Challenge"
) {
  return {
    url: getImageUrl(filename),
    width,
    height,
    alt,
    type: "image/png",
  };
}

/**
 * Generate Twitter card image
 */
export function generateTwitterImage(filename: string): string {
  return getImageUrl(filename);
}

/**
 * Format structured data for sports competition
 */
export function generateCompetitionSchema(data: {
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  location?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: data.name,
    description: data.description,
    startDate: data.startDate || new Date().toISOString(),
    endDate: data.endDate || new Date().toISOString(),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: {
      "@type": "Place",
      name: data.location || "Firme Challenge Arena",
    },
    organizer: {
      "@type": "SportsOrganization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}

/**
 * Generate leaderboard item list schema
 */
export function generateLeaderboardSchema(
  items: Array<{ rank: number; name: string; points: number }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Firme Challenge Leaderboard",
    description: "Ranking actual de equipos y atletas",
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.rank,
      name: item.name,
      description: `${item.points} puntos`,
    })),
  };
}

/**
 * Generate FAQ schema for common questions
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

/**
 * Format last updated timestamp for display
 */
export function formatLastUpdated(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Mexico_City",
  }).format(date);
}

/**
 * Generate alt text for leaderboard images
 */
export function generateLeaderboardAltText(
  groupName: string,
  categoryName: string
): string {
  return `Leaderboard ${groupName} - Categoría ${categoryName} - Firme Challenge`;
}
