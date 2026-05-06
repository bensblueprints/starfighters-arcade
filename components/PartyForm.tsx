"use client";
import { useState } from "react";
import { site } from "@/lib/site";

export function PartyForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Private party inquiry — StarFighters");
    const body = encodeURIComponent(
      [
        `Name: ${fd.get("name")}`,
        `Email: ${fd.get("email")}`,
        `Phone: ${fd.get("phone")}`,
        `Tentative dates/times: ${fd.get("dates")}`,
        `Refreshment table: ${fd.get("table")}`,
        `Set up competition: ${fd.get("competition")}`,
        ``,
        `Message:`,
        `${fd.get("message")}`,
      ].join("\n")
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("ok");
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
      <Field label="Name" name="name" required />
      <Field label="Email address" name="email" type="email" required />
      <Field label="Phone number" name="phone" type="tel" required />
      <Field label="Tentative dates and times" name="dates" required placeholder="e.g. Sat Jun 13 around 5 PM, or Sat Jun 20 evening" />

      <Radio label="Refreshment table needed?" name="table" options={["Yes", "No"]} required />
      <Radio label="Want to set up a competition?" name="competition" options={["Yes", "No"]} required />

      <label className="grid gap-2 text-sm">
        <span className="font-pixel text-[10px] tracking-widest text-ink-dim uppercase">Message</span>
        <textarea
          name="message"
          rows={4}
          className="rounded-md border border-white/15 bg-bg-raised/40 px-3 py-2 text-ink placeholder-ink-dim focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan"
          placeholder="Tell us about your group, occasion, anything we should know"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-ink-muted">
        <input type="checkbox" required className="mt-1 accent-neon-magenta" />
        <span>I allow this website to store my submission so they can respond to my inquiry.</span>
      </label>

      <button type="submit" disabled={status === "sending"} className="btn-neon magenta justify-center">
        {status === "sending" ? "Sending…" : "Submit Inquiry"}
      </button>
      <p className="text-xs text-ink-dim">
        Submitting opens your email client with the message pre-filled. Or call any number listed.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-pixel text-[10px] tracking-widest text-ink-dim uppercase">
        {label}{required && <span className="text-neon-magenta"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-md border border-white/15 bg-bg-raised/40 px-3 py-2 text-ink placeholder-ink-dim focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan"
      />
    </label>
  );
}

function Radio({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <fieldset className="grid gap-2 text-sm">
      <legend className="font-pixel text-[10px] tracking-widest text-ink-dim uppercase">
        {label}{required && <span className="text-neon-magenta"> *</span>}
      </legend>
      <div className="flex gap-4">
        {options.map((o) => (
          <label key={o} className="flex items-center gap-2 text-ink">
            <input type="radio" name={name} value={o} required={required} className="accent-neon-cyan" />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
