import { pageMetaSchema } from "@/content/schema";

/** One entry per route. The title and description here must match the matching
 *  index.html, which is what search engines and link previews actually read. */
export const pages = {
  home: pageMetaSchema.parse({
    path: "/",
    title: "Gainesville High-Intensity Reformer Pilates Studio | APEX Gainesville",
    description:
      "Full body. High intensity. Low impact. Megaformer Pilates and Contemporary Pilates at two Gainesville studios. Try $60 for 8 classes.",
  }),
  theWorkout: pageMetaSchema.parse({
    path: "/the-workout/",
    title: "APEX Signature Reformer Pilates Classes | APEX Gainesville",
    description:
      "Foundations, APEX 1, APEX 2, and APEX FLEX. Failure-driven Megaformer Pilates designed to work your slow-twitch muscle fibers.",
  }),
  deepSpace: pageMetaSchema.parse({
    path: "/deep-space-pilates/",
    title: "Deep Space Contemporary Pilates | APEX Gainesville",
    description:
      "Breath-to-movement contemporary Pilates. Mobility, fluidity, and challenge without muscular failure.",
  }),
  ourStudio: pageMetaSchema.parse({
    path: "/our-studio/",
    title: "Our Studios | APEX Gainesville",
    description:
      "Two Gainesville locations, NW and SW, with Megaformer machines, spa-like locker rooms, and ample parking.",
  }),
  locations: pageMetaSchema.parse({
    path: "/locations/",
    title: "Which Location? | APEX Gainesville",
    description: "Choose Northwest or Southwest Gainesville — both book on the same schedule.",
  }),
  ourTeam: pageMetaSchema.parse({
    path: "/our-team/",
    title: "Our Team | APEX Gainesville",
    description:
      "Meet the owners and directors behind APEX Gainesville — founded by Rae Jarboe in 2019.",
  }),
  yourFirstClass: pageMetaSchema.parse({
    path: "/your-first-class/",
    title: "Your First Class | APEX Gainesville",
    description:
      "New to APEX? Pro tips, what to bring, grip socks, and everything to know before you walk in.",
  }),
  theMachine: pageMetaSchema.parse({
    path: "/the-machine/",
    title: "The Machine | APEX Gainesville",
    description:
      "Meet the Megaformer — 2 platforms, 1 gliding carriage, and 0 to 180 pounds of spring resistance.",
  }),
  pricing: pageMetaSchema.parse({
    path: "/pricing/",
    title: "Pricing & Memberships | APEX Gainesville",
    description:
      "Intro offers, autopay memberships, class packs, and Infinity memberships covering both APEX and yoga pod.",
  }),
  schedule: pageMetaSchema.parse({
    path: "/schedule/",
    title: "Schedule | APEX Gainesville",
    description:
      "Book an APEX class at Northwest or Southwest Gainesville. One schedule for both studios.",
  }),
  training: pageMetaSchema.parse({
    path: "/training/",
    title: "Teacher Training | APEX Gainesville",
    description:
      "Learn to teach APEX Foundations, 1, 2, and FLEX. Fall 2026 training — contact gnv.leadership@yogapod.com.",
  }),
  infoSessions: pageMetaSchema.parse({
    path: "/info-sessions/",
    title: "Info Sessions | APEX Gainesville",
    description:
      "Fall Teacher Training Info Sessions — Sept 27, Oct 1, 2, 3, 10, 17. Sign up on the mailing list.",
  }),
  faq: pageMetaSchema.parse({
    path: "/faq/",
    title: "FAQ | APEX Gainesville",
    description:
      "Gainesville and Jax Beach policies — booking, waitlists, late cancel, no show, memberships, and more.",
  }),
  careers: pageMetaSchema.parse({
    path: "/careers/",
    title: "Careers | APEX Gainesville",
    description:
      "Membership consultant and teacher applications. We hire from within our student community.",
  }),
  inclusivity: pageMetaSchema.parse({
    path: "/inclusivity/",
    title: "Inclusivity | APEX Gainesville",
    description:
      "APEX is a space of safety and acceptance. Our commitment to inclusivity, unity and a safe space for every student and every member of staff.",
  }),
  privacyPolicy: pageMetaSchema.parse({
    path: "/privacy-policy/",
    title: "Privacy Policy | APEX Gainesville",
    description: "How APEX Gainesville collects, uses and protects your personal information.",
  }),
  accountManagement: pageMetaSchema.parse({
    path: "/account-management/",
    title: "Account Management | APEX Gainesville",
    description:
      "Upgrade, freeze, downgrade, cancel, or send feedback. Every request is answered by a member of our team.",
  }),
  cancel: pageMetaSchema.parse({
    path: "/cancel/",
    title: "Cancel My Membership | APEX Gainesville",
    description: "Request to cancel your APEX Gainesville membership. Memberships require 30 days notice.",
  }),
  freeze: pageMetaSchema.parse({
    path: "/freeze/",
    title: "Freeze My Membership | APEX Gainesville",
    description:
      "Pause your APEX Gainesville membership while you are away and keep your rate when you return.",
  }),
  upgrade: pageMetaSchema.parse({
    path: "/upgrade/",
    title: "Upgrade My Membership | APEX Gainesville",
    description: "Move up to Unlimited, Annual or Infinity at APEX Gainesville.",
  }),
  downgrade: pageMetaSchema.parse({
    path: "/downgrade/",
    title: "Downgrade My Membership | APEX Gainesville",
    description: "Step down to an APEX Gainesville membership that fits your week.",
  }),
  accountThanks: pageMetaSchema.parse({
    path: "/account-management/thanks/",
    title: "Request Received | APEX Gainesville",
    description: "We received your membership request and will reply within 4 business days.",
  }),
  help: pageMetaSchema.parse({
    path: "/help/",
    title: "Account Help | APEX Gainesville",
    description: "Need help, have a question, or have feedback for APEX Gainesville? Send us a note.",
  }),
  helpThanks: pageMetaSchema.parse({
    path: "/help/thanks/",
    title: "We got your note | APEX Gainesville",
    description: "We received your note and a member of our team will write you back.",
  }),
  subscribeThanks: pageMetaSchema.parse({
    path: "/subscribe/thanks/",
    title: "You're on the list | APEX Gainesville",
    description: "Thanks for joining the APEX Gainesville mailing list.",
  }),
  notFound: pageMetaSchema.parse({
    path: "/404.html",
    title: "Page not found | APEX Gainesville",
    description: "That page does not exist. Find a class, our schedule, or our studios instead.",
  }),
};

export type PageKey = keyof typeof pages;
