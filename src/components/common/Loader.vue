<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div v-if="loading" class="flex flex-col items-center justify-center">
    <span
      class="m-2 animate-spin border-grey border-b-gray-700 rounded-full border-4 h-12 w-12"
    ></span>
    <p>{{ t('component.loader.loading') }}</p>
  </div>
</template>
