<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <nav class="sticky top-0">
    <ul class="flex">
      <li class="flex items-center px-5">
        <router-link v-slot="{ navigate }" custom to="home">
          <img
            class="h-10"
            src="@/assets/svg/glass-cocktail.svg"
            :alt="t('header.nav.home')"
            @click="navigate"
          />
        </router-link>
      </li>
      <li class="pt-4 px-4">
        <router-link
          class="h-10 inline-block rounded text-black min-w-[10rem] text-center text-2xl hover:border-b-2 hover:border-blue-700"
          to="/bar"
          active-class="border-b-2 border-blue-500"
        >
          {{ t('header.nav.bar') }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
