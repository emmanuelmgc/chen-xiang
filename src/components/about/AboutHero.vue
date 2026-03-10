
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'

const isClient = ref(true)

onMounted(() => {
  isClient.value = false
  
  // Trigger animation on next frame
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <section class="relative w-full h-[500px] md:h-[600px] overflow-hidden">
    <!-- Background Image with Overlay -->
<div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{
        backgroundImage: 'url(http://image_generate?size=1920x1080&query=A%20luxurious%20Middle%20Eastern%20living%20space%20with%20warm%20golden%20light%20illuminating%20burning%20oud%20incense%20and%20traditional%20mabkhara%20brazier%20emitting%20fragrant%20smoke.%20Elegant%20wooden%20furniture%20and%20fine%20textiles%20create%20an%20atmosphere%20of%20refined%20Arabian%20luxury%20and%20timeless%20scent%20ritual.)',
        backgroundAttachment: 'fixed'
      }"
    />
    
    <!-- Dark Overlay (30%) -->
    <div class="absolute inset-0 bg-black/30" />
    
    <!-- Content -->
    <div class="relative h-full flex flex-col items-center justify-center px-4 md:px-8">
      <div 
        class="text-center max-w-2xl transition-all duration-700"
        :class="(isClient || true) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <!-- Main Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          عن نفحة
        </h1>
        
        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-white/90 mb-6 font-light">
          قصة العود، والحرفة، والاحترام
        </p>
        
        <!-- English Tagline -->
        <p class="text-sm md:text-base text-white/80 font-light tracking-wide">
          A clean ritual of Oud
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
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
}
</style>
