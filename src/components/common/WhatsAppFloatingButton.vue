
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

interface Props {
  phoneNumber?: string
}

const props = withDefaults(defineProps<Props>(), {
  phoneNumber: '966500000000'
})

const isElevated = ref(false)

const message = computed(() => {
  return locale.value === 'ar' 
    ? 'مرحباً، أود الاستفسار عن منتجاتكم'
    : "Hello, I'd like to inquire about your products"
})

const whatsappUrl = computed(() => {
  return `https://wa.me/${props.phoneNumber}?text=${encodeURIComponent(message.value)}`
})

const ariaLabel = computed(() => {
  return locale.value === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'
})

onMounted(() => {
  initLanguage()
  if (typeof window !== 'undefined') {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      isElevated.value = scrollPosition > documentHeight - 200
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed z-50 transition-all duration-300"
    :class="[
      'bottom-6 left-6',
      isElevated ? 'bottom-24' : 'bottom-6'
    ]"
    :aria-label="ariaLabel"
  >
    <Button
      size="lg"
      class="rounded-full w-14 h-14 shadow-card hover:shadow-lg transition-shadow"
    >
      <SafeIcon name="MessageCircle" :size="24" />
    </Button>
  </a>
</template>
