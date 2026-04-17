
<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { PRODUCT_BADGES, type ProductSummaryModel } from '@/data/products'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

interface Props {
  product: ProductSummaryModel
}

const props = defineProps<Props>()
const isHovered = ref(false)

const getBadgeColor = (badgeId: string): string => {
  const badge = PRODUCT_BADGES[badgeId as keyof typeof PRODUCT_BADGES]
  return badge?.color || '#C4A464'
}

const getBadgeLabel = (badgeId: string): string => {
  const badge = PRODUCT_BADGES[badgeId as keyof typeof PRODUCT_BADGES]
  return locale.value === 'ar' ? badge?.label_ar : badge?.label_en || ''
}

const getBadgeIcon = (badgeId: string): string => {
  const badge = PRODUCT_BADGES[badgeId as keyof typeof PRODUCT_BADGES]
  return badge?.iconName || 'Star'
}

const content = {
  viewDetails_ar: 'عرض التفاصيل',
  viewDetails_en: 'View Details',
  whatsappAria_ar: 'تواصل عبر واتساب',
  whatsappAria_en: 'Contact via WhatsApp',
  priceFrom_ar: 'ابتداءً من ... مع تمارا/تابي',
  priceFrom_en: 'Starting from... with Tamara/Tabby',
}
</script>

<template>
  <div
    class="group relative rounded-2xl border border-border/30 bg-card overflow-hidden transition-all duration-300 hover:shadow-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Product Image Container -->
    <div class="relative w-full h-64 md:h-72 overflow-hidden bg-muted">
      <img
        :src="product.imageUrl"
        :alt="locale === 'ar' ? product.name_ar : product.name_en"
        class="w-full h-full object-cover transition-transform duration-300"
        :class="isHovered ? 'scale-105' : 'scale-100'"
      />

      <!-- Badges -->
      <div class="absolute top-4 right-4 flex flex-col gap-2">
        <div
          v-for="badgeId in product.badges"
          :key="badgeId"
          class="flex items-center gap-1 px-3 py-1 rounded-full text-white text-xs font-semibold"
          :style="{ backgroundColor: getBadgeColor(badgeId) }"
        >
          <SafeIcon :name="getBadgeIcon(badgeId)" :size="14" />
          <span>{{ getBadgeLabel(badgeId) }}</span>
        </div>
      </div>

      <!-- Overlay on Hover -->
      <div
        class="absolute inset-0 bg-black/0 transition-colors duration-300"
        :class="isHovered ? 'bg-black/20' : 'bg-black/0'"
      ></div>
    </div>

    <!-- Product Info -->
    <div class="p-4 md:p-6">
      <!-- Product Name -->
      <h3 class="text-lg font-bold text-foreground mb-2 line-clamp-2">
        {{ locale === 'ar' ? product.name_ar : product.name_en }}
      </h3>

      <!-- Price -->
      <div class="mb-4">
        <p class="text-sm font-semibold text-primary">
          {{ locale === 'ar' ? product.priceRange_ar : product.priceRange_en }}
        </p>
        <p class="text-xs text-muted-foreground">
          {{ locale === 'ar' ? content.priceFrom_ar : content.priceFrom_en }}
        </p>
      </div>

      <!-- CTA Buttons -->
      <div class="flex gap-2">
        <!-- View Details Button -->
        <Button
          variant="outline"
          size="sm"
          class="flex-1"
          as="a"
          :href="product.detailUrl"
        >
          {{ locale === 'ar' ? content.viewDetails_ar : content.viewDetails_en }}
          <SafeIcon name="ChevronLeft" :size="16" class="mr-1" />
        </Button>

        <!-- WhatsApp Inquiry Button -->
        <Button
          size="sm"
          class="bg-primary hover:bg-primary/90"
          as="a"
          :href="locale === 'ar' ? product.whatsappInquiryUrl_ar : product.whatsappInquiryUrl_en"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="locale === 'ar' ? content.whatsappAria_ar : content.whatsappAria_en"
        >
          <SafeIcon name="MessageCircle" :size="16" />
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth hover transitions */
.group {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover {
  transform: translateY(-4px);
}
</style>
