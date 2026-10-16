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
| Charcoal Graphite (`--charcoal`, `--text`) | `#2d2d2d` | body text, dark UI, CTA band |
| Misty Horizon (`--bluegray`) | `#a7b8c2` | soft panels, dividers, graphics |
| Morning Haze (`--morning-haze` = `--soft`, `--line`) | `#e5eaeb` (sampled; the hex is missing from the PDF text) | cards, panels, layered surfaces |
| Cloud Mist (`--cloud-mist`) | `#f2f6f7` | **main page background** (`body`) |
| Teal tint (`--accent-tint`) | `#a3dce3` | site-only extra: accents on dark backgrounds |

- **Fonts (guideline §05):**
  - **Montserrat = logo only.** It's in the logo artwork, never typed, and not loaded.
  - **Primary = Aeonik** (commercial, CoType). **General Sans (Fontshare) stands in** until the owner supplies licensed .woff2 files. To swap, replace the first `fonts` entry in `astro.config.mjs` with `fontProviders.local()` named "Aeonik" and keep `--font-primary`.
  - **Weights: 300 / 400 / 500 / 700 only.** Headlines Bold (700) or Medium (500); no 600/800.
  - **Headlines in sentence case** (proper nouns and tour names keep their capitals).
  - **Playfair Display** (`.serif-title`): one editorial headline or pull quote per page, Deep Horizon. Currently: home hero headlines (white, on request) and "Travel Bhutan with people…", About story title, Blog featured title, article intro, and (since 2026-10-16, on request) every inner-page banner title.
  - **Parisienne** (`.script-accent`): Global Tide, display size. **On the owner's request (2026-10-13) every centred section title has a short script tagline above it**, styled like the homepage "Explore the valleys" (e.g. Tour types, Handpicked for you, Best sellers, Guest reviews, Travel journal, Why KD Global, How it works, Our people, Good to know, Where we travel, Keep reading, More journeys). This goes beyond the guideline's "one per page"; new section heads should follow it. Also used for About "Kuzuzangpo la".
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
├─ pages/about.astro        About Us: PageHero, story, values, how-we-plan steps, Meet our team, CTA band
├─ pages/tours.astro        Tours: PageHero, sticky filter sidebar (type radio / destination + duration checkboxes, live counts), sort select, 3-col TourCard grid, CtaBand; ?type=<Category> preselects a type and is kept in the URL
├─ pages/tours/[slug].astro tour detail template (getStaticPaths over tours with a `slug`): PageHero (Home › Tours › name), facts bar, overview + route, highlights, day-by-day accordion timeline (Expand all), included / not included, gallery, sticky booking card (Enquire → /contact?tour=…&type=…), related tours
├─ data/tourDetails.ts      detail content per slug (overview, highlights, difficulty, best time, stay, itinerary, optional included/excluded/hero, gallery) + standard included/excluded lists
├─ pages/destinations.astro Destinations (redesigned 2026-10-16): PageHero, "road east" route of photo stops, sticky scroll-spy bar, region chapters with a cinematic photo + overlapping card per valley (text, View N tours → /tours?place=…, Plan a trip here → /contact?place=…, Don't miss, facts), at-a-glance table, CtaBand
├─ data/destinations.ts     the 7 destinations in road order (Paro, Haa, Thimphu, Punakha, Phobjikha, Trongsa, Bumthang) + page text, `regions` (each destination's `region` must match one; build fails otherwise)
├─ pages/blog/index.astro   Blog list: newest post as a large featured card, rest in a grid (posts without a slug = "Coming soon", not links), CtaBand
├─ pages/blog/[slug].astro  article template: PageHero (Home › Blog › title), byline + reading time, intro, blocks (h2/p/list/image/tip), sticky sidebar (In this article TOC, related tours, contact card), More stories
├─ data/blog.ts             blog page text + article bodies keyed by slug (block list) + readingMinutes()
├─ pages/[guide].astro      travel-info pages (visa & SDF, guidelines, festivals, trekking seasons, FAQs, terms) from data/guides.ts
├─ pages/contact.astro      Contact Us: PageHero, 4 overlapping info cards, enquiry form (mailto, no backend), Google Maps embed, FAQ accordion
├─ styles/global.css        tokens, base, container/section, buttons, badges, reveal animation
└─ components/              Header, Hero, SearchBar, TourTypes, FeaturedRetreats, BestSellingTours, TourCard,
                            PopularDestinations, VacationAbout, Testimonials, BrandLogos, LatestNews, Footer,
                            PageHero (inner-page banner + breadcrumb), CtaBand (deep-teal call-to-action, About + Tours), ChatWidget, Logo, Icon (inline SVG icon set; names typed by IconName in home.ts)
```

`src/pages/.kilo/` is a leftover worktree from another tool (Kilo Code); Astro ignores dot-folders. Leave it alone unless the owner asks.

## Homepage sections (current)

1. **Header** (fixed): transparent over the hero with the white logo; on scroll it turns white with the colour logo and deep-teal nav.
   - Nav: **Home · Tours ▾ (Cultural Tours, Festival Tours, Trekking Tours, Luxury Tours) · Destination · Blog · Contact Us**, plus a search icon.
   - Below 1200px: a deep-teal slide-in drawer with accordion sub-menus.
2. **Hero:** 3-slide fade slider (`slide1–3.jpg`), autoplay that pauses on hover/focus and is off for reduced motion, a "Follow us" bar, arrows and a "1 / 3" counter. Since 2026-10-13 (on request): darker overlay (deep teal gradient + charcoal), a Parisienne tagline "Welcome to Bhutan" (`site.kicker`, in `--accent-tint`) above a Playfair Display 500 headline in white (same clamp size as step 12), and no activity chips (`heroActivities` deleted).
3. **Search bar:**
   - Tour Type dropdown (the Location field was removed on request, 2026-10-13), a calendar popover (past dates disabled) and Adult/Children counters, all keyboard-operable.
   - Search jumps to the tour grid and applies the tour-type tab if one matches.
4. **Types of tours:** redesigned 2026-10-15 on request from a reference ("Why choose us" layout): from 992px three columns, 3 cards | a tall photo across all rows (`tourTypesImage` in home.ts, the cham dancer) | 3 cards; below that the photo becomes a 280–340px banner above a 2 / 1-column card grid. Cards alternate white-filled and Misty Horizon-outlined in a checkerboard, compact (~160px tall, grid max-width 960px; both reduced on request), each with a **Google Material Symbols** icon (temple / festival / hiking / diamond / meditation / forest; the owner asked for standard icons; filled 960-unit glyphs in the `material` map of Icon.astro) in a round Morning Haze badge that fills Global Tide on hover, name and an uppercase "N tours" line (icons in `categoryIcons` in home.ts; the one-line descriptions were removed on request); the whole card links to `/tours?type=…`. (Earlier: icon circles; a card-grid redesign was tried 2026-10-14 and reverted.)
5. **Featured retreats:** 3 tall cards (`tours.slice(0,3)`), a swipe slider on mobile.
6. **Best-selling tours:** filter tabs plus 9 `TourCard`s, 3 / 2 / 1 per row (3 from 992px, on request 2026-10-13: bigger cards, about 380px wide). Flex-wrap grid, so an incomplete last row is centred (with 9 tours the rows are full).
7. **Popular destinations ("Explore the valleys"):** bento grid of 5 tiles, redesigned 2026-10-14 on request: only the valley name in big white text on the photo over a **black** bottom shade (region/tagline lines were tried and removed on request) (tour-count pill removed on request), a round arrow button bottom right (teal and pointing forward on hover) and image zoom. Section subtitle + "View all 7 destinations" button under the grid.
8. **Vacation / about:** split section with two overlapping circular photos, booking phone and "Book now". The spinning dashed ring by the photos was removed on request (2026-10-14); both photos have the same 10px white outline + shadow.
9. **Testimonials: removed on request (2026-10-14)** from Home and About, plus the footer "Guest reviews" link. `Testimonials.astro` and the sample `testimonials` in home.ts are kept for when real reviews exist (slider 3 / 2 / 1-up, initials avatars); add `<Testimonials />` back to a page to show it.
10. **Partner logo marquee:** real logos since 2026-10-16 (on request): Department of Tourism, ABTO, Drukair, Bhutan Believe, Bhutan Airlines, HRAB. Files copied from the owner's other Bhutan sites (`D:Website htmlbitm.btssets`, also used by luxurybhutan), trimmed with sharp into `src/assets/partners/`; data in `partners` (home.ts; `wide` = wordmark shown shorter). Greyscale at rest, full colour on hover; static for reduced motion.
11. **Latest news:** 3 blog cards.
12. **Footer:**
   - deep teal with the white logo and socials
   - Contact us, and "About us" link columns
   - bottom bar: © on the left, and on the right the credit "Website Designed And Developed by **aBit Private Limited**" (`credit` in home.ts; the company name links to https://abit.bt in a new tab, on request 2026-10-16; it replaced the Terms of use / Privacy policy / FAQs links on request, 2026-10-14). The bar is in the same Deep Horizon as the footer since 2026-10-13 (on request; was charcoal), split off by a thin divider that lines up with the one under the logo row
13. **Chat widget** (`ChatWidget.astro`, every page, bottom right; replaced the back-to-top button on request 2026-10-16): round button with a pulse ring that alternates WhatsApp green / Messenger blue (static green for reduced motion) opens a small chat card (Deep Horizon header with the arc-mark favicon, "Kuzuzangpo la!" bubble, "Chat on WhatsApp" → `wa.me/<site.whatsapp>` with a pre-filled message, "Chat on Messenger" → `m.me/<site.messenger>`; Messenger added on request the same day). Closes on Esc / outside click. Number in `site.whatsapp` (home.ts; +975 17936364, from the owner), colours `--whatsapp(-dark)` / `--messenger(-dark)` in global.css.

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
   - New icons `flame` and `bird` (Lucide) in `Icon.astro` (replaced 2026-10-14 by the tour-type icons in section 4).
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
10. **Destinations page (/destinations, 2026-10-08):** banner `tdzong.jpg`. Nav "Destination" and footer "Destinations" → /destinations; homepage tiles → `/destinations#<id>` (tile `area` keys = row ids). Tours page also reads `?place=`; Contact reads `?place=` ("I would like to visit …"). Haa has no tour yet, so it only shows "Plan a trip here" (Phobjikha got one in step 22). Altitudes and drive times are approximate.
11. **Blog (/blog) + first article (2026-10-08):** /blog/visiting-bhutan-temples-respectfully ("Butter Lamps and Blessings", temple etiquette). `posts` in home.ts now have `slug?` + `excerpt` (no more `href`); use `postHref()`. Nav Blog → /blog. The cranes and Chele La posts have no article yet ("Coming soon"). **To publish one:** add a `slug` in home.ts and its body in blog.ts (build fails if the body is missing). Blog banner `slide3.jpg`.
12. **Smaller banner text (2026-10-08, on request: titles covered the photos; inner-page banners changed again 2026-10-16, see step 23).** Homepage hero title clamp(38px, 6.2vw, 100px) → clamp(30px, 3vw + 12px, 56px). PageHero title clamp(34px, 4.6vw, 66px) → clamp(28px, 2vw + 14px, 44px), max-width 780px. Kicker → 11–13px and intro text → 14–16px on both. **Keep these sizes.**
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

19. **Real team + no rates (2026-10-13, from the owner):**
   - Team: Kezang Dorji (Founder & Managing Director), Karma Drupchuk (Head of Tours & Operations · Senior Cultural Guide), Chimi Dema (Administration & Accounts), Kelzang Namrig Dawa (Trek Leader). No photos yet (initials).
   - Packages stay as they are.
   - **Rates removed everywhere, on request.** `price` is deleted from the Tour type and data; no price on TourCard, Signature-journeys cards, blog related tours; the price sorts on /tours are gone; the tour-detail booking card says "Plan this trip with us" + enquire for a quote. **Don't add prices back.**

20. **Equal gap between sections, site-wide (2026-10-13, on request):** one `--section` gap (72 / 96 / 120px) between every pair of sections, on every page. A rule in global.css handles it: two `.section`s in a row (an inline `<script>` between them is allowed) share one gap, and `.section-soft` (Morning Haze band: About values, tour "related", blog "more") keeps padding on both sides. The logo strip and CtaBand are `.section`s now too. **Don't add per-section `padding-top: 0` overrides; give new sections the `section` class (and `section-soft` for a tinted band).**

21. **Design polish (2026-10-13, on request):**
   - Section labels above every centred section title (first as uppercase `.eyebrow`, then the same day changed on request to Parisienne `.script-accent` taglines, see Fonts). `.eyebrow` is still used inside content (Overview, Latest article, Plan your trip, destination row numbers).
   - Tour-type circles: white with a soft shadow; on hover they fill Global Tide and a dashed Misty Horizon ring appears (replaced 2026-10-15, see Homepage section 4).
   - TourCard footer: "View tour →" on the right, where the price used to be (decorative, aria-hidden; the title link covers the card).
   - Testimonials: white cards with a shadow and a decorative `quote` icon (new in Icon.astro). The slider track has inline padding with negative margin so the shadows aren't clipped.

22. **9th tour + shorter card titles + taller photos (2026-10-13, on request):**
   - New tour (no slug, so it links to /contact?tour=…): "Phobjikha Crane Valley: Black-Necked Cranes and Gangtey Monastery", Nature, 6 days, places Paro · Thimphu · Punakha · Phobjikha (Gangtey), photo `Black Neck Cranes.jpg` (also used by the cranes blog card). Placeholder like the other tours, so the owner should confirm it. Destinations now shows "View 1 tour" for Phobjikha.
   - TourCard shows only the name before the colon ("Punakha Valley Cultural Journey") at 20px; the full title stays on the detail page banner. The "Handpicked for you" (FeaturedRetreats) cards do the same.
   - TourCard photo is square (`aspect-ratio: 1 / 1`, image requested at 800 × 800). It applies everywhere TourCard is used (homepage, /tours, related tours).

23. **Inner-page banner text = homepage hero (2026-10-16, on request):** `PageHero` now uses the homepage hero text styles: a Parisienne script tagline (`kicker`, teal tint, clamp(30px, 1.6vw + 22px, 44px)) above a white Playfair Display 500 title at the homepage size clamp(30px, 3vw + 12px, 56px), max-width 860px. This replaces the uppercase spaced kicker and the 28–44px bold sans title of step 12. Taglines are sentence case ("Our tours", "Contact us", "Trekking tour · 9 days"). The overlay keeps the lighter photo of step 17 plus the homepage's soft black radial shade behind the text, so the script reads on bright photos (e.g. the butter-lamp article).

24. **Inner-page polish (2026-10-16, on request "make the inner pages nicer"):**
   - `PageHero`: slow 14s zoom-out on the photo, staggered fade-up of tagline/title/text/breadcrumb, a short four-colour bar under the title, and a "Scroll" mouse cue (links to `#after-hero`; hidden under 768px wide / 700px tall; `overlap` prop lifts it above the overlapping cards on Contact and tour detail). All off for reduced motion.
   - Cards (About values / steps / team, Contact info cards): lift on hover, the brand bar grows along the top, icons fill Global Tide.
   - About story photo and Destinations rows: an offset Misty Horizon outline frame behind the photo (Destinations alternates side with the row).
   - Contact: the enquiry form is a white card with the brand bar on top (inputs Cloud Mist); fixed the textarea placeholder showing in monospace.
   - Tour detail: left-aligned block titles get the four-colour bar; facts bar has dividers; gallery = one wide 2:1 lead photo + three squares.
   - Blog: "More stories" grid centres an incomplete last row; articles have a reading-progress bar along the top and a teal drop cap on the intro.


25. **All missing pages built (2026-10-16, on request "create a page for every title mentioned"):**
   - **6 travel-info pages** from the footer, one template `src/pages/[guide].astro` + content in `src/data/guides.ts` (block list like the blog, plus `table`, `faq` and `links` blocks): /bhutan-visa-sdf, /travel-guidelines, /festival-calendar, /trekking-seasons, /faqs (Contact FAQs + 6 more), /terms-and-conditions. Layout: PageHero, article with brand-bar h2s, sticky sidebar (On this page, Travel information links, contact card), CtaBand. Footer links point to them; "Why travel with us" → /about#values-title.
   - **3 tour pages** (every tour now has a slug): /tours/thimphu-heritage-tour (5 days), /tours/druk-path-trek (7 days, banner `Snowman Race48.jpg`), /tours/phobjikha-crane-valley (6 days).
   - **2 blog articles** (no "Coming soon" posts left): /blog/phobjikha-black-necked-cranes, /blog/chele-la-sunrise.
   - 24 pages in total. A crawl of `dist` found no broken internal links; the only `#` links left are the social icons.
   - **Minimal text (same day, on request):** the 6 info pages and the 2 new articles were cut to short intros, one-line paragraphs and short lists (no body images on the info pages; FAQ answers one sentence). Keep new content on these pages just as brief.


26. **Destinations page redesigned (2026-10-16, on request "change destination page design totally"):** replaced the jump chips + alternating rows. Now: "Where we travel" head with a west → east route (round photo stops, dashed road, altitude; scrolls sideways on phones); a sticky scroll-spy bar under the header (active valley in Deep Horizon); valleys grouped into Western / Central Bhutan chapters (`regions` in destinations.ts); each valley = full-width photo (16:7 desktop, 16:9 tablet, 4:3 phone) with region pill, name and tagline, and a white card overlapping its bottom (text + buttons | Don't miss | facts); then a "The valleys at a glance" table (Morning Haze band; rows become cards under 768px). Data reordered into road order. **No numbers anywhere on the page** (route badges, bar chips, region "01 – 04" pills, outlined photo numbers and table circles removed on request, same day).

**Lighthouse** (production build, before step 4): mobile 94 / 100 / 100 / 100, desktop 99 / 96 / 100 / 100.

## Open items (need the owner)

- **Placeholder business data (from step 6), replace with real figures:** group sizes, durations, ratings / "(120)" review counts, photo/video counts, blog dates, and the testimonials (not shown now; written examples, not real guests). Do not launch with them.
- **Destination tiles:** the Punakha (mask-dancer photo) and Trongsa (monk-at-door photo) pairings are a best guess. Confirm where those photos were taken.
- **Tour itineraries are sample plans** written from general Bhutan knowledge (routes, passes, approx. altitudes). The owner should check them against their real programmes, and the inclusions too.
- **Confirm the email:** the visiting card prints "kdglobal2026@**gamil**.com". The site uses @gmail.com on the assumption it's a typo (gamil.com is a known typo domain). Fix it in `site.email` if the card was right.
- **About team bios** are short role descriptions written for the real staff (step 19). The owner can refine them, and add photos to `src/assets/images`.
- **Contact page placeholders:** office hours (in `contact.hours`). The map points at Babesa Highway generally, not an exact office pin.
- **Social links** are `#` (Footer + Contact "Follow our journeys"); they need the real profile URLs.
- **New content to check (step 25):** the 6 travel-info pages, 3 new tour itineraries and 2 blog articles were written from general Bhutan knowledge. Check especially the **visa fee (US$40) and SDF rates (US$100 / US$50 children 6–12 / free under 6 / ₹1,200 Indian nationals)**, festival months, trek altitudes, and have the **Terms & conditions** reviewed (deposit, cancellation charges and payment methods are deliberately left to the booking confirmation).
- **Messenger:** `site.messenger` is a placeholder ("kdglobal"); set the real Facebook page username.
- **Before launch:** `site:` is set to https://kdglobal.bt. Change it if the live site uses www or another domain.
- **Logo PDF:** `KD_LOGO_.pdf` couldn't be rendered here (no poppler). If it contains extra brand rules (clear space, minimum size), check them.

## Git / GitHub

- **GitHub Pages (2026-10-16, on request):** `.github/workflows/deploy.yml` builds every push to `main` and publishes `dist` to the **`gh-pages` branch** (peaceiris/actions-gh-pages) → https://choki-dev.github.io/kd/. It sets `SITE_URL`/`BASE_PATH=/kd` (read in astro.config.mjs; local builds and the kdglobal.bt domain are unaffected), then `scripts/prefix-base.mjs` prefixes the plain root links ("/tours" …) in dist HTML. Header strips the base before marking the current page. Testing locally in Git Bash needs `MSYS_NO_PATHCONV=1` or `/kd` turns into a Windows path. Pages source = the gh-pages branch (set up by a first manual push of that branch).
- 2026-10-10: pushed to https://github.com/choki-dev/kd (branch `main`, remote `origin`). `.gitattributes` marks PDFs and images as binary (core.autocrlf=true on this machine had flagged the PDFs as text). `.kilo/` (stray agent worktree in src/pages) is gitignored.
