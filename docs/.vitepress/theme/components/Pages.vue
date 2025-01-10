<template>
    <div class="pager">
      <a :class="['VPLink', 'link', 'pager-link', direction]" :href="link">
        <span class="desc">{{ desc }}</span>
        <span class="title">{{ title }}</span>
      </a>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    direction: {
      type: String,
      required: true,
      validator: value => ['next', 'prev'].includes(value)
    },
    link: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .pager {
    display: block;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    padding: 11px 16px 13px;
    width: 100%;
    &:hover {
        border-color: var(--vp-c-brand-1);
    }
  }
  
  .pager-link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: var(--vp-c-text);
  }
  
  .pager-link.next {
    align-items: flex-end;
  }
  
  .pager-link.prev {
    align-items: flex-start;
  }
  
  .desc {
    font-size: 12px;
    color: var(--vp-c-text-2);
  }
  
  .title {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--vp-c-brand-1);
  }
  </style>