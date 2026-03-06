"use client";

import { useState, useEffect } from "react";
import {
  GroupType,
  Group,
  LeaderboardData,
  ViewMode,
  CategoryType,
} from "@/types";
import { fetchLeaderboardData } from "@/lib/data";
import Header from "@/components/Header";
import GroupTabs from "@/components/GroupTabs";
import CategoryColumn from "@/components/CategoryColumn";
import LastUpdated from "@/components/LastUpdated";
import ViewToggle from "@/components/ViewToggle";
import Footer from "@/components/Footer";

export default function Home() {
  // SEO: Dynamic page title based on active group/category
  const [pageTitle, setPageTitle] = useState("Ranking de Competencia Fitness");
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [activeGroup, setActiveGroup] = useState<GroupType>("men");
  const [activeCategory, setActiveCategory] = useState<CategoryType>("A");
  const [viewMode, setViewMode] = useState<ViewMode>("teams");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const leaderboardData = await fetchLeaderboardData();
      setData(leaderboardData);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-6 h-6 border-2 border-volt border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  if (!data) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-text-secondary text-base">No data available</p>
      </main>
    );
  }

  const currentGroup = data.groups.find((g) => g.id === activeGroup) as Group;

  return (
    <>
      {/* Hidden H1 for SEO - accessible to screen readers */}
      <h1 className="sr-only">
        Firme Challenge - Leaderboard de Competencia Fitness
      </h1>

      <main
        className="min-h-screen px-6 md:px-12 lg:px-16 max-w-6xl mx-auto"
        role="main"
      >
        {/* Semantic: Header Section */}
        <header role="banner">
          <Header />
        </header>

        {/* View Toggle - Controls for leaderboard view */}
        <nav aria-label="Controles de vista del leaderboard">
          <ViewToggle activeView={viewMode} onViewChange={setViewMode} />
        </nav>

        {/* Group Navigation Tabs */}
        <nav aria-label="Categorías de competición" role="navigation">
          <GroupTabs
            groups={data.groups.map((g) => ({ id: g.id, name: g.name }))}
            activeGroup={activeGroup}
            onGroupChange={setActiveGroup}
          />
        </nav>

        {/* Mobile Category Dropdown */}
        <div className="md:hidden pt-6">
          <label htmlFor="category-select" className="sr-only">
            Seleccionar categoría
          </label>
          <select
            id="category-select"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value as CategoryType)}
            className="w-full bg-surface-elevated border border-border rounded-lg px-4 py-3 text-white text-sm cursor-pointer focus:outline-none focus:border-volt appearance-none"
            aria-label="Seleccionar categoría"
          >
            {currentGroup.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Leaderboard Section - Main Content */}
        <section
          aria-label="Leaderboard de rankings"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Desktop: All categories / Mobile: Selected category */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 pt-6 md:pt-10">
            {/* Desktop: Show all categories */}
            <div className="hidden md:contents">
              {currentGroup.categories.map((category) => (
                <CategoryColumn
                  key={category.id}
                  category={category}
                  viewMode={viewMode}
                />
              ))}
            </div>

            {/* Mobile: Show only selected category */}
            <div className="md:hidden">
              {currentGroup.categories
                .filter((cat) => cat.id === activeCategory)
                .map((category) => (
                  <CategoryColumn
                    key={category.id}
                    category={category}
                    viewMode={viewMode}
                  />
                ))}
            </div>
          </div>
        </section>

        {/* Last Updated Timestamp */}
        <aside aria-label="Información de actualización">
          <LastUpdated date={data.lastUpdated} />
        </aside>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
