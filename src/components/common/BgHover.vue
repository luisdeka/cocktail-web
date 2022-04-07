<script setup>
defineEmits(['click'])
</script>

<template>
  <div
    class="cursor-pointer grid place-items-center absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-40 transition duration-300 ease-in-out bg-white"
    @click="$emit('click')"
  >
    <slot>
      <img src="@/assets/svg/plus.svg" width="50" />
    </slot>
  </div>
</template>
