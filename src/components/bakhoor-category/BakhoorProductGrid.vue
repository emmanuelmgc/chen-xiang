
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

const isClient = ref(true)
const sortBy = ref('newest')
const products = getProductsByCategory('bakhoor')

const sortedProducts = computed(() => {
  const sorted = [...products]
  if (sortBy.value === 'price-low') {
    sorted.sort((a, b) => {
      const aPrice = parseInt(a.priceRange_ar.split('-')[0])
      const bPrice = parseInt(b.priceRange_ar.split('-')[0])
      return aPrice - bPrice
    })
  } else if (sortBy.value === 'price-high') {
    sorted.sort((a, b) => {
      const aPrice = parseInt(a.priceRange_ar.split('-')[1])
      const bPrice = parseInt(b.priceRange_ar.split('-')[1])
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
</script>

<template>
  <section id="products" class="py-12 md:py-16 lg:py-20 bg-background">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-2">
            مجموعة البخور
          </h2>
          <p class="text-muted-foreground">
            {{ products.length }} منتج متاح
          </p>
        </div>

        <!-- Sort Control -->
        <div class="w-full md:w-auto">
          <Select v-model="sortBy">
            <SelectTrigger class="w-full md:w-[200px]">
              <SelectValue placeholder="ترتيب حسب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">الأحدث أولاً</SelectItem>
              <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
              <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
              <SelectItem value="popular">الأكثر شهرة</SelectItem>
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
          لا توجد منتجات متاحة حالياً
        </p>
      </div>

      <!-- Load More Button (optional) -->
      <div class="flex justify-center mt-12">
        <Button variant="outline" size="lg">
          عرض المزيد
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
