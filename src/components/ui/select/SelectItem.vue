<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import { SelectItem as SelectItemPrimitive } from "reka-ui"
import { cn } from "@/lib/utils"

interface Props extends PrimitiveProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
})
</script>

<template>
  <SelectItemPrimitive
    :class="cn('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', props.class)"
    v-bind="props"
  >
    <slot />
  </SelectItemPrimitive>
</template>