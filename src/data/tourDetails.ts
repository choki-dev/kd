// Tour detail pages (/tours/<slug>) — one entry per tour that has a `slug` in src/data/home.ts.
// The itinerary must have exactly one entry per day of the tour (checked at build time).
// Itineraries are sample plans written for the site — have the owner check them before launch.
import type { ImageMetadata } from "astro";
import punakhaValley from "../assets/images/punakha-valley-river.jpg";
import khamsumChorten from "../assets/images/khamsum-yulley-chorten.jpg";
import goldenChortens from "../assets/images/golden-chortens.jpg";
import raftingDzong from "../assets/images/rafting-punakha-dzong.jpg";
import tsechuDance from "../assets/images/paro-tsechu-dance.jpg";
import festivalDancers from "../assets/images/festival-dancers.jpg";
import festivalCrowd from "../assets/images/national-day-crowd.jpg";
import thimphuLhakhang from "../assets/images/thimphu-lhakhang.jpg";
import poniesBridge from "../assets/images/ponies-glacial-bridge.jpg";
import peakClouds from "../assets/images/peak-in-clouds.jpg";
import trekkerJump from "../assets/images/trekker-jump.jpg";
import drukgyelDzong from "../assets/images/drukgyel-dzong.jpg";
import dordenmaPines from "../assets/images/buddha-dordenma-pines.jpg";
import luxuryVilla from "../assets/images/luxury-villa.jpg";
import bhutaneseFood from "../assets/images/bhutanese-food.jpg";
import dochulaChorten from "../assets/images/dochula-chorten-himalaya.jpg";
import nationalMuseum from "../assets/images/national-museum-paro.jpg";
import taktsangSunburst from "../assets/images/tigers-nest-sunburst.jpg";
import paroTown from "../assets/images/paro-town.jpg";
import dordenmaPlaza from "../assets/images/buddha-dordenma-plaza.jpg";
import bumthangDzong from "../assets/images/bumthang-dzong-ridge.jpg";
import farmhouse from "../assets/images/farmhouse-homestay.jpg";
import tamzhing from "../assets/images/tamzhing-lhakhang.jpg";
import mebarTsho from "../assets/images/mebar-tsho.jpg";
import thimphuTshechu from "../assets/images/thimphu-tshechu.jpg";
import textileAcademy from "../assets/images/royal-textile-academy.jpg";
import marketPersimmons from "../assets/images/market-persimmons.jpg";
import postalMuseum from "../assets/images/postal-museum.jpg";
import thimphuLookout from "../assets/images/thimphu-valley-lookout.jpg";
import birdOnBranch from "../assets/images/bird-on-branch.jpg";
import forestChorten from "../assets/images/forest-chorten.jpg";
import chortenMeadow from "../assets/images/chorten-meadow.jpg";
import mistyValley from "../assets/images/misty-valley.jpg";
import bullfinch from "../assets/images/red-headed-bullfinch.jpg";
import wangdueDzong from "../assets/images/wangdue-dzong.jpg";
import takins from "../assets/images/takins.jpg";

type Photo = { src: ImageMetadata; alt: string };
type Day = { title: string; text: string; overnight: string };

export type TourDetail = {
  overview: string[];
  highlights: string[];
  difficulty: "Easy" | "Easy – moderate" | "Moderate" | "Challenging";
  bestTime: string;
  stay: string; // accommodation style
  itinerary: Day[];
  included?: string[]; // defaults to `standardIncluded`
  excluded?: string[]; // defaults to `standardExcluded`
  gallery: Photo[];
  hero?: Photo; // banner photo when the card photo crops badly to a wide banner
};

export const standardIncluded = [
  "Bhutan visa and Sustainable Development Fee (SDF)",
  "Licensed English-speaking Bhutanese guide",
  "Private vehicle and driver for the whole trip",
  "Twin-share accommodation as listed",
  "All meals (breakfast, lunch and dinner)",
  "Monument entrance fees and permits",
  "Paro airport pick-up and drop-off",
  "Bottled water throughout the tour",
];

