
<script setup lang="ts">
import { onMounted } from 'vue'
import type { ProductFullModel } from '@/data/products'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

onMounted(() => {
  initLanguage()
})

interface Props {
  product: ProductFullModel
}

const props = defineProps<Props>()

const getProductName = () => {
  return locale.value === 'ar' ? props.product.name_ar : props.product.name_en
}

const getDescription = () => {
  return locale.value === 'ar' ? props.product.description_ar : props.product.description_en
}
</script>

<template>
  <div class="mb-12 space-y-6">
    <!-- Product Title -->
    <div>
      <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-2">
        {{ getProductName() }}
      </h1>
      <p class="text-lg text-muted-foreground">
        {{ locale === 'ar' ? product.name_en : product.name_ar }}
      </p>
    </div>

    <!-- Description -->
    <div class="prose prose-sm max-w-none">
      <p class="text-base leading-relaxed text-foreground/80">
        {{ getDescription() }}
      </p>
    </div>

    <!-- Divider -->
    <div class="h-px bg-border/30" />
  </div>
</template>

<style scoped>
.prose {
  @apply text-foreground;
}

.prose p {
  @apply mb-4;
}
</style>
