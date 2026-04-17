
<script setup lang="ts">
import { B2B_SERVICE_PACKAGES } from '@/data/b2b_content'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

const packages = B2B_SERVICE_PACKAGES

const packageHighlights = {
  basic: false,
  standard: false,
  tailored: true,
}

const labels = {
  recommended_ar: 'الأكثر شيوعاً',
  recommended_en: 'Most Popular',
  ctaBtn_ar: 'اختر هذه الباقة',
  ctaBtn_en: 'Choose This Package',
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card
      v-for="pkg in packages"
      :key="pkg.id"
      class="border border-border/30 relative overflow-hidden transition-all duration-300"
      :class="packageHighlights[pkg.id as keyof typeof packageHighlights]
        ? 'ring-2 ring-primary shadow-card md:scale-105'
        : 'hover:shadow-card hover:border-primary/30'"
    >
      <!-- Recommended Badge -->
      <div v-if="packageHighlights[pkg.id as keyof typeof packageHighlights]" class="absolute top-4 right-4">
        <Badge class="bg-primary text-primary-foreground">
          {{ locale === 'ar' ? labels.recommended_ar : labels.recommended_en }}
        </Badge>
      </div>
      
      <CardHeader class="pt-8">
        <CardTitle class="text-2xl text-foreground">
          {{ locale === 'ar' ? pkg.name_ar : pkg.name_en }}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <ul class="space-y-3">
          <li
            v-for="(deliverable, index) in (locale === 'ar' ? pkg.deliverables_ar : pkg.deliverables_en)"
            :key="index"
            class="flex items-start gap-3"
          >
            <SafeIcon name="Check" :size="20" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-muted-foreground">{{ deliverable }}</span>
          </li>
        </ul>
        
        <!-- CTA Button -->
        <button
          class="w-full mt-8 py-3 px-4 rounded-lg font-bold transition-all duration-300"
          :class="packageHighlights[pkg.id as keyof typeof packageHighlights]
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'bg-secondary text-foreground hover:bg-secondary/80'"
        >
          {{ locale === 'ar' ? labels.ctaBtn_ar : labels.ctaBtn_en }}
        </button>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
/* Package card hover effect */
:deep(.card) {
  transition: all 0.3s ease;
}

:deep(.card:hover) {
  transform: translateY(-4px);
}

/* Recommended package scale effect */
@media (min-width: 768px) {
  :deep(.card.ring-2) {
    transform: scale(1.05);
  }
}
</style>
