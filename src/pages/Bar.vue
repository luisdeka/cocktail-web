<script setup>
import { reactive, ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { search } from '../api/cocktailAPI'
import SearchInput from '@/components/common/searcher/SearchInput.vue'
import CocktailCard from '@/components/bar/CocktailCard.vue'
import Loader from '@/components/common/Loader.vue'
const { t } = useI18n()

const cocktailsList = reactive([])
const filterText = ref('')
const loading = ref(false)

const doSearch = async text => {
  loading.value = true
  cocktailsList.length = 0
  const data = await search(text)
  loading.value = false
  cocktailsList.push(...data)
}

watchEffect(() => {
  doSearch(filterText.value)
})
</script>

<template>
  <div class="my-8 mx-12">
    <h1 class="text-7xl text-bold text-center">{{ t('page.bar.title') }}</h1>
    <img class="mx-auto py-8" src="@/assets/img/gif/barman.gif" width="700" />
    <h2 class="text-4xl text-bold text-center">{{ t('page.bar.subtitle') }}</h2>
    <SearchInput
      v-model="filterText"
      class="m-6 max-w-[50rem]"
      :placeholder="t('page.bar.searcher.placeholder')"
    />
    <div class="min-h-80 relative mt-4 flex flex-wrap justify-center gap-10">
      <CocktailCard
        v-for="cocktail in cocktailsList"
        :key="cocktail.id"
        :item="cocktail"
      />
      <Loader v-if="loading" :loading="loading" />
      <div
        v-else-if="cocktailsList.length === 0"
        class="text-blue-900 flex items-center text-lg"
      >
        {{ t('page.bar.not-found') }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
