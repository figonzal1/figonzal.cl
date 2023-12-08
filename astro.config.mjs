import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  //Disable 4 dev
  /*vite: {
    ssr: {
      noExternal: ["react-github-calendar"],
    },
  },*/
});
