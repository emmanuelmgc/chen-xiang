
<script setup lang="ts">
import { onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/useLanguage'

const { locale, toggleLocale, initLanguage } = useLanguage()

onMounted(() => {
  initLanguage()
})
</script>

<template>
  <Button
    variant="ghost"
    size="sm"
    @click="toggleLocale"
    class="font-medium"
  >
    {{ locale === 'ar' ? 'EN' : 'عربي' }}
  </Button>
</template>
