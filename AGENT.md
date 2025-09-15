# Kraft Fit — Agent Brand Guidelines

This guide aligns AI-generated outputs with the existing site implementation under `site/fitness-astro-template`. It codifies color, typography, component usage, tone, and accessibility so content and UI feel consistent.

## Brand Identity

- Name: Kraft Fit
- Personality: Motivational, bold, energetic, no‑nonsense.
- Voice: Short, punchy statements. Imperative calls to action (e.g., “Join Today”). Avoid emojis and excessive punctuation.

## Design Tokens

- Primary Accent: `#f57042` (orange). Use for emphasis, key headings, buttons, and highlights.
- Surface/Dark Background: `#142245` (navy). Default section background.
- Text Primary: `#ffffff` on dark/navy backgrounds.
- Image Overlays: Prefer a subtle navy overlay (e.g., `bg-[#142245] bg-blend-multiply opacity-70`) over photography for legibility; neutral grays are acceptable where needed.

## Typography

- Headings: `League Spartan`, 'Roboto', 'Open Sans', sans-serif.
  - Treatment: Uppercase, italic, bold for hero and section titles.
  - Scale examples: `text-5xl` for section headers; `text-9xl` for hero.
- Body: `Montserrat` (300/400), ''Open Sans', sans-serif.
  - Tone: Clear, compact sentences; 1–3 lines per paragraph.
- Web Fonts: Keep Google Fonts import as implemented in layout.

Example mapping (Tailwind and utility classes used in the site):

- Headline: `font-extrabold uppercase italic tracking-wide`
- Section Title: `text-5xl italic uppercase`
- Body Copy: default `p` styles; use `text-white` on dark backgrounds

## Color Usage

- Orange on Navy: Use orange for headings, accents, and CTAs over navy backgrounds.
- Buttons: Orange background with navy text for strong contrast; white text on orange is acceptable for large text only.
- Don’t introduce colors beyond Navy `#142245`, Orange `#f57042`, and White `#ffffff`; neutrals (white, gray overlays) are fine for legibility.

## Utility Classes and Custom Helpers

If the codebase still exposes yellow helpers, treat them as the generic “accent” hooks and map them to orange:

- `.accentBG` (or existing `.yellowBG`) → `background-color: #f57042`
- `.accentText` (or existing `.yellowText`) → `color: #f57042`

Common Tailwind utilities observed:

- Layout/spacing: `py-12`, `py-36`, `p-12`, `m-4`, `m-8`, `grid`, `grid-cols-1`, `md:grid-cols-3`, `max-w-screen-xl`, `mx-auto`, `px-4`
- Typographic emphasis: `uppercase`, `italic`, `font-extrabold`, `tracking-wide`
- Colors and overlays: `text-white`, `bg-cover`, `bg-no-repeat`, `bg-gray-400`, `bg-gray-700`, `bg-blend-multiply`
- Images: `object-cover`, `rounded-md`, fixed height for cards

## Components and Patterns

- Hero
  - Background: Full-bleed hero image with navy/neutral overlay (`bg-[#142245] bg-blend-multiply`).
  - Title: Massive, uppercase, italic, extra bold (`text-9xl`).
  - CTA Button: `.accentBG p-2 uppercase text-[#142245] font-bold` (navy text on orange) or `.accentBG p-2 uppercase text-white font-bold` for large text.
  - Nav/Brand: Uppercase brand name in white.
- Section: Use navy background (`#142245`) with generous vertical space (`py-12`).
- About: Title in orange (accent), body text in white, two-image grid with rounded corners.
- Offers: Three image cards; each uses overlay + white heading.
- Testimonials: Orange panel per card body (on white/neutral) or navy card with orange accents; author as small text beneath quote.
- Footer Callout: Big orange headline area followed by a 3‑column orange-accent info grid.

## Copy Guidelines

