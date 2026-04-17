
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { CONTACT_INFO } from '@/data/contact_info'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

interface Props {
  type: 'whatsapp' | 'phone' | 'email'
  title: string
  subtitle: string
  description: string
}

const props = defineProps<Props>()

const isClient = ref(true)
const isHovered = ref(false)

onMounted(() => {
  initLanguage()
  isClient.value = false
  requestAnimationFrame(() => {
    isClient.value = true
  })
})

const getIcon = () => {
  switch (props.type) {
    case 'whatsapp':
      return 'MessageCircle'
    case 'phone':
      return 'Phone'
    case 'email':
      return 'Mail'
    default:
      return 'Circle'
  }
}

const getContactValue = () => {
  switch (props.type) {
    case 'whatsapp':
      return CONTACT_INFO.whatsappNumber
    case 'phone':
      return CONTACT_INFO.phoneNumber
    case 'email':
      return CONTACT_INFO.email
    default:
      return ''
  }
}

const getContactHref = () => {
  switch (props.type) {
    case 'whatsapp':
      return `https://wa.me/${CONTACT_INFO.whatsappNumber}`
    case 'phone':
      return `tel:${CONTACT_INFO.phoneNumber}`
    case 'email':
      return `mailto:${CONTACT_INFO.email}`
    default:
      return '#'
  }
}

const getButtonLabel = () => {
  if (locale.value === 'ar') {
    switch (props.type) {
      case 'whatsapp':
        return 'تواصل الآن'
      case 'phone':
        return 'اتصل بنا'
      case 'email':
        return 'أرسل بريداً'
      default:
        return 'تواصل'
    }
  } else {
    switch (props.type) {
      case 'whatsapp':
        return 'Chat Now'
      case 'phone':
        return 'Call Us'
      case 'email':
        return 'Send Email'
      default:
        return 'Contact'
    }
  }
}
</script>

<template>
  <div 
    class="group relative p-6 md:p-8 rounded-lg border border-border/30 bg-card hover:shadow-card transition-all duration-300"
    :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Icon Container -->
    <div 
      class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 transition-all duration-300"
      :class="isHovered ? 'bg-accent/20 scale-110' : ''"
    >
      <SafeIcon :name="getIcon()" :size="32" class="text-accent" />
    </div>
    
    <!-- Content -->
    <h3 class="text-xl font-bold text-foreground mb-1">
      {{ title }}
    </h3>
    <p class="text-sm text-accent font-medium mb-3">
      {{ subtitle }}
    </p>
    <p class="text-sm text-muted-foreground mb-6">
      {{ description }}
    </p>
    
    <!-- Contact Value -->
    <p class="text-base font-medium text-foreground mb-6 break-all">
      {{ getContactValue() }}
    </p>
    
    <!-- CTA Button -->
    <Button 
      as="a"
      :href="getContactHref()"
      :target="type === 'whatsapp' ? '_blank' : undefined"
      :rel="type === 'whatsapp' ? 'noopener noreferrer' : undefined"
      class="w-full"
    >
      {{ getButtonLabel() }}
    </Button>
  </div>
</template>
