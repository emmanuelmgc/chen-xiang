
<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ProductFullModel } from '@/data/products'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

interface Props {
  product: ProductFullModel
}

const props = defineProps<Props>()

const specsData = computed(() => [
  { label: locale.value === 'ar' ? 'الوزن' : 'Weight', value: locale.value === 'ar' ? props.product.specs.weight_ar : props.product.specs.weight_en },
  { label: locale.value === 'ar' ? 'وقت الحرق' : 'Burn Time', value: locale.value === 'ar' ? props.product.specs.burnTime_ar : props.product.specs.burnTime_en },
  { label: locale.value === 'ar' ? 'مستوى الدخان' : 'Smoke Level', value: locale.value === 'ar' ? props.product.specs.smokeLevel_ar : props.product.specs.smokeLevel_en },
  { label: locale.value === 'ar' ? 'المساحة المناسبة' : 'Applicable Space', value: locale.value === 'ar' ? props.product.specs.applicableSpace_ar : props.product.specs.applicableSpace_en },
  { label: locale.value === 'ar' ? 'المادة' : 'Material', value: locale.value === 'ar' ? props.product.specs.material_ar : props.product.specs.material_en },
])
</script>

<template>
  <div class="mb-12">
    <h2 class="text-2xl font-bold text-foreground mb-6">
      {{ locale === 'ar' ? 'المواصفات التفصيلية' : 'Detailed Specifications' }}
    </h2>
    
    <Accordion type="single" collapsible class="w-full">
      <AccordionItem value="specs" class="border-b border-border/30">
        <AccordionTrigger class="hover:no-underline py-4">
          <span class="text-lg font-semibold text-foreground">
            {{ locale === 'ar' ? 'عرض جميع المواصفات' : 'View All Specifications' }}
          </span>
        </AccordionTrigger>
        <AccordionContent class="pb-4">
          <div class="space-y-4">
            <div
              v-for="(spec, index) in specsData"
              :key="index"
              class="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg border border-border/20"
            >
              <div>
                <p class="text-sm font-semibold text-foreground">{{ spec.label }}</p>
              </div>
              <div :class="locale === 'ar' ? 'text-right' : 'text-left'">
                <p class="text-sm font-medium text-foreground">{{ spec.value }}</p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
