
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

// Split story into paragraphs for better readability
const storyParagraphs = BRAND_STORY_CONTENT.longStory_ar.split('。').filter(p => p.trim())
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
          قصتنا الكاملة
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
          {{ paragraph }}。
        </p>
      </div>
      
      <!-- Sourcing Image & Description -->
      <div 
        class="mt-16 md:mt-20 transition-all duration-700"
        :class="(isClient || true) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="rounded-lg overflow-hidden shadow-card mb-6">
          <img 
            :src="BRAND_STORY_CONTENT.sourcingMapImage"
            alt="خريطة مصادر العود"
            class="w-full h-auto object-cover"
          />
        </div>
        <p class="text-base md:text-lg text-foreground leading-relaxed">
          {{ BRAND_STORY_CONTENT.sourcingDescription_ar }}
        </p>
      </div>
    </div>
  </section>
</template>
