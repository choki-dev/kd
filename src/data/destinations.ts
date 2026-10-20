// Destinations page content (/destinations). Altitudes and drive times are approximate.
// Tour counts on the page come from `places` on each tour in src/data/home.ts.
import type { ImageMetadata } from "astro";
// Each valley has two different photos: `image` (the big chapter photo) and `thumb` (its round stop on the route).
import destinationsHero from "../assets/images/misty-valley-farmhouse.jpg";
import paroImg from "../assets/images/paro-dzong-river.jpg";
import paroThumb from "../assets/images/rinpung-dzong.jpg";
import haaImg from "../assets/images/prayer-flags-ridge.jpg";
import haaThumb from "../assets/images/haa-river-valley.jpg";
import thimphuImg from "../assets/images/tashichho-dzong-valley.jpg";
import thimphuThumb from "../assets/images/memorial-chorten.jpg";
import punakhaImg from "../assets/images/punakha-dzong-morning.jpg";
import punakhaThumb from "../assets/images/punakha-rice-fields.jpg";
import phobjikhaImg from "../assets/images/phobjikha-meadow.jpg";
import phobjikhaThumb from "../assets/images/phobjikha-monk-mask.jpg";
import trongsaImg from "../assets/images/dzong-galleries.jpg";
import trongsaThumb from "../assets/images/grey-langur.jpg";
import bumthangImg from "../assets/images/bumthang-dzong-forest.jpg";
import bumthangThumb from "../assets/images/kurje-lhakhang.jpg";

export type Destination = {
  id: string; // anchor on the page (#paro); also the ?place= value is `name`
  name: string;
  region: string;
  tagline: string;
  text: string;
  altitude: string;
  access: string;
  bestFor: string;
  highlights: string[];
  image: ImageMetadata;
  alt: string;
  thumb: ImageMetadata; // round photo on the "road east" route (decorative, so no alt)
};

export const destinationsPage = {
  meta: {
    title: "Bhutan Destinations — Paro, Thimphu, Punakha, Bumthang & More | KD Global",
    description:
      "Explore Bhutan's valleys: Paro and Tiger's Nest, the capital Thimphu, Punakha Dzong, Haa, Phobjikha's cranes, Trongsa and the ancient temples of Bumthang.",
  },
  hero: {
    kicker: "Destinations",
    title: "Explore the valleys of Bhutan",
    text: "From the cliffside monasteries of Paro to the crane valley of Phobjikha — every valley has its own story, festival and landscape.",
    image: destinationsHero,
    alt: "Farmhouse on a terraced hillside above a valley filled with mist",
  },
  intro: {
    title: "Where would you like to go?",
    subtitle: "Most journeys begin in Paro and the west, then head east over high passes into central Bhutan. Follow the road below and tap a valley to jump to it.",
  },
  // One chapter per region on the page; `name` must match `region` on the destinations
  regions: [
    {
      name: "Western Bhutan",
      text: "Where every journey begins: the airport valley of Paro, the hidden Haa valley, the capital Thimphu and the warm rice terraces of Punakha.",
    },
    {
      name: "Central Bhutan",
      text: "Over the high passes into the heartland: the crane valley of Phobjikha, royal Trongsa and the ancient temples of Bumthang.",
    },
  ],
  glance: {
    title: "The valleys at a glance",
    subtitle: "Altitude, travel time and what each valley is best for, side by side.",
  },
  cta: {
    title: "Not sure which valleys to choose?",
    text: "Tell us how many days you have and what you love — culture, festivals, hiking or wildlife — and we'll suggest the perfect route.",
  },
};

