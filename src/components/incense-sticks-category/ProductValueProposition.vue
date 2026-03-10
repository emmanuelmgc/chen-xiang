
<script setup lang="ts">
import type { CategoryPageModel } from '@/data/products'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  usps: CategoryPageModel['usps']
  isClient: boolean
}

defineProps<Props>()
</script>

<template>
  <section class="w-full py-12 md:py-16 bg-background border-b border-border/20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(usp, index) in usps"
          :key="usp.title_ar"
          class="flex flex-col items-center text-center gap-4 p-6 rounded-lg border border-border/20 bg-card transition-all duration-500"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          :style="{ transitionDelay: isClient ? `${index * 100}ms` : '0ms' }"
        >
          <!-- Icon -->
          <div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
            <SafeIcon 
              :name="usp.iconName" 
              :size="32" 
              class="text-accent"
            />
          </div>
          
          <!-- Title -->
          <h3 class="text-lg font-semibold text-foreground">
            {{ usp.title_ar }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
