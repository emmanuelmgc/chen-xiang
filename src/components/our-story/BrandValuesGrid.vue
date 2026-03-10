
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BRAND_VALUES } from '@/data/brand_story'
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
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div
          class="transition-all duration-700 ease-out"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
            قيمنا الأساسية
          </h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
            ثلاث ركائز تحدد هويتنا وتوجه كل قراراتنا
          </p>
        </div>
      </div>

      <!-- Values Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(value, index) in BRAND_VALUES"
          :key="index"
          class="transition-all duration-700 ease-out rounded-lg border border-border/30 bg-background p-8 hover:shadow-card hover:border-primary/30"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          :style="{ transitionDelay: `${(index + 1) * 100}ms` }"
        >
          <!-- Icon -->
          <div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
            <SafeIcon :name="value.iconName" :size="32" class="text-accent" />
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-foreground mb-3">
            {{ value.title_ar }}
          </h3>
          <p class="text-sm text-muted-foreground mb-4 font-light">
            {{ value.title_en }}
          </p>

          <!-- Description -->
          <p class="text-foreground/80 text-base leading-relaxed mb-4">
            {{ value.description_ar }}
          </p>
          <p class="text-muted-foreground text-sm italic">
            {{ value.description_en }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
