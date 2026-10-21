"use server";

import { Resend } from "resend";
import { business } from "@/content/business";
import { SERVICE_OPTIONS } from "@/content/services-options";

export type ContactField = "name" | "phone" | "email" | "location" | "service" | "message";

export type ContactState =
  | { status: "idle" }
  | { status: "invalid"; errors: Partial<Record<ContactField, string>>; values: Partial<Record<ContactField, string>> }
  | { status: "sent"; name: string }
  | { status: "not_configured"; values: Partial<Record<ContactField, string>> }
  | { status: "error"; values: Partial<Record<ContactField, string>> };

const MIN_ELAPSED_MS = 1500;

function clean(value: FormDataEntryValue | null, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: clean(formData.get("name"), 80),
    phone: clean(formData.get("phone"), 30),
    email: clean(formData.get("email"), 120),
    location: clean(formData.get("location"), 80),
    service: clean(formData.get("service"), 60),
    message: clean(formData.get("message"), 3000),
  };

  // Spam traps. The honeypot is hidden from people. elapsed_ms is measured
  // in the browser with performance.now(), so clock drift cannot drop a lead.
  const honeypot = clean(formData.get("company_website"), 200);
  const elapsed = Number(formData.get("elapsed_ms") ?? 0);
  if (honeypot || (Number.isFinite(elapsed) && elapsed > 0 && elapsed < MIN_ELAPSED_MS)) {
    console.warn("[contact] dropped as spam", { honeypot: Boolean(honeypot), elapsed });
    return { status: "sent", name: values.name };
  }

  const errors: Partial<Record<ContactField, string>> = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 11) errors.phone = "Please enter a 10 digit phone number so we can call you back.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) errors.email = "That email address looks incomplete.";
  if (values.service && !SERVICE_OPTIONS.includes(values.service as (typeof SERVICE_OPTIONS)[number])) errors.service = "Please choose a service from the list.";
  if (values.message.length < 10) errors.message = "Tell us a little about the problem (at least a sentence).";

  if (Object.keys(errors).length > 0) {
    return { status: "invalid", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set. The lead was not delivered.");
    return { status: "not_configured", values };
  }

  const to = process.env.LEAD_TO_EMAIL || business.email;
  const from = process.env.LEAD_FROM_EMAIL || "Brett Sabol Website <onboarding@resend.dev>";
  const subject = `Website request: ${values.service || "General"} from ${values.name}`;

  const rows: [string, string][] = [
    ["Name", values.name],
    ["Phone", values.phone],
    ["Email", values.email || "Not given"],
    ["Town or ZIP", values.location || "Not given"],
    ["Service", values.service || "Not chosen"],
  ];

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${values.message}\n\nSent from the contact form on ${business.shortName}'s website.`;
  const html = `<table cellpadding="6" style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#555;padding-right:16px"><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table><p style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;white-space:pre-wrap">${escapeHtml(values.message)}</p><p style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:12px;color:#777">Sent from the contact form on the website.</p>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject,
      text,
      html,
      ...(values.email ? { replyTo: values.email } : {}),
    });
    if (error) {
      console.error("[contact] Resend rejected the message", error);
      return { status: "error", values };
    }
    return { status: "sent", name: values.name };
  } catch (err) {
    console.error("[contact] send failed", err);
    return { status: "error", values };
  }
}
