## 1. Site Info

SITE_TYPE: Corporate B2B & Local Services
HTML_LANG: en

## 2. Visual Identity & Brand Soul

*   **Brand DNA Extraction:** The original site utilizes a bright yellow (`rgb(242, 214, 77)`) paired with solid black. We will elevate this into a high-end "Tactical Amber" (`hsl(45 92% 52%)`) and a deep, command-center "Stealth Slate" (`hsl(220 20% 12%)`). The bright, reliable background colors will keep the site looking trustworthy and authoritative, while tactical gold highlights will signal precision, emergency readiness, and military/police-supported discipline.
*   **Color Strategy:** Restraint is paramount. Saturated amber will be reserved strictly for callouts, active indicators, and high-priority action buttons. Backgrounds will alternate between a clean "Concrete White" (`hsl(210 15% 98%)`) for clinical readability and "Stealth Slate" dark zones for intense focus.
*   **Creative Concept:** "Operational Command". The interface mimics a highly polished, modern security dispatch console—clean lines, high-contrast visual hierarchy, status indicators, and precise structural framing.
*   **Repeated Motif / Evidence-Bearing Signature:** The "Tactical Frame" and "Status Indicator". Every card, section title, and image sits within a crisp, thin-bordered box containing small absolute-positioned corner ticks or a top-left "Active/Ready" amber status dot. This visual cue reinforces the theme of 24/7 readiness and meticulous attention to detail.
*   **Signature Restraint:** A single, sharp hairline grid structure across the site. We will avoid complex hover animations, keeping actions crisp, responsive, and immediate.
*   **Human Labels / Metadata Grammar:** Use small, high-density uppercase subtitles like `[ Dispatch Status: Active ]` or `[ PA State License: No. 84 ]` to anchor sections in official state authority and active readiness.
*   **Linework Discipline:** Thin, sharp borders (`border-border` and `border-dark-border`) define all structural columns. No line ever crosses running text. Decorative corner brackets on containers frame the imagery.
*   **Copy Naturalness:** Keep the raw, authoritative local service language: "Veteran Supported", "Under New Ownership", "24-Hour Emergency Dispatch". Do not soften this into vague agency-speak.

**THE "LOGO CONTAINER" RULE:**
The KRE Security logo is a solid, black line-art badge featuring a shield and a cross. Because it is dark on a transparent background, **the Navigation Bar MUST use a light, high-contrast background (`bg-background` / Concrete White)** to ensure absolute legibility of the logo text and design.

```
---DESIGN_MD_START---
## Visual Theme
Command-center precision. A clean, high-contrast layout combining civic trust with tactical B2B readiness, using sharp borders, framing brackets, and signal-amber status indicators.

## Colors
- background: hsl(210 15% 98%)
- foreground: hsl(220 25% 10%)
- muted-foreground: hsl(220 12% 40%)
- border: hsl(220 15% 85%)
- surface: hsl(210 20% 95%)
- primary: hsl(45 92% 52%)
- primary-foreground: hsl(220 25% 10%)
- primary-hover: hsl(45 95% 42%)
- secondary: hsl(220 20% 12%)
- secondary-foreground: hsl(210 15% 98%)
- secondary-hover: hsl(220 20% 8%)
- dark-background: hsl(220 20% 10%)
- dark-foreground: hsl(210 15% 98%)
- dark-muted-foreground: hsl(220 10% 70%)
- dark-border: hsl(220 15% 20%)
- success: hsl(142 76% 36%)
- error: hsl(0 72% 51%)
- warning: hsl(38 92% 50%)
- favicon-color: #f2d64d

## Typography
- Headlines: space-grotesk — Sans-serif
- Body: manrope — Sans-serif
- Scale: display — Bold, precise, high-impact titles suited for command and enforcement branding

## Components
- Buttons: Sharp rectangular edges, 0px radius, heavy solid borders, amber active-state highlights.
- Cards: Technical grids, thin borders with corner ticks, flat surfaces with zero depth shadows.
- Sections: High-density padding, clean alternation between light-grey operations zones and deep-slate command zones.
- Motion: Hover zoom on framed images, quick amber-slide fills on button hover, precise fade-ins.
- Motif: Thin border-grid framing with small "Active" status badges.

## Do's and Don'ts
- DO keep the navigation background bright white to preserve the black transparent logo contrast.
- DO highlight the 24-Hour Emergency Dispatch number prominently across all layouts.
- DON'T use soft rounded corners, blur shadows, or glass-morphism which degrade the tactical, high-precision aesthetic.
- DON'T inject generic stock images of futuristic tech—focus on the real-world PA patrol vehicles and local officers.
---DESIGN_MD_END---
```

