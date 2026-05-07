import { Backdrop } from "@/components/Backdrop";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Users, Clock, Pizza, Trophy, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { PartyForm } from "@/components/PartyForm";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "Private Parties — StarFighters Arcade",
  description: "Book your party at Mesa's largest retro arcade. Up to 40 guests, 200+ machines on free play.",
};

export default function PartiesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Backdrop />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-amber">◆ CELEBRATE ◆</p>
          <h1 className="mt-6 font-display font-black uppercase text-5xl sm:text-7xl text-ink leading-[0.95]">
            Parties hit different
            <br />
            <span className="text-neon-magenta">at the arcade.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Birthdays, corporate, reunions, bachelor/bachelorette — let the 80s be your backdrop.
            <strong className="text-ink"> $275 + tax</strong> for 2 hours of free play, up to <strong className="text-ink">40 guests</strong>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <PhotoGrid photos={photos.parties} alt="Private party at StarFighters" cols={3} />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-cyan">◆ WHAT'S INCLUDED</p>
        <h2 className="mt-3 font-display font-black uppercase text-3xl sm:text-4xl text-ink">The package</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Perk icon={<Clock />} tone="magenta" title="2 Hours of Free Play"
            body="Two uninterrupted hours with all 200+ machines on free play. Additional hours $125 each (subject to availability)." />
          <Perk icon={<Users />} tone="cyan" title="Up to 40 Guests"
            body="Bring the whole crew. Plenty of room for everyone to spread out and rotate machines." />
          <Perk icon={<Pizza />} tone="amber" title="Party Area"
            body="Tables and chairs up front. Bring your own food and non-alcoholic drinks — no outside booze." />
          <Perk icon={<Trophy />} tone="green" title="Set Up Competitions"
            body="We'll happily help organize friendly tournaments and high-score contests during your party." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="card-neon rounded-2xl p-7 sm:p-9">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-magenta">◆ THE FINE PRINT</p>
          <h2 className="mt-4 font-display font-black uppercase text-2xl text-ink">Booking Details</h2>
          <ul className="mt-6 space-y-3 text-sm text-ink-muted leading-relaxed">
            <li>• <strong className="text-ink">$275 + tax</strong> base — 2 hours, up to 40 guests, free play.</li>
            <li>• Each additional hour <strong className="text-ink">$125</strong> (subject to availability).</li>
            <li>• You may bring food and non-alcoholic beverages.</li>
            <li>• If you book the slot just before regular hours, your guests can stay and play afterward at no extra cost.</li>
            <li>• <strong className="text-ink">No private events</strong> on monthly pinball tournament days — see the Tournaments page.</li>
            <li>• Regular business hours: Fri & Sat 7 PM–11 PM, Sun 3 PM–7 PM.</li>
            <li>• Allow our team 24–48 hours to get back to you.</li>
          </ul>
          <div className="mt-8 grid gap-2">
            <p className="font-pixel text-[10px] tracking-widest text-neon-cyan">◆ CALL OR TEXT</p>
            {site.phones.map((p) => (
              <a key={p.number} href={`tel:${p.number.replace(/\s/g,"")}`} className="flex items-center gap-2 text-ink hover:text-neon-cyan">
                <Phone size={14} /> {p.number}
              </a>
            ))}
            <p className="mt-2 text-xs text-ink-dim">If the line is busy, leave a message — we'll get back to you ASAP.</p>
          </div>
        </div>

        <div id="private-events-contact-form" className="card-neon rounded-2xl p-7 sm:p-9">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-amber">◆ EVENT INQUIRY</p>
          <h2 className="mt-4 font-display font-black uppercase text-2xl text-ink">Tell us about your party</h2>
          <PartyForm />
        </div>
      </section>
    </>
  );
}

function Perk({ icon, tone, title, body }: { icon: React.ReactNode; tone: "magenta" | "cyan" | "amber" | "green"; title: string; body: string }) {
  const cls = {
    magenta: "text-neon-magenta",
    cyan: "text-neon-cyan",
    amber: "text-neon-amber",
    green: "text-neon-green",
  }[tone];
  return (
    <div className="card-neon rounded-2xl p-6">
      <span className={cls}>{icon}</span>
      <h3 className="mt-4 font-display font-bold text-lg text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink-muted leading-relaxed">{body}</p>
    </div>
  );
}
