<template>
    <div class="contributors-wrapper" @mouseover="hover = true" @mouseleave="hover = false">
      <hr class="footnotes-sep">
      <p class="h2">Contributors</p>
      <div class="contributors-section">
        <div
          v-for="(avatar, index) in avatars"
          :key="avatar.username"
          class="contributor-avatar"
          :style="{
            zIndex: avatars.length - index,
            transform: hover ? `translateX(${index * 50}px)` : `translateX(${index * 20}px)`,
          }"
        >
          <a class="avatar-img-hitbox"  :href="avatar.profileUrl" target="_blank" :title="avatar.username">
            <img
              :src="avatar.url"
              :alt="avatar.username"
              class="avatar-img"
            />
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useData } from 'vitepress';
  
  interface Contributor {
    username: string;
    url: string;
    profileUrl: string;
  }
  
  const { frontmatter } = useData();
  const hover = ref(false);
  const contributors = ref<string[]>(frontmatter.value.mentions || []);
  const avatars = ref<Contributor[]>([]);
  
  onMounted(async () => {
    for (const username of contributors.value) {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      avatars.value.push({
        username,
        url: `https://avatars.githubusercontent.com/u/${data.id}?v=1`,
        profileUrl: data.html_url,
      });
    }
  });
  </script>