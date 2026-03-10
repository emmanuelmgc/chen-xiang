
<script setup lang="ts">
import { B2B_SERVICE_PACKAGES } from '@/data/b2b_content'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon.vue'

const packages = B2B_SERVICE_PACKAGES

const packageHighlights = {
  basic: false,
  standard: false,
  tailored: true,
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card
      v-for="pkg in packages"
      :key="pkg.id"
      class="border border-border/30 relative overflow-hidden transition-all duration-300"
      :class="packageHighlights[pkg.id as keyof typeof packageHighlights]
        ? 'ring-2 ring-primary shadow-card md:scale-105'
        : 'hover:shadow-card hover:border-primary/30'"
    >
      <!-- Recommended Badge -->
      <div v-if="packageHighlights[pkg.id as keyof typeof packageHighlights]" class="absolute top-4 right-4">
        <Badge class="bg-primary text-primary-foreground">
          الأكثر شيوعاً
        </Badge>
      </div>
      
      <CardHeader class="pt-8">
        <CardTitle class="text-2xl text-foreground">
          {{ pkg.name_ar }}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <ul class="space-y-3">
          <li
            v-for="(deliverable, index) in pkg.deliverables_ar"
            :key="index"
            class="flex items-start gap-3"
          >
            <SafeIcon name="Check" :size="20" class="text-accent flex-shrink-0 mt-0.5" />
            <span class="text-muted-foreground">{{ deliverable }}</span>
          </li>
        </ul>
        
        <!-- CTA Button -->
        <button
          class="w-full mt-8 py-3 px-4 rounded-lg font-bold transition-all duration-300"
          :class="packageHighlights[pkg.id as keyof typeof packageHighlights]
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'bg-secondary text-foreground hover:bg-secondary/80'"
        >
          اختر هذه الباقة
        </button>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
/* Package card hover effect */
:deep(.card) {
  transition: all 0.3s ease;
}

:deep(.card:hover) {
  transform: translateY(-4px);
}

/* Recommended package scale effect */
@media (min-width: 768px) {
  :deep(.card.ring-2) {
    transform: scale(1.05);
  }
}
</style>
