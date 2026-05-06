import Link from "next/link";
import { ArrowRight, Gamepad2, Trophy, PartyPopper, MapPin, Clock, Sparkles } from "lucide-react";
import { Backdrop, HorizonGrid } from "@/components/Backdrop";
import { site } from "@/lib/site";
import { arcadeGames, pinballMachines } from "@/lib/games";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Backdrop />
        <HorizonGrid />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-32 sm:pt-28 sm:pb-40">
          <div className="max-w-3xl">
            <p className="font-pixel text-[10px] sm:text-xs tracking-[0.3em] text-neon-cyan animate-flicker">
              ◆ INSERT COIN ◆ MESA, ARIZONA ◆
            </p>
            <h1 className="mt-6 font-display font-black uppercase leading-[0.95] tracking-tight text-5xl sm:text-7xl lg:text-8xl">
              <span className="text-ink">Save the</span>{" "}
              <span className="text-neon-magenta">Universe.</span>
              <br />
              <span className="text-ink">One </span>
              <span className="text-neon-cyan">Quarter</span>
              <span className="text-ink"> at a Time.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted leading-relaxed">
              Arizona's original retro arcade — over <strong className="text-ink">200 rotating classic cabinets</strong>{" "}
              and pinball machines on free play. Built by collectors. Open to everyone.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/visit" className="btn-neon magenta">
                Plan Your Visit <ArrowRight size={16} />
              </Link>
              <Link href="/games" className="btn-neon cyan">
                See All 200+ Games
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              <Stat label="Games" value="200+" tone="magenta" />
              <Stat label="Day Pass" value="$14" tone="cyan" />
              <Stat label="Free Play" value="ALL" tone="amber" />
              <Stat label="Since" value="80s" tone="green" />
            </dl>
          </div>
        </div>
      </section>

      {/* HOURS BAR */}
      <section className="relative border-y border-white/10 bg-bg-surface/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 grid gap-4 sm:grid-cols-3">
          <HoursCard icon={<Clock />} label="Friday" value="7 PM – 11 PM" />
          <HoursCard icon={<Clock />} label="Saturday" value="7 PM – 11 PM" />
          <HoursCard icon={<Clock />} label="Sunday" value="3 PM – 7 PM" />
        </div>
      </section>

      {/* THE STORY */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-amber">◆ THE STARFIGHTERS STORY</p>
            <h2 className="mt-4 font-display font-black uppercase text-4xl sm:text-5xl text-ink">
              A living museum of <span className="text-neon-magenta">arcade culture.</span>
            </h2>
            <div className="mt-6 space-y-4 text-ink-muted leading-relaxed">
              <p>
                Founded by two arcade collectors, our mission is to <strong className="text-ink">promote, preserve, and project</strong>{" "}
                the vintage arcade experience into the future for new generations to discover.
              </p>
              <p>
                StarFighters is a living museum — authentic 80s artifacts spread throughout the floor complement
                the games we've rescued and restored over years. If it's time to reclaim that childhood feeling
                of pizza, quarters, and a Saturday night with friends — this is the place.
              </p>
              <p>
                All ages welcome. (Starfighters under 8 must bring a grown-up.)
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="card-neon rounded-2xl p-6 sm:p-8">
              <ul className="space-y-5">
                <Bullet icon={<Sparkles className="text-neon-magenta" />}
                  title="Largest in the valley"
                  body="200+ rotating obscure & classic retro cabinets plus pinball." />
                <Bullet icon={<Gamepad2 className="text-neon-cyan" />}
                  title="All games on free play"
                  body="$14 day pass. No quarters. No gimmicks." />
                <Bullet icon={<Trophy className="text-neon-amber" />}
                  title="Tournaments & trivia"
                  body="Monthly IFPA pinball, kids tournaments, Friday trivia, and live music." />
                <Bullet icon={<PartyPopper className="text-neon-green" />}
                  title="Private parties"
                  body="Up to 40 guests, 200+ machines, your soundtrack. From $275." />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GAMES TEASER */}
      <section className="relative border-t border-white/10 bg-bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-cyan">◆ THE COLLECTION</p>
              <h2 className="mt-4 font-display font-black uppercase text-4xl sm:text-5xl text-ink">
                {arcadeGames.length}+ cabinets. <span className="text-neon-amber">{pinballMachines.length}+ pinballs.</span>
              </h2>
            </div>
            <Link href="/games" className="btn-neon amber">View Full Game List <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {arcadeGames.slice(0, 16).map((g) => (
              <div key={g} className="card-neon rounded-lg px-4 py-3 text-sm font-medium text-ink-muted hover:text-neon-cyan hover:border-neon-cyan/40 transition">
                {g}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-magenta">◆ WHAT YOU'LL FIND</p>
        <h2 className="mt-4 font-display font-black uppercase text-4xl sm:text-5xl text-ink max-w-3xl">
          More than a place to play. <span className="text-neon-cyan">A social club.</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard
            href="/pinball-tournaments"
            kicker="Compete"
            title="Pinball Tournaments"
            body="Monthly IFPA-ranked tournaments and a free Kids division. Prizes, pizza, and a shot at the leaderboard."
            tone="magenta"
          />
          <FeatureCard
            href="/private-parties"
            kicker="Celebrate"
            title="Private Parties"
            body="Birthdays, corporate, reunions — 2 hours, up to 40 guests, full run of the floor. From $275."
            tone="cyan"
          />
          <FeatureCard
            href="/events"
            kicker="Hang Out"
            title="Events & Trivia"
            body="Trivia nights, music shows, themed events. Real arcades were always about the people."
            tone="amber"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-white/10">
        <Backdrop />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-24 text-center">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-amber">◆ READY PLAYER ONE ◆</p>
          <h2 className="mt-6 font-display font-black uppercase text-4xl sm:text-6xl text-ink">
            Your <span className="text-neon-magenta">future ticket</span>
            <br />
            to the <span className="text-neon-cyan">past</span> awaits.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/visit" className="btn-neon magenta">
              <MapPin size={16} /> Get Directions
            </Link>
            <Link href="/contact" className="btn-neon cyan">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "magenta" | "cyan" | "amber" | "green" }) {
  const cls = { magenta: "text-neon-magenta", cyan: "text-neon-cyan", amber: "text-neon-amber", green: "text-neon-green" }[tone];
  return (
    <div>
      <dt className="font-pixel text-[9px] tracking-widest text-ink-dim uppercase">{label}</dt>
      <dd className={`mt-2 font-display font-black text-3xl sm:text-4xl ${cls}`}>{value}</dd>
    </div>
  );
}

function HoursCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-bg-raised/40 px-5 py-4">
      <span className="text-neon-cyan">{icon}</span>
      <div>
        <p className="font-pixel text-[10px] tracking-widest text-ink-dim uppercase">{label}</p>
        <p className="font-display font-bold text-lg text-ink">{value}</p>
      </div>
    </div>
  );
}

