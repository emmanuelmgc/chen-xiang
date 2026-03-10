
<script setup lang="ts">
import { B2B_USE_CASES } from '@/data/b2b_content'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const useCases = B2B_USE_CASES
</script>

<template>
  <div class="space-y-12">
    <div
      v-for="(useCase, index) in useCases"
      :key="useCase.id"
      class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      :class="index % 2 === 1 ? 'md:flex-row-reverse' : ''"
    >
      <!-- Image -->
      <div
        class="relative h-80 rounded-lg overflow-hidden shadow-card"
        :class="index % 2 === 1 ? 'md:order-2' : 'md:order-1'"
      >
        <img
          :src="useCase.imageUrl"
          :alt="useCase.title_ar"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <!-- Content -->
      <div :class="index % 2 === 1 ? 'md:order-1' : 'md:order-2'">
        <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {{ useCase.title_ar }}
        </h3>
        <p class="text-lg text-muted-foreground leading-relaxed mb-6">
          {{ useCase.description_ar }}
        </p>
        <div class="flex items-center gap-2 text-accent font-medium">
          <span>اكتشف المزيد</span>
          <svg class="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Image hover effect */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}
</style>
