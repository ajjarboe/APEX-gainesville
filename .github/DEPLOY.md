# Deploy APEX Gainesville

Site: **apexgainesville.com**. First ship is always a **Netlify preview**. Do not point DNS at Netlify until someone asks.

## Preview first

1. Push the branch (or connect the repo in Netlify) and open the deploy preview URL.
2. Click through home, pricing, schedule, and one membership form.
3. Confirm the schedule iframe loads and a checkout button opens Arketa.
4. Submit a test cancel/freeze/help with a fake name and confirm it arrives in Netlify Forms.
5. Confirm the footer mailing list posts and lands on `/subscribe/thanks/`.

## Go live (only when asked)

1. Promote the preview deploy in Netlify.
2. Point apexgainesville.com DNS at Netlify **only when someone asks**. Until then, Squarespace stays live.
3. After DNS moves: re-check forms, schedule, and pricing checkout once on production.

## Forms

`yarn forms` regenerates `public/__forms.html`. `yarn build` runs `forms-check` and fails if a rendered field was never registered. Never hand-edit `__forms.html`.

## Checkout

Every Arketa id lives in `src/content/checkout.ts`. There are no short-link redirects yet (`shortLinks` is empty on purpose).
