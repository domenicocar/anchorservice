import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const site = process.env.PUBLIC_SITE_URL || "https://anchorservice.it";

export default defineConfig({
  site,
  trailingSlash: "never",
  integrations: [sitemap({ filter: (page) => !page.endsWith("/esperienze") })],
  redirects: {
    "/servizi/rigging": "/servizi/rigging-standing-rigging",
    "/servizi/manutenzione-barche-a-vela": "/servizi/manutenzione-yacht",
    "/servizi/cime-drizze-coperta": "/servizi/rigging-standing-rigging",
    "/servizi/assistenza-vele": "/servizi/veleria-assistenza-vele",
    "/servizi/yacht-delivery-trasferimenti":
      "/servizi/trasferimenti-trasporto-imbarcazioni",
    "/servizi/consulenza-tecnica": "/servizi/gestione-perizie-intermediazione",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
