<script setup>
import { ref } from 'vue'
import SearchInput from '../common/searcher/SearchInput.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const value = ref('')
</script>
<template>
  <!-- Not working, need to develop InputItem and ItemList component parts -->
  <SearchInput
    v-model="value"
    class="mt-4 max-w-[50rem]"
    :placeholder="t('header.searcher.placeholder')"
  />
</template>

<style lang="postcss" scoped></style>
