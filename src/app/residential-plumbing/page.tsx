import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoFrame } from "@/components/sections/PhotoFrame";
import { CheckList, RelatedServices, ServiceRows } from "@/components/sections/Lists";
import { QuoteBlock } from "@/components/sections/QuoteBlock";
import { FaqList, type Faq } from "@/components/sections/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PATH = "/residential-plumbing";
const DESCRIPTION =
  "Residential plumbing repairs, water heaters, drain cleaning, leak detection and toilets from Master Plumber Brett Sabol in Bucks, Montgomery and Philadelphia.";

export const metadata: Metadata = pageMetadata({
  title: "Residential Plumber in Bucks County, PA | Brett Sabol",
  absoluteTitle: true,
  description: DESCRIPTION,
  path: PATH,
});

const services = [
  {
    title: "Plumbing repairs",
    text: "Fast, reliable repairs for leaks, broken pipes and the everyday problems that keep a house from working the way it should. The goal is a repair that holds, not one you see again next month.",
  },
  {
    title: "Water heater services",
    text: "Repair and installation of standard tank and tankless water heaters for steady, dependable hot water. If yours is leaking at the base or running out fast, it is worth a look before it fails.",
  },
  {
    title: "Sewer and drain jetting",
    text: "High-powered water jetting removes tough blockages and buildup from drain and sewer lines when a snake is not enough.",
  },
  {
    title: "Pipe repair and replacement",
    text: "Damaged, aging or corroded pipes repaired or replaced to improve water flow and head off the next leak.",
  },
  {
    title: "Drain cleaning",
    text: "Clogged and slow drains cleared with professional tools that restore proper flow and help stop the same clog from coming back.",
  },
  {
    title: "Fixture installation",
    text: "Faucets, sinks, toilets and more, installed right for long-lasting performance.",
  },
  {
    title: "Leak detection",
    text: "Hidden leaks found early, before they cause water damage, high bills and costly repairs inside walls and floors.",
  },
  {
    title: "Toilet repair and installation",
    text: "Running, leaking or clogged toilets fixed, or an old one replaced with a new, efficient model installed the right way.",
  },
];

const signs = [
  "Water stains on a ceiling or wall, or a soft spot in the floor",
  "A water bill that climbs without a reason",
  "Low water pressure at more than one faucet",
  "Drains that gurgle or slow down in more than one fixture",
  "A toilet that runs on its own or rocks on the floor",
  "Rusty or discolored hot water, or water pooling under the water heater",
  "The sound of running water when everything is off",
];

const steps = [
  { t: "Call or send a request", d: "Tell us what is happening. If water is coming in, call. The phone is the fastest way to get help." },
  { t: "Find the real problem", d: "A Master Plumber's experience goes into figuring out the cause, so you fix it once instead of chasing symptoms." },
  { t: "Hear your options", d: "You get an honest recommendation and a clear explanation of what it will take before work starts." },
  { t: "Get it fixed properly", d: "The work is done with the same care Brett expects in his own home, and built to last." },
];

const faqs: Faq[] = [
  {
    q: "How can I tell if I have a hidden leak?",
    a: "Common signs are a water bill that rises for no reason, stains or bubbling paint on walls and ceilings, a musty smell, or the sound of water running when nothing is on. If you notice any of these, call. Finding a leak early is far cheaper than repairing the damage later.",
  },
  {
    q: "Should I repair my water heater or replace it?",
    a: "It depends on the age of the unit, what failed and whether the tank itself is leaking. A failed part on a newer heater is often worth repairing. A tank that leaks from the bottom usually means replacement. We will tell you honestly which makes sense.",
  },
  {
    q: "Do you install tankless water heaters?",
    a: "Yes. We install and repair both standard tank and tankless water heaters. Tankless units heat water on demand, while tank units store a supply. We can walk you through which fits your home and how you use hot water.",
  },
  {
    q: "Why does my toilet keep running?",
    a: "Usually a worn flapper, a fill valve that will not shut off, or a chain or float that is out of adjustment. It wastes a surprising amount of water. Many fixes are quick, and if the toilet is old or cracked, replacement with an efficient model may be the better move.",
  },
  {
    q: "Is a clogged drain an emergency?",
    a: "A single slow sink usually is not. Several drains backing up at once, or sewage coming up through a floor drain or tub, points to a main line problem and should be handled right away. 24-hour emergency service is available at 215.666.3086.",
  },
];

