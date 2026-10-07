# KAIST design system

A presentation-first design system for **KAIST DAIM Labs**. It keeps the *Industry* blueprint grammar (square corners, hairline frames, "+" registration marks, a visible modular field, Barlow Condensed over Barlow) and recolors it to the KAIST logo: **KAIST Blue** `#004191` and **KAIST Light Blue** `#1487C8`.

Sources: the Industry design system (structure, component classes, deck template), the KAIST logo and the KAIST DAIM Labs logo (both supplied as PNGs, in `assets/`), and the agenda reference supplied for the Contents slide.

## Index

- `styles.css` — the one entry point (imports only). Link it from every page.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `base/components.css` — component classes (`.btn`, `.card`, `.tag`, `.field`, `.nav`, `.table`, `.dialog`, `.blueprint`, `.duotone`).
- `templates/deck/Deck.dc.html` — **KAIST Deck**, the 21-slide starter (copy the folder).
- `KAIST Deck.dc.html` — the working copy of the deck in this project.
- `slides/` — one card per slide type, rendered from the template.
- `components/` — component cards (buttons & tags, cards, forms, navigation, table, dialog).
- `foundations/`, `brand/` — color, type, spacing, icons, imagery, logos and slide-furniture cards.
- `assets/` — `kaist-mark.png` / `-white.png`, `daim-mark.png` / `-white.png` (transparent, cropped), original logo PNGs, `photo.jpg` plus its pre-duotoned crops `photo-split.png`, `photo-half.png`, `photo-bleed.png` (the bleed has the scrim baked in).
- `SKILL.md` — Agent-Skills entry point.

## Content fundamentals

Research-talk register: plain, specific, technical. Titles in Title Case ("Automatic Roadmap Generation"); kickers uppercase with a section number ("01 · PRINCIPLES"); descriptions one line, using arrows for pipelines ("CAD extraction → topological graph → multigraph → network-flow MILP → first draft"). No emoji, no exclamation marks, no marketing adjectives. Footer notice is fixed: "© 2026 DAIM Labs. All rights reserved".

## Visual foundations

- **Color.** Ground `#F2F2F3` (Industry light grey), ink navy `#101E33`, surface `#E4EAF3`. KAIST Blue is the main color: slide titles, cover title, kickers, the 2px top rule, registration marks, bullet crosses, page numbers, the primary button, chart highlight, and the full field of section dividers. Light Blue is the second voice: sub-head bars (64×4px), sub-heads (in its 700 step for contrast), the second chart series. Hairlines are KAIST Blue at 20%. Both ramps run 100–900 on one OKLCH lightness scale. KAIST Blue sits at 800, so hover and pressed states step *darker* (900).
- **Type.** Barlow Condensed 600 for headings, Barlow 400 for body; both exist in Google Slides. Deck scale: display 288, title 96, subtitle 40, body 34, small 28, kicker 24, footer 18px.
- **Layout.** 1920×1080 slides with 120px margins. The field is drawn as a 2px KAIST Blue top rule (y 120) and a 45% KAIST Blue bottom hairline (y 1000), with "+" marks at the four ends. The middle stays empty for content. Text seats on a 48px baseline. DAIM Labs mark top-right above the top rule; KAIST mark, notice and page number in the 80px footer band.
- **Shapes.** Square corners everywhere. Cards and figures are transparent and hairline-framed with corner marks. The primary button is the only solid object.
- **Imagery.** Photos are duotoned into KAIST Blue (luminance kept, hue/saturation from the accent). For export, the duotone is baked into the image files.
- **Elevation.** Navy-tinted `--shadow-sm/md/lg`; rarely used.
- **Motion.** One entrance: 14px rise and fade over 0.45s, gated on `prefers-reduced-motion`.
- **States.** Hover tints from the accent ramp; focus is a 2px KAIST Blue `:focus-visible` ring; disabled controls drop to 45% opacity.
- **No** gradients, rounded cards, colored left borders or decorative color beyond the two blues.

## Export rules (PowerPoint / Google Slides)

The deck draws every mark as a real element: no `::before`/`::after`, blend modes or CSS gradients. "+" marks are two `<b>` strokes, charts are positioned divs, and the page number is literal text. This way the export produces native, editable shapes. Keep to this when adding slides. Page numbers are typed, so renumber them if you reorder slides.

## Iconography

Lucide at stroke-width 1.5, inline SVG on `currentColor` (see `foundations/icons.html`). No icon font, no emoji. The "+" registration cross is the system's own mark.

## Logos

Use the supplied marks only. Never redraw them. Use the color marks on paper and the `-white` marks on the KAIST Blue ground.

## Caveats

Fonts load from Google Fonts. No font binaries are bundled.
