<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import { SelectRoot as SelectPrimitive } from 'reka-ui' 

interface Props extends PrimitiveProps {}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
})
</script>

<template>
  <SelectPrimitive v-bind="props">
    <slot />
  </SelectPrimitive>
</template>