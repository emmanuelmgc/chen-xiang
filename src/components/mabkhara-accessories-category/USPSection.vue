
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { PRODUCT_CATEGORIES } from '@/data/products'

const isClient = ref(true)

const categoryData = PRODUCT_CATEGORIES['mabkhara_accessory']

onMounted(() => {
  isClient.value = false
  
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <section class="w-full py-12 md:py-16 px-4 md:px-8 bg-background">
    <div class="container mx-auto">
      <!-- Section Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        لماذا تختار منتجاتنا؟
      </h2>

      <!-- USP Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(usp, index) in categoryData.usps"
          :key="usp.title_ar"
          class="flex flex-col items-center text-center p-6 rounded-lg border border-border/20 bg-card transition-all duration-500"
          :class="isClient ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          :style="{ transitionDelay: isClient ? `${index * 100}ms` : '0ms' }"
        >
          <!-- Icon -->
          <div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <SafeIcon 
              :name="usp.iconName" 
              :size="32" 
              class="text-accent"
            />
          </div>

          <!-- Title -->
          <h3 class="text-lg font-semibold text-foreground mb-2">
            {{ usp.title_ar }}
          </h3>

          <!-- Description (optional) -->
          <p class="text-sm text-muted-foreground">
            {{ usp.title_en }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
