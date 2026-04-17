
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { ProductFullModel } from '@/data/products'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

interface Props {
  product: ProductFullModel
}

const props = defineProps<Props>()

const isVisible = ref(false)

onMounted(() => {
  initLanguage()
  if (typeof window !== 'undefined') {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      isVisible.value = scrollPosition > 300
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }
})

const getProductName = () => {
  return locale.value === 'ar' ? props.product.name_ar : props.product.name_en
}

const getPriceRange = () => {
  return locale.value === 'ar' ? props.product.priceRange_ar : props.product.priceRange_en
}

const getWhatsAppUrl = () => {
  return locale.value === 'ar' ? props.product.whatsappInquiryUrl_ar : props.product.whatsappInquiryUrl_en
}
</script>

<template>
  <div
    v-if="isVisible"
    class="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border/30 shadow-card animate-fade-in-up"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between gap-4">
        <div class="flex-1">
          <p class="text-sm text-muted-foreground">{{ getProductName() }}</p>
          <p class="font-bold text-foreground">{{ getPriceRange() }}</p>
        </div>
        <div class="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            as="a"
            href="./product-catalog-download.html"
          >
            <SafeIcon name="Download" :size="16" class="ml-1" />
            {{ locale === 'ar' ? 'تحميل' : 'Download' }}
          </Button>
          <Button
            size="sm"
            as="a"
            :href="getWhatsAppUrl()"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SafeIcon name="MessageCircle" :size="16" class="ml-1" />
            {{ locale === 'ar' ? 'واتساب' : 'WhatsApp' }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out;
}
</style>
