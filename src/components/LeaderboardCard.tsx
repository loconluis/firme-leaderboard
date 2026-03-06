"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Team, ViewMode } from "@/types";

interface LeaderboardCardProps {
  team: Team;
  viewMode: ViewMode;
}

const rankStyles = {
  1: {
    badge: "bg-transparent border-2 border-volt",
  },
  2: {
    badge: "bg-white/15 text-white border border-white/25",
  },
  3: {
    badge: "bg-white/8 text-white/80 border border-white/15",
  },
};

const rankEmojis: Record<number, string> = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

export default function LeaderboardCard({ team, viewMode }: LeaderboardCardProps) {
  const [showModal, setShowModal] = useState(false);
  const isTopThree = team.rank <= 3;
  const isFirstPlace = team.rank === 1;
  const style = isTopThree ? rankStyles[team.rank as 1 | 2 | 3] : null;
  const isMVPMode = viewMode === "mvps";

  const displayName = isMVPMode && team.mvp ? team.mvp.name : team.name;
  const subtitle = isMVPMode && team.mvp ? team.name : undefined;

  const handleCelebrate = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#d8f200", "#ffffff"],
    });

    setShowModal(true);
    setTimeout(() => setShowModal(false), 2500);
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div className="absolute inset-0 bg-black/90" />
          <div className="relative z-10 text-center animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-8 border-2 border-volt rounded-full flex items-center justify-center">
              <span className="text-5xl">🏆</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-white tracking-[0.1em] mb-3">
              {team.name}
            </h2>
            <p className="text-volt text-lg md:text-xl font-medium tracking-wide mb-6">
              ¡MANTÉN EL RITMO!
            </p>
            <p className="text-text-secondary text-base">
              Vas ganando
            </p>
          </div>
        </div>
      )}

      <div
        className={`
          group flex items-center gap-4 py-4 px-2
          transition-all duration-200
          ${isFirstPlace ? "" : "hover:bg-white/[0.03]"}
          ${isFirstPlace ? "bg-volt/[0.05]" : ""}
        `}
      >
        <div
          className={`
            w-8 h-8 rounded flex items-center justify-center
            font-display text-base
            ${style ? style.badge : "bg-transparent text-text-secondary"}
          `}
        >
          {isTopThree ? (
            <span className="text-lg">{rankEmojis[team.rank]}</span>
          ) : (
            team.rank
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-base text-white truncate font-medium">
            {displayName}
          </h4>
          {subtitle && (
            <p className="text-sm text-text-muted truncate mt-1">
              {subtitle}
            </p>
          )}
        </div>

        {!isMVPMode && (
          <div className="text-right tabular-nums flex items-center gap-3">
            <span className="text-lg font-semibold text-volt">
              {team.points}
              {isFirstPlace && (
                <button
                  onClick={handleCelebrate}
                  className="ml-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-volt/10 hover:bg-volt/20 transition-colors cursor-pointer"
                  title="Celebrar"
                >
                  <span className="text-sm">🎉</span>
                </button>
              )}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
