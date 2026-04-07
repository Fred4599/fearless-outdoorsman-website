import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  // Dedicated port so this site never shares 3000/4321 with other local projects (e.g. Summit View).
  server: {
    port: 5892,
    strictPort: true,
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
