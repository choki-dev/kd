// SEO helpers: absolute URLs (with the base path) and schema.org structured data (JSON-LD).
import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";
import { site } from "../data/home";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const origin = import.meta.env.SITE; // e.g. https://kdglobal.bt (set in astro.config.mjs)

/** Absolute URL for a root path ("/tours") or an already-based asset URL ("/_astro/…", "/kd/_astro/…").
 *  Page paths get a trailing slash, like the built pages and their canonical URLs ("/tours/"). */
export const absUrl = (path: string) => {
  const page = /^[^?#]*\/[^/.?#]+$/.test(path) ? path + "/" : path;
  return new URL(page.startsWith(base + "/") || !base ? page : base + page, origin).href;
};

/** Meta description: trims to `max` characters at a word boundary and adds "…" when it had to cut. */
export const metaDescription = (text: string, max = 160) => {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, clean.lastIndexOf(" ", max - 1)).replace(/[\s,.;:—–-]+$/, "") + "…";
};

/** Absolute URL of a photo's 1200×630 social-sharing crop (the same file BaseLayout uses for og:image). */
export const shareImage = async (src: ImageMetadata) => absUrl((await getImage({ src, width: 1200, height: 630, format: "jpg" })).src);

/** "2 October, 2026" (the blog's display date) → "2026-10-02". */
export const isoDate = (display: string) => {
  const [day, month, year] = display.replace(",", "").split(" ");
  const m = new Date(`${month} 1, 2000`).getMonth() + 1;
  return `${year}-${String(m).padStart(2, "0")}-${day.padStart(2, "0")}`;
};

/** The company, referenced from other schema items by its @id. */
export const organizationId = absUrl("/#organization");

export const organizationSchema = () => ({
  "@type": "TravelAgency",
  "@id": organizationId,
  name: "KD Global Commerce & Services",
  alternateName: site.name,
  url: absUrl("/"),
  logo: absUrl("/apple-touch-icon.png"),
  email: site.email,
  telephone: site.phone.replace(/\s/g, ""),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thimphu",
    streetAddress: "Changzamtog",
    addressCountry: "BT",
  },
  areaServed: { "@type": "Country", name: "Bhutan" },
  contactPoint: [site.phone, site.phoneAlt].map((n) => ({
    "@type": "ContactPoint",
    telephone: n.replace(/\s/g, ""),
    contactType: "reservations",
    availableLanguage: ["English"],
  })),
});

/** BreadcrumbList from Home → parents → current page. */
export const breadcrumbSchema = (steps: { label: string; href: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: steps.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.label, item: absUrl(s.href) })),
});

/** Wraps one or more schema items in a single JSON-LD graph, safe to print inside <script>. */
export const jsonLd = (items: object | object[]) =>
  JSON.stringify({ "@context": "https://schema.org", "@graph": Array.isArray(items) ? items : [items] }).replace(/</g, "\\u003c");
