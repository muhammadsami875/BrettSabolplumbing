import { BadgeCheck, HeartHandshake, ShieldCheck, Siren } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Master Plumber", text: "Lic. #43391, 25+ years" },
  { icon: BadgeCheck, title: "Backflow certified", text: "Testing and compliance" },
  { icon: Siren, title: "24-hour emergency", text: "Day and night" },
  { icon: HeartHandshake, title: "Family owned", text: "Feasterville-Trevose, PA" },
];

/** Verified credentials only. Never add ratings, counts or awards here. */
export function Credentials({ tone = "light", className = "" }: { tone?: "light" | "navy"; className?: string }) {
  const onNavy = tone === "navy";
  return (
    <ul className={`grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-4 ${className}`}>
      {items.map(({ icon: Icon, title, text }) => (
        <li key={title} className="flex items-start gap-3">
          <Icon aria-hidden className={`mt-0.5 size-6 shrink-0 ${onNavy ? "text-sky" : "text-brand"}`} strokeWidth={1.9} />
          <span className="leading-tight">
            <span className={`block font-display font-bold ${onNavy ? "text-white" : "text-navy"}`}>{title}</span>
            <span className={`mt-0.5 block text-sm ${onNavy ? "text-on-navy" : "text-muted"}`}>{text}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
