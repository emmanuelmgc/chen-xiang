
<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'
import { onMounted } from 'vue'

const { locale, initLanguage } = useLanguage()

onMounted(() => {
  initLanguage()
})

interface BreadcrumbItem {
  label_ar: string
  label_en: string
  href?: string
}

interface Props {
  items?: BreadcrumbItem[]
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [
    { label_ar: 'الرئيسية', label_en: 'Home', href: './collections.html' }
  ]
})

const getLabel = (item: BreadcrumbItem) => {
  return locale.value === 'ar' ? item.label_ar : item.label_en
}
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem v-for="(item, index) in items" :key="index">
        <BreadcrumbLink v-if="item.href" :href="item.href">
          {{ getLabel(item) }}
        </BreadcrumbLink>
        <BreadcrumbPage v-else>
          {{ getLabel(item) }}
        </BreadcrumbPage>
        <BreadcrumbSeparator v-if="index < items.length - 1">
          <SafeIcon name="ChevronLeft" :size="16" class="rtl:rotate-180" />
        </BreadcrumbSeparator>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
