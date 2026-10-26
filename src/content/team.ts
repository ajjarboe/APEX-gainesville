import { personSchema } from "@/content/schema";

export const story = {
  title: "Our Story",
  paragraphs: [
    "With over a decade of expertise building yoga pod, APEX was designed to redefine what's possible on the Xformer. Each class balances intensity and intention, crafted to be safe, challenging, and exhilarating. APEX stands apart through innovative sequencing, unmatched instructor training, and a culture that's as welcoming as it is driven. Through mindful movement and community, we cultivate strength that moves beyond the machine—into every part of life.",
  ],
};

export const ownership = [
  personSchema.parse({
    photo: "alex-jarboe-2026",
    name: "Alex Jarboe",
    role: "Owner",
    bio: [
      "Alex is co-founder of RAD Collective, home to APEX | RITUAL | yoga pod, and co-owner of APEX Gainesville. His path into ownership and leadership grew directly from lived experience—first as a student, then as a teacher, mentor, and builder of community.",
      "Originally from the East Coast, Alex moved to Colorado in 2003 seeking a deeper connection to nature and a slower, more intentional pace of life. In 2018, Alex and his wife Rae moved to Gainesville with a clear intention: to build on the heart-driven yoga pod foundation they built nationally, into a city that values connection, and to be closer to family. They put down roots in the Oakview neighborhood and committed to showing up not just as studio owners, but as active members of the Gainesville community.",
      "Alex's favorite class is APEX 1. The music, the slow pace, and the challenge is unparalleled. The gift he got from APEX teacher training has been forever rewarding and inspiring.",
    ],
  }),
  personSchema.parse({
    photo: "rae",
    name: "Rae Jarboe",
    role: "Owner",
    bio: [
      "**What can students expect in your class?** Hot music, clear guidance, a balance of strength and flexibility, and fun!",
      "**Which yoga pod class do you enjoy most and why?** I love all of our class styles and teach each one. It's so hard to choose when they all have such a perfect balance to one another. I choose them all!",
      "**What type of music do you play in your classes?** Each class will vary, but I am always focused on bringing new, creative music each and every class.",
      "**When you're not practicing yoga, what lights you up?** Travel, hanging with my dog, enjoying time with my husband, playing in nature, going to concerts, cooking, meditating, crafting, journaling, reading, and connecting with friends.",
    ],
  }),
  personSchema.parse({
    photo: "dan",
    name: "Dan Carbonell",
    role: "Owner",
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
      "**What students should expect from your class?** A challenging yet centering experience. A space to move your body and quiet your mind.",
      "**What classes you enjoy most and why?** I love HOT! As a 3rd generation Florida girl, I really like being warm :) I also enjoy the repetition of poses which allow me to find something new each time to deepen into. When I'm not taking HOT, you can find me in an APEX class!",
      "**What type of music do you play in your classes?** I enjoy many different genres, but in my HOT classes I like to play a mix of acoustic, instrumental, nature sounds and a sprinkle of current beats.",
      "**When you're not practicing yoga, what lights you up?** Spending time with my family, being outside, visiting a new national park and photographing all of the above!",
    ],
  }),
  personSchema.parse({
    photo: "lindsey",
    name: "Lindsey Guarisco",
    role: "Accounts Director",
    bio: [
      "**What can students expect in your class?** Students can expect to let go and just have fun in FLOW 2! There is always the option to challenge yourself to see what amazing things your body can do and how it moves! We synchronize our breath to our movement in a heated environment while listening to some tunes and getting a lil’ sweaty. Connecting our breath to our movement allows us to achieve a Flow State, a period of hyper-focus in which we find more energy and enjoyment! :)",
      "**Which yoga pod class do you enjoy most and why?** I enjoy taking FLOW 2 and HOT! It’s always so fun to see the creativity and individuality present in the FLOW 2 sequences that our teachers make. I enjoy HOT because it really challenges me not only physically, but mentally as well.",
      "**What type of music do you play in your classes?** I usually like to play chill beats, but I sometimes throw in some jazzy/popular mashups to make the classes just a little more groovy.",
      "**When you're not practicing yoga, what lights you up?** When I’m not practicing yoga, doing anything with my dog, Roxy, lights me up! I love to be outside with her and go on long walks, or stay inside to cuddle with her and watch movies.",
    ],
  }),
  personSchema.parse({
    photo: "ellen-parks",
    name: "Ellen Parks",
    role: "Regional Assistant Director",
    bio: [
      "**What can students expect in your class?** Students can expect a challenging, high energy practice that encourages both physical and mental strength. I aim to create a space where everyone feels welcomed and empowered to show up as they are, move with intention, and leave feeling more connected to themselves and their practice.",
      "**Which APEX | yoga pod class do you enjoy most and why?** HOT, FLOW 2, or FIT. I appreciate the consistency and familiarity of the HOT sequence. FLOW offers a beautiful balance of movement and breath. And FIT, although a more recent passion, I find energizes and allows me to move in a way that feels authentic.",
      "**What type of music do you play in your classes?** For HOT, you’ll hear anything from energizing songs to keep you moving during powerful poses and more meditative music as we wind down. For FIT, expect to hear hip-hop, rap, maybe a bit of EDM, and some throw backs!",
      "**When you're not at the studio, what lights you up?** When I’m not at the studio, you’ll find me spending time with my friends around Gainesville, walking in Depot park, reading, or volunteering!",
    ],
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
    bio: [
      "**What can students expect in your class?** Students can expect a lighthearted and supportive environment where they can focus on improving form, strength, and body awareness. Each class offers a challenge to both beginners and long time practitioners! I like to emphasize mindful movement, alignment, and breath to help students create a deeper mind to body connection.",
      "**Which APEX | yoga pod class do you enjoy most?** I have a special place in my heart for every class offered at APEX | yoga pod, but if I had to pick it would be APEX 2 or FIT! I love taking classes with upbeat music and plenty of opportunity to move my body.",
      "**What type of music do you play in your class?** I play a mix of rap, hip-hop, pop and EDM/house. I love a good remix or throwback song! I also love getting song requests from students so I can include music they like too!",
      "**When you’re not in the studio, what lights you up?** When I’m not in the studio I love spending quality time with family and friends. I also love going to concerts, the beach, and cooking!",
    ],
  }),
  personSchema.parse({
    photo: "gia-saint-john",
    name: "Gia Saint John",
    role: "Marketing Manager",
    bio: [
      "**What can students expect in your class?** Students can expect a thoughtful, challenging class that emphasizes control, alignment, and mind-body connection. I focus on intentional movement — you’ll feel strong, supported, and aware of why you’re doing each exercise. My goal is for students to leave feeling energized, balanced, and more connected to their bodies.",
      "**Which APEX | yoga pod class do you enjoy most and why?** My favorite class is APEX 2 because it strikes the perfect balance between challenge and control. It’s strong and athletic, but still deeply intentional — you’re building power while staying connected to your breath and alignment. I love that it pushes people just enough to feel accomplished without feeling overwhelmed.",
      "**What type of music do you play in your classes?** I play mostly rap and hip-hop. I love music that keeps you hype and motivated from start to finish. In my practice, focusing on the music is a great way to push through more challenging exercises — it helps you stay present, confident, and mentally strong when things get tough. The right playlist turns effort into momentum.",
      "**When you're not at the studio, what lights you up?** Outside the studio, I’m energized by travel, wellness, and creative projects. I love exploring new places, spending time in nature, and working on passion projects that blend health and lifestyle.",
    ],
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
    bio: [
      "**What can students expect in your class?** Students can expect a welcoming environment for all experience levels. I meet the challenges of a hot practice with a calming presence. My focus is on breath and alignment.",
      "**Which APEX | yoga pod class do you enjoy most and why?** My favorite style of class is HOT because the set sequence allows me to find a meditative state quickly. I have recently fallen back in love with YIN.",
      "**What type of music do you play in your classes?** Imagine yourself on the couch with a cup of tea on a cozy afternoon and the playlist that would go along with that moment. It starts soft and will build to the peak pose with more upbeat tunes and usually finish with instrumental music.",
      "**When you're not at the studio, what lights you up?** When I am not practicing I enjoy reading, snuggling with my dogs and cats and relaxing at the beach. I will always be a lifelong student whether I am studying wine, practicing French or any new skill I find fascinating.",
    ],
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
