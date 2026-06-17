<script setup lang="ts">
import { computed } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'
import { HELP_ARTICLES } from '@/data/help_center'

const props = defineProps<{
  selectedCategoryId: string | null
}>()

const { locale } = useLanguage()

const filteredArticles = computed(() => {
  if (!props.selectedCategoryId) return HELP_ARTICLES
  return HELP_ARTICLES.filter(a => a.categoryIds.includes(props.selectedCategoryId))
})

function getArticleUrl(articleId: string): string {
  return `/help-center.html?article=${articleId}`
}
</script>

<template>
  <section class="py-8 md:py-12 bg-muted/30">
    <div class="container mx-auto px-4">
      <div v-if="filteredArticles.length === 0" class="text-center py-16">
        <SafeIcon name="FileQuestion" :size="48" class="text-muted-foreground mx-auto mb-4" />
        <h3 class="text-lg font-medium text-foreground mb-2">
          {{ locale === 'ar' ? 'لا توجد مقالات' : 'No Articles Found' }}
        </h3>
        <p class="text-muted-foreground">
          {{ locale === 'ar'
            ? 'لا توجد مقالات متاحة في هذه الفئة حالياً'
            : 'No articles available in this category yet'
          }}
        </p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card
          v-for="article in filteredArticles"
          :key="article.id"
          class="group hover:shadow-md transition-all duration-200 flex flex-col"
        >
          <CardHeader class="pb-3">
            <CardTitle class="text-lg leading-snug group-hover:text-primary transition-colors">
              {{ locale === 'ar' ? article.title_ar : article.title_en }}
            </CardTitle>
            <CardDescription class="text-sm line-clamp-2">
              {{ locale === 'ar' ? article.summary_ar : article.summary_en }}
            </CardDescription>
          </CardHeader>

          <CardContent class="pt-0 mt-auto">
            <div class="flex items-center justify-between">
              <span class="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                {{ locale === 'ar' ? 'مقالة' : 'Article' }}
              </span>
              <Button
                variant="ghost"
                size="sm"
                class="group/btn"
                as="a"
                :href="getArticleUrl(article.id)"
              >
                {{ locale === 'ar' ? 'اقرأ المزيد' : 'Read More' }}
                <SafeIcon
                  :name="locale === 'ar' ? 'ArrowLeft' : 'ArrowRight'"
                  :size="16"
                  class="transition-transform group-hover/btn:translate-x-1"
                  :class="locale === 'ar' ? 'mr-1' : 'ml-1'"
                />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
