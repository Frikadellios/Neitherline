import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import react from "@astrojs/react";
import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare";
import alpinejs from "@astrojs/alpinejs";
import prefetch from "@astrojs/prefetch";


// https://astro.build/config
export default defineConfig({
  site: 'https://devopsick.com',
  integrations: [mdx(), tailwind(), compress(), sitemap(), image(), react(), preact(), alpinejs(), prefetch()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});