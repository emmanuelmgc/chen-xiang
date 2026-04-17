
<script setup lang="ts">
import { getProductsByCategory } from '@/data/products'
import ProductCard from '@/components/gift-sets-category/ProductCard.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

const products = getProductsByCategory('gift_set')

const content = {
  title_ar: 'مجموعات الهدايا المختارة',
  title_en: 'Curated Gift Sets',
  subtitle_ar: 'اختر من مجموعاتنا المتنوعة لكل مناسبة',
  subtitle_en: 'Choose from our diverse sets for every occasion',
  emptyState_ar: 'لا توجد مجموعات هدايا متاحة حالياً',
  emptyState_en: 'No gift sets currently available',
}
</script>

<template>
  <div class="space-y-8">
    <!-- Section Header -->
    <div class="text-center space-y-2">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground">
        {{ locale === 'ar' ? content.title_ar : content.title_en }}
      </h2>
      <p class="text-lg text-muted-foreground">
        {{ locale === 'ar' ? content.subtitle_ar : content.subtitle_en }}
      </p>
    </div>
    
    <!-- Products Grid -->
    <div id="products" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        client:idle
      />
    </div>
    
    <!-- Empty State (fallback) -->
    <div v-if="products.length === 0" class="text-center py-12">
      <p class="text-lg text-muted-foreground">
        {{ locale === 'ar' ? content.emptyState_ar : content.emptyState_en }}
      </p>
    </div>
  </div>
</template>
