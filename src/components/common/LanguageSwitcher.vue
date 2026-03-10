
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'

const currentLang = ref<'ar' | 'en'>('ar')

onMounted(() => {
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('preferred-lang') as 'ar' | 'en' | null
    if (savedLang) {
      currentLang.value = savedLang
      updateDocumentLang(savedLang)
    }
  }
})

function toggleLanguage() {
  const newLang = currentLang.value === 'ar' ? 'en' : 'ar'
  currentLang.value = newLang
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-lang', newLang)
    updateDocumentLang(newLang)
  }
}

function updateDocumentLang(lang: 'ar' | 'en') {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', lang === 'ar' ? 'ar-SA' : 'en')
  }
}
</script>

<template>
  <Button
    variant="ghost"
    size="sm"
    @click="toggleLanguage"
    class="font-medium"
  >
    {{ currentLang === 'ar' ? 'EN' : 'ع' }}
  </Button>
</template>
