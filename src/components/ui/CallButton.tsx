import { Phone } from "lucide-react";
import { business } from "@/content/business";
import { ButtonAnchor } from "./Button";

type Props = {
  variant?: "primary" | "navy" | "outline" | "outline-light" | "light";
  size?: "md" | "lg";
  className?: string;
  /** Text before the number, for example "Call". Set to "" to show only the number. */
  label?: string;
};

export function CallButton({ variant = "primary", size = "lg", className, label = "Call" }: Props) {
  return (
    <ButtonAnchor
      href={business.phone.href}
      variant={variant}
      size={size}
      className={className}
      icon={<Phone aria-hidden className="size-[1.1em] shrink-0" strokeWidth={2.25} />}
      aria-label={`Call Brett Sabol Plumbing at ${business.phone.display}`}
    >
      {label ? `${label} ` : ""}
      <span className="tabular">{business.phone.display}</span>
    </ButtonAnchor>
  );
}
