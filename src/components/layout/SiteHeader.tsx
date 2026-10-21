"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { business, hours } from "@/content/business";
import { serviceLinks } from "@/content/navigation";
import { Logo } from "./Logo";
import { serviceIcons } from "./serviceIcons";
import { buttonClasses } from "@/components/ui/Button";

const emptySubscribe = () => () => {};

const pageLinks = [
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const reduce = useReducedMotion();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const menuId = useId();
  const drawerId = useId();
  const servicesBtn = useRef<HTMLButtonElement>(null);
  const servicesPanel = useRef<HTMLDivElement>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (adjusting state during render, as React recommends).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setServicesOpen(false);
    setDrawerOpen(false);
  }

  // Services dropdown: close on Escape or outside click.
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        servicesBtn.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!servicesPanel.current?.contains(t) && !servicesBtn.current?.contains(t)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [servicesOpen]);

  // Drawer: lock scroll, trap focus, Escape to close, return focus to the button.
  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = drawerRef.current;
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    requestAnimationFrame(() => focusables()[0]?.focus());
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
      if (e.key === "Tab") {
        const f = focusables();
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
    document.addEventListener("keydown", onKey);
    const btn = menuBtn.current;
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      btn?.focus();
    };
  }, [drawerOpen]);

  const openSoon = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);
  const closeSoon = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 140);
  }, []);

  const isServicePage = serviceLinks.some((s) => s.href === pathname);
  const navLink = (active: boolean) =>
    `relative inline-flex min-h-11 items-center px-3 font-semibold text-[0.97rem] transition-colors ${
      active ? "text-brand" : "text-ink hover:text-brand"
    } after:absolute after:inset-x-3 after:bottom-1.5 after:h-0.5 after:origin-left after:bg-brand after:transition-transform after:duration-200 ${
      active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 bg-white/97 transition-shadow duration-200 supports-[backdrop-filter]:bg-white/92 supports-[backdrop-filter]:backdrop-blur-md ${
        scrolled ? "shadow-[0_1px_0_var(--color-line),0_10px_30px_-18px_rgb(15_42_79/0.35)]" : "shadow-[0_1px_0_var(--color-line)]"
      }`}
    >
      <div className="container-site flex h-[var(--header-h)] items-center justify-between gap-3 sm:gap-6">
        <Logo priority />

        <nav aria-label="Main" className="hidden items-center xl:flex">
          <div className="relative" onPointerEnter={openSoon} onPointerLeave={closeSoon}>
            <button
              ref={servicesBtn}
              type="button"
              aria-expanded={servicesOpen}
              aria-controls={menuId}
              onClick={() => setServicesOpen((o) => !o)}
              className={`${navLink(isServicePage)} gap-1`}
            >
              Services
              <ChevronDown aria-hidden className={`size-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen ? (
                <motion.div
                  ref={servicesPanel}
                  id={menuId}
                  initial={reduce ? false : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -4 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 top-full z-50 w-[42rem] -translate-x-1/2 pt-2"
                >
                  <div className="overflow-hidden rounded-md border border-line bg-white shadow-[var(--shadow-lift)]">
                    <ul className="grid grid-cols-2 gap-1 p-3">
                      {serviceLinks.map((s) => {
                        const Icon = serviceIcons[s.href];
                        const active = pathname === s.href;
                        return (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              aria-current={active ? "page" : undefined}
                              className={`group flex gap-3.5 rounded-sm p-3.5 transition-colors ${active ? "bg-brand-50" : "hover:bg-surface"}`}
                            >
                              <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-sm bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                                {Icon ? <Icon aria-hidden className="size-5" strokeWidth={1.9} /> : null}
                              </span>
                              <span>
                                <span className="block font-display font-bold text-navy">{s.label}</span>
                                <span className="mt-0.5 block text-sm leading-snug text-muted">{s.blurb}</span>
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="flex items-center justify-between gap-4 bg-navy px-6 py-3.5 text-sm text-on-navy">
                      <span>Plumbing emergency? 24-hour emergency service is available.</span>
                      <a href={business.phone.href} className="tabular font-bold text-white underline-offset-4 hover:underline">
                        {business.phone.display}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          {pageLinks.map((l) => (
            <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined} className={navLink(pathname === l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <a href={business.phone.href} className={buttonClasses("primary", "md")}>
              <Phone aria-hidden className="size-[1.05em]" strokeWidth={2.25} />
              <span className="tabular">{business.phone.display}</span>
            </a>
          </span>
          <a
            href={business.phone.href}
            aria-label={`Call ${business.phone.display}`}
            className="grid size-11 place-items-center rounded-sm bg-red text-white transition-colors hover:bg-red-700 sm:hidden"
          >
            <Phone aria-hidden className="size-5" strokeWidth={2.25} />
          </a>
          <button
            ref={menuBtn}
            type="button"
            aria-expanded={drawerOpen}
            aria-controls={drawerId}
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            className="grid size-11 place-items-center rounded-sm border border-line-strong text-navy transition-colors hover:border-navy xl:hidden"
          >
            <Menu aria-hidden className="size-5" />
          </button>
        </div>
      </div>

      {/* Portaled to <body>: the header's backdrop-filter would otherwise trap position: fixed. */}
      {mounted
        ? createPortal(
      <AnimatePresence>
        {drawerOpen ? (
          <div className="fixed inset-0 z-50 xl:hidden">
            <motion.div
              className="absolute inset-0 bg-navy-950/55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              aria-hidden
            />
            <motion.div
              ref={drawerRef}
              id={drawerId}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="absolute inset-y-0 right-0 flex w-full max-w-[24rem] flex-col bg-white shadow-[var(--shadow-lift)]"
              initial={reduce ? { opacity: 0 } : { x: "100%" }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={reduce ? { duration: 0.15 } : { type: "spring", stiffness: 380, damping: 38 }}
            >
              <div className="flex h-[var(--header-h)] items-center justify-between border-b border-line px-5">
                <span className="font-display text-lg font-extrabold text-navy">Menu</span>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                  className="grid size-11 place-items-center rounded-sm border border-line-strong text-navy hover:border-navy"
                >
                  <X aria-hidden className="size-5" />
                </button>
              </div>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-subtle">Services</p>
                <ul className="divide-y divide-line border-y border-line">
                  {serviceLinks.map((s) => {
                    const Icon = serviceIcons[s.href];
                    return (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          aria-current={pathname === s.href ? "page" : undefined}
                          className="flex min-h-13 items-center gap-3 py-2 font-display text-[1.05rem] font-bold text-navy"
                        >
                          {Icon ? <Icon aria-hidden className="size-5 text-brand" strokeWidth={1.9} /> : null}
                          {s.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <ul className="mt-5 grid grid-cols-2 gap-x-4">
                  {[{ label: "Home", href: "/" }, ...pageLinks].map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        aria-current={pathname === l.href ? "page" : undefined}
                        className="flex min-h-11 items-center font-semibold text-ink hover:text-brand"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="space-y-3 border-t border-line bg-surface px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <a href={business.phone.href} className={buttonClasses("primary", "lg", "w-full")}>
                  <Phone aria-hidden className="size-[1.1em]" strokeWidth={2.25} />
                  <span>
                    Call <span className="tabular">{business.phone.display}</span>
                  </span>
                </a>
                <Link href="/contact#quote" className={buttonClasses("outline", "lg", "w-full")}>
                  Request a quote
                </Link>
                <p className="pt-1 text-center text-sm text-muted">
                  Office Mon to Fri, {hours[0].hours}. 24-hour emergency service.
                </p>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>,
            document.body,
          )
        : null}
    </header>
  );
}
