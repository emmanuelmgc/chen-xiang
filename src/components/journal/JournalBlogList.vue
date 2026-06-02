<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useLanguage } from '@/lib/useLanguage'
import { BLOG_POSTS, type BlogPost } from '@/data/blog_posts'

const { locale, initLanguage } = useLanguage()

const blogPosts = ref<BlogPost[]>(BLOG_POSTS)

onMounted(() => {
  initLanguage()
})

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  if (locale.value === 'ar') {
    return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })
  }
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Page Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {{ locale === 'ar' ? 'المجلة' : 'Journal' }}
      </h1>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        {{ locale === 'ar' ? 'اكتشف قصصنا، نصائحنا، وأحدث الأخبار من عالم العود والبخور.' : 'Discover our stories, tips, and the latest news from the world of Oud and incense.' }}
      </p>
    </div>

    <!-- Blog Posts Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="post in blogPosts"
        :key="post.id"
        class="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover-scale"
      >
        <!-- Cover Image -->
        <div class="relative aspect-[16/9] overflow-hidden bg-muted">
          <img
            :src="post.coverImage"
            :alt="locale === 'ar' ? post.title_ar : post.title_en"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <!-- Content -->
        <div class="p-6">
          <!-- Date and Read Time -->
          <div class="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span>{{ formatDate(post.date) }}</span>
            <span>•</span>
            <span>{{ locale === 'ar' ? post.readTime_ar : post.readTime_en }}</span>
          </div>

          <!-- Title -->
          <h2 class="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {{ locale === 'ar' ? post.title_ar : post.title_en }}
          </h2>

          <!-- Excerpt -->
          <p class="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {{ locale === 'ar' ? post.excerpt_ar : post.excerpt_en }}
          </p>

          <!-- Author and Read More -->
          <div class="flex items-center justify-between pt-4 border-t border-border/30">
            <span class="text-sm text-muted-foreground">
              {{ locale === 'ar' ? post.author_ar : post.author_en }}
            </span>
            <button class="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              {{ locale === 'ar' ? 'اقرأ المزيد' : 'Read More' }} →
            </button>
          </div>
        </div>
      </article>
    </div>

    <!-- Empty State (if no posts) -->
    <div v-if="blogPosts.length === 0" class="text-center py-20">
      <p class="text-muted-foreground text-lg">
        {{ locale === 'ar' ? 'لا توجد مقالات حالياً. ترقبوا المزيد قريباً!' : 'No articles yet. Stay tuned for more soon!' }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: translateY(-4px);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
