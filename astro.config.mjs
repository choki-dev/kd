// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Live domain (from the visiting card in the Brand Guidelines) — used for canonical and social-sharing image URLs
  site: "https://kdglobal.bt",

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
      weights: [300, 400, 500, 700],
      styles: ["normal"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    // Secondary serif: editorial headlines and pull quotes only — one serif moment per page, in Deep Horizon
    {
      provider: fontProviders.google(),
      name: "Playfair Display",
      cssVariable: "--font-serif",
      weights: [500, 600],
      styles: ["normal", "italic"],
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
