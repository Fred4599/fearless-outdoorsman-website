# Fearless Outdoorsman — Brand & build reference

Use this document when designing and implementing the new site. It consolidates colors, type, spacing, UI patterns, and asset URLs from the current brand extraction.

---

## Brand voice

| Attribute | Value |
|-----------|--------|
| **Tone** | Bold |
| **Energy** | High |
| **Audience** | Outdoor enthusiasts and adventurers |

Copy and imagery should feel confident, active, and rooted in the outdoors—not corporate or timid.

---

## Color palette

**Mode:** light (default).

| Token | Hex | Role |
|-------|-----|------|
| Primary | `#002664` | Deep navy—brand anchor, headers, strong UI blocks |
| Secondary | `#BB133E` | Fearless red—secondary brand color, nav/footer hovers, focus rings, outline buttons |
| Support | `#062D97` | Rich blue—alternate actions (maps to Tailwind `support`) |
| Accent | `#BB133E` | Same red as secondary—solid CTAs, high-emphasis links |
| Background | `#FFFFFF` | Page / card backgrounds |
| Text (primary) | `#BB133E` | *Note: same as accent—consider using navy `#002664` or near-black for long body copy for readability; reserve red for headlines and links if the live site does that.* |
| Link | `#BB133E` | Default link color |

**Quick pairs**

- Primary button: accent background `#BB133E`, white text `#FFFFFF`.
- Secondary (outline) button: border/text `#BB133E`, subtle fill on hover; or support blue `#062D97` with white text when you want a non-red alternate.

---

## Typography

**Recommended stack (canonical)**

| Use | Family |
|-----|--------|
| Headings | **Outfit** |
| Body | **Poppins** |

**Type scale (starting points)**

| Element | Size |
|---------|------|
| H1 | 50px |
| H2 | 38px |
| Body | 23px |

**Also detected in source data (optional / legacy):** Times New Roman, Roboto, Inter—trim to Outfit + Poppins unless you need a specific fallback stack.

**Suggested CSS font stacks**

```css
--font-heading: "Outfit", system-ui, sans-serif;
--font-body: "Poppins", system-ui, sans-serif;
```

Load **Outfit** and **Poppins** from Google Fonts (or your font host) with weights that match your design (e.g. 600–700 for headings, 400–500 for body).

---

## Spacing & shape

| Token | Value |
|-------|--------|
| Base unit | 4px (use multiples: 8, 12, 16, 24, 32…) |
| Default border radius | 4px |
| Inputs | 5px radius |
| Primary / secondary buttons | 4px radius |

---

## Components

### Inputs

| Property | Value |
|----------|--------|
| Background | `#FFFFFF` |
| Text | `#2C3345` |
| Border | `#ACACAC` |
| Border radius | 5px |

### Primary button

| Property | Value |
|----------|--------|
| Background | `#BB133E` |
| Text | `#FFFFFF` |
| Border radius | 4px |
| Shadow | `rgba(0, 0, 0, 0.4) 0px 1px 5px 0px` |

**Example label from live patterns:** “Donate Today” (high-emphasis CTA).

### Secondary / outline button

| Property | Value |
|----------|--------|
| Border & text | `#BB133E` (outline), or solid `#062D97` with white text for support style |
| Border radius | 4px |
| Shadow | optional; match primary when solid |

**Example labels:** “Donate today” (outline), “Read More” (support blue if desired).

---

## Assets & links

| Asset | URL / note |
|-------|------------|
| **Logo** | https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/vdG8LVqi3flxnDy4gX3G/media/dcc62346-fe43-4c45-b788-27ccae78c489.png |
| **Favicon** | https://storage.googleapis.com/msgsndr/vdG8LVqi3flxnDy4gX3G/media/dcc62346-fe43-4c45-b788-27ccae78c489.png |
| **Open Graph / social** | https://assets.cdn.filesafe.space/Cwfm1CkG4a2w92pZt6e9/media/65ff0427545880d63aa0d123.png |
| **Logo link (reference)** | https://fearlessoutdoorsman.com |
| **Logo alt text** | Brand Logo (replace with a descriptive alt when you have final copy) |

Host copies locally in the new repo when you build for production (performance and stability).

---

## Design system note

Source extraction tagged the stack as **custom** with no named component library. You can map these tokens to Tailwind, CSS variables, or any UI kit; the values above are the contract for visual consistency.

---

## Checklist for implementation

- [ ] Define CSS variables or Tailwind theme from the color table.
- [ ] Confirm body text color for accessibility (red-on-white long copy may need adjustment).
- [ ] Load Outfit + Poppins; remove unused font families from the old site.
- [ ] Mirror button/input tokens in your component library.
- [ ] Download logo, favicon, and OG image into `/public` (or equivalent) and update paths.