// Listed in road order, west to east (Haa is the side trip from Paro); the page groups them by `region`.
export const destinationList: Destination[] = [
  {
    id: "paro",
    name: "Paro",
    region: "Western Bhutan",
    tagline: "Gateway to the kingdom and home of Tiger's Nest",
    text: "Bhutan's only international airport sits in this broad, beautiful valley of farmhouses and rice fields. Paro is home to the famous Taktsang (Tiger's Nest) monastery, the imposing Rinpung Dzong and some of the country's oldest temples — the perfect start and finish to any journey.",
    altitude: "About 2,200 m",
    access: "International airport",
    bestFor: "Hiking, history, festivals",
    highlights: ["Taktsang (Tiger's Nest) monastery", "Rinpung Dzong and the Paro Tsechu festival", "Kyichu Lhakhang, one of Bhutan's oldest temples", "National Museum in the Ta Dzong watchtower"],
    image: paroImg,
    alt: "Dzong above the Paro river among autumn trees",
    thumb: paroThumb,
  },
  {
    id: "haa",
    name: "Haa Valley",
    region: "Western Bhutan",
    tagline: "A hidden valley over the Chele La pass",
    text: "Reached by a spectacular drive over Chele La, one of the highest roads in Bhutan, the Haa valley is quiet, rural and little visited. Stay in a farmhouse, hike between villages and visit the White and Black Temples, Lhakhang Karpo and Lhakhang Nagpo.",
    altitude: "About 2,700 m",
    access: "About 2.5 hours from Paro over Chele La",
    bestFor: "Off-the-beaten-path, homestays, hiking",
    highlights: ["Chele La pass and its prayer flags", "Lhakhang Karpo and Lhakhang Nagpo", "Traditional farmhouse homestays", "Views of Jomolhari on clear days"],
    image: haaImg,
    alt: "White prayer flags on a ridge above a wide valley",
    thumb: haaThumb,
  },
  {
    id: "thimphu",
    name: "Thimphu",
    region: "Western Bhutan",
    tagline: "A capital city without a single traffic light",
    text: "Bhutan's lively capital blends tradition and modern life: monks and office workers share the streets, and a police officer still directs traffic by hand. Explore grand Tashichho Dzong, the giant Buddha Dordenma, craft schools and the busy weekend market.",
    altitude: "About 2,300 m",
    access: "About 1 hour from Paro",
    bestFor: "Culture, crafts, city life",
    highlights: ["Tashichho Dzong, seat of the government", "Buddha Dordenma overlooking the valley", "Memorial Chorten and Changangkha Lhakhang", "Weekend market and traditional arts school"],
    image: thimphuImg,
    alt: "Tashichho Dzong in the green Thimphu valley",
    thumb: thimphuThumb,
  },
  {
    id: "punakha",
    name: "Punakha",
    region: "Western Bhutan",
    tagline: "Warm valleys, rice terraces and Bhutan's most beautiful dzong",
    text: "Lower and warmer than its neighbours, Punakha was Bhutan's capital for over three centuries. Its magnificent dzong stands where two rivers meet, framed by jacaranda trees in spring, and the valley is laced with rice terraces, village trails and prayer-flag bridges.",
    altitude: "About 1,250 m",
    access: "About 3 hours from Thimphu via Dochu La",
    bestFor: "Culture, village walks, rafting",
    highlights: ["Punakha Dzong at the meeting of two rivers", "Dochu La pass and its 108 chortens", "Chimi Lhakhang, the fertility temple", "Long prayer-flag suspension bridge"],
    image: punakhaImg,
    alt: "Punakha Dzong by the river on a misty morning",
    thumb: punakhaThumb,
  },
  {
    id: "phobjikha",
    name: "Phobjikha (Gangtey)",
    region: "Central Bhutan",
    tagline: "A glacial valley where black-necked cranes spend the winter",
    text: "This wide, marshy glacial valley is one of Bhutan's most important wildlife areas. From late autumn to early spring, rare black-necked cranes fly in from the Tibetan plateau to winter here, watched over by the hilltop Gangtey Monastery.",
    altitude: "About 2,900 m",
    access: "About 3 hours from Punakha",
    bestFor: "Wildlife, nature trails, birding",
    highlights: ["Black-necked cranes (late Oct – Feb)", "Gangtey Monastery above the valley", "Gangtey Nature Trail through pine forest", "Crane festival at Gangtey in November"],
    image: phobjikhaImg,
    alt: "Grassy valley with a small chorten reflected in a pond",
    thumb: phobjikhaThumb,
  },
  {
    id: "trongsa",
    name: "Trongsa",
    region: "Central Bhutan",
    tagline: "The ancestral seat of Bhutan's royal family",
    text: "Perched above a deep river gorge in the centre of the country, Trongsa's vast dzong once controlled all travel between east and west. The first two kings of Bhutan ruled from here, and the Crown Prince traditionally serves as Trongsa Penlop before taking the throne.",
    altitude: "About 2,200 m",
    access: "About 5 – 6 hours from Punakha",
    bestFor: "History, architecture, scenic drives",
    highlights: ["Trongsa Dzong above the Mangde Chhu gorge", "Ta Dzong watchtower museum", "Crossing Pele La pass", "Chendebji Chorten on the way"],
    image: trongsaImg,
    alt: "Carved wooden galleries around a dzong courtyard",
    thumb: trongsaThumb,
  },
  {
    id: "bumthang",
    name: "Bumthang",
    region: "Central Bhutan",
    tagline: "The spiritual heartland of Bhutan",
    text: "Four wide valleys of buckwheat fields, blue pine forest and apple orchards make up Bumthang, home to some of Bhutan's oldest and most sacred temples. It's a wonderful place for gentle walks, farmhouse stays and a soak in a traditional hot stone bath.",
    altitude: "About 2,600 m",
    access: "About 3 hours from Trongsa, or a domestic flight",
    bestFor: "Temples, farm stays, gentle hikes",
    highlights: ["Jambay Lhakhang and Kurjey Lhakhang", "Membartsho, the Burning Lake", "Tang and Ura village walks", "Local cheese, honey and apple orchards"],
    image: bumthangImg,
    alt: "Dzong in the forested hills of Bumthang under low cloud",
    thumb: bumthangThumb,
  },
];
