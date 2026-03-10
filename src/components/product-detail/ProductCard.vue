
<script setup lang="ts">
import type { ProductSummaryModel } from '@/data/products'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import ProductBadge from '@/components/product-detail/ProductBadge.vue'

interface Props {
  product: ProductSummaryModel
}

defineProps<Props>()
</script>

<template>
  <div class="group rounded-xl border border-border/30 overflow-hidden hover:shadow-card transition-all">
    <!-- Image -->
    <div class="relative w-full aspect-square bg-muted overflow-hidden">
      <img
        :src="product.imageUrl"
        :alt="product.name_ar"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      
      <!-- Badges -->
      <div class="absolute top-3 right-3 flex flex-wrap gap-2">
        <ProductBadge
          v-for="badgeId in product.badges"
          :key="badgeId"
          :badge-id="badgeId"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="p-4 space-y-3">
      <div>
        <h3 class="font-semibold text-foreground line-clamp-2">{{ product.name_ar }}</h3>
        <p class="text-xs text-muted-foreground mt-1">{{ product.name_en }}</p>
      </div>

      <div>
        <p class="text-sm text-muted-foreground mb-1">السعر</p>
        <p class="font-bold text-foreground">{{ product.priceRange_ar }}</p>
      </div>

      <div class="flex gap-2 pt-2">
        <Button
          size="sm"
          variant="outline"
          class="flex-1"
          as="a"
          :href="product.detailUrl"
        >
          عرض التفاصيل
        </Button>
        <Button
          size="sm"
          class="flex-1"
          as="a"
          :href="product.whatsappInquiryUrl_ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SafeIcon name="MessageCircle" :size="16" class="ml-1" />
          استفسر
        </Button>
      </div>
    </div>
  </div>
</template>
