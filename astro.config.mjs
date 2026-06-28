import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-CL",
          en: "en-US",
        },
      },
    }),
  ],
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
  redirects: {
    "/proyectos": "/proyectos/movil",
    "/en/projects": "/en/projects/mobile",
  },
});
