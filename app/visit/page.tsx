import Link from "next/link";
import { Backdrop } from "@/components/Backdrop";
import { MapPin, Clock, Phone, Mail, DollarSign, Users } from "lucide-react";
import { site } from "@/lib/site";

export const metadata = {
  title: "Visit — StarFighters Arcade",
  description: "Hours, pricing, and directions to StarFighters Arcade in Mesa, AZ.",
};

export default function VisitPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Backdrop />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-amber">◆ PLAN YOUR VISIT ◆</p>
          <h1 className="mt-6 font-display font-black uppercase text-5xl sm:text-7xl text-ink leading-[0.95]">
            Land on our <span className="text-neon-magenta">remote planetoid.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Mesa, Arizona. Three nights a week. 200+ machines on free play. Snacks, sodas, and 80s candy on hand.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-6 lg:grid-cols-3">
        <div className="card-neon rounded-2xl p-7">
          <DollarSign className="text-neon-magenta" />
          <h2 className="mt-4 font-display font-black uppercase text-2xl text-ink">Pricing</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <Price label="Day Pass" value={site.pricing.dayPass} note="All games on free play" />
            <Price label="Member Day Rate" value={site.pricing.member} />
            <Price label="Monthly Pass" value={site.pricing.monthly} note="Up to 3 guests/month" />
          </ul>
        </div>

        <div className="card-neon rounded-2xl p-7">
          <Clock className="text-neon-cyan" />
          <h2 className="mt-4 font-display font-black uppercase text-2xl text-ink">Hours</h2>
          <ul className="mt-5 space-y-3">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                <span className="font-display font-bold text-ink">{h.day}</span>
                <span className="text-ink-muted">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-dim">
            All ages welcome. Starfighters under 8 must be accompanied by an adult.
          </p>
        </div>

        <div className="card-neon rounded-2xl p-7">
          <MapPin className="text-neon-amber" />
          <h2 className="mt-4 font-display font-black uppercase text-2xl text-ink">Location</h2>
          <address className="mt-5 not-italic text-ink-muted leading-relaxed">
            {site.address.line1}<br />
            {site.address.city}, {site.address.state} {site.address.zip}<br />
            {site.address.country}
          </address>
          <Link
            href={`https://maps.google.com/?q=${encodeURIComponent(`${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.zip}`)}`}
            target="_blank" rel="noopener"
            className="btn-neon amber mt-6 text-xs"
          >
            Open in Google Maps
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="card-neon rounded-2xl overflow-hidden">
          <iframe
            title="StarFighters Arcade map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.address.line1}, ${site.address.city}, ${site.address.state}`)}&output=embed`}
            className="w-full h-[420px] border-0 grayscale-[20%] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-cyan">◆ WHAT'S WAITING INSIDE</p>
        <h2 className="mt-3 font-display font-black uppercase text-3xl sm:text-4xl text-ink">
          The full experience
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Tile title="200+ Machines" body="Largest in the valley. Cabinets and pinball, rotating constantly." tone="magenta" />
          <Tile title="Free Play" body="No quarters. No tokens. One pass and you're in." tone="cyan" />
          <Tile title="Snacks & Sodas" body="Soda, snacks, and classic 80s candy at the counter." tone="amber" />
          <Tile title="80s Memorabilia" body="Authentic vintage toys, posters, and artifacts throughout the floor." tone="green" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="card-neon rounded-2xl p-7 sm:p-10 text-center">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-magenta">◆ QUESTIONS BEFORE YOU COME?</p>
          <h2 className="mt-4 font-display font-black uppercase text-3xl text-ink">Reach out anytime</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`tel:${site.phones[0].number.replace(/\s/g,"")}`} className="btn-neon magenta">
              <Phone size={14} /> {site.phones[0].number}
            </a>
            <a href={`mailto:${site.email}`} className="btn-neon cyan">
              <Mail size={14} /> {site.email}
            </a>
            <Link href="/private-parties" className="btn-neon amber">
              <Users size={14} /> Book a Party
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Price({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <li className="flex flex-col border-b border-white/5 pb-3 last:border-0">
      <div className="flex justify-between gap-3">
        <span className="font-display font-bold text-ink">{label}</span>
        <span className="font-display font-black text-neon-amber">{value}</span>
      </div>
      {note && <span className="text-xs text-ink-dim mt-1">{note}</span>}
    </li>
  );
}

function Tile({ title, body, tone }: { title: string; body: string; tone: "magenta"|"cyan"|"amber"|"green" }) {
  const cls = {
    magenta: "text-neon-magenta",
    cyan: "text-neon-cyan",
    amber: "text-neon-amber",
    green: "text-neon-green",
  }[tone];
  return (
    <div className="card-neon rounded-2xl p-6">
      <h3 className={`font-display font-black text-xl ${cls}`}>{title}</h3>
      <p className="mt-2 text-sm text-ink-muted leading-relaxed">{body}</p>
    </div>
  );
}
