# Black Tulip Metal — Landing Page

Next.js landing page for **Black Tulip Metal Bldg. Const. Ind. L.L.C.** (Sharjah / Dubai,
U.A.E.), built in the editorial style of the Mink Studio reference, using the client's own
photography and a palette derived from their logo.

Next 15 (App Router) · React 19 · TypeScript · no CSS framework.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Palette variants

The same page ships in twelve palettes — `/` to `/version5` stay close to the brand
mark, `/version6` to `/version10` push further out (orange, olive, rust, brass, red), and
`/version11` matches the Mink Studio reference — all verified to WCAG AA. Use the floating switcher (bottom-right) to move between them.

| Route | Name | Field | Accent |
|---|---|---|---|
| `/` | Forest | `#06301F` pine | `#00A651` logo green |
| `/version1` | Petrol | `#06302D` deep teal | `#00B295` teal-green |
| `/version2` | Marine | `#0A2038` deep navy | `#00A651` logo green |
| `/version3` | Azure | `#0B2545` indigo | `#2E8BC0` azure |
| `/version4` | Graphite | `#151B1A` near-black | `#00A98F` teal |
| `/version5` | Slate | `#1D2C37` blue-grey | `#10A9C9` cyan |
| `/version6` | Signal | `#0E224E` cobalt | `#F86908` safety orange |
| `/version7` | Olive | `#242B11` dark olive | `#89AE37` moss |
| `/version8` | Oxide | `#331C14` weathered brown | `#C4592A` corten rust |
| `/version9` | Bronze | `#251F18` espresso | `#BF8F34` brass |
| `/version10` | Crimson | `#391116` oxblood | `#CC3336` signal red |
| `/version11` | Mink | `#732C14` burnt sienna | `#CC8E64` copper |

Each theme is one `[data-theme]` block in `app/globals.css` that re-declares the
design tokens; `components/Landing.tsx` applies it to a wrapper and every
descendant inherits. All translucent colours are `color-mix()` against those
tokens, so a theme propagates to scrims, shadows and overlays without edits.

Per-theme, three accent shades are derived and contrast-checked:
`--green-deep` carries white text (≥4.55:1), `--green-text` sits on `--bone`
(≥4.5:1), `--green-2` sits on the dark fields (≥6.7:1).

Mink is the one theme with component overrides: its field *is* its accent, so
accent buttons would disappear on the sienna bands. Like the reference, it
flips them to cream buttons with sienna type.

**The switcher is a review tool.** Remove `<ThemeBar />` from
`components/Landing.tsx` for the client build.

## Default palette

Taken from the logo (`public/img/logo/logo.png`), not from the blue mock:

| Token | Value | Use |
|---|---|---|
| `--green` | `#00A651` | Brand green, sampled from the tulip leaves — buttons, rules, accents |
| `--pine` / `--pine-2` | `#06301F` / `#0A3D28` | Deep field green for the large dark bands |
| `--ink` | `#141210` | Near-black (logo wordmark is `#231F20`) — stats + contact bands |
| `--bone` | `#EFEBE3` | Warm off-white for the light sections |

Type: **Instrument Serif** (display) + **Archivo** (UI/body), both via `next/font/google`,
exposed to CSS as `--font-display` / `--font-sans`.

## Structure

```
app/
  layout.tsx        fonts, metadata, <html>/<body>
  page.tsx          section composition
  globals.css       the whole design system (~650 lines, class-only selectors)
components/
  Header.tsx        sticky/auto-hide bar, adaptive theme, mobile drawer
  Hero.tsx          4-slide crossfade + Ken Burns
  Capabilities.tsx  cursor-following hover reveal
  Services.tsx      12 services + category filter
  Projects.tsx      grid + keyboard-accessible lightbox
  Stats.tsx         count-up figures
  Sections.tsx      Ticker, About, Strip, Clients, Contact
  Footer.tsx
  Chrome.tsx        grain, loader, custom cursor
  Reveal.tsx        scroll-in wrapper
lib/
  site.ts           all copy, image paths and captions
  hooks.ts          useInView, useReducedMotion, useMediaQuery, useScrollLock
public/img/         logo · banner · structural · architectural · gallery · clients
legacy-static/      the original hand-written HTML/JS this was ported from (reference only)
```

All content is server-rendered; only the interactive pieces are client components.

## Notes

**Images.** Everything goes through `next/image`, except the client-logo marquee — those are
plain `<img>` because the track is duplicated and translated, so the lazy-loading observer
never fires for the off-screen copies.

For a fully static export (`output: 'export'`), set `images.unoptimized = true` in
`next.config.mjs`.

**Two generated assets** are derived, not downloaded:

- `logo-light.png` — the wordmark recoloured to bone-white for dark backgrounds; the green
  tulip is preserved. The header swaps between this and the original depending on the
  section behind it.
- `public/img/clients/*.jpg` — the source logos had mixed backgrounds (white, black, red,
  navy, cream). Each was converted to greyscale, inverted where the plate was dark, and had
  its background tone mapped to pure white so the logo wall reads consistently.
  Untouched originals are kept in `public/img/clients/original/`.

**Before launch:** set `NEXT_PUBLIC_SITE_URL` (used for `metadataBase` / OG images).

## Content to confirm with the client

The stat band uses only figures verifiable from their existing site: **10+ years**,
**12 disciplines**, **23 clients**, **2 facilities**. If they can supply a real project count
or square-metre figure, swap one in at `lib/site.ts` → `STATS`.

Social links in the original site's header were placeholders (`href="#"`) and are not
carried over.

## Behaviour

- Hero: 4-slide crossfade with Ken Burns, dot controls, pauses when the tab is hidden
- Header: hides on scroll-down, reveals on scroll-up, and inverts to a bone bar with the
  full-colour logo over light sections
- Capabilities: cursor-following image reveal (desktop fine-pointer only)
- Services: All / Structural / Architectural filter
- Projects: click or Enter/Space opens a lightbox with arrow-key and Escape support
- Respects `prefers-reduced-motion`; no horizontal overflow down to 390px
