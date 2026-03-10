
<script setup lang="ts">
import { B2B_VALUE_PROPS } from '@/data/b2b_content'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const valuePropItems = B2B_VALUE_PROPS
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card
      v-for="(prop, index) in valuePropItems"
      :key="index"
      class="border border-border/30 hover:shadow-card transition-all duration-300 hover:border-primary/30"
    >
      <CardHeader>
        <div class="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
          <SafeIcon :name="prop.iconName" :size="28" class="text-accent" />
        </div>
        <CardTitle class="text-xl text-foreground">
          {{ prop.title_ar }}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription class="text-base text-muted-foreground leading-relaxed">
          {{ prop.description_ar }}
        </CardDescription>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
/* Hover effect for cards */
:deep(.card) {
  transition: all 0.3s ease;
}

:deep(.card:hover) {
  transform: translateY(-4px);
}
</style>
