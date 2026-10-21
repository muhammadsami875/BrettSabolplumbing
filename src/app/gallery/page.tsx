import type { Metadata } from "next";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GalleryLightbox } from "@/components/sections/GalleryLightbox";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = pageMetadata({
  title: "Project Gallery | Brett Sabol Plumbing, Heating & Jet Drain",
  absoluteTitle: true,
  description:
    "Photos from real Brett Sabol Plumbing jobs: sewer line excavations, water heater installs, radiant heat, bathroom fixtures and the restoration work after a dig.",
  path: "/gallery",
});

const main = [
  photos.sewerSnow,
  photos.heaterRoom,
  photos.crewCleanouts,
  photos.toilet,
  photos.radiant,
  photos.drivewayRestore,
  photos.sewerDig,
  photos.copperValves,
  photos.sidewalkRestore,
  photos.homeWaterHeater,
  photos.yardDig,
  photos.restroom,
  photos.truckBox,
];

const digSeries = [photos.thumbShoring, photos.thumbSewerWater, photos.thumbBackhoe, photos.thumbStump, photos.thumbTrench, photos.thumbPvcTruck];

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="container-site py-10 sm:py-14 lg:py-16">
          <Breadcrumbs items={[{ name: "Gallery", path: "/gallery" }]} />
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="text-display font-black wide text-navy">
              Our work, <span className="text-brand">photographed on the job</span>
            </h1>
            <p className="text-lead text-muted lg:pb-2">
              From lighter repairs to major installations and sewer digs, every job is done correctly and, most importantly, safely. Tap any photo
              to see it larger.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Project photos" className="section-y pt-12">
        <div className="container-site">
          <GalleryLightbox idPrefix="gallery-main" items={main} columns="columns-1 xs:columns-2 lg:columns-3" />
        </div>
      </section>

      <section aria-labelledby="dig-series" className="section-y border-t border-line bg-surface">
        <div className="container-site">
          <SectionHeading
            id="dig-series"
            title="From the excavation files"
            intro="Smaller photos from sewer and water line digs: shoring the trench, laying new pipe and pulling out what was in the way. Shown at their original size."
          />
          <div className="mt-10">
            <GalleryLightbox
              idPrefix="gallery-dig"
              items={digSeries}
              layout="grid"
              aspect="3 / 4"
              columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 max-w-[31rem] sm:max-w-[47rem] lg:max-w-none"
              sizes="240px"
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Want this crew on your job?"
        text="Call the shop to talk through what you need, or send a request with a few details and we will get back to you as soon as possible."
      />
    </>
  );
}
