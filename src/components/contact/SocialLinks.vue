
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { CONTACT_INFO } from '@/data/contact_info'

const isClient = ref(true)

onMounted(() => {
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <div class="flex justify-center gap-4 flex-wrap">
    <Button
      v-for="social in CONTACT_INFO.socialMedia"
      :key="social.platform"
      variant="outline"
      size="lg"
      as="a"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="social.platform"
      class="transition-all duration-300"
      :class="isClient ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
    >
      <SafeIcon :name="social.iconName" :size="20" class="mr-2" />
      {{ social.platform }}
    </Button>
  </div>
</template>
