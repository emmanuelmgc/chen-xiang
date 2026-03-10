
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

interface BreadcrumbItem {
  label: string
  href?: string
}

interface Props {
  items: BreadcrumbItem[]
}

defineProps<Props>()
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem v-for="(item, index) in items" :key="index">
        <BreadcrumbLink v-if="item.href" :href="item.href">
          {{ item.label }}
        </BreadcrumbLink>
        <BreadcrumbPage v-else>
          {{ item.label }}
        </BreadcrumbPage>
        <BreadcrumbSeparator v-if="index < items.length - 1">
          <SafeIcon name="ChevronLeft" :size="16" class="rtl:rotate-180" />
        </BreadcrumbSeparator>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
