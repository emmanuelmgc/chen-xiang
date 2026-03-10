
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { ProductSummaryModel } from '@/data/products'
import { PRODUCT_BADGES } from '@/data/products'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  product: ProductSummaryModel
}

const props = defineProps<Props>()
const isClient = ref(true)
const isHovered = ref(false)

onMounted(() => {
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})

const getBadgeColor = (badgeId: string) => {
  return PRODUCT_BADGES[badgeId as keyof typeof PRODUCT_BADGES]?.color || '#C4A464'
}
</script>

<template>
  <div 
    class="group rounded-lg border border-border/30 bg-card overflow-hidden transition-all duration-300 hover:shadow-card hover:border-primary/30"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Image Container -->
    <div class="relative h-64 md:h-72 overflow-hidden bg-muted">
      <img
        :src="product.imageUrl"
        :alt="product.name_ar"
        class="w-full h-full object-cover transition-transform duration-300"
        :class="isHovered && isClient ? 'scale-105' : 'scale-100'"
        loading="lazy"
      />
      
      <!-- Badges -->
      <div class="absolute top-4 right-4 flex flex-col gap-2">
        <div
          v-for="badgeId in product.badges"
          :key="badgeId"
          class="px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm"
          :style="{ backgroundColor: getBadgeColor(badgeId) }"
        >
          {{ PRODUCT_BADGES[badgeId as keyof typeof PRODUCT_BADGES]?.label_ar }}
        </div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6 space-y-4">
      <!-- Product Name -->
      <div class="space-y-1">
        <h3 class="text-lg font-bold text-foreground line-clamp-2">
          {{ product.name_ar }}
        </h3>
        <p class="text-sm text-muted-foreground">
          {{ product.name_en }}
        </p>
      </div>
      
      <!-- Price -->
      <div class="space-y-1">
        <p class="text-lg font-bold text-primary">
          {{ product.priceRange_ar }}
        </p>
        <p class="text-xs text-muted-foreground">
          ابتداءً من السعر المعروض
        </p>
      </div>
      
      <!-- CTA Buttons -->
      <div class="flex gap-2 pt-2">
        <Button
          variant="default"
          size="sm"
          class="flex-1 bg-primary hover:bg-primary/90"
          as="a"
          :href="product.detailUrl"
        >
          عرض التفاصيل
          <SafeIcon name="ArrowLeft" :size="16" class="mr-1" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          class="flex-1"
          as="a"
          :href="product.whatsappInquiryUrl_ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          واتساب
          <SafeIcon name="MessageCircle" :size="16" class="mr-1" />
        </Button>
      </div>
    </div>
  </div>
</template>
