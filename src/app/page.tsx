import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { business } from "@/content/business";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { HomeHero } from "@/components/home/HomeHero";
import { ProblemStrip } from "@/components/home/ProblemStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { CallButton } from "@/components/ui/CallButton";
import { PhotoFrame } from "@/components/sections/PhotoFrame";
import { CheckList, ServiceIndex, ServiceRows } from "@/components/sections/Lists";
import { QuoteBlock } from "@/components/sections/QuoteBlock";
import { AreaColumns } from "@/components/sections/AreaColumns";
import { FaqList, type Faq } from "@/components/sections/FaqList";
import { ContactPanel } from "@/components/sections/ContactPanel";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { FlowSteps, PipeRow } from "@/components/motion/PipeProgress";

export const metadata: Metadata = pageMetadata({
  title: "Bucks County Plumber & Jet Drain Cleaning | Brett Sabol",
  absoluteTitle: true,
  description:
    "Master Plumber Brett Sabol handles plumbing, heating and jet drain cleaning across Bucks County, Montgomery County and Philadelphia. 24-hour emergency service.",
  path: "/",
});

const faqs: Faq[] = [
  {
    q: "Do you offer 24-hour emergency plumbing service?",
    a: "Yes. 24-hour emergency service is available. The office is open Monday to Friday from 8 am to 5 pm, and weekend work is by appointment. For a burst pipe, a sewer backup or a boiler that quit in the cold, call 215.666.3086 at any hour.",
  },
  {
    q: "Is Brett Sabol a licensed Master Plumber?",
    a: "Yes. Brett Sabol is a Master Plumber, license #43391, and he is backflow certified. He has more than 25 years of experience and still leads the company and the work today.",
  },
  {
    q: "What areas do you serve?",
    a: "Bucks County, Montgomery County and Philadelphia. The shop is at 421 Philmont Ave in Feasterville-Trevose, so towns like Bensalem, Southampton, Huntingdon Valley and Northeast Philadelphia are close by. The service areas page lists more.",
  },
  {
    q: "What is jet drain cleaning, and when do I need it?",
    a: "Jet drain cleaning, also called hydro jetting, sends water at high pressure through the pipe to scour off grease, sludge, roots and debris. It is the right call for clogs that keep coming back, slow main lines and sewer lines with root intrusion, where a snake only opens a small path through the blockage.",
  },
  {
    q: "Do you work on commercial buildings?",
    a: "Yes. Brett Sabol Plumbing handles light commercial plumbing for offices, retail spaces, multi-unit properties and facilities, including restroom plumbing, high-capacity water heaters, sewer line jetting and certified backflow testing.",
  },
  {
    q: "Do you install tankless water heaters?",
    a: "Yes. We repair and install both standard tank and tankless water heaters, and we service high-capacity water heating systems for businesses and multi-unit buildings.",
  },
  {
    q: "How much will my job cost?",
    a: "Every home and every problem is different, so prices are given for your specific job once we understand it. Call or send the request form with a short description, and we will talk you through the options before any work starts.",
  },
];

const residentialRows = [
  { title: "Plumbing repairs", text: "Leaks, broken pipes and the everyday problems that stop a house from working right." },
  { title: "Water heaters", text: "Repair and installation of standard tank and tankless water heaters." },
  { title: "Drain cleaning and jetting", text: "Slow and clogged drains cleared, with jetting for buildup that keeps coming back." },
  { title: "Pipe repair and replacement", text: "Damaged, aging or corroded pipe repaired or replaced to restore good water flow." },
  { title: "Fixtures and toilets", text: "Faucets, sinks, toilets and more, installed right for long-lasting performance." },
  { title: "Leak detection", text: "Hidden leaks found early, before they turn into water damage and high bills." },
];

const commercialList = [
  "Commercial system repairs with minimal disruption",
  "Sewer line jetting for high-demand systems",
  "Leak detection in walls, floors and underground",
  "Piping systems repaired, upgraded or replaced",
  "High-capacity water heater systems",
  "Restroom and facility plumbing",
  "Certified backflow testing and compliance",
];

