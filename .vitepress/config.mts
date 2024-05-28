import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "周大福",
  description: "site1",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '解决方案', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '列表',
        items: [
          { text: '详细了解', link: '/markdown-examples' },
          { text: '立即购买', link: '/api-examples' }
        ]
      }
    ],

  }
})
