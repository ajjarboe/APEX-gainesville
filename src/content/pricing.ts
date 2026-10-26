import type { OfferingKey } from "@/content/checkout";

type Tier = {
  key: OfferingKey;
  /** What you get. Shown above the price. */
  name: string;
  term: string;
  save?: string;
  feature?: boolean;
  /** Button words. Defaults to "Get started". */
  cta?: string;
};

type Group = {
  id: string;
  title: string;
  lede?: string;
  tiers: Tier[];
  note?: string;
};

export const pricingNote =
  "All purchases are final. No refunds are available for drop-ins, class packs, or memberships.";

export const pricingHeader = {
  title: "Memberships & Class Packs",
  lede: "Start with 8 classes for $60. Stay for whichever membership matches how you actually train.",
};

const CANCELLATION =
  "Use them or lose them: monthly classes do not roll over. 30-day cancellation notice required. 2-month minimum on monthly memberships.";

export const pricingGroups: Group[] = [
  {
    id: "intro",
    title: "Intro Offer",
    lede: "No contracts. No strings attached. Your 2 weeks intro does not start until your first class.",
    tiers: [
      {
        key: "intro",
        name: "8 Classes in 2 Weeks",
        term: "one time",
        feature: true,
        cta: "$60 Intro Offer",
      },
    ],
    note: "Intro offers are a 1-time special per person. Staff will reach out to secure an alternate package if more than 1 intro is purchased.",
  },
  {
    id: "membership",
    title: "Autopay Memberships",
    tiers: [
      { key: "monthly4", name: "4 classes a month", term: "per month" },
      { key: "monthly8", name: "8 classes a month", term: "per month" },
      { key: "monthlyUnlimited", name: "Unlimited", term: "per month", feature: true },
      { key: "annualUnlimited", name: "Unlimited", term: "per year" },
    ],
    note: CANCELLATION,
  },
  {
    id: "infinity",
    title: "Infinity Membership",
    lede: "One membership for both APEX and yoga pod. Pick the tier that matches how you train.",
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
    note: "Same cancellation terms as Autopay Memberships above.",
  },
  {
    id: "packs",
    title: "Limited Class Options",
    tiers: [
      { key: "dropIn", name: "Drop In Class", term: "single class" },
      { key: "pack5", name: "5 Class Pack", term: "5 classes" },
      { key: "pack10", name: "10 Class Pack", term: "10 classes" },
    ],
    note: "Class packs never expire & cannot be shared.",
  },
];
