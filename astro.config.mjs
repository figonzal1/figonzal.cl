import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
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
  //Disable 4 dev
  vite: {
    ssr: {
      noExternal: ["react-github-calendar"],
    },
  },
});
