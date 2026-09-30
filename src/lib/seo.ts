import { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://topzero.tech";
export const SITE_NAME = "TopZero";

/**
 * Builds a consistent Metadata object (title, description, canonical
 * URL, Open Graph, Twitter card) for a page. Pass `path` as the route's
 * pathname (e.g. "/about", "/services/web-development", "" for home).
 * Every page should build its metadata through this helper rather than
 * hand-writing canonical/OG fields itself, so they can't drift out of
 * sync between pages.
 */
export function buildPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [`${SITE_URL}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}