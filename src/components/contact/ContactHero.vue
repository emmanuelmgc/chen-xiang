
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

const isClient = ref(true)

onMounted(() => {
  initLanguage()
  isClient.value = false
  
  // Trigger animation on next frame
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <section class="relative w-full h-[400px] md:h-[500px] overflow-hidden">
    <!-- Background Image with Overlay -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{
        backgroundImage: 'url(http://image_generate?size=1920x500&query=Modern%20minimalist%20office%20space%20with%20warm%20lighting%20and%20elegant%20wooden%20desk.%20Professional%20business%20environment%20with%20soft%20shadows%20and%20neutral%20tones.)',
        backgroundPosition: 'center'
      }"
    >
      <!-- Dark Overlay (30%) -->
      <div class="absolute inset-0 bg-black/30"></div>
    </div>
    
    <!-- Content -->
    <div class="relative h-full flex items-center justify-center px-4">
      <div 
        class="text-center max-w-2xl transition-all duration-700"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {{ locale === 'ar' ? 'اتصل بنا' : 'Contact Us' }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 mb-6">
          {{ locale === 'ar' ? 'نحن هنا للإجابة على جميع استفساراتك' : "We're here to answer all your inquiries" }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-attachment: fixed;
}

@media (max-width: 768px) {
  section {
    background-attachment: scroll;
  }
}
</style>
