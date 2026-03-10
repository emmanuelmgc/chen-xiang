<script setup lang="ts">
import { provide } from 'vue'

interface Props {
  modelValue?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

provide('sheet-open', props.modelValue)
provide('update-sheet-open', (value: boolean) => emit('update:modelValue', value))
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="modelValue" class="fixed inset-0 z-50 bg-black/50" @click="emit('update:modelValue', false)">
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>