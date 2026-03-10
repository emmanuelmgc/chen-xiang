<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import { SelectTrigger as SelectTriggerPrimitive } from "reka-ui"
import { cn } from "@/lib/utils"

interface Props extends PrimitiveProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
})
</script>

<template>
  <SelectTriggerPrimitive
    :class="cn('flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1', props.class)"
    v-bind="props"
  >
    <slot />
  </SelectTriggerPrimitive>
</template>