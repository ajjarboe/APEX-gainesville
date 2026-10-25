import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

/** Sets light or dark on <html> before first paint so dark-mode visitors never see a white flash.
 *  The storage key must match src/lib/color-mode.ts. */
function colorModeScript(): Plugin {
  const script = `(function(){try{var t=localStorage.getItem("apex-theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}})();`;
  return {
    name: "apex-color-mode",
    transformIndexHtml: () => [{ tag: "script", children: script, injectTo: "head-prepend" }],
  };
}

export default defineConfig({
  appType: "mpa",
  plugins: [colorModeScript(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(root, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: path.resolve(root, "index.html"),
        theWorkout: path.resolve(root, "the-workout/index.html"),
        deepSpace: path.resolve(root, "deep-space-pilates/index.html"),
        ourStudio: path.resolve(root, "our-studio/index.html"),
        locations: path.resolve(root, "locations/index.html"),
        ourTeam: path.resolve(root, "our-team/index.html"),
        yourFirstClass: path.resolve(root, "your-first-class/index.html"),
        theMachine: path.resolve(root, "the-machine/index.html"),
        pricing: path.resolve(root, "pricing/index.html"),
        schedule: path.resolve(root, "schedule/index.html"),
        training: path.resolve(root, "training/index.html"),
        infoSessions: path.resolve(root, "info-sessions/index.html"),
        faq: path.resolve(root, "faq/index.html"),
        careers: path.resolve(root, "careers/index.html"),
        inclusivity: path.resolve(root, "inclusivity/index.html"),
        privacyPolicy: path.resolve(root, "privacy-policy/index.html"),
        accountManagement: path.resolve(root, "account-management/index.html"),
        membershipThanks: path.resolve(root, "account-management/thanks/index.html"),
        cancel: path.resolve(root, "cancel/index.html"),
        freeze: path.resolve(root, "freeze/index.html"),
        upgrade: path.resolve(root, "upgrade/index.html"),
        downgrade: path.resolve(root, "downgrade/index.html"),
        help: path.resolve(root, "help/index.html"),
        helpThanks: path.resolve(root, "help/thanks/index.html"),
        subscribeThanks: path.resolve(root, "subscribe/thanks/index.html"),
        notFound: path.resolve(root, "404.html"),
      },
    },
  },
});
