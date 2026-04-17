
<script setup lang="ts">
import { ref, computed } from 'vue'
import { getProductById } from '@/data/products'
import type { ProductSummaryModel } from '@/data/products'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import ProductCard from '@/components/product-detail/ProductCard.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

interface Props {
  relatedIds: string[]
}

const props = defineProps<Props>()

const currentSlide = ref(0)

const relatedProducts = computed(() => {
  return props.relatedIds
    .map(id => getProductById(id))
    .filter((p): p is ProductSummaryModel => p !== undefined)
})

const itemsPerSlide = 3

const visibleProducts = computed(() => {
  return relatedProducts.value.slice(currentSlide.value, currentSlide.value + itemsPerSlide)
})

function nextSlide() {
  if (currentSlide.value + itemsPerSlide < relatedProducts.value.length) {
    currentSlide.value += itemsPerSlide
  }
}

function prevSlide() {
  if (currentSlide.value > 0) {
    currentSlide.value -= itemsPerSlide
  }
}
</script>

<template>
  <div v-if="relatedProducts.length > 0" class="mb-12">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-2xl font-bold text-foreground">
        {{ locale === 'ar' ? 'منتجات ذات صلة' : 'Related Products' }}
      </h2>
      <div class="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          @click="prevSlide"
          :disabled="currentSlide === 0"
          :aria-label="locale === 'ar' ? 'السابق' : 'Previous'"
        >
          <SafeIcon name="ChevronRight" :size="20" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          @click="nextSlide"
          :disabled="currentSlide + itemsPerSlide >= relatedProducts.length"
          :aria-label="locale === 'ar' ? 'التالي' : 'Next'"
        >
          <SafeIcon name="ChevronLeft" :size="20" />
        </Button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProductCard
        v-for="product in visibleProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
