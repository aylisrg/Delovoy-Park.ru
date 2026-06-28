import type { Config } from "tailwindcss";
import tokens from "./src/design-tokens.json";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Семантические токены Stitch (source of truth) — bg-surface, text-on-surface,
        // bg-primary-container и т.д.
        ...tokens.colors,
        // Числовые бренд-шкалы. Компоненты используют primary-50..900, accent-*, gold, dark.
        // Сгенерированы от бренд-баз: зелёный #16342d (primary) и золото/коричневый (accent).
        // DEFAULT обязателен, чтобы `bg-primary`/`text-primary` из globals.css продолжали работать.
        primary: {
          DEFAULT: "#16342d",
          50: "#f0f6f4",
          100: "#d9e8e3",
          200: "#b3d1c7",
          300: "#86b3a4",
          400: "#5a917f",
          500: "#3a6f5d",
          600: "#2d4b43",
          700: "#1f3a32",
          800: "#16342d",
          900: "#0e211c",
        },
        accent: {
          DEFAULT: "#c9a84c",
          50: "#fdf6ec",
          100: "#f9e7c8",
          200: "#f0cf94",
          300: "#e8c97a",
          400: "#d9ad55",
          500: "#c9a84c",
          600: "#a8842f",
          700: "#7c5730",
          800: "#5e4124",
          900: "#422d18",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c97a",
          dark: "#9e7a2e",
        },
        // Тёмные фоны hero/footer — в тон зелёному бренду (не сине-навигационные).
        dark: {
          DEFAULT: "#0c1a16",
          light: "#102a23",
          card: "#16342d",
        },
      },
      fontFamily: {
        ...tokens.fonts,
        // font-display используется в Header/Footer (логотип).
        display: ["Manrope", "system-ui", "sans-serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: tokens.borderRadius,
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0c1a16 0%, #102a23 50%, #16342d 100%)",
      },
      animation: tokens.animation,
      keyframes: tokens.keyframes,
    },
  },
  plugins: [],
};
export default config;
