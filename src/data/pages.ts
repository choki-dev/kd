// Content for the About Us and Contact Us pages — edit text here, not in src/pages.
import type { IconName } from "./home";
import aboutHero from "../assets/images/buddha.jpg";
import aboutStory from "../assets/images/Ben-Richards-Tourism-Bhutan-001 (1).jpg";
import aboutGuide from "../assets/images/about-couple.jpg";
import contactHero from "../assets/images/temple.jpg";
import toursHero from "../assets/images/Snowman Race48.jpg";

// ---------- About Us ----------
export const about = {
  meta: {
    title: "About Us — KD Global Bhutan Tours & Travel",
    description:
      "Meet KD Global Commerce & Services, a Bhutanese, Thimphu-based company planning private cultural tours, festival trips and Himalayan treks across Bhutan.",
  },
  hero: {
    kicker: "About KD Global",
    title: "Born in Bhutan, built around your journey",
    text: "We are a Thimphu-based team sharing the valleys, festivals and mountain trails of the kingdom we call home.",
    image: aboutHero,
    alt: "Buddha Dordenma statue above the forested Thimphu valley",
  },
  story: {
    eyebrow: "Kuzuzangpo la", // "hello" in Dzongkha — the page's one script accent
    title: "A Bhutanese company sharing the kingdom we love",
    paragraphs: [
      "KD Global Commerce & Services is a Bhutanese company based in Thimphu. Through our travel and tours team we plan private journeys across Bhutan — from the dzongs of Paro and Punakha to the temples of Bumthang and the high trails beneath Jomolhari.",
      "Bhutan welcomes visitors under a policy of high-value, low-volume tourism. We believe that is the best way to see it: in small groups, at an unhurried pace, with guides who grew up in the valleys you are exploring.",
    ],
    points: [
      "Bhutanese-owned and based in Thimphu",
      "Private, tailor-made itineraries",
      "Visa, SDF and route permits arranged",
      "Support from arrival to departure",
    ],
    image: aboutStory,
    alt: "Paro valley with Rinpung Dzong below rugged mountains",
    imageSmall: aboutGuide,
    altSmall: "Smiling Bhutanese elder in a traditional bamboo hat",
  },
  values: {
    title: "Why travel with us",
    subtitle: "Everything we plan is shaped by local knowledge and genuine care for our guests and our country.",
    items: [
      { icon: "map-pin" as IconName, title: "Local expertise", text: "Our guides and drivers are Bhutanese, licensed and passionate about sharing their history, festivals and daily life." },
      { icon: "compass" as IconName, title: "Tailor-made trips", text: "No fixed coach tours: every itinerary is built around your interests, fitness, dates and budget." },
      { icon: "mountain" as IconName, title: "Responsible travel", text: "We follow Bhutan's high-value, low-volume approach, supporting local hotels, farmhouses and craftspeople." },
      { icon: "users" as IconName, title: "Care at every step", text: "From your first question to your flight home, one team looks after you and is there whenever you need us." },
    ],
  },
  steps: {
    title: "How we plan your trip",
    subtitle: "Four simple steps from first idea to landing in Paro.",
    items: [
      { title: "Tell us your plans", text: "Share your dates, interests and group size through our contact form or by email." },
      { title: "Get your itinerary", text: "We design a day-by-day itinerary and quote, and fine-tune it with you until it's right." },
      { title: "We handle the paperwork", text: "Once you confirm, we apply for your visa, pay the SDF and arrange permits, hotels and flights." },
      { title: "Arrive and explore", text: "Your guide and driver meet you at Paro airport and stay with you until you fly home." },
    ],
  },
  // PLACEHOLDER team: names, roles and bios are examples. Replace them with the real team before launch.
  // `photo` is optional: import an image from src/assets/images and set it; without one the card shows initials.
  team: {
    title: "Meet our team",
    subtitle: "The people in Thimphu who plan, guide and look after every journey.",
    members: [
      {
        name: "Karma Dorji",
        role: "Founder & Managing Director",
        bio: "Started KD Global to share Bhutan the way locals know it, and still reviews every itinerary we send.",
        photo: undefined as ImageMetadata | undefined,
      },
      {
        name: "Pema Choden",
        role: "Head of Tours & Operations",
        bio: "Handles visas, the SDF, permits, hotels and flights so each trip runs smoothly from start to finish.",
        photo: undefined as ImageMetadata | undefined,
      },
      {
        name: "Sonam Wangchuk",
        role: "Senior Cultural Guide",
        bio: "A licensed guide who brings dzongs, festivals and Buddhist traditions to life with stories from home.",
        photo: undefined as ImageMetadata | undefined,
      },
      {
        name: "Tshering Lhamo",
        role: "Trek Leader",
        bio: "Leads our Himalayan treks, from the Druk Path to Jomolhari, with a focus on safety, pacing and acclimatisation.",
        photo: undefined as ImageMetadata | undefined,
      },
    ],
  },
  cta: {
    title: "Ready to plan your Bhutan journey?",
    text: "Tell us what you'd love to see and our team in Thimphu will put together a suggested itinerary for you.",
  },
};

