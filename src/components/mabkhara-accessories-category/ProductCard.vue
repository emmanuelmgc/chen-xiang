
<script setup lang="ts">
import type { ProductSummaryModel } from '@/data/products'
import { PRODUCT_BADGES } from '@/data/products'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  product: ProductSummaryModel
  isClient: boolean
}

defineProps<Props>()
</script>

<template>
  <div 
    class="rounded-lg border border-border/30 bg-card overflow-hidden transition-all duration-300 hover:shadow-card"
    :class="isClient ? 'hover:shadow-card' : ''"
  >
    <!-- Product Image Container -->
    <div class="relative w-full h-64 md:h-72 overflow-hidden bg-muted">
      <img 
        :src="product.imageUrl" 
        :alt="product.name_ar"
        class="w-full h-full object-cover transition-transform duration-300"
        :class="isClient ? 'hover:scale-105' : ''"
        loading="lazy"
      />

      <!-- Badges -->
      <div class="absolute top-3 right-3 flex flex-col gap-2">
        <div
          v-for="badgeId in product.badges"
          :key="badgeId"
          class="px-3 py-1 rounded-full text-xs font-semibold text-white"
          :style="{ backgroundColor: PRODUCT_BADGES[badgeId].color }"
        >
          {{ PRODUCT_BADGES[badgeId].label_ar }}
        </div>
      </div>
    </div>

    <!-- Product Info -->
    <div class="p-4 md:p-6">
      <!-- Product Name -->
      <h3 class="text-lg font-semibold text-foreground mb-2 line-clamp-2">
        {{ product.name_ar }}
      </h3>

      <!-- Product Name (English) -->
      <p class="text-sm text-muted-foreground mb-4 line-clamp-1">
        {{ product.name_en }}
      </p>

      <!-- Price -->
      <div class="mb-4">
        <p class="text-lg font-bold text-primary">
          {{ product.priceRange_ar }}
        </p>
        <p class="text-xs text-muted-foreground">
          {{ product.priceRange_en }}
        </p>
      </div>

      <!-- CTA Buttons -->
      <div class="flex gap-2">
        <Button 
          variant="default"
          size="sm"
          class="flex-1 bg-primary hover:bg-primary/90"
          as="a"
          :href="product.detailUrl"
        >
          عرض التفاصيل
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
          <SafeIcon name="MessageCircle" :size="16" class="mr-1" />
          واتساب
        </Button>
      </div>
    </div>
  </div>
</template>
