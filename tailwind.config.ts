import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vahiny: {
          DEFAULT: "#C7372B", // rouge — énergie, passion du jeu
          dark: "#9E2A21",
          light: "#E2574A",
        },
        tana: {
          DEFAULT: "#2E7D4F", // vert — espoir, terre malgache
          dark: "#225D3B",
          light: "#4FA873",
        },
        masoandro: {
          DEFAULT: "#E8A23A", // or/soleil — couleur signature, médailles, coucher de soleil sur Toamasina
          dark: "#C9821D",
          light: "#F4C272",
        },
        ardoise: {
          DEFAULT: "#43474D", // gris ardoise — texte
          50: "#F4F3F1",
          100: "#E7E5E1",
          300: "#B7B7B6",
          500: "#7A7C80",
          700: "#43474D",
          900: "#23262A",
        },
        nacre: "#FBF8F3", // blanc cassé — fond clair
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        body: ["var(--font-hanken)"],
      },
      animation: {
        "drift-1": "drift1 22s ease-in-out infinite",
        "drift-2": "drift2 26s ease-in-out infinite",
        "drift-3": "drift3 30s ease-in-out infinite",
        "ball-arc": "ballArc 7s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        drift1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(4%, 6%) scale(1.08)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-5%, -4%) scale(1.05)" },
        },
        drift3: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(3%, -5%) scale(1.1)" },
        },
        ballArc: {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "8%": { opacity: "1" },
          "92%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
