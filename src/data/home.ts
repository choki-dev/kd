// All homepage content lives here — edit text, links and photos without touching the components.
// Photos live in src/assets/images (Bhutan photography); Astro's <Image /> resizes and converts them to WebP.
import type { ImageMetadata } from "astro";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import prayerFlagBridge from "../assets/images/Ben-Richards-Tourism-Bhutan-044.jpg";
import tashiDzong from "../assets/images/tashidzong.jpg";
import snowTrek from "../assets/images/snowtrek.jpg";
import taktsang from "../assets/images/taktsang.jpg";
import tsechu from "../assets/images/tsechu.jpg";
import trekPonies from "../assets/images/trek.jpg";
import buddhaDordenma from "../assets/images/Thimphu 190723 by Amp Sripimanwat-53.jpg";
import bumthangTrek from "../assets/images/Bumthangtrek.jpg";
import maskDancer from "../assets/images/about-temple.jpg";
import monkDoor from "../assets/images/bhutan.jpg";
import dzongValley from "../assets/images/tdzong.jpg";
import bumthang from "../assets/images/Bumthang.jpg";
import paroValley from "../assets/images/by Matt Dutile Paro 2 (1).jpg";
import elder from "../assets/images/about-couple.jpg";
import taktsangClose from "../assets/images/about-hiker.jpg";
import butterLamps from "../assets/images/butterlamp.jpg";
import cranes from "../assets/images/Black Neck Cranes.jpg";
import chelela from "../assets/images/chelela.jpg";
import logoAbto from "../assets/partners/abto.png";
import logoBhutanAirlines from "../assets/partners/bhutan-airlines.png";
import logoBelieve from "../assets/partners/bhutan-believe.png";
import logoDot from "../assets/partners/department-of-tourism.png";
import logoDrukair from "../assets/partners/drukair.png";
import logoHrab from "../assets/partners/hrab.png";


export const site = {
  name: "KD Global",
  tagline: "Commerce & Services",
  kicker: "Welcome to Bhutan", // script tagline above the homepage hero title
  title: "KD Global — Bhutan Tours, Treks & Festival Holidays",
  description:
    "KD Global Commerce & Services is a Thimphu-based tour operator planning private cultural tours, tsechu festival trips, Himalayan treks and luxury holidays across Bhutan, with licensed local guides and your visa and SDF handled for you.",
  // Contact details from the visiting card in the Brand Guidelines 2026 (p. 24).
  phone: "+975 17754285", // main number: header/booking boxes
  phoneAlt: "+975 77563215", // second number on the card
  whatsapp: "+975 17936364", // floating WhatsApp chat button (number from the owner, 2026-10-16)
  messenger: "kdglobal", // Facebook page username for the Messenger chat button (m.me/<username>) — PLACEHOLDER, replace with the real page
  email: "gocoms@gobalcommerce.com",
  // Contact-form delivery (no backend): FormSubmit forwards each enquiry to this inbox. The first enquiry sends an
  // activation email to the inbox; click "Activate Form" once, and every enquiry after that arrives normally.
  // TEMPORARY (2026-10-16): enquiries go to the developer's inbox for testing. Switch back to
  // "https://formsubmit.co/ajax/gocoms@gobalcommerce.com" before launch (and activate it once there).
  formEndpoint: "https://formsubmit.co/ajax/choki@abit.bt",
  address: "Changzamtog, Thimphu, Bhutan",
  website: "kdglobal.bt",
};

export type IconName =
  | "search" | "chevron-down" | "chevron-right" | "menu" | "x" | "plane"
  | "tent" | "flashlight" | "mountain" | "compass" | "sailboat" | "palm" | "cable-car" | "map-pin" | "calendar"
  | "users" | "quote" | "minus" | "plus" | "star" | "image" | "video" | "clock" | "phone" | "mail" | "award"
  | "file-text" | "arrow-left" | "arrow-right" | "arrow-up" | "building" | "facebook" | "linkedin" | "x-social"
  | "instagram" | "check" | "temple" | "festival" | "hiking" | "diamond" | "meditation" | "forest";

export const socials: { label: string; icon: IconName; href: string }[] = [
  { label: "Facebook", icon: "facebook", href: "#" },
  { label: "LinkedIn", icon: "linkedin", href: "#" },
  { label: "X (Twitter)", icon: "x-social", href: "#" },
  { label: "Instagram", icon: "instagram", href: "#" },
];

