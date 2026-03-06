import { LeaderboardData, Group, Category, Team, GroupType, CategoryType } from "@/types";

// Mock data - This will be replaced with Google Sheets data
export const mockLeaderboardData: LeaderboardData = {
  lastUpdated: new Date().toISOString(),
  groups: [
    {
      id: "men",
      name: "Hombres",
      categories: [
        {
          id: "A",
          name: "Categoría A",
          weightRange: "< 80kg",
          teams: [
            { id: "1", name: "Thunder Eagles", points: 285, rank: 1, mvp: { name: "Carlos Mendez", points: 95 } },
            { id: "2", name: "Iron Wolves", points: 265, rank: 2, mvp: { name: "Miguel Torres", points: 88 } },
            { id: "3", name: "Storm Riders", points: 240, rank: 3, mvp: { name: "Andres Ruiz", points: 82 } },
            { id: "4", name: "Night Hawks", points: 220, rank: 4, mvp: { name: "Diego Flores", points: 75 } },
            { id: "5", name: "Fire Dragons", points: 195, rank: 5, mvp: { name: "Roberto Sanchez", points: 68 } },
          ],
        },
        {
          id: "B",
          name: "Categoría B",
          weightRange: "80kg - 100kg",
          teams: [
            { id: "1", name: "Power Titans", points: 320, rank: 1, mvp: { name: "Hector Ramirez", points: 105 } },
            { id: "2", name: "Steel Giants", points: 295, rank: 2, mvp: { name: "Fernando Cruz", points: 98 } },
            { id: "3", name: "Rock Crushers", points: 270, rank: 3, mvp: { name: "Javier Lopez", points: 90 } },
            { id: "4", name: "Mountain Kings", points: 245, rank: 4, mvp: { name: "Oscar Morales", points: 82 } },
            { id: "5", name: "Brute Force", points: 210, rank: 5, mvp: { name: "Luis Herrera", points: 72 } },
          ],
        },
        {
          id: "C",
          name: "Categoría C",
          weightRange: "100kg+",
          teams: [
            { id: "1", name: "Heavy Hitters", points: 350, rank: 1, mvp: { name: "Marco Garcia", points: 115 } },
            { id: "2", name: "Mega Beasts", points: 330, rank: 2, mvp: { name: "Pablo Diaz", points: 108 } },
            { id: "3", name: "Titan Force", points: 295, rank: 3, mvp: { name: "Ricardo Vargas", points: 98 } },
            { id: "4", name: "Demolition Crew", points: 260, rank: 4, mvp: { name: "Eduardo Reyes", points: 88 } },
            { id: "5", name: "Absolute Power", points: 225, rank: 5, mvp: { name: "Sergio Mendoza", points: 78 } },
          ],
        },
      ],
    },
    {
      id: "women",
      name: "Mujeres",
      categories: [
        {
          id: "A",
          name: "Categoría A",
          weightRange: "< 80kg",
          teams: [
            { id: "1", name: "Lightning Queens", points: 275, rank: 1, mvp: { name: "Sofia Hernandez", points: 92 } },
            { id: "2", name: "Phoenix Rising", points: 255, rank: 2, mvp: { name: "Isabella Martinez", points: 85 } },
            { id: "3", name: "Valkyrie Squad", points: 230, rank: 3, mvp: { name: "Valentina Gomez", points: 78 } },
            { id: "4", name: "Artemis Team", points: 205, rank: 4, mvp: { name: "Camila Rodriguez", points: 70 } },
            { id: "5", name: "Wonder Force", points: 180, rank: 5, mvp: { name: "Lucia Fernandez", points: 62 } },
          ],
        },
        {
          id: "B",
          name: "Categoría B",
          weightRange: "80kg - 100kg",
          teams: [
            { id: "1", name: "Amazon Warriors", points: 310, rank: 1, mvp: { name: "Ximena Castillo", points: 102 } },
            { id: "2", name: "Power Ladies", points: 285, rank: 2, mvp: { name: "Andrea Moreno", points: 95 } },
            { id: "3", name: "Strong Sisters", points: 260, rank: 3, mvp: { name: "Mariana Alvarez", points: 88 } },
            { id: "4", name: "Iron Maidens", points: 235, rank: 4, mvp: { name: "Gabriela Torres", points: 80 } },
            { id: "5", name: "Force United", points: 200, rank: 5, mvp: { name: "Diana Ortiz", points: 70 } },
          ],
        },
        {
          id: "C",
          name: "Categoría C",
          weightRange: "100kg+",
          teams: [
            { id: "1", name: "Queen Beasts", points: 340, rank: 1, mvp: { name: "Patricia Sanchez", points: 112 } },
            { id: "2", name: "Mighty Women", points: 315, rank: 2, mvp: { name: "Alejandra Ruiz", points: 105 } },
            { id: "3", name: "Power Divas", points: 285, rank: 3, mvp: { name: "Monica Flores", points: 95 } },
            { id: "4", name: "Titan Ladies", points: 250, rank: 4, mvp: { name: "Rosa Mendez", points: 85 } },
            { id: "5", name: "Supreme Force", points: 215, rank: 5, mvp: { name: "Carmen Vega", points: 75 } },
          ],
        },
      ],
    },
    {
      id: "mixed",
      name: "Mixto",
      categories: [
        {
          id: "A",
          name: "Categoría A",
          weightRange: "< 80kg",
          teams: [
            { id: "1", name: "Unity Force", points: 290, rank: 1, mvp: { name: "Alex Rivera", points: 96 } },
            { id: "2", name: "Duo Power", points: 270, rank: 2, mvp: { name: "Jordan Lee", points: 89 } },
            { id: "3", name: "Mix Masters", points: 245, rank: 3, mvp: { name: "Taylor Kim", points: 82 } },
            { id: "4", name: "Combined Strength", points: 215, rank: 4, mvp: { name: "Casey Brown", points: 73 } },
            { id: "5", name: "Team Fusion", points: 185, rank: 5, mvp: { name: "Morgan Chen", points: 64 } },
          ],
        },
        {
          id: "B",
          name: "Categoría B",
          weightRange: "80kg - 100kg",
          teams: [
            { id: "1", name: "Power Pairs", points: 325, rank: 1, mvp: { name: "Jamie Wilson", points: 108 } },
            { id: "2", name: "Dynamic Duo", points: 300, rank: 2, mvp: { name: "Riley Cooper", points: 100 } },
            { id: "3", name: "Mixed Metals", points: 275, rank: 3, mvp: { name: "Quinn Parker", points: 92 } },
            { id: "4", name: "Unity Strong", points: 240, rank: 4, mvp: { name: "Avery Thompson", points: 82 } },
            { id: "5", name: "Fusion Force", points: 205, rank: 5, mvp: { name: "Dakota Evans", points: 72 } },
          ],
        },
        {
          id: "C",
          name: "Categoría C",
          weightRange: "100kg+",
          teams: [
            { id: "1", name: "Heavy Unity", points: 355, rank: 1, mvp: { name: "Sam Rodriguez", points: 118 } },
            { id: "2", name: "Mega Mix", points: 335, rank: 2, mvp: { name: "Charlie Bennett", points: 110 } },
            { id: "3", name: "Titan Duo", points: 300, rank: 3, mvp: { name: "Jess Martinez", points: 100 } },
            { id: "4", name: "Power Couple", points: 265, rank: 4, mvp: { name: "Reese Collins", points: 90 } },
            { id: "5", name: "United Giants", points: 230, rank: 5, mvp: { name: "Skyler Hayes", points: 80 } },
          ],
        },
      ],
    },
  ],
};

