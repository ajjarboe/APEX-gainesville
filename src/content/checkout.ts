import { offeringSchema } from "@/content/schema";

/** The only file in this repo allowed to name Arketa. Everything books through here. */
const ARKETA_CHECKOUT = "https://app.arketa.co/gnv/pricing/checkout/";
const ARKETA_SCHEDULE_IFRAME = "https://app.arketa.co/iframe/gnv/schedule";

export const ARKETA_ORIGIN = "https://app.arketa.co";

export const offerings = {
  intro: offeringSchema.parse({
    id: "L1vIdJEGXwriYS0WtLqj",
    price: 60,
    label: "$60 for 8 Classes in 2 Weeks",
  }),
  monthly4: offeringSchema.parse({
    id: "HDcSJM19Fm23TSOiUGuL",
    price: 139,
    label: "Monthly 4 Class",
  }),
  monthly8: offeringSchema.parse({
    id: "U5KpzKgIeABIzVl7K5yW",
    price: 189,
    label: "Monthly 8 Class",
  }),
  monthlyUnlimited: offeringSchema.parse({
    id: "zFqATuk3cJQ2yvqlstw0",
    price: 229,
    label: "Monthly Unlimited",
  }),
  annualUnlimited: offeringSchema.parse({
    id: "QRm7Iji8XFEOBqg3leGq",
    price: 2299,
    label: "Annual Unlimited",
  }),
  dropIn: offeringSchema.parse({
    id: "E0i3oFWtEOZcbJAOzh8f",
    price: 40,
    label: "Drop In Class",
  }),
  pack5: offeringSchema.parse({ id: "ZPijo2JO5i7PfvgsN9J6", price: 195, label: "5 Class Pack" }),
  pack10: offeringSchema.parse({ id: "OpEiOaYlR1cx97dhQhcl", price: 370, label: "10 Class Pack" }),
  infinity4x8: offeringSchema.parse({
    id: "PgvcyH0YglXcyAF9fp3P",
    price: 229,
    label: "Monthly Infinity — APEX 4 Class + Yoga Pod 8 Class",
  }),
  infinity8x8: offeringSchema.parse({
    id: "rBFLfmOmjsiWHUZ2P9MI",
    price: 259,
    label: "Monthly Infinity — APEX 8 Class + Yoga Pod 8 Class",
  }),
  infinityUnlimited: offeringSchema.parse({
    id: "vNC7l8uPbTXTUt8kT0zY",
    price: 319,
    label: "Monthly Infinity — APEX Unlimited + Yoga Pod Unlimited",
  }),
  infinityAnnual: offeringSchema.parse({
    id: "sNFU5VCbx76ToBC75bvy",
    price: 3199,
    label: "Annual Infinity — APEX Unlimited + Yoga Pod Unlimited",
  }),
} as const;

export type OfferingKey = keyof typeof offerings;

export const offeringKeys = Object.keys(offerings) as OfferingKey[];

/** Intro first, then the memberships people actually tap. Packs wait until someone hovers. */
export const warmupWaves: OfferingKey[][] = [
  ["intro"],
  ["monthlyUnlimited"],
  ["annualUnlimited"],
  ["infinityUnlimited"],
  ["monthly8"],
];

/** Infinity checkouts take longer to settle. */
export const comboKeys = ["infinity4x8", "infinity8x8", "infinityUnlimited", "infinityAnnual"] as const;

export function checkoutHref(key: OfferingKey) {
  return `${ARKETA_CHECKOUT}${offerings[key].id}`;
}

export const checkoutWait = {
  title: "Offer loading...",
  lede: "Please stay on this page.",
};

/** One schedule embed for both Gainesville studios. */
const SERVICE_IDS = [
  "zCko19tUPeUIZcixAJao",
  "JUI1kxspSHOdnRlAVtJg",
  "Np1llg6sSxgIJ0jMajD6",
  "wG8I7KHKS36qClCPC9Xj",
  "9vf0KrXtKalkDMaajLm9",
].join(",");

export function scheduleSrc() {
  return `${ARKETA_SCHEDULE_IFRAME}?serviceId=${SERVICE_IDS}`;
}

/** No ad short links yet. Keep the empty list so checkout-check can pass. */
export const shortLinks = [] as const;