// ---------- Header ----------
export type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Tours",
    href: "/tours", // highlights the dropdown on the Tours page
    children: [
      { label: "All Tours", href: "/tours" },
      { label: "Cultural Tours", href: "/tours?type=Cultural" },
      { label: "Festival Tours", href: "/tours?type=Festival" },
      { label: "Trekking Tours", href: "/tours?type=Trekking" },
      { label: "Luxury Tours", href: "/tours?type=Luxury" },
    ],
  },
  { label: "Destination", href: "/destinations" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

// ---------- Hero ----------
export const heroSlides = [
  {
    image: slide1,
    alt: "Taktsang (Tiger's Nest) monastery on a misty cliff",
    title: "Discover the land of the Thunder Dragon",
    text: "From the cliffside Tiger's Nest to great fortress dzongs and prayer-flagged mountain passes, explore the Himalayan kingdom of Bhutan with a team that calls it home.",
  },
  {
    image: slide2,
    alt: "Covered wooden cantilever bridge in Bhutan",
    title: "Where the mountains meet the sky",
    text: "Cross old cantilever bridges, hike alpine trails to glacial lakes and camp beneath snow peaks with experienced Bhutanese trekking crews.",
  },
  {
    image: slide3,
    alt: "Red-lit eaves of a Bhutanese dzong at night",
    title: "A kingdom of Gross National Happiness",
    text: "Masked dances at the tsechu, butter-lamp-lit temples and slow days in quiet valleys — Bhutan at your own pace.",
  },
];

// ---------- Tour categories (filter tabs, search "Tour Type" and the "Types of tours" circles) ----------
export const tourCategories = ["Cultural", "Festival", "Trekking", "Luxury", "Spiritual", "Nature"] as const;
export type TourCategory = (typeof tourCategories)[number];

// ---------- Tours (featured retreats + best-selling) ----------
// Rates are not shown on the site (owner's request, 2026-10-13): visitors enquire for a quote.
export type Tour = {
  title: string;
  slug?: string; // has a detail page at /tours/<slug> (content in src/data/tourDetails.ts)
  city: string; // main place shown on the card
  places: string[]; // every place the itinerary visits (drives the destination tile counts)
  image: ImageMetadata;
  alt: string;
  category: TourCategory;
  rating: number;
  reviews: string;
  people: number; // maximum group size
  days: number;
  featured?: boolean;
  photos: number;
  videos: number;
};

const tour = (t: Omit<Tour, "rating" | "reviews" | "photos" | "videos"> & Partial<Tour>): Tour => ({
  rating: 5,
  reviews: "120",
  photos: 8,
  videos: 1,
  ...t,
});

export const tours: Tour[] = [
  tour({ slug: "punakha-valley-cultural-journey", title: "Punakha Valley Cultural Journey: Dzongs, Rice Terraces and Prayer-Flag Bridges", city: "Punakha", places: ["Paro", "Thimphu", "Punakha"], image: prayerFlagBridge, alt: "Traveller crossing a suspension bridge hung with prayer flags", category: "Cultural", people: 12, days: 7, featured: true }),
  tour({ slug: "thimphu-heritage-tour", title: "Thimphu Heritage Tour: Tashichho Dzong, Weekend Market and Craft Schools", city: "Thimphu", places: ["Paro", "Thimphu"], image: tashiDzong, alt: "Tashichho Dzong lit up at dusk", category: "Cultural", people: 12, days: 5, featured: true }),
  tour({ slug: "jomolhari-base-camp-trek", title: "Jomolhari Base Camp Trek: Yak Pastures Beneath the Sacred Peak", city: "Paro", places: ["Paro"], image: snowTrek, alt: "Snow-capped Himalayan peak above a forested valley", category: "Trekking", people: 10, days: 9, featured: true }),
  tour({ slug: "tigers-nest-pilgrimage", title: "Tiger's Nest Pilgrimage: Taktsang Hike and Paro Valley Temples", city: "Paro", places: ["Paro", "Thimphu"], image: taktsang, alt: "Taktsang (Tiger's Nest) monastery on its cliff", category: "Spiritual", people: 12, days: 4 }),
  tour({ slug: "paro-tsechu-festival-tour", title: "Paro Tsechu Festival Tour: Masked Dances and the Thongdrel Unveiling", city: "Paro", places: ["Paro", "Thimphu", "Punakha"], image: tsechu, alt: "Masked dancers performing at a tsechu festival", category: "Festival", people: 12, days: 8, featured: true }),
  tour({ slug: "druk-path-trek", title: "Druk Path Trek: Alpine Lakes Between Paro and Thimphu", city: "Paro", places: ["Paro", "Thimphu"], image: trekPonies, alt: "Trekkers and pack ponies below a snow peak", category: "Trekking", people: 10, days: 7 }),
  tour({ slug: "luxury-bhutan-thimphu-to-bumthang", title: "Luxury Bhutan: Boutique Lodges from Thimphu to Bumthang", city: "Thimphu", places: ["Paro", "Thimphu", "Punakha", "Trongsa", "Bumthang"], image: buddhaDordenma, alt: "Buddha Dordenma statue overlooking Thimphu valley", category: "Luxury", people: 6, days: 9, featured: true }),
  tour({ slug: "bumthang-valleys", title: "Bumthang Valleys: Meadow Walks, Farmhouse Stays and Ancient Temples", city: "Bumthang", places: ["Paro", "Thimphu", "Punakha", "Trongsa", "Bumthang"], image: bumthangTrek, alt: "Trekkers in a meadow in Bumthang", category: "Nature", people: 12, days: 10 }),
  tour({ slug: "phobjikha-crane-valley", title: "Phobjikha Crane Valley: Black-Necked Cranes and Gangtey Monastery", city: "Phobjikha", places: ["Paro", "Thimphu", "Punakha", "Phobjikha (Gangtey)"], image: cranes, alt: "Two black-necked cranes in flight", category: "Nature", people: 12, days: 6 }),
];

/** Link for a tour card: its detail page, or an enquiry when it has none yet */
export const tourHref = (t: Tour) => (t.slug ? `/tours/${t.slug}` : `/contact?tour=${encodeURIComponent(t.title)}`);

/** Tall cards in the "Signature journeys" section */
export const featuredRetreats = tours.slice(0, 3);

export const tourFilters = ["View All", ...tourCategories] as const;

const toursIn = (place: string) => tours.filter((t) => t.places.includes(place)).length;

// ---------- Search bar ----------
export const searchTourTypes: string[] = [...tourCategories];

// ---------- Types of tours (counts come from the tours above) ----------
const categoryIcons: Record<TourCategory, IconName> = {
  Cultural: "temple", // Material Symbols (see Icon.astro)
  Festival: "festival",
  Trekking: "hiking",
  Luxury: "diamond",
  Spiritual: "meditation",
  Nature: "forest",
};
export const tourTypes: { name: string; icon: IconName; count: number }[] = tourCategories.map((c) => ({
  name: c,
  icon: categoryIcons[c],
  count: tours.filter((t) => t.category === c).length,
}));
/** Tall photo in the middle of the Tour types grid */
export const tourTypesImage = { src: maskDancer, alt: "Masked cham dancer in a colourful festival costume" };

// ---------- Popular destinations (bento grid; `area` is the tile slot, counts come from the tours above) ----------
export const destinations: { name: string; tours: number; image: ImageMetadata; alt: string; area: "punakha" | "thimphu" | "bumthang" | "paro" | "trongsa" }[] = [
  { name: "Punakha", tours: toursIn("Punakha"), image: maskDancer, alt: "Masked cham dancer in a colourful festival costume", area: "punakha" },
  { name: "Thimphu", tours: toursIn("Thimphu"), image: dzongValley, alt: "Tashichho Dzong and terraced fields in the Thimphu valley", area: "thimphu" },
  { name: "Bumthang", tours: toursIn("Bumthang"), image: bumthang, alt: "Temple roofs framed by a window in Bumthang", area: "bumthang" },
  { name: "Paro", tours: toursIn("Paro"), image: paroValley, alt: "Paro valley seen from a forested hillside", area: "paro" },
  { name: "Trongsa", tours: toursIn("Trongsa"), image: monkDoor, alt: "Monk in red robes at a painted temple doorway", area: "trongsa" },
];

// ---------- Vacation / about ----------
export const vacation = {
  title: "Travel Bhutan with people who call it home.",
  text: "Our Thimphu-based team plans every detail — your Bhutan visa, the Sustainable Development Fee, hotels, licensed guides and drivers — so you can simply land in Paro and start exploring.",
  features: [
    { icon: "award" as IconName, title: "Licensed local guides", text: "English-speaking Bhutanese guides who share the history, festivals and everyday life of their own valleys." },
    { icon: "file-text" as IconName, title: "Visa and permits handled", text: "We arrange your visa, route permits and SDF payment, and send clear packing and etiquette advice before you fly." },
  ],
  imageLarge: { src: elder, alt: "Smiling Bhutanese elder in a traditional bamboo hat" },
  imageSmall: { src: taktsangClose, alt: "Taktsang monastery between prayer flags" },
};

// ---------- Testimonials ----------
// NOT SHOWN: the Guest reviews section was removed from Home and About on request (2026-10-14).
// To bring it back with real reviews (with permission): replace these, then add <Testimonials /> to the pages again.
export const testimonials = [
  { name: "Sarah M.", role: "United Kingdom", quote: "Our guide made Bhutan come alive — the stories behind every dzong, the hike to Tiger's Nest at our own pace and dinner in a Punakha farmhouse. Everything ran perfectly." },
  { name: "Daniel K.", role: "Australia", quote: "The Druk Path trek was the highlight of our year. The camp crew, the ponies and the food were outstanding, and the lake views were unreal." },
  { name: "Mei L.", role: "Singapore", quote: "Seeing the Paro Tsechu with a local who explained each mask dance was unforgettable. Visa and SDF were all sorted before we even booked flights." },
  { name: "James R.", role: "United States", quote: "As a photographer I loved the early-morning stops at the passes and dzongs. Small group, patient guide and a driver who knew every bend in the road." },
  { name: "Anna S.", role: "Germany", quote: "When our flight into Paro was rescheduled the team rearranged the whole itinerary within the hour. Truly caring, personal service." },
  { name: "Priya N.", role: "India", quote: "The luxury tour felt effortless — beautiful lodges, a hot stone bath in Bumthang and quiet temples away from the crowds." },
];

// ---------- Partner logos (marquee) ----------
// Real Bhutan tourism bodies and airlines; logo files copied from the owner's other Bhutan sites (bitm.bt, luxurybhutan),
// trimmed to their artwork. `wide` = a wordmark, shown a little shorter so all logos look the same size.
export const partners: { name: string; logo: ImageMetadata; wide?: boolean }[] = [
  { name: "Department of Tourism, Bhutan", logo: logoDot, wide: true },
  { name: "Association of Bhutanese Tour Operators (ABTO)", logo: logoAbto },
  { name: "Drukair – Royal Bhutan Airlines", logo: logoDrukair },
  { name: "Bhutan Believe", logo: logoBelieve, wide: true },
  { name: "Bhutan Airlines", logo: logoBhutanAirlines },
  { name: "Hotel and Restaurant Association of Bhutan (HRAB)", logo: logoHrab },
];

// ---------- Latest news / blog ----------
// A post with a `slug` has a page at /blog/<slug> (body in src/data/blog.ts); the others show as "Coming soon" on /blog.
export type Post = { slug?: string; title: string; excerpt: string; category: string; date: string; image: ImageMetadata; alt: string };

export const posts: Post[] = [
  { slug: "visiting-bhutan-temples-respectfully", title: "Butter lamps and blessings: how to visit Bhutan's temples respectfully", excerpt: "What to wear, which way to walk, when to take off your shoes and how to light a butter lamp — a simple guide to temple etiquette in Bhutan.", category: "Culture", date: "2 October, 2026", image: butterLamps, alt: "Rows of lit butter lamps in a temple" },
  { slug: "phobjikha-black-necked-cranes", title: "Phobjikha in winter: watching the black-necked cranes return", excerpt: "Each autumn rare black-necked cranes fly over the Himalaya to winter in the Phobjikha valley. When to go, where to watch and how to visit responsibly.", category: "Nature", date: "18 September, 2026", image: cranes, alt: "Black-necked cranes in flight" },
  { slug: "chele-la-sunrise", title: "Chele La at sunrise: prayer flags above the Paro and Haa valleys", excerpt: "An early start rewards you with a sea of prayer flags, Himalayan views and the road down into the quiet Haa valley.", category: "Travel Tips", date: "4 September, 2026", image: chelela, alt: "Prayer flags at Chele La pass at sunrise" },
];

// ---------- Footer ----------
// "#" = page not built yet (travel-info pages: src/data/guides.ts)
export const footerLinks: { label: string; href: string }[][] = [
  [
    { label: "About KD Global", href: "/about" },
    { label: "Why travel with us", href: "/about#values-title" },
    { label: "Our tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Contact", href: "/contact" },
  ],
  [
    { label: "Bhutan visa & SDF", href: "/bhutan-visa-sdf" },
    { label: "Travel guidelines", href: "/travel-guidelines" },
    { label: "Festival calendar", href: "/festival-calendar" },
    { label: "Trekking seasons", href: "/trekking-seasons" },
    { label: "Terms & conditions", href: "/terms-and-conditions" },
    { label: "FAQs", href: "/faqs" },
  ],
];
/** Link for a post: its page, or the blog list when it has none yet */
export const postHref = (p: Post) => (p.slug ? `/blog/${p.slug}` : "/blog");

// Footer bottom bar credit (replaced the Terms / Privacy / FAQs links on request, 2026-10-14)
export const credit = { text: "Website Designed And Developed by", company: "aBit Private Limited", href: "https://abit.bt" };
