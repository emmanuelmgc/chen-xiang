
<script setup lang="ts">
import type { ProductFullModel } from '@/data/products'

interface Props {
  product: ProductFullModel
}

defineProps<Props>()
</script>

<template>
  <div class="mb-12 space-y-6">
    <!-- Product Title -->
    <div>
      <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-2">
        {{ product.name_ar }}
      </h1>
      <p class="text-lg text-muted-foreground">
        {{ product.name_en }}
      </p>
    </div>

    <!-- Description -->
    <div class="prose prose-sm max-w-none">
      <p class="text-base leading-relaxed text-foreground/80">
        {{ product.description_ar }}
      </p>
      <p class="text-sm text-muted-foreground italic mt-4">
        {{ product.description_en }}
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
