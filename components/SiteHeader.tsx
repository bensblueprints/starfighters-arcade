"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-pixel text-xs sm:text-sm tracking-wider">
          <span className="text-neon-magenta animate-pulse-glow">★</span>
          <span className="text-ink">STAR<span className="text-neon-cyan">FIGHTERS</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {site.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="px-3 py-2 text-sm font-medium text-ink-muted hover:text-neon-cyan transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link href="/private-parties" className="btn-neon magenta ml-2 text-xs px-4 py-2">
            Book a Party
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-bg-surface px-4 py-4">
          <ul className="flex flex-col gap-1">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink hover:text-neon-cyan"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/private-parties" onClick={() => setOpen(false)} className="btn-neon magenta mt-2 w-full justify-center text-xs">
                Book a Party
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
