<script setup lang="ts">
import { computed } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'
import { HELP_CATEGORIES } from '@/data/help_center'

const props = defineProps<{
  selectedCategoryId: string | null
}>()

const emit = defineEmits<{
  'update:selectedCategoryId': [id: string | null]
}>()

const { locale } = useLanguage()

const categories = computed(() => HELP_CATEGORIES)

function selectCategory(id: string | null) {
  emit('update:selectedCategoryId', id === props.selectedCategoryId ? null : id)
}
</script>

<template>
  <section class="py-8 md:py-12 bg-background">
    <div class="container mx-auto px-4">
      <h2 class="text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
        {{ locale === 'ar' ? 'تصفح حسب الفئة' : 'Browse by Category' }}
      </h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        <Card
          v-for="category in categories"
          :key="category.id"
          class="cursor-pointer transition-all duration-200 hover:shadow-md border-2"
          :class="selectedCategoryId === category.id
            ? 'border-primary bg-primary/5 shadow-sm'
            : 'border-transparent hover:border-primary/30'"
          @click="selectCategory(category.id)"
        >
          <CardContent class="p-4 md:p-5 flex flex-col items-center text-center gap-3">
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
              :class="selectedCategoryId === category.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'"
            >
              <SafeIcon :name="category.iconName" :size="24" />
            </div>
            <span
              class="text-sm font-medium leading-tight transition-colors"
              :class="selectedCategoryId === category.id ? 'text-primary' : 'text-foreground'"
            >
              {{ locale === 'ar' ? category.title_ar : category.title_en }}
            </span>
          </CardContent>
        </Card>
      </div>

      <!-- Show All / Clear Filter -->
      <div v-if="selectedCategoryId" class="flex justify-center mt-4">
        <button
          class="text-sm text-primary hover:underline flex items-center gap-1"
          @click="selectCategory(null)"
        >
          <SafeIcon name="X" :size="14" />
          {{ locale === 'ar' ? 'عرض جميع المقالات' : 'Show All Articles' }}
        </button>
      </div>
    </div>
  </section>
</template>
