
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BRAND_STORY_CONTENT } from '@/data/brand_story'

const isClient = ref(true)

onMounted(() => {
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <div class="space-y-8">
    <!-- Map Title -->
    <div class="text-center mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
        مناطق المصدر الرئيسية
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        نختار مواد خامنا من أفضل مناطق زراعة العود في العالم
      </p>
    </div>

    <!-- Map Container -->
    <div
      class="relative w-full rounded-2xl overflow-hidden shadow-card transition-all duration-500"
      :class="(isClient || true) ? 'opacity-100' : 'opacity-0'"
    >
      <img
        :src="BRAND_STORY_CONTENT.sourcingMapImage"
        alt="خريطة مناطق المصدر"
        class="w-full h-auto object-cover"
      />
    </div>

    <!-- Sourcing Details Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <!-- Local Qinan -->
      <div class="p-6 rounded-xl border border-border/30 bg-card hover:shadow-card transition-shadow">
        <h3 class="text-xl font-bold text-foreground mb-3">
          العود الكينام المحلي
        </h3>
        <p class="text-muted-foreground mb-4">
          نستخدم العود الكينام من المناطق المحلية المتخصصة، المعروفة بجودتها العالية وخصائصها العطرية الفريدة
        </p>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li class="flex items-start gap-2">
            <span class="text-accent mt-1">✓</span>
            <span>معايير جودة صارمة</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-accent mt-1">✓</span>
            <span>مزارعون موثوقون</span>
          </li>
        </ul>
      </div>

      <!-- Southeast Asia -->
      <div class="p-6 rounded-xl border border-border/30 bg-card hover:shadow-card transition-shadow">
        <h3 class="text-xl font-bold text-foreground mb-3">
          جنوب شرق آسيا
        </h3>
        <p class="text-muted-foreground mb-4">
          هاينان وفيتنام وقوانغشي توفر بعضاً من أفضل أنواع العود في العالم بخصائص عطرية متميزة
        </p>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li class="flex items-start gap-2">
            <span class="text-accent mt-1">✓</span>
            <span>تراث عريق في الزراعة</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-accent mt-1">✓</span>
            <span>مناخ مثالي للنمو</span>
          </li>
        </ul>
      </div>

      <!-- Aging Process -->
      <div class="p-6 rounded-xl border border-border/30 bg-card hover:shadow-card transition-shadow">
        <h3 class="text-xl font-bold text-foreground mb-3">
          عملية التعتيق
        </h3>
        <p class="text-muted-foreground mb-4">
          جميع مواد خامنا تخضع لعملية تعتيق لا تقل عن 3 سنوات لضمان عمق الرائحة والجودة
        </p>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li class="flex items-start gap-2">
            <span class="text-accent mt-1">✓</span>
            <span>تطور الخصائص العطرية</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-accent mt-1">✓</span>
            <span>تحسن الجودة مع الوقت</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
