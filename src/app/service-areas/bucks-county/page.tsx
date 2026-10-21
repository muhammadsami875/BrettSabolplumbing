import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { business, fullAddress } from "@/content/business";
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

const PATH = "/service-areas/bucks-county";
const DESCRIPTION =
  "Bucks County plumbing, heating and jet drain cleaning from Master Plumber Brett Sabol in Feasterville-Trevose. Serving Bensalem, Langhorne, Newtown and more.";

export const metadata: Metadata = pageMetadata({
  title: "Plumber in Bucks County, PA | Brett Sabol Plumbing",
  absoluteTitle: true,
  description: DESCRIPTION,
  path: PATH,
});

const townGroups = [
  { name: "Around the shop", towns: ["Feasterville-Trevose", "Bensalem", "Southampton", "Holland", "Richboro", "Churchville"] },
  { name: "Lower Bucks", towns: ["Langhorne", "Penndel", "Levittown", "Bristol"] },
  { name: "Further into the county", towns: ["Newtown", "Yardley", "Warminster", "Ivyland"] },
];

const calls = [
  {
    t: "Sewer lines and tree roots",
    d: "Much of Lower Bucks was built in the decades after World War II, Levittown among it in the 1950s. Sewer laterals from that era were often clay or other materials that roots find their way into. Jetting clears the roots and buildup. A section that has cracked or collapsed gets dug up and replaced, and the yard, driveway or sidewalk is put back afterwards.",
  },
  {
    t: "Water heaters at the end of their run",
    d: "Most tank water heaters last somewhere around 8 to 12 years. Rumbling, rusty hot water or a damp floor around the base usually means yours is close. We repair what is worth repairing and install standard tank or tankless units when it is time to replace.",
  },
  {
    t: "Leaks you cannot see",
    d: "A water bill that creeps up, a stain on a ceiling under a bathroom, or the sound of water running when nothing is on. Finding a hidden leak early is far cheaper than repairing the damage it causes.",
  },
  {
    t: "Backflow tests for local businesses",
    d: "Shops, offices and restaurants along Street Road, Bustleton Pike and the county's other commercial corridors often need yearly backflow testing. Brett is backflow certified and can test, repair and keep records for your water supplier.",
  },
];

const faqs: Faq[] = [
  {
    q: "Which parts of Bucks County do you serve?",
    a: "The shop is in Feasterville-Trevose, so Lower Bucks and the towns around it are home ground: Bensalem, Southampton, Holland, Langhorne, Levittown and their neighbors. We also work further into the county, in towns like Newtown, Yardley and Warminster. If your town is not listed, call and ask.",
  },
  {
    q: "Do you work on sewer lines in older Lower Bucks homes?",
    a: "Yes. Older sewer laterals with root intrusion are one of the most common calls. Many can be cleared with high-pressure jetting. If the pipe is broken, the crew digs to it, replaces the damaged section and restores the surface.",
  },
  {
    q: "Can you test the backflow preventer at my Bucks County business?",
    a: "Yes. Brett Sabol is backflow certified. Your water supplier sets the testing schedule, which is most often once a year, and the results are documented so you can meet that requirement.",
  },
  {
    q: "Is emergency service available in Bucks County?",
    a: "Yes. 24-hour emergency service is available. For a burst pipe, a sewer backup or a boiler that quit in the cold, call 215.666.3086 at any hour.",
  },
];

export default function BucksCountyPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Service Areas", path: "/service-areas" },
          { name: "Bucks County", path: PATH },
        ]}
        title={
          <>
            Plumbing in <span className="text-brand">Bucks County</span>, from our shop in Feasterville-Trevose
          </>
        }
        lead={
          <p>
            Bucks County is home. The shop sits on Philmont Avenue in Feasterville-Trevose, and the trucks head out from there across Lower Bucks
            and beyond for repairs, drain and sewer work, water heaters and boilers.
          </p>
        }
        photo={photos.truckBox}
        photoAspect="1 / 1"
        photoPosition="0% 50%"
      />

      {/* Towns */}
      <section aria-labelledby="bucks-towns" className="section-y">
        <div className="container-site grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            id="bucks-towns"
            title="Bucks County towns we serve"
            intro="These are examples, not the full list. If you are anywhere nearby and not sure, call and ask."
          />
          <div className="grid gap-x-10 sm:grid-cols-3">
            {townGroups.map((g) => (
              <div key={g.name} className="border-t-[3px] border-brand py-5">
                <h3 className="font-display text-lg font-bold text-navy">{g.name}</h3>
                <ul className="mt-3 space-y-1.5 text-muted">
                  {g.towns.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <MapPin aria-hidden className="size-3.5 shrink-0 text-brand" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical calls */}
      <section aria-labelledby="bucks-calls" className="section-y bg-surface">
        <div className="container-site grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading id="bucks-calls" title="What Bucks County homeowners call about most" />
            <dl className="mt-10">
              {calls.map((c) => (
                <div key={c.t} className="border-t border-line py-7">
                  <dt className="font-display text-h3 font-bold text-navy">{c.t}</dt>
                  <dd className="mt-2 text-muted">{c.d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid content-start gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <PhotoFrame photo={photos.sewerSnow} aspect="4 / 4.4" caption sizes="(min-width: 1024px) 420px, (min-width: 640px) 46vw, 92vw" className="w-full max-w-[28rem]" />
            <PhotoFrame photo={photos.drivewayRestore} aspect="4 / 3.4" caption sizes="(min-width: 1024px) 420px, (min-width: 640px) 46vw, 92vw" className="w-full max-w-[28rem]" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="bucks-services" className="section-y">
        <div className="container-site">
          <SectionHeading
            id="bucks-services"
            title="Every service, anywhere in our Bucks County area"
            intro="Residential and light commercial, from a single dripping faucet to a sewer line replacement."
          />
          <div className="mt-12">
            <ServiceIndex />
          </div>
        </div>
      </section>

      {/* Map + review */}
      <section aria-labelledby="bucks-map" className="on-navy section-y bg-navy">
        <div className="container-site grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="bucks-map"
              tone="navy"
              title="Find the shop"
              intro={`${business.shortName} works out of ${fullAddress}. Stop by during office hours or call ahead.`}
            />
            <div className="mt-10 border-t border-white/15 pt-10">
              <QuoteBlock id="valentines-day" tone="navy" />
            </div>
          </div>
          <MapEmbed aspect="4 / 3.6" className="[&_figcaption]:text-on-navy [&_figcaption_a]:text-sky" />
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="bucks-faq" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading id="bucks-faq" title="Bucks County questions" />
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Plumbing problem in Bucks County? Call the shop."
        text="We are right here in Feasterville-Trevose. Call for anything urgent, or send a request and we will get back to you as soon as possible."
      />

      <JsonLd
        data={[
          serviceSchema({
            name: "Plumbing in Bucks County, PA",
            serviceType: "Plumbing, heating and jet drain cleaning",
            description: DESCRIPTION,
            path: PATH,
            area: { type: "AdministrativeArea", name: "Bucks County, PA", places: townGroups.flatMap((g) => g.towns) },
          }),
          faqSchema(faqs),
        ]}
      />
    </>
  );
}
