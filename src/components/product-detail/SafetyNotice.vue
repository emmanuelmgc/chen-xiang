
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
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

interface Props {
  product: ProductFullModel
}

const props = defineProps<Props>()

const safetyTips = [
  { icon: 'Wind', title_ar: 'التهوية الجيدة', title_en: 'Good Ventilation', desc_ar: 'تأكد من وجود تهوية كافية في المكان', desc_en: 'Ensure adequate ventilation in the space' },
  { icon: 'Users', title_ar: 'بعيداً عن الأطفال', title_en: 'Away from Children', desc_ar: 'احفظ المنتج بعيداً عن متناول الأطفال', desc_en: 'Keep product out of reach of children' },
  { icon: 'Flame', title_ar: 'المواد القابلة للاشتعال', title_en: 'Flammable Materials', desc_ar: 'ابعده عن المواد القابلة للاشتعال', desc_en: 'Keep away from flammable materials' },
  { icon: 'Eye', title_ar: 'المراقبة المستمرة', title_en: 'Continuous Monitoring', desc_ar: 'لا تترك المنتج المشتعل دون مراقبة', desc_en: 'Never leave burning product unattended' },
]
</script>

<template>
  <div class="mb-12">
    <Accordion type="single" collapsible class="w-full">
      <AccordionItem value="safety" class="border border-destructive/30 rounded-xl overflow-hidden">
        <AccordionTrigger class="hover:no-underline px-6 py-4 bg-destructive/5">
          <div class="flex items-center gap-3">
            <SafeIcon name="AlertTriangle" :size="20" class="text-destructive" />
            <span class="text-lg font-semibold text-foreground">
              {{ locale === 'ar' ? 'إشعار السلامة والاستخدام' : 'Safety & Usage Notice' }}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent class="px-6 py-4 bg-destructive/2">
          <div class="space-y-4">
            <div class="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <p class="text-sm leading-relaxed text-foreground">
                {{ locale === 'ar' ? product.safetyNotice_ar : product.safetyNotice_en }}
              </p>
            </div>

            <!-- Additional Safety Tips -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(tip, index) in safetyTips" :key="index" class="flex gap-3">
                <SafeIcon :name="tip.icon" :size="20" class="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p class="font-semibold text-sm text-foreground">{{ locale === 'ar' ? tip.title_ar : tip.title_en }}</p>
                  <p class="text-xs text-muted-foreground mt-1">{{ locale === 'ar' ? tip.desc_ar : tip.desc_en }}</p>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
