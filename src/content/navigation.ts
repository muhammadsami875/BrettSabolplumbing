// Site structure. Every href here must resolve to a real page (checked by scripts/qa.mjs).

export type NavLink = { label: string; href: string; blurb?: string };

export const serviceLinks: NavLink[] = [
  {
    label: "Residential Plumbing",
    href: "/residential-plumbing",
    blurb: "Leaks, repairs, fixtures, toilets and water heaters for your home.",
  },
  {
    label: "Commercial Plumbing",
    href: "/commercial",
    blurb: "Light commercial plumbing for offices, retail and multi-unit buildings.",
  },
  {
    label: "Jet Drain Cleaning",
    href: "/jet-drain-cleaning",
    blurb: "High-pressure water jetting for grease, roots and stubborn clogs.",
  },
  {
    label: "Sewer Line Repair",
    href: "/sewer-line-repair",
    blurb: "Digging, pipe replacement and putting the yard and sidewalk back.",
  },
  {
    label: "Heating",
    href: "/heating",
    blurb: "Hot-water boilers, radiant heat piping and water heaters.",
  },
  {
    label: "Backflow Testing",
    href: "/backflow-testing",
    blurb: "Certified backflow testing and preventer repair.",
  },
];

export const mainNav: NavLink[] = [
  { label: "Residential", href: "/residential-plumbing" },
  { label: "Commercial", href: "/commercial" },
  { label: "Jet Drain", href: "/jet-drain-cleaning" },
  { label: "Heating", href: "/heating" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Gallery", href: "/gallery" },
];

export const companyLinks: NavLink[] = [
  { label: "About Brett", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Project Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const areaLinks: NavLink[] = [
  { label: "Bucks County", href: "/service-areas/bucks-county" },
  { label: "Montgomery County", href: "/service-areas/montgomery-county" },
  { label: "Philadelphia", href: "/service-areas/philadelphia" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const allRoutes = [
  "/",
  "/about",
  "/residential-plumbing",
  "/commercial",
  "/jet-drain-cleaning",
  "/sewer-line-repair",
  "/heating",
  "/backflow-testing",
  "/service-areas",
  "/service-areas/bucks-county",
  "/service-areas/montgomery-county",
  "/service-areas/philadelphia",
  "/gallery",
  "/contact",
  "/privacy-policy",
  "/terms",
] as const;
