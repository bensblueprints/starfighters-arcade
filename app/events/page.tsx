import Link from "next/link";
import { Backdrop } from "@/components/Backdrop";
import { Calendar, Music, Users, Sparkles } from "lucide-react";

export const metadata = {
  title: "Events — StarFighters Arcade",
  description: "Tournaments, trivia nights, music shows, and themed events at Mesa's largest retro arcade.",
};

const previousEvents = [
  "Back To The Future Day",
  "Arcades for Autism Awareness Raffle",
  "Star Wars Day",
  "Scottsdale Parks & Rec",
  "Rewind 90's Night",
  "U-Fest (2025)",
  "Game On Expo (2025)",
];

const standingEvents = [
  { icon: <Sparkles />, tone: "magenta", title: "Friday Trivia Night", body: "Test your retro chops weekly. Teams welcome — prizes for top tables." },
  { icon: <Calendar />, tone: "cyan", title: "Monthly Pinball Tournaments", body: "IFPA-ranked adult bracket and a free Kids division. Held Saturdays — see schedule." },
  { icon: <Music />, tone: "amber", title: "Music Shows & Holiday Parties", body: "Live shows and themed nights throughout the year. Follow us for the latest." },
  { icon: <Users />, tone: "green", title: "Community Pop-ups", body: "Charity events, conventions, and meetups with the AZ retro community." },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Backdrop />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-cyan">◆ HANG OUT ◆</p>
          <h1 className="mt-6 font-display font-black uppercase text-5xl sm:text-7xl text-ink leading-[0.95]">
            Don't miss our <span className="text-neon-magenta">upcoming events.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            More than a place to play — an active social club bringing together collectors, enthusiasts,
            and anyone chasing that arcade-night feeling.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-amber">◆ STANDING EVENTS</p>
        <h2 className="mt-3 font-display font-black uppercase text-3xl sm:text-4xl text-ink">Always something on</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {standingEvents.map((e) => {
            const cls = {
              magenta: "text-neon-magenta",
              cyan: "text-neon-cyan",
              amber: "text-neon-amber",
              green: "text-neon-green",
            }[e.tone as "magenta"|"cyan"|"amber"|"green"];
            return (
              <div key={e.title} className="card-neon rounded-2xl p-6">
                <span className={cls}>{e.icon}</span>
                <h3 className="mt-4 font-display font-bold text-lg text-ink">{e.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{e.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-magenta">◆ PREVIOUSLY ON STARFIGHTERS</p>
        <h2 className="mt-3 font-display font-black uppercase text-3xl sm:text-4xl text-ink">Past gatherings we hosted</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {previousEvents.map((e) => (
            <li key={e} className="card-neon rounded-lg px-5 py-4 text-sm text-ink-muted hover:text-neon-cyan transition">
              {e}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="card-neon rounded-2xl p-7 sm:p-10 text-center">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-amber">◆ HOST AT STARFIGHTERS</p>
          <h2 className="mt-4 font-display font-black uppercase text-3xl sm:text-4xl text-ink">
            Got an event idea? <span className="text-neon-cyan">Let's talk.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/private-parties" className="btn-neon magenta">Book a Private Party</Link>
            <Link href="/contact" className="btn-neon cyan">Pitch an Event</Link>
          </div>
        </div>
      </section>
    </>
  );
}
