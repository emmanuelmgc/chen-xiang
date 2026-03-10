
<script setup lang="ts">
import SafeIcon from '@/components/common/SafeIcon.vue'

const trustItems = [
  { icon: 'Wind', label: 'منخفض الدخان', labelEn: 'Low Smoke' },
  { icon: 'RefreshCw', label: '7 أيام للإرجاع', labelEn: '7-Day Returns' },
  { icon: 'Shield', label: 'الدفع الآمن', labelEn: 'Secure Payment' },
  { icon: 'Package', label: 'استبدال الأضرار', labelEn: 'Damage Replacement' },
  { icon: 'MessageCircle', label: 'دعم واتساب', labelEn: 'WhatsApp Support' },
]
</script>

<template>
  <div class="w-full overflow-x-auto custom-scrollbar">
    <div class="flex md:grid md:grid-cols-5 gap-4 md:gap-6 min-w-max md:min-w-0 px-4 md:px-0">
      <div
        v-for="item in trustItems"
        :key="item.label"
        class="flex flex-col items-center justify-center gap-2 min-w-[120px] md:min-w-0 py-4"
      >
        <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
          <SafeIcon :name="item.icon" :size="24" class="text-accent" />
        </div>
        <p class="text-sm font-medium text-foreground text-center">
          {{ item.label }}
        </p>
      </div>
    </div>
  </div>
</template>
