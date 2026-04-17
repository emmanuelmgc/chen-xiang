<script setup lang="ts">
import { inject } from 'vue'
import { cn } from "@/lib/utils"

const isOpen = inject<boolean>('sheet-open')

interface Props {
  side?: 'left' | 'right' | 'top' | 'bottom'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: 'right'
})
</script>

<template>
  <Transition
    enter-active-class="transition-transform duration-300"
    leave-active-class="transition-transform duration-300"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="isOpen"
      class="fixed z-50 bg-background p-6 shadow-lg"
      :class="cn({
        'top-0 right-0 h-full w-80': side === 'right',
        'top-0 left-0 h-full w-80': side === 'left',
        'bottom-0 left-0 right-0 h-80': side === 'bottom',
        'top-0 left-0 right-0 h-80': side === 'top',
      }, props.class)"
    >
      <slot />
    </div>
  </Transition>
</template>