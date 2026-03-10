
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
  <section class="py-16 md:py-24 bg-secondary/30">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Main CTA -->
        <div
          class="transition-all duration-700 ease-out mb-8"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
            هل أنت مستعد لاكتشاف الفرق؟
          </h2>
          <p class="text-muted-foreground text-lg mb-8">
            استكشف مجموعتنا الكاملة من منتجات العود منخفضة الدخان والبخور الفاخر
          </p>
        </div>

        <!-- Buttons -->
        <div
          class="transition-all duration-700 ease-out delay-100 flex flex-col sm:flex-row gap-4 justify-center"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <Button
            size="lg"
            class="bg-primary hover:bg-primary/90 text-primary-foreground"
            as="a"
            href="./collections.html"
          >
            استكشف المجموعة
            <SafeIcon name="ArrowLeft" :size="20" class="mr-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            as="a"
            href="./sourcing-craft.html"
          >
            تعرف على المصدر والحرفة
            <SafeIcon name="BookOpen" :size="20" class="mr-2" />
          </Button>
        </div>

        <!-- Secondary CTA -->
        <div
          class="transition-all duration-700 ease-out delay-200 mt-12 pt-12 border-t border-border/30"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <p class="text-muted-foreground text-base mb-6">
            هل لديك أسئلة حول منتجاتنا أو خدماتنا؟
          </p>
          <Button
            size="lg"
            variant="default"
            as="a"
            href="https://wa.me/966500000000?text=مرحباً، أود الاستفسار عن منتجات نفحة"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SafeIcon name="MessageCircle" :size="20" class="mr-2" />
            تواصل عبر واتساب
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
