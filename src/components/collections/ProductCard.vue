
<script setup lang="ts">
import { ref } from 'vue'
import type { ProductSummaryModel } from '@/data/products'
import { PRODUCT_BADGES } from '@/data/products'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

interface Props {
  product: ProductSummaryModel
}

const props = defineProps<Props>()

const isHovered = ref(false)

const getBadgeColor = (badgeId: string) => {
  const badge = PRODUCT_BADGES[badgeId as keyof typeof PRODUCT_BADGES]
  return badge?.color || '#C4A464'
}

const getBadgeLabel = (badgeId: string) => {
  const badge = PRODUCT_BADGES[badgeId as keyof typeof PRODUCT_BADGES]
  return locale.value === 'ar' ? badge?.label_ar : badge?.label_en || ''
}

const getBadgeIcon = (badgeId: string) => {
  const badge = PRODUCT_BADGES[badgeId as keyof typeof PRODUCT_BADGES]
  return badge?.iconName || 'Star'
}

const getProductName = () => {
  return locale.value === 'ar' ? props.product.name_ar : props.product.name_en
}

const getPriceRange = () => {
  return locale.value === 'ar' ? props.product.priceRange_ar : props.product.priceRange_en
}

const getWhatsAppUrl = () => {
  return locale.value === 'ar' ? props.product.whatsappInquiryUrl_ar : props.product.whatsappInquiryUrl_en
}
</script>

<template>
  <div
    class="group relative rounded-lg border border-border/30 bg-card overflow-hidden hover:shadow-card transition-all duration-300 flex flex-col h-full"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Image Container -->
    <div class="relative h-48 md:h-56 overflow-hidden bg-muted">
      <img
        :src="product.imageUrl"
        :alt="getProductName()"
        class="w-full h-full object-cover transition-transform duration-500"
        :class="isHovered ? 'scale-105' : 'scale-100'"
      />

      <!-- Badges -->
      <div class="absolute top-3 right-3 flex flex-col gap-2">
        <div
          v-for="badgeId in product.badges"
          :key="badgeId"
          class="flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm"
        >
          <SafeIcon
            :name="getBadgeIcon(badgeId)"
            :size="14"
            :color="getBadgeColor(badgeId)"
          />
          <span class="text-xs font-bold" :style="{ color: getBadgeColor(badgeId) }">
            {{ getBadgeLabel(badgeId) }}
          </span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="flex-1 p-4 md:p-5 flex flex-col justify-between">
      <!-- Title -->
      <h3 class="text-base md:text-lg font-bold text-foreground mb-2 line-clamp-2">
        {{ getProductName() }}
      </h3>

      <!-- Price -->
      <div class="mb-4">
        <p class="text-sm font-bold text-primary mb-1">
          {{ getPriceRange() }}
        </p>
        <p class="text-xs text-muted-foreground">
          {{ locale === 'ar' ? 'ابتداءً من ... مع تمارا/تابي' : 'Starting from ... with Tamara/Tabi' }}
        </p>
      </div>

      <!-- CTA Buttons -->
      <div class="flex gap-2">
        <Button
          variant="default"
          size="sm"
          class="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          as="a"
          :href="product.detailUrl"
        >
          {{ locale === 'ar' ? 'عرض التفاصيل' : 'View Details' }}
        </Button>
        <Button
          variant="outline"
          size="sm"
          class="flex-1"
          as="a"
          :href="getWhatsAppUrl()"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SafeIcon name="MessageCircle" :size="16" />
        </Button>
      </div>
    </div>
  </div>
</template>
