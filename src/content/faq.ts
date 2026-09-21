import { faqSectionSchema } from "@/content/schema";
import { cancelForm, freezeForm } from "@/content/membership-forms";

export const faqSections = [
  faqSectionSchema.parse({
    title: "Gainesville — before you come in",
    items: [
      {
        question: "Do you offer refunds for classes?",
        answer: ["No, all purchases are final for drop ins, class packs, and memberships."],
      },
      {
        question: "What do I need to bring for class?",
        answer: [
          "Athletic clothing, grip socks, a water bottle, a hand towel, and your app scan tag.",
        ],
      },
      {
        question: "How do I check in for class?",
        answer: [
          "Open the RAD App, tap the icon in the top right corner of your home screen, and scan the barcode at the front desk. Hang tight while we review your account and get to know your name.",
        ],
      },
      {
        question: "Do you have showers?",
        answer: [
          "Yes. Our full service locker rooms have showers including shampoo, conditioner, and body wash. We have brushes, hair dryers, Q-tips and more. Bring your own towel or rent one at the front desk.",
        ],
      },
      {
        question: "What if I left something at the studio?",
        answer: [
          "Please call or come in as soon as possible to reclaim your items. Our lost and found is located in the hallway next to the locker rooms. We cannot be responsible for lost items.",
        ],
      },
      {
        question: "Where are yoga pod classes shown in the app?",
        answer: [
          "APEX, yoga pod and RITUAL all live in one app now — the RAD App. Open it and switch between studios without logging out.",
        ],
      },
      {
        question: "Policies for children and minors (Gainesville)",
        answer: [
          "A parent or guardian must be present at the first visit for anyone 14 and under, and must fill out the liability waiver for any student under 18.",
          "Children attending class must possess the maturity and bodily awareness required to participate safely without disruption.",
          "Minors **16 and up** may participate in any class style. APEX, FIT, FLOW 2, and Sweat Heat & Beatz: **13+** (music may contain mature content). FLOW 1 and YIN: **11+**, with a parent or guardian in the room for ages 11–13.",
        ],
      },
      {
        question: "Do I have to start with Foundations?",
        answer: [
          "No. It is highly encouraged, especially if you have never taken machine-based fitness before. If you cannot fit a Foundations into your schedule, we recommend a FLEX or an APEX 1 to start.",
        ],
      },
      {
        question: "Can I practice if I am pregnant?",
        answer: [
          "A call to your OBGYN is the first step. Once you are cleared by your doctor, you are welcome to practice based on your health and birth plan.",
        ],
      },
      {
        question: "What class style is right for me?",
        answer: [
          "Check out a full description of our classes on [The Workout](/the-workout/) and [Deep Space](/deep-space-pilates/).",
        ],
      },
    ],
  }),
  faqSectionSchema.parse({
    title: "Gainesville — booking and membership",
    items: [
      {
        question: "Why am I being prompted to enter my credit card?",
        answer: [
          "Billing information is required on file at both studio locations to book any class, due to our late cancel and no show penalties.",
        ],
      },
      {
        question: "Late arrival policies (Gainesville)",
        answer: [
          "At class start time, if not all pre-registered students are present, waitlisted students may enter in order of the waitlist roster.",
          "If you are running late, please call the studio to save your spot. **Five minutes** past class start time, no one will be permitted to enter, even if you have called ahead.",
          "Pre-registered students may enter class up to 5 minutes late if machine space is still available, but are not guaranteed a spot after start time.",
        ],
      },
      {
        question: "Late cancel policies",
        answer: [
          "If you are pre-registered for class and you do not cancel at least 8 hours prior to class start time, you will be charged a **$15 late cancel fee**. There is a one time forgiveness.",
          "Penalty fees apply to free classes.",
        ],
      },
      {
        question: "No show policies",
        answer: [
          "If you are pre-registered for a class and you do not come to class, you will be charged a **$30 no show fee**. There is a one time forgiveness.",
          "Penalty fees apply to free classes.",
        ],
      },
      {
        question: "Why do you have late cancel and no show penalties?",
        answer: [
          "**Cultivate discipline** is echoed in showing up for classes you have registered for. **Create community** is represented by our desire to open as many spaces as possible. **Do the right thing** is our commitment to you.",
          "If you have an emergent need, text or call (352) 554-4585. There is a one time forgiveness on both fees.",
        ],
      },
      {
        question: "How does the waitlist work?",
        answer: [
          "Waitlisted students should plan to attend. Outside the 8 hour window, you will be added in order and sent a confirmation email. Inside 8 hours, open spots are first come first serve via a text from the app.",
          "When added from the waitlist, late cancel and no show policies apply — including if you register for multiple waitlists.",
        ],
      },
      {
        question: "I already used my allotted classes for the month. What do I do?",
        answer: [
          `Fill out an [upgrade request](/upgrade/), then call (352) 554-4585. We will get you set up for a membership with more monthly access.`,
        ],
      },
      {
        question: "Do unused classes roll over?",
        answer: ["No. Our memberships renew monthly — use them or lose them."],
      },
      {
        question: "How do I cancel my membership?",
        answer: [
          "All membership cancelations require **30 days notice**. Monthly and annual contracts both require 30 days notice. There are no early cancellations or refunds for annual contracts, even if you are moving.",
          `[Submit a cancellation request](${cancelForm.path}) and a member of our team will confirm it with you.`,
        ],
      },
      {
        question: "How do I freeze my membership?",
        answer: [
          "While you are frozen, your membership dues continue. Upon reactivation, your membership dues will be $0 for the duration of your freeze.",
          `[Submit a freeze request](${freezeForm.path}) and a member of our team will confirm the dates with you.`,
        ],
      },
    ],
  }),
  faqSectionSchema.parse({
    title: "Jax Beach",
    items: [
      {
        question: "What do I need to bring (Jax Beach)?",
        answer: ["Athletic clothing, grip socks, a water bottle, and a hand towel."],
      },
      {
        question: "How do I check in (Jax Beach)?",
        answer: [
          "Come into the lobby and introduce yourself. We will get you checked in. If we have new students receiving a machine tour, we may have the iPad turned for self check-in.",
        ],
      },
      {
        question: "Policies for children and minors (Jax Beach)",
        answer: [
          "A parent or guardian must be present at the first visit for anyone 14 and under, and must fill out the liability waiver for any student under 18.",
          "Minimum age to participate in APEX classes is **13**. Exceptions can be made for private classes.",
        ],
      },
      {
        question: "Late arrival (Jax Beach)",
        answer: [
          "Please arrive 10 minutes before class. We apologize that we are not able to accommodate late arrivals.",
        ],
      },
      {
        question: "Late cancel and no show (Jax Beach)",
        answer: [
          "Late cancel (less than 8 hours): **$15**. No show: **$30**. One time forgiveness on both. Penalty fees apply to free classes.",
        ],
      },
      {
        question: "Emergencies and upgrades (Jax Beach)",
        answer: [
          "For an emergent cancel need, text (904) 595-7273. We will do our best to get back within 2 business days.",
          "To upgrade, fill out a request at [apexjaxbeach.com/upgrade](https://www.apexjaxbeach.com/upgrade), then text (904) 595-7273.",
        ],
      },
      {
        question: "Cancel or freeze (Jax Beach)",
        answer: [
          "Cancelations require **30 days notice**. Freeze: dues continue while frozen; upon reactivation dues are $0 for the duration of the freeze. Submit requests through the Jax Beach site forms.",
        ],
      },
    ],
  }),
];
