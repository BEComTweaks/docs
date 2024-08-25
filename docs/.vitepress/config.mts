import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BEComTweaks Docs",
  description: "Docs for BEComTweaks, a fork of Bedrock Tweaks",
  base: '/docs/',
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
          { text: 'To Do Tracker', link: 'misc/to-do.md' },
          { text: "Frequently Asked Questions", link: 'misc/faq.md' },
          { text: "Impossible Packs", link: 'misc/impossible-packs.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BEComTweaks' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(footnote);
    }
  }
})
