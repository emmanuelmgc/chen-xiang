
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'

const isClient = ref(true)

onMounted(() => {
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
        src="https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/2e7297be-4a3c-4f3a-bd52-c7a15da1a42e.png"
        alt="مجموعات العود والبخور الفاخرة"
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay (30%) -->
      <div class="absolute inset-0 bg-black/30" />
    </div>

    <!-- Content -->
    <div class="relative h-full flex flex-col items-center justify-center px-4 text-center">
      <!-- Animated Title -->
      <div
        class="space-y-4 mb-8 transition-all duration-700"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          استكشف مجموعات نفحة
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          تجربة عطرية فاخرة من الأعود والبخور المختارة بعناية
        </p>
        <p class="text-sm md:text-base text-white/70">
          A Clean Ritual of Oud
        </p>
      </div>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-100"
        :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <Button
          size="lg"
          class="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8"
          as="a"
          href="./incense-sticks-category.html"
        >
          استكشف المجموعة
          <SafeIcon name="ArrowLeft" :size="20" class="mr-2" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          class="border-white text-white hover:bg-white/10 font-bold px-8"
          as="a"
          href="./gift-sets-category.html"
        >
          الهدايا الفاخرة
          <SafeIcon name="Gift" :size="20" class="mr-2" />
        </Button>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"
      :class="isClient ? 'opacity-100' : 'opacity-0'"
    >
      <SafeIcon name="ChevronDown" :size="24" class="text-white" />
    </div>
  </section>
</template>

<style scoped>
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

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
</style>
