<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import HelpCenterHero from './HelpCenterHero.vue'
import CategoryNav from './CategoryNav.vue'
import ArticleList from './ArticleList.vue'
import ArticleDetail from './ArticleDetail.vue'
import { useLanguage } from '@/lib/useLanguage'

const { initLanguage } = useLanguage()

const selectedCategoryId = ref<string | null>(null)
const activeArticleId = ref<string | null>(null)

function readArticleFromUrl(): string | null {
  if (typeof window !== 'undefined') {
    return new URLSearchParams(window.location.search).get('article')
  }
  return null
}

function updateUrl(articleId: string | null) {
  if (typeof window === 'undefined') return
  const url = new URL(window.location.href)
  if (articleId) {
    url.searchParams.set('article', articleId)
  } else {
    url.searchParams.delete('article')
  }
  window.history.replaceState({}, '', url.toString())
}

function showArticle(articleId: string) {
  activeArticleId.value = articleId
  updateUrl(articleId)
}

function goBack() {
  activeArticleId.value = null
  updateUrl(null)
}

onMounted(() => {
  initLanguage()
  activeArticleId.value = readArticleFromUrl()
})

// Handle browser back/forward
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    activeArticleId.value = readArticleFromUrl()
  })
}
</script>

<template>
  <div>
    <HelpCenterHero />

    <!-- Article Detail View -->
    <ArticleDetail
      v-if="activeArticleId"
      :article-id="activeArticleId"
      @back="goBack"
    />

    <!-- Category + List View -->
    <template v-else>
      <CategoryNav
        :selected-category-id="selectedCategoryId"
        @update:selected-category-id="selectedCategoryId = $event"
      />
      <ArticleList
        :selected-category-id="selectedCategoryId"
      />
    </template>
  </div>
</template>
