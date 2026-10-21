import { MapPin, Navigation } from "lucide-react";
import { business, fullAddress } from "@/content/business";

/**
 * The Google Business Profile map for the shop. Loaded lazily so it costs
 * nothing until it scrolls near the viewport. The frame keeps its own aspect
 * ratio so nothing shifts while it loads.
 */
export function MapEmbed({ className = "", aspect = "16 / 10", caption = true }: { className?: string; aspect?: string; caption?: boolean }) {
  return (
    <figure className={className}>
      <div className="relative overflow-hidden rounded-md bg-surface ring-1 ring-line" style={{ aspectRatio: aspect }}>
        <iframe
          src={business.mapEmbedUrl}
          title={`Map showing ${business.shortName} at ${fullAddress}`}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 flex flex-col gap-2 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2">
            <MapPin aria-hidden className="size-4 text-brand" />
            {fullAddress}
          </span>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand hover:underline sm:min-h-0">
            <Navigation aria-hidden className="size-4" />
            Get directions
          </a>
        </figcaption>
      ) : null}
    </figure>
  );
}
