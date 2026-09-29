// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

// Detect build platform: Netlify vs GitHub Pages vs Local
const isNetlify = Boolean(process.env.NETLIFY);
const isGitHubPages = Boolean(process.env.GITHUB_ACTIONS) && !isNetlify;

// https://astro.build/config
export default defineConfig({
  site: "https://nc-nm.github.io",
  base: "/",
  devToolbar: {
    enabled: false,
  },
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["tui-portfolio-dev.tuiportfolio.orb.local", ".orb.local"],
    },
  },
});
