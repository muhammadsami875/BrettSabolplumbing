import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building, Building2, Landmark, ShieldCheck, Store } from "lucide-react";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoFrame } from "@/components/sections/PhotoFrame";
import { RelatedServices, ServiceRows } from "@/components/sections/Lists";
import { QuoteBlock } from "@/components/sections/QuoteBlock";
import { FaqList, type Faq } from "@/components/sections/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

const PATH = "/commercial";
const DESCRIPTION =
  "Light commercial plumbing for offices, retail and multi-unit buildings in Bucks, Montgomery and Philadelphia: repairs, jetting, water heaters and backflow.";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Plumbing in Bucks County & Philadelphia",
  absoluteTitle: true,
  description: DESCRIPTION,
  path: PATH,
});

const services = [
  {
    title: "Commercial system repairs",
    text: "Plumbing systems diagnosed and repaired across offices, retail spaces and multi-unit properties, with as little disruption to daily operations as possible.",
  },
  {
    title: "Sewer line and jetting",
    text: "Main sewer lines cleared and maintained with high-powered jetting built for larger systems and high-demand use.",
  },
  {
    title: "Leak detection",
    text: "Hidden leaks located inside walls, floors and underground lines, to prevent costly damage and downtime in larger buildings.",
  },
  {
    title: "Piping systems and infrastructure",
    text: "Piping repaired, upgraded or replaced to support long-term performance in larger buildings and commercial spaces.",
  },
  {
    title: "High-volume drain solutions",
    text: "Heavy-use drainage systems kept moving, preventing backups so the facility keeps operating.",
  },
  {
    title: "Water heater systems",
    text: "High-capacity water heating systems serviced and installed to meet the demand of businesses, facilities and multi-unit properties.",
  },
  {
    title: "Restroom and facility plumbing",
    text: "Public and employee restrooms maintained and repaired so they stay clean, working and reliable.",
  },
  {
    title: "Backflow compliance and testing",
    text: "Certified backflow testing and prevention that helps commercial properties, municipalities and facilities stay compliant and protected.",
  },
];

const properties = [
  { icon: Building2, t: "Small offices", d: "Restrooms, kitchenettes, water heaters and the lines that serve them." },
  { icon: Store, t: "Retail spaces", d: "Repairs scheduled so customers and staff are affected as little as possible." },
  { icon: Building, t: "Multi-unit properties", d: "Shared lines, high-capacity hot water and drains that serve many tenants." },
  { icon: Landmark, t: "Facilities and municipalities", d: "Backflow testing, compliance and heavy-use plumbing systems." },
];

