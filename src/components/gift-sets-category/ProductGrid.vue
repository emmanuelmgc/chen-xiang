
<script setup lang="ts">
import { getProductsByCategory } from '@/data/products'
import ProductCard from '@/components/gift-sets-category/ProductCard.vue'

const products = getProductsByCategory('gift_set')
</script>

<template>
  <div class="space-y-8">
    <!-- Section Header -->
    <div class="text-center space-y-2">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground">
        مجموعات الهدايا المختارة
      </h2>
      <p class="text-lg text-muted-foreground">
        اختر من مجموعاتنا المتنوعة لكل مناسبة
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
        لا توجد مجموعات هدايا متاحة حالياً
      </p>
    </div>
  </div>
</template>
