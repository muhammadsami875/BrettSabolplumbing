import type { ReactNode } from "react";
import { ClipboardCheck } from "lucide-react";
import type { Photo } from "@/content/photos";
import type { Crumb } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { CallButton } from "@/components/ui/CallButton";
import { PhotoFrame } from "./PhotoFrame";

type Props = {
  crumbs: Crumb[];
  title: ReactNode;
  lead: ReactNode;
  photo: Photo;
  photoAspect?: string;
  photoPosition?: string;
  /** Rendered under the photo, for example a short quote or a fact. */
  aside?: ReactNode;
  /** Extra content under the buttons. */
  children?: ReactNode;
  quoteLabel?: string;
};

/**
 * Inner-page hero: breadcrumb, a plain-spoken H1, a short lead, the two
 * actions and one real photo at an honest size. Each page writes its own copy.
 */
export function PageHero({ crumbs, title, lead, photo, photoAspect = "4 / 5", photoPosition, aside, children, quoteLabel = "Request a quote" }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="container-site relative grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20">
        <div>
          <Breadcrumbs items={crumbs} />
          <h1 className="text-display mt-6 font-black wide text-navy">{title}</h1>
          <div className="text-lead mt-6 max-w-2xl text-muted">{lead}</div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <ButtonLink href="/contact#quote" variant="outline" size="lg" icon={<ClipboardCheck aria-hidden className="size-[1.1em]" strokeWidth={2} />}>
              {quoteLabel}
            </ButtonLink>
          </div>
          {children}
        </div>
        <div className="relative mx-auto w-full max-w-[26rem] lg:mr-0 lg:max-w-[30rem]">
          <PhotoFrame
            photo={photo}
            aspect={photoAspect}
            position={photoPosition}
            priority
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 416px, 92vw"
            frameClassName="shadow-[var(--shadow-lift)]"
          />
          {aside}
        </div>
      </div>
    </section>
  );
}
