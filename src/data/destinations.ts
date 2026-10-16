// Destinations page content (/destinations). Altitudes and drive times are approximate.
// Tour counts on the page come from `places` on each tour in src/data/home.ts.
import type { ImageMetadata } from "astro";
import destinationsHero from "../assets/images/tdzong.jpg";
import paroValleyImg from "../assets/images/by Matt Dutile Paro 2 (1).jpg";
import thimphuImg from "../assets/images/Thimphu 190723 by Amp Sripimanwat-53.jpg";
import punakhaImg from "../assets/images/Ben-Richards-Tourism-Bhutan-044.jpg";
import trongsaImg from "../assets/images/bhutan.jpg";
import bumthangImg from "../assets/images/Bumthang.jpg";
import phobjikhaImg from "../assets/images/Black Neck Cranes.jpg";
import haaImg from "../assets/images/chelela.jpg";

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
};

export const destinationsPage = {
  meta: {
    title: "Bhutan Destinations — Paro, Thimphu, Punakha, Bumthang & More | KD Global",
    description:
      "Explore Bhutan's valleys with KD Global: Paro and Tiger's Nest, the capital Thimphu, Punakha's great dzong, Trongsa, Bumthang's ancient temples, Phobjikha's cranes and the Haa valley.",
  },
  hero: {
    kicker: "Destinations",
    title: "Explore the valleys of Bhutan",
    text: "From the cliffside monasteries of Paro to the crane valley of Phobjikha — every valley has its own story, festival and landscape.",
    image: destinationsHero,
    alt: "Tashichho Dzong and terraced fields in the Thimphu valley",
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
    image: paroValleyImg,
    alt: "Paro valley seen from a forested hillside",
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
    alt: "Prayer flags at Chele La pass at sunrise",
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
    alt: "Buddha Dordenma statue overlooking Thimphu valley",
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
    alt: "Traveller crossing a suspension bridge hung with prayer flags",
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
    alt: "Black-necked cranes in flight",
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
    alt: "Monk in red robes at a painted temple doorway",
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
    alt: "Temple roofs framed by a window in Bumthang",
  },
];
