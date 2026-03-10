
<script setup lang="ts">
import { SidebarProvider, Sidebar, SidebarContent, SidebarInset } from '@/components/ui/sidebar'

interface Props {
  headerHeight?: string
}

withDefaults(defineProps<Props>(), {
  headerHeight: '64px'
})
</script>

<template>
  <SidebarProvider>
    <Sidebar variant="inset" class="top-[--header-height] h-[calc(100vh-var(--header-height))]" :style="{ '--header-height': headerHeight }">
      <SidebarContent>
        <slot name="sidebar" />
      </SidebarContent>
    </Sidebar>
    <SidebarInset class="flex flex-col min-h-[calc(100vh-var(--header-height))]" :style="{ '--header-height': headerHeight }">
      <slot />
    </SidebarInset>
  </SidebarProvider>
</template>
