import { Backdrop } from "@/components/Backdrop";
import { arcadeGames, pinballMachines } from "@/lib/games";
import { Gamepad2, CircleDot } from "lucide-react";

export const metadata = {
  title: "Game List — StarFighters Arcade",
  description: "Over 200 rotating classic arcade and pinball machines on free play in Mesa, AZ.",
};

export default function GamesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Backdrop />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-cyan">◆ THE COLLECTION ◆</p>
          <h1 className="mt-6 font-display font-black uppercase text-5xl sm:text-7xl text-ink leading-[0.95]">
            <span className="text-neon-magenta">{arcadeGames.length}+</span> cabinets.
            <br />
            <span className="text-neon-amber">{pinballMachines.length}+</span> pinballs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Largest public-play collection in the state. The lineup rotates continuously — there's always
            something new (well, old) to discover. Every game is on <strong className="text-ink">free play</strong>{" "}
            with a $14 day pass.
          </p>
        </div>
      </section>

      <GameSection
        title="Arcade Cabinets"
        kicker="Cabinets"
        icon={<Gamepad2 />}
        tone="cyan"
        games={arcadeGames}
      />
      <GameSection
        title="Pinball Machines"
        kicker="Pinball"
        icon={<CircleDot />}
        tone="amber"
        games={pinballMachines}
      />
    </>
  );
}

function GameSection({
  title,
  kicker,
  icon,
  tone,
  games,
}: {
  title: string;
  kicker: string;
  icon: React.ReactNode;
  tone: "cyan" | "amber";
  games: string[];
}) {
  const cls = {
    cyan: { text: "text-neon-cyan", border: "hover:border-neon-cyan/50 hover:text-neon-cyan" },
    amber: { text: "text-neon-amber", border: "hover:border-neon-amber/50 hover:text-neon-amber" },
  }[tone];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <div className="flex items-center gap-3">
        <span className={cls.text}>{icon}</span>
        <p className={`font-pixel text-[10px] tracking-[0.3em] ${cls.text}`}>◆ {kicker.toUpperCase()}</p>
      </div>
      <h2 className="mt-3 font-display font-black uppercase text-3xl sm:text-4xl text-ink">{title}</h2>
      <p className="mt-2 text-sm text-ink-dim font-pixel">[{games.length} machines]</p>
      <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {games.map((g) => (
          <li
            key={g}
            className={`card-neon rounded-lg px-4 py-3 text-sm font-medium text-ink-muted transition ${cls.border}`}
          >
            {g}
          </li>
        ))}
      </ul>
    </section>
  );
}
