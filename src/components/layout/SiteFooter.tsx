import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { business, fullAddress, hours } from "@/content/business";
import { areaLinks, companyLinks, legalLinks, serviceLinks } from "@/content/navigation";
import { Logo } from "./Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-navy bg-navy text-on-navy">
      <div className="container-site grid gap-12 pt-16 pb-12 sm:pt-20 lg:grid-cols-[1.25fr_1fr_1fr_1.35fr] lg:gap-10">
        <div>
          <Logo tone="navy" />
          <p className="mt-6 max-w-sm leading-relaxed">
            Family-owned plumbing, heating and jet drain cleaning from Feasterville-Trevose, led by Master Plumber Brett Sabol.
          </p>
          <ul className="mt-6 space-y-1.5 text-sm font-semibold text-white">
            <li>{business.license}</li>
            <li>{business.backflow}</li>
            <li>{business.emergency}</li>
          </ul>
        </div>

        <nav aria-label="Services">
          <h2 className="font-display text-base font-bold text-white">Services</h2>
          <ul className="mt-4 space-y-1">
            {serviceLinks.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="inline-flex min-h-11 items-center transition-colors hover:text-white hover:underline lg:min-h-9">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="font-display text-base font-bold text-white">Company</h2>
          <ul className="mt-4 space-y-1">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center transition-colors hover:text-white hover:underline lg:min-h-9">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 font-display text-base font-bold text-white">Service areas</h2>
          <ul className="mt-3 space-y-1">
            {areaLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center transition-colors hover:text-white hover:underline lg:min-h-9">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-bold text-white">Contact the shop</h2>
          <ul className="mt-4 space-y-3.5">
            <li>
              <a href={business.phone.href} className="group flex items-start gap-3 text-white">
                <Phone aria-hidden className="mt-1 size-4 shrink-0 text-sky" />
                <span className="tabular font-display text-xl font-bold group-hover:underline">{business.phone.display}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="group flex items-start gap-3">
                <Mail aria-hidden className="mt-1 size-4 shrink-0 text-sky" />
                <span className="group-hover:text-white group-hover:underline">{business.email}</span>
              </a>
            </li>
            <li>
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3">
                <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-sky" />
                <span className="group-hover:text-white group-hover:underline">{fullAddress}</span>
              </a>
            </li>
          </ul>
          <div className="mt-6 flex items-start gap-3">
            <Clock3 aria-hidden className="mt-1 size-4 shrink-0 text-sky" />
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
              <dt>Mon to Fri</dt>
              <dd className="tabular text-white">{hours[0].hours}</dd>
              <dt>Sat and Sun</dt>
              <dd className="text-white">By appointment</dd>
              <dt>Emergencies</dt>
              <dd className="text-white">24 hours</dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-white/12">
        <div className="container-site flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
