
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
  <section class="py-16 md:py-24 px-4 md:px-8 bg-white/50">
    <div class="container mx-auto max-w-3xl">
      <div 
        class="text-center transition-all duration-700"
        :class="(isClient || true) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <!-- Title -->
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
          استكشف رحلتنا بعمق أكثر
        </h2>
        
        <!-- Description -->
        <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
          تعرّف على كيفية اختيارنا للمواد الخام، وعمليات الإنتاج الدقيقة، والالتزام بالجودة والشفافية
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <!-- Primary CTA: Learn Sourcing -->
          <Button 
            as="a"
            href="./sourcing-craft.html"
            size="lg"
            class="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <SafeIcon name="Leaf" :size="20" class="ml-2" />
            تعرّف على المصدر والحرفة
          </Button>
          
          <!-- Secondary CTA: Quality Promise -->
          <Button 
            as="a"
            href="./quality-promise.html"
            variant="outline"
            size="lg"
            class="border-primary text-primary hover:bg-primary/5"
          >
            <SafeIcon name="CheckCircle" :size="20" class="ml-2" />
            وعد الجودة
          </Button>
        </div>
        
        <!-- Divider -->
        <div class="my-8 md:my-12 border-t border-border/30" />
        
        <!-- Secondary CTA: Explore Products -->
        <div>
          <p class="text-base text-muted-foreground mb-4">
            جاهز لاستكشاف منتجاتنا؟
          </p>
          <Button 
            as="a"
            href="./collections.html"
            size="lg"
            class="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <SafeIcon name="ShoppingBag" :size="20" class="ml-2" />
            استكشف المجموعة
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
