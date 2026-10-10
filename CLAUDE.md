@AGENTS.md

# KD Global Commerce & Services — travel homepage (Astro)

Homepage for **KD Global Commerce & Services**, a Bhutan-based **travel & tours** company (earlier static versions of this site are in `D:\Website html\KD Global` and `D:\Website html\kd`).
Built with **Astro 7.3 only**: Astro components, plain CSS and small vanilla-JS `<script>` blocks. No React, Vue, Svelte, Tailwind or UI/JS libraries, and no extra npm packages beyond `astro`.

_Last updated: 2026-10-08_

## Run it

Working directory: `D:\Website html\astro kd` (Windows; Node 22.12+, currently Node 26).

```bash
npm run dev       # http://localhost:4321 (the owner usually has this running already; it hot-reloads)
npm run build     # production build → dist/ (run before reporting work as done)
npm run preview   # serve dist/ — use another port if needed: npx astro preview --port 4330
```

- The PC is often low on memory (~1 GB free). Background servers started by Claude Code can get killed; if a stale server keeps a port busy, stop that process (check its command line first and only stop this project's node processes).
- Lighthouse: `npx -y lighthouse@12 http://localhost:4330/ --chrome-flags="--headless=new"` against `astro preview` (Windows prints a harmless chrome-launcher cleanup error).
- No git commands unless asked (repo has only the "Initial commit from Astro").

## Brand (follow strictly)

**Source of truth: `src/assets/brand/KG_GLOBAL_BRANDING_GUIDELINE.pdf`** (KD Global Brand Guidelines 2026, 26 pages; added 2026-10-08).
- It can't be read with the Read tool here (no poppler). Render it with pdf.js + @napi-rs/canvas from a scratch folder.
- Other brand files are in `logo/`: `KD_LOGO_.pdf`, `LOGO_00–03.png` (stacked / mark / horizontal / vertical) and the older `Modern Teal Color Palette Board.png`.

| Guideline name | Hex | Use (guideline §04) |
|---|---|---|
| Deep Horizon (`--primary`) | `#0b3d4a` | lead colour: wordmark, headings, nav, footer, covers |
| Global Tide (`--accent`) | `#167a8a` | signature accent: **buttons**, links, highlights, icons, prices |
| Charcoal Graphite (`--charcoal`, `--text`) | `#2d2d2d` | body text, dark UI, footer bottom bar |
| Misty Horizon (`--bluegray`) | `#a7b8c2` | soft panels, dividers, graphics |
| Morning Haze (`--morning-haze` = `--soft`, `--line`) | `#e5eaeb` (sampled; the hex is missing from the PDF text) | cards, panels, layered surfaces |
| Cloud Mist (`--cloud-mist`) | `#f2f6f7` | **main page background** (`body`) |
| Teal tint (`--accent-tint`) | `#a3dce3` | site-only extra: accents on dark backgrounds |

- **Fonts (guideline §05):**
  - **Montserrat = logo only.** It's in the logo artwork, never typed, and not loaded.
  - **Primary = Aeonik** (commercial, CoType). **General Sans (Fontshare) stands in** until the owner supplies licensed .woff2 files. To swap, replace the first `fonts` entry in `astro.config.mjs` with `fontProviders.local()` named "Aeonik" and keep `--font-primary`.
  - **Weights: 300 / 400 / 500 / 700 only.** Headlines Bold (700) or Medium (500); no 600/800.
  - **Headlines in sentence case** (proper nouns and tour names keep their capitals).
  - **Playfair Display** (`.serif-title`): one editorial headline or pull quote per page, Deep Horizon. Currently: home "Travel Bhutan with people…", About story title, Blog featured title, article intro.
  - **Parisienne** (`.script-accent`): one short greeting or tagline per page, display size, Global Tide. Currently: home "Explore the valleys", About "Kuzuzangpo la".
  - Uppercase labels use wide letter-spacing like the "COMMERCE & SERVICES" line.
- **Logo:**
  - Use the real files, never redraw or recolour them.
  - `src/assets/brand/kd-logo.png` is full colour, on white only.
  - `kd-logo-white.png` is one-colour white, for photos and deep teal.
  - Both were made from `LOGO_02.png` with sharp.
  - `Logo.astro` has `variant="color" | "white" | "auto"`; auto = white over the hero, colour once the header turns white on scroll.
- **Favicon:** `public/favicon.png` and `apple-touch-icon.png`, both from the arc mark `LOGO_01.png`.
- **Brand motif:** a four-colour accent bar under every centred section title (`.section-head .section-title::after`).
- **Tokens:** all in `:root` of `src/styles/global.css` (`--primary` deep teal, `--accent` teal, `--soft` blue-gray tint, `--text` charcoal …). Don't hard-code colours in components.

## Structure

```
astro.config.mjs            Fonts API (Montserrat); commented `site:` — set to the live domain before launch
logo/                       brand source files (do not edit)
public/                     favicon.png, apple-touch-icon.png
src/
├─ data/home.ts             ALL homepage content + photo imports (edit content here, not in components)
├─ assets/images/           site photos (Bhutan, supplied by the owner)
├─ assets/brand/            web logo files
├─ layouts/BaseLayout.astro <head>: SEO/OG meta (OG image from slide1.jpg, only when `site` is set), font, skip link, scroll-reveal observer
├─ data/pages.ts            About Us + Contact Us content (hero, story, values, steps, FAQs, office hours, map URL)
├─ pages/index.astro        the homepage
├─ pages/about.astro        About Us: PageHero, story, values, how-we-plan steps, Meet our team, Testimonials, CTA band
├─ pages/tours.astro        Tours: PageHero, sticky filter sidebar (type radio / destination + duration checkboxes, live counts), sort select, 3-col TourCard grid, CtaBand; ?type=<Category> preselects a type and is kept in the URL
├─ pages/tours/[slug].astro tour detail template (getStaticPaths over tours with a `slug`): PageHero (Home › Tours › name), facts bar, overview + route, highlights, day-by-day accordion timeline (Expand all), included / not included, gallery, sticky booking card (Enquire → /contact?tour=…&type=…), related tours
├─ data/tourDetails.ts      detail content per slug (overview, highlights, difficulty, best time, stay, itinerary, optional included/excluded/hero, gallery) + standard included/excluded lists
├─ pages/destinations.astro Destinations: PageHero, jump chips, alternating photo/text row per valley (facts, highlights, View N tours → /tours?place=…, Plan a trip here → /contact?place=…), CtaBand
├─ data/destinations.ts     the 7 destinations (Paro, Thimphu, Punakha, Trongsa, Bumthang, Phobjikha, Haa) + page text
├─ pages/blog/index.astro   Blog list: newest post as a large featured card, rest in a grid (posts without a slug = "Coming soon", not links), CtaBand
├─ pages/blog/[slug].astro  article template: PageHero (Home › Blog › title), byline + reading time, intro, blocks (h2/p/list/image/tip), sticky sidebar (In this article TOC, related tours, contact card), More stories
├─ data/blog.ts             blog page text + article bodies keyed by slug (block list) + readingMinutes()
├─ pages/contact.astro      Contact Us: PageHero, 4 overlapping info cards, enquiry form (mailto, no backend), Google Maps embed, FAQ accordion
├─ styles/global.css        tokens, base, container/section, buttons, badges, reveal animation
└─ components/              Header, Hero, SearchBar, TourTypes, FeaturedRetreats, BestSellingTours, TourCard,
                            PopularDestinations, VacationAbout, Testimonials, BrandLogos, LatestNews, Footer,
                            PageHero (inner-page banner + breadcrumb), CtaBand (deep-teal call-to-action, About + Tours), BackToTop, Logo, Icon (inline SVG icon set; names typed by IconName in home.ts)
```

`src/pages/.kilo/` is a leftover worktree from another tool (Kilo Code); Astro ignores dot-folders. Leave it alone unless the owner asks.

## Homepage sections (current)

1. **Header** (fixed): transparent over the hero with the white logo; on scroll it turns white with the colour logo and deep-teal nav.
   - Nav: **Home · Tours ▾ (Cultural Tours, Festival Tours, Trekking Tours, Luxury Tours) · Destination · Blog · Contact Us**, plus a search icon.
   - Below 1200px: a deep-teal slide-in drawer with accordion sub-menus.
2. **Hero:** 3-slide fade slider (`slide1–3.jpg`), autoplay that pauses on hover/focus and is off for reduced motion, "KD GLOBAL · TRAVEL & TOURS" label, activity chips, a "Follow us" bar, arrows and a "1 / 3" counter.
3. **Search bar:**
   - Location and Tour Type dropdowns, a calendar popover (past dates disabled) and Adult/Children counters, all keyboard-operable.
   - Search jumps to the tour grid and applies the tour-type tab if one matches.
4. **Types of tours:** 6 icon circles.
5. **Featured retreats:** 3 tall cards (`tours.slice(0,3)`), a swipe slider on mobile.
6. **Best-selling tours:** filter tabs plus 8 `TourCard`s (4 / 2 / 1 columns).
7. **Popular destinations:** bento grid of 5 tiles.
8. **Vacation / about:** split section with two overlapping circular photos, booking phone and "Booking Now".
9. **Testimonials:**
   - slider (3 / 2 / 1-up), arrows and dots
   - initials avatars, since there are no client photos
10. **Partner logo marquee:** made-up placeholder names.
11. **Latest news:** 3 blog cards.
12. **Footer:**
   - deep teal with the white logo and socials
   - Contact us, and "About us" link columns
   - charcoal bottom bar
13. **Back-to-top button** with a scroll-progress ring.

## History (what was done, in order — 2026-10-07 / 08)

1. **Built from the owner's brief** as "TripNomad" (Outfit/Yellowtail fonts, gold `#DCA546`), with Unsplash placeholder photos (all IDs checked to exist and to show the right place).
2. **Lighthouse pass** (mobile 84/89 → 95/96):
   - fonts self-hosted
   - `aria-label` on plain spans replaced with `.sr-only` text
   - darker logo grey, 24px tap targets on the testimonial dots
   - finer image `widths`
   - added `aria-label` on the icon-only account link (since removed)
3. **Rebranded to KD Global** from `logo/`:
   - Montserrat, teal palette, real logo files, favicon from the arc mark, four-colour accent bar.
   - Removed the gold colour and the script font.
   - Fixed a page-overflow bug: absolutely-positioned `.sr-only` text inside a scroll track escaped the clipping. `.t-card` now has `position: relative`. **Keep this in mind for any `.sr-only` inside sliders.**
4. **Removed on request:**
   - Pages menu
   - Home, Destination and Blog dropdowns ("Tour List" renamed **Tours**, with the 4 tour types)
   - wishlist hearts (header and cards)
   - Login / Register
   - newsletter
   - app promotion (banner section and store buttons; the company has no app)
5. **Replaced all images** with the owner's Bhutan photos in `src/assets/images`:
   - Unsplash fully removed (helper, config domain, URLs).
   - 94 WebP variants, about 5 MB in `dist`.
   - Alt texts describe the actual photos.
   - Unused photos: `Ben-Richards-Tourism-Bhutan-001`, `Snowman Race48`, `about-us.png`, `buddha`, `temple`, and `bridge.jpg` (identical to `slide2.jpg`).
6. **Bhutan content rewrite (2026-10-08)**, all in `home.ts` plus section headings in the components:
   - Hero, tours, destinations, about, testimonials, blog, footer links and SEO title/description rewritten for a Thimphu-based Bhutan tour operator.
   - One category list `tourCategories` (Cultural, Festival, Trekking, Luxury, Spiritual, Nature) drives the filter tabs, the search "Tour Type" and the 6 type circles. Counts are computed from `tours`.
   - Each tour has `places[]`. Destination tile counts (Paro, Thimphu, Punakha, Trongsa, Bumthang) are computed from it. The bento slot keys were renamed to those names.
   - Prices display as `US$1,450` (toLocaleString); group size shows as "Up to N"; "1 Tour" / "N Tours" plurals.
   - New icons `flame` and `bird` (Lucide) in `Icon.astro`.
   - A border-radius removal was tried and reverted on request. **Keep the rounded corners.**
7. **About Us (/about) and Contact Us (/contact) pages (2026-10-08)**, in the homepage theme (PageHero banner under the transparent header, section-head accent bar, soft/teal cards, rounded corners):
   - Banner photos: `buddha.jpg` (About), `temple.jpg` (Contact). The story section uses `Ben-Richards-Tourism-Bhutan-001` + `about-couple.jpg`.
   - Nav: added **About Us**; Contact Us → /contact; all homepage anchors are now `/#…` so they work from inner pages. Header marks the current page with `aria-current` (styled like hover).
   - Footer links are now `{label, href}`; `#` = page not built yet.
   - Enquiry form validates required fields, then opens a `mailto:` to `site.email` with the details. **No server-side sending.** Add a form service or backend if the owner wants submissions without the visitor's email app.
8. **Tours page (/tours, 2026-10-08):** lists all `tours` with client-side filters + sort (no reload). Tours menu = All Tours + 4 types linking to `/tours?type=…`; homepage type circles link there too; homepage best-selling grid got a "View all tours" button; footer "Our tours" → /tours. Banner photo `Snowman Race48.jpg`. Tour cards still link to `#` (no tour detail pages yet).
9. **Tour detail pages (2026-10-08), one per category:** /tours/punakha-valley-cultural-journey (Cultural), /paro-tsechu-festival-tour (Festival), /jomolhari-base-camp-trek (Trekking), /luxury-bhutan-thimphu-to-bumthang (Luxury), /tigers-nest-pilgrimage (Spiritual), /bumthang-valleys (Nature).
   - **The build fails on purpose** if a slugged tour has no tourDetails entry or its itinerary length ≠ `days`.
   - Tours without a slug (Thimphu Heritage, Druk Path) link to `/contact?tour=…` (`tourHref()` in home.ts). To add a page: give the tour a `slug` + add its entry in tourDetails.ts.
   - The whole TourCard is now clickable (stretched title link). The Contact page pre-selects the interest and starts the message from `?tour=&type=`.
   - `hero` override: Jomolhari uses `trek.jpg` because the portrait `snowtrek.jpg` crops to forest in a wide banner.
10. **Destinations page (/destinations, 2026-10-08):** banner `tdzong.jpg`. Nav "Destination" and footer "Destinations" → /destinations; homepage tiles → `/destinations#<id>` (tile `area` keys = row ids). Tours page also reads `?place=`; Contact reads `?place=` ("I would like to visit …"). Phobjikha and Haa have no tours yet, so they only show "Plan a trip here". Altitudes and drive times are approximate.
11. **Blog (/blog) + first article (2026-10-08):** /blog/visiting-bhutan-temples-respectfully ("Butter Lamps and Blessings", temple etiquette). `posts` in home.ts now have `slug?` + `excerpt` (no more `href`); use `postHref()`. Nav Blog → /blog. The cranes and Chele La posts have no article yet ("Coming soon"). **To publish one:** add a `slug` in home.ts and its body in blog.ts (build fails if the body is missing). Blog banner `slide3.jpg`.
12. **Smaller banner text (2026-10-08, on request: titles covered the photos).** Homepage hero title clamp(38px, 6.2vw, 100px) → clamp(30px, 3vw + 12px, 56px). PageHero title clamp(34px, 4.6vw, 66px) → clamp(28px, 2vw + 14px, 44px), max-width 780px. Kicker → 11–13px and intro text → 14–16px on both. **Keep these sizes.**
13. **Removed on request (2026-10-08):** star ratings and photo/video count badges from TourCard and the Signature-journeys (FeaturedRetreats) cards.
   - TourCard is shared, so they're also gone on /tours and in the related-tour cards.
   - The "Featured" badge stays.
   - `rating` / `reviews` / `photos` / `videos` are still in the Tour data.
   - Follow-up: the rating was also removed from the tour-detail booking card, and the stars from the testimonials, so **no star ratings remain anywhere** (the global `.stars` style is deleted). The star *icon* is still used decoratively (blog tip box, Destinations "Best for").
   - Retreat card title: clamp(20px, 0.8vw + 16px, 24px) → clamp(16px, 0.4vw + 14px, 19px).
14. **Brand guideline pass (2026-10-08)** against `KG_GLOBAL_BRANDING_GUIDELINE.pdf`:
   - Fonts: Montserrat → General Sans (Aeonik stand-in), plus Playfair Display and Parisienne accents. Weights 600 → 500 and 800 → 700 site-wide.
   - Colours: Cloud Mist page background; Morning Haze panels and lines; `.btn-primary` is now Global Tide with a Deep Horizon hover (it was Deep Horizon).
   - Sentence-case headlines: hero slides, features, blog titles, "Discover Bhutan's most beloved places", "Follow us", "Read more", "Booking number", "Book now".
   - Logo usage already matched (full colour on white, white on Deep Horizon or photos, symbol as favicon).
   - **Not applied, needs the owner:** licensed Aeonik files; the guideline's "left-aligned headlines" (the site keeps centred section heads with the accent bar).
15. **Real contact details (2026-10-08, from the guideline's visiting card, on request):** `site` in home.ts = phone +975 17754285, `phoneAlt` +975 77563215 (shown in the footer and on the Contact "Call us" card), email **kdglobal2026@gmail.com**, address "Express Highway, 1101 Babesa Highway, Thimphu, Bhutan", website kdglobal.bt. The map query is now Babesa Highway, Thimphu. `site: "https://kdglobal.bt"` is set in astro.config.mjs (canonical + OG image now output).
16. **Brand pattern on the CTA band (2026-10-08):** new `BrandPattern.astro`, an SVG of the guideline's cover/section-page arcs.
   - Geometry (measured from the PDF): identical circles of radius R, tangent to the top edge, each shifted R/4. Drawn back to front over Misty Horizon: gap (Morning Haze), Global Tide, gap, Deep Horizon, gap, Charcoal.
   - `CtaBand` shows it as a right-hand panel (38%) from 992px up, and as a 120–150px top strip below that.
   - With `animate`, the bands start stacked behind the charcoal circle and fan out when the `.cta` gets `.is-visible` (scroll reveal). Without JS they show fanned out; reduced motion skips the animation.
   - Reusable elsewhere: `<BrandPattern />`.
   - **Blended into the body (on request, same day).** The pattern sits behind the content and fades through a CSS mask, so there's no seam.
     - From 992px: absolute on the right half (52% wide), fading leftward (`transparent → #000 38%`). The body is limited to 58% width.
     - Below 992px: a 150–190px top strip fading downward (`#000 30% → transparent 85%`). The body overlaps only the fully faded end (−20/−28px), so text never sits on the light stripes.
   - **CTA background is `--charcoal`** (on request), the same as the pattern's front band, so the charcoal circle merges seamlessly. The old teal radial glow was removed.
   - A front-cover-style version in the footer (arcs rising from the bottom-left onto the charcoal bar) was tried the same day and **removed on request. Don't put the pattern in the footer.**
17. **Full-height inner-page banners (2026-10-08, on request):**
   - `PageHero` is now `100svh` (min 600px, max 1100px, auto when the window is under 600px tall), like the homepage hero.
   - The image is requested at 1920×1080 (was 1920×760) so less is cropped.
   - The overlay is much lighter: dark only behind the header (top 24%), a soft radial shade behind the centred text, and a light bottom edge for the overlapping cards.
   - Text shadows on the kicker, title and text; the breadcrumb pill is teal glass (`rgba(11,61,74,.45)`) so it reads on bright photos.
   - Headless Chrome often screenshots these before the large banner image loads (a blank teal hero). Use `--timeout=20000` without `--virtual-time-budget` to check them.

18. **Team profiles on About (2026-10-09, on request):** "Meet our team" section after the steps, before Testimonials. Data in `about.team` in pages.ts: 4 cards (name, role, bio, optional `photo`); without a photo the card shows a Deep Horizon initials circle. 4 / 2 / 1 columns, same card style as the values.

**Lighthouse** (production build, before step 4): mobile 94 / 100 / 100 / 100, desktop 99 / 96 / 100 / 100.

## Open items (need the owner)

- **Placeholder business data (from step 6), replace with real figures:** tour prices (US$ per person), group sizes, durations, ratings / "(120)" review counts, photo/video counts, blog dates, and the **testimonials, which are written examples and not real guests**. Do not launch with them.
- **Destination tiles:** the Punakha (mask-dancer photo) and Trongsa (monk-at-door photo) pairings are a best guess. Confirm where those photos were taken.
- **Tour itineraries are sample plans** written from general Bhutan knowledge (routes, passes, approx. altitudes). The owner should check them against their real programmes, and the inclusions too.
- **Confirm the email:** the visiting card prints "kdglobal2026@**gamil**.com". The site uses @gmail.com on the assumption it's a typo (gamil.com is a known typo domain). Fix it in `site.email` if the card was right.
- **About team profiles are placeholders:** the names, roles and bios in `about.team` are made-up examples, and there are no photos. Replace them with the real staff and add photos to `src/assets/images` before launch.
- **Contact page placeholders:** office hours (in `contact.hours`). The map points at Babesa Highway generally, not an exact office pin.
- **Tours dropdown links** all go to `#tours` (there are no tour-type pages yet).
- **Partner logos** are made-up names.
- **Social links** are `#`.
- **Before launch:** `site:` is set to https://kdglobal.bt. Change it if the live site uses www or another domain.
- **Logo PDF:** `KD_LOGO_.pdf` couldn't be rendered here (no poppler). If it contains extra brand rules (clear space, minimum size), check them.

## Git / GitHub

- 2026-10-10: pushed to https://github.com/choki-dev/kd (branch `main`, remote `origin`). `.gitattributes` marks PDFs and images as binary (core.autocrlf=true on this machine had flagged the PDFs as text). `.kilo/` (stray agent worktree in src/pages) is gitignored.
