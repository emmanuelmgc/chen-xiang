
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
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

// Split story into paragraphs based on locale
const storyParagraphs = computed(() => {
  const story = locale.value === 'ar' ? BRAND_STORY_CONTENT.longStory_ar : BRAND_STORY_CONTENT.longStory_en
  // Arabic uses Chinese period 。as separator; English uses \n\n
  const separator = locale.value === 'ar' ? '。' : '\n\n'
  return story.split(separator).filter(p => p.trim())
})
</script>

<template>
  <section class="py-16 md:py-24 px-4 md:px-8 bg-white/50">
    <div class="container mx-auto max-w-3xl">
      <!-- Section Title -->
      <div 
        class="mb-12 transition-all duration-700"
        :class="(isClient || true) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {{ locale === 'ar' ? 'قصتنا الكاملة' : 'Our Full Story' }}
        </h2>
        <div class="w-12 h-1 bg-primary" />
      </div>
      
      <!-- Story Content -->
      <div class="space-y-6 md:space-y-8">
        <p 
          v-for="(paragraph, index) in storyParagraphs"
          :key="index"
          class="text-base md:text-lg text-foreground leading-relaxed transition-all duration-700"
          :class="(isClient || true) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${(index + 1) * 100}ms` }"
        >
          {{ paragraph }}{{ locale === 'ar' ? '。' : '' }}
        </p>
      </div>
      
      <!-- REAL_ASSET_REQUIRED: Sourcing region info cards (no unverified map) -->
      <div class="mt-16 md:mt-20">
        <h3 class="text-2xl font-bold text-foreground mb-6">
          {{ locale === 'ar' ? 'مناطق مصادر العود' : 'Oud Sourcing Regions' }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-xl border border-border/30 bg-card">
            <h4 class="text-lg font-semibold text-foreground mb-2">
              {{ locale === 'ar' ? 'العود الكينام المحلي' : 'Local Qinan Oud' }}
            </h4>
            <p class="text-sm text-muted-foreground">
              {{ locale === 'ar' ? 'مناطق متخصصة معروفة بجودة عالية' : 'Specialized regions known for high quality' }}
            </p>
          </div>
          <div class="p-6 rounded-xl border border-border/30 bg-card">
            <h4 class="text-lg font-semibold text-foreground mb-2">
              {{ locale === 'ar' ? 'جنوب شرق آسيا' : 'Southeast Asia' }}
            </h4>
            <p class="text-sm text-muted-foreground">
              {{ locale === 'ar' ? 'هاينان، فيتنام، قوانغشي' : 'Hainan, Vietnam, Guangxi' }}
            </p>
          </div>
          <div class="p-6 rounded-xl border border-border/30 bg-card">
            <h4 class="text-lg font-semibold text-foreground mb-2">
              {{ locale === 'ar' ? 'عملية التعتيق' : 'Aging Process' }}
            </h4>
            <p class="text-sm text-muted-foreground">
              {{ locale === 'ar' ? 'تعتيق دقيق لضمان الجودة' : 'Careful aging to ensure quality' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
