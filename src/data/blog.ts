// Blog page text (/blog) and the article bodies for posts that have a page (/blog/<slug>).
// The post list itself (title, date, image, excerpt) is `posts` in src/data/home.ts.
import type { ImageMetadata } from "astro";
import blogHero from "../assets/images/slide3.jpg";
import monkDoor from "../assets/images/bhutan.jpg";
import taktsangFlags from "../assets/images/about-hiker.jpg";
import tsechuMask from "../assets/images/about-temple.jpg";

export const blogPage = {
  meta: {
    title: "Bhutan Travel Blog — Culture, Festivals & Trekking Tips | KD Global",
    description:
      "Stories and practical tips from KD Global's team in Thimphu: temple etiquette, festivals, wildlife, trekking seasons and how to make the most of your trip to Bhutan.",
  },
  hero: {
    kicker: "Our Blog",
    title: "Bhutan travel stories & tips",
    text: "Culture notes, festival guides and trekking advice from our team in Thimphu.",
    image: blogHero,
    alt: "Red-lit eaves of a Bhutanese dzong at night",
  },
  author: "KD Global team, Thimphu",
};

// Article content is a list of blocks so it can be written here without HTML
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: ImageMetadata; alt: string; caption: string }
  | { type: "tip"; title: string; text: string };

export const postBodies: Record<string, { intro: string; blocks: Block[]; relatedTours: string[] }> = {
  "visiting-bhutan-temples-respectfully": {
    intro:
      "Bhutan's temples (lhakhangs), monasteries (goembas) and great fortress-monasteries (dzongs) are not museums — they are living places of worship, visited every day by monks and local families. Following a few simple customs shows respect, and often means you are welcomed a little more warmly.",
    relatedTours: ["tigers-nest-pilgrimage", "paro-tsechu-festival-tour"],
    blocks: [
      { type: "h2", text: "Dress modestly" },
      {
        type: "p",
        text: "When visiting a dzong or temple, wear clothes that cover your shoulders and knees: a long-sleeved shirt or top, and long trousers or a long skirt. Avoid shorts, sleeveless tops and very casual flip-flops. Take off hats and sunglasses before you go inside.",
      },
      {
        type: "p",
        text: "You'll notice Bhutanese visitors wearing a ceremonial scarf over their national dress — a kabney for men and a rachu for women. Visitors aren't expected to wear one; neat, modest clothes are all you need.",
      },
      { type: "tip", title: "Packing tip", text: "Keep a light long-sleeved shirt in your day bag. Many days combine a hike with a temple visit, and it's easy to cover up when you arrive." },

      { type: "h2", text: "Take off your shoes where asked" },
      {
        type: "p",
        text: "Shoes are usually removed before entering a shrine room. Leave them neatly by the door with everyone else's — your guide will tell you when. Socks are fine, and welcome on cold stone floors in winter.",
      },

      { type: "h2", text: "Always walk clockwise" },
      {
        type: "p",
        text: "Walk around chortens (stupas), temples and mani walls in a clockwise direction, keeping them on your right. Prayer wheels are also turned clockwise — give each one a gentle spin as you pass, and you send its prayers out into the world.",
      },
      { type: "image", src: monkDoor, alt: "Monk in red robes at a painted temple doorway", caption: "Temple doorways are often beautifully painted — admire them from outside, then follow your guide's lead inside." },

      { type: "h2", text: "Photography: ask first" },
      {
        type: "list",
        items: [
          "Photography is not allowed inside shrine rooms and temples. Courtyards and outside walls are usually fine.",
          "Always ask before photographing monks or local people, and respect a 'no'.",
          "Switch off your flash during festivals and ceremonies.",
          "Flying a drone needs a permit in Bhutan — never fly one at a religious site.",
        ],
      },

      { type: "h2", text: "Inside the shrine room" },
      {
        type: "list",
        items: [
          "Speak softly and set your phone to silent.",
          "Don't touch statues, offerings or religious objects.",
          "Gesture towards a statue with an open hand rather than pointing a finger.",
          "If you sit down, avoid pointing the soles of your feet towards the altar.",
          "Smoking near temples is strictly off-limits.",
        ],
      },

      { type: "h2", text: "Lighting a butter lamp" },
      {
        type: "p",
        text: "Lighting a butter lamp is one of the most beautiful ways to take part. Bhutanese families light lamps to make merit, to remember loved ones and to wish for good fortune. Many temples have a lamp room where you can make a small offering and light one yourself — your guide will show you how.",
      },
      {
        type: "p",
        text: "If you'd like to leave an offering at the altar, a small banknote is customary. A monk may pour a little holy water into your right palm: sip a drop, then pass the rest of your hand lightly over your head as a blessing.",
      },
      { type: "image", src: taktsangFlags, alt: "Taktsang monastery between prayer flags", caption: "At Taktsang (Tiger's Nest) visitors leave cameras and bags in lockers before entering the temples." },

      { type: "h2", text: "At a tsechu festival" },
      {
        type: "p",
        text: "Tsechus are religious festivals as much as celebrations, and the masked dances are performed as blessings. Dress respectfully, never walk across the dance ground, and sit with the crowd around the edge of the courtyard. The masked atsara clowns may tease you — it's all in good fun, so laugh along.",
      },
      { type: "image", src: tsechuMask, alt: "Masked cham dancer in a colourful festival costume", caption: "Each masked dance tells a story — ask your guide what it means." },

      { type: "h2", text: "Your guide is there to help" },
      {
        type: "p",
        text: "Don't worry about getting everything right. Every visitor to Bhutan travels with a licensed guide, and ours are happy to explain customs as you go — and to answer your questions about the stories, saints and symbols you'll see in every temple.",
      },
    ],
  },
};

/** Rough reading time for an article (≈200 words a minute) */
export const readingMinutes = (body: { intro: string; blocks: Block[] }) => {
  const text = [body.intro, ...body.blocks.map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : b.caption))].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
};
