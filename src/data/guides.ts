// Travel-info pages linked from the footer: /bhutan-visa-sdf, /travel-guidelines, /festival-calendar,
// /trekking-seasons, /faqs and /terms-and-conditions (template: src/pages/[guide].astro).
// Content is a list of blocks, like the blog articles. Kept deliberately short (owner asked for minimal text, 2026-10-16).
// Written from general Bhutan travel knowledge: fees, dates and rules change, so have the owner check them before launch.
import type { ImageMetadata } from "astro";
import prayerFlagBridge from "../assets/images/prayer-flag-bridge.jpg";
import paroValley from "../assets/images/paro-valley-morning.jpg";
import festival from "../assets/images/dechenphu-festival.jpg";
import glacialValley from "../assets/images/glacial-river-valley.jpg";
import buddhaDordenma from "../assets/images/buddha-dordenma-prayer-flags.jpg";
import seaOfClouds from "../assets/images/sea-of-clouds.jpg";

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; title: string; text: string }
  | { type: "image"; src: ImageMetadata; alt: string; caption: string }
  | { type: "table"; caption: string; head: string[]; rows: string[][] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "links"; title: string; items: { label: string; href: string }[] };

export type Guide = {
  slug: string;
  label: string; // footer / breadcrumb / sidebar name
  meta: { title: string; description: string };
  hero: { kicker: string; title: string; text: string; image: ImageMetadata; alt: string };
  intro: string;
  updated?: string; // shown above the intro, e.g. for fees and terms
  blocks: GuideBlock[];
};

const faqAll: { q: string; a: string }[] = [
  { q: "Do I need a visa?", a: "Yes, except nationals of India, Bangladesh and the Maldives. We apply for it when you book." },
  { q: "What is the SDF?", a: "A daily government fee that funds healthcare, education and conservation. It's included in our quotes." },
  { q: "When is the best time to visit?", a: "March – May and September – November: clear skies and many festivals." },
  { q: "Can my trip be private or tailor-made?", a: "Yes. Every tour can be adjusted to your dates, pace and interests." },
  { q: "How do I get there?", a: "Fly into Paro with Drukair or Bhutan Airlines, or enter overland from India." },
  { q: "Do I need a guide?", a: "Yes. Tours are led by a licensed Bhutanese guide, who also handles your permits." },
  { q: "How fit do I need to be?", a: "Cultural tours suit most people. Treks need good walking fitness." },
  { q: "Is travel insurance required?", a: "Yes, for your whole stay. Treks need cover for high altitude." },
  { q: "How far ahead should I book?", a: "Three to six months, especially for festival dates." },
];

