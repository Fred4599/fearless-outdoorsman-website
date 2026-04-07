import { siteImages } from "./site-images";

export type GalleryImage = {
  src: string;
  alt: string;
};

/** Curated stills for the public gallery — swap or extend as new assets are added. */
export const galleryImages: GalleryImage[] = [
  {
    src: siteImages.hero,
    alt: "Young participants with their dog and waterfowl after a hunt — Fearless Outdoorsman",
  },
  {
    src: siteImages.mission,
    alt: "Youth and mentor with an elk — guided outdoor experience",
  },
  {
    src: siteImages.impact,
    alt: "Bear hunt in the field with mentors, youth, and hounds",
  },
  {
    src: "/images/extra-6626fe0603cce58130009191.png",
    alt: "Outdoor adventure and camaraderie with Fearless Outdoorsman",
  },
  {
    src: "/images/extra-6626fe928381f207401326c3.png",
    alt: "Participants and mentors sharing time in nature",
  },
  {
    src: "/images/extra-6626fed4a47f3a25d35efbab.png",
    alt: "Healing and connection through hunting and fishing trips",
  },
  {
    src: "/images/extra-6626ff1a8381f2bbc61326d2.png",
    alt: "Memorable moments from Fearless Outdoorsman trips",
  },
  {
    src: "/images/impact.png",
    alt: "Impact in the field — supported by donors and volunteers",
  },
];
