// @ts-check
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopics from "starlight-sidebar-topics";
import { defineConfig } from "astro/config";
import { starlightLocales } from "./src/lib/locales.mjs";
import { sidebarTopics } from "./src/lib/sidebar.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.trucklinemp.com",
  integrations: [
    starlight({
      title: {
        en: "TrucklineMP",
        pl: "TrucklineMP",
        de: "TrucklineMP",
        fr: "TrucklineMP",
        ru: "TrucklineMP",
        tr: "TrucklineMP",
        pt: "TrucklineMP",
      },
      defaultLocale: "root",
      locales: starlightLocales,
      logo: {
        src: "./src/assets/truckline_large_no_shadow.svg",
        alt: "TrucklineMP",
        replacesTitle: true,
      },
      favicon: "/truckline_no_shadow.svg",
      customCss: [
        "@fontsource-variable/geist",
        "@fontsource-variable/geist-mono",
        "./src/styles/marathon.css",
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/TrucklineMP/docs",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/trucklinemp",
        },
        { icon: "external", label: "Website", href: "https://trucklinemp.com" },
      ],
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
        Footer: "./src/components/Footer.astro",
        Sidebar: "./src/components/Sidebar.astro",
        Banner: "./src/components/Banner.astro",
      },
      plugins: [
        // Links to untranslated pages are fine: Starlight serves the English page
        // at the localized URL (fallback), e.g. /de/web-docs/account/connections/.
        starlightLinksValidator({ errorOnFallbackPages: false }),
        starlightSidebarTopics(sidebarTopics),
      ],
    }),
  ],
});
