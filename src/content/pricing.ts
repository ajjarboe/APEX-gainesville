import type { OfferingKey } from "@/content/checkout";

type Tier = {
  key: OfferingKey;
  /** What you get. Shown at the top of the card. */
  name: string;
  /** Shown on the button after the price, e.g. "$229 per month". */
  term: string;
  save?: string;
  feature?: boolean;
};

type Group = {
  id: string;
  title: string;
  lede?: string;
  /** Fine print shown right under the section title. Each line in the list gets its own line on the page. */
  note?: string[];
  tiers: Tier[];
};

export const pricingHeader = {
  title: "Memberships & Class Packs",
};

export const pricingNote =
  "All purchases are final. No refunds are available for drop-ins, class packs, or memberships.";

const CANCELLATION = "30 days' notice required to cancel monthly memberships.";

export const pricingGroups: Group[] = [
  {
    id: "intro",
    title: "Intro Offer",
    lede: "No contract. 2 weeks starts on your first class.",
    tiers: [
      {
        key: "intro",
        name: "8 Classes in 2 Weeks",
        term: "Intro Offer",
        feature: true,
      },
    ],
  },
  {
    id: "membership",
    title: "Autopay Memberships",
    note: [CANCELLATION],
    tiers: [
      { key: "monthly4", name: "4 classes a month", term: "per month" },
      { key: "monthly8", name: "8 classes a month", term: "per month" },
      { key: "monthlyUnlimited", name: "Unlimited", term: "per month", feature: true },
      { key: "annualUnlimited", name: "Unlimited", term: "per year" },
    ],
  },
  {
    id: "infinity",
    title: "Infinity Memberships",
    note: [CANCELLATION, "Class allotments don't roll over."],
    tiers: [
      {
        key: "infinity4x8",
        name: "APEX 4 Class + yoga pod 8 Class",
        term: "per month",
        save: "Save $39/mo",
      },
      {
        key: "infinity8x8",
        name: "APEX 8 Class + yoga pod 8 Class",
        term: "per month",
        save: "Save $59/mo",
      },
      {
        key: "infinityUnlimited",
        name: "APEX Unlimited + yoga pod Unlimited",
        term: "per month",
        save: "Save $79/mo",
        feature: true,
      },
      {
        key: "infinityAnnual",
        name: "APEX Unlimited + yoga pod Unlimited",
        term: "per year",
        save: "Save $629 vs monthly",
      },
    ],
  },
  {
    id: "packs",
    title: "Limited Class Options",
    note: ["Class packs never expire & cannot be shared."],
    tiers: [
      { key: "dropIn", name: "Drop In Class", term: "per class" },
      { key: "pack5", name: "5 Class Pack", term: "per pack" },
      { key: "pack10", name: "10 Class Pack", term: "per pack" },
    ],
  },
];
