import { faqItemSchema } from "@/content/schema";

export const firstClass = {
  hero: {
    title: "NEW STUDENT INTRO OFFER",
    cta: { href: "/pricing/#intro", label: "Try 8 classes for $60" },
    secondary: { href: "/schedule/", label: "See the schedule" },
  },
  tips: {
    title: "PRO TIPS BEFORE YOUR FIRST CLASS",
    // One box of bullets. `sub` adds indented bullets under an item.
    // `emphasis: true` shows that bullet (and its sub-bullets) bold and underlined.
    items: [
      {
        text: "Arrive 10 minutes before class starts for a machine and studio tour.",
        sub: ["If you don't arrive in time, you may be asked to reschedule."],
      },
      { text: "Bring a water bottle." },
      { text: "Grip socks are required. Purchase a pair at the retail boutique if you need them." },
      { text: "Wear form-fitting athletic attire. Tie hair back for safety around springs." },
      { text: "Download the RAD App to pre-register and book your session." },
      { text: "Prepare your mindset for the challenge. We celebrate failure at APEX." },
      { text: "Check in at the front desk so we can learn your name and help you get into class." },
      {
        text: "If you are running late, call or text the studio.",
        sub: ["5 minutes past start time, no one is permitted to enter — even if you called ahead."],
        emphasis: true,
      },
    ] as { text: string; sub?: string[]; emphasis?: boolean }[],
  },
  faq: [
    faqItemSchema.parse({
      question: "What is the machine like?",
      answer: [
        "The pilates-inspired Megaformer has 2 platforms and 1 gliding carriage, spring-loaded from 0 to 180 pounds. Read more on [The Machine](/the-machine/).",
      ],
    }),
    faqItemSchema.parse({
      question: "What is the workout like?",
      answer: [
        "Prepare your mindset for the challenge. Your body will be pushed to its limit. When performed correctly, the workout will bring your muscles to the point of failure. We celebrate failure at APEX.",
      ],
    }),
    faqItemSchema.parse({
      question: "What do I bring?",
      answer: [
        "Bring a water bottle, a hand towel, and grip socks. Grip socks are required — bring your own or purchase them at the front desk.",
      ],
    }),
    faqItemSchema.parse({
      question: "Do you offer rentals?",
      answer: [
        "Rental hand towel $4 / member $3 · Rental shower towel $4 / member $3.",
      ],
    }),
    faqItemSchema.parse({
      question: "When should I arrive?",
      answer: [
        "Arrive 10 minutes before class starts. You'll receive a tour of the machine and the studio. If you don't arrive in time, you may be asked to reschedule.",
      ],
    }),
    faqItemSchema.parse({
      question: "What are the cancelation and no show policies?",
      answer: [
        "Late cancel (less than 8 hours before class): **$15**. No show: **$30**. There is a one time forgiveness on both.",
        "Head over to our [FAQ page](/faq/) for the full policy overview.",
      ],
    }),
    faqItemSchema.parse({
      question: "How does the waitlist work?",
      answer: [
        "Waitlisted students should plan to attend. Outside the 8 hour window you are added in order and emailed. Inside 8 hours, open spots are first come first serve via a text from the app.",
        "When added from the waitlist, late cancel and no show policies apply.",
      ],
    }),
    faqItemSchema.parse({
      question: "Do you have showers?",
      answer: [
        "Yes. Full service locker rooms with showers, shampoo, conditioner, and body wash. Bring your own towel or rent one at the front desk.",
      ],
    }),
    faqItemSchema.parse({
      question: "I want to buy my intro today but can't come until next week. What do I do?",
      answer: [
        "Buy today. The clock does not start on your 2 weeks until after your first visit on that package.",
      ],
    }),
  ],
};
