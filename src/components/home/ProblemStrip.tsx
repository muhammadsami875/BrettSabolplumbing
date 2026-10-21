import Link from "next/link";
import { ArrowRight, Droplets, Flame, ShieldCheck, Shovel, ThermometerSnowflake, Waves } from "lucide-react";

const problems = [
  { label: "Drain is slow or backing up", href: "/jet-drain-cleaning", icon: Waves },
  { label: "Sewer line trouble", href: "/sewer-line-repair", icon: Shovel },
  { label: "No hot water", href: "/heating#water-heaters", icon: ThermometerSnowflake },
  { label: "Leak or burst pipe", href: "/residential-plumbing#repairs", icon: Droplets },
  { label: "Boiler or radiant heat", href: "/heating", icon: Flame },
  { label: "Backflow test due", href: "/backflow-testing", icon: ShieldCheck },
];

/** Shortcut from a symptom to the right page, for visitors who know the problem but not the service name. */
export function ProblemStrip() {
  return (
    <section aria-labelledby="problems-title" className="on-navy bg-navy">
      <div className="container-site grid gap-6 py-9 lg:grid-cols-[13rem_1fr] lg:items-center lg:gap-10">
        <h2 id="problems-title" className="font-display text-xl font-extrabold leading-tight text-white wide">
          Start with the problem
        </h2>
        <ul className="grid grid-cols-1 gap-2.5 xs:grid-cols-2 md:grid-cols-3">
          {problems.map(({ label, href, icon: Icon }) => (
            <li key={href + label}>
              <Link
                href={href}
                className="group flex min-h-14 items-center gap-3 rounded-sm border border-white/15 bg-navy-800/60 px-4 py-3 font-semibold text-white transition-[background-color,border-color] duration-200 hover:border-sky hover:bg-navy-700"
              >
                <Icon aria-hidden className="size-5 shrink-0 text-sky" strokeWidth={1.9} />
                <span className="flex-1 leading-snug">{label}</span>
                <ArrowRight aria-hidden className="size-4 shrink-0 text-sky transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
