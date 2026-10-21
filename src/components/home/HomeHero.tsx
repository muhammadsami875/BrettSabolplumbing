import type { CSSProperties } from "react";
import { ClipboardCheck, MapPin } from "lucide-react";
import { photos } from "@/content/photos";
import { ButtonLink } from "@/components/ui/Button";
import { CallButton } from "@/components/ui/CallButton";
import { Credentials } from "@/components/sections/Credentials";
import { PhotoFrame } from "@/components/sections/PhotoFrame";

const line = (i: number, bar: string): CSSProperties => ({ ["--vinyl-i" as string]: i, ["--vinyl-bar" as string]: bar });

export function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      {/* Truck livery stripe along the bottom edge: blue, then red. */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 flex h-1.5">
        <span className="flex-[3] bg-brand" />
        <span className="flex-1 bg-red" />
      </div>

      <div className="container-site relative grid items-center gap-12 pt-10 pb-14 sm:pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pt-9 lg:pb-10">
        <div>
          {/* The H1 is set like the lettering on the company trucks. */}
          <h1 id="hero-title" className="font-display leading-[0.9] tracking-[-0.025em]">
            <span className="vinyl-line text-hero font-black wide" style={line(0, "var(--color-navy)")}>
              <span className="vinyl-ink text-brand">Plumbing</span>
            </span>{" "}
            <span className="vinyl-line mt-1 text-hero font-black wide" style={line(1, "var(--color-brand)")}>
              <span className="vinyl-ink">
                <span className="text-red">Heating</span> <span className="text-brand">&amp;</span>
              </span>
            </span>{" "}
            <span className="vinyl-line mt-2 font-semibold tracking-[-0.01em]" style={{ ...line(2, "var(--color-red)"), fontSize: "var(--text-hero-sub)" }}>
              <span className="vinyl-ink text-navy">Jet Drain Cleaning</span>
            </span>{" "}
            <span className="mt-5 flex items-start gap-2 text-[1.05rem] font-bold leading-snug tracking-normal text-ink sm:text-[1.15rem]">
              <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-brand" strokeWidth={2.2} />
              <span>
                in Bucks County, Montgomery County <span className="whitespace-nowrap">and Philadelphia</span>
              </span>
            </span>
          </h1>

          <p className="text-lead mt-5 max-w-xl text-muted">
            Master Plumber Brett Sabol and his family-owned crew fix leaks, clear drains and sewer lines, and keep water heaters and boilers
            running for homes and businesses.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <ButtonLink href="#quote" variant="outline" size="lg" icon={<ClipboardCheck aria-hidden className="size-[1.1em]" strokeWidth={2} />}>
              Request a quote
            </ButtonLink>
          </div>

          <Credentials className="mt-7 border-t border-line pt-6" />
        </div>

        <div className="relative lg:pl-4">
          <PhotoFrame
            photo={photos.truckVan}
            priority
            sizes="(min-width: 1280px) 600px, (min-width: 1024px) 46vw, 94vw"
            frameClassName="shadow-[var(--shadow-lift)]"
          />
          {/* Sits below the photo, never over it. */}
          <figure className="hero-card mt-4 rounded-md bg-navy p-5 text-white sm:p-6">
            <blockquote className="font-display text-[1.15rem] font-semibold leading-snug">
              “Even though it was Valentine’s Day, the owner answered the phone within two minutes of our call.”
            </blockquote>
            <figcaption className="mt-3 flex items-center gap-2.5 text-sm text-on-navy">
              <span aria-hidden className="h-px w-6 bg-sky" />
              From a customer review
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
