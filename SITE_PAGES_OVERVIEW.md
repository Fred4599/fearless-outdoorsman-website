# Fearless Outdoorsman — Live site pages overview

Reference captured from [https://fearlessoutdoorsman.com](https://fearlessoutdoorsman.com) (and key subpages) for the new website project. Use this alongside `branding.md` for content, IA, and parity checks.

---

## Site map (main navigation)

| Path | URL | Purpose |
|------|-----|--------|
| Home | [https://fearlessoutdoorsman.com/](https://fearlessoutdoorsman.com/) | Hero, mission pillars, press shout-out, FAQ, newsletter CTA |
| About Us | [https://fearlessoutdoorsman.com/about-us](https://fearlessoutdoorsman.com/about-us) | Origin story, values, “Join Our Cause” |
| Trips | [https://fearlessoutdoorsman.com/trips](https://fearlessoutdoorsman.com/trips) | Upcoming trips listing |
| Apply / Get involved | [https://fearlessoutdoorsman.com/apply](https://fearlessoutdoorsman.com/apply) | Children, veteran, and volunteer application entry points |
| Donation | [https://fearlessoutdoorsman.com/donation](https://fearlessoutdoorsman.com/donation) | Donate messaging + payment flow |
| Contact | [https://fearlessoutdoorsman.com/contactus](https://fearlessoutdoorsman.com/contactus) | Contact form and intro copy |
| Privacy | [https://fearlessoutdoorsman.com/privatepolicy](https://fearlessoutdoorsman.com/privatepolicy) | Privacy policy (note URL spelling: `privatepolicy`) |

No additional top-level internal URLs were found in linked navigation across these pages.

---

## Global elements (every page)

- **Organization:** Non-profit; hunting and fishing trips at no cost for eligible children and veterans.
- **Phone:** 208-803-4639  
- **Address:** 822 E. Ustick Rd., Meridian, ID 83646  
- **Footer:** Newsletter subscribe CTA, contact block, “Copyright © 2024. All rights reserved. Fearless Outdoorsman.”
- **Stack signals:** LeadConnector / HighLevel-style hosting (e.g. `leadconnectorhq.com`, `stcdn.leadconnectorhq.com`), Cloudflare email protection on mail links.

---

## Page-by-page — important content and CTAs

### Home (`/`)

- **Tagline (hero):** Providing hunting and fishing trips for children with life-threatening illnesses and veterans with trauma (medical or emotional).
- **About (summary):** Non-profit; no-cost trips; healing through nature; volunteers; transformative experiences; hope and resilience.
- **Press — “See Our Latest Shout Out!”**  
  - **Alaska Sporting Journal** (Dec 25, 2024): story about participant Ella and an elk hunt arranged by Fearless Outdoorsman.  
  - **External article:** [https://aksportingjournal.com/a-feel-good-story-an-elk-for-ella/](https://aksportingjournal.com/a-feel-good-story-an-elk-for-ella/)
- **Mission statement:** “Healing Nature, Honoring Heroes: Empowering Lives Through Outdoor Adventures”
- **Audience blocks:**  
  - Children with life-threatening illnesses — respite, joy, normalcy.  
  - Veterans with trauma — PTSD, injury, service-related health; camaraderie and peace in nature.  
  - Healing/rehabilitation — therapeutic outcomes through hunting, fishing, nature.  
  - Community / “Cultural immersions” (copy frames shared adventures and mutual support).
- **FAQ topics:** Who qualifies and how to apply; types of activities (hunting/fishing, guided, equipped); how to support (donate, volunteer, sponsor).
- **Donations:** Site links out to **Square** payment: [https://square.link/u/yTmGNXgC](https://square.link/u/yTmGNXgC)
- **Social:** Nav/footer reference generic platform roots (e.g. Facebook, Instagram, LinkedIn, X, YouTube, TikTok) — verify full profile URLs when rebuilding.

### About Us (`/about-us`)

- **Theme:** Nature as transformative; sanctuary from struggle; safe, inclusive, tailored trips.
- **Origin:** Founded by outdoor enthusiasts, healthcare professionals, and veteran advocates.
- **Closing CTA:** “Join Our Cause” — donors, volunteers, advocates; invitation to discover how to participate.

### Trips (`/trips`)

- **Intro:** Upcoming hunting and fishing adventures; dates/locations emphasized in copy.
- **Featured trip:** **Elk Hunting With Three — Fall 2024** — Idaho elk hunt for two youth with life-threatening illnesses; mentorship from experienced outdoorsmen; additional Oregon hunt for another participant mentioned as pending tag approval.
- **CTA:** “Donate Today” (supports trip programming).

### Apply (`/apply`)

- **Headline:** Join the Fearless Outdoorsman family; become part of something bigger.
- **Mechanics:** “Select a form below” — three tracks: **Children Application**, **Veteran Application**, **Volunteer Application**; instructions to complete and email (address is behind Cloudflare protection on the live site — preserve a clear submission path on the new site).
- **CTA button copy:** “Get Involved Today”

### Donation (`/donation`)

- **Message:** Donations fund outdoor experiences for children and veterans; healing, joy, adventure.
- **Implementation note:** Primary donation UX on the broader site uses the Square link above; keep payment provider and legal/tax receipt language aligned with non-profit requirements.

### Contact (`/contactus`)

- **Purpose:** Questions, information, support; contact form with submit (“Get In Contact”).
- **Compliance copy:** Checkbox referencing terms & conditions and SMS consent.
- **Issue for rebuild:** Terms link currently points to **`https://www.example.com/`** — placeholder; should be replaced with a real Terms & Conditions URL and accurate legal copy.

### Privacy (`/privatepolicy`)

- **Title on page:** “Private Policy” (likely meant “Privacy Policy”).
- **Effective date:** March 26, 2024.
- **Jurisdiction:** Idaho non-profit.
- **Data collected:** Name, email, address, phone; health-related info for participants (with consent); donation details.
- **Uses:** Donations/tax receipts; events/trips/updates; service improvement.
- **Sharing:** No sale/rent/lease; trusted partners under confidentiality; legal disclosures when required.
- **Security:** Physical, electronic, managerial safeguards.
- **Rights:** Access, correction, marketing opt-out.
- **Changes:** Policy may be updated; check page for revisions.
- **Contact:** Privacy questions directed to org contact (footer phone/address on live site).

---

## Integrations and assets to preserve or reimplement

| Item | Notes |
|------|--------|
| Donations | Square: `https://square.link/u/yTmGNXgC` |
| Forms / CRM | LeadConnector ecosystem on current site — decide whether to keep, migrate, or replace (e.g. embedded forms, webhooks). |
| Media / CDN | Logo and assets referenced via LeadConnector / Filesafe / Google Storage URLs (see `branding.md` for logo, favicon, OG image). |
| Typography (live)** | Google Fonts loading includes Lato, Open Sans, Montserrat, Red Hat Display, Roboto, Outfit, Poppins — `branding.md` recommends standardizing on **Outfit + Poppins**. |

---

## Technical / SEO notes

- **`/sitemap.xml`** returned HTTP 500 when checked — worth fixing on any new deployment for discoverability.
- **`robots.txt`** was empty when fetched.
- Canonical internal paths use **no trailing slash** in nav (e.g. `/about-us`).

---

## Content and QA checklist for the new build

- [ ] Replace placeholder **terms & conditions** link on the contact flow with the real document URL.
- [ ] Fix **“Private Policy”** heading/URL naming if you standardize on “Privacy Policy” and `/privacy` or `/privacy-policy`.
- [ ] Confirm **copyright year** (2024 on live site) updates annually or reflects policy.
- [ ] Wire **three application paths** (child, veteran, volunteer) with clear submission and confirmation behavior.
- [ ] Keep **Alaska Sporting Journal** story and link as credibility/social proof if still accurate.
- [ ] Reconcile **mission/FAQ** copy with legal/medical disclaimers as counsel advises.
- [ ] Validate **Square** link and donation page are still the intended production endpoints before launch.

---

*Generated for project planning; verify against the live site before launch.*
