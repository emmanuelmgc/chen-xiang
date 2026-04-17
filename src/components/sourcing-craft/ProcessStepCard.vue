
<script setup lang="ts">
import type { StoryProcessStepModel } from '@/data/brand_story'

interface Props {
  step: StoryProcessStepModel
  isVisible?: boolean
}

withDefaults(defineProps<Props>(), {
  isVisible: true
})
</script>

<template>
  <div
    class="rounded-xl overflow-hidden border border-border/30 bg-card shadow-soft hover:shadow-card transition-all duration-500"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <!-- Step Image -->
    <div class="relative h-64 overflow-hidden bg-muted">
      <img
        :src="step.imageUrl"
        :alt="step.title_ar"
        class="w-full h-full object-cover hover-scale"
      />
      <!-- Step Number Badge -->
      <div class="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
        {{ step.step }}
      </div>
    </div>

    <!-- Step Content -->
    <div class="p-6 md:p-8">
      <h3 class="text-2xl font-bold text-foreground mb-3">
        {{ step.title_ar }}
      </h3>
      <p class="text-sm text-muted-foreground mb-4">
        {{ step.title_en }}
      </p>
      <p class="text-base text-foreground leading-relaxed">
        {{ step.summary_ar }}
      </p>
      <p class="text-sm text-muted-foreground mt-4 italic">
        {{ step.summary_en }}
      </p>
    </div>
  </div>
</template>
