
<script setup lang="ts">
import { onMounted } from 'vue'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'
import { GLOBAL_TRUST_USPS } from '@/data/usps'

const { locale, initLanguage } = useLanguage()

onMounted(() => {
  initLanguage()
})

const getLabel = (item: typeof GLOBAL_TRUST_USPS[0]) => {
  return locale.value === 'ar' ? item.title_ar : item.title_en
}

const getIcon = (item: typeof GLOBAL_TRUST_USPS[0]) => {
  return item.iconName
}
</script>

<template>
  <div class="w-full overflow-x-auto custom-scrollbar">
    <div class="flex md:grid md:grid-cols-5 gap-4 md:gap-6 min-w-max md:min-w-0 px-4 md:px-0">
      <div
        v-for="item in GLOBAL_TRUST_USPS"
        :key="item.id"
        class="flex flex-col items-center justify-center gap-2 min-w-[120px] md:min-w-0 py-4"
      >
        <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
          <SafeIcon :name="getIcon(item)" :size="24" class="text-accent" />
        </div>
        <p class="text-sm font-medium text-foreground text-center">
          {{ getLabel(item) }}
        </p>
      </div>
    </div>
  </div>
</template>
