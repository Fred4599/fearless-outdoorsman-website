/** Local assets in /public/images — vendored from FileSafe (see Photos/Old Photos.md). */
export const siteImages = {
  logo: "/images/logo.png",
  /** Full-bleed hero (kids, dog, ducks on truck — outdoors). */
  hero: "/images/hero-bg.png",
  /** Mission column — participant and mentor with elk. */
  mission: "/images/mission.jpg",
  /** Impact CTA band — bear hunt with mentor, youth, and hounds. */
  impact: "/images/gallery-bear-hunt.jpg",
} as const;

/** Distinct interior page heroes so each route has its own visual while reusing the same library. */
export const pageHeroImages = {
  aboutUs: siteImages.mission,
  trips: siteImages.impact,
  apply: siteImages.hero,
  donation: "/images/impact.png",
  /** Alternate lifestyle shot so Contact differs from Apply’s truck-hero image. */
  contact: "/images/extra-6626fed4a47f3a25d35efbab.png",
  /** Policy pages — softer overlay in `PageHero`; keeps Apply as the primary “join us” hero. */
  legal: siteImages.hero,
  donors: "/images/extra-6626fe0603cce58130009191.png",
  events: siteImages.hero,
  /** Annual golf fundraiser — distinct hero from general events listing. */
  golfTournament: "/images/extra-6626fe928381f207401326c3.png",
  gallery: "/images/extra-6626ff1a8381f2bbc61326d2.png",
} as const;
