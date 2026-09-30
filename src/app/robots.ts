import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/signin",
        "/signup",
        "/pricing",
        "/portfolio",
        "/blogs",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}