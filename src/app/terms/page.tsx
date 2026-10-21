import type { Metadata } from "next";
import { termsSections } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";
import { LegalDocument } from "@/components/sections/LegalDocument";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions | Brett Sabol Plumbing",
  absoluteTitle: true,
  description: "The terms for using the Brett Sabol Plumbing, Heating & Jet Drain Cleaning website, including requests, quotes and scheduling.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms & Conditions"
      path="/terms"
      intro="The plain-language terms for using this website. Work on your home or building is agreed with you directly before it starts."
      sections={termsSections}
    />
  );
}
