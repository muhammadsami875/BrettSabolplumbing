import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";

/** Visible breadcrumb trail plus matching BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "navy" }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  const link = tone === "navy" ? "text-on-navy hover:text-white" : "text-subtle hover:text-brand";
  const current = tone === "navy" ? "text-white" : "text-ink";
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={current}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className={`${link} underline-offset-4 transition-colors hover:underline`}>
                      {c.name}
                    </Link>
                    <ChevronRight aria-hidden className={`size-3.5 ${tone === "navy" ? "text-on-navy/70" : "text-line-strong"}`} />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
