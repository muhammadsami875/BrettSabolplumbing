import Image from "next/image";
import type { Photo } from "@/content/photos";

type Props = {
  photo: Photo;
  /** Responsive sizes hint. Keep it honest so phone photos are never upscaled. */
  sizes: string;
  /** Fixed aspect ratio box (for example "4 / 5"). Omit to use the photo's own proportions. */
  aspect?: string;
  position?: string;
  priority?: boolean;
  caption?: boolean;
  className?: string;
  frameClassName?: string;
  tone?: "light" | "navy";
  /** Mask reveal on scroll. Defaults on for every photo except priority (hero) images. */
  reveal?: boolean;
  revealDelay?: number;
};

/** A real photo in a thin frame, with an optional factual caption. */
export function PhotoFrame({
  photo,
  sizes,
  aspect,
  position = "50% 50%",
  priority,
  caption = false,
  className = "",
  frameClassName = "",
  tone = "light",
  reveal,
  revealDelay = 0,
}: Props) {
  const masked = reveal ?? !priority;
  const frame = tone === "navy" ? "bg-navy-800 ring-white/15" : "bg-surface ring-line";
  return (
    <figure
      className={className}
      data-reveal={masked ? "mask" : undefined}
      style={masked ? { ["--reveal-delay" as string]: `${revealDelay}ms` } : undefined}
    >
      <div className={`relative overflow-hidden rounded-md ring-1 ${frame} ${frameClassName}`} style={aspect ? { aspectRatio: aspect } : undefined}>
        {aspect ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            priority={priority}
            placeholder="blur"
            className="object-cover"
            style={{ objectPosition: position }}
          />
        ) : (
          <Image
            src={photo.src}
            alt={photo.alt}
            sizes={sizes}
            priority={priority}
            placeholder="blur"
            className="block h-auto w-full"
          />
        )}
      </div>
      {caption ? (
        <figcaption className={`mt-2.5 text-sm ${tone === "navy" ? "text-on-navy" : "text-subtle"}`}>{photo.caption}</figcaption>
      ) : null}
    </figure>
  );
}
