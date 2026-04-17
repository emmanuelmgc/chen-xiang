
<script setup lang="ts">
import type { BrandValueModel } from '@/data/brand_story'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()
initLanguage()

interface Props {
  value: BrandValueModel
}

defineProps<Props>()
</script>

<template>
  <Card class="h-full border border-border/30 hover:shadow-card transition-shadow duration-300">
    <CardHeader class="text-center">
      <!-- Icon -->
      <div class="flex justify-center mb-4">
        <div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
          <SafeIcon :name="value.iconName" :size="32" class="text-accent" />
        </div>
      </div>
      
      <!-- Title -->
      <CardTitle class="text-xl md:text-2xl text-foreground">
        {{ value.title_ar }}
      </CardTitle>
      <CardDescription class="text-sm text-muted-foreground mt-2">
        {{ value.title_en }}
      </CardDescription>
    </CardHeader>
    
    <CardContent>
      <!-- Description -->
      <p class="text-base text-foreground leading-relaxed mb-3">
        {{ value.description_ar }}
      </p>
      <p class="text-sm text-muted-foreground leading-relaxed">
        {{ value.description_en }}
      </p>
    </CardContent>
  </Card>
</template>
