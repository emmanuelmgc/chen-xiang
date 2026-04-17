
<script setup lang="ts">
import type { ProductSummaryModel } from '@/data/products'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import ProductBadge from '@/components/product-detail/ProductBadge.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

interface Props {
  product: ProductSummaryModel
}

defineProps<Props>()

const content = {
  priceLabel_ar: 'السعر',
  priceLabel_en: 'Price',
  viewDetails_ar: 'عرض التفاصيل',
  viewDetails_en: 'View Details',
  inquire_ar: 'استفسر',
  inquire_en: 'Inquire',
}
</script>

<template>
  <div class="group rounded-xl border border-border/30 overflow-hidden hover:shadow-card transition-all">
    <!-- Image -->
    <div class="relative w-full aspect-square bg-muted overflow-hidden">
      <img
        :src="product.imageUrl"
        :alt="locale === 'ar' ? product.name_ar : product.name_en"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      
      <!-- Badges -->
      <div class="absolute top-3 right-3 flex flex-wrap gap-2">
        <ProductBadge
          v-for="badgeId in product.badges"
          :key="badgeId"
          :badge-id="badgeId"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="p-4 space-y-3">
      <div>
        <h3 class="font-semibold text-foreground line-clamp-2">
          {{ locale === 'ar' ? product.name_ar : product.name_en }}
        </h3>
        <p class="text-xs text-muted-foreground mt-1">
          {{ locale === 'ar' ? product.name_en : '' }}
        </p>
      </div>

      <div>
        <p class="text-sm text-muted-foreground mb-1">
          {{ locale === 'ar' ? content.priceLabel_ar : content.priceLabel_en }}
        </p>
        <p class="font-bold text-foreground">
          {{ locale === 'ar' ? product.priceRange_ar : product.priceRange_en }}
        </p>
      </div>

      <div class="flex gap-2 pt-2">
        <Button
          size="sm"
          variant="outline"
          class="flex-1"
          as="a"
          :href="product.detailUrl"
        >
          {{ locale === 'ar' ? content.viewDetails_ar : content.viewDetails_en }}
        </Button>
        <Button
          size="sm"
          class="flex-1"
          as="a"
          :href="locale === 'ar' ? product.whatsappInquiryUrl_ar : product.whatsappInquiryUrl_en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SafeIcon name="MessageCircle" :size="16" class="ml-1" />
          {{ locale === 'ar' ? content.inquire_ar : content.inquire_en }}
        </Button>
      </div>
    </div>
  </div>
</template>
