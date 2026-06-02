<script setup lang="ts">
import { computed } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { useLanguage } from '@/lib/useLanguage'
import { HELP_ARTICLES, HELP_CATEGORIES, type HelpArticleSummaryModel } from '@/data/help_center'

const props = defineProps<{
  articleId: string
}>()

const emit = defineEmits<{
  'back': []
}>()

const { locale } = useLanguage()

const article = computed<HelpArticleSummaryModel | undefined>(() => {
  return HELP_ARTICLES.find(a => a.id === props.articleId)
})

const categoryTitle = computed(() => {
  if (!article.value || article.value.categoryIds.length === 0) return ''
  const category = HELP_CATEGORIES.find(c => c.id === article.value!.categoryIds[0])
  if (!category) return ''
  return locale.value === 'ar' ? category.title_ar : category.title_en
})

const notFound = computed(() => !article.value)
</script>

<template>
  <section class="py-8 md:py-12 bg-background min-h-[60vh]">
    <div class="container mx-auto px-4 max-w-3xl">
      <!-- Back Button -->
      <button
        class="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 group"
        @click="emit('back')"
      >
        <SafeIcon
          :name="locale === 'ar' ? 'ArrowRight' : 'ArrowLeft'"
          :size="16"
          class="transition-transform group-hover:-translate-x-1"
        />
        {{ locale === 'ar' ? 'العودة إلى مركز المساعدة' : 'Back to Help Center' }}
      </button>

      <!-- Not Found State -->
      <Card v-if="notFound" class="text-center py-12">
        <CardContent>
          <SafeIcon name="FileQuestion" :size="48" class="text-muted-foreground mx-auto mb-4" />
          <CardTitle class="text-xl mb-2">
            {{ locale === 'ar' ? 'المقال غير موجود' : 'Article Not Found' }}
          </CardTitle>
          <CardDescription>
            {{ locale === 'ar'
              ? 'عذراً، لم نتمكن من العثور على المقال الذي تبحث عنه'
              : 'Sorry, we could not find the article you are looking for'
            }}
          </CardDescription>
          <Button class="mt-4" variant="outline" @click="emit('back')">
            {{ locale === 'ar' ? 'العودة' : 'Go Back' }}
          </Button>
        </CardContent>
      </Card>

      <!-- Article Content -->
      <template v-else-if="article">
        <Card>
          <CardHeader class="pb-6 border-b">
            <div v-if="categoryTitle" class="mb-3">
              <span class="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {{ categoryTitle }}
              </span>
            </div>
            <CardTitle class="text-2xl md:text-3xl leading-snug">
              {{ locale === 'ar' ? article.title_ar : article.title_en }}
            </CardTitle>
            <CardDescription class="text-base mt-2">
              {{ locale === 'ar' ? article.summary_ar : article.summary_en }}
            </CardDescription>
          </CardHeader>

          <CardContent class="py-8">
            <div class="prose prose-neutral dark:prose-invert max-w-none text-foreground/90 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {{ locale === 'ar' ? article.content_ar : article.content_en }}
            </div>
          </CardContent>

          <CardFooter class="border-t pt-6 flex flex-col sm:flex-row gap-3">
            <Button variant="outline" class="w-full sm:w-auto" @click="emit('back')">
              <SafeIcon
                :name="locale === 'ar' ? 'ArrowRight' : 'ArrowLeft'"
                :size="16"
                :class="locale === 'ar' ? 'ml-2' : 'mr-2'"
              />
              {{ locale === 'ar' ? 'العودة إلى المقالات' : 'Back to Articles' }}
            </Button>

            <Button
              variant="default"
              class="w-full sm:w-auto"
              as="a"
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SafeIcon name="MessageCircle" :size="16" :class="locale === 'ar' ? 'ml-2' : 'mr-2'" />
              {{ locale === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp' }}
            </Button>
          </CardFooter>
        </Card>
      </template>
    </div>
  </section>
</template>
