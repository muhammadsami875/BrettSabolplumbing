import Image from "next/image";
import Link from "next/link";
import logoMark from "@/assets/brand/logo-mark.png";

/**
 * The real logo mark (unaltered raster from the client's logo file) set next
 * to the same words the logo panel carries: Plumbing in blue, Heating & in
 * red, Jet Drain Cleaning beneath, as on the trucks.
 */
export function Logo({ tone = "light", priority = false }: { tone?: "light" | "navy"; priority?: boolean }) {
  const onNavy = tone === "navy";
  return (
    <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Brett Sabol Plumbing, Heating and Jet Drain Cleaning, home">
      <Image
        src={logoMark}
        alt=""
        priority={priority}
        sizes="48px"
        className={`h-[2.9rem] w-auto shrink-0 sm:h-[3.35rem] ${onNavy ? "ring-1 ring-white/25" : ""}`}
      />
      <span className="min-w-0 font-display leading-[1.02]" aria-hidden>
        <span className="block whitespace-nowrap text-[clamp(0.9rem,0.55rem+1.7vw,1.22rem)] font-black wide tracking-[-0.01em]">
          <span className={onNavy ? "text-white" : "text-brand"}>Plumbing</span>{" "}
          <span className={onNavy ? "text-[#ff6b6f]" : "text-red"}>Heating</span>{" "}
          <span className={onNavy ? "text-sky" : "text-brand"}>&amp;</span>
        </span>
        <span className={`block text-[clamp(0.78rem,0.5rem+1.35vw,0.98rem)] font-medium tracking-[0.005em] ${onNavy ? "text-on-navy" : "text-brand"}`}>
          Jet Drain Cleaning
        </span>
      </span>
    </Link>
  );
}
