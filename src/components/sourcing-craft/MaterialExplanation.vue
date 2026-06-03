
<script setup lang="ts">
import { computed } from 'vue'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

const materials = computed(() => [
  {
    id: 'resin-content',
    title: locale.value === 'ar' ? 'محتوى الراتنج والكثافة' : 'Resin Content & Density',
    titleEn: 'Resin Content & Density',
    // OWNER_CONFIRMATION_REQUIRED: "60% smoke reduction" specific claim needs verification
    content: locale.value === 'ar' ? 'نختار العود بمحتوى راتنجي يحقق توازناً مثالياً بين الرائحة والاحتراق النظيف. نستخدم تقنية الكربنة المنخفضة الحرارة والمواد اللاصقة النباتية للمساعدة في تقليل الدخان أثناء الحرق، مما يضمن تجربة احتراق نظيفة وهادئة.' : 'We select Oud with resin content that achieves an ideal balance between fragrance and clean burning. Using low-temperature charring and plant-based binders, we help reduce smoke during burning, ensuring a clean and pleasant experience.',
  },
  {
    id: 'burning-time',
    title: locale.value === 'ar' ? 'وقت الاحتراق المتحكم فيه' : 'Controlled Burning Time',
    titleEn: 'Controlled Burning Time',
    // OWNER_CONFIRMATION_REQUIRED: specific burn time minutes need product data confirmation
    content: locale.value === 'ar' ? 'من خلال ضبط كثافة العود وتكوين الخيط الأساسي، نحقق احتراقاً ثابتاً ومتحكماً فيه. يضمن ذلك إطلاق الرائحة بشكل متساوٍ ومستمر طوال فترة الاحتراق.' : 'By adjusting Oud density and core composition, we achieve a stable, controlled burn. This ensures consistent and even fragrance release throughout the burning duration.',
  },
  {
    id: 'extraction-methods',
    title: locale.value === 'ar' ? 'طرق استخلاص الزيوت العطرية' : 'Essential Oil Extraction Methods',
    titleEn: 'Essential Oil Extraction Methods',
    // OWNER_CONFIRMATION_REQUIRED: Supercritical CO₂ extraction claim needs verification
    content: locale.value === 'ar' ? 'نحن نولي اهتماماً بالغاً لمعالجة المواد الخام بطرق تحافظ على جودتها العطرية وتضمن نقاءها. نسعى إلى تحقيق أعلى معايير الجودة في كل مرحلة من مراحل الإنتاج.' : 'We pay careful attention to processing raw materials in ways that preserve their aromatic quality and ensure purity. We aim for the highest quality standards at every stage of production.',
  },
  {
    id: 'quality-control',
    title: locale.value === 'ar' ? 'مراقبة الجودة' : 'Quality Control',
    titleEn: 'Quality Control',
    // OWNER_CONFIRMATION_REQUIRED: "rigorous testing" and "harmful chemicals" claims need verification
    content: locale.value === 'ar' ? 'نولي اهتماماً كبيراً بجودة الاحتراق واتساق الخصائص العطرية وسلامة المنتج. نسعى للحفاظ على معايير ثابتة في كل دفعة.' : 'We pay close attention to burn performance, aromatic consistency, and product safety. We work to maintain consistent standards across every batch.',
  },
])
</script>

<template>
  <div class="space-y-8">
    <!-- Section Title -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {{ locale === 'ar' ? 'شرح المواد والعمليات' : 'Materials & Processes Explained' }}
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        {{ locale === 'ar' ? 'فهم عميق لكل جانب من جوانب إنتاجنا' : 'An in-depth understanding of every aspect of our production' }}
      </p>
    </div>

    <!-- Accordion -->
    <Accordion type="single" collapsible class="w-full space-y-4">
      <AccordionItem
        v-for="material in materials"
        :key="material.id"
        :value="material.id"
        class="border border-border/30 rounded-xl px-6 overflow-hidden"
      >
        <AccordionTrigger class="hover:no-underline py-6">
          <div class="flex items-start gap-4 text-right flex-1">
            <div class="flex-1">
              <h3 class="text-lg font-bold text-foreground text-right">
                {{ material.title }}
              </h3>
              <p class="text-sm text-muted-foreground text-right mt-1">
                {{ material.titleEn }}
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent class="pb-6 pt-0">
          <p class="text-base text-foreground leading-relaxed">
            {{ material.content }}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
