import type { Metadata } from "next";
import { Info } from "lucide-react";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoFrame } from "@/components/sections/PhotoFrame";
import { CheckList, RelatedServices } from "@/components/sections/Lists";
import { FaqList, type Faq } from "@/components/sections/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PATH = "/heating";
const DESCRIPTION =
  "Hot-water boilers, radiant heat piping and tank or tankless water heaters from Master Plumber Brett Sabol in Bucks County, Montgomery County and Philadelphia.";

export const metadata: Metadata = pageMetadata({
  title: "Boilers, Radiant Heat & Water Heaters | Brett Sabol",
  absoluteTitle: true,
  description: DESCRIPTION,
  path: PATH,
});

const faqs: Faq[] = [
  {
    q: "What heating systems do you work on?",
    a: "Water-based heat: hot-water boilers, the hydronic and radiant piping that carries heat through a building, and water heaters, both tank and tankless. We do not service forced-air furnaces or air conditioning.",
  },
  {
    q: "What are signs my boiler needs attention?",
    a: "Rooms that will not warm up, radiators or radiant zones that stay cold, banging or gurgling in the pipes, water around the boiler, or a system that keeps losing pressure. Any of these is worth a call before a cold night turns it into an emergency.",
  },
  {
    q: "Tank or tankless water heater: which is better?",
    a: "Neither is better for everyone. Tankless units heat water on demand and do not run out, but they cost more up front. Tank units store hot water and are simpler to replace. The right choice depends on your household, your space and how much hot water you use at once.",
  },
  {
    q: "My water heater is leaking from the bottom. Can it be fixed?",
    a: "A leak from the tank itself usually means the tank has failed and the heater needs replacing. Leaks from fittings, valves or connections can often be repaired. Shut off the water to the heater and call so we can tell you which it is.",
  },
  {
    q: "Do you handle high-capacity water heaters for buildings?",
    a: "Yes. We service and install high-capacity water heating systems for businesses, facilities and multi-unit properties, including storage tanks paired with tankless heaters.",
  },
];

