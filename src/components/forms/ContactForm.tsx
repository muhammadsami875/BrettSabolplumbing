"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Phone, Send } from "lucide-react";
import { submitContact, type ContactField, type ContactState } from "@/app/actions/contact";
import { SERVICE_OPTIONS } from "@/content/services-options";
import { business } from "@/content/business";
import { buttonClasses } from "@/components/ui/Button";

const initial: ContactState = { status: "idle" };

const fieldOrder: ContactField[] = ["name", "phone", "email", "location", "service", "message"];

function clientCheck(name: ContactField, value: string): string | undefined {
  const v = value.trim();
  switch (name) {
    case "name":
      return v.length < 2 ? "Please enter your name." : undefined;
    case "phone": {
      const d = v.replace(/\D/g, "");
      return d.length < 10 || d.length > 11 ? "Please enter a 10 digit phone number so we can call you back." : undefined;
    }
    case "email":
      return v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "That email address looks incomplete." : undefined;
    case "message":
      return v.length < 10 ? "Tell us a little about the problem (at least a sentence)." : undefined;
    default:
      return undefined;
  }
}

const inputBase =
  "block w-full rounded-sm border bg-white px-4 py-3 text-[1rem] text-ink shadow-[inset_0_1px_2px_rgb(15_42_79/0.06)] transition-[border-color,box-shadow] placeholder:text-subtle focus:outline-none focus:ring-3 focus:ring-brand/25";