export const guides: Guide[] = [
  // ---------- Visa & SDF ----------
  {
    slug: "bhutan-visa-sdf",
    label: "Bhutan visa & SDF",
    meta: {
      title: "Bhutan Visa & Sustainable Development Fee (SDF) | KD Global",
      description: "How the Bhutan tourist visa and the Sustainable Development Fee (SDF) work, what they cost, and how KD Global arranges both for you.",
    },
    hero: {
      kicker: "Before you travel",
      title: "Bhutan visa & SDF",
      text: "We handle the paperwork for you.",
      image: prayerFlagBridge,
      alt: "Walking across a suspension bridge hung with prayer flags",
    },
    updated: "Rates checked October 2026",
    intro: "Every visitor needs a visa or entry permit, and most pay a daily fee. Send us your passport copy — we do the rest.",
    blocks: [
      { type: "h2", text: "Visa" },
      { type: "p", text: "Needed by all visitors except nationals of India, Bangladesh and the Maldives." },
      {
        type: "list",
        items: ["Passport valid for 6 months", "Travel insurance for your stay", "Visa fee: US$40 (non-refundable)"],
      },
      { type: "tip", title: "Tip", text: "Book flights after your visa is approved." },
      { type: "h2", text: "SDF" },
      {
        type: "table",
        caption: "Per person, per night (2026 rates)",
        head: ["Visitor", "Fee"],
        rows: [
          ["Adults", "US$100"],
          ["Children 6–12", "US$50"],
          ["Under 6", "Free"],
          ["Indian nationals", "₹1,200"],
        ],
      },
      { type: "p", text: "Included in every KD Global quote." },
      { type: "h2", text: "Getting here" },
      { type: "p", text: "Fly into Paro, or enter overland from India. Route permits for other valleys are arranged by us." },
    ],
  },

  // ---------- Travel guidelines ----------
  {
    slug: "travel-guidelines",
    label: "Travel guidelines",
    meta: {
      title: "Bhutan Travel Guidelines — Etiquette, Health, Money & Packing | KD Global",
      description: "Practical tips for travelling in Bhutan: what to pack, money and phones, altitude and health, temple etiquette and responsible travel.",
    },
    hero: {
      kicker: "Plan with confidence",
      title: "Travel guidelines",
      text: "The essentials, in brief.",
      image: paroValley,
      alt: "Morning haze over the Paro valley and its fields",
    },
    intro: "Bhutan is safe and easy to travel with a local guide. A few things to know before you go.",
    blocks: [
      { type: "h2", text: "Pack" },
      { type: "list", items: ["Warm layers and a rain jacket", "Good walking shoes", "Long sleeves and trousers for temples", "Sunscreen and sunglasses"] },
      { type: "h2", text: "Money & phones" },
      { type: "list", items: ["Currency: ngultrum (equal to the Indian rupee)", "Cards in larger hotels; cash elsewhere", "Local SIMs: B-Mobile, TashiCell", "Power: 230 V · Time: GMT+6"] },
      { type: "h2", text: "Health" },
      { type: "p", text: "Paro and Thimphu sit above 2,000 m. Take it slow on day one and drink plenty of water." },
      { type: "h2", text: "Etiquette" },
      { type: "list", items: ["Dress modestly at dzongs and temples", "Walk clockwise around chortens", "Ask before photographing people", "No smoking in public places"] },
      {
        type: "links",
        title: "Read more",
        items: [{ label: "How to visit Bhutan's temples respectfully", href: "/blog/visiting-bhutan-temples-respectfully" }],
      },
    ],
  },

  // ---------- Festival calendar ----------
  {
    slug: "festival-calendar",
    label: "Festival calendar",
    meta: {
      title: "Bhutan Festival Calendar — Tsechus and Celebrations by Month | KD Global",
      description: "When Bhutan's tsechu festivals take place: Paro, Thimphu, Punakha, Bumthang, the Black-Necked Crane Festival and more.",
    },
    hero: {
      kicker: "Masked dances & blessings",
      title: "Festival calendar",
      text: "Plan your trip around a tsechu.",
      image: festival,
      alt: "Masked dancers in yellow skirts at a festival in Bhutan",
    },
    intro: "Dates follow the lunar calendar and change each year. Ask us for exact dates.",
    blocks: [
      { type: "h2", text: "When they happen" },
      {
        type: "table",
        caption: "Usual months",
        head: ["Festival", "Where", "When"],
        rows: [
          ["Punakha Tsechu", "Punakha", "Feb – Mar"],
          ["Paro Tsechu", "Paro", "Mar – Apr"],
          ["Ura Yakchoe", "Bumthang", "Apr – May"],
          ["Kurjey Tsechu", "Bumthang", "Jun – Jul"],
          ["Haa Summer Festival", "Haa", "Jul"],
          ["Thimphu Tsechu", "Thimphu", "Sep – Oct"],
          ["Jambay Lhakhang Drup", "Bumthang", "Oct – Nov"],
          ["Black-Necked Crane Festival", "Phobjikha", "11 Nov"],
          ["Druk Wangyel Tsechu", "Dochu La", "13 Dec"],
          ["Trongsa Tsechu", "Trongsa", "Dec – Jan"],
        ],
      },
      { type: "h2", text: "Tips" },
      { type: "list", items: ["Dress smartly", "Never cross the dance ground", "No flash photography", "Book early"] },
      { type: "links", title: "Our festival tour", items: [{ label: "Paro Tsechu Festival Tour", href: "/tours/paro-tsechu-festival-tour" }] },
    ],
  },

  // ---------- Trekking seasons ----------
  {
    slug: "trekking-seasons",
    label: "Trekking seasons",
    meta: {
      title: "Bhutan Trekking Seasons — Best Time for Each Trek | KD Global",
      description: "When to trek in Bhutan: conditions by season and the best months for the Druk Path, Jomolhari, Bumthang and Snowman treks.",
    },
    hero: {
      kicker: "Into the Himalaya",
      title: "Trekking seasons",
      text: "When to go and which trek to choose.",
      image: glacialValley,
      alt: "Glacial river winding through a green Himalayan valley under clouds",
    },
    intro: "Spring and autumn are best. Here's how the year looks on the trail.",
    blocks: [
      { type: "h2", text: "Seasons" },
      {
        type: "table",
        caption: "Through the year",
        head: ["Season", "Months", "Conditions"],
        rows: [
          ["Spring", "Mar – May", "Mild, rhododendrons in bloom"],
          ["Monsoon", "Jun – Aug", "Rainy and muddy"],
          ["Autumn", "Sep – Nov", "Clearest views, busiest"],
          ["Winter", "Dec – Feb", "Cold; high passes closed"],
        ],
      },
      { type: "h2", text: "Popular treks" },
      {
        type: "table",
        caption: "Best months",
        head: ["Trek", "Days", "Best months"],
        rows: [
          ["Druk Path", "5–6", "Mar – Jun, Sep – Nov"],
          ["Jomolhari", "6–8", "Apr – Jun, Sep – Nov"],
          ["Bumthang Owl", "3", "Mar – May, Sep – Dec"],
          ["Laya Gasa", "12–14", "Apr – Jun, Sep – Oct"],
          ["Snowman", "~25", "Late Sep – Oct"],
        ],
      },
      { type: "tip", title: "Tip", text: "Most treks go above 4,000 m. Train with long hill walks before you come." },
      {
        type: "links",
        title: "Our treks",
        items: [
          { label: "Druk Path Trek", href: "/tours/druk-path-trek" },
          { label: "Jomolhari Base Camp Trek", href: "/tours/jomolhari-base-camp-trek" },
        ],
      },
    ],
  },

  // ---------- FAQs ----------
  {
    slug: "faqs",
    label: "FAQs",
    meta: {
      title: "Bhutan Travel FAQs — Visas, Costs, Guides and Planning | KD Global",
      description: "Answers to common questions about travelling to Bhutan with KD Global: visas and the SDF, when to go, guides, fitness and booking.",
    },
    hero: {
      kicker: "Good to know",
      title: "FAQs",
      text: "Quick answers. Can't find yours? Just ask.",
      image: buddhaDordenma,
      alt: "Buddha Dordenma statue above the Thimphu valley, seen past prayer flags",
    },
    intro: "The questions we're asked most.",
    blocks: [{ type: "faq", items: faqAll }],
  },

  // ---------- Terms & conditions ----------
  {
    slug: "terms-and-conditions",
    label: "Terms & conditions",
    meta: {
      title: "Terms & Conditions | KD Global Commerce & Services",
      description: "Booking terms and conditions for tours and treks arranged by KD Global Commerce & Services, Thimphu, Bhutan.",
    },
    hero: {
      kicker: "Booking with us",
      title: "Terms & conditions",
      text: "Please read before booking.",
      image: seaOfClouds,
      alt: "Sun over a sea of clouds between dark mountain ridges",
    },
    updated: "Last updated October 2026",
    intro: "These terms apply to all trips arranged by KD Global Commerce & Services, Thimphu. Your booking confirmation gives the details for your trip.",
    blocks: [
      { type: "h2", text: "Booking & payment" },
      { type: "p", text: "Your booking is confirmed once we receive your deposit. Full payment is due before we apply for your visa." },
      { type: "h2", text: "Prices" },
      { type: "p", text: "Quotes include the visa fee and SDF at current government rates. If these change, the price may change." },
      { type: "h2", text: "Cancellations" },
      { type: "p", text: "Cancel in writing. Charges are listed in your booking confirmation. The visa fee is non-refundable." },
      { type: "h2", text: "Changes" },
      { type: "p", text: "Weather, roads or flights may change plans. We'll offer the best alternative." },
      { type: "h2", text: "Insurance" },
      { type: "p", text: "Travel insurance for your whole stay is required, including altitude cover for treks." },
      { type: "h2", text: "Liability" },
      { type: "p", text: "We're not liable for events beyond our control, such as weather, illness or flight disruption." },
      { type: "h2", text: "Privacy" },
      { type: "p", text: "Your details are used only to arrange your trip." },
      { type: "h2", text: "Law" },
      { type: "p", text: "These terms are governed by the laws of Bhutan." },
    ],
  },
];

/** Footer / sidebar link for a guide */
export const guideHref = (slug: string) => `/${slug}`;
