import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { serviceLinks } from "@/content/navigation";

/** Plain check list for short facts. */
export function CheckList({ items, tone = "light", className = "" }: { items: string[]; tone?: "light" | "navy"; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((it) => (
        <li key={it} className="flex gap-3">
          <Check aria-hidden className={`mt-1 size-[1.1rem] shrink-0 ${tone === "navy" ? "text-sky" : "text-brand"}`} strokeWidth={2.6} />
          <span className={tone === "navy" ? "text-white" : "text-ink"}>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export type ServiceRow = { title: string; text: string };

/** Ruled rows of service name and plain description. Reads like a spec sheet, not a card grid. */
export function ServiceRows({ items, columns = 2, tone = "light" }: { items: ServiceRow[]; columns?: 1 | 2; tone?: "light" | "navy" }) {
  const onNavy = tone === "navy";
  return (
    <dl className={`grid gap-x-12 ${columns === 2 ? "md:grid-cols-2" : ""}`}>
      {items.map((it) => (
        <div key={it.title} className={`border-t py-6 ${onNavy ? "border-white/15" : "border-line"}`}>
          <dt className={`font-display text-h3 font-bold ${onNavy ? "text-white" : "text-navy"}`}>{it.title}</dt>
          <dd className={`mt-2 ${onNavy ? "text-on-navy" : "text-muted"}`}>{it.text}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * Typographic index of services: large names in a ruled list, read like the
 * lettering on the truck. Deliberately not a grid of icon cards.
 */
export function ServiceIndex({ exclude }: { exclude?: string }) {
  const items = serviceLinks.filter((s) => s.href !== exclude);
  return (
    <ul className="grid gap-x-14 border-b border-line-strong md:grid-cols-2">
      {items.map((s) => (
        <li key={s.href} className="border-t border-line-strong">
          <Link
            href={s.href}
            className="group relative isolate -mx-4 grid grid-cols-[1fr_auto] items-center gap-x-6 px-4 py-5 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-brand-50 before:transition-transform before:duration-500 before:ease-[var(--ease-out-expo)] hover:before:scale-x-100 focus-visible:before:scale-x-100 motion-reduce:before:transition-none sm:py-6"
          >
            <span className="font-display text-[1.45rem] font-extrabold leading-tight text-navy transition-colors wide group-hover:text-brand sm:text-[1.7rem]">
              {s.label}
            </span>
            <ArrowRight aria-hidden className="row-span-2 size-5 text-brand transition-transform duration-200 group-hover:translate-x-1" />
            <span className="mt-1 text-[0.97rem] text-muted">{s.blurb}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Links to the other services, excluding the current page. */
export function RelatedServices({ current, title = "More from the same crew" }: { current?: string; title?: string }) {
  return (
    <section aria-labelledby="related-title" className="section-y bg-surface">
      <div className="container-site">
        <h2 id="related-title" className="text-h2 font-extrabold wide text-navy">
          {title}
        </h2>
        <div className="mt-10">
          <ServiceIndex exclude={current} />
        </div>
      </div>
    </section>
  );
}
