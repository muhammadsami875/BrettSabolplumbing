import { LEGAL_EFFECTIVE_DATE, type LegalSection } from "@/content/legal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

/** Plain, readable layout for the privacy policy and terms pages. */
export function LegalDocument({ title, path, intro, sections }: { title: string; path: string; intro: string; sections: LegalSection[] }) {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container-site py-10 sm:py-14">
          <Breadcrumbs items={[{ name: title, path }]} />
          <h1 className="text-display mt-6 font-black wide text-navy">{title}</h1>
          <p className="text-lead mt-5 max-w-2xl text-muted">{intro}</p>
          <p className="mt-4 text-sm font-semibold text-subtle">Effective {LEGAL_EFFECTIVE_DATE}</p>
        </div>
      </section>
      <section className="section-y pt-12">
        <div className="container-site grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
          <nav aria-label="On this page" className="hidden lg:block">
            <ol className="sticky top-28 space-y-2 border-l border-line pl-5 text-sm">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#s${i + 1}`} className="text-muted hover:text-brand">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="prose-site measure">
            {sections.map((s, i) => (
              <section key={s.heading} id={`s${i + 1}`} className="scroll-mt-28 border-t border-line pt-8 pb-10 first:border-t-0 first:pt-0">
                <h2 className="font-display text-h3 font-extrabold text-navy">{s.heading}</h2>
                <div className="mt-3">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                  {s.list ? (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-brand">
                      {s.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
