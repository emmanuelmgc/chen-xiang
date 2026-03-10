
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BRAND_VALUES } from '@/data/brand_story'
import ValueCard from '@/components/about/ValueCard.vue'

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
    <div class="container mx-auto">
      <!-- Section Title -->
      <div 
        class="text-center mb-12 md:mb-16 transition-all duration-700"
        :class="(isClient || true) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
          قيمنا الأساسية
        </h2>
        <p class="text-lg text-muted-foreground">
          ثلاث ركائز تحدد هويتنا وتوجه كل قراراتنا
        </p>
      </div>
      
      <!-- Values Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(value, index) in BRAND_VALUES"
          :key="index"
          class="transition-all duration-700"
          :class="(isClient || true) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${(index + 1) * 150}ms` }"
        >
          <ValueCard :value="value" />
        </div>
      </div>
    </div>
  </section>
</template>
