<script setup>
import { ref } from 'vue'
import { isEmpty } from '@/utils/common'
import { cleanAttrs } from '@/utils/components'
defineProps({
  modelValue: { type: String, default: '' },
  clearable: Boolean,
  innerClass: { type: String, default: () => {} },
})
defineEmits(['update:modelValue'])
const isActive = ref(false)
</script>

<template>
  <div
    class="relative mx-auto text-gray-600 border-gray-300 bg-white rounded border border-transparent shadow outline-none"
    :class="{ 'ring-blue-500 shadow-blue-500 ring-1': isActive }"
  >
    <input
      ref="input"
      class="h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
      type="text"
      name="search"
      v-bind="cleanAttrs(Object.assign({}, $attrs))"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="isActive = true"
      @blur="isActive = false"
    />
    <button
      v-if="!isEmpty(modelValue)"
      type="submit"
      class="absolute right-0 top-0 mt-2 mr-12"
      @click="
        () => {
          $emit('update:modelValue', '')
          $nextTick(() => $refs.input.focus())
        }
      "
    >
      <img src="@/assets/svg/close-circle.svg" />
    </button>
    <button type="submit" class="absolute right-0 top-0 mt-2 mr-4">
      <img src="@/assets/svg/magnify.svg" />
    </button>
  </div>
</template>
