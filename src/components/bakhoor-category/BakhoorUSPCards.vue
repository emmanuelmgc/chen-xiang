
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { PRODUCT_CATEGORIES } from '@/data/products'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

const isClient = ref(true)
const categoryData = PRODUCT_CATEGORIES['bakhoor']

onMounted(() => {
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})

const content = {
  title_ar: 'لماذا تختار بخورنا؟',
  title_en: 'Why Choose Our Bakhoor?',
  subtitle_ar: 'مزيج من الجودة والتقليد والابتكار لتجربة عطرية لا تُنسى',
  subtitle_en: 'A blend of quality, tradition, and innovation for an unforgettable aromatic experience',
}

const uspDescriptions = {
  electric_ar: 'رقائق عود مختارة بعناية لتحقيق أفضل أداء مع المباخر الكهربائية، مع توزيع حرارة متساوٍ وانتشار رائحة ثابت.',
  electric_en: 'Carefully selected oud chips for optimal performance with electric mabkharas, with even heat distribution and consistent fragrance diffusion.',
  luxury_ar: 'نختار أفضل درجات العود من مصادر موثوقة، مما يضمن جودة عالية وتجربة عطرية غنية ومعقدة.',
  luxury_en: 'We select the finest grades of oud from trusted sources, ensuring high quality and a rich, complex aromatic experience.',
  rich_ar: 'كل دفعة من البخور تتميز برائحة متعددة الطبقات تتطور مع الوقت، مما يخلق تجربة حسية متكاملة.',
  rich_en: 'Each batch of bakhoor features a multi-layered fragrance that evolves over time, creating a complete sensory experience.',
  default_ar: 'تجربة عطرية فريدة من نوعها',
  default_en: 'A unique aromatic experience',
}
</script>

<template>
  <section class="py-12 md:py-16 lg:py-20 bg-background">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {{ locale === 'ar' ? content.title_ar : content.title_en }}
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          {{ locale === 'ar' ? content.subtitle_ar : content.subtitle_en }}
        </p>
      </div>

      <!-- USP Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(usp, index) in categoryData.usps"
          :key="usp.title_ar"
          class="group relative p-6 md:p-8 rounded-2xl border border-border/30 bg-card hover:shadow-card transition-all duration-300"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: isClient ? `${index * 100}ms` : '0ms' }"
        >
          <!-- Icon Container -->
          <div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
            <SafeIcon :name="usp.iconName" :size="32" class="text-accent" />
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-foreground mb-3">
            {{ locale === 'ar' ? usp.title_ar : usp.title_en }}
          </h3>

          <!-- Description -->
          <p class="text-sm text-muted-foreground leading-relaxed">
            {{ locale === 'ar' ? usp.description_ar : usp.description_en }}
          </p>

          <!-- Hover Border Animation -->
          <div class="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300 pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Stagger animation for cards */
div[style*="transitionDelay"] {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
</style>
