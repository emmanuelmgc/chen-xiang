<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { POLICY_CONTENTS } from '@/data/legal_policies'
import { useLanguage } from '@/lib/useLanguage'

const { locale, initLanguage } = useLanguage()

interface Props {
  policyKey: 'privacy' | 'terms' | 'safety'
}

const props = defineProps<Props>()

const policy = computed(() => POLICY_CONTENTS[props.policyKey])

const title = computed(() => {
  if (!policy.value) return ''
  return locale.value === 'ar' ? policy.value.title_ar : policy.value.title_en
})

const content = computed(() => {
  if (!policy.value) return ''
  return locale.value === 'ar' ? policy.value.content_ar : policy.value.content_en
})

onMounted(() => {
  initLanguage()
})
</script>

<template>
  <article v-if="policy" class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold text-foreground mb-8">{{ title }}</h1>
    <div
      class="prose prose-slate dark:prose-invert max-w-none
        prose-headings:text-foreground prose-headings:font-semibold
        prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
        prose-p:text-muted-foreground prose-p:leading-relaxed
        prose-li:text-muted-foreground prose-li:leading-relaxed
        prose-ol:space-y-2 prose-ol:my-4
        [&_.font-bold]:text-foreground [&_.font-bold]:font-semibold"
      v-html="content"
    />
  </article>
  <div v-else class="text-center py-16 text-muted-foreground">
    {{ locale === 'ar' ? 'المحتوى غير متوفر حالياً' : 'Content not available at this time' }}
  </div>
</template>
