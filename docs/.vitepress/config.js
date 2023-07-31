import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Okfanger",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {text: "关于我", link: "/aboutme"},
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/okfanger' },
    ],

    footer: {
      copyright: '<div style="width:300px;margin:0 auto; padding:0;"><a href="https://beian.miit.gov.cn/">蒙ICP备2021005214号-1</a>' +
          '<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=15062102000188" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="http://src.akfang.cn/beian.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">蒙公网安备 15062102000188号</p></a>\n' +
          '</div>',
    }
  }
})
