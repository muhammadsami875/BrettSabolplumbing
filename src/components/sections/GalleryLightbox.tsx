"use client";

// Adapted from the 21st.dev "Masonry Lightbox" component by ayushmxxn:
// rebuilt on motion/react with static image imports (real dimensions, blur
// placeholders), keyboard arrows, focus return and a labelled dialog.
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { Photo } from "@/content/photos";

const emptySubscribe = () => () => {};

type Props = {
  items: Photo[];
  /** Tailwind columns classes for the masonry. */
  columns?: string;
  /** sizes hint for the tiles; keep it at or below each photo's native width. */
  sizes?: string;
  idPrefix: string;
  /** masonry keeps each photo whole. grid gives even tiles cropped to one aspect. */
  layout?: "masonry" | "grid";
  aspect?: string;
};

export function GalleryLightbox({
  items,
  columns = "columns-1 sm:columns-2 lg:columns-3",
  sizes = "(min-width: 1024px) 400px, (min-width: 640px) 46vw, 92vw",
  idPrefix,
  layout = "masonry",
  aspect = "4 / 5",
}: Props) {
  const [index, setIndex] = useState<number | null>(null);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const reduce = useReducedMotion();
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastOpened = useRef<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (index === null) {
      if (lastOpened.current !== null) tileRefs.current[lastOpened.current]?.focus();
      return;
    }
    lastOpened.current = index;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPad = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "Tab") {
        // Keep focus inside the dialog.
        const dialog = closeRef.current?.closest("[role=dialog]");
        const f = Array.from(dialog?.querySelectorAll<HTMLElement>("button") ?? []);
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    requestAnimationFrame(() => closeRef.current?.focus());
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPad;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const selected = index === null ? null : items[index];

  const modal = (
    <AnimatePresence>
      {selected && index !== null ? (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/85 p-4 backdrop-blur-sm sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Photo ${index + 1} of ${items.length}: ${selected.caption}`}
            layoutId={reduce ? undefined : `${idPrefix}-${index}`}
            className="relative w-full max-w-[min(92vw,820px)] overflow-hidden rounded-md bg-navy shadow-2xl"
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex max-h-[78vh] items-center justify-center bg-navy-950">
              <Image
                src={selected.src}
                alt={selected.alt}
                sizes="(min-width: 900px) 820px, 92vw"
                className="h-auto max-h-[78vh] w-auto max-w-full object-contain"
                placeholder="blur"
              />
            </div>
            <div className="flex items-center justify-between gap-4 bg-navy px-4 py-3 text-sm text-white sm:px-5">
              <p>
                <span className="tabular mr-2 text-on-navy">
                  {index + 1} of {items.length}
                </span>
                {selected.caption}
              </p>
              <div className="flex shrink-0 gap-1.5">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="grid size-10 place-items-center rounded-sm text-white hover:bg-white/10"
                >
                  <ChevronLeft aria-hidden className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="grid size-10 place-items-center rounded-sm text-white hover:bg-white/10"
                >
                  <ChevronRight aria-hidden className="size-5" />
                </button>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  aria-label="Close photo"
                  className="grid size-10 place-items-center rounded-sm bg-white/10 text-white hover:bg-white/20"
                >
                  <X aria-hidden className="size-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <ul className={layout === "grid" ? `grid gap-4 ${columns}` : `${columns} gap-4 [column-fill:balance]`}>
        {items.map((p, i) => (
          <li key={p.caption + i} className={layout === "grid" ? "" : "mb-4 break-inside-avoid"}>
            <motion.button
              ref={(el) => {
                tileRefs.current[i] = el;
              }}
              type="button"
              layoutId={reduce ? undefined : `${idPrefix}-${i}`}
              onClick={() => setIndex(i)}
              aria-label={`Open photo: ${p.caption}`}
              className="group relative block w-full overflow-hidden rounded-md bg-surface text-left ring-1 ring-line"
            >
              <Image
                src={p.src}
                alt={p.alt}
                sizes={sizes}
                placeholder="blur"
                style={layout === "grid" ? { aspectRatio: aspect, objectFit: "cover" } : undefined}
                className="block h-auto w-full transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.035] motion-reduce:transition-none"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 hidden items-end justify-between gap-3 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent p-4 pt-12 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:flex">
                {p.caption}
                <Maximize2 aria-hidden className="size-4 shrink-0" />
              </span>
            </motion.button>
          </li>
        ))}
      </ul>
      {mounted ? createPortal(modal, document.body) : null}
    </>
  );
}