const faqs: Faq[] = [
  {
    q: "What kinds of commercial properties do you work on?",
    a: "Light commercial properties: small offices, retail spaces, multi-unit buildings and facilities across Bucks County, Montgomery County and Philadelphia. If you are not sure whether your building is a fit, call and describe it.",
  },
  {
    q: "Can you keep disruption to my business low?",
    a: "That is the goal on every commercial job. Fast response and minimal disruption matter when customers, tenants or staff depend on the building, so work is planned around how your property runs and you are kept informed as it goes.",
  },
  {
    q: "Do you handle backflow testing for commercial buildings?",
    a: "Yes. Brett Sabol is backflow certified, and certified testing and prevention is part of the commercial service. See the backflow testing page for how it works.",
  },
  {
    q: "Can you service large or multiple water heaters?",
    a: "Yes. We service and install high-capacity water heating systems for businesses, facilities and multi-unit properties, including setups with storage tanks and tankless units working together.",
  },
  {
    q: "Our main line keeps backing up. What should we do?",
    a: "Recurring backups on a main line usually mean buildup, grease or roots the line has never been fully cleaned of. High-pressure jetting clears the whole pipe wall, and routine jetting can keep a heavy-use line from backing up again.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Commercial Plumbing", path: PATH }]}
        title={
          <>
            Commercial plumbing that keeps your <span className="text-brand">business running</span>
          </>
        }
        lead={
          <p>
            Dependable light commercial plumbing for small offices, retail spaces and multi-unit properties. With a Master Plumber running the
            work, every job is handled with precision, clear communication and a focus on long-term reliability, so you can focus on your
            business.
          </p>
        }
        photo={photos.heaterRoom}
        photoAspect="4 / 4.2"
        quoteLabel="Request a commercial quote"
      />

      {/* Services on navy */}
      <section aria-labelledby="com-services" className="on-navy section-y bg-navy">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHeading id="com-services" tone="navy" title="Commercial plumbing services" />
            <p className="text-lead text-on-navy lg:pb-2">
              Routine maintenance, repairs and system upgrades, tailored to your property&apos;s needs.
            </p>
          </div>
          <div className="mt-12">
            <ServiceRows items={services} tone="navy" />
          </div>
        </div>
      </section>

      {/* Minimal disruption */}
      <section aria-labelledby="com-disruption" className="section-y">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="grid grid-cols-2 gap-4">
            <PhotoFrame photo={photos.restroom} aspect="3 / 4" caption sizes="(min-width: 1024px) 260px, 46vw" />
            <PhotoFrame photo={photos.crewCleanouts} aspect="3 / 4" position="50% 30%" caption sizes="(min-width: 1024px) 260px, 46vw" className="mt-12" />
          </div>
          <div>
            <SectionHeading
              id="com-disruption"
              title="Planned around how your building runs"
              intro="A plumbing problem in a business is never just a plumbing problem. It is a closed restroom, an unhappy tenant or a lost afternoon of sales. That is why fast response and minimal disruption come first on commercial work."
            />
            <div className="text-lead mt-6 space-y-5 text-muted">
              <p>
                Before the work starts, you know what was found, what needs to happen and how it affects your space. When a repair can wait, you
                hear that too. When it cannot, it gets handled.
              </p>
              <p>
                The same crew that services homes across Bucks County, Montgomery County and Philadelphia brings a Master Plumber&apos;s standard
                to your property, whether it is a single restroom or the main line that serves the whole building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property types */}
      <section aria-labelledby="com-types" className="section-y border-y border-line bg-surface">
        <div className="container-site">
          <SectionHeading id="com-types" title="Properties we serve" />
          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {properties.map(({ icon: Icon, t, d }, i) => (
              <li key={t} className="border-t-[3px] border-brand py-6" data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                <Icon aria-hidden className="size-7 text-brand" strokeWidth={1.8} />
                <h3 className="mt-4 font-display text-h3 font-bold text-navy">{t}</h3>
                <p className="mt-2 text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Backflow callout */}
      <section aria-labelledby="com-backflow" className="section-y">
        <div className="container-site">
          <div className="grid items-center gap-10 rounded-md border border-line p-8 shadow-[var(--shadow-card)] sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:gap-12">
            <span className="grid size-16 place-items-center rounded-sm bg-brand text-white">
              <ShieldCheck aria-hidden className="size-8" strokeWidth={1.8} />
            </span>
            <div>
              <h2 id="com-backflow" className="font-display text-h3 font-extrabold text-navy sm:text-[1.7rem]">
                Backflow testing from a certified tester
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                Brett Sabol is backflow certified. Testing and prevention help commercial properties, municipalities and facilities stay
                compliant and keep the drinking water supply protected.
              </p>
            </div>
            <ButtonLink href="/backflow-testing" variant="navy" size="lg" icon={<ArrowRight aria-hidden className="size-[1.1em]" />}>
              Backflow testing
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Review + FAQ */}
      <section aria-labelledby="com-faq" className="section-y bg-surface">
        <div className="container-site grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h2 id="com-faq" className="text-h2 font-extrabold wide text-navy">
              Questions from property managers
            </h2>
            <div className="mt-8">
              <FaqList items={faqs} />
            </div>
          </div>
          <div className="lg:pt-24">
            <QuoteBlock id="valentines-day" />
            <p className="mt-8 text-muted">
              Need jetting on a main line?{" "}
              <Link href="/jet-drain-cleaning" className="font-semibold text-brand underline-offset-4 hover:underline">
                See how jet drain cleaning works
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Keep your property running. Call a Master Plumber."
        text="Tell us about the building and the problem. For anything that is shutting down a restroom or backing up a line, call the shop directly."
      />
      <RelatedServices current={PATH} />

      <JsonLd
        data={[
          serviceSchema({
            name: "Commercial Plumbing",
            serviceType: "Commercial plumbing",
            description: DESCRIPTION,
            path: PATH,
            offers: services.map((s) => s.title),
          }),
          faqSchema(faqs),
        ]}
      />
    </>
  );
}
