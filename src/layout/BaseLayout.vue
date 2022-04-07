<script setup>
import Header from '@/layout/components/Header.vue'
import Footer from '@/layout/components/Footer.vue'
</script>

<template>
  <Header />
  <main class="min-app-main-height">
    <router-view />
  </main>
  <Footer />
</template>

<style scoped>
.min-app-main-height {
  min-height: var(--main-height);
}
</style>
