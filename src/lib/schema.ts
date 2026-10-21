// JSON-LD builders. Only verified business facts go in here: no ratings,
// review counts, prices or profiles that have not been confirmed.
import { SITE_URL, business, hours, serviceAreas } from "@/content/business";

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const OWNER_ID = `${SITE_URL}/#brett-sabol`;

const areaServed = [
  { "@type": "AdministrativeArea", name: "Bucks County, PA" },
  { "@type": "AdministrativeArea", name: "Montgomery County, PA" },
  { "@type": "City", name: "Philadelphia, PA" },
];

export function plumberSchema() {
  const weekdays = hours.filter((h) => h.opens && h.closes);
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": BUSINESS_ID,
    name: business.name,
    alternateName: business.shortName,
    legalName: business.legalName,
    url: SITE_URL,
    telephone: business.phone.e164,
    email: business.email,
    image: [`${SITE_URL}/og/brett-sabol-plumbing.jpg`],
    logo: `${SITE_URL}/icon.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: business.geo.latitude, longitude: business.geo.longitude },
    hasMap: business.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: weekdays.map((h) => h.schemaDay),
        opens: weekdays[0]?.opens,
        closes: weekdays[0]?.closes,
      },
    ],
    areaServed,
    founder: { "@id": OWNER_ID },
    employee: {
      "@type": "Person",
      "@id": OWNER_ID,
      name: business.owner,
      jobTitle: business.ownerTitle,
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: "Master Plumber license",
          identifier: business.licenseNumber,
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Backflow prevention certification",
        },
      ],
    },
    knowsAbout: [
      "Residential plumbing",
      "Commercial plumbing",
      "Jet drain cleaning",
      "Hydro jetting",
      "Sewer line repair",
      "Water heater installation",
      "Tankless water heaters",
      "Hot water boilers",
      "Radiant heat",
      "Backflow testing",
      "Leak detection",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: business.shortName,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

type ServiceInput = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  offers?: string[];
  /** Override the default three-area list, for a single county page. */
  area?: { type: "AdministrativeArea" | "City"; name: string; places?: readonly string[] };
};

export function serviceSchema({ name, description, path, serviceType, offers, area }: ServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    serviceType,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: area
      ? [
          { "@type": area.type, name: area.name },
          ...(area.places ?? []).map((p) => ({ "@type": "Place", name: `${p}, PA` })),
        ]
      : areaServed,
    ...(offers && offers.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name,
            itemListElement: offers.map((o) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: o },
            })),
          },
        }
      : {}),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function serviceAreaPlaces() {
  return serviceAreas.flatMap((a) => a.places);
}
