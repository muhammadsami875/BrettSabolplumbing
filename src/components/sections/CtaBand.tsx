import { ClipboardCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { CallButton } from "@/components/ui/CallButton";

type Props = {
  title: string;
  text: string;
  className?: string;
};

/** Closing call to action used at the end of pages. Copy is written per page. */
export function CtaBand({ title, text, className = "" }: Props) {
  return (
    <section aria-labelledby="cta-title" className={`on-navy bg-navy ${className}`}>
      <div className="container-site grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
        <div data-reveal>
          <h2 id="cta-title" className="text-h2 font-extrabold wide text-white">
            {title}
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-on-navy">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch xl:max-w-sm xl:justify-self-end">
          <CallButton size="lg" />
          <ButtonLink
            href="/contact#quote"
            variant="outline-light"
            size="lg"
            icon={<ClipboardCheck aria-hidden className="size-[1.1em]" strokeWidth={2} />}
          >
            Request a quote
          </ButtonLink>
          <p className="text-sm text-on-navy sm:self-center lg:self-auto">Office Mon to Fri, 8 am to 5 pm. 24-hour emergency service.</p>
        </div>
      </div>
    </section>
  );
}
