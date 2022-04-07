<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

const goHome = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="h-screen grid grid-cols-1 place-content-center">
    <img src="@/assets/img/404.png" class="m-auto" />
    <div class="flex mx-auto w-full max-w-lg mt-8">
      <button
        class="mx-2 border rounded-md border-black text-black pl-10 pr-12 py-2 text-1xl font-medium"
        type="button"
        @click="router.back"
      >
        <div class="flex">
          <img src="@/assets/svg/arrow-left.svg" />{{
            t('component.button.back')
          }}
        </div>
      </button>
      <span class="grow" />
      <button
        class="mx-2 border rounded-md border-sky-500 text-sky-500 px-12 py-2 text-1xl font-medium hover:bg-sky-100 transition duration-300"
        type="button"
        @click="goHome"
      >
        {{ t('component.button.home') }}
      </button>
    </div>
  </div>
</template>
