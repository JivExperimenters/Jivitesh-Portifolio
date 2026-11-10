import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Jivitesh | Product Design Portfolio",
  description:
    "My work in AI product interaction, mobile UX, creative tools, and interactive storytelling.",
  base: "/Jivitesh-Portifolio/",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Career research", link: "/research/career" },
      { text: "Selected work", link: "/work" },
      {
        text: "GitHub",
        link: "https://github.com/JivExperimenters/Jivitesh-Portifolio",
      },
    ],
    sidebar: {
      "/research/": [
        {
          text: "Career research",
          items: [
            { text: "Question and role comparison", link: "/research/career" },
          ],
        },
      ],
      "/": [
        {
          text: "Portfolio",
          items: [
            { text: "Selected work", link: "/work" },
            { text: "Career research", link: "/research/career" },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/JivExperimenters/Jivitesh-Portifolio",
      },
    ],
    footer: {
      message: "Research and project claims are labeled as observed or planned.",
      copyright: "© 2026 Jivitesh Duddu",
    },
  },
});
