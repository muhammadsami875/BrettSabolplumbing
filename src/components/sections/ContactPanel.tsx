import { Clock3, Mail, MapPin, Phone, Siren } from "lucide-react";
import { business, fullAddress, hours } from "@/content/business";
import { ContactForm } from "@/components/forms/ContactForm";

type Props = {
  title?: string;
  intro?: string;
  headingLevel?: "h1" | "h2";
  defaultService?: string;
};

/** Contact details, hours and the quote request form. Anchor target: #quote. */
export function ContactPanel({
  title = "Request a quote or a service visit",
  intro = "Send a few details and we will get back to you as soon as possible. For anything urgent, calling is always fastest.",
  headingLevel = "h2",
  defaultService,
}: Props) {
  const H = headingLevel;
  // Checked on the server at build or request time. Without a key the form says so up front.
  const connected = Boolean(process.env.RESEND_API_KEY);
  return (
    <section id="quote" aria-labelledby="quote-title" className="section-y scroll-mt-28">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div data-reveal>
          <H id="quote-title" className={`${headingLevel === "h1" ? "text-display" : "text-h2"} font-extrabold wide text-navy`}>
            {title}
          </H>
          <p className="text-lead mt-5 text-muted">{intro}</p>

          <ul className="mt-9 space-y-6">
            <li>
              <a href={business.phone.href} className="group flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-sm bg-red text-white">
                  <Phone aria-hidden className="size-5" strokeWidth={2.2} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-subtle">Call the shop</span>
                  <span className="tabular block font-display text-[1.7rem] font-extrabold leading-tight text-navy group-hover:text-brand">
                    {business.phone.display}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="group flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-sm bg-brand-50 text-brand">
                  <Mail aria-hidden className="size-5" strokeWidth={2} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-subtle">Email</span>
                  <span className="block break-all font-semibold text-navy group-hover:text-brand group-hover:underline">{business.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-sm bg-brand-50 text-brand">
                  <MapPin aria-hidden className="size-5" strokeWidth={2} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-subtle">Shop address</span>
                  <span className="block font-semibold text-navy group-hover:text-brand group-hover:underline">{fullAddress}</span>
                </span>
              </a>
            </li>
          </ul>

          {/* Hours sit on the section ground (no box), with the emergency note as its own block below. */}
          <div className="mt-10 border-t border-line pt-7">
            <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-navy">
              <Clock3 aria-hidden className="size-5 text-brand" />
              Business hours
            </h3>
            <dl className="mt-4 divide-y divide-line text-[0.97rem]">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4 py-2">
                  <dt className="text-muted">{h.day}</dt>
                  <dd className="tabular font-semibold text-ink">{h.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-6 flex items-start gap-2.5 rounded-sm bg-red-50 p-4 text-sm text-ink">
              <Siren aria-hidden className="mt-0.5 size-4 shrink-0 text-red" />
              <span>
                <strong className="font-semibold">24-hour emergency service is available.</strong> For a burst pipe, sewer backup or no heat, call{" "}
                <a href={business.phone.href} className="tabular font-semibold underline">
                  {business.phone.display}
                </a>{" "}
                any time.
              </span>
            </p>
        </div>

        <div className="self-start rounded-md border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-9" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
          <h3 className="font-display text-h3 font-bold text-navy">Send a request</h3>
          {connected ? <p className="mb-6 mt-2 text-muted">Your request goes to the office inbox.</p> : <div className="mb-5" />}
          <ContactForm defaultService={defaultService} connected={connected} />
        </div>
      </div>
    </section>
  );
}
