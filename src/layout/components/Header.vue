<script setup>
import SearchHeader from '@/components/layout/SearchHeader.vue'
import NavHeader from '@/components/layout/NavHeader.vue'
</script>

<template>
  <header class="app-header">
    <NavHeader />
    <SearchHeader />
  </header>
</template>

<style lang="postcss" scoped>
.app-header {
  height: var(--header-height);
}
</style>