export const standardExcluded = [
  "International flights into and out of Paro",
  "Travel insurance (required)",
  "Single-room supplement",
  "Alcoholic and bottled soft drinks",
  "Tips for your guide and driver",
  "Personal expenses such as laundry and souvenirs",
];

const arriveParo = "Fly into Paro — one of the most spectacular airport approaches in the world. Your guide and driver meet you on arrival";

export const tourDetails: Record<string, TourDetail> = {
  // ---------- Cultural ----------
  "punakha-valley-cultural-journey": {
    overview: [
      "This week-long journey takes in Bhutan's three great western valleys: Paro, the capital Thimphu and the warm, rice-terraced valley of Punakha, the kingdom's old winter capital.",
      "You'll cross the prayer-flagged Dochu La pass, explore Punakha Dzong at the meeting of two rivers, walk across one of Bhutan's longest suspension bridges and finish with the classic hike to Tiger's Nest.",
    ],
    highlights: [
      "Punakha Dzong at the confluence of the Pho Chhu and Mo Chhu rivers",
      "The long prayer-flag suspension bridge near Punakha",
      "108 chortens and Himalayan views at Dochu La pass",
      "Village walk to Chimi Lhakhang, the fertility temple",
      "Thimphu's Buddha Dordenma, Memorial Chorten and crafts",
      "Hike to Taktsang (Tiger's Nest) monastery",
    ],
    difficulty: "Easy – moderate",
    bestTime: "Mar – May and Sep – Nov",
    stay: "Comfortable tourist-standard hotels",
    itinerary: [
      { title: "Arrive in Paro, drive to Thimphu", text: `${arriveParo} and drive along the Paro and Wang Chhu rivers to Thimphu. Evening stroll around the capital's centre.`, overnight: "Thimphu" },
      { title: "Thimphu sightseeing", text: "Visit the Buddha Dordenma statue, the Memorial Chorten, the National Institute for Zorig Chusum (traditional arts) and the weekend market, ending at Tashichho Dzong at dusk.", overnight: "Thimphu" },
      { title: "Over Dochu La to Punakha", text: "Cross Dochu La pass with its 108 chortens and, on clear days, views of the eastern Himalaya. Descend to the Punakha valley and walk through rice fields to Chimi Lhakhang.", overnight: "Punakha" },
      { title: "Punakha Dzong and the suspension bridge", text: "Explore Punakha Dzong, cross the prayer-flag suspension bridge and hike up through farmland to Khamsum Yulley Namgyal Chorten for views over the valley.", overnight: "Punakha" },
      { title: "Return to Paro", text: "Drive back over Dochu La to Paro. Visit Rinpung Dzong and the National Museum, then wander Paro's main street.", overnight: "Paro" },
      { title: "Hike to Tiger's Nest", text: "Hike up to Taktsang monastery, clinging to a cliff high above the valley. On the way back, visit Kyichu Lhakhang, one of Bhutan's oldest temples. Farewell dinner.", overnight: "Paro" },
      { title: "Depart Paro", text: "Transfer to Paro airport for your onward flight. Tashi delek!", overnight: "—" },
    ],
    gallery: [
      { src: punakhaValley, alt: "The Punakha valley and its river between green hills" },
      { src: khamsumChorten, alt: "Khamsum Yulley Namgyal Chorten above the Punakha valley" },
      { src: goldenChortens, alt: "A row of small golden chortens" },
      { src: raftingDzong, alt: "Rafting on the river below Punakha Dzong" },
    ],
  },

  // ---------- Festival ----------
  "paro-tsechu-festival-tour": {
    overview: [
      "The Paro Tsechu is one of Bhutan's biggest and most colourful festivals. For several days the courtyard of Rinpung Dzong fills with masked cham dances, music and families in their finest gho and kira.",
      "On the final morning, before sunrise, a giant thangka (the thongdrel) is unrolled — seeing it is believed to bring blessings. After the festival you continue to Thimphu and Punakha. Festival dates follow the lunar calendar and usually fall in March or April.",
    ],
    highlights: [
      "Two full days of masked cham dances at Rinpung Dzong",
      "Dawn unveiling of the giant thongdrel on the final day",
      "Your guide explains the meaning of each dance",
      "Thimphu's dzong, crafts and weekend market",
      "Dochu La pass and the Punakha valley",
    ],
    difficulty: "Easy",
    bestTime: "Spring — dates set by the lunar calendar",
    stay: "Comfortable tourist-standard hotels",
    itinerary: [
      { title: "Arrive in Paro", text: `${arriveParo}. Afternoon at the National Museum and a first look at Rinpung Dzong, where the festival takes place.`, overnight: "Paro" },
      { title: "Paro Tsechu — festival day", text: "Spend the day in the dzong courtyard watching the masked dances among local families. Your guide explains the stories and characters behind each dance.", overnight: "Paro" },
      { title: "Paro Tsechu — festival day", text: "Another day of dances, with time to explore the stalls and the town. Optional afternoon visit to Kyichu Lhakhang.", overnight: "Paro" },
      { title: "Thongdrel unveiling, drive to Thimphu", text: "Rise before dawn to see the giant thongdrel unveiled, then enjoy the final dances. In the afternoon, drive to Thimphu.", overnight: "Thimphu" },
      { title: "Thimphu sightseeing", text: "Visit the Buddha Dordenma, the Memorial Chorten, the folk heritage museum and the weekend market, ending at Tashichho Dzong.", overnight: "Thimphu" },
      { title: "Over Dochu La to Punakha", text: "Cross Dochu La pass and descend to Punakha. Visit Punakha Dzong and walk across the suspension bridge.", overnight: "Punakha" },
      { title: "Return to Paro", text: "Morning walk to Chimi Lhakhang through the rice fields, then drive back to Paro. Farewell dinner.", overnight: "Paro" },
      { title: "Depart Paro", text: "Transfer to Paro airport for your onward flight.", overnight: "—" },
    ],
    gallery: [
      { src: tsechuDance, alt: "Masked dancers at the Paro Tsechu festival" },
      { src: festivalDancers, alt: "Festival dancers in yellow skirts spinning in a courtyard" },
      { src: festivalCrowd, alt: "A festive crowd waving flags in Thimphu" },
      { src: thimphuLhakhang, alt: "Temple with a prayer pole among trees in Thimphu" },
    ],
  },

  // ---------- Trekking ----------
  "jomolhari-base-camp-trek": {
    overview: [
      "The Jomolhari trek is Bhutan's classic high-mountain adventure. From the end of the road above Paro you follow the Paro Chhu river up through forests and yak herders' pastures to Jangothang, base camp beneath the sacred peak of Jomolhari.",
      "After a rest day for acclimatisation, the loop crosses Bonte La and Takhung La passes — both above 4,500 m — past high lakes and herders' camps before returning to Paro. A full crew of guide, cook and pack ponies looks after you on the trail.",
    ],
    highlights: [
      "Camping at Jangothang beneath Jomolhari (about 7,300 m)",
      "Crossing Bonte La pass at about 4,890 m",
      "Yak pastures, herders' camps and high alpine lakes",
      "Acclimatisation hike to Tiger's Nest before the trek",
      "Fully supported camping with cook and pack ponies",
    ],
    difficulty: "Challenging",
    bestTime: "Apr – May and Sep – Nov",
    stay: "Hotels in Paro; full-service camping on the trek",
    itinerary: [
      { title: "Arrive in Paro", text: `${arriveParo}. Gear check and trek briefing with your trekking guide.`, overnight: "Paro" },
      { title: "Acclimatisation hike to Tiger's Nest", text: "Hike up to Taktsang monastery — perfect preparation for the altitude to come. Afternoon visit to Kyichu Lhakhang.", overnight: "Paro" },
      { title: "Shana to Soi Thangthangka", text: "Drive to the trailhead near Drukgyel Dzong and Shana, then follow the river upstream through forest to a meadow camp at about 3,600 m.", overnight: "Camp" },
      { title: "Soi Thangthangka to Jangothang", text: "Climb past yak herders' houses above the tree line to Jangothang base camp (about 4,080 m), with Jomolhari towering overhead.", overnight: "Camp" },
      { title: "Rest day at Jangothang", text: "Acclimatise with an optional hike towards the Jomolhari glacier or the twin lakes of Tshophu, or simply rest and enjoy the views.", overnight: "Camp" },
      { title: "Over Bonte La to Soi Yaksa", text: "The big day: cross Bonte La at about 4,890 m, then descend into the beautiful Soi Yaksa valley.", overnight: "Camp" },
      { title: "Soi Yaksa to Thombu Shong", text: "Climb steadily through rhododendron and juniper to a high herders' camp at Thombu Shong (about 4,180 m).", overnight: "Camp" },
      { title: "Over Takhung La to Shana, drive to Paro", text: "Cross Takhung La (about 4,520 m) for final mountain views, then descend to Shana and drive back to Paro for a hot shower and a celebration dinner.", overnight: "Paro" },
      { title: "Depart Paro", text: "Transfer to Paro airport for your onward flight.", overnight: "—" },
    ],
    included: [
      ...standardIncluded.filter((i) => !i.startsWith("Twin-share")),
      "Hotels in Paro and all camping equipment (tents, mattresses, dining tent)",
      "Trekking cook, camp staff and pack ponies",
    ],
    excluded: [...standardExcluded, "Sleeping bag (can be hired in Paro)"],
    gallery: [
      { src: poniesBridge, alt: "Pack ponies crossing a bridge in a glacial valley" },
      { src: peakClouds, alt: "Snow peak breaking through the clouds" },
      { src: trekkerJump, alt: "Trekker leaping between rocks below snowy peaks" },
      { src: drukgyelDzong, alt: "The ruins of Drukgyel Dzong at the start of the trek" },
    ],
  },

  // ---------- Luxury ----------
  "luxury-bhutan-thimphu-to-bumthang": {
    overview: [
      "Travel the length of western and central Bhutan in style, staying in luxury lodges with mountain views, spa treatments and fine dining, with a private guide and vehicle throughout.",
      "From Thimphu and the rice terraces of Punakha you cross the high passes to Trongsa and the spiritual heartland of Bumthang, before returning to Paro for the hike to Tiger's Nest.",
    ],
    highlights: [
      "Hand-picked luxury lodges in every valley",
      "Private guide, vehicle and flexible daily pace",
      "Trongsa Dzong, the ancestral seat of Bhutan's royal family",
      "Bumthang's ancient temples and a traditional hot stone bath",
      "Private picnic lunches and a farmhouse dinner",
      "Tiger's Nest hike to finish",
    ],
    difficulty: "Easy",
    bestTime: "Year-round; best Mar – May and Sep – Nov",
    stay: "Luxury lodges and boutique hotels",
    itinerary: [
      { title: "Arrive in Paro, drive to Thimphu", text: `${arriveParo} and drive to Thimphu. Relax at your lodge with a welcome spa treatment.`, overnight: "Thimphu" },
      { title: "Thimphu at your pace", text: "Private visits to the Buddha Dordenma, the Royal Textile Academy and the arts school, with a traditional lunch and an evening at Tashichho Dzong.", overnight: "Thimphu" },
      { title: "Over Dochu La to Punakha", text: "Cross Dochu La and descend into the Punakha valley for a picnic lunch by the river and a visit to Punakha Dzong.", overnight: "Punakha" },
      { title: "Punakha valley", text: "Walk to Chimi Lhakhang and Khamsum Yulley Namgyal Chorten, cross the suspension bridge and enjoy a slow afternoon at your lodge.", overnight: "Punakha" },
      { title: "Punakha to Trongsa and Bumthang", text: "A scenic drive over Pele La into central Bhutan. Visit Trongsa Dzong and its watchtower museum before continuing to Bumthang.", overnight: "Bumthang" },
      { title: "Bumthang temples", text: "Visit Jambay Lhakhang and Kurjey Lhakhang, two of Bhutan's oldest temples, then unwind in a traditional hot stone bath at a farmhouse.", overnight: "Bumthang" },
      { title: "Return to Paro", text: "Fly back to Paro on a domestic flight (or drive, depending on schedules) with views of the Himalaya. Afternoon at leisure.", overnight: "Paro" },
      { title: "Tiger's Nest", text: "Hike to Taktsang monastery, followed by a farewell dinner in a restored Paro farmhouse.", overnight: "Paro" },
      { title: "Depart Paro", text: "Private transfer to Paro airport for your onward flight.", overnight: "—" },
    ],
    included: [
      ...standardIncluded.map((i) => (i.startsWith("Twin-share") ? "Luxury lodge accommodation" : i)),
      "Domestic flight Bumthang – Paro (schedule permitting)",
      "Hot stone bath and one spa treatment",
    ],
    gallery: [
      { src: dordenmaPines, alt: "Buddha Dordenma statue seen through pine branches" },
      { src: luxuryVilla, alt: "Lodge villa with a pool in a green valley" },
      { src: bhutaneseFood, alt: "Bowls of Bhutanese dishes on a table by a painted window" },
      { src: dochulaChorten, alt: "Golden-roofed chorten at Dochu La with the Himalaya behind" },
    ],
  },

  // ---------- Spiritual ----------
  "tigers-nest-pilgrimage": {
    overview: [
      "A short, meaningful journey to Bhutan's most sacred sites. Legend says Guru Rinpoche flew to the cliffs above Paro on the back of a tigress in the 8th century and meditated in the cave where Taktsang monastery now stands.",
      "Along with the hike to Tiger's Nest you'll visit ancient Kyichu Lhakhang, the great Buddha Dordenma and Thimphu's most loved temples, with time to light butter lamps and receive blessings.",
    ],
    highlights: [
      "Hike to Taktsang (Tiger's Nest), about 900 m above the valley",
      "Kyichu Lhakhang, one of Bhutan's oldest temples",
      "Butter-lamp offering and blessing at a local temple",
      "Buddha Dordenma and the Memorial Chorten in Thimphu",
    ],
    difficulty: "Moderate",
    bestTime: "Year-round",
    stay: "Comfortable tourist-standard hotels",
    itinerary: [
      { title: "Arrive in Paro, drive to Thimphu", text: `${arriveParo} and drive to Thimphu. Evening visit to the Memorial Chorten as locals circle it in prayer.`, overnight: "Thimphu" },
      { title: "Thimphu temples, return to Paro", text: "Visit the Buddha Dordenma, Changangkha Lhakhang and Tashichho Dzong, then drive back to Paro. Light butter lamps at Kyichu Lhakhang.", overnight: "Paro" },
      { title: "Hike to Tiger's Nest", text: "Take the forest trail up to Taktsang monastery — about 5 hours return at an easy pace, with a tea stop at the viewpoint café. Afternoon at leisure.", overnight: "Paro" },
      { title: "Depart Paro", text: "Transfer to Paro airport for your onward flight.", overnight: "—" },
    ],
    gallery: [
      { src: nationalMuseum, alt: "The round Ta Dzong watchtower, home of the National Museum in Paro" },
      { src: taktsangSunburst, alt: "Sun bursting over the cliff above Tiger's Nest" },
      { src: paroTown, alt: "The main street of Paro town" },
      { src: dordenmaPlaza, alt: "Buddha Dordenma statue and its plaza above Thimphu" },
    ],
  },

  // ---------- Nature ----------
  "bumthang-valleys": {
    overview: [
      "Head into central Bhutan for a slower journey through wide valleys, blue pine forests and buckwheat fields. Bumthang is known as Bhutan's spiritual heartland, dotted with some of the kingdom's oldest temples.",
      "You'll walk between villages and monasteries, spend a night in a family farmhouse, and enjoy the quiet rhythm of rural life far from the busier western valleys.",
    ],
    highlights: [
      "Gentle meadow and village walks in the Bumthang valleys",
      "A night in a traditional farmhouse with a local family",
      "Jambay, Kurjey and Tamshing temples",
      "Trongsa Dzong and the high passes of central Bhutan",
      "Punakha Dzong and the Dochu La pass",
    ],
    difficulty: "Easy – moderate",
    bestTime: "Mar – May and Sep – Nov",
    stay: "Hotels plus one farmhouse homestay",
    itinerary: [
      { title: "Arrive in Paro, drive to Thimphu", text: `${arriveParo} and drive to Thimphu. Evening walk in the capital.`, overnight: "Thimphu" },
      { title: "Thimphu to Punakha", text: "Morning sightseeing in Thimphu, then cross Dochu La to Punakha and visit Punakha Dzong.", overnight: "Punakha" },
      { title: "Punakha to Trongsa", text: "Drive east over Pele La, through yak pastures and dwarf bamboo, to Trongsa and its great dzong.", overnight: "Trongsa" },
      { title: "Trongsa to Bumthang", text: "Cross Yotong La into the Chumey valley, known for its yathra wool weaving, and continue to Jakar in Bumthang.", overnight: "Bumthang" },
      { title: "Meadow walk", text: "A gentle walk through meadows and pine forest between villages and small temples, with a picnic lunch along the way.", overnight: "Bumthang" },
      { title: "Farmhouse stay", text: "Walk to a village in the Tang valley and spend the night with a farming family — share dinner, try local ara and soak in a hot stone bath.", overnight: "Farmhouse" },
      { title: "Bumthang temples", text: "Visit Jambay Lhakhang, Kurjey Lhakhang and Tamshing Lhakhang, and the Burning Lake (Membartsho) where Pema Lingpa is said to have found hidden treasures.", overnight: "Bumthang" },
      { title: "Bumthang to Punakha", text: "A long, scenic drive back west through Trongsa and over Pele La to the warmer Punakha valley.", overnight: "Punakha" },
      { title: "Punakha to Paro", text: "Cross Dochu La once more and continue to Paro. Farewell dinner.", overnight: "Paro" },
      { title: "Depart Paro", text: "Transfer to Paro airport for your onward flight.", overnight: "—" },
    ],
    gallery: [
      { src: bumthangDzong, alt: "Dzong on a ridge above the Bumthang valley" },
      { src: farmhouse, alt: "Stone farmhouse with a garden" },
      { src: tamzhing, alt: "Tamzhing Lhakhang and its prayer flag pole in Bumthang" },
      { src: mebarTsho, alt: "Mebar Tsho, the Burning Lake, in Bumthang" },
    ],
  },

  // ---------- Cultural (added 2026-10-16) ----------
  "thimphu-heritage-tour": {
    overview: [
      "A short, rich introduction to Bhutan's capital and its living traditions. Thimphu is a city without traffic lights, where monks, office workers and farmers share the streets and centuries-old crafts are still taught to young students.",
      "You'll visit the great Tashichho Dzong, the giant Buddha Dordenma, the craft schools and the weekend market, then finish in Paro with time to see Rinpung Dzong — and the option to hike to Tiger's Nest.",
    ],
    highlights: [
      "Tashichho Dzong, seat of the government and the central monk body",
      "The giant Buddha Dordenma overlooking the valley",
      "Painting, carving and embroidery at the National Institute for Zorig Chusum",
      "The Centenary Farmers' Market and the Memorial Chorten",
      "Takin, Bhutan's national animal, at the Motithang preserve",
      "Rinpung Dzong and Kyichu Lhakhang in Paro",
    ],
    difficulty: "Easy",
    bestTime: "All year — best Mar – May and Sep – Nov",
    stay: "Comfortable tourist-standard hotels",
    itinerary: [
      { title: "Arrive in Paro, drive to Thimphu", text: `${arriveParo} and drive along the river to Thimphu, stopping at Tamchog Lhakhang and its iron-chain bridge. Evening at the Memorial Chorten, where locals walk their prayer rounds.`, overnight: "Thimphu" },
      { title: "Dzongs, Buddha and crafts", text: "Visit the Buddha Dordenma, the National Institute for Zorig Chusum where students learn Bhutan's 13 traditional arts, and the Textile Museum. End the day at Tashichho Dzong as the flag is lowered at dusk.", overnight: "Thimphu" },
      { title: "Markets, temples and takin", text: "Browse the Centenary Farmers' Market and the craft bazaar, climb to Changangkha Lhakhang above the city, and see the takin at the Motithang preserve. Afternoon drive to Paro.", overnight: "Paro" },
      { title: "Paro valley", text: "Explore Rinpung Dzong and the National Museum and visit Kyichu Lhakhang, one of Bhutan's oldest temples — or swap the day for the hike to Tiger's Nest. Farewell dinner.", overnight: "Paro" },
      { title: "Depart Paro", text: "Transfer to Paro airport for your onward flight. Tashi delek!", overnight: "—" },
    ],
    gallery: [
      { src: thimphuTshechu, alt: "The Thimphu Tshechu crowd at Tashichho Dzong, seen from above" },
      { src: textileAcademy, alt: "Woven textiles on display at the Royal Textile Academy" },
      { src: marketPersimmons, alt: "Girl eating a persimmon at a Thimphu market stall" },
      { src: postalMuseum, alt: "Vintage red jeep in the Bhutan Postal Museum" },
    ],
  },

  // ---------- Trekking (added 2026-10-16) ----------
  "druk-path-trek": {
    overview: [
      "The Druk Path is Bhutan's most popular trek: a short, high route over the mountains between Paro and Thimphu. It climbs past the ruins of Jele Dzong, through rhododendron forest and along a chain of clear alpine lakes, with Himalayan views on clear days.",
      "It's a good first Himalayan trek for fit walkers, with four to seven hours of walking a day and a highest pass of about 4,200 m. A guide, cook and pack ponies carry the camp, so you only need a day pack.",
    ],
    highlights: [
      "Jele Dzong and its views over the Paro valley",
      "The alpine lakes of Jimilang Tsho and Simkota Tsho",
      "Himalayan panoramas from the high ridges on clear days",
      "Phajodhing monastery above Thimphu",
      "Walking from one valley to the next, finishing in the capital",
    ],
    difficulty: "Moderate",
    bestTime: "Mar – Jun and Sep – Nov",
    stay: "Hotels in Paro and Thimphu; full-service camping on the trek",
    itinerary: [
      { title: "Arrive in Paro", text: `${arriveParo}. Visit Rinpung Dzong and take a gentle acclimatisation walk, then a trek briefing with your guide.`, overnight: "Paro" },
      { title: "Paro to Jele Dzong", text: "Start near the National Museum and climb steadily through blue pine forest to the ruined Jele Dzong (about 3,480 m), with views back over the Paro valley.", overnight: "Camp" },
      { title: "Jele Dzong to Jangchulakha", text: "Walk through thick rhododendron forest along the ridge, listening for monal pheasants, to the yak pastures of Jangchulakha (about 3,770 m).", overnight: "Camp" },
      { title: "Jangchulakha to Jimilang Tsho", text: "Follow the ridge with mountain views on clear mornings, then descend to camp beside Jimilang Tsho (about 3,880 m), a lake known for its large trout.", overnight: "Camp" },
      { title: "Jimilang Tsho to Simkota Tsho", text: "Pass the small lake of Janetso and yak herders' camps on the way to Simkota Tsho (about 4,110 m), the highest camp of the trek.", overnight: "Camp" },
      { title: "Over Phume La to Thimphu", text: "Cross Phume La (about 4,200 m) for wide Himalayan views, descend to Phajodhing monastery, then down through forest to Thimphu for a hot shower.", overnight: "Thimphu" },
      { title: "Thimphu to Paro, depart", text: "Drive back to Paro airport for your onward flight, or add a day to explore the capital.", overnight: "—" },
    ],
    included: [
      ...standardIncluded.filter((i) => !i.startsWith("Twin-share")),
      "Hotels in Paro and Thimphu and all camping equipment (tents, mattresses, dining tent)",
      "Trekking cook, camp staff and pack ponies",
    ],
    excluded: [...standardExcluded, "Sleeping bag (can be hired in Paro)"],
    gallery: [
      { src: thimphuLookout, alt: "View over the Thimphu valley from a hilltop" },
      { src: birdOnBranch, alt: "Small bird on a bare branch against the sky" },
      { src: forestChorten, alt: "Small chorten in a pine forest" },
      { src: chortenMeadow, alt: "Walkers at a chorten gateway on a green hillside" },
    ],
  },

  // ---------- Nature (added 2026-10-16) ----------
  "phobjikha-crane-valley": {
    overview: [
      "Phobjikha is a wide glacial valley on the western slopes of the Black Mountains, and one of Bhutan's most beautiful places. Each autumn rare black-necked cranes fly in from the Tibetan plateau to spend the winter on its marshes, watched over by the hilltop Gangtey Monastery.",
      "This journey combines the valley with Thimphu and Punakha. Walk the Gangtey Nature Trail, learn about the cranes at the Crane Information Centre and, in November, time your trip with the Black-Necked Crane Festival.",
    ],
    highlights: [
      "Black-necked cranes on the Phobjikha marshes (late October – February)",
      "Gangtey Goenpa, the valley's 17th-century monastery",
      "The Gangtey Nature Trail through pine forest and farmland",
      "The Crane Information Centre and its viewing telescopes",
      "Punakha Dzong and the Dochu La pass",
    ],
    difficulty: "Easy",
    bestTime: "Nov – Feb for the cranes; lovely all year",
    stay: "Comfortable hotels and a lodge in Phobjikha",
    itinerary: [
      { title: "Arrive in Paro, drive to Thimphu", text: `${arriveParo} and drive to Thimphu. Evening walk to the Memorial Chorten.`, overnight: "Thimphu" },
      { title: "Thimphu to Punakha", text: "Visit the Buddha Dordenma and Tashichho Dzong, then cross Dochu La and its 108 chortens to the warm Punakha valley.", overnight: "Punakha" },
      { title: "Punakha Dzong, on to Phobjikha", text: "Explore Punakha Dzong at the meeting of two rivers, then climb through forest over Lawa La into the wide Phobjikha valley.", overnight: "Phobjikha" },
      { title: "Cranes and Gangtey Monastery", text: "Watch the cranes feeding on the marshes in the early morning, visit the Crane Information Centre and Gangtey Goenpa, and walk the Gangtey Nature Trail through pine forest and villages.", overnight: "Phobjikha" },
      { title: "Phobjikha to Paro", text: "A long, scenic drive back over Dochu La to Paro, with stops along the way. Farewell dinner.", overnight: "Paro" },
      { title: "Depart Paro", text: "Transfer to Paro airport for your onward flight.", overnight: "—" },
    ],
    gallery: [
      { src: mistyValley, alt: "Mist rising from a green valley" },
      { src: bullfinch, alt: "Red-headed bullfinch on a branch" },
      { src: wangdueDzong, alt: "Wangdue Phodrang Dzong on its ridge above the river" },
      { src: takins, alt: "A family of takins, Bhutan's national animal" },
    ],
  },
};
