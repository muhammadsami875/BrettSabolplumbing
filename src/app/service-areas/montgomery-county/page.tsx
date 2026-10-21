import type { Metadata } from "next";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoFrame } from "@/components/sections/PhotoFrame";
import { CheckList, ServiceIndex } from "@/components/sections/Lists";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { FaqList, type Faq } from "@/components/sections/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PATH = "/service-areas/montgomery-county";
const DESCRIPTION =
  "Plumbing, boiler and water heater service in eastern Montgomery County, PA: Huntingdon Valley, Abington, Jenkintown and Hatboro, from Master Plumber Brett Sabol.";

export const metadata: Metadata = pageMetadata({
  title: "Plumber in Montgomery County, PA | Brett Sabol Plumbing",
  absoluteTitle: true,
  description: DESCRIPTION,
  path: PATH,
});

const towns = [
  "Huntingdon Valley",
  "Bethayres",
  "Hatboro",
  "Horsham",
  "Dresher",
  "Willow Grove",
  "Abington",
  "Jenkintown",
  "Rockledge",
  "Elkins Park",
  "Glenside",
  "Cheltenham",
];

const faqs: Faq[] = [
  {
    q: "Do you serve my part of Montgomery County?",
    a: "We focus on eastern Montgomery County, the towns closest to our shop just over the county line in Feasterville-Trevose: Huntingdon Valley, Bethayres, Hatboro, Abington, Jenkintown, Glenside, Elkins Park, Cheltenham and their neighbors. Call if you are not sure your town is in range.",
  },
  {
    q: "Can you work on an older boiler and radiators?",
    a: "Yes. We service and repair hot-water boilers and the piping around them, and help with radiators or zones that stay cold. When a boiler is near the end of its life, you get an honest answer about whether repair still makes sense.",
  },
  {
    q: "My older home has low water pressure. Is it the pipes?",
    a: "It can be. Older galvanized steel supply pipe corrodes on the inside and narrows over time. It can also be a failing valve or a problem somewhere else in the system. We find the cause first, then repair or replace what is actually needed.",
  },
  {
    q: "Is emergency service available in Montgomery County?",
    a: "Yes. 24-hour emergency service is available. Call 215.666.3086 for a burst pipe, a sewer backup or no heat, at any hour.",
  },
];

export default function MontgomeryCountyPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Service Areas", path: "/service-areas" },
          { name: "Montgomery County", path: PATH },
        ]}
        title={
          <>
            Plumbing and heating in <span className="text-brand">eastern Montgomery County</span>
          </>
        }
        lead={
          <p>
            Huntingdon Valley, Abington, Jenkintown, Hatboro and the towns around them sit just over the county line from our shop in
            Feasterville-Trevose. Same Master Plumber, same crew, same standard of work.
          </p>
        }
        photo={photos.radiant}
        photoAspect="4 / 5"
      />

      {/* Older homes */}
      <section aria-labelledby="mont-homes" className="section-y">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="grid grid-cols-2 gap-4">
            <PhotoFrame photo={photos.copperValves} aspect="3 / 4" caption sizes="(min-width: 1024px) 260px, 46vw" />
            <PhotoFrame photo={photos.homeWaterHeater} aspect="3 / 4" position="50% 35%" caption revealDelay={110} sizes="(min-width: 1024px) 260px, 46vw" />
          </div>
          <div>
            <SectionHeading
              id="mont-homes"
              title="Older homes, hot-water heat and the plumbing behind the walls"
              intro="Many homes in towns like Jenkintown, Glenside, Elkins Park and Cheltenham date back to the early 1900s, and plenty of them still heat with a boiler and radiators."
            />
            <div className="text-lead mt-6 space-y-5 text-muted">
              <p>
                That makes heating work as common here as plumbing work. A boiler that short-cycles, a radiator that stays cold at the top, or a
                loop that keeps losing pressure all have a cause, and finding it is the job.
              </p>
              <p>
                Older houses also tend to carry older supply pipe. Galvanized steel narrows as it corrodes, which shows up as weak pressure and
                rusty water. Replacing the worst sections, or the whole run, brings the flow back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drains in older homes */}
      <section aria-labelledby="mont-drains" className="section-y border-t border-line">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading id="mont-drains" title="Drains and sewer lines in older houses" />
          <div className="text-lead space-y-5 text-muted">
            <p>
              Houses from the early 1900s were usually built with cast iron drain lines. Cast iron lasts a long time, but the inside scales up
              and narrows over the decades, and older lines can crack. Slow drains in several fixtures at once are often the first sign.
            </p>
            <p>
              High-pressure jetting clears scale, grease and roots from the line. When a section has cracked or rusted through, it gets
              replaced, and you hear exactly what was found before any work starts.
            </p>
          </div>
        </div>
      </section>

      {/* Towns */}
      <section aria-labelledby="mont-towns" className="section-y bg-surface">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              id="mont-towns"
              title="Montgomery County towns we serve"
              intro="These are examples, not the full list. Our work in Montgomery County centers on the eastern townships closest to the shop."
            />
            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-3">
              {towns.map((t) => (
                <li key={t} className="border-b border-line pb-2.5 font-semibold text-navy">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <MapEmbed aspect="4 / 3.6" />
        </div>
      </section>

      {/* What we handle */}
      <section aria-labelledby="mont-what" className="section-y">
        <div className="container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading id="mont-what" title="Common Montgomery County calls" />
            <CheckList
              className="mt-9"
              items={[
                "Boiler service, repair and the piping around it",
                "Radiators and radiant zones that stay cold",
                "Low water pressure and rusty water from aging pipe",
                "Water heater repair and tank or tankless replacement",
                "Slow drains and sewer lines with roots in them",
                "Leaks behind walls and under floors",
              ]}
            />
          </div>
          <div>
            <h2 className="font-display text-h3 font-extrabold text-navy">All services in Montgomery County</h2>
            <div className="mt-6">
              <ServiceIndex />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="mont-faq" className="section-y bg-surface">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading id="mont-faq" title="Montgomery County questions" />
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBand
        title="No heat or no water pressure? Call a Master Plumber."
        text="Eastern Montgomery County is a short drive from the shop. Call for anything urgent, or send a request with what you are seeing."
      />

      <JsonLd
        data={[
          serviceSchema({
            name: "Plumbing and Heating in Montgomery County, PA",
            serviceType: "Plumbing, boiler and water heater service",
            description: DESCRIPTION,
            path: PATH,
            area: { type: "AdministrativeArea", name: "Montgomery County, PA", places: towns },
          }),
          faqSchema(faqs),
        ]}
      />
    </>
  );
}
