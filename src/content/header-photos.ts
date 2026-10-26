import type { HeaderPhoto } from "@/components/patterns/PageHeader";

/** Photos behind each interior page title. Swap a photo here; files live in public/img/. */
const square = { widths: [640, 1100], width: 1100, height: 1100 };

export const headerPhotos = {
  theMachine: {
    src: "/img/machine",
    alt: "A row of APEX Xformer machines in the studio",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1200,
  },
  theWorkout: { src: "/img/tile-1", alt: "Two students mid-lunge in an APEX class", ...square },
  deepSpace: { src: "/img/nw", alt: "A student stretching on the machine at APEX Northwest", ...square },
  ourStudio: {
    src: "/img/hero",
    alt: "The APEX studio under class lighting",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1350,
  },
  ourTeam: { src: "/img/tile-6", alt: "The APEX community after class", ...square },
  yourFirstClass: { src: "/img/tile-5", alt: "A smiling student on the machine", widths: [640, 1100], width: 1100, height: 825 },
  locations: { src: "/img/sw", alt: "A full class at APEX Southwest", ...square },
  schedule: { src: "/img/tile-3", alt: "A student working on the machine", ...square },
  pricing: { src: "/img/tile-4", alt: "APEX students together in the studio", ...square },
  training: { src: "/img/tile-2", alt: "Teachers in training on the machines", ...square },
} satisfies Record<string, HeaderPhoto>;
