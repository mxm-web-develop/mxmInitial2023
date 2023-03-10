import { defineConfig } from "vitepress";
export default defineConfig({
  title: "MxM_Document",
  titleTemplate: "Mxm 学习文档",
  lang: "zh-CN",
  lastUpdated: true,
  base: "/",
  description: "Mxm 学习文档",
  // outDir: '../documentWeb',
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "MxM | Leaning Notes",
    nav: [
      { text: "前端", link: "/construction/index.md" }
    ],
    sidebar: {
      "/frontend/": [
        {
          text: "Vue",
          collapsed: true,
          items: [
            { text: "Vue中的包装React组件", link: "/frontend/Vue/index.md" },
          ],
        }
      ],

    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present MxM zhf",
    },
  },
});
