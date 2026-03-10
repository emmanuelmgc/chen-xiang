
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { GLOBAL_TRUST_USPS } from '@/data/usps'

const isClient = ref(true)

onMounted(() => {
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <div class="w-full overflow-x-auto custom-scrollbar">
    <div class="flex md:grid md:grid-cols-5 gap-4 md:gap-6 min-w-max md:min-w-0 px-4 md:px-0">
      <div
        v-for="item in GLOBAL_TRUST_USPS"
        :key="item.id"
        class="flex flex-col items-center justify-center gap-2 min-w-[120px] md:min-w-0 py-4 transition-all duration-300"
        :class="isClient ? 'opacity-100 scale-100' : 'opacity-75 scale-95'"
      >
        <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
          <SafeIcon :name="item.iconName" :size="24" class="text-accent" />
        </div>
        <p class="text-sm font-medium text-foreground text-center">
          {{ item.title_ar }}
        </p>
      </div>
    </div>
  </div>
</template>
