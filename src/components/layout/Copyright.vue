<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div>
    {{ t('global.copyright', [t('global.company.name')]) }}
  </div>
</template>