function Bullet({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <span aria-hidden className="mt-1 shrink-0">{icon}</span>
      <div>
        <p className="font-display font-bold text-ink">{title}</p>
        <p className="text-sm text-ink-muted leading-relaxed mt-1">{body}</p>
      </div>
    </li>
  );
}

function FeatureCard({ href, kicker, title, body, tone }: { href: string; kicker: string; title: string; body: string; tone: "magenta" | "cyan" | "amber" }) {
  const map = {
    magenta: { text: "text-neon-magenta", border: "hover:border-neon-magenta/50" },
    cyan: { text: "text-neon-cyan", border: "hover:border-neon-cyan/50" },
    amber: { text: "text-neon-amber", border: "hover:border-neon-amber/50" },
  }[tone];
  return (
    <Link href={href} className={`card-neon group rounded-2xl p-7 transition ${map.border}`}>
      <p className={`font-pixel text-[10px] tracking-[0.3em] ${map.text}`}>◆ {kicker.toUpperCase()}</p>
      <h3 className="mt-4 font-display font-black text-2xl text-ink">{title}</h3>
      <p className="mt-3 text-sm text-ink-muted leading-relaxed">{body}</p>
      <p className={`mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${map.text}`}>
        Learn more <ArrowRight size={14} className="transition group-hover:translate-x-1" />
      </p>
    </Link>
  );
}
