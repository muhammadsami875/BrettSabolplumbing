import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
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

const PATH = "/jet-drain-cleaning";
const DESCRIPTION =
  "Hydro jetting and jet drain cleaning for homes and businesses in Bucks County, Montgomery County and Philadelphia. Clears grease, sludge, roots and clogs.";

export const metadata: Metadata = pageMetadata({
  title: "Jet Drain Cleaning & Hydro Jetting in Bucks County",
  absoluteTitle: true,
  description: DESCRIPTION,
  path: PATH,
});

const services = [
  { title: "Clog and blockage removal", text: "Breaks through stubborn clogs and buildup that standard drain cleaning cannot fully remove." },
  { title: "Grease and buildup removal", text: "Cuts through grease, sludge and the buildup that collects over time and narrows the inside of the pipe." },
  { title: "Sewer line jetting", text: "Clears main sewer lines of grease, debris and buildup to restore flow and prevent backups into the house or building." },
  { title: "Root intrusion clearing", text: "Removes tree roots and invasive growth from sewer lines to restore function and cut down on repeat blockages." },
  { title: "Preventative maintenance", text: "Routine jetting keeps drains and sewer lines clean and helps avoid costly problems down the line." },
  { title: "Safe, non-invasive cleaning", text: "High-pressure water is tough on buildup without cutting blades, which suits sound pipes well." },
];

const compare = [
  { label: "Opens a path through the clog", snake: true, jet: true },
  { label: "Scours grease and sludge off the pipe walls", snake: false, jet: true },
  { label: "Clears the full length of the line", snake: false, jet: true },
  { label: "Cuts out root intrusion", snake: "partly", jet: true },
  { label: "Good first step for a single slow fixture", snake: true, jet: false },
];

const faqs: Faq[] = [
  {
    q: "Is hydro jetting safe for my pipes?",
    a: "On sound pipes, yes. It uses water, not blades, to scour buildup away. Very old, cracked or collapsed pipe is a different story, which is why the condition of the line matters before jetting. If a pipe is damaged, it needs repair rather than more pressure.",
  },
  {
    q: "How is jetting different from snaking a drain?",
    a: "A snake (an auger) bores a hole through the clog so water can pass. Jetting cleans the inside of the pipe wall along the whole run, removing the grease, sludge and roots that caused the clog in the first place. That is why jetted lines tend to stay clear longer.",
  },
  {
    q: "Can jetting remove tree roots from a sewer line?",
    a: "Yes. Root intrusion clearing is one of the main reasons for sewer line jetting. If roots have broken or crushed the pipe, though, the damaged section has to be repaired or replaced.",
  },
  {
    q: "How often should a line be jetted?",
    a: "It depends on how the line is used. A heavy-use commercial line or a sewer line with a history of roots may benefit from routine jetting. A home drain that clogged once may never need it again. After jetting, we will tell you what we saw.",
  },
  {
    q: "Do you jet drains for homes or just businesses?",
    a: "Both. Jet drain cleaning is offered for residential and light commercial properties, from a kitchen line that keeps clogging to the main sewer line serving a building.",
  },
];

