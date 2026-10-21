import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/business";
import { allRoutes } from "@/content/navigation";

const LAST_UPDATED = new Date("2026-10-21");

const priority: Record<string, number> = {
  "/": 1,
  "/residential-plumbing": 0.9,
  "/commercial": 0.9,
  "/jet-drain-cleaning": 0.9,
  "/sewer-line-repair": 0.8,
  "/heating": 0.8,
  "/backflow-testing": 0.8,
  "/service-areas": 0.7,
  "/service-areas/bucks-county": 0.8,
  "/service-areas/montgomery-county": 0.8,
  "/service-areas/philadelphia": 0.8,
  "/about": 0.7,
  "/contact": 0.7,
  "/gallery": 0.5,
  "/privacy-policy": 0.2,
  "/terms": 0.2,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: path === "/privacy-policy" || path === "/terms" ? "yearly" : "monthly",
    priority: priority[path] ?? 0.5,
  }));
}
