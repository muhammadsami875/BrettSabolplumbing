import { Clock3, Phone } from "lucide-react";
import { business } from "@/content/business";

export function AnnouncementBar() {
  return (
    <div className="on-navy bg-navy text-white">
      <div className="container-site flex min-h-10 items-center justify-between gap-4 py-2 text-[0.84rem] sm:text-sm">
        <p className="flex items-center gap-2.5 font-semibold">
          <span aria-hidden className="relative flex size-2.5">
            <span className="absolute inset-0 rounded-[1px] bg-red motion-safe:animate-[pulse_2.4s_ease-in-out_infinite]" />
          </span>
          24-hour emergency service
          <span className="hidden text-on-navy sm:inline">across Bucks, Montgomery and Philadelphia</span>
        </p>
        <div className="flex items-center gap-5">
          <p className="hidden items-center gap-2 text-on-navy lg:flex">
            <Clock3 aria-hidden className="size-4" />
            Office Mon to Fri, 8 am to 5 pm. Weekends by appointment.
          </p>
          <a
            href={business.phone.href}
            className="tabular flex items-center gap-2 font-bold text-white underline-offset-4 hover:underline"
          >
            <Phone aria-hidden className="size-4" />
            {business.phone.display}
          </a>
        </div>
      </div>
    </div>
  );
}
