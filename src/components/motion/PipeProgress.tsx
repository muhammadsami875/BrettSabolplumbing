"use client";

// Scroll-linked "water line": a pipe track that fills with Sabol blue as the
// visitor scrolls through a sequence. Idea adapted from the 21st.dev
// "Svg follow scroll" component (reuno-ui), rebuilt with motion/react as a
// transform-only fill (no layout work), static and full under reduced motion.
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

type Step = { title: string; text: string };

function usePipeProgress(offset: ["start 70%", "end 60%"] | ["start 85%", "end 65%"]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  return { ref, progress };
}

/** Vertical numbered steps joined by a pipe that fills as you read down. */
export function FlowSteps({ steps, tone = "light" }: { steps: Step[]; tone?: "light" | "navy" }) {
  const reduce = useReducedMotion();
  const { ref, progress } = usePipeProgress(["start 70%", "end 60%"]);
  const onNavy = tone === "navy";
  return (
    <div ref={ref} className="relative">
      <div aria-hidden className={`absolute bottom-6 left-[1.0625rem] top-6 w-1.5 rounded-full ${onNavy ? "bg-white/15" : "bg-line"}`}>
        <motion.div className={`pipe-fill absolute inset-0 origin-top rounded-full ${onNavy ? "bg-sky" : "bg-brand"}`} style={{ scaleY: reduce ? 1 : progress }} />
      </div>
      <ol className="relative space-y-9">
        {steps.map((s, i) => (
          <li key={s.title} className="grid grid-cols-[2.75rem_1fr] gap-5">
            <span
              aria-hidden
              className={`tabular relative z-10 grid size-[2.75rem] place-items-center rounded-full border-[3px] font-display text-lg font-black ${
                onNavy ? "border-sky bg-navy text-white" : "border-brand bg-white text-brand"
              }`}
            >
              {i + 1}
            </span>
            <div className="pt-1.5">
              <h3 className={`font-display text-h3 font-bold ${onNavy ? "text-white" : "text-navy"}`}>{s.title}</h3>
              <p className={`mt-2 ${onNavy ? "text-on-navy" : "text-muted"}`}>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Horizontal pipe across the top of a sequence (desktop only); children render the steps. */
export function PipeRow({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const { ref, progress } = usePipeProgress(["start 85%", "end 65%"]);
  return (
    <div ref={ref} className="relative">
      <div aria-hidden className="absolute left-[1.375rem] right-[calc(25%-2.3125rem)] top-[1.25rem] hidden h-1.5 rounded-full bg-line lg:block">
        <motion.div className="pipe-fill absolute inset-0 origin-left rounded-full bg-brand" style={{ scaleX: reduce ? 1 : progress }} />
      </div>
      {children}
    </div>
  );
}