export function ContactForm({ defaultService = "", connected = true }: { defaultService?: string; connected?: boolean }) {
  const [state, formAction, pending] = useActionState(submitContact, initial);
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const mountedAt = useRef(0);
  const elapsedRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mountedAt.current = performance.now();
  }, []);

  // Server-side validation results: show them and focus the first bad field.
  useEffect(() => {
    if (state.status === "invalid") {
      setErrors(state.errors);
      const first = fieldOrder.find((f) => state.errors[f]);
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    }
    if (state.status === "sent" || state.status === "not_configured" || state.status === "error") {
      statusRef.current?.focus();
    }
  }, [state]);

  if (state.status === "sent") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-md border border-success/30 bg-[#effaf3] p-7 outline-none sm:p-9">
        <CircleCheck aria-hidden className="size-9 text-success" strokeWidth={2} />
        <h3 className="mt-4 text-h3 font-bold text-navy">Thanks{state.name ? `, ${state.name.split(" ")[0]}` : ""}. Your request was sent.</h3>
        <p className="mt-3 text-muted">
          It went to the office inbox, and we will get back to you as soon as possible. If water is coming in or a drain is backing up right
          now, please call{" "}
          <a href={business.phone.href} className="tabular font-semibold text-brand underline">
            {business.phone.display}
          </a>{" "}
          instead.
        </p>
      </div>
    );
  }

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as ContactField;
    if (!fieldOrder.includes(name)) return;
    setErrors((prev) => ({ ...prev, [name]: clientCheck(name, e.target.value) }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const next: Partial<Record<ContactField, string>> = {};
    for (const f of fieldOrder) {
      const el = form.elements.namedItem(f) as HTMLInputElement | null;
      const err = el ? clientCheck(f, el.value) : undefined;
      if (err) next[f] = err;
    }
    if (Object.keys(next).length) {
      e.preventDefault();
      setErrors(next);
      const first = fieldOrder.find((f) => next[f]);
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    if (elapsedRef.current) elapsedRef.current.value = String(Math.round(performance.now() - mountedAt.current));
  };

  // Values come back from the server on every unsent outcome, so React's post-action form reset restores them.
  const values = "values" in state ? state.values : {};
  const errCount = Object.values(errors).filter(Boolean).length;

  const field = (name: ContactField) => ({
    name,
    id: `cf-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `cf-${name}-error` : undefined,
    onBlur,
    className: `${inputBase} ${errors[name] ? "border-red focus:border-red" : "border-line-strong hover:border-subtle focus:border-brand"}`,
  });

  const errorText = (name: ContactField) =>
    errors[name] ? (
      <p id={`cf-${name}-error`} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-red">
        <CircleAlert aria-hidden className="mt-0.5 size-4 shrink-0" />
        {errors[name]}
      </p>
    ) : null;

  const label = (name: ContactField, text: string, required = false) => (
    <label htmlFor={`cf-${name}`} className="mb-2 block text-[0.95rem] font-semibold text-ink">
      {text}
      {required ? (
        <span className="text-red" aria-hidden>
          {" "}
          *
        </span>
      ) : (
        <span className="font-normal text-subtle"> (optional)</span>
      )}
    </label>
  );

  return (
    <form ref={formRef} action={formAction} onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby="cf-required-note">
      {!connected && state.status === "idle" ? (
        <div className="flex items-start gap-2.5 rounded-sm border border-red/30 bg-red-50 p-4 text-[0.97rem] text-ink">
          <CircleAlert aria-hidden className="mt-0.5 size-5 shrink-0 text-red" />
          <p>
            <strong className="font-semibold">Online requests are not connected yet.</strong> Call{" "}
            <a href={business.phone.href} className="tabular font-semibold text-brand underline">
              {business.phone.display}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${business.email}`} className="font-semibold text-brand underline">
              {business.email}
            </a>
            .
          </p>
        </div>
      ) : null}

      <p id="cf-required-note" className="text-sm text-subtle">
        Fields marked <span className="text-red">*</span> are required.
      </p>

      {(state.status === "not_configured" || state.status === "error") && (
        <div ref={statusRef} tabIndex={-1} role="alert" className="rounded-sm border border-red/30 bg-red-50 p-5 outline-none">
          <p className="flex items-start gap-2.5 font-semibold text-navy">
            <CircleAlert aria-hidden className="mt-0.5 size-5 shrink-0 text-red" />
            {state.status === "not_configured"
              ? "Online requests are not connected yet, so this message was not sent."
              : "Something went wrong and your message was not sent."}
          </p>
          <p className="mt-2 pl-7.5 text-muted">
            Please call{" "}
            <a href={business.phone.href} className="tabular font-semibold text-brand underline">
              {business.phone.display}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${business.email}`} className="font-semibold text-brand underline">
              {business.email}
            </a>
            . Your details are still in the form below.
          </p>
        </div>
      )}

      {errCount > 1 ? (
        <p role="alert" className="text-sm font-semibold text-red">
          Please fix the {errCount} highlighted fields.
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label("name", "Your name", true)}
          <input type="text" autoComplete="name" defaultValue={values.name} {...field("name")} />
          {errorText("name")}
        </div>
        <div>
          {label("phone", "Phone", true)}
          <input type="tel" inputMode="tel" autoComplete="tel" defaultValue={values.phone} {...field("phone")} />
          {errorText("phone")}
        </div>
        <div>
          {label("email", "Email")}
          <input type="email" autoComplete="email" inputMode="email" defaultValue={values.email} {...field("email")} />
          {errorText("email")}
        </div>
        <div>
          {label("location", "Town or ZIP")}
          <input type="text" autoComplete="postal-code" defaultValue={values.location} {...field("location")} />
          {errorText("location")}
        </div>
      </div>

      <div>
        {label("service", "What do you need help with?")}
        {/* Keyed so a returned value remounts it: React only reads a select's defaultValue on mount. */}
        <select key={`svc-${values.service ?? defaultService}`} defaultValue={values.service ?? defaultService} {...field("service")}>
          <option value="">Choose a service</option>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {errorText("service")}
      </div>

      <div>
        {label("message", "Tell us what is going on", true)}
        <textarea rows={5} defaultValue={values.message} {...field("message")} />
        {errorText("message")}
      </div>

      {/* Spam traps: hidden from people, ignored by assistive tech. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="cf-company-website">Company website</label>
        <input id="cf-company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={elapsedRef} type="hidden" name="elapsed_ms" defaultValue="0" />

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button type="submit" disabled={pending} className={buttonClasses("navy", "lg", "sm:min-w-56")} aria-live="polite">
          {pending ? (
            <>
              <LoaderCircle aria-hidden className="size-[1.1em] animate-spin" />
              <span>Sending</span>
            </>
          ) : (
            <>
              <Send aria-hidden className="size-[1.05em]" strokeWidth={2} />
              <span>Send request</span>
            </>
          )}
        </button>
        <p className="flex items-center gap-2 text-sm text-muted">
          <Phone aria-hidden className="size-4 text-red" />
          Emergency? Call{" "}
          <a href={business.phone.href} className="tabular font-semibold text-navy underline-offset-4 hover:underline">
            {business.phone.display}
          </a>
        </p>
      </div>
    </form>
  );
}
