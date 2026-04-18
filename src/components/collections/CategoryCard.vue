
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { CategoryPageModel, ProductType } from '@/data/products'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

onMounted(() => {
  initLanguage()
})

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

const getTitle = () => {
  return locale.value === 'ar' ? props.category.title_ar : props.category.title_en
}

const getSubtitle = () => {
  return locale.value === 'ar' ? props.category.heroSubtitle_ar : props.category.heroSubtitle_en
}

const getUsp = (usp: typeof props.category.usps[0]) => {
  return locale.value === 'ar' ? usp.title_ar : usp.title_en
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
        :alt="getTitle()"
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
          {{ getTitle() }}
        </h3>
        <p class="text-sm text-muted-foreground line-clamp-2">
          {{ getSubtitle() }}
        </p>
      </div>

      <!-- USPs -->
      <div class="mb-6 space-y-2">
        <div
          v-for="(usp, index) in category.usps"
          :key="index"
          class="flex items-center gap-2 text-sm text-foreground"
        >
          <SafeIcon :name="usp.iconName" :size="16" class="text-accent flex-shrink-0" />
          <span>{{ getUsp(usp) }}</span>
        </div>
      </div>

      <!-- CTA Button -->
      <Button
        class="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
        as="a"
        :href="categoryRoutes[categoryId]"
      >
        {{ locale === 'ar' ? 'استكشف الفئة' : 'Explore Category' }}
        <SafeIcon name="ArrowLeft" :size="18" class="mr-2" />
      </Button>
    </div>
  </div>
</template>
