# KAIST design system

A presentation-first design system for **KAIST DAIM Labs**. It keeps the *Industry* blueprint grammar (square corners, hairline frames, "+" registration marks, a visible modular field, Barlow Condensed over Barlow) and recolors it to the KAIST logo: **KAIST Blue** `#004191` and **KAIST Light Blue** `#1487C8`.

## Sources

- GitHub: **https://github.com/SanKwon99/KAIST_Template** (branch `main`, subtree `KAIST/`). Everything here was imported from that repository; explore it further when building designs for this brand.
- Inside that repo: the Industry design system (structure, component classes, deck template), the KAIST logo and the KAIST DAIM Labs logo (supplied as PNGs, now in `assets/`), and the agenda reference supplied for the Contents slide.

## Index

- `styles.css` — the one entry point (imports only). Link it from every page.
- `tokens/` — `fonts.css` (Google Fonts import), `colors.css`, `typography.css`, `spacing.css`.
- `base/components.css` — the CSS class layer (`.btn`, `.card`, `.tag`, `.field`, `.input`, `.radio`, `.seg`, `.nav`, `.table`, `.dialog`, `.blueprint`, `.duotone`). The React components render these classes.
- `components/` — React components, one folder per concern, each with `.jsx`, `.d.ts`, `.prompt.md` and a card:
  - `actions/` — `Button`, `Tag`
  - `content/` — `Blueprint` (+ `Corners`), `Card`, `Duotone`
  - `data/` — `Table`
  - `forms/` — `Field`, `Input`, `Radio`, `SegmentedControl`
  - `navigation/` — `Nav`
  - `overlay/` — `Dialog`
- `templates/deck/Deck.dc.html` — **KAIST Deck**, the 21-slide starter (with `deck-stage.js`, `support.js`). Copy the whole folder.
- `slides/` — 14 cards, one per slide type, each an iframe onto the template at a given slide.
- `foundations/` — color (brand, ground & ink, ramps), type (scale, specimen), spacing & elevation, icons, imagery cards.
- `brand/` — logos and slide-furniture cards.
- `assets/` — `kaist-mark.png` / `-white.png`, `daim-mark.png` / `-white.png` (transparent, cropped), the original `kaist-logo.png` and `daim-labs-logo.png`, `photo.jpg` and its pre-duotoned crops `photo-split.png`, `photo-half.png`, `photo-bleed.png` (the bleed has the scrim baked in).
- `thumbnail.html` — the project tile.
- `SKILL.md` — Agent-Skills entry point. `github.md` — source repo association.

## Content fundamentals

Research-talk register: plain, specific, technical. English throughout.

- **Casing.** Titles in Title Case ("Automatic Roadmap Generation"). Kickers uppercase with a section number ("01 · PRINCIPLES"). Table headers and card kickers uppercase with tracking.
- **Length.** Descriptions are one line. Pipelines are written with arrows: "CAD extraction → topological graph → multigraph → network-flow MILP → first draft".
- **Voice.** Impersonal and descriptive; no "we/you" sales voice. UI copy is short imperative verbs on buttons ("Continue", "Preview", "Publish", "Save changes") and plain statements in dialogs ("It goes live at its current URL. You can unpublish at any time…").
- **No** emoji, exclamation marks or marketing adjectives.
- **Fixed strings.** Footer notice: "© 2026 DAIM Labs. All rights reserved".

## Visual foundations

