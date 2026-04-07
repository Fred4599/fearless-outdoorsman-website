import { siteImages } from "./site-images";

export const upcomingTripsYear = 2026;

export type UpcomingTrip = {
  participant: string;
  destination: string;
  species: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

/** Youth trips currently on the calendar (first names on the public site). */
export const upcomingTrips: UpcomingTrip[] = [
  {
    participant: "Braylee",
    destination: "Idaho",
    species: "Elk",
    imageSrc: siteImages.mission,
    imageAlt: "Youth and mentor with an elk — Fearless Outdoorsman in Idaho",
    description:
      "Braylee returns to the mountains for elk season in Idaho — her second Fearless Outdoorsman hunt — with seasoned mentors and wide-open country ahead.",
  },
  {
    participant: "Elijah",
    destination: "Alaska",
    species: "Grizzly bear",
    imageSrc: siteImages.impact,
    imageAlt: "Bear hunt in the field with mentors and hounds — Fearless Outdoorsman",
    description:
      "Elijah’s first trip takes him to Alaska for grizzly — a bold step into big country with mentors who know the ground and the heart it takes to be there.",
  },
  {
    participant: "Logan",
    destination: "Oregon",
    species: "Elk",
    imageSrc: siteImages.mission,
    imageAlt: "Youth and mentor with an elk — guided hunt supported by Fearless Outdoorsman",
    description:
      "Logan’s first Fearless Outdoorsman adventure is an elk hunt in Oregon — forests, ridges, and time in the field built around confidence, kinship, and healing outdoors.",
  },
];
