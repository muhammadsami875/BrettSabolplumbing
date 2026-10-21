import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/business";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments on Vercel must never be indexed.
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
