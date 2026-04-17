
<script setup lang="ts">
import type { ProductFullModel } from '@/data/products'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

interface Props {
  product: ProductFullModel
}

const props = defineProps<Props>()

const sourcingLabels = {
  origin: { ar: 'المصدر', en: 'Origin' },
  year: { ar: 'السنة', en: 'Year' },
  grade: { ar: 'الدرجة', en: 'Grade' },
  batchNumber: { ar: 'رقم الدفعة', en: 'Batch Number' },
}
</script>

<template>
  <div class="mb-12 p-6 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border border-accent/20">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
        <SafeIcon name="Leaf" :size="20" class="text-accent" />
      </div>
      <h2 class="text-2xl font-bold text-foreground">
        {{ locale === 'ar' ? 'المصدر والحرفة' : 'Sourcing & Craft' }}
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <SafeIcon name="MapPin" :size="18" class="text-accent" />
          <p class="text-sm font-semibold text-foreground">{{ locale === 'ar' ? sourcingLabels.origin.ar : sourcingLabels.origin.en }}</p>
        </div>
        <p class="text-base font-medium text-foreground">{{ locale === 'ar' ? product.sourcing.origin_ar : product.sourcing.origin_en }}</p>
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <SafeIcon name="Calendar" :size="18" class="text-accent" />
          <p class="text-sm font-semibold text-foreground">{{ locale === 'ar' ? sourcingLabels.year.ar : sourcingLabels.year.en }}</p>
        </div>
        <p class="text-base font-medium text-foreground">{{ locale === 'ar' ? product.sourcing.year_ar : product.sourcing.year_en }}</p>
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <SafeIcon name="Award" :size="18" class="text-accent" />
          <p class="text-sm font-semibold text-foreground">{{ locale === 'ar' ? sourcingLabels.grade.ar : sourcingLabels.grade.en }}</p>
        </div>
        <p class="text-base font-medium text-foreground">{{ locale === 'ar' ? product.sourcing.grade_ar : product.sourcing.grade_en }}</p>
      </div>
    </div>

    <!-- Batch Number -->
    <div class="mt-6 pt-6 border-t border-accent/20">
      <p class="text-xs text-muted-foreground mb-1">{{ locale === 'ar' ? sourcingLabels.batchNumber.ar : sourcingLabels.batchNumber.en }}</p>
      <p class="font-mono text-sm font-semibold text-foreground">{{ product.sourcing.batch_number }}</p>
    </div>
  </div>
</template>
