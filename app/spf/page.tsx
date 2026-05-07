import Link from "next/link";
import { Backdrop } from "@/components/Backdrop";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Trophy } from "lucide-react";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "Starfighters Pinball Festival (SPF) — StarFighters Arcade",
  description: "The annual Starfighters Pinball Festival. Recap, divisions, and what's coming next.",
};

const divisions = [
  "Main Tournament — Division A",
  "Main Tournament — Division B",
  "Main Tournament — Division C",
  "Classics Tournament",
  "Women's Tournament",
  "Max Match Play",
  "Fair Strikes Knockout",
];

export default function SPFPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Backdrop />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-magenta">◆ THE BIG ONE ◆</p>
          <h1 className="mt-6 font-display font-black uppercase text-5xl sm:text-7xl text-ink leading-[0.95]">
            Starfighters
            <br />
            <span className="text-neon-cyan">Pinball Festival</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Our flagship annual tournament. Multiple divisions, a women's bracket, a classics bracket,
            and pure pinball mayhem.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <PhotoGrid photos={photos.spf.slice(0, 6)} alt="Starfighters Pinball Festival" cols={3} />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-amber">◆ SPF '26 RESULTS</p>
        <h2 className="mt-3 font-display font-black uppercase text-3xl sm:text-4xl text-ink">
          Congrats to all the winners!
        </h2>
        <p className="mt-3 text-ink-muted">Champions across every division — full results posted in-house and on our socials.</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => (
            <li key={d} className="card-neon rounded-lg px-5 py-4 flex items-center gap-3">
              <Trophy className="text-neon-amber shrink-0" size={18} />
              <span className="text-sm text-ink-muted">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="card-neon rounded-2xl p-7 sm:p-10 grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-cyan">◆ STAY IN THE LOOP</p>
            <h2 className="mt-4 font-display font-black uppercase text-3xl text-ink">SPF '27 is coming</h2>
            <p className="mt-3 text-ink-muted">
              Follow our SPF Facebook page for date announcements, division details, and a look back at last year.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link href="https://www.facebook.com/" target="_blank" rel="noopener" className="btn-neon magenta">
              SPF Facebook Page
            </Link>
            <Link href="/pinball-tournaments" className="btn-neon cyan">
              Monthly Tournaments
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
