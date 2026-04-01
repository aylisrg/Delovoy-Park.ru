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
      colors: tokens.colors,
      fontFamily: tokens.fonts,
      borderRadius: tokens.borderRadius,
      animation: tokens.animation,
      keyframes: tokens.keyframes,
    },
  },
  plugins: [],
};
export default config;
