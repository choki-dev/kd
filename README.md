# KD Global Commerce & Services — travel homepage (Astro)

The KD Global travel & tours homepage, built with **Astro 7 only**: Astro components, plain CSS and small vanilla-JS `<script>` blocks. No React, Vue or Svelte, and no UI or JS libraries.

## Setup

```bash
# Node 22.12+ required
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # serve the production build
```

To start a fresh copy of this setup: `npm create astro@latest`, then copy in `src/`, `public/` and `astro.config.mjs`.

## Folder structure

```
astro.config.mjs            image domains (Unsplash) + self-hosted Montserrat (Astro Fonts API)
logo/                       brand source files: KD_LOGO_.pdf, LOGO_00–03.png, Modern Teal Color Palette Board.png
public/favicon.png, apple-touch-icon.png   the KD arc mark
src/
├─ assets/brand/            web logo files made from /logo: kd-logo.png (full colour), kd-logo-white.png (one-colour reversed)
├─ data/home.ts             ALL homepage content: text, tours, prices, destinations, testimonials, links, photo imports
├─ assets/images/           site photos (Bhutan)
├─ layouts/BaseLayout.astro <head>: SEO + Open Graph/Twitter meta, fonts, skip link, scroll-reveal observer
├─ pages/index.astro        the homepage (sections in order)
├─ styles/global.css        design tokens, base styles, container/section, buttons, badges, reveal animation
└─ components/
   ├─ Header.astro          sticky header (transparent → white on scroll): Home · Tours ▾ (Cultural, Festival, Trekking, Luxury) · Destination · Blog · Contact Us; search icon; mobile drawer
   ├─ Hero.astro            3-slide full-screen fade slider, autoplay, social bar, arrows + "1 / 3" counter
   ├─ SearchBar.astro       location & tour-type dropdowns, calendar popover, adult/children counters
   ├─ TourTypes.astro       6 tour types with gold line icons (circle turns gold on hover)
   ├─ FeaturedRetreats.astro 3 tall image cards (swipe slider on mobile)
   ├─ BestSellingTours.astro filter tabs + 8-card grid (4 / 2 / 1 columns)
   ├─ TourCard.astro        reusable tour card
   ├─ PopularDestinations.astro bento grid (Paris, Tokyo, Bali, London, Rome)
   ├─ VacationAbout.astro   split section with two overlapping circular photos
   ├─ Testimonials.astro    3 / 2 / 1-up slider with arrows + dots
   ├─ BrandLogos.astro      infinite marquee (pauses on hover)
   ├─ LatestNews.astro      3 blog cards
   ├─ Footer.astro          logo + socials, contact, "About us" link columns, bottom bar
   ├─ BackToTop.astro       fixed button with scroll-progress ring
   ├─ Logo.astro            KD Global logo: variant color | white | auto (header swaps white → colour on scroll)
   └─ Icon.astro            inline SVG icon set (Lucide-style line icons + social/store glyphs)
```

## Editing content

- **Text, prices, tours, links:** edit `src/data/home.ts`.
- **Photos:** all images are local files in `src/assets/images` (Bhutan photography), imported in `src/data/home.ts`. To change a photo, add the file to that folder and update the import. Astro's `<Image />` crops each photo to its slot, resizes it and converts it to WebP at build time, and lazy-loads everything below the hero. Testimonials use initials avatars until client photos are available.
- **Design tokens** (colours, radius, shadows, spacing): the `:root` block at the top of `src/styles/global.css`.
- **Partner logos** are placeholder wordmarks with made-up names; replace them with real partner SVGs in `BrandLogos.astro`.

## Brand & design system

Follows the KD Global brand files in `/logo` (palette board: **Modern · Calm · Professional**).

| Brand colour | Hex | Used for (as the palette board directs) |
|---|---|---|
| Charcoal | `#2d2d2d` | body text, icons, footer bottom bar |
| Deep Teal | `#0b3d4a` | navigation (scrolled nav text, mobile drawer), **buttons**, headings, footer |
| Teal | `#167a8a` | links, active tab, prices, stars, icons, badges |
| Soft Blue Gray | `#a7b8c2` + tints `#d9e3ec` `#eef1f5` | soft backgrounds (icon circles, testimonial cards, nav pill), lines |
| Teal tint | `#a3dce3` | accents on dark backgrounds (hero label, footer icons) |

- **Typography:** Montserrat, the typeface of the KD Global wordmark. Headings use weights 700–800; uppercase labels are widely letter-spaced like the "COMMERCE & SERVICES" line of the logo.
- **Logo use:**
  - full colour on white (scrolled header)
  - one-colour white on deep teal and photos (hero header, mobile drawer, footer)
  - the logo is never recoloured or redrawn
- **Brand motif:** a four-colour accent bar under section titles (the logo's four colours).
- **Breakpoints:** 576 / 768 / 992 / 1200px (mobile-first). Container 1200px, section spacing 72 → 96 → 120px.
- **Tokens:** `:root` in `src/styles/global.css`.

## Accessibility & interaction

- Semantic landmarks, skip link, alt text, and labels on every icon-only button.
- Header dropdowns open on hover, click or Enter, and close with Esc. The mobile drawer locks scrolling and returns focus when closed.
- Search popovers are keyboard-operable:
  - Location and Tour Type: ↑ ↓ Home End to move, Enter to choose.
  - Calendar: ← → ↑ ↓ to move between days.
  - Esc closes any popover.
- The hero autoplay pauses on hover and focus and is disabled for `prefers-reduced-motion`. All animations respect reduced motion.
- Content stays visible without JavaScript (the scroll-reveal only hides content once JS is running).

_Removed on request (7 Oct 2026): Pages menu, Home/Destination/Blog dropdowns, wishlist hearts, Login / Register, the newsletter and the app promotion (banner + store buttons). The scores below were measured before these removals._

## Lighthouse (production build, 7 Oct 2026, KD Global brand)

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Mobile | 94 | 100 | 100 | 100 |
| Desktop | 99 | 96 (before the footer-label contrast fix; not re-run after it) | 100 | 100 |

The brand palette also fixes the earlier gold-button contrast issue: white text on Deep Teal buttons is about 12:1.
