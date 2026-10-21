import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { business, fullAddress, serviceAreas } from "@/content/business";
import { serviceLinks } from "@/content/navigation";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { AreaColumns } from "@/components/sections/AreaColumns";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/sections/MapEmbed";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas: Bucks, Montgomery & Philadelphia | Brett Sabol",
  absoluteTitle: true,
  description:
    "Brett Sabol Plumbing serves Bucks County, Montgomery County and Philadelphia from Feasterville-Trevose, including Bensalem, Huntingdon Valley and the Northeast.",
  path: "/service-areas",
});

const areaText: Record<string, string> = {
  "bucks-county":
    "Bucks County is home. The shop sits on Philmont Avenue in Feasterville-Trevose, so Lower Bucks towns like Bensalem, Southampton, Holland and Langhorne are close, and the service reaches further into the county from there.",
  "montgomery-county":
    "Eastern Montgomery County is next door to Feasterville. Huntingdon Valley, Hatboro, Abington, Jenkintown and the towns around them get the same Master Plumber standard as customers in Bucks.",
  philadelphia:
    "Philadelphia is part of the service area too, especially the Northeast neighborhoods closest to the shop, such as Somerton, Bustleton, Fox Chase and Torresdale.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Service Areas", path: "/service-areas" }]}
        title={
          <>
            Plumbing across <span className="text-brand">Bucks County, Montgomery County</span> and Philadelphia
          </>
        }
        lead={
          <p>
            Brett Sabol Plumbing, Heating &amp; Jet Drain Cleaning works out of {fullAddress}. From there, the trucks cover homes and businesses
            across three areas.
          </p>
        }
        photo={photos.truckBox}
        photoAspect="1 / 1"
        photoPosition="0% 50%"
      />

      <section aria-labelledby="areas-list" className="section-y">
        <div className="container-site">
          <SectionHeading
            id="areas-list"
            title="Where we work"
            intro="The communities listed are examples, not the full list. If your town is not named, call and ask."
          />
          <div className="mt-14">
            <AreaColumns headingLevel="h3" />
          </div>
        </div>
      </section>

      <section aria-labelledby="areas-detail" className="section-y border-y border-line bg-surface">
        <div className="container-site">
          <SectionHeading id="areas-detail" title="Each area, in detail" intro="Towns, local plumbing issues and answers for each county." />
          <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-3">
            {serviceAreas.map((a) => (
              <article key={a.id} className="border-t-[3px] border-brand pt-6">
                <h3 className="flex items-center gap-2 font-display text-h3 font-extrabold text-navy">
                  <MapPin aria-hidden className="size-5 text-brand" strokeWidth={2.2} />
                  {a.name}
                </h3>
                <p className="mt-3 text-muted">{areaText[a.id]}</p>
                <Link
                  href={`/service-areas/${a.id}`}
                  className="group mt-5 inline-flex min-h-11 items-center gap-2 font-display text-lg font-bold text-brand"
                >
                  Plumbing in {a.name}
                  <ArrowRight aria-hidden className="size-4.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <MapEmbed aspect="16 / 8" />
          </div>
        </div>
      </section>

      <section aria-labelledby="areas-services" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            id="areas-services"
            title="The same services in every area"
            intro={`Residential and light commercial work, with 24-hour emergency service available across all three areas. Call ${business.phone.display}.`}
          />
          <ul className="border-t border-line">
            {serviceLinks.map((s) => (
              <li key={s.href} className="border-b border-line">
                <Link href={s.href} className="group flex items-center justify-between gap-4 py-5">
                  <span>
                    <span className="block font-display text-lg font-bold text-navy group-hover:text-brand">{s.label}</span>
                    <span className="mt-1 block text-muted">{s.blurb}</span>
                  </span>
                  <ArrowRight aria-hidden className="size-4.5 shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Not sure if you are in range? Ask."
        text="Call the shop with your town or ZIP code, or include it in a quote request."
      />
    </>
  );
}
