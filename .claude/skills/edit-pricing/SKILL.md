---
name: edit-pricing
description: Change a price, membership, class pack, or Arketa checkout link. Use when they say the $60 is now $70 or there is a new checkout link. They will not say "offering id".
---

# Edit pricing

Change `src/content/checkout.ts` first. Then the matching card copy in `src/content/pricing.ts` if the words changed too.

There are no short ad links yet. If you add one later, put it in `checkout.ts` `shortLinks` and match it in `netlify.toml`. `yarn build` fails if they drift.
