import type { Metadata } from "next";
import { business } from "@/content/business";

const DEFAULT_OG = {
  url: "/og/brett-sabol-plumbing.jpg",
  width: 1200,
  height: 630,
  alt: "Brett Sabol Plumbing, Heating & Jet Drain Cleaning service van with the company phone number 215.666.3086",
};

type PageMetaInput = {
  /** Page title without the brand suffix. Keep the full title under about 60 characters. */
  title: string;
  /** 140 to 160 characters, written for the searcher. */
  description: string;
  /** Path starting with "/", used for the canonical URL. */
  path: string;
  /** Set true to use the title exactly as written, without the brand suffix. */
  absoluteTitle?: boolean;
  noindex?: boolean;
};

export function pageMetadata({ title, description, path, absoluteTitle, noindex }: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${business.shortName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: business.shortName,
      title: fullTitle,
      description,
      images: [DEFAULT_OG],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG.url],
    },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}
