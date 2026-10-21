import type { Metadata } from "next";
import { privacySections } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";
import { LegalDocument } from "@/components/sections/LegalDocument";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Brett Sabol Plumbing",
  absoluteTitle: true,
  description: "How Brett Sabol Plumbing, Heating & Jet Drain Cleaning collects, uses and protects the information you send through this website and its contact form.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      path="/privacy-policy"
      intro="Short version: we only collect what you send us, we use it to help with your plumbing, and we never sell it."
      sections={privacySections}
    />
  );
}
