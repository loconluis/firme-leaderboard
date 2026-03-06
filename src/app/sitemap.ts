import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://firme-challenge.com";
  const currentDate = new Date().toISOString();

  // Main page
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "hourly",
      priority: 1.0,
      alternates: {
        languages: {
          es: baseUrl,
          "es-MX": baseUrl,
        },
      },
    },
  ];

  // Group pages (if you implement separate routes)
  const groups = ["men", "women", "mixed"];
  groups.forEach((group) => {
    routes.push({
      url: `${baseUrl}/#${group}`,
      lastModified: currentDate,
      changeFrequency: "hourly",
      priority: 0.9,
    });
  });

  // Categories (if you implement separate routes)
  const categories = ["A", "B", "C"];
  groups.forEach((group) => {
    categories.forEach((category) => {
      routes.push({
        url: `${baseUrl}/#${group}-${category}`,
        lastModified: currentDate,
        changeFrequency: "hourly",
        priority: 0.8,
      });
    });
  });

  return routes;
}
