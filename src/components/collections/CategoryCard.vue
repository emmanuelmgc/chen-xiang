
<script setup lang="ts">
import { ref } from 'vue'
import type { CategoryPageModel, ProductType } from '@/data/products'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  category: CategoryPageModel
  categoryId: ProductType
}

const props = defineProps<Props>()

const isHovered = ref(false)

const categoryRoutes: Record<ProductType, string> = {
  incense_stick: './incense-sticks-category.html',
  bakhoor: './bakhoor-category.html',
  mabkhara_accessory: './mabkhara-accessories-category.html',
  gift_set: './gift-sets-category.html',
}
</script>

<template>
  <div
    class="group relative rounded-lg overflow-hidden border border-border/30 bg-card hover:shadow-card transition-all duration-300 h-full flex flex-col"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Image Container -->
    <div class="relative h-48 md:h-56 overflow-hidden bg-muted">
      <img
        :src="category.heroImage"
        :alt="category.title_ar"
        class="w-full h-full object-cover transition-transform duration-500"
        :class="isHovered ? 'scale-105' : 'scale-100'"
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
    </div>

    <!-- Content -->
    <div class="flex-1 p-6 flex flex-col justify-between">
      <!-- Title & Description -->
      <div class="mb-4">
        <h3 class="text-xl font-bold text-foreground mb-2">
          {{ category.title_ar }}
        </h3>
        <p class="text-sm text-muted-foreground line-clamp-2">
          {{ category.heroSubtitle_ar }}
        </p>
      </div>

      <!-- USPs -->
      <div class="mb-6 space-y-2">
        <div
          v-for="usp in category.usps"
          :key="usp.title_ar"
          class="flex items-center gap-2 text-sm text-foreground"
        >
          <SafeIcon :name="usp.iconName" :size="16" class="text-accent flex-shrink-0" />
          <span>{{ usp.title_ar }}</span>
        </div>
      </div>

      <!-- CTA Button -->
      <Button
        class="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
        as="a"
        :href="categoryRoutes[categoryId]"
      >
        استكشف الفئة
        <SafeIcon name="ArrowLeft" :size="18" class="mr-2" />
      </Button>
    </div>
  </div>
</template>
