
<script setup lang="ts">
import { PRODUCT_BADGES } from '@/data/products'
import type { BadgeModel } from '@/data/products'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

interface Props {
  badgeId: BadgeModel['id']
}

const props = defineProps<Props>()

const badge = PRODUCT_BADGES[props.badgeId]
</script>

<template>
  <div
    v-if="badge"
    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
    :style="{ backgroundColor: `${badge.color}15`, color: badge.color, borderColor: badge.color }"
    :class="{ 'border': true }"
  >
    <SafeIcon :name="badge.iconName" :size="14" />
    {{ locale === 'ar' ? badge.label_ar : badge.label_en }}
  </div>
</template>
