import { defineConfig } from 'vitepress';
import footnote from 'markdown-it-footnote';
import taskLists from 'markdown-it-task-lists';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BEComTweaks Docs",
  description: "Docs for Bedrock Edition Community Tweaks",
  base: '/docs/',
  head: [['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/BEComTweaks/becomtweaks.github.io/refs/heads/main/icon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://becomtweaks.github.io' },
      { text: 'to-do', link: 'to-do'}
    ],

    sidebar: [
      {
        text: 'Scripts',
        items: [
          { text: 'Python Files', link: 'scripts/py-files.md' },
          { text: 'JS Files', link: 'scripts/js-files.md' }
        ]
      },
      {
        text: 'JSONs',
        items: [
          { text: 'Other JSONs', link: 'jsons/other-jsons.md' },
          { text: 'Pack JSONs', link: 'jsons/pack-jsons.md' }
        ]
      },
      {
        text: 'Misc',
        items: [
          { text: "Impossible Packs", link: 'misc/impossible-packs.md' },
          { text: "Frequently Asked Questions", link: 'misc/faq.md' }
        ]
      },
      { text: 'To Do Tracker', link: 'to-do.md' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BEComTweaks' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(footnote);
      md.use(taskLists);
    }
  }
})
