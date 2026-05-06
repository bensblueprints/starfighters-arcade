"use client";
import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Website inquiry — StarFighters");
    const body = encodeURIComponent(
      [
        `Name: ${fd.get("name")}`,
        `Email: ${fd.get("email")}`,
        `Phone: ${fd.get("phone")}`,
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
      <Field label="Phone number" name="phone" type="tel" />
      <label className="grid gap-2 text-sm">
        <span className="font-pixel text-[10px] tracking-widest text-ink-dim uppercase">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className="rounded-md border border-white/15 bg-bg-raised/40 px-3 py-2 text-ink placeholder-ink-dim focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan"
        />
      </label>
      <label className="flex items-start gap-3 text-sm text-ink-muted">
        <input type="checkbox" required className="mt-1 accent-neon-magenta" />
        <span>I allow this website to store my submission so they can respond to my inquiry.</span>
      </label>
      <button type="submit" disabled={status === "sending"} className="btn-neon magenta justify-center">
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-pixel text-[10px] tracking-widest text-ink-dim uppercase">
        {label}{required && <span className="text-neon-magenta"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-md border border-white/15 bg-bg-raised/40 px-3 py-2 text-ink placeholder-ink-dim focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan"
      />
    </label>
  );
}
