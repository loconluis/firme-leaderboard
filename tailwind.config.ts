import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors - Dark theme
        background: "#0A0E27",
        "card-bg": "#1A1F3A",
        "surface-elevated": "#252B48",
        // Accent colors - Energy theme
        "primary-energy": "#FF6B35",
        "secondary-energy": "#00D9FF",
        "achievement-gold": "#FFD700",
        "success-green": "#00F5A0",
        "alert-red": "#FF3366",
        // Text colors
        "text-primary": "#FFFFFF",
        "text-secondary": "#B4B4C7",
        "text-muted": "#6B6B80",
        // Borders
        border: "#2A2F4F",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
