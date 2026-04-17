
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
  <section class="py-16 md:py-24 bg-background">
    <div class="container mx-auto px-4">
      <!-- Short Claim -->
      <div class="mb-16 text-center">
        <div
          class="transition-all duration-700 ease-out"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <p class="text-primary text-lg md:text-xl font-semibold mb-4">
            {{ BRAND_STORY_CONTENT.shortClaim_ar }}
          </p>
          <p class="text-muted-foreground text-base md:text-lg">
            {{ BRAND_STORY_CONTENT.shortClaim_en }}
          </p>
        </div>
      </div>

      <!-- Brand Principle -->
      <div class="mb-16 max-w-3xl mx-auto">
        <div
          class="transition-all duration-700 ease-out delay-100"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {{ BRAND_STORY_CONTENT.brandPrinciple_ar }}
          </h2>
          <p class="text-muted-foreground text-base md:text-lg leading-relaxed">
            {{ BRAND_STORY_CONTENT.brandPrinciple_en }}
          </p>
        </div>
      </div>

      <!-- Long Story -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div
          class="transition-all duration-700 ease-out delay-200"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-6">
            رحلتنا من الجذور إلى الطقس
          </h3>
          <p class="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
            {{ BRAND_STORY_CONTENT.longStory_ar }}
          </p>
          <p class="text-muted-foreground text-sm italic">
            {{ BRAND_STORY_CONTENT.longStory_en }}
          </p>
        </div>

        <!-- Image -->
        <div
          class="transition-all duration-700 ease-out delay-300"
          :class="isClient ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
        >
          <img
            :src="BRAND_STORY_CONTENT.sourcingMapImage"
            alt="خريطة المصادر"
            class="w-full h-auto rounded-lg shadow-card"
          />
          <p class="text-sm text-muted-foreground mt-4 text-center">
            {{ BRAND_STORY_CONTENT.sourcingDescription_ar }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
