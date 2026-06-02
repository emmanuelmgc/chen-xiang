<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

const isClient = ref(false)

onMounted(() => {
  initLanguage()
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <section class="relative w-full py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
    <!-- Decorative background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
      <div class="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
    </div>

    <div class="relative container mx-auto px-4 text-center">
      <div
        class="space-y-4 transition-all duration-700"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <!-- Icon -->
        <div class="flex justify-center mb-6">
          <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <SafeIcon name="CircleHelp" :size="32" class="text-primary" />
          </div>
        </div>

        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          {{ locale === 'ar' ? 'مركز المساعدة' : 'Help Center' }}
        </h1>

        <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {{ locale === 'ar'
            ? 'اعثر على إجابات لأسئلتك حول منتجات العود والبخور من نفحة'
            : 'Find answers to your questions about Nafha\'s Oud and Bakhoor products'
          }}
        </p>

        <p class="text-sm md:text-base text-muted-foreground/70">
          {{ locale === 'ar' ? 'دليلك الشامل للاستخدام الآمن والاستفسارات' : 'Your comprehensive guide to safe use and inquiries' }}
        </p>
      </div>
    </div>
  </section>
</template>
