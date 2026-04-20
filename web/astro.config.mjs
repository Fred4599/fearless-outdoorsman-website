import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  site: "https://fearlessoutdoorsman.com",
  // Dedicated port so this site never shares 3000/4321 with other local projects (e.g. Summit View).
  // Dev URL must match the port printed in the terminal. If 5892 is already taken by a stale
  // `astro dev`, Vite would silently use 5893+ and old tabs on 5892 would 404 new routes (e.g. /golf-tournament).
  server: {
    port: 5892,
    strictPort: true,
  },
  vite: {
    server: {
      port: 5892,
      strictPort: true,
    },
  },
  preview: {
    port: 5892,
    strictPort: true,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    alpinejs({
      entrypoint: "./src/alpine-entry.ts",
    }),
  ],
});