// ---------- Contact Us ----------
export const contact = {
  meta: {
    title: "Contact Us — KD Global Bhutan Tours & Travel",
    description:
      "Contact KD Global in Thimphu to plan your Bhutan tour, trek or festival trip. Send an enquiry, call or email our team.",
  },
  hero: {
    kicker: "Contact Us",
    title: "Let's plan your Bhutan journey",
    text: "Questions about tours, festivals, visas or the SDF? Our team in Thimphu is happy to help.",
    image: contactHero,
    alt: "Small white monastery on a forested hillside in Bhutan",
  },
  // Placeholder office hours — replace with the real ones
  hours: "Mon – Sat, 9:00 – 17:00 (Bhutan time, GMT+6)",
  form: {
    title: "Send us an enquiry",
    text: "Fill in the form and your email app will open with your enquiry ready to send. Fields marked * are required.",
    interests: ["Cultural tour", "Festival tour", "Trekking tour", "Luxury tour", "Spiritual / pilgrimage", "Nature & birding", "Not sure yet"],
  },
  // Map of the office area (Babesa, Thimphu) — swap the query for the exact office pin if needed
  mapSrc: "https://www.google.com/maps?q=Babesa+Highway,+Babesa,+Thimphu,+Bhutan&output=embed",
  faqs: [
    {
      q: "Do I need a visa to visit Bhutan?",
      a: "Most visitors need a Bhutan visa approved before they travel; Indian, Bangladeshi and Maldivian nationals receive a permit on arrival instead. When you book with us, we apply for your visa on your behalf.",
    },
    {
      q: "What is the Sustainable Development Fee (SDF)?",
      a: "The SDF is a daily fee set by the Royal Government of Bhutan that supports free healthcare, education and conservation. We include it in your quote and pay it with your visa application.",
    },
    {
      q: "When is the best time to visit Bhutan?",
      a: "Spring (March to May) and autumn (September to November) bring clear skies, comfortable temperatures and many of the big tsechu festivals. Winter is quiet and crisp, and the summer monsoon turns the valleys lush and green.",
    },
    {
      q: "Can you plan a private or tailor-made trip?",
      a: "Yes — all our tours can be private and adjusted to your dates, pace and interests, from short cultural trips to long Himalayan treks.",
    },
    {
      q: "How do I fly into Bhutan?",
      a: "Paro is Bhutan's international airport, served by Drukair and Bhutan Airlines from cities such as Bangkok, Delhi, Kathmandu and Singapore. You can also enter overland from India. We help you book the right connection.",
    },
  ],
};

// ---------- Tours ----------
export const toursPage = {
  meta: {
    title: "Bhutan Tours — Cultural, Festival, Trekking & Luxury | KD Global",
    description:
      "Browse KD Global's Bhutan tours: cultural journeys, tsechu festival trips, Himalayan treks, luxury holidays, pilgrimages and nature tours. Filter by type, destination and length.",
  },
  hero: {
    kicker: "Our Tours",
    title: "Find your journey through Bhutan",
    text: "Private, guided tours from short cultural breaks to high Himalayan treks — every itinerary can be tailored to you.",
    image: toursHero,
    alt: "Glacial river winding through a green Himalayan valley under clouds",
  },
  // Duration filter buckets (days, inclusive)
  durations: [
    { id: "short", label: "Up to 5 days", min: 1, max: 5 },
    { id: "mid", label: "6 – 8 days", min: 6, max: 8 },
    { id: "long", label: "9 days or more", min: 9, max: 99 },
  ],
  cta: {
    title: "Can't find the right trip?",
    text: "Every tour can be private and tailor-made. Tell us your dates and interests and we'll design an itinerary just for you.",
  },
};
