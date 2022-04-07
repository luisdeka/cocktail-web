<script setup>
import BgHover from '@/components/common/BgHover.vue'
defineProps({
  item: {
    type: Object,
    default: () => {
      return {
        name: '',
        image: '',
        category: '',
        alcohol: '',
      }
    },
  },
})

defineEmits(['view-detail'])
const windowAlert = message => alert(message)
</script>

<template>
  <section class="w-96 shadow-xl rounded">
    <div class="relative overflow-hidden bg-no-repeat bg-cover">
      <img class="rounded-t-2xl" :src="item.image" :alt="item.name" />
      <BgHover @click="() => windowAlert('Aqui tienes tu bebida')" />
    </div>
    <div class="py-3 px-5">
      <span
        class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"
      >
        {{ item.alcohol }}
      </span>
      <p class="mt-2 mb-2">
        <span class="font-bold text-xl">{{ item.name }}</span>
        <span>{{ ` (${item.category})` }}</span>
      </p>
      <div
        v-for="(ingredient, index) in item.ingredients"
        :key="index"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        {{ ingredient.name }}
      </div>
    </div>
  </section>
</template>