export default function ResidentialPlumbingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Residential Plumbing", path: PATH }]}
        title={
          <>
            Residential plumbing in <span className="text-brand">Bucks, Montgomery and Philadelphia</span>
          </>
        }
        lead={
          <p>
            From a leaking shutoff valve to a new tankless water heater, Master Plumber Brett Sabol and his crew handle the plumbing that keeps
            your home running. Every job gets honest recommendations and a fix that is meant to last.
          </p>
        }
        photo={photos.toilet}
        photoPosition="40% 50%"
        aside={
          <p className="mt-4 text-sm text-subtle">
            {photos.toilet.caption} Master Plumber Lic. #43391.
          </p>
        }
      />

      {/* Services */}
      <section id="repairs" aria-labelledby="res-services" className="section-y scroll-mt-28">
        <div className="container-site">
          <SectionHeading
            id="res-services"
            title="What we take care of in your home"
            intro="As a Master Plumber, Brett knows that no two homes, and no two plumbing problems, are the same. That is why every job is approached with a focus on long-term solutions, not quick fixes."
          />
          <div className="mt-12">
            <ServiceRows items={services} />
          </div>
        </div>
      </section>

      {/* Signs */}
      <section aria-labelledby="res-signs" className="section-y border-y border-line bg-surface">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              id="res-signs"
              title="Small signs that are worth a call"
              intro="Most big plumbing repairs start as something easy to ignore. If you notice any of these, it is cheaper to have it checked now than to fix the damage later."
            />
            <CheckList items={signs} className="mt-9" />
          </div>
          <PhotoFrame
            photo={photos.copperValves}
            aspect="4 / 3"
            caption
            sizes="(min-width: 1024px) 520px, 92vw"
            className="mx-auto w-full max-w-[40rem]"
          />
        </div>
      </section>

      {/* Water heaters */}
      <section id="water-heaters" aria-labelledby="res-wh" className="section-y scroll-mt-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <PhotoFrame
            photo={photos.homeWaterHeater}
            aspect="4 / 5"
            caption
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 420px, 92vw"
            className="mx-auto w-full max-w-[26rem]"
          />
          <div>
            <SectionHeading
              id="res-wh"
              title="Hot water you can count on, tank or tankless"
              intro="Running out of hot water, rumbling noises, rusty water or a puddle under the tank are all signs a water heater needs attention. We repair and install standard tank and tankless water heaters, and size the replacement to how your household actually uses hot water."
            />
            <Link href="/heating#water-heaters" className="group mt-8 inline-flex items-center gap-2 font-display text-lg font-bold text-brand">
              More on water heaters and boilers
              <ArrowRight aria-hidden className="size-4.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="res-process" className="on-navy section-y bg-navy">
        <div className="container-site">
          <SectionHeading id="res-process" tone="navy" title="What happens when you call" />
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

      {/* Review + FAQ */}
      <section aria-labelledby="res-faq" className="section-y">
        <div className="container-site grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <QuoteBlock id="valentines-day" size="lg" />
          </div>
          <div>
            <h2 id="res-faq" className="text-h2 font-extrabold wide text-navy">
              Homeowner questions
            </h2>
            <div className="mt-8">
              <FaqList items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Plumbing problem at home? Talk to a Master Plumber."
        text="Call the shop for anything urgent, or send a request with a few details and we will get back to you as soon as possible."
      />
      <RelatedServices current={PATH} />

      <JsonLd
        data={[
          serviceSchema({
            name: "Residential Plumbing",
            serviceType: "Residential plumbing",
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
