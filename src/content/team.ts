import { personSchema } from "@/content/schema";

export const story = {
  title: "Our Story",
  paragraphs: [
    "APEX Pilates was founded by Rae Jarboe in 2019 in Gainesville, Florida, inspired by a vision to bring the pulse of the modern Pilates movement to a city ready to rise. After training at studios across the country, Rae set out to create something new—an experience that blends strength, intelligence, and artistry of movement.",
    "With over a decade of expertise building Yoga Pod, APEX was designed to redefine what's possible on the Xformer. Each class balances intensity and intention, crafted to be safe, challenging, and exhilarating.",
    "APEX stands apart through innovative sequencing, unmatched instructor training, and a culture that's as welcoming as it is driven.",
    "At our core, we exist to transform your body, elevate your mind, and awaken joy. Through mindful movement and community, we cultivate strength that moves beyond the machine—into every part of life.",
  ],
};

export const teamIntro =
  "We have an incredible team of passionate leaders. Explore our team below and get to know them a little better — and best, go take their class.";

export const ownership = [
  personSchema.parse({
    photo: "alex",
    name: "Alex Jarboe",
    role: "Owner",
    bio: [
      "Alex is a co-owner of APEX Gainesville. His path into ownership and leadership grew directly from lived experience—first as a student, then as a teacher, mentor, and builder of community.",
      "Originally from the East Coast, Alex moved to Colorado in 2003 seeking a deeper connection to nature and a slower, more intentional pace of life. In 2018, Alex and his wife Rae moved to Gainesville with a clear intention: to build on the heart-driven Yoga Pod foundation they built nationally, into a city that values connection, and to be closer to family. They put down roots in the Oakview neighborhood and committed to showing up not just as studio owners, but as active members of the Gainesville community.",
      "Alex's favorite class is APEX 1. The music, the slow pace, and the challenge is unparalleled. The gift he got from APEX teacher training has been forever rewarding and inspiring.",
    ],
  }),
  personSchema.parse({
    photo: "rae",
    name: "Rae Jarboe",
    role: "Owner",
    bio: ["Coming Soon"],
  }),
  personSchema.parse({
    photo: "dan",
    name: "Dan Carbonell",
    role: "Owner",
    bio: ["Coming Soon"],
  }),
];

export const directors = [
  personSchema.parse({
    photo: "amanda",
    name: "Amanda Allen",
    role: "Director of Infrastructure",
    bio: ["Coming soon"],
  }),
  personSchema.parse({
    photo: "emily",
    name: "Emily Tharp Pendley",
    role: "Director of Operations",
    bio: [
      "Emily is the Director of Operations at APEX | Yoga Pod and a lead faculty member in the APEX and FIT Teacher Training Programs. She joined Yoga Pod in 2019 as a student and quickly fell in love with the challenge the classes provided and the community that the studio attracted. She took the first public FIT Teacher Training in 2019 while in graduate school at the University of Florida and continued her fitness education by attending one of the pre-opening APEX Teacher Trainings. During these trainings, Emily realized her passion for teaching group fitness classes and made the decision to follow her heart and pursue fitness as a career. Shortly after completing her Master's degree in early 2021, Emily began working full time at Yoga Pod, first as an Assistant Manager, then as the Northwest Studio Manager, eventually becoming the Regional Studio Director before being promoted to Director of Operations in 2025.",
      "Emily currently teaches FIT, Sweat, Heat, & Beatz, and APEX classes while also overseeing the entire regional operations of both studio locations, the APEX | Yoga Pod staff, facilitating teacher training, and heading multiple subcommittees including our Athlete Program, Events Team, and Retail Team. She considers this role to be the biggest blessing as it's a combination of everything she loves: movement, community, teaching, and having fun!",
      "Emily loves APEX because it's the perfect blend of gritty hard work, and infectious, effervescent energy. The work drives you to muscle failure, but in that failure you're invited to find the success of pushing yourself to a new edge, and that mental shift is worth its weight in gold to her. APEX 2 classes are her favorite for this reason — each sequence delivers a different experience that keeps her on her toes and challenges her brain and body.",
    ],
  }),
  personSchema.parse({
    photo: "sage",
    name: "Sage Schaefer",
    role: "Director of Design",
    bio: [
      "Sage is the Director of Design at APEX | Yoga Pod and serves as a faculty lead for FIT, HOT, and YIN teacher trainings. She joined the team as a Karma Yogi in 2022 and has steadily progressed into the Leadership team, driven by passion for what we do and who we do it for. In addition to serving our studio community in the front of house and on the mic, Sage holds it down behind-the-scenes as the lead curator of the studio's creative and marketing materials and supports operations through staff training and back-end system development.",
      "Though Sage loves APEX now, it was certainly not love at first sight — or shake! The level of challenge you face in APEX is unlike anything else, and it definitely took time to get used to. But thanks to the support of our teachers and the consistency of the practice, Sage came to love APEX for not just its physical growth, but mental, as you constantly build and conquer new limits. She is passionate about making APEX accessible and welcoming — yet still challenging — to students of all body types and experience levels.",
      "Sage fell even deeper in love with the APEX modality when APEX Deep Space was introduced as it blends together her favorite pieces of our pre-existing offerings — the breath-to-movement rhythm of FLOW, the body-to-machine connection of APEX, and the movement-to-beat vibe of FIT. Growing her own physical and mental strength through APEX has already been such a gift; getting to share that excitement with students as an APEX teacher is priceless.",
      "Outside of the studio, you can find Sage reading a new book, vibing at a concert, playing D&D, or hanging out with her partner and their 3 tabby cats.",
    ],
  }),
  personSchema.parse({
    photo: "kyle",
    name: "Kyle Snowden",
    role: "Regional Assistant Director",
    bio: ["Coming soon"],
  }),
  personSchema.parse({
    photo: "lindsey",
    name: "Lindsey Guarisco",
    role: "Regional Assistant Director",
    bio: ["Coming soon"],
  }),
  personSchema.parse({
    photo: "taylor",
    name: "Taylor Williams",
    role: "Regional Assistant Director",
    bio: ["Coming soon"],
  }),
];
