
<script setup lang="ts">
import type { ProductFullModel } from '@/data/products'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  product: ProductFullModel
}

const props = defineProps<Props>()

const sourcingItems = [
  { icon: 'MapPin', label: 'المصدر', value: props.product.sourcing.origin_ar, valueEn: props.product.sourcing.origin_en },
  { icon: 'Calendar', label: 'السنة', value: props.product.sourcing.year_ar, valueEn: props.product.sourcing.year_en },
  { icon: 'Award', label: 'الدرجة', value: props.product.sourcing.grade_ar, valueEn: props.product.sourcing.grade_en },
]
</script>

<template>
  <div class="mb-12 p-6 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border border-accent/20">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
        <SafeIcon name="Leaf" :size="20" class="text-accent" />
      </div>
      <h2 class="text-2xl font-bold text-foreground">المصدر والحرفة</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in sourcingItems"
        :key="index"
        class="space-y-2"
      >
        <div class="flex items-center gap-2">
          <SafeIcon :name="item.icon" :size="18" class="text-accent" />
          <p class="text-sm font-semibold text-foreground">{{ item.label }}</p>
        </div>
        <p class="text-base font-medium text-foreground">{{ item.value }}</p>
        <p class="text-xs text-muted-foreground">{{ item.valueEn }}</p>
      </div>
    </div>

    <!-- Batch Number -->
    <div class="mt-6 pt-6 border-t border-accent/20">
      <p class="text-xs text-muted-foreground mb-1">رقم الدفعة</p>
      <p class="font-mono text-sm font-semibold text-foreground">{{ product.sourcing.batch_number }}</p>
    </div>
  </div>
</template>
