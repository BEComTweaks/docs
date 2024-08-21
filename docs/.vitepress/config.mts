import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BEComTweaks Docs",
  description: "Docs for BEComTweaks, a fork of Bedrock Tweaks",
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
          { text: 'Python Files', link: 'py-files.md' },
          { text: 'JS Files', link: 'js-files.md' }
        ]
      },
      {
        text: 'JSONs',
        items: [
          { text: 'Other JSONs', link: 'other-jsons.md' },
          { text: 'Pack JSONs', link: 'pack-jsons.md' }
        ]
      },
      {
        text: 'Misc',
        items: [
          { text: 'To Do Tracker', link: 'to-do.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BEComTweaks' }
    ]
  }
})
