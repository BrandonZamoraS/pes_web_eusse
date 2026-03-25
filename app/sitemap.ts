import type { MetadataRoute } from "next";

const BASE_URL = "https://grupoeusse.com";

const routes = [
  "",
  "/quienes-somos",
  "/empleo",
  "/centro-deportivo-horus",
  "/combustible-eusse",
  "/eusse-market",
  "/gimnasio-balance-fit",
  "/lubricentro-ginni",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
  }));
}
