"use client";

export default function Header() {
  return (
    <header className="text-center pt-12 pb-14">
      <div className="inline-flex items-center gap-4 mb-5">
        <div className="w-10 h-[2px] bg-volt" />
        <span className="text-xs uppercase tracking-[0.25em] text-text-secondary font-medium">
          2026
        </span>
        <div className="w-10 h-[2px] bg-volt" />
      </div>
      <h1 className="font-display text-5xl md:text-6xl tracking-[0.12em] text-volt mb-2">
        FIRME
      </h1>
      <p className="font-display text-lg md:text-xl tracking-[0.2em] text-white/60 mb-4">
        AVERAGE IS THE ENEMY
      </p>
      <p className="text-text-secondary text-base tracking-wide">
        Sigue la competencia. Reclama tu gloria.
      </p>
    </header>
  );
}
