import { testimonials } from "@/content/business";

type Props = {
  id: (typeof testimonials)[number]["id"];
  tone?: "light" | "navy";
  size?: "md" | "lg";
  className?: string;
};

/** A genuine customer testimonial, quoted verbatim. Never edit the quote text. */
export function QuoteBlock({ id, tone = "light", size = "md", className = "" }: Props) {
  const t = testimonials.find((x) => x.id === id);
  if (!t) return null;
  const onNavy = tone === "navy";
  return (
    <figure className={`relative ${className}`}>
      <svg aria-hidden viewBox="0 0 48 36" className={`mb-5 h-8 w-auto ${onNavy ? "text-sky" : "text-brand"}`} fill="currentColor">
        <path d="M0 36V22.4C0 9.9 6.6 2.4 19.8 0l2 5.2c-6.9 1.9-10.5 5.7-10.8 11.4H20V36H0zm28 0V22.4C28 9.9 34.6 2.4 47.8 0l2 5.2c-6.9 1.9-10.5 5.7-10.8 11.4H48V36H28z" />
      </svg>
      <blockquote
        className={`${size === "lg" ? "text-[1.18rem] leading-[1.7] sm:text-[1.32rem]" : "text-[1.06rem] leading-[1.7]"} ${
          onNavy ? "text-white" : "text-ink"
        }`}
      >
        <p>{t.quote}</p>
      </blockquote>
      <figcaption className={`mt-5 flex items-center gap-3 text-sm ${onNavy ? "text-on-navy" : "text-subtle"}`}>
        <span aria-hidden className={`h-px w-8 ${onNavy ? "bg-sky" : "bg-brand"}`} />
        <span>
          <span className={`font-semibold ${onNavy ? "text-white" : "text-ink"}`}>Customer review.</span> {t.context}.
        </span>
      </figcaption>
    </figure>
  );
}
