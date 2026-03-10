<script setup lang="ts">
import { inject } from 'vue'

const updateOpen = inject<(value: boolean) => void>('update-sheet-open')
</script>

<template>
  <button @click="updateOpen?.(true)">
    <slot />
  </button>
</template>