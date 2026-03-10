
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
  <section class="py-16 md:py-24 px-4 md:px-8 bg-background">
    <div class="container mx-auto max-w-3xl">
      <div 
        class="text-center transition-all duration-700"
        :class="(isClient || true) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <!-- Arabic Claim -->
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {{ BRAND_STORY_CONTENT.shortClaim_ar }}
        </h2>
        
        <!-- English Claim -->
        <p class="text-lg md:text-xl text-muted-foreground font-light mb-8">
          {{ BRAND_STORY_CONTENT.shortClaim_en }}
        </p>
        
        <!-- Divider -->
        <div class="w-12 h-1 bg-primary mx-auto mb-8" />
        
        <!-- Brand Principle -->
        <p class="text-base md:text-lg text-foreground leading-relaxed">
          {{ BRAND_STORY_CONTENT.brandPrinciple_ar }}
        </p>
      </div>
    </div>
  </section>
</template>
