
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PRODUCTS_LIST } from '@/data/products'
import ProductCard from '@/components/collections/ProductCard.vue'

const isClient = ref(true)

// Select 4 featured products (one from each category)
const featuredProducts = [
  PRODUCTS_LIST.find(p => p.id === 'stick_sandal_classic'),
  PRODUCTS_LIST.find(p => p.id === 'bakhoor_oud_patchouli'),
  PRODUCTS_LIST.find(p => p.id === 'mabkhara_electric_gold'),
  PRODUCTS_LIST.find(p => p.id === 'gift_eid_deluxe'),
].filter(Boolean)

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
      v-for="(product, index) in featuredProducts"
      :key="product?.id"
      class="transition-all duration-500"
      :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      :style="{ transitionDelay: isClient ? `${index * 100}ms` : '0ms' }"
    >
      <ProductCard v-if="product" :product="product" />
    </div>
  </div>
</template>