// Google Sheets API configuration
const GOOGLE_SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || "";
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "";

// Category weight ranges
const categoryWeightRanges: Record<CategoryType, string> = {
  A: "< 80kg",
  B: "80kg - 100kg",
  C: "100kg+",
};

export async function fetchLeaderboardData(): Promise<LeaderboardData> {
  // If Google Sheets is configured, fetch from there
  if (GOOGLE_SHEET_ID && GOOGLE_API_KEY) {
    try {
      // Fetch all three sheets (Men, Women, Mixed) and the last modified time
      const [menData, womenData, mixedData, lastModified] = await Promise.all([
        fetchSheet("Men"),
        fetchSheet("Women"),
        fetchSheet("Mixed"),
        fetchLastModifiedTime(),
      ]);

      return {
        lastUpdated: lastModified || new Date().toISOString(),
        groups: [
          { id: "men", name: "Hombres", categories: parseSheetData(menData) },
          { id: "women", name: "Mujeres", categories: parseSheetData(womenData) },
          { id: "mixed", name: "Mixto", categories: parseSheetData(mixedData) },
        ],
      };
    } catch (error) {
      console.error("Error fetching from Google Sheets:", error);
      // Fall back to mock data
      return mockLeaderboardData;
    }
  }

  // Return mock data for development
  return mockLeaderboardData;
}

async function fetchLastModifiedTime(): Promise<string | null> {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/Config!A:B?key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const rows = data.values || [];

    // Find the lastUpdated row
    const configRow = rows.find((row: string[]) => row[0]?.toLowerCase() === 'lastupdated');
    return configRow?.[1] || null;
  } catch {
    return null;
  }
}

async function fetchSheet(sheetName: string): Promise<string[][]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${sheetName}!A:F?key=${GOOGLE_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error(`Error fetching ${sheetName}:`, errorData);
    throw new Error(`Failed to fetch sheet: ${sheetName} - ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();
  return data.values || [];
}

function parseSheetData(rows: string[][]): Category[] {
  // Skip header row if present
  const dataRows = rows[0]?.[0]?.toLowerCase() === "rank" ? rows.slice(1) : rows;

  // Group by category
  const categoryMap = new Map<CategoryType, Team[]>();

  dataRows.forEach((row, index) => {
    const [rankStr, teamName, pointsStr, mvpName, category] = row;

    if (!teamName || !category) return;

    const cat = category.toUpperCase() as CategoryType;
    if (!categoryMap.has(cat)) {
      categoryMap.set(cat, []);
    }

    const team: Team = {
      id: `${cat}-${index}`,
      name: teamName,
      points: parseInt(pointsStr) || 0,
      rank: parseInt(rankStr) || index + 1,
    };

    if (mvpName) {
      team.mvp = {
        name: mvpName,
        points: 0, // MVP points not shown, so we don't need them
      };
    }

    categoryMap.get(cat)?.push(team);
  });

  // Convert to array and sort by rank
  const categories: Category[] = [];

  (["A", "B", "C"] as CategoryType[]).forEach((catId) => {
    const teams = categoryMap.get(catId) || [];
    if (teams.length > 0) {
      categories.push({
        id: catId,
        name: `Categoría ${catId}`,
        weightRange: categoryWeightRanges[catId],
        teams: teams.sort((a, b) => a.rank - b.rank),
      });
    }
  });

  return categories;
}
