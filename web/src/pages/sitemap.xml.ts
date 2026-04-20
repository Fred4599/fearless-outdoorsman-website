import type { APIRoute } from "astro";
import { siteUrl } from "../data/seo";

/** Keep in sync with the pages under src/pages/. `changefreq`/`priority` are advisory. */
const routes: Array<{ path: string; changefreq: string; priority: string }> = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about-us", changefreq: "monthly", priority: "0.9" },
  { path: "/trips", changefreq: "monthly", priority: "0.9" },
  { path: "/events", changefreq: "weekly", priority: "0.9" },
  { path: "/golf-tournament", changefreq: "weekly", priority: "0.9" },
  { path: "/apply", changefreq: "monthly", priority: "0.9" },
  { path: "/donation", changefreq: "monthly", priority: "0.9" },
  { path: "/donors", changefreq: "monthly", priority: "0.7" },
  { path: "/gallery", changefreq: "monthly", priority: "0.6" },
  { path: "/contactus", changefreq: "monthly", priority: "0.7" },
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      ({ path, changefreq, priority }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
