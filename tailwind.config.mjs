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
        fpurple: "#5919cff8",
        "fpurple-box": "#5919cf80",
      },
      boxShadow: {
        fgreen: "0 0 25px #26d6ad",
      },
      animation: {
        wave: "wave 2.1s infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(20deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(20deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
