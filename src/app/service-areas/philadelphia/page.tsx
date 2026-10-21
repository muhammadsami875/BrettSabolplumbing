import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoFrame } from "@/components/sections/PhotoFrame";
import { ServiceIndex } from "@/components/sections/Lists";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { FaqList, type Faq } from "@/components/sections/FaqList";
import { QuoteBlock } from "@/components/sections/QuoteBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PATH = "/service-areas/philadelphia";
const DESCRIPTION =
  "Plumber for Northeast Philadelphia and the wider city: rowhome sewer lines, jet drain cleaning, water heaters and backflow testing from Master Plumber Brett Sabol.";

export const metadata: Metadata = pageMetadata({
  title: "Plumber in Northeast Philadelphia | Brett Sabol Plumbing",
  absoluteTitle: true,
  description: DESCRIPTION,
  path: PATH,
});

const neighborhoods = [
  { name: "Next to the shop", list: ["Somerton", "Bustleton", "Byberry", "Parkwood", "Academy Gardens", "Morrell Park"] },
  { name: "Along the river", list: ["Torresdale", "Holmesburg", "Tacony", "Mayfair"] },
  { name: "Central Northeast", list: ["Fox Chase", "Burholme", "Rhawnhurst", "Oxford Circle"] },
];

const faqs: Faq[] = [
  {
    q: "Do you work all over Philadelphia?",
    a: "Northeast Philadelphia is right next to our shop in Feasterville-Trevose, so neighborhoods like Somerton, Bustleton, Fox Chase and Torresdale are the core of our city work. We also take jobs in the wider city. Call with your address and we will tell you.",
  },
  {
    q: "Who is responsible for the sewer line from my house to the street?",
    a: "In Philadelphia, the sewer line running from a house to the city main in the street is generally the property owner's responsibility. That is why a backup or a broken lateral is worth having looked at properly: you want to know whether it can be cleared or needs repair.",
  },
  {
    q: "Can you jet a rowhome sewer line?",
    a: "Yes. High-pressure jetting clears grease, buildup and roots from house drains and sewer laterals. If the line is broken, it needs repair instead, and you hear that up front.",
  },
  {
    q: "Do you work on Philadelphia storefronts and apartment buildings?",
    a: "Yes. Light commercial work includes small offices, storefronts and multi-unit buildings: repairs, restroom plumbing, high-capacity water heaters, sewer jetting and certified backflow testing.",
  },
];

export default function PhiladelphiaPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Service Areas", path: "/service-areas" },
          { name: "Philadelphia", path: PATH },
        ]}
        title={
          <>
            Plumbing for <span className="text-brand">Philadelphia</span> homes and businesses, starting in the Northeast
          </>
        }
        lead={
          <p>
            Somerton, Bustleton and the rest of Northeast Philadelphia border Feasterville-Trevose, so the shop is close by. From there the
            service reaches the wider city too.
          </p>
        }
        photo={photos.sewerDig}
        photoAspect="4 / 4.5"
        photoPosition="50% 45%"
      />

      {/* Rowhome sewer lines */}
      <section aria-labelledby="phl-sewer" className="section-y">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading
              id="phl-sewer"
              title="Rowhomes, twins and the sewer line out to the street"
              intro="In Philadelphia, the sewer line from a house to the city main is generally the owner's to maintain. In some older rowhome blocks, neighboring houses even share a line."
            />
            <div className="text-lead mt-6 space-y-5 text-muted">
              <p>
                When the basement floor drain backs up, the first question is where the blockage is and what caused it. Grease and roots can
                usually be jetted out. A broken or sagging section needs repair, and you hear which one it is before any work starts.
              </p>
              <p>
                It is the same honest approach that earned this review from a customer who had already been told they needed an excavator.
              </p>
            </div>
            <Link href="/sewer-line-repair" className="group mt-8 inline-flex items-center gap-2 font-display text-lg font-bold text-brand">
              Sewer line repair
              <ArrowRight aria-hidden className="size-4.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="border-t-[3px] border-navy pt-8">
            <QuoteBlock id="second-opinion-sewer" />
          </div>
        </div>
      </section>

      {/* Neighborhoods + map */}
      <section aria-labelledby="phl-areas" className="section-y bg-surface">
        <div className="container-site">
          <SectionHeading
            id="phl-areas"
            title="Philadelphia neighborhoods we serve"
            intro="These are examples, not the full list. If your neighborhood is not here, call and ask."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-3">
              {neighborhoods.map((n) => (
                <div key={n.name} className="border-t-[3px] border-brand pt-5">
                  <h3 className="font-display text-lg font-bold text-navy">{n.name}</h3>
                  <ul className="mt-3 space-y-1.5 text-muted">
                    {n.list.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <MapEmbed aspect="4 / 3.6" />
          </div>
        </div>
      </section>

      {/* City businesses */}
      <section aria-labelledby="phl-business" className="on-navy section-y bg-navy">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="grid grid-cols-2 gap-4">
            <PhotoFrame photo={photos.restroom} tone="navy" aspect="3 / 4" caption sizes="(min-width: 1024px) 260px, 46vw" />
            <PhotoFrame photo={photos.toilet} tone="navy" aspect="3 / 4" position="40% 50%" caption revealDelay={110} sizes="(min-width: 1024px) 260px, 46vw" />
          </div>
          <SectionHeading
            id="phl-business"
            tone="navy"
            title="Storefronts, offices and multi-unit buildings"
            intro="Light commercial plumbing across the Northeast: restroom repairs, high-capacity water heaters, main line jetting and certified backflow testing, planned to keep disruption to tenants and customers low."
          />
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="phl-services" className="section-y">
        <div className="container-site">
          <SectionHeading id="phl-services" title="Every service, in the city too" />
          <div className="mt-12">
            <ServiceIndex />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="phl-faq" className="section-y bg-surface">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading id="phl-faq" title="Philadelphia questions" />
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Basement drain backing up? Call before it gets worse."
        text="Stop running water and call the shop. For planned work, send a request with your address and what you are seeing."
      />

      <JsonLd
        data={[
          serviceSchema({
            name: "Plumbing in Philadelphia, PA",
            serviceType: "Plumbing, sewer and drain service",
            description: DESCRIPTION,
            path: PATH,
            area: { type: "City", name: "Philadelphia, PA", places: neighborhoods.flatMap((n) => n.list) },
          }),
          faqSchema(faqs),
        ]}
      />
    </>
  );
}
