export type GroupType = "men" | "women" | "mixed";

export type CategoryType = "A" | "B" | "C";

export type ViewMode = "teams" | "mvps";

export interface MVP {
  name: string;
  points: number;
}

export interface Team {
  id: string;
  name: string;
  points: number;
  rank: number;
  mvp?: MVP;
}

export interface Category {
  id: CategoryType;
  name: string;
  weightRange: string;
  teams: Team[];
}

export interface Group {
  id: GroupType;
  name: string;
  categories: Category[];
}

export interface LeaderboardData {
  lastUpdated: string;
  groups: Group[];
}
