type Props = {
  photos: string[];
  alt: string;
  cols?: 2 | 3 | 4;
};

export function PhotoGrid({ photos, alt, cols = 3 }: Props) {
  const colsClass = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" }[cols];
  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-4`}>
      {photos.map((src, i) => (
        <figure
          key={src}
          className="group relative overflow-hidden rounded-xl border border-white/10 aspect-[4/3] bg-bg-raised/40"
        >
          <img
            src={src}
            alt={`${alt} ${i + 1}`}
            loading={i < 3 ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
          <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-neon-cyan/40 transition" />
        </figure>
      ))}
    </div>
  );
}

export function PhotoStrip({ photos, alt }: { photos: string[]; alt: string }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
      {photos.map((src, i) => (
        <figure key={src} className="snap-start shrink-0 w-[78%] sm:w-[40%] lg:w-[28%] aspect-[4/3] relative overflow-hidden rounded-xl border border-white/10">
          <img src={src} alt={`${alt} ${i + 1}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-white/5" />
        </figure>
      ))}
    </div>
  );
}
