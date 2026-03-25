import type { Metadata } from "next";

export const SITE_URL = "https://grupoeusse.com";
export const SITE_NAME = "Grupo Eusse";
export const SITE_DESCRIPTION = "Somos el combustible de tu vida.";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "es_CR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
