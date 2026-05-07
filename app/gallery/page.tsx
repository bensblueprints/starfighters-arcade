import { Backdrop } from "@/components/Backdrop";
import { PhotoGrid } from "@/components/PhotoGrid";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "Gallery — StarFighters Arcade",
  description: "Pictures worth 1,000 plays. Inside the largest retro arcade in the valley.",
};

export default function GalleryPage() {
  // Mix gallery + home + tournaments + parties + events + spf for richer collage
  const all = [...photos.gallery, ...photos.home, ...photos.tournaments, ...photos.parties, ...photos.events, ...photos.spf];
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Backdrop />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <p className="font-pixel text-[10px] tracking-[0.3em] text-neon-cyan">◆ THE FLOOR ◆</p>
          <h1 className="mt-6 font-display font-black uppercase text-5xl sm:text-7xl text-ink leading-[0.95]">
            Pictures worth
            <br />
            <span className="text-neon-magenta">1,000 plays.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Cabinets, pinballs, neon, regulars, tournament nights, party setups — see it for yourself.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <PhotoGrid photos={all} alt="StarFighters Arcade" cols={4} />
      </section>
    </>
  );
}
