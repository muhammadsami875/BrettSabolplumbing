import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "navy" | "outline" | "outline-light" | "light";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 rounded-sm font-display font-bold tracking-[0.005em] whitespace-nowrap select-none transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-[var(--ease-standard)] active:translate-y-px active:shadow-[var(--shadow-press)] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-red text-white shadow-[0_1px_0_rgb(0_0_0/0.12),0_8px_18px_-10px_rgb(215_25_32/0.7)] hover:bg-red-700",
  navy: "bg-navy text-white hover:bg-navy-800",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  "outline-light": "border-2 border-white/70 text-white hover:border-white hover:bg-white hover:text-navy",
  light: "bg-white text-navy hover:bg-brand-50",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-[0.98rem]",
  lg: "min-h-13 px-6 text-[1.05rem] sm:min-h-14 sm:px-7 sm:text-[1.1rem]",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}

type CommonProps = { variant?: Variant; size?: Size; className?: string; children: ReactNode; icon?: ReactNode };

/** Internal navigation. */
export function ButtonLink({ href, variant, size, className = "", children, icon, ...rest }: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)} {...rest}>
      {icon}
      <span>{children}</span>
    </Link>
  );
}

/** tel:, mailto: and external links. */
export function ButtonAnchor({ href, variant, size, className = "", children, icon, ...rest }: CommonProps & ComponentProps<"a">) {
  return (
    <a href={href} className={buttonClasses(variant, size, className)} {...rest}>
      {icon}
      <span>{children}</span>
    </a>
  );
}
