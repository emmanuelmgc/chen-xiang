
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BRAND_STORY_CONTENT } from '@/data/brand_story'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
const isClient = ref(true)

onMounted(() => {
  initLanguage()
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})

const sourcingDetails = [
  {
    title_ar: 'العود الكينام المحلي',
    title_en: 'Local Qinan Oud',
    desc_ar: 'نستخدم العود الكينام من المناطق المحلية المتخصصة، المعروفة بجودتها العالية وخصائصها العطرية الفريدة',
    desc_en: 'We use Qinan Oud from specialized local regions, known for high quality and unique aromatic properties',
    points_ar: ['معايير جودة صارمة', 'مزارعون موثوقون'],
    points_en: ['Strict quality standards', 'Trusted farmers'],
  },
  {
    title_ar: 'جنوب شرق آسيا',
    title_en: 'Southeast Asia',
    desc_ar: 'هاينان وفيتنام وقوانغشي توفر بعضاً من أفضل أنواع العود في العالم بخصائص عطرية متميزة',
    desc_en: 'Hainan, Vietnam, and Guangxi provide some of the world\'s finest Oud with distinguished aromatic properties',
    points_ar: ['تراث عريق في الزراعة', 'مناخ مثالي للنمو'],
    points_en: ['Rich farming heritage', 'Ideal climate for growth'],
  },
  {
    title_ar: 'عملية التعتيق',
    title_en: 'Aging Process',
    desc_ar: 'جميع مواد خامنا تخضع لعملية تعتيق لا تقل عن 3 سنوات لضمان عمق الرائحة والجودة',
    desc_en: 'All our raw materials undergo an aging process of at least 3 years to ensure aroma depth and quality',
    points_ar: ['تطور الخصائص العطرية', 'تحسن الجودة مع الوقت'],
    points_en: ['Development of aromatic properties', 'Quality improves with time'],
  },
]
</script>

<template>
  <div class="space-y-8">
    <!-- Map Title -->
    <div class="text-center mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {{ locale === 'ar' ? 'مناطق المصدر الرئيسية' : 'Key Sourcing Regions' }}
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        {{ locale === 'ar' ? 'نختار مواد خامنا من أفضل مناطق زراعة العود في العالم' : 'We source our raw materials from the world\'s finest Oud cultivation regions' }}
      </p>
    </div>

    <!-- Map Container -->
    <div
      class="relative w-full rounded-2xl overflow-hidden shadow-card transition-all duration-500"
      :class="(isClient || true) ? 'opacity-100' : 'opacity-0'"
    >
      <img
        :src="BRAND_STORY_CONTENT.sourcingMapImage"
        :alt="locale === 'ar' ? 'خريطة مناطق المصدر' : 'Sourcing Regions Map'"
        class="w-full h-auto object-cover"
      />
    </div>

    <!-- Sourcing Details Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <div v-for="(detail, index) in sourcingDetails" :key="index" class="p-6 rounded-xl border border-border/30 bg-card hover:shadow-card transition-shadow">
        <h3 class="text-xl font-bold text-foreground mb-3">
          {{ locale === 'ar' ? detail.title_ar : detail.title_en }}
        </h3>
        <p class="text-muted-foreground mb-4">
          {{ locale === 'ar' ? detail.desc_ar : detail.desc_en }}
        </p>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li v-for="(point, pIndex) in (locale === 'ar' ? detail.points_ar : detail.points_en)" :key="pIndex" class="flex items-start gap-2">
            <span class="text-accent mt-1">✓</span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
