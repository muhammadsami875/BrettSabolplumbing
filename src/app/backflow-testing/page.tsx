import type { Metadata } from "next";
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

const PATH = "/backflow-testing";
const DESCRIPTION =
  "Certified backflow testing and backflow preventer repair for commercial properties, municipalities and facilities in Bucks County, Montgomery County and Philadelphia.";

export const metadata: Metadata = pageMetadata({
  title: "Backflow Testing in Bucks County | Brett Sabol Plumbing",
  absoluteTitle: true,
  description: DESCRIPTION,
  path: PATH,
});

const steps = [
  { t: "Schedule the test", d: "Call or send a request with the property address and, if you have it, the notice from your water supplier." },
  { t: "Test the assembly", d: "A certified tester checks that the backflow preventer's valves hold and that it is protecting the water supply as it should." },
  { t: "Repair if it fails", d: "Worn parts are repaired or the assembly is replaced, then it is tested again." },
  { t: "Keep your records", d: "Results are documented so you can meet your water supplier's requirement." },
];

const faqs: Faq[] = [
  {
    q: "What is backflow?",
    a: "Backflow is water flowing the wrong way, from a building's plumbing back into the public water supply. It can happen when pressure in the city main drops or when pressure inside a building rises. A backflow preventer is a valve assembly that stops it.",
  },
  {
    q: "Why do I need a backflow test?",
    a: "Testable backflow preventers have to be checked on a schedule to prove they still work. In Pennsylvania, water suppliers set the testing requirement for the properties they serve, and the most common schedule is once a year. Your supplier's notice will tell you when yours is due.",
  },
  {
    q: "Who needs backflow testing?",
    a: "Mostly commercial properties, facilities and municipal buildings with a testable backflow preventer on their water service, fire line or other connections. If you received a notice from your water supplier, you need one.",
  },
  {
    q: "What happens if my backflow preventer fails?",
    a: "Usually a worn check valve, seal or spring is to blame. The assembly is repaired or replaced as needed and then tested again so it passes.",
  },
  {
    q: "Is Brett Sabol certified to test backflow preventers?",
    a: "Yes. Brett Sabol is backflow certified, as well as being a Master Plumber, license #43391.",
  },
];

export default function BackflowTestingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Backflow Testing", path: PATH }]}
        title={
          <>
            Certified backflow testing that keeps you <span className="text-brand">compliant</span>
          </>
        }
        lead={
          <p>
            Backflow testing and prevention for commercial properties, municipalities and facilities, from a Master Plumber who is backflow
            certified. Protect the drinking water supply and stay on the right side of your water supplier.
          </p>
        }
        photo={photos.copperValves}
        photoAspect="4 / 3.4"
        quoteLabel="Schedule a test"
      />

      {/* What it is */}
      <section aria-labelledby="bf-what" className="section-y">
        <div className="container-site grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading
              id="bf-what"
              title="What backflow testing protects"
              intro="Clean water flows into a building one way. If pressure in the street main drops, water that has already been used inside a building can be pulled backward into the supply. A backflow preventer is the valve assembly that stops that from happening."
            />
            <p className="text-lead mt-6 text-muted">
              Because those valves wear over time, testable assemblies are checked on a set schedule. A certified tester confirms they still hold,
              and the results go on record for your water supplier.
            </p>
          </div>
          <div className="lg:pt-3">
            <h3 className="font-display text-h3 font-bold text-navy">Who usually needs it</h3>
            <CheckList
              className="mt-5"
              items={[
                "Commercial properties and storefronts",
                "Multi-unit and mixed-use buildings",
                "Facilities with high-demand water systems",
                "Municipal buildings",
                "Any property that received a testing notice from its water supplier",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section aria-labelledby="bf-steps" className="on-navy section-y bg-navy">
        <div className="container-site">
          <SectionHeading id="bf-steps" tone="navy" title="How a backflow test works" />
          <ol className="mt-12 grid gap-x-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="border-t border-white/20 py-7" data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
                <span aria-hidden className="tabular font-display text-3xl font-black text-sky">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-h3 font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-on-navy">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Device types */}
      <section aria-labelledby="bf-types" className="section-y">
        <div className="container-site">
          <SectionHeading
            id="bf-types"
            title="The backflow preventers you are most likely to have"
            intro="Which assembly a property needs depends on the hazard it protects against. These are the common testable types."
          />
          <dl className="mt-12 grid gap-x-12 md:grid-cols-3">
            {[
              {
                t: "Reduced pressure zone (RPZ)",
                d: "The highest level of protection, used where a building's water could carry a real health hazard. It has two check valves and a relief valve that dumps water rather than let it flow backward.",
              },
              {
                t: "Double check valve assembly",
                d: "Two independent check valves in series, common on fire sprinkler lines and on connections where the hazard is lower. Each valve is tested to confirm it holds.",
              },
              {
                t: "Pressure vacuum breaker",
                d: "Often found on irrigation systems. It lets air in to break a siphon if pressure drops, and it has to be installed above the highest point it serves.",
              },
            ].map((x) => (
              <div key={x.t} className="border-t-[3px] border-brand py-6">
                <dt className="font-display text-h3 font-bold text-navy">{x.t}</dt>
                <dd className="mt-2 text-muted">{x.d}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-3xl text-muted">
            Not sure which one you have, or whether it is testable? The tag on the assembly or your water supplier&apos;s notice usually says. If
            not, we can identify it on site.
          </p>
        </div>
      </section>

      {/* Plumbing around it */}
      <section aria-labelledby="bf-more" className="section-y border-t border-line">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <PhotoFrame photo={photos.heaterRoom} aspect="4 / 3" caption sizes="(min-width: 1024px) 520px, 92vw" />
          <SectionHeading
            id="bf-more"
            title="One plumber for the test and everything around it"
            intro="Because the tester is also a Master Plumber, a failed assembly, a leaking valve or a mechanical room that needs work does not mean calling someone else. The same company handles commercial repairs, water heaters, restrooms and sewer lines."
          />
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="bf-faq" className="section-y border-t border-line bg-surface">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading id="bf-faq" title="Backflow questions" />
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Backflow test due? Get it on the schedule."
        text="Call the shop or send a request with your property address and the notice from your water supplier."
      />
      <RelatedServices current={PATH} />

      <JsonLd
        data={[
          serviceSchema({
            name: "Backflow Testing",
            serviceType: "Backflow prevention testing",
            description: DESCRIPTION,
            path: PATH,
            offers: ["Backflow preventer testing", "Backflow preventer repair", "Backflow compliance"],
          }),
          faqSchema(faqs),
        ]}
      />
    </>
  );
}
