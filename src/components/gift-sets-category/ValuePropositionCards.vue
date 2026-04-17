
<script setup lang="ts">
import { PRODUCT_CATEGORIES } from '@/data/products'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

const categoryData = PRODUCT_CATEGORIES['gift_set']

const content = {
  title_ar: 'لماذا تختار مجموعات نفحة للهدايا؟',
  title_en: 'Why Choose Nafha Gift Sets?',
  subtitle_ar: 'كل مجموعة مصممة بعناية لتعكس الذوق الرفيع والاحتفاء بالمناسبات الخاصة',
  subtitle_en: 'Each set is carefully designed to reflect refined taste and celebrate special occasions',
}
</script>

<template>
  <div class="space-y-8">
    <!-- Section Title -->
    <div class="text-center space-y-2">
      <h2 class="text-3xl md:text-4xl font-bold text-foreground">
        {{ locale === 'ar' ? content.title_ar : content.title_en }}
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        {{ locale === 'ar' ? content.subtitle_ar : content.subtitle_en }}
      </p>
    </div>
    
    <!-- USP Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="usp in categoryData.usps"
        :key="usp.title_ar"
        class="p-6 rounded-lg border border-border/30 bg-card hover:shadow-card transition-all duration-300 hover:border-primary/30"
      >
        <div class="flex flex-col items-center text-center gap-4">
          <!-- Icon -->
          <div class="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
            <SafeIcon :name="usp.iconName" :size="28" class="text-accent" />
          </div>
          
          <!-- Title -->
          <h3 class="text-lg font-bold text-foreground">
            {{ locale === 'ar' ? usp.title_ar : usp.title_en }}
          </h3>
          
          <!-- Description -->
          <p class="text-sm text-muted-foreground">
            {{ locale === 'ar' ? usp.description_ar : usp.description_en }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
