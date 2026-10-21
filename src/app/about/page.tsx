import type { Metadata } from "next";
import { photos } from "@/content/photos";
import { business } from "@/content/business";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoFrame } from "@/components/sections/PhotoFrame";
import { Credentials } from "@/components/sections/Credentials";
import { QuoteBlock } from "@/components/sections/QuoteBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallButton } from "@/components/ui/CallButton";

export const metadata: Metadata = pageMetadata({
  title: "About Brett Sabol, Master Plumber | Family-Owned Plumbing",
  absoluteTitle: true,
  description:
    "Meet Brett Sabol, a Master Plumber with more than 25 years' experience who grew a one-man operation into a family-owned plumbing company in Feasterville-Trevose, PA.",
  path: "/about",
});

const values = [
  {
    t: "Honesty",
    d: "You hear what is actually wrong and what it will take to fix it. If something can wait, you hear that too.",
  },
  {
    t: "Doing it right the first time",
    d: "A fix that has to be redone is not a fix. Every job is approached with long-term results in mind, whatever the size.",
  },
  {
    t: "Respect for your home",
    d: "Brett treats every home and business the way he expects his own to be treated, with care and attention to detail.",
  },
  {
    t: "Clear communication",
    d: "Plumbing problems are stressful and disruptive. Knowing who is coming, what they found and what happens next makes it easier.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="container-site relative grid items-center gap-12 py-10 sm:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-20">
          <div className="relative mx-auto w-full max-w-[24rem] lg:mx-0">
            <PhotoFrame
              photo={photos.brettSons}
              aspect="9 / 14"
              position="50% 40%"
              priority
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 24rem, 92vw"
              frameClassName="shadow-[var(--shadow-lift)]"
            />
          </div>
          <div>
            <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
            <h1 className="text-display mt-6 font-black wide text-navy">
              Meet Brett Sabol, <span className="text-brand">Master Plumber</span> and family man
            </h1>
            <div className="text-lead mt-6 max-w-2xl space-y-5 text-muted">
              <p>
                Brett Sabol is a Master Plumber with more than 25 years of experience, built on quality work and a commitment to doing things the
                right way. What started as a one-man operation has grown into a trusted local plumbing company serving Bucks County, Montgomery
                County and Philadelphia.
              </p>
              <p>
                As a skilled tradesman and a family man, Brett takes pride in the work he does and the reputation he has built. Today he leads a
                growing team, and he still approaches every job with the care he would expect in his own home.
              </p>
            </div>
            <div className="mt-8">
              <CallButton />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section aria-label="Credentials" className="border-b border-line">
        <div className="container-site py-10">
          <Credentials />
        </div>
      </section>

      {/* Family */}
      <section aria-labelledby="about-family" className="section-y">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              id="about-family"
              title="Family-owned and operated"
              intro="Behind every successful business is a strong foundation. For Brett, that foundation is family."
            />
            <div className="text-lead mt-6 space-y-5 text-muted">
              <p>
                With the support of his wife and children, the company has grown into a well-established operation built on hard work, dedication
                and trust. As a family-oriented business owner, Brett understands the importance of trust, respect and doing the job right the
                first time.
              </p>
              <p>
                When you call, you are not just getting a plumber. You are getting someone who treats your home or business like his own.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PhotoFrame photo={photos.brettSon} aspect="3 / 4" caption sizes="(min-width: 1024px) 260px, 46vw" />
            <PhotoFrame photo={photos.family} aspect="3 / 4" position="50% 35%" caption sizes="(min-width: 1024px) 260px, 46vw" className="mt-12" />
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section aria-labelledby="about-fleet" className="on-navy section-y bg-navy">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <SectionHeading id="about-fleet" tone="navy" title="From a single truck to a fleet" />
            <p className="text-lead text-on-navy lg:pb-2">
              The business has expanded from one truck to a fleet of fully equipped service vehicles, to serve the community with faster response
              times and more complete service. Even with that growth, the focus is the same: honest, high-quality plumbing with a personal touch.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-[1.4fr_1fr_0.8fr]">
            <PhotoFrame photo={photos.truckVan} tone="navy" aspect="16 / 11" caption sizes="(min-width: 768px) 45vw, 92vw" />
            <PhotoFrame photo={photos.truckBox} tone="navy" aspect="25 / 24" caption sizes="(min-width: 768px) 32vw, 92vw" />
            <PhotoFrame photo={photos.kenworth} tone="navy" aspect="5 / 6" caption sizes="(min-width: 768px) 25vw, 92vw" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="about-values" className="section-y">
        <div className="container-site">
          <SectionHeading
            id="about-values"
            title="What every job is built on"
            intro="Whether it is a simple repair or a complex problem that needs a Master Plumber's expertise, the standard does not change."
          />
          <ul className="mt-12 grid gap-x-12 sm:grid-cols-2">
            {values.map((v, i) => (
              <li key={v.t} className="border-t border-line py-7" data-reveal style={{ ["--reveal-delay" as string]: `${(i % 2) * 80}ms` }}>
                <h3 className="font-display text-h3 font-bold text-navy">{v.t}</h3>
                <p className="mt-2 text-muted">{v.d}</p>
              </li>
            ))}
          </ul>
          <p className="text-lead mt-10 max-w-3xl text-muted">
            By combining experience with modern tools and proven techniques, Brett and the team complete each project efficiently and to a high
            standard. That consistency is what has built lasting relationships with customers throughout the communities {business.shortName}{" "}
            serves.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section aria-labelledby="about-reviews" className="section-y border-t border-line bg-surface">
        <div className="container-site">
          <SectionHeading id="about-reviews" title="What customers say" />
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <QuoteBlock id="valentines-day" />
            <QuoteBlock id="second-opinion-sewer" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Work with a Master Plumber who answers for his work."
        text="Call the shop in Feasterville-Trevose, or send a request and we will get back to you as soon as possible."
      />
    </>
  );
}
