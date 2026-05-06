export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 starfield opacity-40" />
      <div className="absolute inset-x-0 -top-32 h-[60vh] bg-[radial-gradient(ellipse_at_center,rgba(255,43,214,0.25),transparent_60%)]" />
      <div className="absolute -bottom-24 inset-x-0 h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-scanlines opacity-50 mix-blend-overlay" />
    </div>
  );
}

export function HorizonGrid() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] [perspective:1000px]">
      <div
        className="absolute inset-x-[-20%] bottom-0 h-full origin-top"
        style={{
          transform: "rotateX(60deg)",
          backgroundImage:
            "linear-gradient(to right, rgba(255,43,214,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,240,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to top, #000 30%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to top, #000 30%, transparent 90%)",
        }}
      />
    </div>
  );
}