const sequence = [
  { step: "Dig", photo: photos.sewerSnow },
  { step: "New pipe", photo: photos.crewCleanouts },
  { step: "Patch", photo: photos.drivewayRestore },
  { step: "Sidewalk", photo: photos.sidewalkRestore },
];

const linkArrow = <ArrowRight aria-hidden className="size-4.5 transition-transform duration-200 group-hover:translate-x-1" />;

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProblemStrip />

      {/* Services index: one statement per service, detail follows below and on each page */}
      <section aria-labelledby="services-title" className="section-y">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHeading id="services-title" title="Plumbing, heating and drain work under one Master Plumber license" />
            <p className="text-lead text-muted lg:pb-2">
              Homeowners and property managers call for different reasons. Start with the one that fits, or call and describe what is going on.
            </p>
          </div>
          <div className="mt-12">
            <ServiceIndex />
          </div>
        </div>
      </section>

      {/* Residential */}
      <section aria-labelledby="residential-title" className="section-y bg-surface">
        <div className="container-site grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              id="residential-title"
              title="Residential plumbing, done to a Master Plumber's standard"
              intro="No two homes, and no two plumbing problems, are the same. Every job is approached with a long-term fix in mind, explained honestly and finished cleanly, with the same respect Brett expects in his own home."
            />
            <div className="mt-10" id="repairs">
              <ServiceRows items={residentialRows} />
            </div>
            <Link href="/residential-plumbing" className="group mt-8 inline-flex items-center gap-2 font-display text-lg font-bold text-brand">
              See residential plumbing
              {linkArrow}
            </Link>
          </div>
          <div className="grid content-start gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <PhotoFrame
              photo={photos.toilet}
              aspect="4 / 4.3"
              position="45% 45%"
              caption
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 46vw, 92vw"
              className="w-full max-w-[30rem]"
            />
            <PhotoFrame
              photo={photos.copperValves}
              aspect="4 / 3"
              caption
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 46vw, 92vw"
              className="hidden w-full max-w-[30rem] sm:block"
            />
          </div>
        </div>
      </section>

      {/* Commercial band */}
      <section aria-labelledby="commercial-title" className="on-navy section-y bg-navy">
        <div className="container-site grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <PhotoFrame photo={photos.heaterRoom} tone="navy" aspect="4 / 5" caption sizes="(min-width: 1024px) 290px, 46vw" />
            <PhotoFrame photo={photos.restroom} tone="navy" aspect="4 / 5" caption sizes="(min-width: 1024px) 290px, 46vw" />
          </div>
          <div className="order-1 lg:order-2" data-reveal>
            <SectionHeading
              id="commercial-title"
              tone="navy"
              title="Commercial plumbing that keeps your doors open"
              intro="Small offices, retail spaces, multi-unit properties and facilities need fast response and as little disruption as possible. Repairs, maintenance and upgrades are planned around how your building actually runs."
            />
            <CheckList items={commercialList} tone="navy" className="mt-8" />
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/commercial" variant="light" size="lg" icon={<ArrowRight aria-hidden className="size-[1.1em]" />}>
                Commercial plumbing
              </ButtonLink>
              <ButtonLink href="/backflow-testing" variant="outline-light" size="lg">
                Backflow testing
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Jet drain cleaning */}
      <section aria-labelledby="jetting-title" className="section-y">
        <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <PhotoFrame
              photo={photos.sewerDig}
              aspect="4 / 4.5"
              position="50% 45%"
              caption
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 480px, 92vw"
              className="max-w-[30rem]"
            />
          </div>
          <div>
            <SectionHeading
              id="jetting-title"
              title="Jet drain cleaning that clears the whole pipe"
              intro="A snake punches a hole through a clog. Hydro jetting sends high-pressure water through the line to scour grease, sludge, roots and debris off the pipe walls, so full flow comes back and the same clog is less likely to return."
            />
            <div className="mt-10">
              <FlowSteps
                steps={[
                  {
                    title: "Find out what is in the line",
                    text: "The right fix depends on what is causing the backup and where. That is worked out first, so you are not paying for the wrong tool.",
                  },
                  {
                    title: "Jet the line clean",
                    text: "High-pressure water cuts through grease, buildup and root intrusion along the full length of the drain or sewer line.",
                  },
                  {
                    title: "Confirm it flows",
                    text: "Water runs freely again, and you hear what was found and whether routine jetting makes sense for your building.",
                  },
                ]}
              />
            </div>
            <p className="mt-8 text-muted">
              Jetting works for homes and light commercial properties, from a kitchen line that keeps clogging to a main sewer line with roots in it.
            </p>
            <Link href="/jet-drain-cleaning" className="group mt-6 inline-flex items-center gap-2 font-display text-lg font-bold text-brand">
              How jet drain cleaning works
              {linkArrow}
            </Link>
          </div>
        </div>
      </section>

      {/* Heating */}
      <section aria-labelledby="heating-title" className="section-y bg-surface">
        <div className="container-site grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading
              id="heating-title"
              title="Heating: boilers, radiant heat and water heaters"
              intro="The heating side of the business is the plumbing side of heat. Hot-water boilers, the piping that carries heat through the house, and the water heaters that supply every faucet and shower."
            />
            <dl className="mt-10 grid gap-x-10 sm:grid-cols-3">
              {[
                { t: "Boilers", d: "Hot-water boiler service, repair and the piping around it." },
                { t: "Radiant heat", d: "Hydronic and radiant heat lines run neatly to manifolds." },
                { t: "Water heaters", d: "Tank and tankless, residential and high-capacity commercial." },
              ].map((x) => (
                <div key={x.t} className="border-t-[3px] border-red py-5">
                  <dt className="font-display text-h3 font-bold text-navy">{x.t}</dt>
                  <dd className="mt-2 text-muted">{x.d}</dd>
                </div>
              ))}
            </dl>
            <Link href="/heating" className="group mt-6 inline-flex items-center gap-2 font-display text-lg font-bold text-brand">
              Heating services
              {linkArrow}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PhotoFrame photo={photos.radiant} aspect="3 / 4" caption sizes="(min-width: 1024px) 240px, 46vw" />
            <PhotoFrame photo={photos.homeWaterHeater} aspect="3 / 4" position="50% 35%" caption sizes="(min-width: 1024px) 240px, 46vw" />
          </div>
        </div>
      </section>

      {/* Dig to patch: selected project photography, told in order */}
      <section id="dig-to-patch" aria-labelledby="sequence-title" className="section-y scroll-mt-28">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHeading
              id="sequence-title"
              title="From the first dig to the last patch"
              intro="When a sewer line has to come up, the same crew digs it, lays the new pipe and puts the driveway and sidewalk back. These are real jobs, in order."
            />
            <div className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-self-end lg:pb-2">
              <Link href="/sewer-line-repair" className="group inline-flex items-center gap-2 font-display text-lg font-bold text-brand">
                Sewer line repair
                {linkArrow}
              </Link>
              <Link href="/gallery" className="group inline-flex items-center gap-2 font-display text-lg font-bold text-brand">
                Project gallery
                {linkArrow}
              </Link>
            </div>
          </div>
          <div className="mt-12">
            <PipeRow>
              <ol className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-5">
                {sequence.map(({ step, photo }, i) => (
                  <li key={step}>
                    {/* Circle sits on the pipe. The label goes below it, never on the line. */}
                    <div className="mb-4 font-display font-extrabold text-navy">
                      <span
                        aria-hidden
                        className="tabular relative z-10 grid size-[2.75rem] shrink-0 place-items-center rounded-full border-[3px] border-brand bg-white text-lg text-brand"
                      >
                        {i + 1}
                      </span>
                      <span className="mt-3 block text-lg">{step}</span>
                    </div>
                    <PhotoFrame photo={photo} aspect="3 / 4" caption revealDelay={i * 110} sizes="(min-width: 1024px) 300px, 46vw" />
                  </li>
                ))}
              </ol>
            </PipeRow>
          </div>
        </div>
      </section>

      {/* Why: evidence of unequal weight, not a grid of equal tiles */}
      <section aria-labelledby="why-title" className="section-y bg-surface">
        <div className="container-site grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <SectionHeading id="why-title" title="Why customers stick with Brett Sabol" />
            <div className="mt-10 border-t-[3px] border-navy pt-6">
              <p className="font-semibold text-muted">Master Plumber license</p>
              <p className="tabular mt-1 font-display text-[clamp(3.6rem,2rem+5.5vw,6rem)] font-black leading-[0.95] text-navy wide">#43391</p>
              <p className="mt-5 font-display text-[1.6rem] font-extrabold text-brand">Backflow certified</p>
              <p className="mt-3 max-w-md text-muted">
                More than 25 years of experience. When a problem is complicated, it gets a Master Plumber&apos;s judgment instead of a guess.
              </p>
            </div>
          </div>
          <div className="lg:pt-24">
            <figure>
              <blockquote className="font-display text-[1.35rem] font-semibold leading-snug text-navy sm:text-[1.55rem]">
                “He immediately sent his workers, and shortly after, he personally came to make sure everything was handled properly.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-subtle">
                From a customer review.{" "}
                <a href="#reviews-title" className="font-semibold text-brand underline-offset-4 hover:underline">
                  Read the full review
                </a>
              </figcaption>
            </figure>
            <dl className="mt-12 space-y-8">
              <div>
                <dt className="font-display text-h3 font-bold text-navy">One crew, from dig to patch</dt>
                <dd className="mt-2 text-muted">
                  The same company digs, replaces the pipe and restores the surface.{" "}
                  <a href="#dig-to-patch" className="font-semibold text-brand underline-offset-4 hover:underline">
                    See it in order
                  </a>
                  .
                </dd>
              </div>
              <div>
                <dt className="font-display text-h3 font-bold text-navy">Straight answers</dt>
                <dd className="mt-2 text-muted">
                  You hear what is wrong, what it will take and what can wait, in plain language, before any work starts.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* About the owner */}
      <section aria-labelledby="about-title" className="section-y">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[26rem] lg:mx-0">
            <PhotoFrame
              photo={photos.brettSons}
              aspect="9 / 14"
              position="50% 40%"
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 26rem, 92vw"
              frameClassName="shadow-[var(--shadow-lift)]"
            />
          </div>
          <div data-reveal>
            <SectionHeading id="about-title" title="A family business, run by the Master Plumber whose name is on the truck" />
            <div className="text-lead mt-6 space-y-5 text-muted">
              <p>
                Brett Sabol has more than 25 years of plumbing experience. What started as a one-man operation is now a trusted local company
                serving Bucks County, Montgomery County and Philadelphia, with a growing team and a fleet of fully equipped service vehicles.
              </p>
              <p>
                Behind it is a family. With the support of his wife and kids, Brett built the business on hard work and doing the job right the
                first time. The trucks got bigger. The focus did not change: honest, high-quality plumbing with a personal touch.
              </p>
            </div>
            <div className="mt-9">
              <ButtonLink href="/about" variant="navy" size="lg" icon={<ArrowRight aria-hidden className="size-[1.1em]" />}>
                Meet Brett and the family
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="reviews-title" className="on-navy section-y scroll-mt-28 bg-navy">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading id="reviews-title" tone="navy" title="In customers' own words" />
            <a
              href={business.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 font-display text-lg font-bold text-sky hover:text-white"
            >
              Read reviews on Google
              <ArrowUpRight aria-hidden className="size-4.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="border-t border-white/15 pt-10" data-reveal>
              <QuoteBlock id="valentines-day" tone="navy" size="lg" />
            </div>
            <div className="border-t border-white/15 pt-10" data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
              <QuoteBlock id="second-opinion-sewer" tone="navy" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section aria-labelledby="areas-title" className="section-y">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHeading
              id="areas-title"
              title="Serving Bucks County, Montgomery County and Philadelphia"
              intro="The shop is on Philmont Avenue in Feasterville-Trevose, which puts all three areas a short drive away."
            />
            <div className="lg:justify-self-end lg:pb-2">
              <ButtonLink href="/service-areas" variant="outline" size="md" icon={<ArrowRight aria-hidden className="size-4" />}>
                All service areas
              </ButtonLink>
            </div>
          </div>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <AreaColumns layout="stack" />
            <MapEmbed aspect="4 / 4" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="section-y bg-surface">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading id="faq-title" title="Questions people ask before they call" intro="Something else on your mind? The fastest answer is a phone call." />
            <div className="mt-8">
              <CallButton variant="navy" />
            </div>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <ContactPanel />

      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
