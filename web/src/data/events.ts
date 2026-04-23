export type SiteEvent = {
  title: string;
  /** ISO date string (YYYY-MM-DD) for sorting and display. */
  date: string;
  location: string;
  description: string;
  /** When set, the event card links here for full details (landing pages, registration). */
  detailHref?: string;
};

/** ISO date for the annual golf tournament landing page and events index — keep in sync. */
export const golfFundraiserDateIso = "2026-06-06";

/**
 * Fundraisers, community nights, and trip-adjacent gatherings.
 * Edit dates and copy as the calendar firms up.
 */
export const upcomingEvents: SiteEvent[] = [
  {
    title: "Annual golf tournament & fundraiser",
    date: golfFundraiserDateIso,
    location: "Eagle Hills Golf Course, Eagle, ID — open to the public",
    description:
      "Join us for golf, a live auction, dinner, and our limited-ticket raffle — including our Rifle Raffle with prizes to be announced. Meal tickets are available for guests who want to attend the evening without golfing.",
    detailHref: "/golf-tournament",
  },
];

function parseEventDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

export function eventsSortedByDate(events: SiteEvent[]): SiteEvent[] {
  return [...events].sort((a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime());
}

export function formatEventDate(iso: string): string {
  return parseEventDate(iso).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
