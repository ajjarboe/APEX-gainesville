import { personSchema } from "@/content/schema";

export const story = {
  title: "Our Story",
  paragraphs: [
    "APEX Pilates was founded by Rae Jarboe in 2019 in Gainesville, Florida, inspired by a vision to bring the pulse of the modern Pilates movement to a city ready to rise. After training at studios across the country, Rae set out to create something new—an experience that blends strength, intelligence, and artistry of movement.",
    "With over a decade of expertise building yoga pod, APEX was designed to redefine what's possible on the Xformer. Each class balances intensity and intention, crafted to be safe, challenging, and exhilarating.",
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
      "Originally from the East Coast, Alex moved to Colorado in 2003 seeking a deeper connection to nature and a slower, more intentional pace of life. In 2018, Alex and his wife Rae moved to Gainesville with a clear intention: to build on the heart-driven yoga pod foundation they built nationally, into a city that values connection, and to be closer to family. They put down roots in the Oakview neighborhood and committed to showing up not just as studio owners, but as active members of the Gainesville community.",
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

/** Leadership Team, matching the leadership list on radhq.us. */
export const directors = [
  personSchema.parse({
    photo: "emily",
    name: "Emily Tharp Pendley",
    role: "Director of Operations",
    bio: [
      "Emily is the Director of Operations at APEX | yoga pod and a lead faculty member in the APEX and FIT Teacher Training Programs. She joined yoga pod in 2019 as a student and quickly fell in love with the challenge the classes provided and the community that the studio attracted. She took the first public FIT Teacher Training in 2019 while in graduate school at the University of Florida and continued her fitness education by attending one of the pre-opening APEX Teacher Trainings. During these trainings, Emily realized her passion for teaching group fitness classes and made the decision to follow her heart and pursue fitness as a career. Shortly after completing her Master's degree in early 2021, Emily began working full time at yoga pod, first as an Assistant Manager, then as the Northwest Studio Manager, eventually becoming the Regional Studio Director before being promoted to Director of Operations in 2025.",
      "Emily currently teaches FIT, Sweat, Heat, & Beatz, and APEX classes while also overseeing the entire regional operations of both studio locations, the APEX | yoga pod staff, facilitating teacher training, and heading multiple subcommittees including our Athlete Program, Events Team, and Retail Team. She considers this role to be the biggest blessing as it's a combination of everything she loves: movement, community, teaching, and having fun!",
      "Emily loves APEX because it's the perfect blend of gritty hard work, and infectious, effervescent energy. The work drives you to muscle failure, but in that failure you're invited to find the success of pushing yourself to a new edge, and that mental shift is worth its weight in gold to her. APEX 2 classes are her favorite for this reason — each sequence delivers a different experience that keeps her on her toes and challenges her brain and body.",
    ],
  }),
  personSchema.parse({
    photo: "amanda",
    name: "Amanda Allen",
    role: "Program & Facilities Director",
    bio: [
      "Coming soon",
    ],
  }),
  personSchema.parse({
    photo: "lindsey",
    name: "Lindsey Guarisco",
    role: "Accounts Director",
    bio: [
      "Coming soon",
    ],
  }),
  personSchema.parse({
    photo: "ellen-parks",
    name: "Ellen Parks",
    role: "Regional Assistant Director",
  }),
  personSchema.parse({
    photo: "lindsey-brown",
    name: "Lindsey Brown",
    role: "Regional Assistant Director",
  }),
  personSchema.parse({
    photo: "sarah-mcquatters",
    name: "Sarah McQuatters",
    role: "Regional Assistant Director + Retail Manager",
  }),
  personSchema.parse({
    photo: "gia-saint-john",
    name: "Gia Saint John",
    role: "Marketing Manager",
  }),
  personSchema.parse({
    photo: "patrick-moran",
    name: "Patrick Moran",
    role: "Facilities Manager",
  }),
  personSchema.parse({
    photo: "aubrie-harland",
    name: "Aubrie Harland",
    role: "Karma Crew Manager",
  }),
  personSchema.parse({
    photo: "audrey-lefler",
    name: "Audrey Lefler",
    role: "Karma Crew Manager",
  }),
];

/** Teacher training faculty, as on apexjaxbeach.com. */
export const faculty = [
  personSchema.parse({
    photo: "kaleigh",
    name: "Kaleigh Eadens",
    role: "APEX Lead Teacher & Teacher Training Faculty",
    bio: [
      "Kaleigh has been with APEX as lead teacher and teacher training faculty since its inception in 2020. She also spearheaded and co-created our Deep Space class style. Prior to APEX, she completed her comprehensive Pilates instructor training program and became certified to teach across the full range of Pilates apparatus in 2014. In 2015, she graduated from the Florida School of Massage here in Gainesville and continues to practice bodywork.",
      "Over her ten years working with human bodies in the capacity of a movement instructor and bodyworker, Kaleigh has developed a strong understanding of and passion for human anatomy and leads the Anatomy portion of our APEX, yoga pod 200hr, HOT, and FIT teacher training programs.",
      "Her passion for teaching and practicing APEX is rooted in the unique challenge and empowerment the modality offers, and the incredible humans who dedicate themselves to such a rigorous practice within our community. There isn't an APEX style Kaleigh doesn't love to teach, but her favorite is a tie between APEX 2 and Deep Space. When she isn't in the studio, Kaleigh loves spending time with her husband Mitch and their two daughters, Isla and Nico.",
    ],
  }),
  personSchema.parse({
    photo: "kate",
    name: "Kate Keskinen",
    role: "APEX Faculty",
    bio: [
      "Kate has been teaching at APEX since 2020 and at our sister studio yoga pod since before the doors opened in 2018. She still remembers her first time on the Xformer: the intensity, the mental challenge, the shake, and how she was instantly hooked. APEX quickly became a cornerstone of her movement practice: powerful, energizing, and seriously fun. She loves how it builds strength and endurance while also providing balance for her gentler movement practices.",
      "Her favorite style to take and teach is Deep Space: breath-led, mobility-focused, and spacious in a way that feels like medicine. Since joining the APEX program team in summer 2023, Kate has been honored to support fellow teachers and help shape something that continues to evolve and inspire. The APEX community is vibrant and deeply dedicated to hard work, and Kate feels truly lucky to be part of it.",
    ],
  }),
];
