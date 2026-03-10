
<script setup lang="ts">
import type { CategoryPageModel } from '@/data/products'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  categoryData: CategoryPageModel
  isClient: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="relative w-full h-[400px] md:h-[500px] overflow-hidden">
    <!-- Background Image with Overlay -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url('${categoryData.heroImage}')` }"
    >
      <div class="absolute inset-0 bg-black/30"></div>
    </div>
    
    <!-- Content -->
    <div class="relative h-full flex flex-col items-center justify-center px-4 text-center">
      <div 
        class="space-y-4 max-w-2xl transition-all duration-700"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <!-- Main Title -->
        <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
          {{ categoryData.title_ar }}
        </h1>
        
        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-white/90 font-light">
          {{ categoryData.heroSubtitle_ar }}
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <!-- Primary CTA -->
          <Button 
            size="lg"
            class="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            as="a"
            href="./collections.html"
          >
            استكشف المجموعة
            <SafeIcon name="ArrowLeft" :size="20" class="mr-2" />
          </Button>
          
          <!-- Secondary CTA -->
          <Button 
            size="lg"
            variant="outline"
            class="border-white text-white hover:bg-white/10"
            as="a"
            href="./contact-whatsapp-prefill.html"
          >
            تواصل عبر واتساب
            <SafeIcon name="MessageCircle" :size="20" class="mr-2" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* RTL-aware arrow direction */
:deep([dir="rtl"]) .icon-arrow {
  transform: scaleX(-1);
}
</style>
