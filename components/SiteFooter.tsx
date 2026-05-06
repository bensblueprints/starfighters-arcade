import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-bg-surface/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-pixel text-sm tracking-wider">
            <span className="text-neon-magenta">★</span>{" "}
            <span className="text-ink">STAR<span className="text-neon-cyan">FIGHTERS</span></span>
          </div>
          <p className="mt-4 max-w-md text-sm text-ink-muted">
            Arizona's original retro arcade. 200+ rotating classic cabinets and pinball machines on free play.
            Built and run by collectors for everyone who remembers — and everyone discovering it for the first time.
          </p>
        </div>

        <div>
          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-neon-amber">Visit</h3>
          <address className="mt-3 not-italic text-sm text-ink-muted leading-relaxed">
            {site.address.line1}<br />
            {site.address.city}, {site.address.state} {site.address.zip}<br />
            <a className="hover:text-neon-cyan" href={`mailto:${site.email}`}>{site.email}</a><br />
            <a className="hover:text-neon-cyan" href={`tel:${site.phones[0].number.replace(/\s/g,"")}`}>{site.phones[0].number}</a>
          </address>
        </div>

        <div>
          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-neon-amber">Hours</h3>
          <ul className="mt-3 space-y-1 text-sm text-ink-muted">
            {site.hours.map((h) => (
              <li key={h.day}><span className="text-ink">{h.day}</span> · {h.time}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-dim">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <nav className="flex flex-wrap gap-4">
            {site.nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-neon-cyan">{n.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
