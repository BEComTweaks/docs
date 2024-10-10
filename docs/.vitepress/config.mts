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
      { text: 'Getting Started',
        items: [
          { text: 'Setting Up', link: 'getting-started/setting-up' }
          // { text: 'New Pack', link: 'getting-started/new-pack' }
          // { text: 'New Category', link: 'getting-started/new-category' }
        ]
      },
      {
        text: 'Scripts',
        items: [
          { text: 'Python Files', link: 'scripts/py-files' }
          // { text: 'JS Files', link: 'scripts/js-files' }
        ]
      },
      {
        text: 'JSONs',
        items: [
          { text: 'Other JSONs', link: 'jsons/other-jsons' },
          { text: 'Pack JSONs', link: 'jsons/pack-jsons' }
        ]
      },
      {
        text: 'Misc',
        items: [
          { text: "Impossible Packs", link: 'misc/impossible-packs' },
          { text: "Frequently Asked Questions", link: 'misc/faq' }
        ]
      },
      { text: 'To Do Tracker', link: 'to-do' }
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
