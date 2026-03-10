
<script setup lang="ts">
import { ref } from 'vue'
import type { ProductSummaryModel } from '@/data/products'
import { PRODUCT_BADGES } from '@/data/products'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  product: ProductSummaryModel
  isClient: boolean
  animationDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
  animationDelay: 0
})

const isHovered = ref(false)
</script>

<template>
  <div
    class="group rounded-lg border border-border/30 bg-card overflow-hidden transition-all duration-500 hover:shadow-card"
    :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    :style="{ transitionDelay: isClient ? `${animationDelay}ms` : '0ms' }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Product Image Container -->
    <div class="relative w-full h-64 overflow-hidden bg-muted">
      <img
        :src="product.imageUrl"
        :alt="product.name_ar"
        class="w-full h-full object-cover transition-transform duration-300"
        :class="isHovered && isClient ? 'scale-105' : 'scale-100'"
        loading="lazy"
      />
      
      <!-- Badges -->
      <div class="absolute top-3 right-3 flex flex-col gap-2">
        <Badge
          v-for="badgeId in product.badges"
          :key="badgeId"
          class="bg-accent text-accent-foreground text-xs font-semibold px-2 py-1"
        >
          {{ PRODUCT_BADGES[badgeId].label_ar }}
        </Badge>
      </div>
    </div>
    
    <!-- Product Info -->
    <div class="p-4 md:p-6 flex flex-col gap-4">
      <!-- Product Name -->
      <h3 class="text-lg font-semibold text-foreground line-clamp-2">
        {{ product.name_ar }}
      </h3>
      
      <!-- Price -->
      <div class="flex flex-col gap-1">
        <p class="text-sm font-medium text-foreground">
          {{ product.priceRange_ar }}
        </p>
        <p class="text-xs text-muted-foreground">
          ابتداءً من ... مع تمارا/تابي
        </p>
      </div>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col gap-2 pt-2">
        <!-- View Details Button -->
        <Button
          variant="default"
          size="sm"
          class="w-full bg-primary hover:bg-primary/90"
          as="a"
          :href="product.detailUrl"
        >
          عرض التفاصيل
          <SafeIcon name="ArrowLeft" :size="16" class="mr-2" />
        </Button>
        
        <!-- WhatsApp Inquiry Button -->
        <Button
          variant="outline"
          size="sm"
          class="w-full border-accent text-accent hover:bg-accent/10"
          as="a"
          :href="product.whatsappInquiryUrl_ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          استفسر عبر واتساب
          <SafeIcon name="MessageCircle" :size="16" class="mr-2" />
        </Button>
      </div>
    </div>
  </div>
</template>
