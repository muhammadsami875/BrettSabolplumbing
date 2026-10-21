"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";

export type Faq = { q: string; a: string };

/**
 * Accessible accordion. Every answer stays in the DOM (for search engines and
 * screen readers when opened); height animates with a grid-rows transition.
 */
export function FaqList({ items, defaultOpen = 0 }: { items: Faq[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const base = useId();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${base}-q${i}`;
        const panelId = `${base}-a${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-5 text-left font-display text-[1.12rem] font-bold leading-snug text-navy transition-colors hover:text-brand sm:text-[1.2rem]"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-sm border transition-[background-color,border-color,color] duration-300 motion-reduce:transition-none ${
                    isOpen ? "border-brand bg-brand text-white" : "border-line-strong text-navy group-hover:border-brand group-hover:text-brand"
                  }`}
                >
                  <Plus
                    className={`size-4 transition-transform duration-300 ease-[var(--ease-out-expo)] motion-reduce:transition-none ${isOpen ? "rotate-45" : ""}`}
                    strokeWidth={2.4}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              aria-hidden={!isOpen}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-out-expo)] motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="measure pb-6 pr-4 text-muted sm:pr-12">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
