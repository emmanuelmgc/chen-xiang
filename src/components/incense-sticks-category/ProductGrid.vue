
<script setup lang="ts">
import { computed } from 'vue'
import type { ProductType } from '@/data/products'
import { getProductsByCategory } from '@/data/products'
import ProductCard from './ProductCard.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

interface Props {
  category: ProductType
  isClient: boolean
}

const props = defineProps<Props>()

const products = computed(() => getProductsByCategory(props.category))

const content = {
  title_ar: 'منتجاتنا',
  title_en: 'Our Products',
  subtitle_ar: 'اختر من مجموعتنا المختارة من أعواد البخور منخفضة الدخان',
  subtitle_en: 'Choose from our curated collection of low-smoke incense sticks',
  emptyState_ar: 'لا توجد منتجات متاحة حالياً',
  emptyState_en: 'No products currently available',
}
</script>

<template>
  <section class="w-full py-12 md:py-16 bg-background">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {{ locale === 'ar' ? content.title_ar : content.title_en }}
        </h2>
        <p class="text-muted-foreground text-lg">
          {{ locale === 'ar' ? content.subtitle_ar : content.subtitle_en }}
        </p>
      </div>
      
      <!-- Product Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <ProductCard
          v-for="(product, index) in products"
          :key="product.id"
          :product="product"
          :is-client="isClient"
          :animation-delay="index * 50"
        />
      </div>
      
      <!-- Empty State (Fallback) -->
      <div v-if="products.length === 0" class="text-center py-12">
        <p class="text-muted-foreground text-lg">
          {{ locale === 'ar' ? content.emptyState_ar : content.emptyState_en }}
        </p>
      </div>
    </div>
  </section>
</template>
