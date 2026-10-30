// @ts-check
import { readFile, writeFile } from "node:fs/promises";
import { defineConfig, fontProviders } from "astro/config";

// sitemap.xml + robots.txt, written after the build from the list of built pages (no extra npm package needed).
// URLs use `site` + `base`, so the GitHub Pages preview and the live domain each get correct absolute links.
// Each page also lists its content photos (image sitemap, for Google Images): every <img> with alt text, skipping the
// logos, partner logos and search thumbnails; the largest srcset entry is used.
/** @returns {import("astro").AstroIntegration} */
function sitemap() {
  let siteUrl = "";
  let origin = "";
  const skip = /\/_astro\/(kd-logo|kd-logo-white|abto|bhutan-airlines|bhutan-believe|department-of-tourism|drukair|hrab)\./;
  /** @param {URL} file @returns {Promise<string[]>} */
  const pageImages = async (file) => {
    let html = "";
    try {
      html = await readFile(file, "utf8");
    } catch {
      return [];
    }
    const found = new Set();
    for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
      if (!/\balt="[^"]+"/.test(tag)) continue; // decorative images (alt="") are not content
      const set = tag.match(/\b(?:data-)?srcset="([^"]+)"/)?.[1];
      const src = set ? set.split(", ").at(-1)?.split(" ")[0] : tag.match(/\b(?:data-)?src="([^"]+)"/)?.[1];
      if (src && src.includes("/_astro/") && !skip.test(src)) found.add(new URL(src, origin).href);
    }
    return [...found];
  };
  const esc = (/** @type {string} */ s) => s.replace(/&/g, "&amp;");
  return {
    name: "kd-sitemap",
    hooks: {
      "astro:config:done": ({ config }) => {
        const site = /** @type {string} */ (config.site); // always set below
        siteUrl = new URL(config.base.replace(/\/?$/, "/"), site).href; // e.g. https://kdgocoms.com/ or …/kd/
        origin = new URL(site).origin;
      },
      "astro:build:done": async ({ dir, pages, logger }) => {
        const paths = pages
          .map((p) => p.pathname.replace(/^\//, ""))
          .filter((p) => !p.startsWith("404"))
          .sort((a, b) => a.split("/").length - b.split("/").length || a.localeCompare(b));
        let imageCount = 0;
        const urls = [];
        for (const p of paths) {
          const images = await pageImages(new URL(`${p}index.html`, dir));
          imageCount += images.length;
          const imageXml = images.map((src) => `\n    <image:image><image:loc>${esc(src)}</image:loc></image:image>`).join("");
          urls.push(`  <url>\n    <loc>${esc(siteUrl + p)}</loc>${imageXml}\n  </url>`);
        }
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join("\n")}\n</urlset>\n`;
        await writeFile(new URL("sitemap.xml", dir), xml);
        await writeFile(new URL("robots.txt", dir), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`);
        logger.info(`sitemap.xml (${urls.length} pages, ${imageCount} images) and robots.txt written`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  // Live domain (from the visiting card in the Brand Guidelines) — used for canonical and social-sharing image URLs
  // GitHub Pages preview (see .github/workflows/deploy.yml) overrides both: SITE_URL=https://choki-dev.github.io, BASE_PATH=/kd
  site: process.env.SITE_URL || "https://kdgocoms.com",
  base: process.env.BASE_PATH || "/",
  integrations: [sitemap()],

  // The site CSS is small (~6 KB gzipped per page), so it is inlined into each page: no render-blocking stylesheet requests
  build: { inlineStylesheets: "always" },

  // Default encoder settings for every <Image />/<Picture /> (a `quality` prop still wins). Photos are AVIF with a WebP
  // fallback (components/Photo.astro, Hero, PageHero). AVIF 45 looked the same as WebP 72 side by side and is about a
  // third smaller (2026-10-20); WebP is only the fallback for old browsers now. After changing these, delete
  // node_modules/.astro/assets so cached files are re-encoded.
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        webp: { quality: 64, effort: 6 },
        avif: { quality: 45, effort: 4 },
        jpeg: { quality: 78, mozjpeg: true },
      },
    },
  },

  // Brand fonts (KD Global Brand Guidelines 2026, §05 Typography), downloaded at build time and served from this site
  // with metric-matched fallbacks. Used in BaseLayout via <Font />. Montserrat is the LOGO font only (it lives in the
  // logo artwork), so it is not loaded.
  fonts: [
    // Primary font = Aeonik (commercial, CoType Foundry). Until the licensed web files are supplied, General Sans
    // (Fontshare, free licence) stands in. To switch: put Aeonik .woff2 files in src/assets/fonts/aeonik/ and replace
    // this entry with a `fontProviders.local()` one named "Aeonik" using the same cssVariable.
    {
      provider: fontProviders.fontshare(),
      name: "General Sans",
      cssVariable: "--font-primary",
      weights: [400, 500, 700], // the guideline also allows 300 (Light); add it back here if a design starts using it
      styles: ["normal"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    // Secondary serif: editorial headlines and pull quotes only — one serif moment per page, in Deep Horizon
    {
      provider: fontProviders.google(),
      name: "Playfair Display",
      cssVariable: "--font-serif",
      weights: [500, 600],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"],
    },
    // Secondary script: short greetings/taglines at display sizes only — one script accent per page
    {
      provider: fontProviders.google(),
      name: "Parisienne",
      cssVariable: "--font-script",
      weights: [400],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["cursive"],
    },
  ],
});
