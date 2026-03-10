
<script setup lang="ts">
import type { ProductFullModel } from '@/data/products'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  product: ProductFullModel
}

defineProps<Props>()
</script>

<template>
  <div class="mb-12">
    <h2 class="text-2xl font-bold text-foreground mb-8">كيفية الاستخدام</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="step in product.howToUse"
        :key="step.step"
        class="relative"
      >
        <!-- Step Number Circle -->
        <div class="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10">
          {{ step.step }}
        </div>

        <!-- Step Card -->
        <div class="p-6 rounded-xl border border-border/30 bg-muted/30 h-full pt-8">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <SafeIcon :name="step.iconName" :size="24" class="text-accent" />
            </div>
            <h3 class="font-semibold text-foreground">{{ step.title_ar }}</h3>
          </div>
          <p class="text-sm text-foreground/80 leading-relaxed">
            {{ step.description_ar }}
          </p>
          <p class="text-xs text-muted-foreground mt-3 italic">
            {{ step.title_en }}: {{ step.description_en }}
          </p>
        </div>

        <!-- Connector Line (Hidden on last) -->
        <div
          v-if="step.step < product.howToUse.length"
          class="hidden md:block absolute top-full left-1/2 w-0.5 h-6 bg-border/30 -translate-x-1/2"
        />
      </div>
    </div>
  </div>
</template>
