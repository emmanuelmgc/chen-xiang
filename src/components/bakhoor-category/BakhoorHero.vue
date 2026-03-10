
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { PRODUCT_CATEGORIES } from '@/data/products'

const isClient = ref(true)
const categoryData = PRODUCT_CATEGORIES['bakhoor']

onMounted(() => {
  isClient.value = false
  
  // Trigger animation on next frame
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <section class="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
    <!-- Hero Background Image with Overlay -->
    <div class="absolute inset-0">
      <img
        :src="categoryData.heroImage"
        alt="البخور والعود"
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay (30%) -->
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Hero Content -->
    <div class="relative h-full flex flex-col items-center justify-center px-4 text-center">
      <!-- Main Title -->
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        البخور ورقائق العود
      </h1>

      <!-- Subtitle -->
      <p
        class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl transition-all duration-700 delay-100"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        {{ categoryData.heroSubtitle_ar }}
      </p>

      <!-- English Subtitle -->
      <p
        class="text-sm md:text-base text-white/70 mb-8 transition-all duration-700 delay-200"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        {{ categoryData.heroSubtitle_en }}
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <!-- Primary CTA -->
        <Button
          size="lg"
          class="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          as="a"
          href="#products"
        >
          تسوق الآن
          <SafeIcon name="ShoppingBag" :size="20" class="mr-2" />
        </Button>

        <!-- Secondary CTA -->
        <Button
          size="lg"
          variant="outline"
          class="border-white text-white hover:bg-white/10"
          as="a"
          href="./gift-sets-category.html"
        >
          استكشف الهدايا
          <SafeIcon name="Gift" :size="20" class="mr-2" />
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* RTL-aware animations */
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
