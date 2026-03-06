"use client";

import { Category, ViewMode } from "@/types";
import LeaderboardCard from "./LeaderboardCard";

interface CategoryColumnProps {
  category: Category;
  viewMode: ViewMode;
}

export default function CategoryColumn({ category, viewMode }: CategoryColumnProps) {
  return (
    <div className="flex-1 min-w-[300px] md:min-w-0">
      <div className="mb-6 pb-4 border-b-2 border-border">
        <h3 className="text-sm uppercase tracking-[0.15em] text-volt font-semibold">
          {category.name}
        </h3>
      </div>

      <div className="divide-y divide-border">
        {category.teams.map((team) => (
          <LeaderboardCard key={team.id} team={team} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
}
