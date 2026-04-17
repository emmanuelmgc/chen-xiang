
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
const isClient = ref(true)

onMounted(() => {
  initLanguage()
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <section class="relative w-full h-[500px] md:h-[600px] overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <img
        src="https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/d3648fe4-c40b-4f1a-82ea-d692b0910b73.png"
        :alt="locale === 'ar' ? 'قصة نفحة' : 'NAFHA Story'"
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay (30%) -->
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Content -->
    <div class="relative h-full flex flex-col items-center justify-center px-4 text-center">
      <div
        class="transition-all duration-700 ease-out"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {{ locale === 'ar' ? 'قصتنا' : 'Our Story' }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {{ locale === 'ar' ? 'من الزراعة إلى الطقس: رحلة احترام التراث والحداثة' : 'From cultivation to ritual: A journey of heritage and modernity' }}
        </p>
        <p class="text-base md:text-lg text-white/80 font-light">
          {{ locale === 'ar' ? 'رحلة الاحترام والحرفة والطقس' : 'A journey of respect, craft, and ritual' }}
        </p>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-700"
        :class="isClient ? 'opacity-100' : 'opacity-0'"
      >
        <div class="flex flex-col items-center gap-2">
          <p class="text-sm text-white/70">{{ locale === 'ar' ? 'اكتشف المزيد' : 'Scroll to discover' }}</p>
          <SafeIcon name="ChevronDown" :size="24" class="text-white/70 animate-bounce" />
        </div>
      </div>
    </div>
  </section>
</template>
