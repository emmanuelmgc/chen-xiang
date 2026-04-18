
<script setup lang="ts">
import { onMounted } from 'vue'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

onMounted(() => {
  initLanguage()
})

const trustItems = [
  { icon: 'Wind', label_ar: 'منخفض الدخان', label_en: 'Low Smoke' },
  { icon: 'RefreshCw', label_ar: '7 أيام للإرجاع', label_en: '7-Day Returns' },
  { icon: 'Shield', label_ar: 'الدفع الآمن', label_en: 'Secure Payment' },
  { icon: 'Package', label_ar: 'استبدال الأضرار', label_en: 'Damage Replacement' },
  { icon: 'MessageCircle', label_ar: 'دعم واتساب', label_en: 'WhatsApp Support' },
]

const getLabel = (item: typeof trustItems[0]) => {
  return locale.value === 'ar' ? item.label_ar : item.label_en
}
</script>

<template>
  <div class="w-full overflow-x-auto custom-scrollbar">
    <div class="flex md:grid md:grid-cols-5 gap-4 md:gap-6 min-w-max md:min-w-0 px-4 md:px-0">
      <div
        v-for="item in trustItems"
        :key="item.icon"
        class="flex flex-col items-center justify-center gap-2 min-w-[120px] md:min-w-0 py-4"
      >
        <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
          <SafeIcon :name="item.icon" :size="24" class="text-accent" />
        </div>
        <p class="text-sm font-medium text-foreground text-center">
          {{ getLabel(item) }}
        </p>
      </div>
    </div>
  </div>
</template>
