
<script setup lang="ts">
import { ref } from 'vue'
import type { ProductFullModel } from '@/data/products'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

interface Props {
  product: ProductFullModel
}

const props = defineProps<Props>()

const specsData = [
  { label: 'الوزن', value: props.product.specs.weight_ar, labelEn: 'Weight', valueEn: props.product.specs.weight_en },
  { label: 'وقت الحرق', value: props.product.specs.burnTime_ar, labelEn: 'Burn Time', valueEn: props.product.specs.burnTime_en },
  { label: 'مستوى الدخان', value: props.product.specs.smokeLevel_ar, labelEn: 'Smoke Level', valueEn: props.product.specs.smokeLevel_en },
  { label: 'المساحة المناسبة', value: props.product.specs.applicableSpace_ar, labelEn: 'Applicable Space', valueEn: props.product.specs.applicableSpace_en },
  { label: 'المادة', value: props.product.specs.material_ar, labelEn: 'Material', valueEn: props.product.specs.material_en },
]
</script>

<template>
  <div class="mb-12">
    <h2 class="text-2xl font-bold text-foreground mb-6">المواصفات التفصيلية</h2>
    
    <Accordion type="single" collapsible class="w-full">
      <AccordionItem value="specs" class="border-b border-border/30">
        <AccordionTrigger class="hover:no-underline py-4">
          <span class="text-lg font-semibold text-foreground">عرض جميع المواصفات</span>
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
                <p class="text-xs text-muted-foreground mt-1">{{ spec.labelEn }}</p>
              </div>
              <div class="text-right">
                <p class="text-sm font-medium text-foreground">{{ spec.value }}</p>
                <p class="text-xs text-muted-foreground mt-1">{{ spec.valueEn }}</p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
