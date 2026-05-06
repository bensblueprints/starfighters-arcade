import Link from "next/link";
import { Backdrop } from "@/components/Backdrop";
import { Trophy, Calendar, Pizza, Mail, Phone } from "lucide-react";
import { tournamentSchedule } from "@/lib/games";
import { site } from "@/lib/site";

export const metadata = {
  title: "Pinball Tournaments — StarFighters Arcade",
  description: "Monthly IFPA-ranked pinball tournaments plus a free Kids division. Mesa, AZ.",
};

export default function TournamentsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Backdrop />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-magenta">◆ COMPETE ◆</p>
          <h1 className="mt-6 font-display font-black uppercase text-5xl sm:text-7xl text-ink leading-[0.95]">
            Pinball <span className="text-neon-magenta">Tournaments</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Every month. Adults and kids. IFPA-ranked. The largest selection of pinball in the valley — in play.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-6 lg:grid-cols-2">
        <div className="card-neon rounded-2xl p-7">
          <Trophy className="text-neon-magenta" />
          <h2 className="mt-4 font-display font-black uppercase text-2xl text-ink">Monthly IFPA Pinball</h2>
          <p className="mt-2 font-pixel text-[10px] tracking-widest text-neon-cyan">◆ NEXT: SAT MAY 9, 2026 @ 1 PM</p>
          <ul className="mt-5 space-y-2 text-sm text-ink-muted leading-relaxed">
            <li>• Doors at 12:30 PM for sign-in & warmup</li>
            <li>• Matchplay format — promptly starts at 1 PM</li>
            <li>• Prizes for 1st, 2nd, 3rd place</li>
            <li>• <strong className="text-ink">$14/person</strong> (no monthly passes for tournament day)</li>
            <li>• Food & beverages included</li>
            <li>• Entry includes general admission for Saturday night</li>
            <li>• Results reported to IFPA for official rankings</li>
          </ul>
        </div>

        <div className="card-neon rounded-2xl p-7">
          <Pizza className="text-neon-amber" />
          <h2 className="mt-4 font-display font-black uppercase text-2xl text-ink">Kids Tournament (16 & under)</h2>
          <p className="mt-2 font-pixel text-[10px] tracking-widest text-neon-cyan">◆ FREE · NEXT: SAT MAY 9, 2026 @ 10:45 AM</p>
          <ul className="mt-5 space-y-2 text-sm text-ink-muted leading-relaxed">
            <li>• 4 rounds of group play</li>
            <li>• 1st, 2nd, 3rd place prizes</li>
            <li>• <strong className="text-ink">Free pizza for all players</strong></li>
            <li>• New players always welcome</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-amber">◆ CALENDAR</p>
        <h2 className="mt-3 font-display font-black uppercase text-3xl sm:text-4xl text-ink">2026–2027 Schedule</h2>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {tournamentSchedule.map((t) => (
            <li key={t.date} className="card-neon rounded-lg px-5 py-4 flex items-start gap-4">
              <Calendar className="text-neon-cyan shrink-0 mt-1" size={20} />
              <div>
                <p className="font-display font-bold text-ink">{t.date}</p>
                <p className="text-sm text-ink-muted mt-1">{t.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-6 md:grid-cols-2">
        <div className="card-neon rounded-2xl p-7">
          <h2 className="font-display font-black uppercase text-2xl text-ink">April 2026 Champions</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-pixel text-[10px] tracking-widest text-neon-magenta">◆ ADULT</p>
              <ol className="mt-2 space-y-1 text-sm text-ink-muted">
                <li>1st — Mark Pearson</li>
                <li>2nd — Mark Lindbergh</li>
                <li>3rd — Adam Horton</li>
              </ol>
            </div>
            <div>
              <p className="font-pixel text-[10px] tracking-widest text-neon-cyan">◆ KIDS</p>
              <ol className="mt-2 space-y-1 text-sm text-ink-muted">
                <li>1st — Michael K.</li>
                <li>2nd — Daniel M.</li>
                <li>3rd — Nova U.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="card-neon rounded-2xl p-7">
          <h2 className="font-display font-black uppercase text-2xl text-ink">Women's Pinball League</h2>
          <p className="mt-3 text-sm text-ink-muted">
            <strong className="text-ink">Belles & Chimes</strong> — a pinball club for women.
          </p>
          <a href="mailto:playmorepinballaz@gmail.com" className="btn-neon cyan mt-6 text-xs">
            <Mail size={14} /> playmorepinballaz@gmail.com
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="card-neon rounded-2xl p-7 sm:p-10 text-center">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-amber">◆ QUESTIONS?</p>
          <h2 className="mt-4 font-display font-black uppercase text-3xl sm:text-4xl text-ink">
            Get in touch with our pinball crew
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`tel:${site.pinballPhone.replace(/\s/g,"")}`} className="btn-neon magenta">
              <Phone size={14} /> {site.pinballPhone}
            </a>
            <a href={`mailto:${site.pinballEmail}`} className="btn-neon cyan">
              <Mail size={14} /> {site.pinballEmail}
            </a>
            <Link href="https://www.ifpapinball.com/calendar/" target="_blank" rel="noopener" className="btn-neon amber">
              IFPA Calendar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
