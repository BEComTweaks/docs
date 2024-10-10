---
layout: home

title: Who are we?

hero:
  name: Who are we?
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/87571998?v=4',
    name: 'NSPG911',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/NSPC911' },
      { icon: 'twitter', link: 'https://twitter.com/@Nspc9' },
      { icon: 'youtube', link: 'https://youtube.com/@NSPG911' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/78424865?v=4',
    name: 'YzaBeast1',
    title: 'Co-creator',
    links: [
        { icon: 'github', link: 'https://github.com/YzaBeast1' }
    ]
  }
]
</script>
We are **B**edrock **E**dition **Com**munity **Tweaks**, also known as BEComTweaks.

- Take BedrockTweaks as the popular guy in school.
- BEComTweaks is that nerdy guy who wants the same attention.

Started out as a mini-project back in March, it is now a full-time project aimed to challenge Bedrock Tweaks.

---
### What is the difference between BedrockTweaks and BEComTweaks?
1. More packs!
    - BEComTweaks has 500+ resource packs alone that is available right on our site. These did not have to be in VanillaTweaks and are available for more to know about.
2. More updates!
    - BEComTweaks is updated daily!
        - This can be in branches or on the main one, but I assure you, we never lose our streak! <!--If we do, shush-->
3. Behaviour Packs!
    - BEComTweaks have behaviour packs available, though temporarily, while BedrockTweaks brings back its addon page.
    - When BedrockTweaks brings back its addon page soon:tm:, it will be removed due to issues as the backend not specially made for addons
---
### The members: 
<VPTeamMembers size="small" :members="members" />

[<badge type="tip" text="Back to Home"/>](index)