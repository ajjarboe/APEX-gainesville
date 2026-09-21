import { studioSchema } from "@/content/schema";

export const studiosIntro =
  "APEX is now available at both of our Gainesville locations. Our studios are designed with your health, safety, and comfort first. The latest medical-grade air filtration system, multi-colored lighting, top of the line machines, modern sound systems, and spa-like locker rooms including showers deliver on everything you have been searching for in your fitness experience. APEX | High-Intensity Pilates is the premier Megaformer fitness studio in north Florida.";

export const studios = [
  studioSchema.parse({
    key: "northwest",
    name: "APEX | Yoga Pod Northwest",
    blurb:
      "At the crossroads of NW 16th Blvd and NW 43rd St, in the Fresh Market shopping center with ample parking.",
    street: "4136 NW 16th Blvd",
    city: "Gainesville, FL 32605",
    phoneDisplay: "352-554-4585",
    phoneRaw: "+13525544585",
    hours: [
      { days: "Mon & Wed", time: "5:45am – 9pm" },
      { days: "Tue & Thu", time: "6:30am – 9pm" },
      { days: "Fri", time: "6:30am – 7pm" },
      { days: "Sat", time: "8:30am – 5:30pm" },
      { days: "Sun", time: "8:30am – 6:30pm" },
    ],
    schedulePath: "/schedule/",
    mapQuery: "4136+NW+16th+Blvd,+Gainesville,+FL+32605",
    photo: "nw",
  }),
  studioSchema.parse({
    key: "southwest",
    name: "APEX | Yoga Pod Southwest",
    blurb:
      "At the crossroads of SW Archer Rd and SW 34th St, in the plaza with Carrabba's Grill and the Enson Market with ample parking.",
    street: "3045 SW 34th St",
    city: "Gainesville, FL 32608",
    phoneDisplay: "352-792-6373",
    phoneRaw: "+13527926373",
    hours: [
      { days: "Mon & Wed", time: "6am – 8:30pm" },
      { days: "Tue & Thu", time: "5:45am – 8:30pm" },
      { days: "Fri", time: "6am – 7:30pm" },
      { days: "Sat", time: "9am – 1pm" },
      { days: "Sun", time: "9am – 6pm" },
    ],
    schedulePath: "/schedule/",
    mapQuery: "3045+SW+34th+St,+Gainesville,+FL+32608",
    photo: "sw",
  }),
];
