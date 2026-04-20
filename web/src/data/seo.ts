import { address, contactEmail, donateUrl, phone, phoneTel } from "./site";

export const siteUrl = "https://fearlessoutdoorsman.com";

export const orgLegalName = "Fearless Outdoorsman";
export const orgFoundingDate = "2024";
export const orgDescription =
  "Fearless Outdoorsman is an Idaho-based 501(c)(3)-style nonprofit that provides fully-guided hunting and fishing trips at no cost to children with life-threatening illnesses and veterans living with PTSD, service-connected injuries, and other trauma. A hunting nonprofit, veterans nonprofit, and kids with illness nonprofit — all in one mission: Healing Nature, Honoring Heroes.";

export const orgKeywordsBase = [
  "hunting nonprofit",
  "veterans nonprofit",
  "kids with illness nonprofit",
  "children with life-threatening illnesses nonprofit",
  "veterans with PTSD nonprofit",
  "wounded veterans hunting trips",
  "nonprofit hunting trips for veterans",
  "nonprofit fishing trips for veterans",
  "outdoor therapy nonprofit",
  "hunting charity Idaho",
  "veterans charity Idaho",
  "children's charity Idaho",
  "Meridian Idaho nonprofit",
  "Boise Idaho nonprofit",
  "Idaho hunting nonprofit",
  "Fearless Outdoorsman",
  "free hunting trips for kids with cancer",
  "free hunting trips for veterans",
  "elk hunt nonprofit",
  "fishing trip nonprofit",
  "guided hunts for sick kids",
  "guided hunts for wounded warriors",
  "outdoor healing program",
  "therapeutic hunting",
  "therapeutic fishing",
];

export const geo = {
  locality: "Meridian",
  region: "ID",
  regionFull: "Idaho",
  postalCode: "83646",
  country: "US",
  streetAddress: "822 E. Ustick Rd.",
  /** Approximate coordinates for 822 E. Ustick Rd., Meridian, ID 83646. */
  latitude: 43.6405,
  longitude: -116.3587,
  serviceArea: ["Idaho", "Oregon", "Alaska", "Pacific Northwest", "United States"],
};

export const socialProfiles = [
  "https://www.facebook.com/fearlessoutdoorsman",
  "https://www.instagram.com/fearlessoutdoorsman",
];

export const logoUrl = `${siteUrl}/images/logo.png`;
export const defaultOgImage = `${siteUrl}/images/hero-bg.png`;

/** Core Organization + NGO + LocalBusiness combined schema — attach once per page in <head>. */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["NGO", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: orgLegalName,
    alternateName: ["Fearless Outdoorsman Inc.", "Fearless Outdoorsman Nonprofit"],
    legalName: orgLegalName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: 512,
      height: 512,
    },
    image: defaultOgImage,
    description: orgDescription,
    slogan: "Healing Nature, Honoring Heroes — Empowering Lives Through Outdoor Adventures",
    foundingDate: orgFoundingDate,
    nonprofitStatus: "Nonprofit501c3",
    email: contactEmail,
    telephone: `+1-${phoneTel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: geo.streetAddress,
      addressLocality: geo.locality,
      addressRegion: geo.region,
      postalCode: geo.postalCode,
      addressCountry: geo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: geo.serviceArea.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    knowsAbout: [
      "hunting trips for children with life-threatening illnesses",
      "fishing trips for children with life-threatening illnesses",
      "hunting trips for veterans with PTSD",
      "fishing trips for veterans with PTSD",
      "outdoor therapy",
      "therapeutic recreation",
      "mentorship",
      "Idaho elk hunting",
      "guided hunts",
      "nonprofit fundraising",
    ],
    keywords: orgKeywordsBase.join(", "),
    sameAs: socialProfiles,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+1-${phoneTel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}`,
        contactType: "customer support",
        email: contactEmail,
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
    potentialAction: [
      {
        "@type": "DonateAction",
        name: "Donate to Fearless Outdoorsman",
        target: donateUrl,
        recipient: { "@id": `${siteUrl}/#organization` },
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "United States nonprofit sector",
    },
    serviceType: [
      "No-cost hunting trips",
      "No-cost fishing trips",
      "Mentorship for youth",
      "Veteran outdoor recreation",
      "Outdoor therapy / healing outdoors",
    ],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: orgLegalName,
    description: orgDescription,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };
}

type Crumb = { name: string; item: string };

export function buildBreadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item.startsWith("http") ? c.item : `${siteUrl}${c.item}`,
    })),
  };
}

export type FaqItem = { question: string; answer: string };

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** Shared homepage / site-level FAQ. Keep answers plain, complete, and LLM-friendly. */
export const siteFaqs: FaqItem[] = [
  {
    question: "What is Fearless Outdoorsman?",
    answer:
      "Fearless Outdoorsman is a nonprofit based in Meridian, Idaho that provides fully-guided hunting and fishing trips at no cost to children with life-threatening illnesses and to veterans living with trauma — including PTSD, service-connected injuries, and other physical or emotional challenges. It is a hunting nonprofit, a veterans nonprofit, and a kids-with-illness nonprofit in one.",
  },
  {
    question: "Who qualifies for a Fearless Outdoorsman trip?",
    answer:
      "Two groups of participants qualify: (1) children facing life-threatening or serious illnesses who are medically cleared for an outdoor adventure, and (2) U.S. military veterans dealing with service-connected trauma, PTSD, injury, or related health issues. Participants can be nominated, or their families can apply directly through the Apply page.",
  },
  {
    question: "How much does a trip cost participants?",
    answer:
      "Nothing. Trips are free for qualifying children and veterans. Donors, volunteers, and event sponsors cover the cost of guides, gear, licenses, travel, meals, and logistics so every participant can focus on the experience.",
  },
  {
    question: "How do I apply for a child or veteran to go on a trip?",
    answer:
      "Visit the Apply page and choose the track that fits — Children Application, Veteran Application, or Volunteer Application. Each track opens an email to the Fearless Outdoorsman team, who respond with the full application packet and next steps. You can also call 208-803-4639.",
  },
  {
    question: "Where is Fearless Outdoorsman located?",
    answer:
      "Fearless Outdoorsman is based at 822 E. Ustick Rd., Meridian, Idaho 83646, and serves participants from across the United States, with trips commonly running in Idaho, Oregon, and Alaska.",
  },
  {
    question: "How can I support Fearless Outdoorsman?",
    answer:
      "You can donate through Square at any amount, sponsor the annual golf tournament and fundraiser, join as a volunteer mentor, or underwrite specific trips, gear, or travel. Every gift directly funds outdoor experiences for participants.",
  },
  {
    question: "Is Fearless Outdoorsman a 501(c)(3) nonprofit?",
    answer:
      "Fearless Outdoorsman operates as an Idaho nonprofit organization supporting children with life-threatening illnesses and veterans with trauma. Donors should retain their receipt and consult a tax advisor regarding deductibility for their situation.",
  },
  {
    question: "What kinds of trips do you run?",
    answer:
      "Trips are fully guided and fully equipped. They include big-game hunts (such as elk in Idaho and Oregon, and grizzly in Alaska), waterfowl and upland bird hunting, and fishing outings — all built around safety, mentorship, and respect for the land.",
  },
];
