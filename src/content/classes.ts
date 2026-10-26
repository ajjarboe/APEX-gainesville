import { classStyleSchema } from "@/content/schema";

export const classesIntro = [
  "Precision. Power. Resistance. Results.",
  "APEX is unlike any exercise class you've been to before. Heart-pumping, body-toning, and failure-driven, APEX will elevate your physical conditioning to its highest point. Classes are designed to work your slow-twitch muscle fibers while staying in time under tension with customizable spring loads for every exercise. It can take 3 classes to 3 months to understand the method, exercises, and transitions, so stay with it to achieve mind-blowing results.",
];

export const classStylesHeading = "Class Styles";

export const classStyles = [
  classStyleSchema.parse({
    name: "APEX Foundations",
    summary:
      "Class begins with an introduction to the method, the machine and muscular engagement. Classes are open to beginners and advanced students who want to prioritize their alignment and move more slowly than APEX 1.",
    detail:
      "While no APEX class is easy, Foundations will help students transition to APEX 1 and 2. Foundations is a perfect complement to your yoga and fitness lifestyle.",
    temp: "Megaformer",
    lengths: "50 mins",
  }),
  classStyleSchema.parse({
    name: "APEX 1",
    summary:
      "This high-intensity, low impact resistance training class is a set sequence to help you build your skills and cultivate deep core strength and long, lean musculature.",
    detail: "Expect a vibrant atmosphere, bumpin' beats and a full-body shake.",
    temp: "Megaformer",
    lengths: "50 mins",
  }),
  classStyleSchema.parse({
    name: "APEX 2",
    summary:
      "Push yourself to the limit. APEX 2's diverse sequence offerings will challenge your endurance, increase stamina, and build mental resilience.",
    detail:
      "APEX 2 classes utilize the diverse exercises available on the machine, with more complex transitions than APEX 1.",
    temp: "Megaformer",
    lengths: "50 mins",
  }),
  classStyleSchema.parse({
    name: "APEX FLEX",
    summary:
      "APEX FLEX classes are full body focused. Stack these classes before or after your favorite APEX 1 or 2 for more shake.",
    detail:
      "These 20-30 minute classes are the definition of efficiency with an intense workout in a shorter time to fit into your busy schedule. FLEX classes are also great for beginners wanting to dip their toes into challenge without committing to 50 minutes of intensity.",
    temp: "Megaformer",
    lengths: "20–30 mins",
  }),
];

export const deepSpace = {
  hero: {
    title: "APEX Deep Space Pilates",
    lede: "Heart Pumping. High Precision. Low Impact. Flow State.",
  },
  experience: {
    title: "The APEX Deep Space Experience",
    body: [
      "Our newest low-impact, high-intensity Pilates experience, inspired by the lineage of classical and traditional Pilates, reimagined with a fluid flow.",
      "Expect a quick yet controlled tempo that strengthens and stretches simultaneously. Deep Space offers a more cardiovascular experience where we weave our APEX focus of maximum time under tension into the modality with seamless, fluid transitions.",
      "You'll feel stronger connections across your entire kinetic chain, improved mobility without overloading joints, and a deeper sense of whole-body awareness.",
    ],
  },
  sections: [
    {
      title: "A breath-to-movement journey",
      body: [
        "If you love vinyasa flow, you'll feel instantly at home here. Deep Space is our most fluid Pilates format, where transitions are smooth, organic, and led by your breath, not just the machine.",
        "This is not about counting reps or holding static shapes. It's about continuous, breath-synced movement that feels natural, grounded, and alive. Each sequence unfolds like choreography: deliberate, creative, and satisfying in its rhythm.",
      ],
    },
  ],
  cta: { href: "/schedule/", label: "Book Deep Space" },
};

export const theMachine = {
  hero: {
    eyebrow: "Machine",
    title: "APEX Xformer",
    lede: "Reformer Pilates Reimagined. Xformer Fitness Elevated.",
  },
  closing: {
    title: "Today is the start of your next level fitness journey",
    cta: { href: "/schedule/", label: "Book Now" },
  },
  body: [
    "APEX is a high-intensity, low-impact, machine-based workout that will fire up your core to fuel every movement. Build the stamina of your slow twitch muscle fibers as you target your entire body, with special attention to the most commonly overlooked muscle groups; deep core stabilizers and glutes.",
    "The pilates-inspired machine houses 2 platforms and 1 gliding carriage which can be springloaded from 0 to 180 pounds of resistance to challenge every fitness level. Transform your body, optimize your health, reach your peak.",
  ],
};
