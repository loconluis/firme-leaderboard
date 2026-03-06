import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://firme-challenge.com";

  return {
    name: "Firme Challenge",
    short_name: "Firme",
    description:
      "Ranking en vivo del Firme Challenge - Competencia de fitness.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#d8f200",
    orientation: "portrait-primary",
    scope: "/",
    lang: "es-MX",
    categories: ["sports", "fitness", "health"],
    icons: [
      {
        src: `${baseUrl}/icon-192x192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: `${baseUrl}/icon-512x512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: `${baseUrl}/screenshot-mobile.png`,
        sizes: "390x844",
        type: "image/png",
        form_factor: "narrow",
        label: "Vista móvil del leaderboard",
      },
      {
        src: `${baseUrl}/screenshot-desktop.png`,
        sizes: "1920x1080",
        type: "image/png",
        form_factor: "wide",
        label: "Vista de escritorio del leaderboard",
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
    shortcuts: [
      {
        name: "Ver Leaderboard Hombres",
        short_name: "Hombres",
        description: "Ver ranking de categoría hombres",
        url: `${baseUrl}/#men`,
        icons: [{ src: `${baseUrl}/icon-men.png`, sizes: "96x96" }],
      },
      {
        name: "Ver Leaderboard Mujeres",
        short_name: "Mujeres",
        description: "Ver ranking de categoría mujeres",
        url: `${baseUrl}/#women`,
        icons: [{ src: `${baseUrl}/icon-women.png`, sizes: "96x96" }],
      },
      {
        name: "Ver Leaderboard Mixto",
        short_name: "Mixto",
        description: "Ver ranking de categoría mixta",
        url: `${baseUrl}/#mixed`,
        icons: [{ src: `${baseUrl}/icon-mixed.png`, sizes: "96x96" }],
      },
    ],
  };
}
