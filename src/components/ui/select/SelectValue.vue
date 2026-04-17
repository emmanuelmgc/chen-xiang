<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import { SelectValue as SelectValuePrimitive } from "reka-ui"

interface Props extends PrimitiveProps {}

const props = withDefaults(defineProps<Props>(), {
  as: "span",
})
</script>

<template>
  <SelectValuePrimitive v-bind="props">
    <slot />
  </SelectValuePrimitive>
</template>