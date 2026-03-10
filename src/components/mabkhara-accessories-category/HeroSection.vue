
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { PRODUCT_CATEGORIES } from '@/data/products'

const isClient = ref(true)

const categoryData = PRODUCT_CATEGORIES['mabkhara_accessory']

onMounted(() => {
  isClient.value = false
  
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <section class="relative w-full h-[500px] md:h-[600px] overflow-hidden">
    <!-- Hero Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{
        backgroundImage: `url('${categoryData.heroImage}')`,
        backgroundPosition: 'center'
      }"
    >
      <!-- Dark Overlay (30%) -->
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Hero Content -->
    <div class="relative h-full flex flex-col items-center justify-center px-4 md:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <!-- Main Title -->
        <h1 
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          {{ categoryData.title_ar }}
        </h1>

        <!-- Subtitle -->
        <p 
          class="text-lg md:text-xl text-white/90 mb-8 transition-all duration-700 delay-100"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          {{ categoryData.heroSubtitle_ar }}
        </p>

        <!-- CTA Buttons -->
        <div 
          class="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <Button 
            size="lg" 
            class="bg-primary hover:bg-primary/90 text-white font-semibold"
            as="a"
            href="./mabkhara-accessories-category.html"
          >
            استكشف المجموعة
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            class="border-white text-white hover:bg-white/10 font-semibold"
            as="a"
            href="./help-center.html"
          >
            تعرّف على الاستخدام
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth fade-in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
