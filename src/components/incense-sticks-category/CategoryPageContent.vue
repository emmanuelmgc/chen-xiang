
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PRODUCT_CATEGORIES } from '@/data/products'
import HeroBanner from './HeroBanner.vue'
import ProductValueProposition from './ProductValueProposition.vue'
import ProductGrid from './ProductGrid.vue'
import FAQSection from './FAQSection.vue'

const isClient = ref(true)

const categoryData = PRODUCT_CATEGORIES['incense_stick']

onMounted(() => {
  // 1→0→1 过程：开始时关闭客户端状态以重置动画
  isClient.value = false
  
  // 在下一帧恢复客户端状态，触发 CSS 过渡
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <div class="w-full">
    <!-- Hero Banner -->
    <HeroBanner 
      :category-data="categoryData"
      :is-client="isClient"
    />
    
    <!-- Product Value Proposition -->
    <ProductValueProposition 
      :usps="categoryData.usps"
      :is-client="isClient"
    />
    
    <!-- Product Grid -->
    <ProductGrid 
      category="incense_stick"
      :is-client="isClient"
    />
    
    <!-- FAQ Section -->
    <FAQSection 
      category="incense"
      :is-client="isClient"
    />
  </div>
</template>
