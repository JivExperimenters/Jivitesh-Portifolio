import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Jivitesh | Product Design Portfolio",
  description:
    "AI Product Design & Interactive Web Prototyping portfolio, Career Research, Portfolio Plan, and Readable Résumé.",
  base: "/Jivitesh-Portifolio/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Portfolio Plan", link: "/plan" },
      { text: "Career Research", link: "/research/career" },
      { text: "Selected Work", link: "/work" },
      { text: "Résumé", link: "/resume" },
    ],
    sidebar: [
      {
        text: "Portfolio & Plan",
        items: [
          { text: "Home", link: "/" },
          { text: "Portfolio Plan (Nov 17)", link: "/plan" },
          { text: "Career Research", link: "/research/career" },
          { text: "Selected Work", link: "/work" },
          { text: "Readable Résumé", link: "/resume" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/JivExperimenters/Jivitesh-Portifolio" },
    ],
  },
});
