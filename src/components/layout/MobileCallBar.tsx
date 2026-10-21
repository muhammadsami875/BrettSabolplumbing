"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "@/content/business";

/**
 * Discreet call bar for phones. It slides up only after the visitor scrolls
 * past the first screen, so it never covers the hero's own call button.
 */
export function MobileCallBar() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onContact = pathname === "/contact";

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/96 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-12px_30px_-18px_rgb(15_42_79/0.4)] backdrop-blur-md transition-transform duration-300 ease-[var(--ease-out-expo)] motion-reduce:transition-none md:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="flex gap-2.5">
        <a
          href={business.phone.href}
          tabIndex={show ? 0 : -1}
          className="flex min-h-12 flex-[1.4] items-center justify-center gap-2 rounded-sm bg-red font-display font-bold text-white active:translate-y-px"
        >
          <Phone aria-hidden className="size-[1.1em]" strokeWidth={2.25} />
          Call <span className="tabular">{business.phone.display}</span>
        </a>
        {!onContact ? (
          <Link
            href="/contact#quote"
            tabIndex={show ? 0 : -1}
            className="flex min-h-12 flex-1 items-center justify-center rounded-sm border-2 border-navy font-display font-bold text-navy active:translate-y-px"
          >
            Get a quote
          </Link>
        ) : null}
      </div>
    </div>
  );
}