export default function HeatingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Heating", path: PATH }]}
        title={
          <>
            Boilers, radiant heat and <span className="text-red">water heaters</span>
          </>
        }
        lead={
          <p>
            The heating side of Brett Sabol Plumbing, Heating &amp; Jet Drain Cleaning is the plumbing side of heat: hot-water boilers, the piping
            that carries their heat through the house, and the water heaters behind every shower and faucet.
          </p>
        }
        photo={photos.radiant}
        photoAspect="4 / 5"
      />

      {/* Boilers + radiant */}
      <section aria-labelledby="heat-boilers" className="section-y">
        <div className="container-site grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="heat-boilers"
              title="Hot-water boilers"
              intro="A boiler heats water and sends it through pipes to radiators, baseboards or radiant floors. When it is not working, the problem can be the boiler, the controls, a circulator or the piping itself."
            />
            <CheckList
              className="mt-8"
              items={[
                "Boiler service and repair",
                "Piping, valves and circulators around the boiler",
                "Leaks and pressure problems in the heating loop",
                "Help deciding between repair and replacement",
              ]}
            />
          </div>
          <div>
            <SectionHeading
              id="heat-radiant"
              as="h2"
              title="Radiant and hydronic heat"
              intro="Radiant heat runs warm water through tubing in floors or walls, fed from a manifold that splits the heat into zones. Neat, well-planned piping is what makes it quiet, even and easy to service."
            />
            <CheckList
              className="mt-8"
              items={[
                "Radiant tubing runs and manifolds",
                "Hydronic heating piping and repairs",
                "Zones that stay cold or heat unevenly",
                "Neat, organized piping that is easy to service later",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Water heaters */}
      <section id="water-heaters" aria-labelledby="heat-wh" className="section-y scroll-mt-28 border-y border-line bg-surface">
        <div className="container-site">
          <SectionHeading
            id="heat-wh"
            title="Water heaters, tank and tankless"
            intro="Repair and installation of standard and tankless water heaters for consistent, reliable hot water at home, plus high-capacity systems that meet the demand of businesses, facilities and multi-unit properties."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-[1fr_1.6fr]">
            <PhotoFrame photo={photos.homeWaterHeater} aspect="3 / 4" caption sizes="(min-width: 640px) 360px, 92vw" className="max-w-[30rem]" />
            <PhotoFrame photo={photos.heaterRoom} aspect="4 / 3" caption sizes="(min-width: 1024px) 720px, (min-width: 640px) 58vw, 92vw" />
          </div>
          <div className="mt-12 grid gap-x-12 md:grid-cols-3">
            {[
              { t: "Signs of trouble", d: "Running out of hot water, rumbling, rusty water, a pilot or burner that will not stay lit, or water pooling under the tank." },
              { t: "Repair or replace", d: "A failed part on a newer heater is often worth repairing. A leaking tank means replacement. You will get a straight answer." },
              { t: "Tankless upgrades", d: "Heats water on demand, frees up floor space and does not run out. We will help you decide if it fits your home." },
            ].map((x) => (
              <div key={x.t} className="border-t-[3px] border-red py-6">
                <h3 className="font-display text-h3 font-bold text-navy">{x.t}</h3>
                <p className="mt-2 text-muted">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care tips */}
      <section aria-labelledby="heat-care" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            id="heat-care"
            title="Keeping a hot-water system healthy between visits"
            intro="A few simple habits help a boiler and water heater last longer, and help you spot trouble before it becomes a no-heat call."
          />
          <dl className="border-t border-line">
            {[
              {
                t: "Know what normal looks like on the gauge",
                d: "Boilers have a pressure gauge. Glance at it when the system is working well so you notice if it starts creeping up or dropping.",
              },
              {
                t: "Cold at the top usually means air",
                d: "A radiator that is warm at the bottom and cold at the top often has trapped air. Bleeding it can bring the heat back.",
              },
              {
                t: "Keep the area around the equipment clear",
                d: "Boilers and gas water heaters need air to burn properly. Storage boxes and laundry piled against them are a problem.",
              },
              {
                t: "Flush the water heater tank",
                d: "Sediment settles in the bottom of a tank over time. Periodic flushing helps efficiency and cuts down on rumbling noises.",
              },
              {
                t: "Do not ignore small drips",
                d: "Water under a boiler or water heater, or around its valves, is an early warning. It is far cheaper to fix a fitting than a failed tank.",
              },
            ].map((x) => (
              <div key={x.t} className="border-b border-line py-5">
                <dt className="font-display text-lg font-bold text-navy">{x.t}</dt>
                <dd className="mt-1.5 text-muted">{x.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Scope note */}
      <section aria-labelledby="heat-scope" className="section-y">
        <div className="container-site">
          <div className="flex flex-col gap-5 rounded-md border border-line bg-brand-50 p-7 sm:flex-row sm:p-9">
            <Info aria-hidden className="size-7 shrink-0 text-brand" strokeWidth={1.8} />
            <div>
              <h2 id="heat-scope" className="font-display text-h3 font-extrabold text-navy">
                What we do not cover
              </h2>
              <p className="mt-2 max-w-3xl text-muted">
                Our heating work is water-based: boilers, hydronic and radiant piping, and water heaters. For forced-air furnaces, ductwork or air
                conditioning, you will want an HVAC contractor. If you are not sure which kind of system you have, call and describe it and we will
                tell you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="heat-faq" className="section-y pt-0">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading id="heat-faq" title="Heating questions" intro="No heat on a cold night? Call 215.666.3086, any hour." />
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBand
        title="No heat or no hot water? Call the shop."
        text="24-hour emergency service is available. For planned work like a new water heater or tankless upgrade, send a request and we will get back to you."
      />
      <RelatedServices current={PATH} />

      <JsonLd
        data={[
          serviceSchema({
            name: "Heating: Boilers, Radiant Heat and Water Heaters",
            serviceType: "Hydronic heating and water heater service",
            description: DESCRIPTION,
            path: PATH,
            offers: ["Hot-water boiler service and repair", "Radiant and hydronic heat piping", "Water heater repair and installation", "Tankless water heaters", "High-capacity commercial water heaters"],
          }),
          faqSchema(faqs),
        ]}
      />
    </>
  );
}
