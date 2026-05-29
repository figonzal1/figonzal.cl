import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://www.figonzal.cl",
  server: {
    host: "0.0.0.0",
    port: 4321,
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  routing: {
    prefixDefaultLocale: false,
  },
});