- Headlines: 2–5 words, action oriented. Examples: “Be Your Best”, “Get in Touch Today”.
- Subcopy: 1–2 short sentences, straightforward and supportive.
- CTAs: Imperative verbs. Examples: “Join Today”, “Learn More”, “Start Now”.
- Casing: Headlines and nav use `uppercase` styling; you may write in sentence case and rely on CSS utilities to transform.

## Imagery

- Fitness imagery with high energy (instructors, equipment, action shots).
- Apply dark gray overlay with `bg-blend-multiply` for text legibility when text sits on top.
- Always provide descriptive `alt` text.

## Accessibility

- Contrast: Ensure WCAG AA contrast.
  - Orange `#f57042` on navy `#142245` works well for large headings and accent panels.
  - Prefer navy text on orange buttons for stronger contrast; reserve white-on-orange for large/bold text.
- Semantics: Headings should follow logical order (`h1` → `h2`), lists for nav, and `button` elements for actions.
- Images: Always include meaningful `alt` attributes.

## Content Do’s and Don’ts

- Do: Keep copy concise; use strong verbs; maintain consistent casing and emphasis.
- Do: Use provided accent helpers (map existing `yellowText`/`yellowBG` to orange) for brand color application.
- Don’t: Introduce new colors or fonts; avoid exclamation overload and emojis.
- Don’t: Write long paragraphs; break into short, scannable lines.

## Snippets and Examples

- Section Title
  - Visual: Orange, uppercase, italic, large.
  - Example: “What We Offer” → `class="text-[#f57042] text-5xl italic uppercase"`
- CTA Button
  - Visual: Orange background, navy or white text, uppercase, bold.
  - Example (navy text): `class="bg-[#f57042] p-2 uppercase text-[#142245] font-bold"`
  - Example (white text, large): `class="bg-[#f57042] p-2 uppercase text-white font-bold"`
- Image Card Title
  - Visual: White on navy/neutral overlayed image.
  - Example: `class="text-white uppercase text-4xl italic"`

## Implementation References

- Colors and global helpers: `site/fitness-astro-template/src/layouts/Layout.astro`
- Components: `site/fitness-astro-template/src/components/*`
- Page composition: `site/fitness-astro-template/src/pages/index.astro`

## Checklist for Agents

- Headings use League Spartan, uppercase, italic. Scale appropriately.
- Body uses Montserrat, short sentences, supportive tone.
- Apply brand orange for emphasis via accent helpers (`.accentText`/`.accentBG` or mapped `yellow*`).
- Maintain dark background sections; use overlays on images for readability.
- Keep CTAs imperative and concise; ensure button contrast.
- Provide alt text; keep content accessible and scannable.

## Logos and Assets

- Logos:
  - `site/web/assets/logo-icon.png`: Square icon for favicon, app icons, badges, compact brand marks. Alt: "Kraft Fit logo icon".
  - `site/web/assets/logo-word.png`: Horizontal wordmark for header/nav, footers, and prominent brand placements. Alt: "Kraft Fit wordmark logo".
- Photography:
- Hero/section candidates: `site/web/assets/gym-1.jpg` … `site/web/assets/gym-6.jpg`.
  - Use gray overlay with `bg-blend-multiply` when placing text over images.
  - Prefer images with clear focal points and subject contrast.
- Alt text suggestions: "High‑energy gym training photo", "Strength training with equipment", "Functional training in session". Tailor to the visible subject/action.

## Canonical About Copy

Use or adapt the following site‑approved About text (no emojis, concise, brand tone):

At Kraft Fit, fitness is more than working out—it’s a lifestyle, mindset, and commitment to becoming your best. Our certified trainers, nutrition coaches, and wellness experts tailor programs to your goals—build strength, lose weight, improve flexibility, enhance endurance, or stay active. We take a holistic approach that combines effective training, nutrition guidance, and mindset coaching for lasting results. You’re not just a client—you’re part of a community that supports, inspires, and grows together.
