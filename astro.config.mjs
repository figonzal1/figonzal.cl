import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://www.figonzal.cl",
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
