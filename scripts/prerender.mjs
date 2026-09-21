import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const pages = [
  { file: "dist/index.html", mod: "/src/pages/HomePage.tsx", exp: "HomePage" },
  { file: "dist/the-workout/index.html", mod: "/src/pages/TheWorkoutPage.tsx", exp: "TheWorkoutPage" },
  { file: "dist/deep-space-pilates/index.html", mod: "/src/pages/DeepSpacePage.tsx", exp: "DeepSpacePage" },
  { file: "dist/our-studio/index.html", mod: "/src/pages/OurStudioPage.tsx", exp: "OurStudioPage" },
  { file: "dist/locations/index.html", mod: "/src/pages/LocationsPage.tsx", exp: "LocationsPage" },
  { file: "dist/our-team/index.html", mod: "/src/pages/OurTeamPage.tsx", exp: "OurTeamPage" },
  { file: "dist/your-first-class/index.html", mod: "/src/pages/YourFirstClassPage.tsx", exp: "YourFirstClassPage" },
  { file: "dist/the-machine/index.html", mod: "/src/pages/TheMachinePage.tsx", exp: "TheMachinePage" },
  { file: "dist/pricing/index.html", mod: "/src/pages/PricingPage.tsx", exp: "PricingPage" },
  { file: "dist/schedule/index.html", mod: "/src/pages/SchedulePage.tsx", exp: "SchedulePage" },
  { file: "dist/training/index.html", mod: "/src/pages/TrainingPage.tsx", exp: "TrainingPage" },
  { file: "dist/info-sessions/index.html", mod: "/src/pages/InfoSessionsPage.tsx", exp: "InfoSessionsPage" },
  { file: "dist/faq/index.html", mod: "/src/pages/FaqPage.tsx", exp: "FaqPage" },
  { file: "dist/careers/index.html", mod: "/src/pages/CareersPage.tsx", exp: "CareersPage" },
  { file: "dist/inclusivity/index.html", mod: "/src/pages/InclusivityPage.tsx", exp: "InclusivityPage" },
  { file: "dist/privacy-policy/index.html", mod: "/src/pages/PrivacyPolicyPage.tsx", exp: "PrivacyPolicyPage" },
  { file: "dist/account-management/index.html", mod: "/src/pages/AccountManagementPage.tsx", exp: "AccountManagementPage" },
  { file: "dist/account-management/thanks/index.html", mod: "/src/pages/MembershipThanksPage.tsx", exp: "MembershipThanksPage" },
  { file: "dist/cancel/index.html", mod: "/src/pages/CancelPage.tsx", exp: "CancelPage" },
  { file: "dist/freeze/index.html", mod: "/src/pages/FreezePage.tsx", exp: "FreezePage" },
  { file: "dist/upgrade/index.html", mod: "/src/pages/UpgradePage.tsx", exp: "UpgradePage" },
  { file: "dist/downgrade/index.html", mod: "/src/pages/DowngradePage.tsx", exp: "DowngradePage" },
  { file: "dist/help/index.html", mod: "/src/pages/HelpPage.tsx", exp: "HelpPage" },
  { file: "dist/help/thanks/index.html", mod: "/src/pages/HelpThanksPage.tsx", exp: "HelpThanksPage" },
  { file: "dist/subscribe/thanks/index.html", mod: "/src/pages/SubscribeThanksPage.tsx", exp: "SubscribeThanksPage" },
  { file: "dist/404.html", mod: "/src/pages/NotFoundPage.tsx", exp: "NotFoundPage" },
];

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  ssr: {
    external: ["react", "react-dom", "react-dom/server", "@tanstack/react-query"],
  },
});

try {
  const { QueryProvider } = await vite.ssrLoadModule("/src/lib/QueryProvider.tsx");

  for (const page of pages) {
    const mod = await vite.ssrLoadModule(page.mod);
    const html = renderToString(createElement(QueryProvider, null, createElement(mod[page.exp])));
    const file = path.join(root, page.file);
    const current = readFileSync(file, "utf8");
    if (!current.includes('<div id="root"></div>')) {
      throw new Error(`empty root missing in ${page.file}`);
    }
    writeFileSync(file, current.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
    console.log("prerender", page.file);
  }
} finally {
  await vite.close();
}
