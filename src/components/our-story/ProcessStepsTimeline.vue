
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PROCESS_STEPS } from '@/data/brand_story'

const isClient = ref(true)

onMounted(() => {
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <section class="py-16 md:py-24 bg-background">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div
          class="transition-all duration-700 ease-out"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
            عملية الحرفة الدقيقة
          </h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
            من اختيار العود المعتق إلى الطقس النهائي: رحلة الجودة والاحترام
          </p>
        </div>
      </div>

      <!-- Timeline Steps -->
      <div class="space-y-12">
        <div
          v-for="(step, index) in PROCESS_STEPS"
          :key="step.step"
          class="transition-all duration-700 ease-out"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          :style="{ transitionDelay: `${(index + 1) * 100}ms` }"
        >
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            :class="{ 'md:grid-flow-dense': index % 2 === 1 }"
          >
            <!-- Image -->
            <div
              class="order-2"
              :class="{ 'md:order-1': index % 2 === 1 }"
            >
              <img
                :src="step.imageUrl"
                :alt="step.title_ar"
                class="w-full h-auto rounded-lg shadow-card"
              />
            </div>

            <!-- Content -->
            <div
              class="order-1"
              :class="{ 'md:order-2': index % 2 === 1 }"
            >
              <!-- Step Number -->
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span class="text-lg font-bold text-primary">{{ step.step }}</span>
                </div>
                <h3 class="text-2xl font-bold text-foreground">
                  {{ step.title_ar }}
                </h3>
              </div>

              <!-- English Title -->
              <p class="text-sm text-muted-foreground font-light mb-4">
                {{ step.title_en }}
              </p>

              <!-- Description -->
              <p class="text-foreground/80 text-base leading-relaxed mb-4">
                {{ step.summary_ar }}
              </p>
              <p class="text-muted-foreground text-sm italic">
                {{ step.summary_en }}
              </p>
            </div>
          </div>

          <!-- Divider (except last) -->
          <div v-if="index < PROCESS_STEPS.length - 1" class="h-px bg-border/30 mt-12"></div>
        </div>
      </div>
    </div>
  </section>
</template>
