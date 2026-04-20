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
    location: "Meridian, ID — open to the public",
    description:
      "Join us for golf, a live auction, dinner, and our limited-ticket raffle — including a gun raffle with prizes to be announced. Meal tickets are available for guests who want to attend the evening without golfing.",
    detailHref: "/golf-tournament",
  },
  {
    title: "Annual benefit dinner",
    date: "2026-09-20",
    location: "Meridian, ID",
    description:
      "An evening to celebrate participants, mentors, and donors — with stories from the field and a live update on upcoming trips.",
  },
  {
    title: "Volunteer orientation",
    date: "2026-04-15",
    location: "822 E. Ustick Rd., Meridian",
    description:
      "Meet the team, learn safety and participant support expectations, and see how you can plug into hunts and fishing outings.",
  },
  {
    title: "Youth elk season send-off",
    date: "2026-10-01",
    location: "Southwest Idaho",
    description:
      "A pre-season gathering for families, mentors, and staff — gear checks, introductions, and encouragement before time in the mountains.",
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
