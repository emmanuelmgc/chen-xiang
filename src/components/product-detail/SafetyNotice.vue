
<script setup lang="ts">
import { ref } from 'vue'
import type { ProductFullModel } from '@/data/products'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  product: ProductFullModel
}

const props = defineProps<Props>()
</script>

<template>
  <div class="mb-12">
    <Accordion type="single" collapsible class="w-full">
      <AccordionItem value="safety" class="border border-destructive/30 rounded-xl overflow-hidden">
        <AccordionTrigger class="hover:no-underline px-6 py-4 bg-destructive/5">
          <div class="flex items-center gap-3">
            <SafeIcon name="AlertTriangle" :size="20" class="text-destructive" />
            <span class="text-lg font-semibold text-foreground">إشعار السلامة والاستخدام</span>
          </div>
        </AccordionTrigger>
        <AccordionContent class="px-6 py-4 bg-destructive/2">
          <div class="space-y-4">
            <div class="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <p class="text-sm leading-relaxed text-foreground">
                {{ product.safetyNotice_ar }}
              </p>
              <p class="text-xs text-muted-foreground mt-3 italic">
                {{ product.safetyNotice_en }}
              </p>
            </div>

            <!-- Additional Safety Tips -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex gap-3">
                <SafeIcon name="Wind" :size="20" class="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p class="font-semibold text-sm text-foreground">التهوية الجيدة</p>
                  <p class="text-xs text-muted-foreground mt-1">تأكد من وجود تهوية كافية في المكان</p>
                </div>
              </div>
              <div class="flex gap-3">
                <SafeIcon name="Users" :size="20" class="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p class="font-semibold text-sm text-foreground">بعيداً عن الأطفال</p>
                  <p class="text-xs text-muted-foreground mt-1">احفظ المنتج بعيداً عن متناول الأطفال</p>
                </div>
              </div>
              <div class="flex gap-3">
                <SafeIcon name="Flame" :size="20" class="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p class="font-semibold text-sm text-foreground">المواد القابلة للاشتعال</p>
                  <p class="text-xs text-muted-foreground mt-1">ابعده عن المواد القابلة للاشتعال</p>
                </div>
              </div>
              <div class="flex gap-3">
                <SafeIcon name="Eye" :size="20" class="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p class="font-semibold text-sm text-foreground">المراقبة المستمرة</p>
                  <p class="text-xs text-muted-foreground mt-1">لا تترك المنتج المشتعل دون مراقبة</p>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
