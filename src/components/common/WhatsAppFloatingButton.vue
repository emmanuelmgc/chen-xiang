
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  phoneNumber?: string
  message?: string
}

const props = withDefaults(defineProps<Props>(), {
  phoneNumber: '966500000000',
  message: 'مرحباً، أود الاستفسار عن منتجاتكم'
})

const isElevated = ref(false)

const whatsappUrl = `https://wa.me/${props.phoneNumber}?text=${encodeURIComponent(props.message)}`

onMounted(() => {
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
    aria-label="تواصل عبر واتساب"
  >
    <Button
      size="lg"
      class="rounded-full w-14 h-14 shadow-card hover:shadow-lg transition-shadow"
    >
      <SafeIcon name="MessageCircle" :size="24" />
    </Button>
  </a>
</template>
