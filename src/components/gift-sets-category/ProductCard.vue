
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { ProductSummaryModel } from '@/data/products'
import { PRODUCT_BADGES } from '@/data/products'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

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

const content = {
  viewDetails_ar: 'عرض التفاصيل',
  viewDetails_en: 'View Details',
  whatsapp_ar: 'واتساب',
  whatsapp_en: 'WhatsApp',
  priceNote_ar: 'ابتداءً من السعر المعروض',
  priceNote_en: 'Starting from displayed price',
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
        :alt="locale === 'ar' ? product.name_ar : product.name_en"
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
          {{ locale === 'ar' ? PRODUCT_BADGES[badgeId as keyof typeof PRODUCT_BADGES]?.label_ar : PRODUCT_BADGES[badgeId as keyof typeof PRODUCT_BADGES]?.label_en }}
        </div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6 space-y-4">
      <!-- Product Name -->
      <div class="space-y-1">
        <h3 class="text-lg font-bold text-foreground line-clamp-2">
          {{ locale === 'ar' ? product.name_ar : product.name_en }}
        </h3>
        <p class="text-sm text-muted-foreground">
          {{ locale === 'ar' ? product.name_en : '' }}
        </p>
      </div>
      
      <!-- Price -->
      <div class="space-y-1">
        <p class="text-lg font-bold text-primary">
          {{ locale === 'ar' ? product.priceRange_ar : product.priceRange_en }}
        </p>
        <p class="text-xs text-muted-foreground">
          {{ locale === 'ar' ? content.priceNote_ar : content.priceNote_en }}
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
          {{ locale === 'ar' ? content.viewDetails_ar : content.viewDetails_en }}
          <SafeIcon name="ArrowLeft" :size="16" class="mr-1" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          class="flex-1"
          as="a"
          :href="locale === 'ar' ? product.whatsappInquiryUrl_ar : product.whatsappInquiryUrl_en"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ locale === 'ar' ? content.whatsapp_ar : content.whatsapp_en }}
          <SafeIcon name="MessageCircle" :size="16" class="mr-1" />
        </Button>
      </div>
    </div>
  </div>
</template>
