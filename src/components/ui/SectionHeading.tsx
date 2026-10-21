import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  intro?: ReactNode;
  as?: "h2" | "h3";
  align?: "left" | "center";
  tone?: "light" | "navy";
  className?: string;
  id?: string;
};

/** Section title and optional intro. No eyebrow labels: the heading carries its own weight. */
export function SectionHeading({ title, intro, as: Tag = "h2", align = "left", tone = "light", className = "", id }: Props) {
  const center = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-3xl ${center} ${className}`} data-reveal="rise">
      <Tag id={id} className={`text-h2 font-extrabold wide ${tone === "navy" ? "text-white" : "text-navy"}`}>
        {title}
      </Tag>
      {intro ? (
        <p className={`text-lead mt-5 ${tone === "navy" ? "text-on-navy" : "text-muted"} ${align === "center" ? "mx-auto" : ""} max-w-2xl`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
