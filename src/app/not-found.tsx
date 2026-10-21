import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceLinks } from "@/content/navigation";
import { CallButton } from "@/components/ui/CallButton";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-site grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="tabular font-display text-7xl font-black text-brand">404</p>
          <h1 className="text-display mt-4 font-black wide text-navy">That page is not here.</h1>
          <p className="text-lead mt-5 max-w-xl text-muted">
            The link may be old, or the page may have moved when the website was rebuilt. If you need a plumber, the fastest way is still a phone
            call.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <ButtonLink href="/" variant="outline" size="lg">
              Go to the homepage
            </ButtonLink>
          </div>
        </div>
        <div>
          <h2 className="font-display text-h3 font-extrabold text-navy">Looking for a service?</h2>
          <ul className="mt-4 border-t border-line">
            {serviceLinks.map((s) => (
              <li key={s.href} className="border-b border-line">
                <Link href={s.href} className="group flex items-center justify-between gap-4 py-4 font-display text-lg font-bold text-navy hover:text-brand">
                  {s.label}
                  <ArrowRight aria-hidden className="size-4.5 text-brand transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
