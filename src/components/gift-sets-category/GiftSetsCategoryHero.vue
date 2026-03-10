
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { PRODUCT_CATEGORIES } from '@/data/products'

const isClient = ref(true)
const categoryData = PRODUCT_CATEGORIES['gift_set']

onMounted(() => {
  isClient.value = false
  
  // Trigger animation on next frame
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <section class="relative w-full h-[400px] md:h-[500px] overflow-hidden">
    <!-- Hero Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url('${categoryData.heroImage}')` }"
    >
      <!-- Dark Overlay (30%) -->
      <div class="absolute inset-0 bg-black/30"></div>
    </div>
    
    <!-- Content -->
    <div class="relative h-full flex flex-col items-center justify-center px-4 text-center">
      <!-- Title & Subtitle with Animation -->
      <div 
        class="space-y-4 transition-all duration-700"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {{ categoryData.title_ar }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          {{ categoryData.heroSubtitle_ar }}
        </p>
        <p class="text-sm md:text-base text-white/70">
          {{ categoryData.title_en }}
        </p>
      </div>
      
      <!-- CTA Buttons -->
      <div 
        class="flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-700 delay-200"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <Button 
          size="lg" 
          class="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          as="a"
          href="./gift-sets-category.html#products"
        >
          استكشف المجموعات
          <SafeIcon name="ArrowLeft" :size="20" class="mr-2" />
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          class="border-white text-white hover:bg-white/10"
          as="a"
          href="./b2b-hotels-venues.html"
        >
          طلب مخصص للشركات
          <SafeIcon name="Gift" :size="20" class="mr-2" />
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth fade-in animation for hero content */
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
