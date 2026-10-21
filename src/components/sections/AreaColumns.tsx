import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { serviceAreas } from "@/content/business";

/** The three service areas with example communities (client approved, worded as "including"). */
export function AreaColumns({
  tone = "light",
  headingLevel = "h3",
  layout = "row",
}: {
  tone?: "light" | "navy";
  headingLevel?: "h2" | "h3";
  layout?: "row" | "stack";
}) {
  const onNavy = tone === "navy";
  const H = headingLevel;
  return (
    <div className={layout === "stack" ? "grid gap-9" : "grid gap-x-10 gap-y-10 md:grid-cols-3"}>
      {serviceAreas.map((area) => (
        <div key={area.id} id={area.id} className={`scroll-mt-28 border-t-[3px] pt-6 ${onNavy ? "border-sky" : "border-brand"}`}>
          <H className={`flex items-center gap-2.5 font-display text-h3 font-extrabold ${onNavy ? "text-white" : "text-navy"}`}>
            <MapPin aria-hidden className={`size-5 ${onNavy ? "text-sky" : "text-brand"}`} strokeWidth={2.2} />
            <Link href={`/service-areas/${area.id}`} className="group inline-flex items-center gap-2 hover:text-brand">
              {area.name}
              <ArrowRight aria-hidden className="size-4 text-brand transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </H>
          <p className={`mt-3 ${onNavy ? "text-on-navy" : "text-muted"}`}>{area.note}</p>
          <p className={`mt-5 text-sm font-semibold ${onNavy ? "text-white" : "text-ink"}`}>Including</p>
          <ul className={`mt-2 flex flex-wrap gap-x-1 gap-y-1.5 text-[0.95rem] ${onNavy ? "text-on-navy" : "text-muted"}`}>
            {area.places.map((p, i) => (
              <li key={p}>
                {p}
                {i < area.places.length - 1 ? <span aria-hidden className="opacity-50">,</span> : null}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
