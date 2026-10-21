import type { Metadata } from "next";
import { Droplets, Siren, Thermometer, Waves } from "lucide-react";
import { fullAddress } from "@/content/business";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactPanel } from "@/components/sections/ContactPanel";
import { CheckList } from "@/components/sections/Lists";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallButton } from "@/components/ui/CallButton";
import { MapEmbed } from "@/components/sections/MapEmbed";

export const metadata: Metadata = pageMetadata({
  title: "Contact Brett Sabol Plumbing | Feasterville-Trevose, PA",
  absoluteTitle: true,
  description:
    "Call 215.666.3086, email or send a request to Brett Sabol Plumbing, 421 Philmont Ave, Feasterville-Trevose, PA. 24-hour emergency service is available.",
  path: "/contact",
});

const emergencies = [
  { icon: Droplets, t: "Burst pipe or major leak", d: "Shut off the main water valve if you can do it safely, then call." },
  { icon: Waves, t: "Sewage backing up", d: "Stop running water and flushing toilets, then call." },
  { icon: Thermometer, t: "No heat in cold weather", d: "Note any error lights or unusual noises from the boiler, then call." },
];

export default function ContactPage() {
  return (
    <>
      <div className="border-b border-line bg-white">
        <div className="container-site py-5">
          <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
        </div>
      </div>

      <ContactPanel
        headingLevel="h1"
        title="Contact Brett Sabol Plumbing"
        intro="Call the shop, send an email, or use the form to request a quote or a service visit. We will get back to you as soon as possible."
      />

      <section aria-labelledby="contact-emergency" className="on-navy section-y bg-navy">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Siren aria-hidden className="size-9 text-[#ff6b6f]" strokeWidth={1.8} />
            <SectionHeading
              id="contact-emergency"
              tone="navy"
              className="mt-5"
              title="Plumbing emergency? Call, do not email."
              intro="24-hour emergency service is available. For anything urgent, call. The phone is the fastest way to reach the shop."
            />
            <div className="mt-8">
              <CallButton />
            </div>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-md bg-white/15">
            {emergencies.map(({ icon: Icon, t, d }) => (
              <li key={t} className="flex gap-4 bg-navy p-6">
                <Icon aria-hidden className="mt-1 size-6 shrink-0 text-sky" strokeWidth={1.9} />
                <div>
                  <h3 className="font-display text-h3 font-bold text-white">{t}</h3>
                  <p className="mt-1.5 text-on-navy">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="contact-tips" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            id="contact-tips"
            title="What helps us help you"
            intro="A few details up front mean a faster, more useful first conversation."
          />
          <CheckList
            className="lg:pt-3"
            items={[
              "What is happening, and when it started",
              "Where it is: which fixture, floor or part of the property",
              "Whether it is a home or a commercial property",
              "Your town or ZIP code",
              "The best number to reach you, and the best time",
            ]}
          />
        </div>
      </section>

      <section aria-labelledby="contact-map" className="section-y border-t border-line bg-surface">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            id="contact-map"
            title="Find the shop"
            intro={`${fullAddress}. Office hours are Monday to Friday, 8 am to 5 pm, and weekends by appointment.`}
          />
          <MapEmbed aspect="16 / 10" />
        </div>
      </section>
    </>
  );
}