export default function JetDrainCleaningPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Jet Drain Cleaning", path: PATH }]}
        title={
          <>
            Jet drain cleaning for the clogs that <span className="text-brand">keep coming back</span>
          </>
        }
        lead={
          <p>
            Professional jet drain cleaning tackles the clogs and buildup that ordinary methods leave behind. High-pressure water clears grease,
            sludge, roots and debris from your pipes and restores full flow, for homes and light commercial properties.
          </p>
        }
        photo={photos.sewerDig}
        photoPosition="50% 45%"
      />

      {/* How it works */}
      <section aria-labelledby="jet-how" className="section-y">
        <div className="container-site grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading
              id="jet-how"
              title="How hydro jetting works, in plain terms"
              intro="A jetting machine pushes water at very high pressure through a hose and a specialized nozzle. The nozzle pulls itself down the pipe while rear-facing jets scrub the walls clean behind it."
            />
            <div className="text-lead mt-6 space-y-5 text-muted">
              <p>
                Most clogs are not a single object. They are years of grease, soap, sludge and debris narrowing the pipe until it finally closes.
                A snake can punch a hole through that, but the buildup is still there, and the clog comes back.
              </p>
              <p>
                Jetting removes the buildup itself, along the full length of the line. Whether it is a recurring drain problem or a major blockage
                in a sewer line, jetting gives a deep clean that helps prevent the next backup.
              </p>
            </div>
          </div>
          <div className="lg:pt-3">
            <PhotoFrame photo={photos.thumbSewerWater} aspect="3 / 4" caption sizes="240px" className="w-full max-w-[15rem]" />
            <p className="mt-6 max-w-sm text-muted">
              A diagnosis comes first. The right fix depends on what is causing the backup and where, and some problems call for a repair
              instead of more pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section aria-labelledby="jet-compare" className="section-y border-y border-line bg-surface">
        <div className="container-site">
          <SectionHeading id="jet-compare" title="Snaking or jetting?" intro="Both have a place. Here is the honest difference." />
          {/* Phones: stacked rows instead of a sideways-scrolling table. */}
          <ul className="mt-10 divide-y divide-line rounded-md border border-line bg-white sm:hidden">
            {compare.map((row) => (
              <li key={row.label} className="p-5">
                <p className="font-semibold text-ink">{row.label}</p>
                <p className="mt-2 flex gap-6 text-sm">
                  <span>
                    <span className="text-subtle">Snake: </span>
                    <span className="font-semibold text-ink">{row.snake === true ? "Yes" : row.snake === "partly" ? "Partly" : "No"}</span>
                  </span>
                  <span>
                    <span className="text-subtle">Jetting: </span>
                    <span className={`font-semibold ${row.jet ? "text-success" : "text-ink"}`}>{row.jet ? "Yes" : "No"}</span>
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-10 hidden overflow-hidden rounded-md border border-line bg-white sm:block">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Comparison of drain snaking and hydro jetting</caption>
              <thead>
                <tr className="border-b border-line bg-brand-50">
                  <th scope="col" className="px-5 py-4 font-display font-bold text-navy sm:px-7">
                    What it does
                  </th>
                  <th scope="col" className="w-36 px-5 py-4 text-center font-display font-bold text-navy">
                    Snake
                  </th>
                  <th scope="col" className="w-36 px-5 py-4 text-center font-display font-bold text-navy">
                    Jetting
                  </th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.label} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-4 font-medium text-ink sm:px-7">
                      {row.label}
                    </th>
                    {[row.snake, row.jet].map((v, i) => (
                      <td key={i} className="px-5 py-4 text-center">
                        {v === true ? (
                          <span className="inline-flex items-center gap-1.5 font-semibold text-success">
                            <Check aria-hidden className="size-5" strokeWidth={2.6} />
                            Yes
                          </span>
                        ) : v === "partly" ? (
                          <span className="font-semibold text-muted">Partly</span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-subtle">
                            <Minus aria-hidden className="size-5" />
                            No
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="jet-services" className="section-y">
        <div className="container-site">
          <SectionHeading id="jet-services" title="What jet drain cleaning takes care of" />
          <div className="mt-12">
            <ServiceRows items={services} />
          </div>
        </div>
      </section>

      {/* When not to jet */}
      <section aria-labelledby="jet-not" className="on-navy section-y bg-navy">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              id="jet-not"
              tone="navy"
              title="When jetting is not the answer"
              intro="If a sewer line is broken, crushed or separated, no amount of cleaning will fix it. Jetting a damaged pipe can make it worse. In that case the right move is a repair: finding the damaged section, digging to it and replacing the pipe."
            />
            <Link href="/sewer-line-repair" className="group mt-8 inline-flex items-center gap-2 font-display text-lg font-bold text-sky hover:text-white">
              Sewer line repair
              <ArrowRight aria-hidden className="size-4.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="border-t border-white/15 pt-10">
            <QuoteBlock id="second-opinion-sewer" tone="navy" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="jet-faq" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading id="jet-faq" title="Jet drain cleaning questions" intro="Ask us anything else when you call." />
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Same clog again? Get the line jetted."
        text="Call to describe the backup, or send a request. For sewage coming up through a floor drain or tub, call right away."
      />
      <RelatedServices current={PATH} />

      <JsonLd
        data={[
          serviceSchema({
            name: "Jet Drain Cleaning",
            serviceType: "Hydro jetting",
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
