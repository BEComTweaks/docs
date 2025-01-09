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
    editLink: {
      pattern: "https://github.com/BEComTweaks/docs/tree/main/docs/:path",
      text: "Edit this page"
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://becomtweaks.github.io' },
      { text: 'To-Do', link: 'to-do'},
      { text: 'Discord', link: 'https://discord.gg/q5bd3u7h63' }
    ],

    sidebar: [
      { text: 'Getting Started',
        items: [
          { text: 'Setting Up', link: 'getting-started/setting-up' },
          { text: 'Creating a New Pack', link: 'new/new-pack' },
          { text: 'Creating a New Category', link: 'new/new-category' },
          { text: 'Now what?', link: 'getting-started/afterwards' }
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
    },
    lineNumbers: true
  }
})
