
<script setup lang="ts">
import { ref } from 'vue'
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

const materials = [
  {
    id: 'resin-content',
    title: locale.value === 'ar' ? 'محتوى الراتنج والكثافة' : 'Resin Content & Density',
    titleEn: 'Resin Content & Density',
    content: locale.value === 'ar' ? 'نختار العود بمحتوى راتنجي يتراوح بين 15% و 40%، وهو النطاق المثالي للحصول على توازن بين الرائحة والاحتراق النظيف. نستخدم تقنية الكربنة المنخفضة الحرارة والمواد اللاصقة النباتية لتقليل الدخان بنسبة 60% أثناء الحرق، مما يضمن عدم وجود رائحة قاسية أو بقايا سوداء.' : 'We select Oud with resin content between 15% and 40%, the ideal range for balancing fragrance and clean burning. Using low-temperature charring and plant-based binders, we reduce smoke by 60% during burning, ensuring no harsh odors or black residue.',
  },
  {
    id: 'burning-time',
    title: locale.value === 'ar' ? 'وقت الاحتراق المتحكم فيه' : 'Controlled Burning Time',
    titleEn: 'Controlled Burning Time',
    content: locale.value === 'ar' ? 'من خلال ضبط كثافة العود وتكوين الخيط الأساسي، نحقق أوقات احتراق يمكن التحكم فيها. الأعواد القصيرة تحترق بثبات لمدة 30 دقيقة، بينما الأعواد الطويلة قد تصل إلى ساعتين. هذا يضمن إطلاق الرائحة بشكل متساوٍ ومستمر دون تقلبات.' : 'By adjusting Oud density and core composition, we achieve controlled burning times. Short sticks burn steadily for 30 minutes, while long sticks reach up to 2 hours. This ensures consistent and even fragrance release without fluctuations.',
  },
  {
    id: 'extraction-methods',
    title: locale.value === 'ar' ? 'طرق استخلاص الزيوت العطرية' : 'Essential Oil Extraction Methods',
    titleEn: 'Essential Oil Extraction Methods',
    content: locale.value === 'ar' ? 'نستخدم طريقتين رئيسيتين: الاستخلاص بثاني أكسيد الكربون فوق الحرج (عملية حديثة، درجة حرارة منخفضة، بدون بقايا كيميائية، سعر أقل) والتقطير بالبخار (الطريقة التقليدية، تحافظ على الرائحة الطبيعية، معدل استخراج أقل، سعر أعلى). كلا الطريقتين توفران نقاء عالياً وخصائص عطرية متميزة.' : 'We employ two primary methods: Supercritical CO2 Extraction (modern, low-temperature, no chemical residue, lower cost) and Steam Distillation (traditional, preserves natural aroma, lower yield, higher cost). Both deliver high purity and exceptional aromatic properties.',
  },
  {
    id: 'quality-control',
    title: locale.value === 'ar' ? 'مراقبة الجودة والاختبار' : 'Quality Control & Testing',
    titleEn: 'Quality Control & Testing',
    content: locale.value === 'ar' ? 'كل دفعة من منتجاتنا تخضع لاختبارات صارمة تشمل: اختبار الاحتراق (للتحقق من نقاء الدخان)، اختبار الرائحة (للتأكد من اتساق الخصائص العطرية)، واختبار السلامة (للتحقق من خلو المنتج من المواد الكيميائية الضارة). نحتفظ بسجلات مفصلة لكل دفعة لضمان الشفافية والمساءلة.' : 'Every batch undergoes rigorous testing including: burn tests (smoke purity), aroma tests (aromatic consistency), and safety tests (harmful chemical absence). We maintain detailed batch records for full transparency and accountability.',
  },
]
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
