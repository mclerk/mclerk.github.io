import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Michael Clerk | Entrepreneur",
  description:
    "My Personal Site. Michael Clerk, Jamaican Entrepreneur, doing business globally",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Michael Clerk",
    logo: "/mclerk.png",

    nav: [
      { text: "Home", link: "/" },
      { text: "About-Me", link: "/about" },
    ],

    socialLinks: [
      {
        icon: "bluesky",
        link: "https://mclerk.bsky.social",
        ariaLabel: "Bluesky",
      },
      { icon: "x", link: "https://x.com/_mclerk", ariaLabel: "X (Twitter)" },
      {
        icon: "codeberg",
        link: "https://codeberg.org/mclerk",
        ariaLabel: "Codeberg",
      },
      {
        icon: "github",
        link: "https://github.com/mclerk",
        ariaLabel: "GitHub",
      },
      {
        icon: "gitlab",
        link: "https://gitlab.com/mclerk",
        ariaLabel: "GitLab",
      },
      /*
      {
        icon: "huggingface",
        link: "https://huggingface.co/mclerk",
        ariaLabel: "Hugging Face",
      },
      */
    ],

    footer: {
      message:
        'Built with <a href="https://vitepress.dev" target="_blank" rel="noopener noreferrer">Vitepress</a>. Released under the <a href="https://github.com/mclerk/mclerk.github.io/blob/main/LICENSE" target="_blank" rel="license noopener noreferrer">MIT License</a>.',
      copyright:
        'Copyright © 2024-present Michael Clerk<br/><a href="https://keyoxide.org/32316a0a3f1e037d25b0e397a76e8f27d379fb2b" target="_blank" rel="noopener noreferrer">32316a0a3f1e037d25b0e397a76e8f27d379fb2b</a><br/>Content: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="license noopener noreferrer">CC BY 4.0</a>, unless stated otherwise<br/>الله أكبر',
    },
  },

  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
});
