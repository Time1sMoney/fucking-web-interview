import { defineConfig } from "vitepress";
import { La51Plugin } from "vitepress-plugin-51la";
import llmstxt from "vitepress-plugin-llms";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fuck Interview",
  description: "前端面试八股文笔记",
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    ["meta", { name: "author", content: "Time1sMoney" }],
  ],
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "", link: "/" },
      {
        text: "基础",
        items: [
          { text: "HTML", link: "/notes/HTML" },
          { text: "CSS", link: "/notes/CSS" },
          { text: "JavaScript", link: "/notes/Javascript" },
          { text: "TypeScript", link: "/notes/Typescript" },
          { text: "NodeJS", link: "/notes/NodeJS" },
          { text: "React", link: "/notes/React" },
          { text: "Vue", link: "/notes/Vue" },
          { text: "工程化", link: "/notes/工程化" },
          { text: "计算机网络", link: "/notes/计算机网络" },
          { text: "浏览器", link: "/notes/浏览器相关" },
          { text: "Git", link: "/notes/Git" },
        ],
      },
      {
        text: "进阶",
        items: [
          { text: "数据结构和算法", link: "/notes/数据结构和算法" },
          { text: "设计模式", link: "/notes/设计模式" },
          {
            text: "场景技巧一",
            link: "/notes/场景技巧一",
          },
          {
            text: "场景技巧二",
            link: "/notes/场景技巧二",
          },
        ],
      },
      {
        text: "JS代码手写",
        link: "/notes/JS代码手写",
      },
      {
        text: "最佳实践",
        items: [
          {
            text: "React最佳实践",
            link: "/notes/React最佳实践",
          },
        ],
      },
      {
        text: "面经",
        items: [
          { text: "2024.3.22", link: "/interviews/2024.3.22" },
          { text: "2024.3.29", link: "/interviews/2024.3.29" },
        ],
      },
      { text: "开源仓库", link: "/opensource-repos/" },
      {
        text: "Code",
        link: "https://github.com/Time1sMoney/fuck-interview/tree/master/code",
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Time1sMoney/fuck-interview",
      },
      {
        icon: "bilibili",
        link: "https://space.bilibili.com/164577534",
      },
    ],
    footer: {
      copyright: "Made with ❤️ by Time1sMoney",
    },
    search: {
      provider: "local",
    },
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  srcDir: "src",
  lastUpdated: true,
  vite: {
    plugins: [
      llmstxt(),
      La51Plugin({
        id: "3MDxgRUArdusBKBq",
        ck: "3MDxgRUArdusBKBq",
      }),
    ],
    server: {
      open: false,
    },
  },
  sitemap: {
    hostname: "https://fuck-interview.vercel.app/",
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
});
