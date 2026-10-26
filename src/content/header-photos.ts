import type { HeaderPhoto } from "@/components/patterns/PageHeader";

/** Photos behind each interior page title. Swap a photo here; files live in public/img/. */

export const headerPhotos = {
  theMachine: {
    src: "/img/machine-springs",
    alt: "The springs under an APEX machine in pink studio light",
    widths: [640, 1100, 1200],
    width: 1200,
    height: 668,
  },
  theWorkout: {
    src: "/img/studio-machines",
    alt: "Rows of APEX Xformer machines in the studio under warm class lighting",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1096,
  },
  deepSpace: {
    src: "/img/studio-machines",
    alt: "Rows of APEX Xformer machines in the studio under warm class lighting",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1096,
  },
  ourStudio: {
    src: "/img/hero",
    alt: "The APEX studio under class lighting",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1350,
  },
  ourTeam: {
    src: "/img/team-graduation",
    alt: "A smiling APEX teacher training graduating class gathered around the Xformer machines in the studio",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1350,
    tall: true,
  },
  yourFirstClass: { src: "/img/first-class-intro", alt: "A smiling student on the Xformer in class", widths: [640, 1100, 1800], width: 1800, height: 1200 },
  locations: {
    src: "/img/locations-class",
    alt: "A student twisting into a side plank on the APEX Xformer under pink studio light, with a full class in the mirrors behind her",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1200,
    focus: "upper",
  },
  schedule: {
    src: "/img/schedule-class",
    alt: "Three students in a lunge on the Xformer machines in an APEX class",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1164,
    focus: "top",
  },
  pricing: {
    src: "/img/pricing-class",
    alt: "A full APEX class reaching overhead under studio lights",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1012,
    focus: "lower",
  },
  training: {
    src: "/img/training-class",
    alt: "A smiling APEX teacher cueing a student on the Xformer as classmates laugh along",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1350,
    focus: "upper",
  },
} satisfies Record<string, HeaderPhoto>;
