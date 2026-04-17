
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
  <section class="relative w-full h-[400px] md:h-[500px] overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <img
        src="https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/a9f5213c-7ed3-4c37-93db-cb4dadf80aaa.png"
        :alt="locale === 'ar' ? 'مزارع العود' : 'Oud Farms'"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Content -->
    <div class="relative h-full flex flex-col items-center justify-center px-4 text-center">
      <div
        class="space-y-4 max-w-3xl"
        :class="(isClient || true) ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'"
      >
        <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
          {{ locale === 'ar' ? 'المصدر والحرفة' : 'Sourcing & Craft' }}
        </h1>
        <p class="text-lg md:text-xl text-white/90">
          {{ locale === 'ar' ? 'رحلة العود من الشجرة إلى طقسك' : 'The journey of Oud from tree to your ritual' }}
        </p>
        <p class="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
          {{ locale === 'ar' ? 'نحن نؤمن بالشفافية الكاملة. تعرف على كيفية اختيارنا لأفضل المواد الخام وتحويلها إلى منتجات استثنائية' : 'We believe in complete transparency. Learn how we source the finest raw materials and transform them into exceptional products' }}
        </p>
      </div>
    </div>
  </section>
</template>
