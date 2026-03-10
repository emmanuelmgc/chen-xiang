
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PRODUCT_CATEGORIES } from '@/data/products'
import type { ProductType } from '@/data/products'
import CategoryCard from '@/components/collections/CategoryCard.vue'

const isClient = ref(true)

const categories: ProductType[] = ['incense_stick', 'bakhoor', 'mabkhara_accessory', 'gift_set']

onMounted(() => {
  isClient.value = false
  
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div
      v-for="(category, index) in categories"
      :key="category"
      class="transition-all duration-500"
      :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      :style="{ transitionDelay: isClient ? `${index * 100}ms` : '0ms' }"
    >
      <CategoryCard
        :category="PRODUCT_CATEGORIES[category]"
        :categoryId="category"
      />
    </div>
  </div>
</template>
