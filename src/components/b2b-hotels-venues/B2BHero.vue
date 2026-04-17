
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { B2B_HERO_CONTENT } from '@/data/b2b_content'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

const isClient = ref(true)
const isVisible = ref(true)

onMounted(() => {
  initLanguage()
  isClient.value = false
  
  requestAnimationFrame(() => {
    isClient.value = true
  })
})

const getTitle = () => {
  return locale.value === 'ar' ? B2B_HERO_CONTENT.title_ar : B2B_HERO_CONTENT.title_en
}

const getSubtitle = () => {
  return locale.value === 'ar' ? B2B_HERO_CONTENT.subtitle_ar : B2B_HERO_CONTENT.subtitle_en
}

function scrollToForm() {
  const formElement = document.getElementById('b2b-inquiry-form')
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' })
  }
}

function navigateToWhatsApp() {
  const message = locale.value === 'ar' 
    ? 'مرحباً NAFHA، أود الاستفسار عن خدمات B2B'
    : "Hello NAFHA, I'd like to inquire about B2B services"
  window.open(`https://wa.me/966500000000?text=${encodeURIComponent(message)}`, '_blank')
}
</script>

<template>
  <section class="relative w-full h-[500px] md:h-[600px] overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <img
        :src="B2B_HERO_CONTENT.heroImage"
        alt="B2B Hero"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>
    
    <!-- Content -->
    <div class="relative h-full flex items-center justify-center">
      <div class="container mx-auto px-4 text-center text-white">
        <!-- Animated Title -->
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          {{ getTitle() }}
        </h1>
        
        <!-- Animated Subtitle -->
        <p
          class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-100"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          {{ getSubtitle() }}
        </p>
        
        <!-- CTA Buttons -->
        <div
          class="flex flex-col md:flex-row gap-4 justify-center transition-all duration-700 delay-200"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <Button
            size="lg"
            class="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            @click="scrollToForm"
          >
            {{ locale === 'ar' ? 'اطلب عرض سعر' : 'Request Quote' }}
          </Button>
          <Button
            size="lg"
            variant="outline"
            class="border-white text-white hover:bg-white/10"
            @click="navigateToWhatsApp"
          >
            {{ locale === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp' }}
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth fade-in animations */
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
