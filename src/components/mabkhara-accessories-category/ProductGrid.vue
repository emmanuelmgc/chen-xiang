
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getProductsByCategory } from '@/data/products'
import ProductCard from '@/components/mabkhara-accessories-category/ProductCard.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

const isClient = ref(true)
const products = getProductsByCategory('mabkhara_accessory')

onMounted(() => {
  isClient.value = false
  
  requestAnimationFrame(() => {
    isClient.value = true
  })
})

const content = {
  title_ar: 'منتجاتنا',
  title_en: 'Our Products',
  emptyState_ar: 'لا توجد منتجات متاحة حالياً',
  emptyState_en: 'No products currently available',
}
</script>

<template>
  <section class="w-full py-12 md:py-16 px-4 md:px-8 bg-background">
    <div class="container mx-auto">
      <!-- Section Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-12">
        {{ locale === 'ar' ? content.title_ar : content.title_en }}
      </h2>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(product, index) in products"
          :key="product.id"
          class="transition-all duration-500"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          :style="{ transitionDelay: isClient ? `${index * 100}ms` : '0ms' }"
        >
          <ProductCard 
            :product="product"
            :is-client="isClient"
          />
        </div>
      </div>

      <!-- Empty State (fallback) -->
      <div v-if="products.length === 0" class="text-center py-12">
        <p class="text-muted-foreground text-lg">
          {{ locale === 'ar' ? content.emptyState_ar : content.emptyState_en }}
        </p>
      </div>
    </div>
  </section>
</template>
