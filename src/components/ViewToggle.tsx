"use client";

import { ViewMode } from "@/types";

interface ViewToggleProps {
  activeView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export default function ViewToggle({
  activeView,
  onViewChange,
}: ViewToggleProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex items-center gap-2 text-sm">
        <button
          onClick={() => onViewChange("teams")}
          className={`
            px-4 py-2 tracking-wide transition-colors duration-200 font-medium cursor-pointer
            ${activeView === "teams"
              ? "text-volt"
              : "text-text-secondary hover:text-white"
            }
          `}
        >
          Equipos
        </button>
        <span className="text-text-muted">/</span>
        <button
          onClick={() => onViewChange("mvps")}
          className={`
            px-4 py-2 tracking-wide transition-colors duration-200 font-medium cursor-pointer
            ${activeView === "mvps"
              ? "text-volt"
              : "text-text-secondary hover:text-white"
            }
          `}
        >
          MVPs
        </button>
      </div>
    </div>
  );
}