## 3. Sections

*   **Header / Nav** id="header": LIGHT, `bg-background` + `border-b border-border`
    *   *Content:* Left-aligned transparent KRE Security logo (Image #1). Right-aligned main links (About, Services, FAQs, Employment, Contact). A high-contrast call-out button for "ACT 67 Training" or "First Aid Training Services".

*   **Hero** id="hero": LIGHT, `bg-background`, layout: `asymmetric-poster`
    *   *HERO_TEXT_FIT:* headline="We Provide Quality, Licensed Security Guard Services in Pennsylvania at Competitive Rates"; longest_token="Pennsylvania" (12 chars); chosen_architecture+text_zone=asymmetric-poster + 60% text width; chosen_scale=text-h1 default; fit_decision=text-h1 fits in chosen hero / chose wider hero to fit text-h1.
    *   *FIRST_VIEWPORT_JOB:* Sell institutional-grade local security presence instantly.
    *   *HERO_DECISION:* chosen architecture = `asymmetric-poster`; candidates considered = [center-impact-hero (rejected: lacks room for secondary local metrics), split-composition (rejected: feels like a generic template), image-led-editorial (rejected: squeezes our long authoritative headline)]; native anchor = Branded patrol vehicle profile proving on-the-ground enforcement; DOM consequence = 7-column text and action board layout with dynamic structural framing around a high-aspect crop of the patrol vehicle spanning the remaining columns; source/asset support = Image #6 (1905x516px patrol vehicle side view); main risk = text wrapping clumsily on "Pennsylvania"; mitigation = clamp display text column to `lg:w-7/12` (minimum 60% container width) and use precise manual breaks.
    *   *Content:* Main authoritative headline, the "Veteran Supported Firm" and "Your Total Security Professional" subcopies, direct 24-Hour Emergency Dispatch CTA button, and secondary application CTA. Framed visual of the branded patrol car (Image #6) occupies the right structural card.

*   **Trust Ledger / Credentials** id="trust": DARK, `bg-dark-background`, layout: `proof-panel`
    *   *Content:* License No. 84 prominence, "Under New Ownership and Management Since 2016", "Veteran Supported Firm" badge, and immediate callout to the 24-Hour Emergency Dispatch Center: `610-562-0971` with a direct phone action link.

*   **Core Services Matrix** id="services": LIGHT, `bg-surface`, layout: `catalog-row`
    *   *Content:* Heading: "Your Total Security Professional". A modern technical grid mapping out the comprehensive services list: Event Staffing, School Security, Security Guards, ACT 67 Certified Services, Private Investigations, In-Home Security, Security Checks, First Aid Training, Vehicle Patrol, Logistical Security, Armed Security, Warehouses & Distribution Centers, Event Traffic Control, Process Services, Fire Watch, and Armed Money Escorts. Includes a small "Active Status" icon next to each card. Highlights "School Security" and "Security Guards" as primary paths.

*   **The Tactical Advantage** id="advantages": DARK, `bg-dark-background`, layout: `editorial-stack`
    *   *Content:* "5 Benefits of Hiring a Security Company". Spreads the 5 detailed points (Sense of security, Prevention, Customer Service, Handling Crime, Monitoring) across an illuminated progress-stepped timeline. Includes a prominent inset card showcasing "The Buck photo" (Image #3) or the security guard service visual (Image #4) framed inside tactical command brackets.

*   **Regional Coverage Center** id="coverage": LIGHT, `bg-background`, layout: `magazine-grid`
    *   *Content:* Main title highlighting "Major Cities Covered By KRE Security LLC." Displays the service map (Image #5) on one side, and organizes the counties (Berks, Bucks, Carbon, Chester, Cumberland, Dauphin, Erie, Franklin, Juniata, Lancaster, Lebanon, Lehigh, Luzerne, Monroe, Montgomery, Northampton, Northumberland, Perry, Philadelphia, Schuylkill, Union, Wayne) into clean, high-density, multi-column technical lists with individual regional contact numbers highlighted.

*   **Dispatch Portal / Contact** id="contact": DARK, `bg-dark-background`, layout: `conversion-footer`
    *   *Content:* "Contact Us Today for a Security Service Quote". Direct operational form containing fields for First name, Last name, Email, and message. Displays the physical locations, and lists the five primary regional hotlines (Allentown/Bethlehem, Lancaster/Lebanon, Reading/Pottstown, Schuylkill, Harrisburg) with distinct operational dials.

## 4. Motion, Interaction, and Section Craft

*   **Tactical Reveal:** Sections rise on a quick, crisp 150ms transform with zero-delay opacity states—mimicking the switching of security monitor feeds.
*   **Command Console Hover:** Buttons and cards do not grow or drift smoothly. They flash border highlights instantly and shift backgrounds to `bg-primary` or reveal metadata on focus.
*   **Active Status Glow:** A micro-animation pulse on the "24-Hour Dispatch" badge to convey live, continuous monitoring.

## 5. Navigation

*   **NAV_ARCHITECTURE:** `integrated-hero-nav` — The navigation sits inside a clean, high-contrast, Concrete White header, providing an elite solid foundation.
*   **NAV_HERO_CONTRACT:** `flow-below-solid` — Hero content begins precisely below the solid navigation bar to protect the legibility of the dark transparent logo.
*   **Logo Treatment:** Left-aligned, Image #1 (`131x157px` cropped elegantly to `h-14 w-auto`), presented as a crisp, un-inverted vector badge against the solid Concrete White navbar.
*   **Links Structure:**
    *   About Us (`#trust` / `#advantages`)
    *   Services (`#services`)
    *   FAQs (`/security-company-faq` -> External FAQs link if present, or anchor to coverage/info)
    *   Employment (`/employment` -> application routes)
    *   Contact (`#contact`)
    *   *CTA Button:* "ACT 67 TRAINING" styled as a high-visibility, solid black button with amber borders.

## 6. Footer

*   **Structure:** Single-column technical utility layout matching the original site's footprint but structurally modern.
*   **Style:** Dark slate `bg-dark-background` with a light-shielded Badge containing the dark-logo or keeping it text-only for contrast.
*   **Content:** Copyright, "Veteran Supported Firm" declaration, License No. 84, state regulatory disclosures, and the official social links:
    *   Facebook (Main Office): `https://www.facebook.com/KRE-Security-LLC-105764734683407`
    *   Facebook (Investigations): `https://www.facebook.com/KREsecinvestigations/`

## 7. Files

*   Modify: `src/config/site.ts` (updating brand colors, meta description, and nav targets)
*   Modify: `src/components/Navigation.astro`
*   Modify: `src/components/Footer.astro`
*   Create: `src/components/home/Hero.astro`
*   Create: `src/components/home/Trust.astro`
*   Create: `src/components/home/Services.astro`
*   Create: `src/components/home/Advantages.astro`
*   Create: `src/components/home/Coverage.astro`
*   Create: `src/components/home/ContactForm.astro`

## 8. Image Assignment & Sizing

*   **Image #1** (`131x157px`, square): Logo. Assigned to `Navigation.astro` and `Footer.astro`. Height class: `h-14`, width class: `w-auto`. Placed only on light high-contrast surfaces (`bg-background`).
*   **Image #6** (`1905x516px`, landscape): Branded tactical patrol vehicle side profile. Assigned to `Hero.astro` inside the right asymmetric poster card container. Rendered at `w-full h-auto max-h-[380px] object-cover` with crisp technical frame corners.
*   **Image #3** (`370x430px`, portrait/square): Officer/Guard standing ("The Buck photo"). Assigned to the `Advantages.astro` editorial card layout. Sized strictly at `max-w-[370px] h-auto object-cover` to prevent upscale blur.
*   **Image #4** (`768x337px`, landscape): Security guard services visual. Assigned as a secondary illustrative asset inside the `Services.astro` section. Sized at `w-full max-w-[500px] h-auto object-cover`.
*   **Image #5** (`1211x637px`, landscape): PA Security Services regional map. Assigned to the `Coverage.astro` layout as the primary regional validation graphic. Rendered at `w-full max-w-[600px] h-auto object-contain` on a light grey background card.
*   **Image #9, #10, #11, #12, #13, #14, #15**: Small partner and membership badges. Grouped neatly inside a "Proud Member & Supporter" grid in `Footer.astro` or `Trust.astro`, constrained strictly to `h-10 w-auto object-contain` for seamless modern alignment.

## 9. Build Efficiency

Generate files smoothly across three coordinated passes: Setup navigation and site variables, deploy core home sections, and finalize form validation and regional routing utilities.

## 10. Final Anti-Template QA

*   **Asymmetric-Poster Hero:** The hero uses an unequal 7-column/5-column grid ensuring the headline is never squeezed and the patrol vehicle is dynamically cropped.
*   **No Generic Flow:** We broke the standard layout by inserting the high-density "Trust Ledger / Credentials" immediately after the hero to validate state licensing and 24-hr dispatch authority before any pitch.
*   **Tactical Contrast:** Yellow has been completely rescued from "dated yellow highlighter" into "Tactical Amber" used as high-visibility warnings, indicators, and focus outlines on high-contrast Concrete White and Stealth Slate fields. All text ratios verified strictly $\ge 4.5:1$.

## 7. Image Sizing Rules

**CRITICAL: Never upscale images - causes blur/pixelation.**

| Image Type | Rule | Example |
|------------|------|---------|
| Logo (nav) | max-h-8 to max-h-12, w-auto | `class="h-10 w-auto"` |
| Logo (footer) | Same or slightly larger | `class="h-12 w-auto"` |
| Hero | Full width ONLY if image >= 1200px wide AND landscape | `class="w-full object-cover"` |
| Portrait (tall) | Constrain to actual width, never w-full | `class="max-w-[Xpx] h-auto object-cover"` |
| Content | Never exceed original dimensions | Use max-w-[Xpx] |
| Cards | Fixed aspect ratio | `class="aspect-video object-cover"` |
| Small images (<400px) | Use in cards/thumbnails only | `class="max-w-[Xpx] object-cover"` |

### Detected Images

- **SMALL** Section: [Under New Ownership and Management Since 2016](/employment) | "Your Total Security Professional" (131x157px): Use in card/thumbnail only. Set max-w-[131px].
- **SMALL** Section: License No. 84 | KRE Security, LLC delivers comprehensive, professional, and responsive security services that protec (1905x100px): Use in card/thumbnail only. Set max-w-[1905px].
- **SMALL** Section: We Provide Quality, Licensed Security Guard Services in Pennsylvania at Competitive Rates | Berks County (370x430px): Use in card/thumbnail only. Set max-w-[370px].
- Section: We Provide Quality, Licensed Security Guard Services in Pennsylvania at Competitive Rates | Berks County (768x337px): Use object-cover, respect original size.
- Section: Major Cities Covered By KRE Security LLC.  Our PA Security Company Serves (but is not limited to): | Berks County (1211x637px): Use object-cover, respect original size.
- Section: Major Cities Covered By KRE Security LLC.  Our PA Security Company Serves (but is not limited to): | 1. Sense of security \- Even just the presence of a security guard can make a business mor (1905x516px): Use object-cover, respect original size.
- **SMALL** Section: 5 Benefits of Hiring a Security Company | First name\* (345x141px): Use in card/thumbnail only. Set max-w-[345px].
- **SMALL** Section: Contact us | **KRE Security Main Office** (27x43px): Use in card/thumbnail only. Set max-w-[27px].
- **SMALL** Section: Contact us | Proud Member & Supporter (138x165px): Use in card/thumbnail only. Set max-w-[138px].
- **SMALL** Section: Contact us | Proud Member & Supporter (167x180px): Use in card/thumbnail only. Set max-w-[167px].
- **SMALL** Section: Contact us | Proud Member & Supporter (214x180px): Use in card/thumbnail only. Set max-w-[214px].
- **SMALL** Section: Contact us | Proud Member & Supporter (125x126px): Use in card/thumbnail only. Set max-w-[125px].
- **SMALL** Section: Contact us | Proud Member & Supporter (126x43px): Use in card/thumbnail only. Set max-w-[126px].
- **SMALL** Section: Contact us | Proud Member & Supporter (236x43px): Use in card/thumbnail only. Set max-w-[236px].
- **SMALL** Section: Contact us | Proud Member & Supporter (194x43px): Use in card/thumbnail only. Set max-w-[194px].

**NEVER set width/height larger than original_width/original_height from fetch_scraped_image.**