- **Color.** Ground `#F2F2F3` (technical light grey), ink navy `#101E33`, surface `#E4EAF3`. KAIST Blue is the main color: slide titles, cover title, kickers, the 2px top rule, registration marks, bullet crosses, page numbers, the primary button, chart highlight, and the full field of section dividers. Light Blue is the second voice: sub-head bars (64×4px), sub-heads (in its 700 step for contrast), the second chart series. Hairlines are KAIST Blue at 20% (`--color-divider`). Both ramps run 100–900 on one OKLCH lightness scale; KAIST Blue = accent 800, Light Blue = accent-2 600. Muted text is ink at 55%.
- **Type.** Barlow Condensed 600 for headings, Barlow 400 for body; both exist in Google Slides. Web scale: H1 42 / H2 32 / H3 25 / H4 20 / H5 16 / H6 13 (uppercase, 0.08em), body 15px / 1.55, headings 1.12 line-height with -0.015em tracking. Deck scale: display 288, title 96, subtitle 40, body 34, small 28, kicker 24, footer 18px.
- **Spacing.** A 4px base at 0.85× density: 3.4 / 6.8 / 10.2 / 13.6 / 20.4 / 27.2px (`--space-1…8`). Sections are separated by whitespace, not boxes.
- **Layout.** 1920×1080 slides with 120px margins. The field is a 2px KAIST Blue top rule (y 120) and a 45% KAIST Blue bottom hairline (y 1000), with "+" marks at the four ends; the middle stays empty for content. Text seats on a 48px baseline. DAIM Labs mark top-right above the top rule; KAIST mark, notice and page number in the 80px footer band.
- **Corners & borders.** Square corners everywhere (radius tokens 2/4/7px exist but every component overrides to 0). Cards, buttons, dialogs and figures carry a 1px hairline and four 11px "+" registration marks offset 6px outside the corners, in KAIST Blue at 70%.
- **Cards.** Transparent line drawings: no fill, no rounding, hairline border, corner marks, 10.2px padding. The primary button is the only solid object.
- **Backgrounds.** Flat ground color. No gradients, textures, patterns or illustrations. Section dividers use a full KAIST Blue field with paper-colored type.
- **Imagery.** Photos are duotoned into KAIST Blue (luminance kept, hue/saturation from the accent via `mix-blend-mode: color`) and framed like cards. For export the duotone is baked into the image files. Cool, monochrome blue.
- **Elevation.** Navy-tinted `--shadow-sm/md/lg`; rarely used (dialogs use lg).
- **Transparency & blur.** Transparency only for hairlines, muted text and the 50% neutral-900 dialog scrim. No blur.
- **Motion.** One entrance: 14px rise and fade over 0.45s, gated on `prefers-reduced-motion`. No bounces.
- **States.** Hover: primary steps darker to accent 900 (KAIST Blue sits deep on its ramp); secondary gets a 7% ink tint; ghost a 10% accent tint; inputs darken their border. Press: primary goes 900 mixed 20% with black, secondary 14% ink, ghost 18% accent. No shrink. Focus is a 2px KAIST Blue `:focus-visible` ring with 2px offset. Disabled drops to 45% opacity.
- **No** gradients, rounded cards, colored left borders or decorative color beyond the two blues.

## Export rules (PowerPoint / Google Slides)

The deck draws every mark as a real element: no `::before`/`::after`, blend modes or CSS gradients. "+" marks are two `<b>` strokes, charts are positioned divs, and the page number is literal text, so export produces native, editable shapes. Keep to this when adding slides. Page numbers are typed; renumber them if you reorder slides.

## Iconography

Lucide (https://lucide.dev) at stroke-width 1.5, inline SVG on `currentColor`, 13–20px (see `foundations/icons.html`). No icon font, no sprite, no PNG icons, no emoji, no unicode glyph icons. The "+" registration cross is the system's own mark. Icons used in the source: sparkle, layers, circle, arrow-right, search, settings, user, heart, bell, calendar, image, folder.

## Logos

Use the supplied marks only; never redraw them. Color marks on paper, `-white` marks on the KAIST Blue ground.

## Components

React components wrap the CSS classes in `base/components.css`; the inventory matches the source's component pages one-to-one.

| Component | Class | Notes |
| --- | --- | --- |
| `Button` | `.btn` `.btn-primary/-secondary/-ghost` `.btn-icon` `.btn-block` | Framed by default except ghost |
| `Tag` | `.tag` `.tag-accent/-accent-2/-neutral/-outline/-outline-2` | Status labels |
| `Card` | `.card` `.card-kicker/-title/-body/-meta` `.elev-*` | Always blueprint-framed |
| `Blueprint`, `Corners` | `.blueprint` + `.corner` | The frame every object wears |
| `Duotone` | `.duotone` | Every content photo |
| `Table` | `.table` | Column config + rows |
| `Field`, `Input`, `Radio`, `SegmentedControl` | `.field` `.input` `.radio` `.seg` | Native inputs |
| `Nav` | `.nav` `.nav-brand` | Header bar |
| `Dialog` | `.dialog-backdrop` `.dialog` | `contained` pins it inside a frame |

## Caveats

Fonts load from Google Fonts; no font binaries are bundled.
