
<script setup lang="ts">
import { computed } from 'vue'
import type { ProductType } from '@/data/products'
import { getProductsByCategory } from '@/data/products'
import ProductCard from './ProductCard.vue'

interface Props {
  category: ProductType
  isClient: boolean
}

const props = defineProps<Props>()

const products = computed(() => getProductsByCategory(props.category))
</script>

<template>
  <section class="w-full py-12 md:py-16 bg-background">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-2">
          منتجاتنا
        </h2>
        <p class="text-muted-foreground text-lg">
          اختر من مجموعتنا المختارة من أعواد البخور منخفضة الدخان
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
          لا توجد منتجات متاحة حالياً
        </p>
      </div>
    </div>
  </section>
</template>
