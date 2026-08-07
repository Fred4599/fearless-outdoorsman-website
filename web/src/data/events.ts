export type SiteEvent = {
  title: string;
  /** ISO date string (YYYY-MM-DD) for sorting and display. */
  date: string;
  location: string;
  description: string;
  /** When set, the event card links here for full details (landing pages, registration). */
  detailHref?: string;
};

/** ISO date for the annual golf tournament recap page — keep in sync. */
export const golfFundraiserDateIso = "2026-06-06";

/**
 * Fundraisers, community nights, and trip-adjacent gatherings.
 * Edit dates and copy as the calendar firms up.
 */
export const upcomingEvents: SiteEvent[] = [];

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
