
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/useLanguage'

const { locale, toggleLocale } = useLanguage()
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
