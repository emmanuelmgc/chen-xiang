
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import SafeIcon from '@/components/common/SafeIcon.vue'
import BakhoorProductCard from './BakhoorProductCard.vue'
import { getProductsByCategory, PRODUCT_BADGES } from '@/data/products'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

const isClient = ref(true)
const sortBy = ref('newest')
const products = getProductsByCategory('bakhoor')

const sortedProducts = computed(() => {
  const sorted = [...products]
  if (sortBy.value === 'price-low') {
    sorted.sort((a, b) => {
      const aPrice = parseInt((locale.value === 'ar' ? a.priceRange_ar : a.priceRange_en).split('-')[0])
      const bPrice = parseInt((locale.value === 'ar' ? b.priceRange_ar : b.priceRange_en).split('-')[0])
      return aPrice - bPrice
    })
  } else if (sortBy.value === 'price-high') {
    sorted.sort((a, b) => {
      const aPrice = parseInt((locale.value === 'ar' ? a.priceRange_ar : a.priceRange_en).split('-')[1])
      const bPrice = parseInt((locale.value === 'ar' ? b.priceRange_ar : b.priceRange_en).split('-')[1])
      return bPrice - aPrice
    })
  }
  return sorted
})

onMounted(() => {
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})

const content = {
  title_ar: 'مجموعة البخور',
  title_en: 'Bakhoor Collection',
  productsCount_ar: 'منتج متاح',
  productsCount_en: 'products available',
  emptyState_ar: 'لا توجد منتجات متاحة حالياً',
  emptyState_en: 'No products currently available',
  loadMore_ar: 'عرض المزيد',
  loadMore_en: 'Show More',
}

const sortLabels = {
  placeholder_ar: 'ترتيب حسب',
  placeholder_en: 'Sort by',
  newest_ar: 'الأحدث أولاً',
  newest_en: 'Newest First',
  priceLow_ar: 'السعر: من الأقل للأعلى',
  priceLow_en: 'Price: Low to High',
  priceHigh_ar: 'السعر: من الأعلى للأقل',
  priceHigh_en: 'Price: High to Low',
  popular_ar: 'الأكثر شهرة',
  popular_en: 'Most Popular',
}
</script>

<template>
  <section id="products" class="py-12 md:py-16 lg:py-20 bg-background">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {{ locale === 'ar' ? content.title_ar : content.title_en }}
          </h2>
          <p class="text-muted-foreground">
            {{ products.length }} {{ locale === 'ar' ? content.productsCount_ar : content.productsCount_en }}
          </p>
        </div>

        <!-- Sort Control -->
        <div class="w-full md:w-auto">
          <Select v-model="sortBy">
            <SelectTrigger class="w-full md:w-[200px]">
              <SelectValue :placeholder="locale === 'ar' ? sortLabels.placeholder_ar : sortLabels.placeholder_en" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">{{ locale === 'ar' ? sortLabels.newest_ar : sortLabels.newest_en }}</SelectItem>
              <SelectItem value="price-low">{{ locale === 'ar' ? sortLabels.priceLow_ar : sortLabels.priceLow_en }}</SelectItem>
              <SelectItem value="price-high">{{ locale === 'ar' ? sortLabels.priceHigh_ar : sortLabels.priceHigh_en }}</SelectItem>
              <SelectItem value="popular">{{ locale === 'ar' ? sortLabels.popular_ar : sortLabels.popular_en }}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(product, index) in sortedProducts"
          :key="product.id"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          class="transition-all duration-500"
          :style="{ transitionDelay: isClient ? `${index * 50}ms` : '0ms' }"
        >
          <BakhoorProductCard :product="product" />
        </div>
      </div>

      <!-- Empty State (fallback) -->
      <div v-if="products.length === 0" class="text-center py-12">
        <SafeIcon name="Package" :size="48" class="mx-auto text-muted-foreground mb-4" />
        <p class="text-lg text-muted-foreground">
          {{ locale === 'ar' ? content.emptyState_ar : content.emptyState_en }}
        </p>
      </div>

      <!-- Load More Button (optional) -->
      <div class="flex justify-center mt-12">
        <Button variant="outline" size="lg">
          {{ locale === 'ar' ? content.loadMore_ar : content.loadMore_en }}
          <SafeIcon name="ChevronDown" :size="20" class="mr-2" />
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Stagger animation for product cards */
div[style*="transitionDelay"] {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
</style>
