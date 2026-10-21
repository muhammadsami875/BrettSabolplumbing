import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { photos, type Photo } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoFrame } from "@/components/sections/PhotoFrame";
import { CheckList, RelatedServices } from "@/components/sections/Lists";
import { QuoteBlock } from "@/components/sections/QuoteBlock";
import { FaqList, type Faq } from "@/components/sections/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PATH = "/sewer-line-repair";
const DESCRIPTION =
  "Sewer line repair and replacement in Bucks, Montgomery and Philadelphia, from finding the problem and digging to new pipe and restoring the yard or sidewalk.";

export const metadata: Metadata = pageMetadata({
  title: "Sewer Line Repair & Replacement | Brett Sabol Plumbing",
  absoluteTitle: true,
  description: DESCRIPTION,
  path: PATH,
});

const stages: { t: string; d: string; photos: Photo[] }[] = [
  {
    t: "Find the problem before anything is dug",
    d: "Not every backup means a broken pipe. Sometimes the line just needs to be cleared or jetted. When it is damaged, the work starts by pinning down where, so the dig is as small as it can be.",
    photos: [photos.thumbBackhoe, photos.yardDig],
  },
  {
    t: "Dig safely to the line",
    d: "Deep trenches get braced with shoring, like the one pictured, so the crew can work safely. Lawns, driveways and walks are opened only as far as the repair needs, in summer heat or winter snow.",
    photos: [photos.thumbShoring, photos.thumbTrench],
  },
  {
    t: "Repair or replace the pipe",
    d: "Damaged, aging or root-broken sections are replaced with new pipe, and cleanouts can be added so the line can be reached for clearing in the future without digging again.",
    photos: [photos.crewCleanouts, photos.sewerDig],
  },
  {
    t: "Put the property back together",
    d: "The trench is backfilled and compacted, and the yard, driveway or sidewalk patched, so the job is finished, not just the pipe.",
    photos: [photos.drivewayRestore, photos.sidewalkRestore],
  },
];

const signs = [
  "Several drains backing up or gurgling at the same time",
  "Sewage coming up through a basement floor drain or tub",
  "Sewer odor in the basement or the yard",
  "A soggy or sunken spot over the line in the yard",
  "Clogs that come back no matter how often they are cleared",
  "Large trees near the sewer line and a history of root problems",
];

const faqs: Faq[] = [
  {
    q: "Does a sewer backup always mean digging?",
    a: "No. Many backups are buildup, grease or roots that can be cleared or jetted without digging. Digging is for pipe that is broken, crushed or separated. Finding out which one you have comes first.",
  },
  {
    q: "Who fixes the yard, driveway or sidewalk afterwards?",
    a: "The same crew. After the pipe work, the trench is backfilled and compacted and the surface is patched, as you can see in the project photos.",
  },
  {
    q: "What is a sewer cleanout, and do I need one?",
    a: "A cleanout is a capped access pipe that lets a plumber reach the sewer line to clear it without going through the house or digging. If your line has none, or it is buried or hard to find, adding one during a repair makes future maintenance much easier.",
  },
  {
    q: "Another plumber said I need a full replacement. Can you take a look?",
    a: "Yes. A second look is worth it on a job this size. One of our customers called after another company said their pipe was broken, and the line was found, cleared and confirmed undamaged instead. Every situation is different, but you deserve a clear answer.",
  },
  {
    q: "Is a sewer backup an emergency?",
    a: "If sewage is coming into the house, yes. Stop running water and call 215.666.3086. 24-hour emergency service is available.",
  },
];

export default function SewerLineRepairPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Sewer Line Repair", path: PATH }]}
        title={
          <>
            Sewer line repair, from the first dig <span className="text-brand">to the last patch</span>
          </>
        }
        lead={
          <p>
            When a sewer line is broken, root-damaged or worn out, Brett Sabol&apos;s crew finds the problem, digs to it, replaces the pipe and
            puts your yard, driveway or sidewalk back together. One company, start to finish.
          </p>
        }
        photo={photos.sewerSnow}
        photoAspect="4 / 5"
      />

      {/* Signs */}
      <section aria-labelledby="sewer-signs" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <SectionHeading
            id="sewer-signs"
            title="Signs the problem is in the sewer line"
            intro="One slow sink is usually a local clog. When the whole house is affected, the main line is the suspect."
          />
          <CheckList items={signs} className="lg:pt-3" />
        </div>
      </section>

      {/* Stages */}
      <section aria-labelledby="sewer-stages" className="section-y border-t border-line bg-surface">
        <div className="container-site">
          <SectionHeading
            id="sewer-stages"
            title="How a sewer repair comes together"
            intro="Every photo below is from a real Brett Sabol job."
          />
          <ol className="mt-14 space-y-16 lg:space-y-20">
            {stages.map((s, i) => (
              <li key={s.t} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16" data-reveal>
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <span aria-hidden className="tabular font-display text-[2.6rem] font-black leading-none text-brand">
                    {String(i + 1)}
                  </span>
                  <h3 className="mt-3 font-display text-[1.6rem] font-extrabold leading-tight text-navy sm:text-[1.9rem]">{s.t}</h3>
                  <p className="text-lead mt-4 text-muted">{s.d}</p>
                </div>
                <div className={`grid grid-cols-2 gap-4 ${i % 2 ? "lg:order-1" : ""}`}>
                  {s.photos.map((p, j) => (
                    <PhotoFrame
                      key={p.caption}
                      photo={p}
                      aspect="3 / 4"
                      caption
                      sizes={p.src.width <= 240 ? "240px" : "(min-width: 1024px) 290px, 46vw"}
                      className={`${j === 1 ? "mt-10" : ""} ${p.src.width <= 240 ? "max-w-[15rem]" : ""}`}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Second opinion */}
      <section aria-labelledby="sewer-review" className="on-navy section-y bg-navy">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 id="sewer-review" className="text-h2 font-extrabold wide text-white">
              Worth a second opinion
            </h2>
            <p className="text-lead mt-5 text-on-navy">
              A sewer replacement is a big job. Before you agree to one, make sure it is really needed.
            </p>
            <Link href="/jet-drain-cleaning" className="group mt-8 inline-flex items-center gap-2 font-display text-lg font-bold text-sky hover:text-white">
              When jetting is enough
              <ArrowRight aria-hidden className="size-4.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          <QuoteBlock id="second-opinion-sewer" tone="navy" size="lg" />
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="sewer-faq" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading id="sewer-faq" title="Sewer line questions" />
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Sewer backing up? Call before it gets worse."
        text="Stop running water and call the shop. For a repair you are planning, send a request with what you are seeing."
      />
      <RelatedServices current={PATH} />

      <JsonLd
        data={[
          serviceSchema({
            name: "Sewer Line Repair and Replacement",
            serviceType: "Sewer line repair",
            description: DESCRIPTION,
            path: PATH,
            offers: ["Sewer line repair", "Sewer line replacement", "Excavation", "Cleanout installation", "Surface restoration"],
          }),
          faqSchema(faqs),
        ]}
      />
    </>
  );
}
