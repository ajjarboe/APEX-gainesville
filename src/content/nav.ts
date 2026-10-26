import { navGroupSchema, navLinkSchema } from "@/content/schema";
import { site } from "@/content/site";

/** Header nav. Groups become a dropdown on desktop and a labelled block in the drawer. */
export const nav = [
  navGroupSchema.parse({
    label: "About",
    links: [
      { href: "/our-studio/", label: "Our Studios" },
      { href: "/our-team/", label: "Our Team" },
      { href: "/your-first-class/", label: "Your First Class" },
    ],
  }),
  navGroupSchema.parse({
    label: "Classes",
    href: "/the-workout/",
    links: [
      { href: "/the-workout/", label: "APEX Signature Pilates" },
      { href: "/deep-space-pilates/", label: "APEX Deep Space Pilates" },
    ],
  }),
  navGroupSchema.parse({
    label: "Locations",
    href: "/locations/",
    links: [
      { href: "/schedule/", label: "Gainesville NW" },
      { href: "/schedule/", label: "Gainesville SW" },
      { href: site.jax.href, label: site.jax.label },
    ],
  }),
  navLinkSchema.parse({ href: "/schedule/", label: "Schedule" }),
  navLinkSchema.parse({ href: "/the-machine/", label: "The Machine" }),
  navLinkSchema.parse({ href: "/pricing/", label: "Pricing" }),
  navLinkSchema.parse({ href: "/training/", label: "Teacher Training" }),
];

export const headerCta = { href: "/schedule/", label: "Book Now" };
