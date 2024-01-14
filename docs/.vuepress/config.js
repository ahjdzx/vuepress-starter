module.exports = {
  title: "Xxx 文档",
  description: "Xxx 最新官方文档翻译",
  base: "/vuepress-starter/",
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "博客",
        items: [{ text: "Github", link: "https://github.com/ahjdzx" }],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "基础学习",
        path: "/handbook/ConditionalTypes",
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" },
        ],
      },
    ],
    subSidebar: "auto",
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
};
