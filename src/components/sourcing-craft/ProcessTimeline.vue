
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PROCESS_STEPS } from '@/data/brand_story'
import ProcessStepCard from './ProcessStepCard.vue'

const isClient = ref(true)
const visibleSteps = ref<number[]>([])

onMounted(() => {
  isClient.value = false
  
  // Stagger animation for each step
  PROCESS_STEPS.forEach((_, index) => {
    setTimeout(() => {
      visibleSteps.value.push(index)
    }, index * 150)
  })
  
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <ProcessStepCard
      v-for="(step, index) in PROCESS_STEPS"
      :key="step.step"
      :step="step"
      :is-visible="(isClient || true) && visibleSteps.includes(index)"
    />
  </div>
</template>
