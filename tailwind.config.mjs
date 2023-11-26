/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans], // Agrega 'Raleway' al principio de la lista
      },
      fontWeight: {
        500: "500",
      },
      colors: {
        fgreen: "#26d6ad",
        fpurple: "#623686",
        "fpurple-border": "#5919cff8",
        "fpurple-box-shadow": "#5919cf80",
      },
    },
  },
  plugins: [],
};
