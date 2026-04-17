
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { QUALITY_PROMISE_HIGHLIGHTS } from '@/data/brand_story'
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

const certifications = [
  { icon: 'Shield', label_ar: 'شهادة السلامة المادية', label_en: 'Material Safety Certificate' },
  { icon: 'Leaf', label_ar: 'شهادة الاستدامة', label_en: 'Sustainability Certificate' },
  { icon: 'CheckCircle', label_ar: 'شهادة الجودة', label_en: 'Quality Assurance' },
  { icon: 'Zap', label_ar: 'اختبار الاحتراق', label_en: 'Burn Test Report' },
]
</script>

<template>
  <div class="space-y-12">
    <!-- Main Promise -->
    <div
      class="rounded-2xl border border-border/30 bg-card p-8 md:p-12 transition-all duration-500"
      :class="(isClient || true) ? 'opacity-100' : 'opacity-0'"
    >
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
        {{ locale === 'ar' ? QUALITY_PROMISE_HIGHLIGHTS.title_ar : QUALITY_PROMISE_HIGHLIGHTS.title_en }}
      </h2>
      <p class="text-lg text-foreground leading-relaxed">
        {{ locale === 'ar' ? QUALITY_PROMISE_HIGHLIGHTS.summary_ar : QUALITY_PROMISE_HIGHLIGHTS.summary_en }}
      </p>
    </div>

    <!-- Certifications Grid -->
    <div>
      <h3 class="text-2xl font-bold text-foreground mb-8 text-center">
        {{ locale === 'ar' ? 'الشهادات والاختبارات' : 'Certifications & Tests' }}
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="cert in certifications"
          :key="cert.icon"
          class="flex flex-col items-center text-center p-6 rounded-xl border border-border/30 bg-background hover:shadow-card transition-shadow"
        >
          <div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <SafeIcon :name="cert.icon" :size="32" class="text-accent" />
          </div>
          <h4 class="font-bold text-foreground mb-2">
            {{ locale === 'ar' ? cert.label_ar : cert.label_en }}
          </h4>
        </div>
      </div>
    </div>

    <!-- Compliance Links -->
    <div class="bg-card rounded-xl p-8 border border-border/30">
      <h3 class="text-xl font-bold text-foreground mb-6">
        {{ locale === 'ar' ? 'وثائق الامتثال والشفافية' : 'Compliance & Transparency Documents' }}
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          v-for="link in QUALITY_PROMISE_HIGHLIGHTS.complianceLinks"
          :key="link.url"
          :href="link.url"
          class="flex items-center justify-between p-4 rounded-lg border border-border/30 hover:bg-background transition-colors group"
        >
          <span class="font-medium text-foreground group-hover:text-primary transition-colors">
            {{ locale === 'ar' ? link.title_ar : link.title_en }}
          </span>
          <SafeIcon name="ArrowLeft" :size="20" class="text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      </div>
    </div>
  </div>
</template>
